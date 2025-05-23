
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = {
    marble: [
      { name: "Italian White Marble", finish: "Polished", size: "800x1200 mm", moq: "20 slabs", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop" },
      { name: "Rajasthan Pink Marble", finish: "Honed", size: "600x900 mm", moq: "15 slabs", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop" },
      { name: "Carrara Marble", finish: "Polished", size: "1000x1200 mm", moq: "25 slabs", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=200&fit=crop" },
      { name: "Black Galaxy Marble", finish: "Polished", size: "800x800 mm", moq: "30 slabs", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop" },
    ],
    granite: [
      { name: "Kashmir White Granite", finish: "Polished", size: "800x1200 mm", moq: "18 slabs", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop" },
      { name: "Black Pearl Granite", finish: "Flamed", size: "600x1200 mm", moq: "22 slabs", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=200&fit=crop" },
      { name: "Red Dragon Granite", finish: "Polished", size: "1000x1000 mm", moq: "20 slabs", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop" },
      { name: "Blue Bahia Granite", finish: "Honed", size: "800x900 mm", moq: "25 slabs", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop" },
    ],
    tiles: [
      { name: "Porcelain Floor Tiles", finish: "Matte", size: "600x600 mm", moq: "100 pieces", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=200&fit=crop" },
      { name: "Ceramic Wall Tiles", finish: "Glossy", size: "300x450 mm", moq: "150 pieces", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop" },
      { name: "Vitrified Tiles", finish: "Polished", size: "800x800 mm", moq: "80 pieces", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop" },
      { name: "Designer Mosaic Tiles", finish: "Textured", size: "300x300 mm", moq: "200 pieces", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=200&fit=crop" },
    ],
    taps: [
      { name: "Premium Kitchen Tap", finish: "Chrome", size: "Standard", moq: "10 pieces", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
      { name: "Bathroom Basin Mixer", finish: "Brushed Steel", size: "Medium", moq: "15 pieces", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop" },
      { name: "Shower Mixer Set", finish: "Matt Black", size: "Complete Set", moq: "8 sets", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
      { name: "Garden Tap", finish: "Brass", size: "Standard", moq: "20 pieces", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop" },
    ],
    sanitaryware: [
      { name: "Wall Hung Toilet", finish: "White", size: "Standard", moq: "5 pieces", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop" },
      { name: "Pedestal Wash Basin", finish: "White", size: "Medium", moq: "8 pieces", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
      { name: "Designer Bathtub", finish: "Acrylic", size: "1700x750 mm", moq: "3 pieces", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop" },
      { name: "Shower Enclosure", finish: "Tempered Glass", size: "900x900 mm", moq: "6 pieces", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
    ],
  };

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
          <div className="space-y-1 text-sm text-gray-600 mb-4">
            <p><span className="font-medium">Finish:</span> {product.finish}</p>
            <p><span className="font-medium">Size:</span> {product.size}</p>
            <p><span className="font-medium">MOQ:</span> {product.moq}</p>
          </div>
          <Link to="/quote">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Request Quote
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Your One-Stop Destination for Building Materials in Bulk
          </p>
          <p className="text-lg text-gray-400">
            Premium quality materials sourced from verified suppliers
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="marble" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="marble">Marble</TabsTrigger>
              <TabsTrigger value="granite">Granite</TabsTrigger>
              <TabsTrigger value="tiles">Tiles</TabsTrigger>
              <TabsTrigger value="taps">Taps & Faucets</TabsTrigger>
              <TabsTrigger value="sanitaryware">Sanitaryware</TabsTrigger>
            </TabsList>

            {Object.entries(productData).map(([category, products]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 capitalize">{category}</h2>
                  <p className="text-lg text-gray-600">
                    Premium {category} collection for your construction needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Requirements?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for specialized products and bulk pricing
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
