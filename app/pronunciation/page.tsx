'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';
import AnimatedLink from '@/components/AnimatedLink';

export default function Pronunciation() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="pronunciationFocus" fallback="Pronunciation Focus" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Building confidence in your English pronunciation through focused practice and tender guidance.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About Pronunciation */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/pronunciation/hero-pronunciation.jpg"
                    alt="Pronunciation practice"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    Pronunciation can be one of the most vulnerable aspects of language learning. I know what it's like to really struggle with that, and I feel like I do a good job tenderly approaching pronunciation with my students.
                  </p>
                  <p>
                    My approach focuses on building confidence while helping you develop clear, natural pronunciation. We work on sounds, rhythm, intonation, and the musicality of English—all while honoring your native language and accent.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* What We Focus On */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">What We Focus On</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Sound Production</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Learning to produce English sounds clearly, especially sounds that don't exist in your native language.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Rhythm & Stress</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Understanding English rhythm patterns and word stress to sound more natural.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Intonation</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Learning the musical patterns of English—how your voice rises and falls to convey meaning.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Confidence Building</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Building the confidence to speak clearly and be understood, without fear of making mistakes.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Approach */}
            <SectionWrapper delay={0.3}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">My Approach</h2>
                
                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    I believe pronunciation practice should be supportive and encouraging, not intimidating. There's a lot of vulnerability involved in speaking a new language, and I create a safe space where you can practice without judgment.
                  </p>
                  <p>
                    We work on pronunciation as part of our regular classes, integrating it naturally into conversation practice. This way, you're not just practicing sounds in isolation—you're learning to pronounce English clearly in real conversations.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedLink
                  href="/classes"
                  className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  View Classes
                </AnimatedLink>
                <AnimatedLink
                  href="#book-call"
                  className="flex h-12 items-center justify-center rounded-full border border-primary-foreground/20 px-8 text-primary-foreground text-base font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
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
