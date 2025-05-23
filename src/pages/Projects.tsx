
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Villa – Rajasthan White Marble",
      description: "Premium white marble flooring and wall cladding for a luxury residential project in Mumbai",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      category: "Residential",
      location: "Mumbai",
    },
    {
      title: "Corporate Lobby – Granite Cladding",
      description: "High-end granite cladding for a corporate office building in Bangalore",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop",
      category: "Commercial",
      location: "Bangalore",
    },
    {
      title: "Hotel Reception – Italian Marble",
      description: "Elegant Italian marble installation for a 5-star hotel reception area",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
      category: "Hospitality",
      location: "Delhi",
    },
    {
      title: "Shopping Mall – Designer Tiles",
      description: "Large-scale tile installation across multiple floors of a premium shopping mall",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      category: "Retail",
      location: "Pune",
    },
    {
      title: "Residential Complex – Bathroom Fittings",
      description: "Complete bathroom solutions including sanitaryware and faucets for 200+ apartments",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Residential",
      location: "Hyderabad",
    },
    {
      title: "Restaurant Chain – Kitchen Solutions",
      description: "Commercial-grade taps and sanitaryware for a popular restaurant chain expansion",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      category: "Commercial",
      location: "Chennai",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products in Action</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Real projects, real impact. See how Buildify materials elevate commercial and residential spaces.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{project.description}</p>
                      <p className="text-xs text-blue-200 font-medium">{project.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Project Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-blue-200">Sq Ft Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl text-gray-700 italic mb-6">
            "Buildify's attention to quality and timely delivery made our hotel project a huge success. The marble work exceeded our expectations."
          </blockquote>
          <cite className="text-blue-600 font-semibold text-lg">
            — Rajesh Kumar, Project Manager, Luxury Hotels Group
          </cite>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
