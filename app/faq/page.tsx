'use client';

import { useTranslation } from 'react-i18next';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      questionKey: "faqQuestion1",
      answerKey: "faqAnswer1"
    },
    {
      questionKey: "faqQuestion2",
      answerKey: "faqAnswer2"
    },
    {
      questionKey: "faqQuestion3",
      answerKey: "faqAnswer3"
    },
    {
      questionKey: "faqQuestion4",
      answerKey: "faqAnswer4"
    },
    {
      questionKey: "faqQuestion5",
      answerKey: "faqAnswer5"
    },
    {
      questionKey: "faqQuestion6",
      answerKey: "faqAnswer6"
    },
    {
      questionKey: "faqQuestion7",
      answerKey: "faqAnswer7"
    },
    {
      questionKey: "faqQuestion8",
      answerKey: "faqAnswer8"
    }
  ];

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
                  src="/images/faq/hero-faq.jpg"
                  alt="Frequently Asked Questions"
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
                <AnimatedTranslation translationKey="faq" fallback="FAQ" />
              </h1>
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                <AnimatedTranslation translationKey="faqSubtitle" fallback="Common questions about classes, teaching approach, and what to expect." />
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-3xl space-y-8">
            
            {/* FAQ Accordion */}
            <SectionWrapper delay={0.1}>
              <Accordion type="single" className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg border border-primary-foreground/20 bg-card px-6"
                  >
                    <AccordionTrigger className="text-left text-body font-semibold text-card-foreground hover:no-underline py-6">
                      <AnimatedTranslation translationKey={faq.questionKey} fallback={t(faq.questionKey)} />
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-card-foreground/90 leading-body pb-6">
                      <AnimatedTranslation translationKey={faq.answerKey} fallback={t(faq.answerKey)} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SectionWrapper>

            {/* Still Have Questions */}
            <SectionWrapper delay={0.2}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 text-center space-y-6">
                <h3 className="text-h3 font-semibold text-card-foreground">
                  <AnimatedTranslation translationKey="faqStillHaveQuestions" fallback="Still Have Questions?" />
                </h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  <AnimatedTranslation translationKey="faqStillHaveQuestionsDescription" fallback="Book a free call to discuss your specific questions and see if we're a good fit." />
                </p>
                <a
                  href="#book-call"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                >
                  <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
                </a>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
}
