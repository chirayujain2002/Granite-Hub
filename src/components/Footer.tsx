
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a2333] to-[#0f1526] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Buildify</span>
            </div>
            <p className="text-gray-400 text-sm">
              Sourcing luxury, delivering trust – B2B excellence in every slab.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                <p>GIDC Industrial Area, Ahmedabad, Gujarat</p>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <p>+91-90000-00000</p>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                <p>contact@buildify.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Products</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Projects</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Get Quote</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="text-gray-400 flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Marble</span></li>
              <li><span className="text-gray-400 flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Granite</span></li>
              <li><span className="text-gray-400 flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Tiles</span></li>
              <li><span className="text-gray-400 flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Taps & Faucets</span></li>
              <li><span className="text-gray-400 flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Sanitaryware</span></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">Business</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/register-as-partner" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Partner With Us</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Login / Register</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-70"></span>Contact</Link></li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-medium mb-4 text-gray-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/30 text-blue-400 hover:bg-blue-800/50 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/30 text-blue-400 hover:bg-blue-800/50 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/30 text-blue-400 hover:bg-blue-800/50 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/30 text-blue-400 hover:bg-blue-800/50 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p className="mb-2">&copy; 2024 Buildify. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-xs">
            <Link to="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
            <Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-blue-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
