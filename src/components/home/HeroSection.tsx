
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const x = (window.innerWidth - e.pageX) / 100;
      const y = (window.innerHeight - e.pageY) / 100;
      
      parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Parallax background elements */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-blue/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl animate-float-delayed"></div>
      </div>
      
      {/* Small floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-12 h-12 rounded-md border border-brand-gold/30 rotate-12 animate-float"></div>
          <div className="absolute top-2/3 right-1/4 w-16 h-16 rounded-full border-2 border-brand-blue/30 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-8 rounded-md border border-brand-gold/20 -rotate-12 animate-float"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Personalized Path to Men's
            <span className="text-gradient ml-2">Health & Confidence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            CuratedHim crafts science-backed plans, daily actions, and expert support—just for you.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="bg-brand-blue hover:bg-brand-blue/90 text-brand-gold border border-brand-gold px-8 py-3 rounded-md transition-all duration-300 font-medium text-lg w-full md:w-auto text-center"
            >
              Get Started
            </Link>
            
            <Link
              to="/learn-more"
              className="bg-transparent text-foreground border border-foreground/20 px-8 py-3 rounded-md hover:bg-foreground/5 transition-all duration-300 font-medium text-lg w-full md:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-gold"
        >
          <path d="M12 5v14M5 12l7 7 7-7"></path>
        </svg>
      </div>
    </section>
  );
}
