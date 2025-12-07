'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function GrammarBook() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="grammarBook" fallback="Grammar Book" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Comprehensive grammar reference and exercises to support your English learning journey.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About the Grammar Book */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/resources/grammar-book-detail.jpg"
                    alt="Grammar Book reference"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    My grammar book provides a comprehensive reference for English grammar, designed specifically for adult learners who need English to unlock life or career opportunities.
                  </p>
                  <p>
                    The book is organized into clear modules that align with our class structure, making it easy to reference grammar points as you learn. Each section includes explanations, examples, and practice exercises.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Features */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">What's Inside</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Clear Explanations</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Grammar concepts explained in a way that honors your native language while helping you understand English structure.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Practical Examples</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Real-world examples that show grammar in context, not just abstract rules.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Practice Exercises</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Exercises that help you practice and internalize grammar patterns naturally.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Module Alignment</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Organized to align with our class modules, so you can easily reference what you're learning.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedLink
                  href="/resources"
                  className="flex h-12 items-center justify-center rounded-full border border-primary-foreground/20 px-8 text-primary-foreground text-base font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
                >
                  Back to Resources
                </AnimatedLink>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
