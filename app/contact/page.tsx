'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Contact() {
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
                  src="/images/contact/hero-contact.jpg"
                  alt="Contact Liz"
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
                <AnimatedTranslation translationKey="connectWithLiz" fallback="Connect with Liz" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                Have questions? Want to learn more? Let's talk about how I can help you on your English learning journey.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-3xl space-y-16 sm:space-y-20">
            
            {/* Contact Form */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Get in Touch</h2>
                
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-body font-medium text-primary-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-body font-medium text-primary-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('emailPlaceholder', 'Enter your email')}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-body font-medium text-primary-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-body font-medium text-primary-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="peer flex w-full rounded-md border border-input bg-input px-3 py-2 text-body text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors motion-reduce:transition-none resize-none"
                      placeholder="Tell me about yourself and what you're looking for..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-full bg-secondary text-secondary-foreground text-base font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </SectionWrapper>

            {/* Book a Call CTA */}
            <SectionWrapper delay={0.2}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 text-center space-y-6">
                <h3 className="text-h3 font-semibold text-card-foreground">
                  Prefer to Talk?
                </h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  Book a free call to discuss your English learning goals and see if we're a good fit.
                </p>
                <a
                  href="#book-call"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
                </a>
              </div>
            </SectionWrapper>

            {/* Social Links */}
            <SectionWrapper delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-h2 font-bold text-primary-foreground text-center">Connect on Social Media</h2>
                
                <div className="flex justify-center gap-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
                  >
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
                  >
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
