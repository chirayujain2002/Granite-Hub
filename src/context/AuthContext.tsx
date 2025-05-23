
import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

type UserRole = "user" | "partner" | "admin";

type UserContextData = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  userRole: UserRole;
  signUp: (email: string, password: string, fullName: string, isPartner?: boolean) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<UserContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<UserRole>("user");
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event);
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check if user is a partner
        if (session?.user) {
          checkUserRole(session.user.id);
        }
        
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkUserRole(session.user.id);
      }
      
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Function to check if user is a partner
  const checkUserRole = async (userId: string) => {
    try {
      // Check if user exists in partner_registrations table
      const { data: partnerData } = await supabase
        .from('partner_registrations')
        .select('id')
        .eq('user_id', userId)
        .single();
        
      if (partnerData) {
        setUserRole("partner");
      } else {
        // You could also check for admin role here
        setUserRole("user");
      }
    } catch (error) {
      console.error("Error checking user role:", error);
    }
  };

  const signUp = async (email: string, password: string, fullName: string, isPartner = false) => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          is_partner: isPartner,
        },
      },
    });
    
    if (error) throw error;
    
    if (isPartner && data?.user) {
      // Register as partner - skip email verification for partners
      try {
        await supabase.from('partner_registrations').insert({
          user_id: data.user.id,
          office_name: fullName + "'s Office", // Default office name
          owner_name: fullName,
          phone_number: "Not provided", // Default phone
          email: email,
          location: "Not provided", // Default location
          status: 'pending'
        });
        
        setUserRole("partner");
        
        // Navigate to seller stock upload page
        navigate("/seller-stock-upload");
      } catch (partnerError) {
        console.error("Partner registration error:", partnerError);
        throw partnerError;
      }
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    if (data?.user) {
      checkUserRole(data.user.id);
    }
    
    navigate("/");
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUserRole("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ session, user, isLoading, userRole, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
