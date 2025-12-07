'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function GoogleClassroom() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-h1 font-bold text-primary-foreground">
                <AnimatedTranslation translationKey="googleClassroom" fallback="Google Classroom" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Access assignments, materials, and class resources in one organized place.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* About Google Classroom */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/resources/google-classroom-detail.jpg"
                    alt="Google Classroom platform"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    All class materials, assignments, and resources are organized in Google Classroom. This makes it easy to access everything you need for your learning journey in one place.
                  </p>
                  <p>
                    Once you enroll in a class, you'll receive access to your Google Classroom where you can find module materials, homework assignments, practice exercises, and additional resources.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Features */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">What You'll Find</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Class Materials</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      All lesson materials, slides, and handouts organized by module.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Assignments</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Homework and practice exercises with clear due dates and instructions.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Resources</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Additional reading materials, videos, and practice resources.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">Announcements</h3>
                    <p className="text-body text-primary-foreground/90 leading-body">
                      Important updates, schedule changes, and class announcements.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Access Info */}
            <SectionWrapper delay={0.3}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 space-y-4">
                <h3 className="text-h3 font-semibold text-card-foreground">How to Access</h3>
                <p className="text-body text-card-foreground/90 leading-body">
                  Once you enroll in a class, you'll receive an invitation to join the Google Classroom. You'll need a Google account (which is free to create) to access the materials.
                </p>
              </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedLink
                  href="/classes"
                  className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  Enroll in a Class
                </AnimatedLink>
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
