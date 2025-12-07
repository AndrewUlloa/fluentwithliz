'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { DURATIONS, EASE_OUT, STAGGER } from '@/lib/animations';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionWrapper({ children, className = '', delay = 0 }: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : isVisible
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : DURATIONS.base,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.section>
  );
}
