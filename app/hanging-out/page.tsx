'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function HangingOut() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="hangingOut" fallback="Where I'm Hanging Out" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Places, communities, and spaces where I find inspiration and connection.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About This Section */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/hanging-out/hero-places.jpg"
                    alt="Places and communities"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    When I think about myself, I'm all about vintage, coffee, flowers, architecture, pale pink, books, and writing. These are the things that inspire me and the spaces where I feel most at home.
                  </p>
                  <p>
                    Here are some of the places, communities, and spaces where I find inspiration and connection—both online and in person.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Places & Spaces */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Places & Spaces</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/hanging-out/cafe.jpg"
                        alt="Favorite cafe"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Cafes & Coffee Shops</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      I love finding quiet cafes where I can work, read, and sometimes teach. The cafe vibe, when it's not too loud, creates a nice atmosphere for learning.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/hanging-out/bookstore.jpg"
                        alt="Bookstores and libraries"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Bookstores & Libraries</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Books are a huge part of who I am. I love exploring bookstores and libraries, discovering new stories, and finding inspiration in the written word.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/hanging-out/architecture.jpg"
                        alt="Architecture and design"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Architecture & Design</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      I'm drawn to beautiful architecture and thoughtful design. Whether it's historic buildings or modern spaces, I find inspiration in well-designed environments.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithLoader
                        src="/images/hanging-out/community.jpg"
                        alt="Communities and connections"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-h3 font-semibold text-primary-foreground">Communities</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Both online and offline communities where language learners, educators, and creative people come together to share and grow.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Personal Touch */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 space-y-4">
                <h3 className="text-h3 font-semibold text-card-foreground">A Personal Note</h3>
                <p className="text-body text-card-foreground/90 leading-body">
                  These spaces and places reflect who I am—someone who values beauty, learning, connection, and the quiet moments that make life meaningful. I hope sharing these helps you get to know me better and maybe find some inspiration for your own journey.
                </p>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
