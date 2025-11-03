'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import AnimatedLink from '@/components/AnimatedLink';
import { DURATIONS, EASE_OUT, STAGGER } from '@/lib/animations';

interface DropdownMenuProps {
  trigger: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export function DropdownMenu({ trigger, children, align = 'left' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      transform: prefersReducedMotion ? 'none' : 'translateY(-8px)' 
    },
    visible: { 
      opacity: 1, 
      transform: 'translateY(0)',
      transition: {
        duration: DURATIONS.fast,
        ease: EASE_OUT,
        when: 'beforeChildren',
        staggerChildren: prefersReducedMotion ? 0 : STAGGER.menuItem,
      }
    },
    exit: { 
      opacity: 0, 
      transform: prefersReducedMotion ? 'none' : 'translateY(-8px)',
      transition: {
        duration: DURATIONS.fast,
        ease: EASE_OUT,
        when: 'afterChildren',
        staggerChildren: prefersReducedMotion ? 0 : STAGGER.menuItem,
        staggerDirection: -1,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, transform: prefersReducedMotion ? 'none' : 'translateX(-4px)' },
    visible: { 
      opacity: 1, 
      transform: 'translateX(0)',
      transition: { duration: DURATIONS.fast, ease: EASE_OUT }
    },
    exit: { 
      opacity: 0, 
      transform: prefersReducedMotion ? 'none' : 'translateX(-4px)',
      transition: { duration: DURATIONS.fast, ease: EASE_OUT }
    },
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleClick} className="cursor-pointer">
        {typeof trigger === 'function' ? trigger(isOpen) : trigger}
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="dropdown-content"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'absolute top-full mt-2 min-w-[200px] rounded-md border bg-popover p-1 shadow-lg',
              align === 'right' ? 'right-0' : 'left-0'
            )}
          >
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                // Clone the child and wrap its children with motion variants
                const childElement = child as React.ReactElement<{ children?: React.ReactNode }>;
                const childChildren = React.Children.toArray(childElement.props.children);
                return React.cloneElement(childElement, {
                  key: `dropdown-wrapper-${index}`,
                  children: childChildren.map((item, itemIndex) => {
                    if (React.isValidElement(item) && item.type === DropdownMenuItem) {
                      return (
                        <motion.div key={`item-${itemIndex}`} variants={itemVariants}>
                          {item}
                        </motion.div>
                      );
                    }
                    return item;
                  }),
                });
              }
              return child;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface DropdownMenuItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenuItem({ href, children, className }: DropdownMenuItemProps) {
  return (
    <AnimatedLink
      href={href}
      className={cn(
        'flex min-h-[40px] items-center px-3 py-2 text-sm text-popover-foreground transition-colors duration-200 ease hover:bg-accent hover:text-accent-foreground',
        className
      )}
    >
      {children}
    </AnimatedLink>
  );
}

interface ClassesDropdownProps {
  className?: string;
}

export function ClassesDropdown({ className }: ClassesDropdownProps) {
  const { t } = useTranslation();
  
  return (
    <DropdownMenu
      trigger={(isOpen) => (
        <button 
          className={cn(
            'flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-200 ease hover:text-foreground',
            className
          )}
        >
          {t('classes', 'Classes')}
          <ChevronDown className={cn('size-4 transition-transform duration-200 ease-out motion-reduce:transition-none', isOpen && 'rotate-180')} />
        </button>
      )}
    >
      <div className="py-1">
        <DropdownMenuItem href="/classes/fluent-1on1">
          {t('fluent1on1', 'Fluent 1:1')}
        </DropdownMenuItem>
        <DropdownMenuItem href="/classes/fluent-circle">
          {t('fluentCircle', 'Fluent Circle (Groups)')}
        </DropdownMenuItem>
        <DropdownMenuItem href="/classes/fluent-conversation">
          {t('fluentConversation', 'Fluent Conversation')}
        </DropdownMenuItem>
        <div className="my-1 h-px bg-border" />
        <DropdownMenuItem href="/pricing">
          {t('pricingBundles', 'Pricing & Bundles')}
        </DropdownMenuItem>
      </div>
    </DropdownMenu>
  );
}

interface ResourcesDropdownProps {
  className?: string;
}

export function ResourcesDropdown({ className }: ResourcesDropdownProps) {
  const { t } = useTranslation();
  
  return (
    <DropdownMenu
      trigger={(isOpen) => (
        <button 
          className={cn(
            'flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-200 ease hover:text-foreground',
            className
          )}
        >
          {t('resources', 'Resources')}
          <ChevronDown className={cn('size-4 transition-transform duration-200 ease-out motion-reduce:transition-none', isOpen && 'rotate-180')} />
        </button>
      )}
    >
      <div className="py-1">
        <DropdownMenuItem href="/resources/grammar-book">
          {t('grammarBook', 'Grammar Book')}
        </DropdownMenuItem>
        <DropdownMenuItem href="/resources/google-classroom">
          {t('googleClassroom', 'Google Classroom')}
        </DropdownMenuItem>
        <DropdownMenuItem href="/resources/free-pdfs">
          {t('freePdfsWarmups', 'Free PDFs & Warm-ups')}
        </DropdownMenuItem>
      </div>
    </DropdownMenu>
  );
}

