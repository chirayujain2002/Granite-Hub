
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => location.pathname === href;

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header 
      className={`bg-[#1e2b3a]/95 backdrop-blur-sm border-b border-[#2d3c4d] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">Buildify</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative py-4 ${
                  isActive(item.href)
                    ? "text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/quote">
              <Button variant="outline" size="sm" className="border-[#3b82f6]/30 text-gray-200 hover:text-white hover:bg-[#2d3c4d] transition-all">
                Get Quote
              </Button>
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 transition-all">
                    <UserCircle className="h-4 w-4 mr-2" />
                    Profile
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer flex items-center">
                      <UserCircle className="h-4 w-4 mr-2" />
                      View Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/seller-stock-upload" className="cursor-pointer flex items-center">
                      <UserCircle className="h-4 w-4 mr-2" />
                      Send Stock
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer flex items-center text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 transition-all">
                  Login / Register
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-5 border-t border-[#2d3c4d] animate-fade-in">
            <div className="flex flex-col space-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                    isActive(item.href) ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-[#2d3c4d]">
                <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full border-[#3b82f6]/30 text-gray-200 hover:text-white">
                    Get Quote
                  </Button>
                </Link>
                
                {user ? (
                  <>
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 justify-start">
                        <UserCircle className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                    </Link>
                    <Link to="/seller-stock-upload" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 justify-start">
                        <UserCircle className="h-4 w-4 mr-2" />
                        Send Stock
                      </Button>
                    </Link>
                    <Button 
                      size="sm" 
                      onClick={async () => {
                        setIsMenuOpen(false);
                        await handleSignOut();
                      }}
                      variant="destructive"
                      className="w-full justify-start"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </Button>
                  </>
                ) : (
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-blue-500">
                      Login / Register
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
