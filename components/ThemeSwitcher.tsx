'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        aria-label={t('toggleTheme', 'Toggle theme')}
      >
        <Sun className="size-5" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
      onClick={toggleTheme}
      aria-label={isDark ? t('switchToLightMode', 'Switch to light mode') : t('switchToDarkMode', 'Switch to dark mode')}
    >
      {isDark ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </Button>
  );
}
