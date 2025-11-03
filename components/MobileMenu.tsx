'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import AnimatedLink from '@/components/AnimatedLink';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { DURATIONS, EASE_OUT, STAGGER } from '@/lib/animations';
import { useDrawer } from '@/components/DrawerProvider';

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useDrawer();
  const onClose = React.useCallback(() => setIsOpen(false), [setIsOpen]);
  const pathname = usePathname();
  const { t } = useTranslation();
  const previousPathnameRef = React.useRef(pathname);
  const prefersReducedMotion = useReducedMotion();

  // Close menu on route change (only when pathname actually changes, not on initial mount)
  React.useEffect(() => {
    if (isOpen && pathname !== previousPathnameRef.current) {
      onClose();
      previousPathnameRef.current = pathname;
    }
  }, [pathname, isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  // Animation variants
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: 'beforeChildren',
        staggerChildren: prefersReducedMotion ? 0 : STAGGER.section,
        delayChildren: 0.05,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: prefersReducedMotion ? 0 : STAGGER.section,
        staggerDirection: -1,
      }
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, transform: prefersReducedMotion ? 'none' : 'translateY(8px)' },
    visible: { 
      opacity: 1, 
      transform: 'translateY(0)',
      transition: { duration: DURATIONS.fast, ease: EASE_OUT }
    },
    exit: { 
      opacity: 0, 
      transform: prefersReducedMotion ? 'none' : 'translateY(8px)',
      transition: { duration: DURATIONS.fast, ease: EASE_OUT }
    },
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: prefersReducedMotion ? 0 : STAGGER.menuItem,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: prefersReducedMotion ? 0 : STAGGER.menuItem,
        staggerDirection: -1,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, transform: prefersReducedMotion ? 'none' : 'translateX(-8px)' },
    visible: { 
      opacity: 1, 
      transform: 'translateX(0)',
      transition: { duration: DURATIONS.fast, ease: EASE_OUT }
    },
    exit: { 
      opacity: 0, 
      transform: prefersReducedMotion ? 'none' : 'translateX(-8px)',
      transition: { duration: DURATIONS.fast, ease: EASE_OUT }
    },
  };

  const primaryNavItems = [
    { href: '/', key: 'home' },
    { href: '/classes', key: 'classes' },
    { href: '/book-club', key: 'bookClub' },
    { href: '/wall-of-love', key: 'wallOfLove' },
    { href: '/about', key: 'aboutLiz' },
    { href: '/resources', key: 'resources' },
    { href: '/contact', key: 'contact' },
  ];

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="bottom">
      <DrawerContent className="max-h-[90vh] flex flex-col">
        <DrawerTitle className="sr-only">{t('siteName', 'Fluent with Liz')} Menu</DrawerTitle>
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto min-h-0 overscroll-contain touch-pan-y">
          <AnimatePresence initial={false} mode="wait" propagate>
            {isOpen && (
              <motion.div
                key="menu-content"
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-4 py-6"
              >
                  {/* Top block - Always visible */}
                  <motion.div variants={sectionVariants} className="mb-6 space-y-3">
                    <a
                      href="#book-call"
                      onClick={handleLinkClick}
                      className="flex min-h-[48px] w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                      {t('bookFreeCall', 'Book a Free Call')}
                    </a>
                    <AnimatedLink
                      href="/classes"
                      onClick={handleLinkClick}
                      className="flex min-h-[48px] w-full items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                    >
                      {t('classes', 'Classes')}
                    </AnimatedLink>
                  </motion.div>

                  {/* Primary links */}
                  <motion.nav variants={sectionVariants} className="mb-6">
                    <motion.ul variants={navVariants} className="space-y-1">
                      {primaryNavItems.map((item) => (
                        <motion.li key={item.href} variants={itemVariants}>
                          <AnimatedLink
                            href={item.href}
                            onClick={handleLinkClick}
                            className="flex min-h-[48px] items-center px-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {t(item.key)}
                          </AnimatedLink>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.nav>

                  {/* Expandable sections */}
                  <motion.div variants={sectionVariants} className="mb-6">
                    <Accordion type="multiple">
                      {/* Philosophy & Method */}
                      <AccordionItem value="philosophy">
                        <AccordionTrigger>{t('philosophyMethod', 'Philosophy & Method')}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1 pb-2">
                            <li>
                              <AnimatedLink
                                href="/philosophy"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('philosophy', 'Philosophy')}
                              </AnimatedLink>
                            </li>
                            <li>
                              <AnimatedLink
                                href="/liz-method"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('lizMethod', 'L I Z Method')}
                              </AnimatedLink>
                            </li>
                            <li>
                              <AnimatedLink
                                href="/pronunciation"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('pronunciationFocus', 'Pronunciation Focus')}
                              </AnimatedLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Events & Club */}
                      <AccordionItem value="events">
                        <AccordionTrigger>{t('eventsClub', 'Events & Club')}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1 pb-2">
                            <li>
                              <AnimatedLink
                                href="/book-club"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('bookClubSchedule', 'Book Club (Schedule & RSVP)')}
                              </AnimatedLink>
                            </li>
                            <li>
                              <AnimatedLink
                                href="/events"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('events', 'Events')}
                              </AnimatedLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Help & Info */}
                      <AccordionItem value="help">
                        <AccordionTrigger>{t('helpInfo', 'Help & Info')}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1 pb-2">
                            <li>
                              <AnimatedLink
                                href="/faq"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('faq', 'FAQ')}
                              </AnimatedLink>
                            </li>
                            <li>
                              <AnimatedLink
                                href="/pricing"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('pricingBundles', 'Pricing & Bundles')}
                              </AnimatedLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Connect with Liz */}
                      <AccordionItem value="connect">
                        <AccordionTrigger>{t('connectWithLiz', 'Connect with Liz')}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1 pb-2">
                            <li>
                              <AnimatedLink
                                href="/reading"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('reading', "What I'm Reading")}
                              </AnimatedLink>
                            </li>
                            <li>
                              <AnimatedLink
                                href="/listening"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('listening', 'Listening')}
                              </AnimatedLink>
                            </li>
                            <li>
                              <AnimatedLink
                                href="/youtube"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('watchingYouTube', 'Watching on YouTube')}
                              </AnimatedLink>
                            </li>
                            <li>
                              <AnimatedLink
                                href="/hanging-out"
                                onClick={handleLinkClick}
                                className="flex min-h-[48px] items-center px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {t('hangingOut', "Where I'm Hanging Out")}
                              </AnimatedLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <DrawerFooter className="border-t p-4 space-y-4 mt-auto flex-shrink-0">
            <AnimatePresence initial={false} mode="wait">
              {isOpen && (
                <motion.div
                  key="footer-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex items-center justify-between">
                    <LanguageSwitcher />
                    <div className="flex gap-2">
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
                  </div>
                  <div className="text-sm">
                    <label className="block text-sm font-medium mb-2">{t('newsletter', 'Newsletter')}</label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder={t('emailPlaceholder', 'Enter your email')}
                        className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                      <Button size="sm">{t('subscribe', 'Subscribe')}</Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

