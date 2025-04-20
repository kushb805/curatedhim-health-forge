
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

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (window.innerWidth / 2 - clientX) * 0.02;
      const yPos = (window.innerHeight / 2 - clientY) * 0.02;
      
      const currentTransform = elementRef.current.style.transform;
      const scrollY = currentTransform.match(/translate3d\(0, (-?\d+(\.\d+)?)px, 0\)/);
      const scrollYValue = scrollY ? scrollY[1] : '0';
      
      elementRef.current.style.transform = `translate3d(${xPos}px, ${scrollYValue}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed]);

  return elementRef;
};
