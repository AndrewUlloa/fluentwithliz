'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { MouseEvent } from 'react';
import { useRouteTransition } from '@/components/RouteTransition';

interface AnimatedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  suppressHydrationWarning?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function AnimatedLink({ href, className, children, suppressHydrationWarning, onClick: onClickProp }: AnimatedLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { startExit } = useRouteTransition();

  const onClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick handler if provided
    if (onClickProp) {
      onClickProp(e);
    }
    
    // Allow modified clicks to open in new tab/window
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    // External or same route
    if (href.startsWith('http') || href === pathname) {
      return;
    }
    e.preventDefault();
    await startExit();
    router.push(href);
  };

  return (
    <Link href={href} className={className} onClick={onClick} prefetch suppressHydrationWarning={suppressHydrationWarning}>
      {children}
    </Link>
  );
}


