'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function Classes() {
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
                  src="/images/classes/hero-classes.jpg"
                  alt="English classes with Liz"
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
                <AnimatedTranslation translationKey="classes" fallback="Classes" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Module-based classes on a semester basis. Less work for you, more structure for your learning journey.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-5xl space-y-16 sm:space-y-20">
            
            {/* Class Types Overview */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="text-h2 font-bold text-primary-foreground">
                    Choose Your Learning Path
                  </h2>
                  <p className="text-body text-primary-foreground/90 leading-body">
                    I prefer module-based classes on a semester basis. It's way less work for you, and provides more structure for your learning journey. You enroll for a semester, and we work through structured modules together.
                  </p>
                </div>

                {/* Class Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  
                  {/* Fluent Circle - Group Classes */}
                  <AnimatedLink
                    href="/classes/fluent-circle"
                    className="group relative rounded-lg border-2 border-secondary bg-card p-6 space-y-4 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                    
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <ImageWithLoader
                        src="/images/classes/fluent-circle.jpg"
                        alt="Fluent Circle group classes"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-h3 font-bold text-card-foreground group-hover:text-secondary transition-colors">
                        <AnimatedTranslation translationKey="fluentCircle" fallback="Fluent Circle (Groups)" />
                      </h3>
                      <p className="text-body text-card-foreground/80 leading-body">
                        More accessible pricing through shared group sessions. Authentic interaction with other motivated learners.
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-body font-semibold text-secondary">
                        Learn More →
                      </span>
                    </div>
                  </AnimatedLink>

                  {/* Fluent 1:1 - Individual Classes */}
                  <AnimatedLink
                    href="/classes/fluent-1on1"
                    className="group relative rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-4 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <ImageWithLoader
                        src="/images/classes/fluent-1on1.jpg"
                        alt="Fluent 1:1 individual classes"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-h3 font-bold text-card-foreground group-hover:text-accent transition-colors">
                        <AnimatedTranslation translationKey="fluent1on1" fallback="Fluent 1:1" />
                      </h3>
                      <p className="text-body text-card-foreground/80 leading-body">
                        One-on-one personalized instruction for advanced learners ready for intensive coaching.
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-body font-semibold text-accent">
                        Learn More →
                      </span>
                    </div>
                  </AnimatedLink>

                  {/* Fluent Conversation */}
                  <AnimatedLink
                    href="/classes/fluent-conversation"
                    className="group relative rounded-lg border border-primary-foreground/20 bg-card p-6 space-y-4 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <ImageWithLoader
                        src="/images/classes/fluent-conversation.jpg"
                        alt="Fluent Conversation classes"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-h3 font-bold text-card-foreground group-hover:text-accent transition-colors">
                        <AnimatedTranslation translationKey="fluentConversation" fallback="Fluent Conversation" />
                      </h3>
                      <p className="text-body text-card-foreground/80 leading-body">
                        Focused conversation practice to build confidence and fluency in real-world situations.
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-body font-semibold text-accent">
                        Learn More →
                      </span>
                    </div>
                  </AnimatedLink>
                </div>
              </div>
            </SectionWrapper>

            {/* Why Module-Based */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="text-h2 font-bold text-primary-foreground">
                    Module-Based Learning Structure
                  </h2>
                  <p className="text-body text-primary-foreground/90 leading-body">
                    I prefer module-based classes on a semester basis. It's way less work for you, and provides more structure for your learning journey. You enroll for a semester, and we work through structured modules together.
                  </p>
                </div>

                {/* Image - Module Structure */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/classes/module-1.jpg"
                      alt="Module 1: Foundation"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/classes/module-2.jpg"
                      alt="Module 2: Building Skills"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/classes/module-3.jpg"
                      alt="Module 3: Mastery"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* For Motivated Adults */}
            <SectionWrapper delay={0.3}>
              <div className="space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="text-h2 font-bold text-primary-foreground">
                    For Motivated Adult Learners
                  </h2>
                  <p className="text-body text-primary-foreground/90 leading-body">
                    I specialize in teaching adults—people in their 30s, 40s, and 50s. Adults take it more seriously. They're motivated because they need English to unlock life or career opportunities, not because someone is forcing them.
                  </p>
                </div>

                {/* Image - Adult Learners */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/classes/adult-learners.jpg"
                    alt="Motivated adult English learners"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper delay={0.4}>
              <div className="pt-8 pb-12">
                <div className="relative rounded-lg border border-primary-foreground/20 bg-card overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <ImageWithLoader
                      src="/images/classes/cta-background.jpg"
                      alt=""
                      width={1200}
                      height={400}
                      sizes="100vw"
                      className="w-full h-full"
                      objectFit="cover"
                    />
                  </div>
                  
                  <div className="relative p-8 sm:p-12 text-center space-y-6">
                    <h3 className="text-h3 font-semibold text-card-foreground">
                      Ready to Start Your English Journey?
                    </h3>
                    <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                      Book a free call to discuss which class option is right for you and your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <AnimatedLink
                        href="#book-call"
                        className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                      >
                        <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
                      </AnimatedLink>
                      <AnimatedLink
                        href="/pricing"
                        className="flex h-12 items-center justify-center rounded-full border border-primary-foreground/20 px-8 text-primary-foreground text-base font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
                      >
                        <AnimatedTranslation translationKey="pricingBundles" fallback="Pricing & Bundles" />
                      </AnimatedLink>
                    </div>
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
