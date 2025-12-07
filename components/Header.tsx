'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import AnimatedLink from '@/components/AnimatedLink';
import { ClassesDropdown, ResourcesDropdown } from '@/components/DropdownMenu';
import { useDrawer } from '@/components/DrawerProvider';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

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
    { href: '/', key: 'home', minWidth: '3.5rem' }, // "Inicio" is longest
    { href: '/classes', key: 'classes', isDropdown: true, minWidth: '4rem' },
    { href: '/book-club', key: 'bookClub', minWidth: '7.5rem' }, // "Club de Lectura" is longest
    { href: '/wall-of-love', key: 'wallOfLove', minWidth: '7rem' }, // "Muro del Amor" is longest
    { href: '/about', key: 'aboutLiz', minWidth: '7rem' }, // "Acerca de Liz" is longest
    { href: '/resources', key: 'resources', isDropdown: true, minWidth: '4.5rem' },
    { href: '/contact', key: 'contact', minWidth: '5rem' }, // "Contacto" is longest
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
          sticky top-0 z-50 w-full bg-primary
          transition-all duration-300 ease-out
          ${isScrolled ? 'h-16 lg:h-20' : 'h-14 sm:h-16 lg:h-20'}
          min-h-[3.5rem] sm:min-h-[4rem] lg:min-h-[5rem]
        `}
      >
        <nav className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Logo */}
          <AnimatedLink
            href="/"
            className={`
              font-semibold text-primary-foreground transition-all duration-300 ease-out
              hover:text-primary-foreground/80 whitespace-nowrap
              ${isScrolled ? 'text-lg' : 'text-xl'}
              mr-6 lg:mr-8
            `}
          >
            <AnimatedTranslation translationKey="siteName" fallback="Fluent with Liz" />
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
                    text-sm font-medium transition-colors whitespace-nowrap
                    ${pathname === item.href
                      ? 'text-primary-foreground underline decoration-2 underline-offset-4'
                      : 'text-primary-foreground/70 hover:text-primary-foreground'
                    }
                  `}
                  style={{ minWidth: item.minWidth }}
                  suppressHydrationWarning
                >
                  <AnimatedTranslation 
                    translationKey={item.key} 
                    fallback={fallbackTranslations[item.key] || item.key}
                  />
                </AnimatedLink>
              );
            })}
          </div>

          {/* Right: Utilities */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-4 lg:ml-8">
            {/* Theme Switcher - Desktop */}
            <div className="hidden lg:block">
              <ThemeSwitcher />
            </div>
            
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
                className="flex h-8 w-8 items-center justify-center rounded-md text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-md text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#book-call"
              className="hidden items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 sm:inline-flex whitespace-nowrap"
              style={{ minWidth: '14rem' }} // "Reserva una Llamada Gratuita" is longest
            >
              <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
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
