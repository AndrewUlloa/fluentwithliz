'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';

export default function Pricing() {
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
                  src="/images/pricing/hero-pricing.jpg"
                  alt="English learning investment"
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
                Pricing & Bundles
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                English for the life you're dreaming of. Investment in your future, accessible through group learning.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-5xl space-y-16 sm:space-y-20">
            
            {/* Why Group Classes */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="text-h2 font-bold text-primary-foreground">
                    Why Group Classes?
                  </h2>
                  <p className="text-body text-primary-foreground/90 leading-body">
                    I prefer group classes because there are more opportunities for authentic interaction. When it's one-on-one, students sometimes depend on you to carry the conversation. In a group, there are different ideas, and it ends up being more fun and productive.
                  </p>
                </div>

                {/* Image - Group Learning */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/pricing/group-learning.jpg"
                    alt="Group English classes with authentic interaction"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SectionWrapper>

            {/* Pricing Options */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-h2 font-bold text-primary-foreground mb-4">
                    Choose Your Path
                  </h2>
                  <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto">
                    Module-based classes on a semester basis. Less work for you, more structure for your learning journey.
                  </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  
                  {/* Group Classes - Featured */}
                  <div className="relative rounded-lg border-2 border-secondary bg-card p-8 space-y-6 shadow-lg">
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-h3 font-bold text-card-foreground">
                        Group Classes
                      </h3>
                      <p className="text-body text-card-foreground/80 leading-body">
                        More accessible pricing through shared group sessions. Authentic interaction with other motivated learners.
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-card-foreground">
                          $200
                        </span>
                        <span className="text-body text-card-foreground/70">
                          per module
                        </span>
                      </div>
                      <p className="text-small text-card-foreground/60">
                        Divided by 5 students = $40 per person
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          Module-based semester structure
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          Authentic group interaction
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          More fun and productive learning
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          Accessible pricing for motivated learners
                        </span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <AnimatedLink
                      href="/classes"
                      className="flex h-12 w-full items-center justify-center rounded-full bg-secondary text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                    >
                      Enroll in Group Class
                    </AnimatedLink>
                  </div>

                  {/* Individual Classes */}
                  <div className="relative rounded-lg border border-primary-foreground/20 bg-card p-8 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-h3 font-bold text-card-foreground">
                        Individual Classes
                      </h3>
                      <p className="text-body text-card-foreground/80 leading-body">
                        One-on-one personalized instruction for advanced learners ready for intensive coaching.
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-card-foreground">
                          $40-45
                        </span>
                        <span className="text-body text-card-foreground/70">
                          per hour
                        </span>
                      </div>
                      <p className="text-small text-card-foreground/60">
                        For advanced students ready for intensive coaching
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          Personalized one-on-one attention
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          Customized learning path
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          Flexible scheduling
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="size-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body text-card-foreground/90">
                          Intensive focus on your specific needs
                        </span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <AnimatedLink
                      href="/classes"
                      className="flex h-12 w-full items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground text-base font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
                    >
                      Book Individual Session
                    </AnimatedLink>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Module Structure */}
            <SectionWrapper delay={0.3}>
              <div className="space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="text-h2 font-bold text-primary-foreground">
                    Module-Based Learning
                  </h2>
                  <p className="text-body text-primary-foreground/90 leading-body">
                    I prefer module-based classes on a semester basis. It's way less work for you, and provides more structure for your learning journey. You enroll for a semester, and we work through structured modules together.
                  </p>
                </div>

                {/* Image - Module Structure */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/pricing/module-1.jpg"
                      alt="Module 1: Foundation"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/pricing/module-2.jpg"
                      alt="Module 2: Building Skills"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/pricing/module-3.jpg"
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

            {/* Who This Is For */}
            <SectionWrapper delay={0.4}>
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
                    src="/images/pricing/adult-learners.jpg"
                    alt="Motivated adult English learners"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">
                      You're Ready If...
                    </h3>
                    <ul className="space-y-2 text-body text-primary-foreground/90">
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>You need English to unlock career opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>You're motivated to learn, not forced</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>You want to honor your native language while learning English</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>You're curious and invested in your own growth</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-h3 font-semibold text-primary-foreground">
                      What You'll Get
                    </h3>
                    <ul className="space-y-2 text-body text-primary-foreground/90">
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Structured module-based curriculum</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Authentic group interaction and practice</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Tender approach that honors your vulnerability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span>Confidence and motivation to practice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Investment Section */}
            <SectionWrapper delay={0.5}>
              <div className="space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="text-h2 font-bold text-primary-foreground">
                    An Investment in Your Future
                  </h2>
                  <p className="text-body text-primary-foreground/90 leading-body">
                    For us, it might be sitting across from somebody, teaching them and correcting them for an hour. But for them, it might be the start of the rest of their life.
                  </p>
                </div>

                {/* Image - Success/Transformation */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/pricing/investment-future.jpg"
                    alt="Investment in your future"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper delay={0.6}>
              <div className="pt-8 pb-12">
                <div className="relative rounded-lg border border-primary-foreground/20 bg-card overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <ImageWithLoader
                      src="/images/pricing/cta-background.jpg"
                      alt=""
                      width={1200}
                      height={400}
                      sizes="100vw"
                      className="w-full h-full"
                      objectFit="cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8 sm:p-12 text-center space-y-6">
                    <h3 className="text-h3 font-semibold text-card-foreground">
                      Ready to Start Your English Journey?
                    </h3>
                    <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                      Book a free call to discuss which option is right for you and your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <AnimatedLink
                        href="/classes"
                        className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                      >
                        {t('bookFreeCall', 'Book a Free Call')}
                      </AnimatedLink>
                      <AnimatedLink
                        href="/about"
                        className="flex h-12 items-center justify-center rounded-full border border-primary-foreground/20 px-8 text-primary-foreground text-base font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
                      >
                        Learn More About Liz
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
