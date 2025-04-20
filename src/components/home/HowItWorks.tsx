
import { useState } from "react";
import { Clipboard, Calendar, MessageSquare } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  detailedInfo: string;
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "Take Our Quick Assessment",
      description: "Answer a few questions so we can understand your goals and needs.",
      icon: Clipboard,
      detailedInfo: "Our personalized assessment takes into account your current health status, goals, lifestyle factors, and preferences to create a truly tailored experience. It takes just 5 minutes and gives our system everything it needs to craft your perfect plan."
    },
    {
      id: 2,
      title: "Get Your Curated Plan",
      description: "Receive a personalized roadmap with daily actions, nutrition, and expert tips.",
      icon: Calendar,
      detailedInfo: "Within minutes of completing your assessment, you'll receive your custom plan. It includes daily action items, nutrition guidance, supplement recommendations, workout routines, and lifestyle adjustments—all designed specifically for your body and goals."
    },
    {
      id: 3,
      title: "Track Progress & Get Support",
      description: "Use your dashboard to log progress, chat with The Curator, and adjust your plan as you grow.",
      icon: MessageSquare,
      detailedInfo: "Your interactive dashboard makes it easy to track your journey. Log your progress, see your improvements visually, and get real-time support from The Curator, our AI coach that's available 24/7 to answer questions, provide motivation, and help you stay on track."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our straightforward process gets you from assessment to action in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`relative group p-8 rounded-lg card-hover cursor-pointer ${
                activeStep === step.id 
                  ? "bg-brand-cardBg border border-brand-gold/30" 
                  : "bg-brand-cardBg/50 border border-transparent"
              }`}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold/80 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-brand-gold group-hover:text-brand-blue" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  <span className="text-brand-gold mr-2">{step.id}.</span> {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                
                {activeStep === step.id && (
                  <div className="mt-4 text-sm text-muted-foreground bg-brand-dark/50 p-4 rounded-md border border-brand-gold/20 animate-fade-in">
                    {step.detailedInfo}
                  </div>
                )}
                
                <div className="text-brand-gold mt-4 text-sm">
                  {activeStep === step.id ? "Click to collapse" : "Click to learn more"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
