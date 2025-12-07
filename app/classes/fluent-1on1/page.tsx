'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function Fluent1on1() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="fluent1on1" fallback="Fluent 1:1" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                One-on-one personalized instruction for advanced learners ready for intensive coaching.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* Personalized Approach */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Personalized One-on-One Instruction</h2>
                
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/classes/1on1-teaching.jpg"
                    alt="One-on-one English instruction"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    For advanced students ready for intensive coaching, one-on-one classes offer personalized attention and a customized learning path. This is perfect when you're advanced enough that we could do an intensive coaching style.
                  </p>
                  <p>
                    With individual classes, you get my full attention focused on your specific needs, goals, and challenges. We can move at your pace and dive deep into areas that matter most to you.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* What You'll Get */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">What You'll Get</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Customized Learning Path</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      A learning plan tailored specifically to your goals, whether that's career advancement, academic preparation, or personal growth.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Flexible Scheduling</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Work around your schedule. We can find times that work for you, whether that's mornings, afternoons, or evenings.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Intensive Focus</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Deep dive into the areas that matter most to you. We can focus intensively on specific skills, topics, or challenges you're facing.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Direct Feedback</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Immediate, personalized feedback on your speaking, writing, and comprehension. Every moment is focused on your growth.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Pricing */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-h2 font-bold text-card-foreground">Pricing</h2>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-card-foreground">$40-45</span>
                    <span className="text-body text-card-foreground/70">per hour</span>
                  </div>
                  <p className="text-small text-card-foreground/60">
                    For advanced students ready for intensive coaching
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Is This Right For You */}
            <SectionWrapper delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-h2 font-bold text-primary-foreground">Is This Right For You?</h2>
                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    Individual classes are perfect if you're advanced enough that we could do an intensive coaching style. You're ready to dive deep, move quickly, and focus intensively on your specific goals.
                  </p>
                  <p>
                    If you're looking for more accessible pricing and enjoy learning with others, consider our <AnimatedLink href="/classes/fluent-circle" className="text-link underline">Fluent Circle group classes</AnimatedLink> instead.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.5}>
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
