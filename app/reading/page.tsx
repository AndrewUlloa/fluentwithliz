'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function Reading() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="reading" fallback="What I'm Reading" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Books and articles that inspire my teaching and might inspire your learning journey.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* Current Reading */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Currently Reading</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/reading/current-book-1.jpg"
                      alt="Current book"
                      width={300}
                      height={400}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Book Title</h3>
                    <p>
                      Check back soon for updates on what I'm currently reading! I love sharing books that explore language, culture, identity, and stories that resonate with language learners.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Recommendations */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Recommendations</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/reading/recommendation-1.jpg"
                        alt="Book recommendation"
                        width={200}
                        height={267}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/reading/recommendation-2.jpg"
                        alt="Book recommendation"
                        width={200}
                        height={267}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/reading/recommendation-3.jpg"
                        alt="Book recommendation"
                        width={200}
                        height={267}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  
                  <p className="text-body text-primary-foreground/90 leading-body">
                    I'm always reading books that explore themes relevant to language learners—stories about identity, belonging, cultural bridges, and the power of language to transform lives. Check back soon for specific recommendations!
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Book Club Link */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 text-center space-y-4">
                <h3 className="text-h3 font-semibold text-card-foreground">Join Our Book Club</h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  Read and discuss books together in our monthly book club sessions.
                </p>
                <a
                  href="/book-club"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  Learn About Book Club
                </a>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
