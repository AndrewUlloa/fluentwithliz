'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function Resources() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="resources" fallback="Resources" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Tools, materials, and resources to support your English learning journey.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-5xl space-y-16 sm:space-y-20">
            
            {/* Resource Cards */}
            <SectionWrapper delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                
                {/* Grammar Book */}
                <AnimatedLink
                  href="/resources/grammar-book"
                  className="group relative rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-4 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <ImageWithLoader
                      src="/images/resources/grammar-book.jpg"
                      alt="Grammar Book"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-h3 font-bold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="grammarBook" fallback="Grammar Book" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      Comprehensive grammar reference and exercises to support your learning.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-body font-semibold text-accent">
                      Learn More →
                    </span>
                  </div>
                </AnimatedLink>

                {/* Google Classroom */}
                <AnimatedLink
                  href="/resources/google-classroom"
                  className="group relative rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-4 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <ImageWithLoader
                      src="/images/resources/google-classroom.jpg"
                      alt="Google Classroom"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-h3 font-bold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="googleClassroom" fallback="Google Classroom" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      Access assignments, materials, and class resources in one organized place.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-body font-semibold text-accent">
                      Learn More →
                    </span>
                  </div>
                </AnimatedLink>

                {/* Free PDFs */}
                <AnimatedLink
                  href="/resources/free-pdfs"
                  className="group relative rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-4 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <ImageWithLoader
                      src="/images/resources/free-pdfs.jpg"
                      alt="Free PDFs & Warm-ups"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-h3 font-bold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="freePdfsWarmups" fallback="Free PDFs & Warm-ups" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      Download free practice materials, warm-up exercises, and study guides.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-body font-semibold text-accent">
                      Learn More →
                    </span>
                  </div>
                </AnimatedLink>
              </div>
            </SectionWrapper>

            {/* Additional Resources */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">More Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatedLink
                    href="/reading"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="reading" fallback="What I'm Reading" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      Discover books and articles I'm reading that might inspire your learning journey.
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/listening"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="listening" fallback="Listening" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      Podcasts, audiobooks, and audio resources to improve your listening skills.
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/youtube"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="watchingYouTube" fallback="Watching on YouTube" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      Curated YouTube channels and videos for English learning and practice.
                    </p>
                  </AnimatedLink>
                  
                  <AnimatedLink
                    href="/hanging-out"
                    className="group rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-3 transition-all hover:shadow-lg"
                  >
                    <h3 className="text-h3 font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      <AnimatedTranslation translationKey="hangingOut" fallback="Where I'm Hanging Out" />
                    </h3>
                    <p className="text-body text-card-foreground/80 leading-body">
                      Places, communities, and spaces where I find inspiration and connection.
                    </p>
                  </AnimatedLink>
                </div>
              </div>
            </SectionWrapper>

            {/* Newsletter */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-h2 font-bold text-card-foreground">
                    <AnimatedTranslation translationKey="newsletter" fallback="Newsletter" />
                  </h2>
                  <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                    Stay updated with new resources, tips, and learning opportunities.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder', 'Enter your email')}
                    className="flex-1 rounded-md border border-primary-foreground/20 bg-input px-4 py-2 text-lg md:text-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button className="flex h-10 items-center justify-center rounded-md bg-secondary px-6 text-secondary-foreground text-body font-semibold transition-colors hover:bg-secondary/90">
                    <AnimatedTranslation translationKey="subscribe" fallback="Subscribe" />
                  </button>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
