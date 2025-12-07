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
      question: "What age groups do you teach?",
      answer: "I specialize in teaching adults—people in their 30s, 40s, and 50s. Adults take it more seriously. They're motivated because they need English to unlock life or career opportunities, not because someone is forcing them."
    },
    {
      question: "Do you offer group classes or individual classes?",
      answer: "I offer both! I prefer group classes because there are more opportunities for authentic interaction. When it's one-on-one, students sometimes depend on you to carry the conversation. In a group, there are different ideas, and it ends up being more fun and productive. However, individual classes are available for advanced students ready for intensive coaching."
    },
    {
      question: "How does the module-based system work?",
      answer: "I prefer module-based classes on a semester basis. It's way less work for you, and provides more structure for your learning journey. You enroll for a semester, and we work through structured modules together. This approach gives you clear progress markers and a sense of accomplishment as you complete each module."
    },
    {
      question: "What makes your teaching approach different?",
      answer: "I know what it's like to really struggle with language learning. There's a lot of vulnerability involved, and I feel like I do a good job tenderly approaching language with my students. I'm able to teach English in a way that also incorporates your first language, honoring that native soul, while also helping you find out your identity in English."
    },
    {
      question: "How much do classes cost?",
      answer: "Group classes are $200 per module, divided by 5 students (so $40 per person). Individual classes are $40-45 per hour for advanced students ready for intensive coaching. Group classes offer more accessible pricing while still providing quality instruction."
    },
    {
      question: "What should I expect when I arrive?",
      answer: "When you arrive, I want you to feel curious, open-minded, trusting in the process, and positive. By the time you leave, I want you to feel empowered, confident, motivated, supported, fulfilled, and hopeful."
    },
    {
      question: "Do I need to be at a certain level to join?",
      answer: "This is for the student who really wants to learn and value this experience with the same intentionality. You can sense it when you meet with them—that motivation, that curiosity, that investment in their own growth. Whether you're a beginner or advanced, if you're motivated and ready to invest in your learning, you're welcome."
    },
    {
      question: "Can I try a class before committing?",
      answer: "Yes! Book a free call with me to discuss your goals and see if we're a good fit. This gives us both a chance to understand what you're looking for and whether my teaching style aligns with your learning needs."
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
                Common questions about classes, teaching approach, and what to expect.
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
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-card-foreground/90 leading-body pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SectionWrapper>

            {/* Still Have Questions */}
            <SectionWrapper delay={0.2}>
              <div className="rounded-lg border border-primary-foreground/20 bg-card p-8 text-center space-y-6">
                <h3 className="text-h3 font-semibold text-card-foreground">
                  Still Have Questions?
                </h3>
                <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                  Book a free call to discuss your specific questions and see if we're a good fit.
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
