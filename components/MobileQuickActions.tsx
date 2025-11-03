'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Users, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import AnimatedLink from '@/components/AnimatedLink';

export default function MobileQuickActions() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const actions = [
    { href: '/', key: 'home', icon: Home },
    { href: '/classes', key: 'classes', icon: BookOpen },
    { href: '/book-club', key: 'bookClub', icon: Users },
    { href: '#book-call', key: 'bookFreeCall', icon: Phone, isExternal: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 h-16 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
      <div className="grid grid-cols-4 h-full">
        {actions.map((action) => {
          const Icon = action.icon;
          const isActive = pathname === action.href;
          
          if (action.isExternal) {
            return (
              <a
                key={action.key}
                href={action.href}
                className={cn(
                  'flex min-h-[48px] flex-col items-center justify-center gap-1 px-2 py-2 text-xs font-medium transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
                <span className="sr-only">{t(action.key)}</span>
                <span className="hidden sm:inline">{t(action.key)}</span>
              </a>
            );
          }

          return (
            <AnimatedLink
              key={action.href}
              href={action.href}
              className={cn(
                'flex min-h-[48px] flex-col items-center justify-center gap-1 px-2 py-2 text-xs font-medium transition-colors',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
              <span className="sr-only">{t(action.key)}</span>
              <span className="hidden sm:inline">{t(action.key)}</span>
            </AnimatedLink>
          );
        })}
      </div>
    </nav>
  );
}

