
import { useEffect, useRef, useState } from "react";
import { 
  MessageSquare, 
  CalendarCheck, 
  ChartBar, 
  Clipboard, 
  Calendar, 
  Users
} from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.FC<{ className?: string }>;
}

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number>(1);
  const featureSectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const features: Feature[] = [
    {
      id: 1,
      title: "The Curator – Your AI Health Coach",
      description: "Get real-time support, motivation, and answers from your 24/7 AI coach",
      detailedDescription: "Get real-time support, motivation, and answers from The Curator, your 24/7 AI coach. Whether you need recipe ideas, encouragement, or expert advice, The Curator is always here for you. Powered by advanced AI, The Curator learns your preferences and adapts to provide the most relevant guidance for your unique journey.",
      icon: MessageSquare,
    },
    {
      id: 2,
      title: "Dynamic Personalized Plans",
      description: "Tailored actions for nutrition, exercise, supplements, and habits",
      detailedDescription: "Your health plan adapts as you log progress and journal. Each week, receive a new, science-backed roadmap tailored to your evolving needs and goals. We analyze thousands of data points to ensure your plan is always optimized for your current state and future aspirations.",
      icon: CalendarCheck,
    },
    {
      id: 3,
      title: "Daily Tracking & Progress Insights",
      description: "Visualize your progress and milestones with intuitive charts and graphs",
      detailedDescription: "Easily log your daily actions for nutrition, exercise, supplements, and habits. Visual dashboards and progress charts keep you motivated and on track. See your improvements over time and identify patterns that help you optimize your health journey.",
      icon: ChartBar,
    },
    {
      id: 4,
      title: "Resource Library",
      description: "Curated articles, recipes, and supplement guides for men's health",
      detailedDescription: "Access curated articles, recipes, supplement guides, and wellness tips—always up to date and tailored for men's health. Our expert team reviews all content to ensure it's backed by science and relevant to your specific health goals and concerns.",
      icon: Clipboard,
    },
    {
      id: 5,
      title: "Interactive Journal",
      description: "Track your journey and let The Curator personalize your next plan",
      detailedDescription: "Maintain a private journal to reflect on your journey. Your notes help The Curator personalize your next plan and offer the right support at the right time. Journaling has been proven to enhance mindfulness and accountability, two key factors in achieving lasting health improvements.",
      icon: Calendar,
    },
    {
      id: 6,
      title: "Community (Coming Soon)",
      description: "Connect with others on the same path for support and motivation",
      detailedDescription: "Connect with others on the same path. Share experiences, tips, and encouragement in a supportive, private space. Our moderated community ensures respectful interactions while fostering genuine connections between men with similar goals and challenges.",
      icon: Users,
    }
  ];

  // Handle scroll to update active feature
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      featureSectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const height = ref.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveFeature(index + 1);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="relative bg-brand-dark">
      {/* Feature navigation dots */}
      <div className="nav-dots hidden md:block">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className={`nav-dot ${activeFeature === feature.id ? 'active' : ''}`}
            onClick={() => {
              const featureRef = featureSectionRefs.current[feature.id - 1];
              if (featureRef) {
                window.scrollTo({
                  top: featureRef.offsetTop - 100,
                  behavior: 'smooth'
                });
              }
            }}
            title={feature.title}
          />
        ))}
      </div>
      
      {/* Section header */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your health and wellness journey.
          </p>
        </div>
      </div>
      
      {/* Feature sections */}
      {features.map((feature, index) => (
        <div 
          key={feature.id}
          ref={(el) => (featureSectionRefs.current[index] = el)}
          className="min-h-[90vh] py-20 bg-brand-dark relative"
          id={`feature-${feature.id}`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Icon and visual side */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex justify-center">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-brand-blue shadow-lg flex items-center justify-center">
                    <feature.icon className="w-16 h-16 lg:w-20 lg:h-20 text-brand-gold" />
                  </div>
                </div>
                <div className="mt-8 hidden lg:block">
                  <div className="bg-black/20 backdrop-blur-sm border border-brand-gold/20 rounded-lg p-6">
                    <blockquote className="text-brand-gold/90 italic">
                      "The {feature.title.split('–')[0]} feature completely changed my approach to health. It's exactly what I needed."
                    </blockquote>
                    <div className="mt-3 text-right text-sm text-muted-foreground">
                      — CuratedHim User
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content side */}
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-gold to-brand-goldLight bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-xl text-foreground/90 mb-6">
                  {feature.description}
                </p>
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-brand-gold/10">
                  <p className="text-muted-foreground text-lg">
                    {feature.detailedDescription}
                  </p>
                </div>
                <button className="mt-8 px-8 py-3 bg-brand-blue text-brand-gold border border-brand-gold rounded-md hover:bg-brand-gold hover:text-brand-blue transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
