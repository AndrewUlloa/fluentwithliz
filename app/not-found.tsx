'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Hero Image */}
            <div className="mb-8 sm:mb-12">
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden">
                <ImageWithLoader
                  src="/images/404/not-found.jpg"
                  alt="Page not found"
                  width={1200}
                  height={675}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="w-full h-full"
                />
              </div>
            </div>
            
            {/* Hero Text */}
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                404
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                <AnimatedTranslation translationKey="notFoundMessage" fallback="Oops! This page seems to have wandered off. Let's get you back on track with your English learning journey." />
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Quick Links */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground text-center">
                  <AnimatedTranslation translationKey="notFoundWhereToGo" fallback="Where would you like to go?" />
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatedLink
                    href="/"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="home" fallback="Home" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      <AnimatedTranslation translationKey="notFoundHomeDescription" fallback="Return to the homepage and start your English learning journey." />
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/classes"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="classes" fallback="Classes" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      <AnimatedTranslation translationKey="notFoundClassesDescription" fallback="Explore our module-based English classes for motivated adult learners." />
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/about"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="aboutLiz" fallback="About Liz" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      <AnimatedTranslation translationKey="notFoundAboutDescription" fallback="Learn about my teaching philosophy and approach to English learning." />
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/pricing"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="pricingBundles" fallback="Pricing & Bundles" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      <AnimatedTranslation translationKey="notFoundPricingDescription" fallback="See our affordable pricing options for group and individual classes." />
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/resources"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="resources" fallback="Resources" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      <AnimatedTranslation translationKey="notFoundResourcesDescription" fallback="Access free materials, grammar books, and learning resources." />
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/contact"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="contact" fallback="Contact" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      <AnimatedTranslation translationKey="notFoundContactDescription" fallback="Get in touch with questions or to book a free consultation call." />
                    </p>
                  </AnimatedLink>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper delay={0.2}>
              <div className="rounded-lg border-2 border-secondary bg-card p-8 text-center space-y-6">
                <h3 className="text-h3 font-semibold text-card-foreground">
                  <AnimatedTranslation translationKey="notFoundReadyToStart" fallback="Ready to Start Learning?" />
                </h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  <AnimatedTranslation translationKey="notFoundCTADescription" fallback="Book a free call to discuss your English learning goals and see if we're a good fit." />
                </p>
                <AnimatedLink
                  href="#book-call"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
                </AnimatedLink>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
