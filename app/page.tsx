'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        <main className="flex min-h-[calc(100vh-4rem)] w-full max-w-4xl mx-auto flex-col items-center justify-center gap-12 py-12 sm:py-16 lg:py-20 pb-16 lg:pb-0">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-h1 font-bold text-primary-foreground max-w-2xl">
            English for the life you're dreaming of.
          </h1>
          <p className="text-body text-primary-foreground/80 max-w-xl leading-body">
            Learn English without losing your native soul. Gentle, intentional English for big life changes.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-md">
          <AnimatedLink
            href="/classes"
            className="flex h-14 w-full items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
          >
            <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
          </AnimatedLink>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <AnimatedLink
              href="/classes"
              className="flex h-12 flex-1 items-center justify-center rounded-full border border-primary-foreground/20 px-6 text-primary-foreground text-sm font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
            >
              <AnimatedTranslation translationKey="classes" fallback="Classes" />
            </AnimatedLink>
            <AnimatedLink
              href="/about"
              className="flex h-12 flex-1 items-center justify-center rounded-full border border-primary-foreground/20 px-6 text-primary-foreground text-sm font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
            >
              <AnimatedTranslation translationKey="aboutLiz" fallback="About Liz" />
            </AnimatedLink>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-small text-primary-foreground/60">
            Join motivated adult English learners from around the world
          </p>
        </div>
        </main>
      </div>
    </div>
  );
}
