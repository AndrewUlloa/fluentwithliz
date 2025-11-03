'use client';

import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  name: string;
  language: string;
  message: string;
  country: string;
}

export default function WallOfLove() {
  const { t } = useTranslation();

  // Sample testimonials - in a real app, these would come from a database or API
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Maria González',
      language: 'Spanish',
      country: 'Spain',
      message: t('testimonial1'),
    },
    {
      id: 2,
      name: 'Jean-Pierre Dubois',
      language: 'French',
      country: 'France',
      message: t('testimonial2'),
    },
    {
      id: 3,
      name: 'Emma Schmidt',
      language: 'German',
      country: 'Germany',
      message: t('testimonial3'),
    },
    {
      id: 4,
      name: 'Marco Rossi',
      language: 'Italian',
      country: 'Italy',
      message: t('testimonial4'),
    },
    {
      id: 5,
      name: 'Yuki Tanaka',
      language: 'Japanese',
      country: 'Japan',
      message: t('testimonial5'),
    },
    {
      id: 6,
      name: 'Ana Silva',
      language: 'Portuguese',
      country: 'Brazil',
      message: t('testimonial6'),
    },
  ];

  return (
    <div className="flex h-full flex-col bg-background overflow-hidden">
      <div className="container mx-auto flex h-full flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 py-8 sm:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-3">
              {t('wallOfLoveTitle')}
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto sm:text-lg">
              {t('wallOfLoveSubtitle')}
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-8 mb-16 lg:mb-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-card-foreground text-sm sm:text-base">
                      {testimonial.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {testimonial.language} • {testimonial.country}
                  </p>
                </div>
                <p className="text-sm text-card-foreground leading-relaxed sm:text-base">
                  "{testimonial.message}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground sm:text-base">
              {t('wallOfLoveFooter')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

