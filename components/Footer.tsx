'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import AnimatedLink from '@/components/AnimatedLink';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    // TODO: Add actual newsletter subscription API call here
    // For now, just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setSubmitted(true);
    setEmail('');
    setIsSubmitting(false);
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const footerLinks = [
    { href: '/classes', key: 'footerClasses' },
    { href: '/about', key: 'footerAbout' },
    { href: '/resources', key: 'footerResources' },
    { href: '/contact', key: 'footerContact' },
  ];

  const socialLinks = [
    {
      href: 'https://instagram.com',
      icon: Instagram,
      label: 'Instagram',
    },
    {
      href: 'https://tiktok.com',
      icon: MessageCircle,
      label: 'TikTok',
    },
  ];

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <AnimatedLink
              href="/"
              className="text-lg font-semibold text-primary-foreground transition-colors hover:text-primary-foreground/80"
            >
              <AnimatedTranslation translationKey="siteName" fallback="Fluent with Liz" />
            </AnimatedLink>
            <p className="text-sm text-primary-foreground/70">
              <AnimatedTranslation
                translationKey="footerNewsletterDescription"
                fallback="Stay updated with tips, resources, and updates."
              />
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary-foreground">
              <AnimatedTranslation translationKey="footerQuickLinks" fallback="Quick Links" />
            </h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <AnimatedLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <AnimatedTranslation translationKey={link.key} fallback={link.key} />
                </AnimatedLink>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary-foreground">
              <AnimatedTranslation translationKey="footerNewsletter" fallback="Newsletter" />
            </h3>
            <p className="text-sm text-primary-foreground/70">
              <AnimatedTranslation
                translationKey="footerNewsletterDescription"
                fallback="Stay updated with tips, resources, and updates."
              />
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder', 'Enter your email')}
                  required
                  disabled={isSubmitting || submitted}
                  className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-base md:text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 focus:border-primary-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || submitted || !email}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {submitted ? (
                    <>
                      <Mail className="size-4" aria-hidden="true" />
                      <span>{t('subscribed', 'Subscribed!')}</span>
                    </>
                  ) : (
                    <>
                      <Mail className="size-4" aria-hidden="true" />
                      <AnimatedTranslation translationKey="subscribe" fallback="Subscribe" />
                    </>
                  )}
                </button>
              </div>
              {submitted && (
                <p className="text-xs text-primary-foreground/70">
                  {t('footerSubscribedMessage', 'Thank you for subscribing!')}
                </p>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary-foreground">
              <AnimatedTranslation translationKey="footerFollowUs" fallback="Follow Us" />
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/20 hover:text-primary-foreground"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              {t('footerCopyright', { year: currentYear })}
            </p>
            <div className="flex gap-6">
              <AnimatedLink
                href="/privacy"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                <AnimatedTranslation
                  translationKey="footerPrivacyPolicy"
                  fallback="Privacy Policy"
                />
              </AnimatedLink>
              <AnimatedLink
                href="/terms"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                <AnimatedTranslation
                  translationKey="footerTermsOfService"
                  fallback="Terms of Service"
                />
              </AnimatedLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
