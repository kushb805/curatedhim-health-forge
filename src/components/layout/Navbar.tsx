
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/e17aa85c-f227-4690-8609-105ccd7c9463.png"
            alt="CuratedHim Logo"
            className="h-16" // Increased logo size by ~60%
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-foreground hover:text-brand-gold transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-foreground hover:text-brand-gold transition-colors font-medium"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-brand-gold transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-foreground hover:text-brand-gold transition-colors font-medium"
          >
            Features
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-foreground hover:text-brand-gold transition-colors font-medium hidden md:block"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-brand-blue text-brand-gold border border-brand-gold px-4 py-2 rounded-md hover:bg-brand-gold hover:text-brand-blue transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
