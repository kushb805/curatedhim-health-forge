
import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  avatar: string;
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex R.",
      quote: "CuratedHim made it easy to take control of my health. The plans are clear and the support is always there.",
      rating: 5,
      avatar: "AR"
    },
    {
      id: 2,
      name: "Sam P.",
      quote: "I love the personalized approach. The Curator feels like a real coach that understands my specific needs!",
      rating: 5,
      avatar: "SP"
    },
    {
      id: 3,
      name: "Jordan K.",
      quote: "Tracking my progress and journaling keeps me motivated week after week. The insights are game-changing.",
      rating: 4,
      avatar: "JK"
    },
    {
      id: 4,
      name: "Michael T.",
      quote: "The nutrition plans have transformed my energy levels. I feel better than I have in years.",
      rating: 5,
      avatar: "MT"
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, [testimonials.length]);

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-brand-dark/95 to-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real men who've transformed their health with CuratedHim.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-brand-cardBg rounded-lg p-8 border border-brand-gold/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-brand-blue text-brand-gold flex items-center justify-center font-bold text-lg mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">{testimonial.name}</h4>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg 
                              key={i}
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                              stroke="currentColor" 
                              strokeWidth="2" 
                              className={`${i < testimonial.rating ? "text-brand-gold" : "text-muted"}`}
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-lg italic text-foreground mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 md:-translate-x-12 w-10 h-10 bg-brand-blue/80 text-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 md:translate-x-12 w-10 h-10 bg-brand-blue/80 text-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === idx ? "bg-brand-gold" : "bg-brand-gold/30"
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
