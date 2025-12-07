'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';
import AnimatedLink from '@/components/AnimatedLink';

export default function Events() {
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
                  src="/images/events/hero-events.jpg"
                  alt="Events and gatherings"
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
                <AnimatedTranslation translationKey="events" fallback="Events" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Join us for special events, workshops, and community gatherings.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* Upcoming Events */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Upcoming Events</h2>
                
                <div className="space-y-6">
                  <div className="rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-h3 font-semibold text-card-foreground mb-2">Event Title</h3>
                        <p className="text-body text-card-foreground/80 leading-body mb-3">
                          Check back soon for upcoming events! We'll be hosting workshops, conversation practice sessions, and community gatherings.
                        </p>
                        <div className="flex flex-wrap gap-4 text-small text-card-foreground/60">
                          <span>📅 Date TBA</span>
                          <span>📍 Online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Event Types */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Types of Events</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/events/workshop.jpg"
                        alt="Workshops"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Workshops</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Focused sessions on specific topics like grammar, pronunciation, writing, or conversation skills.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/events/conversation-session.jpg"
                        alt="Conversation practice sessions"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Conversation Practice</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Casual conversation sessions where you can practice speaking English in a relaxed, supportive environment.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/events/community-gathering.jpg"
                        alt="Community gatherings"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Community Gatherings</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Social events where language learners can connect, share experiences, and build community.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/events/special-topics.jpg"
                        alt="Special topic sessions"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Special Topics</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Sessions focused on specific themes like business English, academic writing, or cultural topics.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Book Club Link */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 text-center space-y-4">
                <h3 className="text-h3 font-semibold text-card-foreground">Join Our Book Club</h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  Our book club meets monthly and is a great way to practice English while reading great books together.
                </p>
                <AnimatedLink
                  href="/book-club"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  Learn About Book Club
                </AnimatedLink>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
