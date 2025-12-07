'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

interface AnimatedTranslationProps {
  translationKey: string;
  fallback?: string;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: (text: string) => React.ReactNode;
}

export function AnimatedTranslation({
  translationKey,
  fallback,
  className = '',
  as: Component = 'span',
  children,
}: AnimatedTranslationProps) {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  
  const getTranslation = (key: string, fb?: string) => {
    return fb !== undefined ? t(key, fb) : t(key);
  };
  
  // Use fallback during SSR and initial render to prevent hydration mismatch
  const [displayText, setDisplayText] = useState(() => fallback || translationKey);
  const [isVisible, setIsVisible] = useState(true);
  const previousLanguage = useRef<string | null>(null);

  // Initialize with translation after mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const initialText = getTranslation(translationKey, fallback);
    setDisplayText(initialText);
    previousLanguage.current = i18n.language;
  }, []);

  useEffect(() => {
    // Skip if not mounted yet
    if (!mounted) return;
    
    // Only animate if language actually changed
    if (previousLanguage.current !== null && i18n.language !== previousLanguage.current) {
      // Fade out
      setIsVisible(false);
      
      // After fade out completes, update text and fade in
      const timeout = setTimeout(() => {
        setDisplayText(getTranslation(translationKey, fallback));
        previousLanguage.current = i18n.language;
        
        // Use requestAnimationFrame to ensure DOM update before fade in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      }, 200); // Half of total animation duration

      return () => clearTimeout(timeout);
    } else if (mounted && previousLanguage.current !== null) {
      // Language hasn't changed, but translation might have updated
      // Update text without animation
      setDisplayText(getTranslation(translationKey, fallback));
    }
  }, [mounted, i18n.language, translationKey, t, fallback]);

  const content = children ? children(displayText) : displayText;

  // Motion props that will be applied
  const motionProps = {
    initial: false,
    animate: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -4,
    },
    transition: {
      duration: 0.2,
      ease: [0.165, 0.84, 0.44, 1] as const, // ease-out-quart
    },
    style: {
      willChange: 'transform, opacity' as const,
    },
    className: `motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`,
  };

  // Render with appropriate motion component
  if (Component === 'span') {
    return <motion.span {...motionProps}>{content}</motion.span>;
  }
  if (Component === 'div') {
    return <motion.div {...motionProps}>{content}</motion.div>;
  }
  if (Component === 'p') {
    return <motion.p {...motionProps}>{content}</motion.p>;
  }
  if (Component === 'h1') {
    return <motion.h1 {...motionProps}>{content}</motion.h1>;
  }
  if (Component === 'h2') {
    return <motion.h2 {...motionProps}>{content}</motion.h2>;
  }
  if (Component === 'h3') {
    return <motion.h3 {...motionProps}>{content}</motion.h3>;
  }
  if (Component === 'h4') {
    return <motion.h4 {...motionProps}>{content}</motion.h4>;
  }
  if (Component === 'h5') {
    return <motion.h5 {...motionProps}>{content}</motion.h5>;
  }
  return <motion.h6 {...motionProps}>{content}</motion.h6>;
}

