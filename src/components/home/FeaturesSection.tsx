
import { Clipboard, Calendar, MessageSquare, Check, CalendarCheck, ChartBar, ChartLine } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      id: 1,
      title: "Personalized Weekly Plans",
      description: "Tailored actions for nutrition, exercise, supplements, and habits.",
      icon: CalendarCheck
    },
    {
      id: 2,
      title: "Chat with The Curator",
      description: "Expert AI coach available 24/7 for questions, motivation, and tips.",
      icon: MessageSquare
    },
    {
      id: 3,
      title: "Insights Dashboard",
      description: "Visualize your progress and milestones with intuitive charts and graphs.",
      icon: ChartBar
    },
    {
      id: 4,
      title: "Resource Library",
      description: "Curated articles, recipes, and supplement guides for men's health.",
      icon: Clipboard
    },
    {
      id: 5,
      title: "Interactive Journal",
      description: "Track your journey and let The Curator personalize your next plan.",
      icon: Calendar
    },
    {
      id: 6,
      title: "Progress Tracking",
      description: "Monitor your improvements and stay motivated with visual progress tracking.",
      icon: ChartLine
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-t from-brand-dark to-brand-dark/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your health and wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-brand-cardBg border border-transparent hover:border-brand-gold/30 rounded-lg p-6 card-hover"
            >
              <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-gold" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
              
              <div className="mt-4 flex items-center text-brand-gold text-sm">
                <Check className="w-4 h-4 mr-1" />
                <span>Included in all plans</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
