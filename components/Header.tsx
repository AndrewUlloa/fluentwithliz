'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import AnimatedLink from '@/components/AnimatedLink';
import { ClassesDropdown, ResourcesDropdown } from '@/components/DropdownMenu';
import { useDrawer } from '@/components/DrawerProvider';

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { isOpen: isMobileMenuOpen, setIsOpen: setIsMobileMenuOpen } = useDrawer();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Handle scroll behavior
  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems = [
    { href: '/', key: 'home' },
    { href: '/classes', key: 'classes', isDropdown: true },
    { href: '/book-club', key: 'bookClub' },
    { href: '/wall-of-love', key: 'wallOfLove' },
    { href: '/about', key: 'aboutLiz' },
    { href: '/resources', key: 'resources', isDropdown: true },
    { href: '/contact', key: 'contact' },
  ];

  // Fallback translations for SSR to avoid hydration mismatch
  const fallbackTranslations: Record<string, string> = {
    home: 'Home',
    classes: 'Classes',
    bookClub: 'Book Club',
    wallOfLove: 'Wall of Love',
    aboutLiz: 'About Liz',
    resources: 'Resources',
    contact: 'Contact',
  };

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
          transition-all duration-300 ease-out
          ${isScrolled ? 'h-16 lg:h-20' : 'h-14 sm:h-16 lg:h-20'}
        `}
      >
        <nav className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Logo */}
          <AnimatedLink
            href="/"
            className={`
              font-semibold text-foreground transition-all duration-300 ease-out
              hover:text-foreground/80
              ${isScrolled ? 'text-lg' : 'text-xl'}
            `}
          >
            {t('siteName', 'Fluent with Liz')}
          </AnimatedLink>

          {/* Center: Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {primaryNavItems.map((item) => {
              if (item.isDropdown && item.key === 'classes') {
                return <ClassesDropdown key={item.key} />;
              }
              if (item.isDropdown && item.key === 'resources') {
                return <ResourcesDropdown key={item.key} />;
              }
              return (
                <AnimatedLink
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm font-medium transition-colors
                    ${pathname === item.href
                      ? 'text-foreground underline decoration-2 underline-offset-4'
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                  suppressHydrationWarning
                >
                  {mounted ? t(item.key) : fallbackTranslations[item.key] || item.key}
                </AnimatedLink>
              );
            })}
          </div>

          {/* Right: Utilities */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Toggle - Desktop */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#book-call"
              className="hidden items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              {t('bookFreeCall', 'Book a Free Call')}
            </a>

            {/* Hamburger Menu - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}
