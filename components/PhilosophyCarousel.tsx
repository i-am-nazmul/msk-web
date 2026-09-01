'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = [
  {
    title: 'Investment Philosophy',
    items: [
      {
        heading: 'Primacy of Risk Control',
        text: 'Ensures stability and trust by proactively managing potential threats to the portfolio.',
      },
      {
        heading: 'Emphasis on Consistency',
        text: 'Ensures reliability and trustworthiness in our processes and long-term outcomes.',
      },
      {
        heading: 'Disavowal of Market Timing',
        text: 'Rejecting the strategy of predicting market movements — instead focusing on long-term investment strategies for consistent growth.',
      },
    ],
  },
  {
    title: 'Why Choose Us?',
    items: [
      {
        heading: 'Expertise',
        text: 'Our team comprises seasoned professionals with extensive experience in the investment industry.',
      },
      {
        heading: 'Personalized Service',
        text: 'We offer tailored solutions that align precisely with your specific financial goals.',
      },
      {
        heading: 'Proven Track Record',
        text: 'We have a history of delivering consistent and competitive returns across market cycles.',
      },
      {
        heading: 'Client Satisfaction',
        text: 'Our commitment to excellence has earned us a loyal client base and numerous accolades.',
      },
    ],
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-full h-full stroke-[var(--color-gold)] stroke-[3px]">
    <polyline points="2,8 6,12 14,4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PhilosophyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slideWidth = track.clientWidth;
      const idx = Math.round(track.scrollLeft / slideWidth);
      setActiveIndex(idx);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-[100px] bg-[#112244]" id="investment-philosophy" ref={sectionRef} aria-label="Investment philosophy carousel">
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px]">
        <div className="text-white mb-0 opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal">
          <div className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-[length:200%_auto] mb-3 relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-[var(--color-gold)] bg-gradient-to-r from-[var(--color-gold)] via-[#fff3b0] to-[var(--color-gold)] animate-[gradientFlow_4s_linear_infinite]">
            Our Approach
          </div>
        </div>
        <div className="w-full max-w-[800px] mt-10 mx-auto relative opacity-0 translate-y-8 transition-all duration-[800ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal">
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar" ref={trackRef} role="list">
            {SLIDES.map((slide, si) => (
              <div
                key={slide.title}
                className="min-w-full flex-none snap-center flex flex-col justify-center px-4"
                role="listitem"
                aria-label={`Slide ${si + 1}: ${slide.title}`}
              >
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-8 text-center">{slide.title}</h2>
                <ul className="flex flex-col gap-5 max-w-[600px] mx-auto w-full">
                  {slide.items.map((item) => (
                    <li key={item.heading} className="flex items-start gap-4 p-5 rounded-[12px] bg-white/[0.03] border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <CheckIcon />
                      </div>
                      <p className="text-[0.95rem] text-white/70 leading-[1.6]">
                        <strong className="text-white block mb-1">
                          {item.heading}
                        </strong>
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-10" role="tablist" aria-label="Carousel navigation">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                className={`h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 p-0 hover:bg-white/60 ${i === activeIndex ? 'bg-[var(--color-gold)] w-8 animate-[borderPulse_2s_ease_infinite]' : 'bg-white/30 w-2.5'}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide: ${slide.title}`}
                aria-selected={i === activeIndex}
                role="tab"
                id={`carousel-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
