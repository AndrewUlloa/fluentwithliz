'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update children when pathname changes, but handle exit animation first
  useEffect(() => {
    if (pathname !== previousPathname.current) {
      // Start exit animation
      setIsExiting(true);
      setIsVisible(false);

      // Clear any pending timeout
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }

      // Wait for exit animation to complete (800ms), then update children and start enter
      exitTimeoutRef.current = setTimeout(() => {
        setDisplayChildren(children);
        previousPathname.current = pathname;
        setIsExiting(false);
        // Start enter animation after a brief delay
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      }, 800);
    }
  }, [pathname, children]);

  // Initial mount - start enter animation
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`h-full transition-all duration-[800ms] ${
        isVisible && !isExiting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100`}
      style={{
        willChange: 'transform, opacity',
        transitionTimingFunction: 'cubic-bezier(.165, .84, .44, 1)', // ease-out-quart
      }}
    >
      {displayChildren}
    </div>
  );
}
