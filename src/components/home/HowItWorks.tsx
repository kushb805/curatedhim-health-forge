
import { useState, useEffect, useRef } from "react";
import { Clipboard, Calendar, MessageSquare } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

interface Step {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: React.FC<{ className?: string }>;
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const parallaxBg = useParallax(0.2);
  
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const steps: Step[] = [
    {
      id: 1,
      title: "Take Our Quick Assessment",
      shortDescription: "Answer a few questions so we can understand your goals and needs.",
      detailedDescription: "Answer a few questions about your health goals, lifestyle, and preferences. This helps us craft a plan that's truly yours. Our comprehensive assessment covers all aspects of men's health to create your personalized roadmap to wellness.",
      icon: Clipboard
    },
    {
      id: 2,
      title: "Get Your Curated Plan",
      shortDescription: "Receive a personalized roadmap with daily actions, nutrition, and expert tips.",
      detailedDescription: "Receive a science-backed, personalized roadmap with actionable daily tasks, nutrition tips, and expert guidance. Your plan is designed specifically for your body, goals, and lifestyle, making it easy to follow and effective.",
      icon: Calendar
    },
    {
      id: 3,
      title: "Track Progress & Get Support",
      shortDescription: "Use your dashboard to log progress, chat with The Curator, and adjust your plan as you grow.",
      detailedDescription: "Log your daily progress, chat with The Curator for instant advice, and watch your health improve week by week. Our interactive platform ensures you're never alone on your health journey, with 24/7 guidance and motivation.",
      icon: MessageSquare
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div 
        ref={parallaxBg} 
        className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 to-brand-blue/30 z-0"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-blue/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our straightforward process gets you from assessment to action in minutes.
          </p>
        </div>
        
        <div ref={stepsRef} className="max-w-5xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`relative reveal-on-scroll step-card ${
                activeStep === step.id 
                  ? "bg-brand-cardBg border border-brand-gold/30" 
                  : "bg-brand-cardBg/80 border border-transparent hover:border-brand-gold/20"
              } rounded-xl p-8 shadow-lg transition-all duration-300`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Step icon and number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-brand-gold" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue font-bold">
                      {step.id}
                    </div>
                  </div>
                </div>
                
                {/* Step content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                  
                  <p className="text-lg text-muted-foreground mb-4">
                    {step.shortDescription}
                  </p>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeStep === step.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-brand-gold/20 mt-4">
                      <p className="text-foreground">
                        {step.detailedDescription}
                      </p>
                      
                      <button 
                        className="mt-6 px-6 py-2 bg-brand-blue/80 text-brand-gold border border-brand-gold/30 rounded-md hover:bg-brand-gold hover:text-brand-blue transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-brand-gold text-sm">
                    {activeStep === step.id ? "Click to collapse" : "Click to expand"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
