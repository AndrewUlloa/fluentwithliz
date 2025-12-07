'use client';

import { useTranslation } from 'react-i18next';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

interface Testimonial {
  id: number;
  name: string;
  language: string;
  messageKey: string;
  country: string;
}

export default function WallOfLove() {
  const { t } = useTranslation();

  // Sample testimonials - in a real app, these would come from a database or API
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      language: 'Spanish',
      country: 'Spain',
      messageKey: 'testimonial1',
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      language: 'Spanish',
      country: 'Mexico',
      messageKey: 'testimonial2',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      language: 'Spanish',
      country: 'Colombia',
      messageKey: 'testimonial3',
    },
    {
      id: 4,
      name: 'Diego Fernández',
      language: 'Spanish',
      country: 'Argentina',
      messageKey: 'testimonial4',
    },
    {
      id: 5,
      name: 'Sofía López',
      language: 'Spanish',
      country: 'Chile',
      messageKey: 'testimonial5',
    },
    {
      id: 6,
      name: 'Andrés Torres',
      language: 'Spanish',
      country: 'Peru',
      messageKey: 'testimonial6',
    },
  ];

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 py-8 sm:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedTranslation
              translationKey="wallOfLoveTitle"
              as="h1"
              className="text-h1 font-bold tracking-tight text-primary-foreground mb-3"
            />
            <AnimatedTranslation
              translationKey="wallOfLoveSubtitle"
              as="p"
              className="text-body text-primary-foreground/70 max-w-2xl mx-auto"
            />
          </div>
        </div>

        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-card-foreground text-body">
                      {testimonial.name}
                    </h3>
                  </div>
                  <p className="text-small text-muted-foreground">
                    {testimonial.country}
                  </p>
                </div>
                <AnimatedTranslation
                  translationKey={testimonial.messageKey}
                  as="p"
                  className="text-body text-card-foreground leading-relaxed"
                >
                  {(text) => `"${text}"`}
                </AnimatedTranslation>
              </div>
            ))}
            </div>

            <div className="mt-8 text-center">
            <AnimatedTranslation
              translationKey="wallOfLoveFooter"
              as="p"
              className="text-body text-primary-foreground/70"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

