'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';
import { useDrawer } from '@/components/DrawerProvider';
import { DURATIONS } from '@/lib/animations';

interface RouteTransitionProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

interface RouteTransitionAPI {
  startExit: () => Promise<void>;
}

const RouteTransitionContext = createContext<RouteTransitionAPI | null>(null);

export function useRouteTransition(): RouteTransitionAPI {
  const ctx = useContext(RouteTransitionContext);
  return (
    ctx || {
      // Safe no-op fallback if not under provider
      startExit: async () => {},
    }
  );
}

// Persistent route transition wrapper. Lives under layout so it survives navigations.
export default function RouteTransition({ children, header }: RouteTransitionProps) {
  const pathname = usePathname();
  const { isOpen: isDrawerOpen } = useDrawer();
  const prefersReducedMotion = useReducedMotion();

  const [displayChildren, setDisplayChildren] = useState(children);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const previousPathnameRef = useRef<string | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Imperative API for header links to trigger exit before navigation
  const startExit = (): Promise<void> => {
    return new Promise((resolve) => {
      setIsExiting(true);
      setIsVisible(false);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      exitTimerRef.current = setTimeout(() => resolve(), 800);
    });
  };

  // Handle initial mount enter
  useEffect(() => {
    if (previousPathnameRef.current === null) {
      previousPathnameRef.current = pathname;
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, [pathname]);

  // On route change: swap in new children and enter (exit should have already played via startExit)
  useEffect(() => {
    if (previousPathnameRef.current !== null && pathname !== previousPathnameRef.current) {
      setDisplayChildren(children);
      previousPathnameRef.current = pathname;
      setIsExiting(false);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setDisplayChildren(children);
    }
  }, [children, pathname]);

  useEffect(() => () => {
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
  }, []);

  return (
    <RouteTransitionContext.Provider value={{ startExit }}>
      {header}
      <motion.div
        className={`h-full transition-all duration-[800ms] ${
          isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100`}
        style={{
          willChange: 'transform, opacity, filter',
          transitionTimingFunction: 'cubic-bezier(.165, .84, .44, 1)', // ease-out-quart per animations.md
        }}
        animate={{
          filter: prefersReducedMotion 
            ? 'blur(0px)' 
            : isDrawerOpen 
              ? 'blur(16px)' // Tailwind blur-lg = 16px
              : 'blur(0px)',
        }}
        transition={{
          duration: DURATIONS.fast,
          ease: 'linear',
        }}
      >
        {displayChildren}
      </motion.div>
    </RouteTransitionContext.Provider>
  );
}


