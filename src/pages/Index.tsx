
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-foreground">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
