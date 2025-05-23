
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

type PartnerFormValues = {
  officeName: string;
  ownerName: string;
  phoneNumber: string;
  email: string;
  location: string;
};

const RegisterAsPartner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<PartnerFormValues>({
    defaultValues: {
      officeName: "",
      ownerName: "",
      phoneNumber: "",
      email: user?.email || "",
      location: "",
    }
  });

  const onSubmit = async (data: PartnerFormValues) => {
    setIsSubmitting(true);
    try {
      // Insert into partner_registrations table
      const { error } = await supabase.from("partner_registrations").insert([
        {
          office_name: data.officeName,
          owner_name: data.ownerName,
          phone_number: data.phoneNumber,
          email: data.email,
          location: data.location,
          user_id: user?.id,
        },
      ]);

      if (error) throw error;

      // Show success message and reset form
      setIsSuccess(true);
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering as a partner. We'll review your application and get back to you soon.",
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect to login if not authenticated
  if (!user) {
    navigate("/login", { state: { returnUrl: "/register-as-partner" } });
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="mb-3">Register as a Partner</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our network of trusted suppliers and expand your business reach
          </p>
        </div>
        
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle>Partner Registration Form</CardTitle>
            <CardDescription>
              Fill out the form below to register as a Buildify partner
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            {isSuccess ? (
              <div className="py-10 text-center">
                <div className="bg-green-50 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for registering as a partner. Our team will review your application and contact you soon.
                </p>
                <Button onClick={() => setIsSuccess(false)}>Register Another Partner</Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="officeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Office/Shop Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your office or shop name" 
                            {...field} 
                            required 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="ownerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Owner's Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter owner's full name" 
                            {...field} 
                            required 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="Enter phone number" 
                            {...field} 
                            required 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address (optional)</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter your email address" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location/City *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your location or city" 
                            {...field} 
                            required 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Register as Partner"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterAsPartner;
