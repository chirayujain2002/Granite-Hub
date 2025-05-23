
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#1e2b3a] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <Link to="/" className="text-[#3b82f6] hover:text-[#2563eb] underline font-medium">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
