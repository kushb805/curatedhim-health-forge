import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="bg-brand-blue text-brand-gold border border-brand-gold px-6 py-3 rounded-md hover:bg-brand-gold hover:text-brand-blue transition-colors font-medium inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
