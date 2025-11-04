'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Instagram } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
          <DrawerFooter className="border-t p-4 mt-auto flex-shrink-0">
            <AnimatePresence initial={false} mode="wait">
              {isOpen && (
                <motion.div
                  key="footer-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <LanguageSwitcher />
                    <div className="flex gap-3">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Instagram className="size-8" aria-hidden="true" />
                      </a>
                      <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-8"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.149 2C14.7047 2.01525 17.1562 3.0175 18.9908 4.79688C20.8253 6.57631 21.9014 8.99572 21.9947 11.5498C22.0432 12.8574 21.8327 14.1621 21.3746 15.3877C20.9165 16.6131 20.2199 17.7355 19.3258 18.6904C18.4314 19.6455 17.3566 20.4146 16.1637 20.9522C14.9707 21.4897 13.6826 21.7859 12.3746 21.8232H12.0914C10.6045 21.8236 9.13595 21.4892 7.7955 20.8457L2.608 22H2.59335C2.58249 21.9999 2.57099 21.9977 2.56112 21.9932C2.55136 21.9886 2.5428 21.9818 2.53573 21.9736C2.52863 21.9655 2.52322 21.9557 2.5201 21.9453C2.51704 21.935 2.51576 21.9237 2.51717 21.9131L3.39413 16.668C2.56877 15.1578 2.15081 13.459 2.18124 11.7383C2.21173 10.0174 2.68946 8.33361 3.56796 6.85352C4.44639 5.37355 5.6951 4.14789 7.191 3.29688C8.68704 2.44588 10.379 1.99876 12.1002 2H12.149ZM8.55428 7.13281C8.46338 7.1437 8.37456 7.16865 8.29061 7.20606C8.17873 7.25595 8.07735 7.32747 7.99374 7.41699C7.75751 7.65925 7.09741 8.24251 7.05917 9.4668C7.02099 10.6905 7.87539 11.9014 7.99569 12.0723C8.11532 12.2421 9.63151 14.8874 12.1285 15.96C13.5961 16.5922 14.2397 16.7002 14.6568 16.7002C14.8286 16.7002 14.9587 16.6829 15.0943 16.6748C15.5519 16.6464 16.5839 16.1177 16.8092 15.543C17.0344 14.968 17.0492 14.4648 16.9898 14.3643C16.9305 14.2637 16.7673 14.1912 16.5221 14.0625C16.2761 13.9334 15.0734 13.2906 14.8473 13.2002C14.7636 13.1613 14.6736 13.1377 14.5816 13.1309C14.5216 13.134 14.4624 13.1518 14.4107 13.1826C14.3592 13.2134 14.316 13.2564 14.2848 13.3076C14.0838 13.5579 13.6222 14.1019 13.4674 14.2588C13.4336 14.2977 13.3919 14.3287 13.3453 14.3506C13.2986 14.3724 13.2475 14.3848 13.1959 14.3857C13.1009 14.3815 13.0077 14.3566 12.9234 14.3125C12.1946 14.003 11.5302 13.5589 10.9644 13.0049C10.4359 12.4839 9.98706 11.8878 9.63339 11.2354C9.49672 10.982 9.63372 10.851 9.75839 10.7324C9.88294 10.6138 10.0166 10.4503 10.1451 10.3086C10.2507 10.1875 10.339 10.0519 10.4068 9.90625C10.4418 9.83876 10.4588 9.76351 10.4576 9.6875C10.4564 9.6113 10.4363 9.5362 10.399 9.46973C10.3392 9.34129 9.89702 8.09811 9.68905 7.59864C9.52025 7.17157 9.31904 7.15662 9.14315 7.14356C8.99846 7.13351 8.83241 7.12905 8.66659 7.12403H8.6451L8.55428 7.13281Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="text-sm w-full">
                    <div className="flex gap-2 w-full">
                      <Input
                        type="email"
                        label={t('emailPlaceholder', 'Enter your email')}
                        placeholder={t('emailPlaceholder', 'Enter your email')}
                        className="flex-1"
                        size="sm"
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

