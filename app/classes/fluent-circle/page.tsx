'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function FluentCircle() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="fluentCircle" fallback="Fluent Circle (Groups)" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                More accessible pricing through shared group sessions. Authentic interaction with other motivated learners.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* Why Group Classes */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Why Group Classes?</h2>
                
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/classes/group-learning.jpg"
                    alt="Group English classes with authentic interaction"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    I prefer group classes because there are more opportunities for authentic interaction. When it's one-on-one, students sometimes depend on you to carry the conversation. In a group, there are different ideas, and it ends up being more fun and productive.
                  </p>
                  <p>
                    Group classes offer more accessible pricing—$200 per module divided by 5 students equals $40 per person. This makes quality English education accessible to motivated learners who need English to unlock life or career opportunities.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* What to Expect */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">What to Expect</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Module-Based Structure</h3>
                    <p>
                      Semester-based enrollment with structured modules. Less work for you, more structure for your learning journey. We work through modules together as a group.
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Authentic Interaction</h3>
                    <p>
                      Real conversations with other motivated learners. Different ideas, perspectives, and experiences make learning more engaging and practical.
                    </p>
                  </div>
                </div>

                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/classes/group-interaction.jpg"
                    alt="Authentic group interaction in English classes"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SectionWrapper>

            {/* Pricing */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border-2 border-secondary bg-card p-8 space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-h2 font-bold text-card-foreground">Pricing</h2>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-card-foreground">$200</span>
                    <span className="text-body text-card-foreground/70">per module</span>
                  </div>
                  <p className="text-small text-card-foreground/60">
                    Divided by 5 students = $40 per person
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-h3 font-semibold text-card-foreground">What's Included:</h3>
                  <ul className="space-y-2 text-body text-card-foreground/90">
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Structured module-based curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Authentic group interaction and practice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tender approach that honors your vulnerability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Confidence and motivation to practice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedLink
                  href="#book-call"
                  className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
                </AnimatedLink>
                <AnimatedLink
                  href="/classes"
                  className="flex h-12 items-center justify-center rounded-full border border-primary-foreground/20 px-8 text-primary-foreground text-base font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
                >
                  View All Classes
                </AnimatedLink>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
