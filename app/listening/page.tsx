'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function Listening() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="listening" fallback="Listening" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Podcasts, audiobooks, and audio resources to improve your English listening skills.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About Listening Practice */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/listening/hero-listening.jpg"
                    alt="Listening practice resources"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    Listening is one of the most important skills for language learning. Regular listening practice helps you understand natural speech patterns, improve your pronunciation, and build confidence in real-world conversations.
                  </p>
                  <p>
                    Here are some of my favorite podcasts, audiobooks, and audio resources that can help you practice your English listening skills.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Recommendations */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Recommended Resources</h2>
                
                <div className="space-y-6">
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Podcasts</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Check back soon for my favorite English learning podcasts and podcasts that explore language, culture, and identity!
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Audiobooks</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Listening to audiobooks is a great way to improve your listening while enjoying great stories. I'll share recommendations soon!
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Practice Exercises</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Structured listening exercises and comprehension activities to help you practice systematically.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
