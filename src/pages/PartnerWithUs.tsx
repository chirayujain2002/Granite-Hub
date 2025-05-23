
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Shield, Award } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const PartnerWithUs = () => {
  const { user } = useAuth();
  
  const benefits = [
    {
      icon: TrendingUp,
      title: "Expand Your Reach",
      description: "Access a wider customer base and increase your sales through our established network"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get personalized assistance from our partner success team to maximize your growth"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Guaranteed payment processing with transparent terms and conditions"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Be part of a trusted platform known for premium quality materials"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Buildify</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Join India's leading B2B marketplace for building materials and grow your business
          </p>
          {user ? (
            <Link to="/seller-stock-upload">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Send Your Stock
              </Button>
            </Link>
          ) : (
            <div className="space-y-4">
              <Link to="/login">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Login to Send Stock
                </Button>
              </Link>
              <p className="text-sm text-green-100">
                Don't have an account yet? <Link to="/register" className="underline">Register here</Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Sell on Buildify */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Sell on Buildify?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of suppliers who trust Buildify to connect them with quality buyers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner Requirements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Look For:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Verified business registration and licenses
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Consistent inventory and supply capability
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Quality certifications for products
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Competitive pricing structure
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Reliable delivery and logistics support
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Access to verified bulk buyers
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Marketing and promotional support
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Dedicated account management
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Transparent payment terms
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Technology platform for order management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Since joining Buildify, our monthly sales have increased by 300%. The platform connects us with serious buyers who value quality."
                </blockquote>
                <cite className="text-green-600 font-semibold">
                  — Rajesh Marble Industries, Gujarat
                </cite>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Buildify's support team helped us streamline our operations. We now serve customers across 10 states efficiently."
                </blockquote>
                <cite className="text-green-600 font-semibold">
                  — Premium Granite Suppliers, Rajasthan
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Submit your stock details and our team will review your application
          </p>
          {user ? (
            <Link to="/seller-stock-upload">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Submit Your Stock Now
              </Button>
            </Link>
          ) : (
            <div className="space-y-4">
              <Link to="/register">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Register to Get Started
                </Button>
              </Link>
              <p className="text-sm text-green-100">
                Already have an account? <Link to="/login" className="underline">Login here</Link>
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
