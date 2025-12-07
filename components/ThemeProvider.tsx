'use client';

import * as React from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>('light');
  const [mounted, setMounted] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Initialize theme from localStorage or system preference
  React.useEffect(() => {
    setMounted(true);
    
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeState(savedTheme);
      if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setThemeState(initialTheme);
      if (initialTheme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }
  }, []);

  const setTheme = React.useCallback((newTheme: Theme) => {
    if (!mounted) return;
    
    setIsTransitioning(true);
    const htmlElement = document.documentElement;
    
    // Use requestAnimationFrame to ensure synchronous DOM update
    requestAnimationFrame(() => {
      // Apply theme change immediately and synchronously
      if (newTheme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
      
      // Update state and storage synchronously
      setThemeState(newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Dispatch custom event for any components that need to react
      window.dispatchEvent(new CustomEvent('theme-change', { detail: newTheme }));
      
      // Clear transition state after animation completes
      requestAnimationFrame(() => {
        setTimeout(() => setIsTransitioning(false), 250);
      });
    });
  }, [mounted]);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  // Listen for system theme changes
  React.useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted, setTheme]);

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme-transitioning={isTransitioning ? 'true' : 'false'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
