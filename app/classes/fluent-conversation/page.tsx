'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function FluentConversation() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="fluentConversation" fallback="Fluent Conversation" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Focused conversation practice to build confidence and fluency in real-world situations.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* Conversation Focus */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Building Confidence Through Conversation</h2>
                
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/classes/conversation-practice.jpg"
                    alt="Conversation practice in English"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    Everyone always tells me that they feel a lot more confident and motivated to practice after our conversation sessions. That's what I'm here for—not just to teach English, but to help you see what this journey can mean for the rest of your life.
                  </p>
                  <p>
                    Fluent Conversation classes focus on real-world speaking situations. We practice authentic conversations that you'll actually use—in your career, with friends, traveling, or in everyday life.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* What You'll Practice */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">What You'll Practice</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Real-World Scenarios</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Practice conversations you'll actually have—job interviews, networking events, social situations, and daily interactions.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Cultural Context</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Learn not just the language, but the cultural nuances that make conversations natural and meaningful.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Confidence Building</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Build the confidence to speak up, express yourself, and engage in conversations without fear.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Fluency Development</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Move from thinking about grammar to speaking naturally and fluently in real-time conversations.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.3}>
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
