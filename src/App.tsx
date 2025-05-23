
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Quote from "./pages/Quote";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PartnerWithUs from "./pages/PartnerWithUs";
import RegisterAsPartner from "./pages/RegisterAsPartner";
import SellerStockUpload from "./pages/SellerStockUpload";
import NotFound from "./pages/NotFound";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import StorageBucketCheck from "./components/StorageBucketCheck";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen">
            <StorageBucketCheck />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route path="/register-as-partner" element={<RegisterAsPartner />} />
              <Route path="/seller-stock-upload" element={
                <PrivateRoute>
                  <SellerStockUpload />
                </PrivateRoute>
              } />
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingWhatsApp />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
