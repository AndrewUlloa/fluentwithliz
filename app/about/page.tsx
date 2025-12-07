'use client';

import { useTranslation } from 'react-i18next';
import AnimatedLink from '@/components/AnimatedLink';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnimatedTranslation } from '@/components/AnimatedTranslation';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Image */}
        <SectionWrapper className="flex-shrink-0 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Hero Image - Full Width */}
            <div className="mb-8 sm:mb-12">
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden">
                <ImageWithLoader
                  src="/images/about/hero-liz.jpg"
                  alt="Liz teaching English"
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
              <AnimatedTranslation
                translationKey="aboutLiz"
                fallback="About Liz"
                as="h1"
                className="text-h1 font-bold text-primary-foreground"
              />
              <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto leading-body">
                English for the life you're dreaming of. Learn without losing your native soul.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Main Content */}
        <div className="flex-1 pb-8 mb-16 lg:mb-0">
          <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
            
            {/* My Story */}
            <SectionWrapper delay={0.1}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">My Story</h2>
                
                {/* Image - New York / Childhood */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="order-2 md:order-1 space-y-4 text-body text-primary-foreground/90 leading-body">
                    <p>
                      I'm Liz, and I'm from New York. I grew up here, went to school here, and I'm an educator specializing in teaching English to foreigners. But my journey with language learning started long before I became a teacher.
                    </p>
                    <p>
                      My dad was born in Colombia, and growing up, I witnessed firsthand the difficulties he faced assimilating into American life. He never taught my sister or me Spanish—not a single word. It wasn't until I got older that I realized how much that said without literally saying anything.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/about/new-york-childhood.jpg"
                      alt="Growing up in New York"
                      width={600}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Identity Struggle */}
                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    I remember having identity issues because I didn't fit in with the white kids here, and I didn't fit in with the Hispanic kids here. I just didn't really know who I was, and I felt like a part of me was really missing.
                  </p>
                </div>

                {/* Image - Spain Study Abroad */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/about/spain-study-abroad.jpg"
                      alt="Studying abroad in Spain"
                      width={600}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                    <p>
                      Then I studied abroad in Spain, and I was just around Spanish all the time. I fell in love with it. Even now, it's like my preferred language because it's just so much more funny and descriptive. The Tuesday is like so much better.
                    </p>
                    <p>
                      I studied hard and earned my C1 certificate in Spanish. Of course, I still make mistakes, but I have that certificate, and more importantly, I have that connection to a language that feels like home.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Why Language Matters */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">Why Language Matters</h2>
                
                {/* Full-width image - Family/Grandmother */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/about/family-grandmother.jpg"
                    alt="Connecting with family through language"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    Learning Spanish was a big deal for me for two reasons. First, it brought me closer to my extended family and my origins. My grandmother took care of us while my parents worked two or three jobs. I'm one of the only grandkids who can speak Spanish and speak to her.
                  </p>
                  <p>
                    It was almost this strange dynamic where you feel their love through their actions and behaviors, but you can't ever communicate with them. That connection through language is priceless.
                  </p>
                  <p>
                    The other part is this: I feel like having another language is like having another soul. When you have all those different souls, it kind of makes up who you are. So I take that with me—appreciate your native language, but at the same time, explore the other identities that coexist within you.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* My Approach */}
            <SectionWrapper delay={0.3}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">My Approach</h2>
                
                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    With language learning, I know what it's like to really struggle with that. There's a lot of vulnerability involved, and I feel like I do a good job tenderly approaching language with my students.
                  </p>
                  <p>
                    Globally, learning English is what's going to give you a lot of opportunities. It's the number one language that everyone communicates in, and that people at this point kind of expect you to know. But I'm able to teach it in a way that also incorporates your first language, honoring that native soul, while also helping you find out your identity in English.
                  </p>
                </div>

                {/* Image Grid - Teaching Approach */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/about/group-classes.jpg"
                      alt="Group English classes"
                      width={600}
                      height={450}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/about/teaching-adults.jpg"
                      alt="Teaching adult English learners"
                      width={600}
                      height={450}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    I prefer group classes because there are more opportunities for authentic interaction. When it's one-on-one, students sometimes depend on you to carry the conversation. In a group, there are different ideas, and it ends up being more fun and productive.
                  </p>
                  <p>
                    I specialize in teaching adults—people in their 30s, 40s, and 50s. Adults take it more seriously. They're motivated because they need English to unlock life or career opportunities, not because someone is forcing them.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* The Transformation */}
            <SectionWrapper delay={0.4}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">The Transformation</h2>
                
                {/* Before/After or Success Story Image */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src="/images/about/student-success.jpg"
                    alt="Student transformation and success"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    I've had students come to me who couldn't even say one full sentence. Then, a few years later, they're going to college in America, studying to be doctors. They tell me, "You have no idea where I came from. We don't even have public toilets in our house, and now I'm studying to be a doctor. No one ever told me I could do any of those things."
                  </p>
                  <p>
                    For us, it might be sitting across from somebody, teaching them and correcting them for an hour. But for them, it might be the start of the rest of their life.
                  </p>
                  <p>
                    Everyone always tells me that they feel a lot more confident and motivated to practice. That's what I'm here for—not just to teach English, but to help you see what this journey can mean for the rest of your life.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* What to Expect */}
            <SectionWrapper delay={0.5}>
              <div className="space-y-8">
                <h2 className="text-h2 font-bold text-primary-foreground">What to Expect</h2>
                
                {/* Image - Welcoming/Arrival */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                    <p>
                      When you arrive, I want you to feel <strong className="font-semibold text-primary-foreground">curious</strong>, <strong className="font-semibold text-primary-foreground">open-minded</strong>, <strong className="font-semibold text-primary-foreground">trusting</strong> in the process, and <strong className="font-semibold text-primary-foreground">positive</strong>.
                    </p>
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithLoader
                      src="/images/about/welcoming-space.jpg"
                      alt="Welcoming learning environment"
                      width={600}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Image - Empowerment/Departure */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden order-2 md:order-1">
                    <ImageWithLoader
                      src="/images/about/empowered-students.jpg"
                      alt="Empowered and confident students"
                      width={600}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-4 text-body text-primary-foreground/90 leading-body order-1 md:order-2">
                    <p>
                      By the time you leave, I want you to feel <strong className="font-semibold text-primary-foreground">empowered</strong>, <strong className="font-semibold text-primary-foreground">confident</strong>, <strong className="font-semibold text-primary-foreground">motivated</strong>, <strong className="font-semibold text-primary-foreground">supported</strong>, <strong className="font-semibold text-primary-foreground">fulfilled</strong>, and <strong className="font-semibold text-primary-foreground">hopeful</strong>.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-body text-primary-foreground/90 leading-body">
                  <p>
                    This is for the student who really wants to learn and value this experience with the same intentionality. You can sense it when you meet with them—that motivation, that curiosity, that investment in their own growth.
                  </p>
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
                      src="/images/about/cta-background.jpg"
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
                      Ready to start your English journey?
                    </h3>
                    <p className="text-body text-card-foreground/80 max-w-xl mx-auto">
                      Join motivated adult English learners who are ready to unlock new opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <AnimatedLink
                        href="/classes"
                        className="flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-secondary-foreground text-base font-semibold transition-colors hover:bg-secondary/90"
                      >
                        <AnimatedTranslation translationKey="bookFreeCall" fallback="Book a Free Call" />
                      </AnimatedLink>
                      <AnimatedLink
                        href="/wall-of-love"
                        className="flex h-12 items-center justify-center rounded-full border border-primary-foreground/20 px-8 text-primary-foreground text-base font-medium transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
                      >
                        <AnimatedTranslation translationKey="wallOfLove" fallback="Wall of Love" />
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
