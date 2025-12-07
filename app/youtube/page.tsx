'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function YouTube() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="watchingYouTube" fallback="Watching on YouTube" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Curated YouTube channels and videos for English learning and practice.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About YouTube Learning */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/youtube/hero-youtube.jpg"
                    alt="YouTube learning resources"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    YouTube is an incredible resource for English learning. There are so many great channels that can help you practice listening, learn grammar, improve pronunciation, and explore English-speaking cultures.
                  </p>
                  <p>
                    I'll be sharing my favorite YouTube channels and videos that I think are particularly helpful for adult English learners. Check back soon for curated recommendations!
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Channel Categories */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Channel Categories</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">English Learning Channels</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Channels specifically designed for English learners, with clear explanations and practice exercises.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Cultural Content</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Videos that explore English-speaking cultures, helping you understand context and cultural nuances.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Documentaries & Educational</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Educational content that helps you learn while exploring interesting topics in English.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3">
                    <h3 className="text-h3 font-semibold text-card-foreground">Entertainment</h3>
                    <p className="text-body text-card-foreground/90 leading-body">
                      Fun, engaging content that makes English practice enjoyable and natural.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Coming Soon */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 text-center space-y-4">
                <h3 className="text-h3 font-semibold text-card-foreground">Recommendations Coming Soon</h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  I'm curating a list of my favorite YouTube channels and videos for English learners. Check back soon for specific recommendations!
                </p>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
