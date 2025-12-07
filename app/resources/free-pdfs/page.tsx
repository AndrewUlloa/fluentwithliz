'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function FreePDFs() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="freePdfsWarmups" fallback="Free PDFs & Warm-ups" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Download free practice materials, warm-up exercises, and study guides to support your learning.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About Free Resources */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/resources/free-pdfs-detail.jpg"
                    alt="Free PDFs and practice materials"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    I believe in making quality English learning resources accessible. That's why I offer free PDFs, warm-up exercises, and study guides that you can download and use to practice on your own.
                  </p>
                  <p>
                    These materials are designed to complement your class learning and give you extra practice between sessions. They're perfect for building confidence and keeping your English skills sharp.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Resource Categories */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Available Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Warm-up Exercises</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Quick exercises to get your mind ready for English practice. Perfect for starting your day or preparing for class.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Vocabulary Lists</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Themed vocabulary lists organized by topic to help you build your English vocabulary systematically.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Practice Worksheets</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Grammar and writing practice worksheets with answer keys so you can check your work.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Study Guides</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Comprehensive study guides for common English topics and exam preparation.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Download Section */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 space-y-6 text-center">
                <h3 className="text-h3 font-semibold text-card-foreground">Get Started</h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  Download free resources to start practicing today. More materials are added regularly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90">
                    Browse Free Resources
                  </button>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.4}>
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
