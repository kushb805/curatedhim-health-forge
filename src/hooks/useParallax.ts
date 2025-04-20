
import { useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrolled = window.scrollY;
      const yPos = -(scrolled * speed);
      elementRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};
