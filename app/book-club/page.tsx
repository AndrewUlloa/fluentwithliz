'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function BookClub() {
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
                  src="/images/book-club/hero-book-club.jpg"
                  alt="Book Club with Liz"
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
                <AnimatedTranslation translationKey="bookClub" fallback="Book Club" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Read, discuss, and learn English together. Join our book club to practice English while exploring great stories.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About Book Club */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">About Our Book Club</h2>
                
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/book-club/book-discussion.jpg"
                    alt="Book club discussion"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    Our book club combines English learning with the joy of reading. We read books together, discuss themes and ideas, and practice English naturally through conversation about what we're reading.
                  </p>
                  <p>
                    This is a great way to build vocabulary, improve comprehension, and practice speaking—all while exploring great literature and stories that matter.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Schedule & RSVP */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">
                  <AnimatedTranslation translationKey="bookClubSchedule" fallback="Schedule & RSVP" />
                </h2>
                
                <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-secondary-foreground font-bold text-body">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-h3 font-semibold text-card-foreground mb-2">Monthly Meetings</h3>
                        <p className="text-body text-card-foreground/80 leading-body">
                          We meet once a month to discuss the current book. Meetings are held online, making it accessible to learners from around the world.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-secondary-foreground font-bold text-body">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-h3 font-semibold text-card-foreground mb-2">Reading Schedule</h3>
                        <p className="text-body text-card-foreground/80 leading-body">
                          Each month, we select a book and set reading goals. You'll have time to read at your own pace, with discussion questions and vocabulary support along the way.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-secondary-foreground font-bold text-body">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-h3 font-semibold text-card-foreground mb-2">RSVP for Sessions</h3>
                        <p className="text-body text-card-foreground/80 leading-body">
                          Reserve your spot for upcoming book club sessions. Spaces are limited to ensure everyone can participate actively in discussions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Current Book */}
            <SectionWrapper delay={0.3}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Current Book</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/book-club/current-book.jpg"
                      alt="Current book club selection"
                      width={300}
                      height={400}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                    <p>
                      Check back soon for our next book selection! We choose books that are engaging, accessible, and great for English practice.
                    </p>
                    <p>
                      Past selections have included contemporary fiction, memoirs, and stories that explore themes relevant to language learners and cultural identity.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedLink
                  href="#rsvp"
                  className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  RSVP for Next Session
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
