
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, Package, ShieldCheck, Award, Star, ArrowRight, Store, UserPlus } from "lucide-react";

const Index = () => {
  const productCategories = [
    { name: "Marble", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop", description: "Premium marble slabs" },
    { name: "Granite", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop", description: "Durable granite stone" },
    { name: "Tiles", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=200&fit=crop", description: "Modern ceramic tiles" },
    { name: "Taps & Faucets", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop", description: "Quality fixtures" },
    { name: "Sanitaryware", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop", description: "Complete bathroom solutions" },
  ];

  const whyChooseUs = [
    { icon: Truck, title: "Fast Delivery", description: "Quick turnaround times for all orders" },
    { icon: Package, title: "Bulk Ordering", description: "Special pricing for large quantities" },
    { icon: ShieldCheck, title: "Verified Suppliers", description: "Only trusted, quality suppliers" },
    { icon: Award, title: "Consistent Quality", description: "Premium materials every time" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="mb-6 animate-fade-in">
              Premium Marble & Granite<br />
              <span className="text-blue-100">for Every Build</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Sourcing luxury, delivering trust – B2B excellence in every slab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg">
                  Explore Our Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/quote">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Buildify Mini Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Buildify</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We help builders, architects, and retailers easily source high-quality marble, granite, and more — delivered with speed and trust.
          </p>
        </div>
      </section>

      {/* Top Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Top Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden border-0 shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Buildify */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Why Choose Buildify</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/80 transition-colors">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section - New */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-primary mb-4">Become a Partner</h2>
              <p className="text-lg text-gray-700 mb-6">
                Are you a seller of premium building materials? Join our network of verified suppliers and expand your business reach.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full mr-4">
                    <Store className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Access to Wide Network</h4>
                    <p className="text-gray-600">Connect with contractors, architects, and builders across India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full mr-4">
                    <UserPlus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Simple Onboarding</h4>
                    <p className="text-gray-600">Easy registration process and dedicated support</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/register-as-partner">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
                    Register as Partner
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1577971132997-f2779a5f5c4e?q=80&w=600&h=400&fit=crop" 
                alt="Partner with Buildify" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Trusted By</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-4">
                  "Buildify made our bulk ordering simple and reliable. The quality of materials is consistently excellent, and their delivery times are unmatched."
                </blockquote>
                <cite className="text-primary font-semibold">— Interior Studio XYZ</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Get premium building materials delivered to your site</p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg">
              Get Your Quote Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
