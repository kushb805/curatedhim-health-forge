
import { Link } from "react-router-dom";

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 to-brand-dark z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Health Journey?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of men who have transformed their health and confidence with personalized plans and expert support.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue px-8 py-3 rounded-md transition-all duration-300 font-medium text-lg w-full md:w-auto text-center"
            >
              Get Started Today
            </Link>
            
            <Link
              to="/contact"
              className="bg-transparent text-foreground border border-foreground/20 px-8 py-3 rounded-md hover:bg-foreground/5 transition-all duration-300 font-medium text-lg w-full md:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
