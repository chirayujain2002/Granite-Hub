
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import PartnerStockForm from "@/components/PartnerStockForm";

const SellerStockUpload = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate("/login", { state: { returnUrl: "/seller-stock-upload" } });
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Send Stock Details</h1>
            <p className="text-lg text-gray-600">
              Share information about your available materials with potential buyers.
            </p>
          </div>
          
          <PartnerStockForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SellerStockUpload;
