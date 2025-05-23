
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    { icon: Shield, title: "Transparency", description: "Clear pricing and honest communication in every transaction" },
    { icon: Heart, title: "Commitment", description: "Dedicated to exceeding customer expectations consistently" },
    { icon: Target, title: "Innovation", description: "Leveraging technology to streamline B2B procurement" },
    { icon: Eye, title: "Reliability", description: "Dependable delivery and quality you can count on" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e2b3a] to-[#2d3c4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Buildify</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for premium building materials across India
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1e2b3a] mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Buildify was born to make premium building materials easily accessible to businesses across India. With years of industry experience, we understand the challenges faced by builders, architects, and retailers in sourcing quality materials.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We simplify B2B procurement by connecting you directly with verified suppliers, ensuring consistent quality, and providing reliable delivery services that keep your projects on track.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop" 
                alt="Premium marble" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-[#e2e8f0]">
              <CardContent>
                <div className="text-center mb-6">
                  <Eye className="w-12 h-12 text-[#3b82f6] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#1e2b3a] mb-4">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                  To be India's most trusted B2B partner for quality building materials, revolutionizing how businesses source and procure construction materials.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-[#e2e8f0]">
              <CardContent>
                <div className="text-center mb-6">
                  <Target className="w-12 h-12 text-[#3b82f6] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#1e2b3a] mb-4">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                  To simplify sourcing for growing businesses and ensure quality with every delivery, making premium building materials accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1e2b3a] mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#dbeafe] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3b82f6] transition-colors">
                  <value.icon className="w-8 h-8 text-[#3b82f6] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e2b3a] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#3b82f6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
