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

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

export default function PhilosophyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, SLIDES.length - 1));
    const slide = track.children[clamped] as HTMLElement;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    setActiveIndex(clamped);
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
    <section className="py-20 md:py-[100px] bg-[#112244] relative overflow-hidden" id="investment-philosophy" ref={sectionRef} aria-label="Investment philosophy carousel">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[600px] bg-gradient-to-r from-[#f8b11b]/[0.04] to-transparent blur-3xl" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-b from-[#0a1628]/50 to-transparent blur-3xl" aria-hidden="true" />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px] relative z-10">
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
                <h2 className="font-inter tracking-tighter text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-10 text-center">{slide.title}</h2>
                <ul className="flex flex-col gap-4 max-w-[640px] mx-auto w-full">
                  {slide.items.map((item) => (
                    <li key={item.heading} className="group/item flex items-start gap-4 p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.08] hover:border-[var(--color-gold)]/20 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                      <div className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center group-hover/item:bg-[var(--color-gold)]/20 transition-colors duration-300">
                        <div className="w-4 h-4">
                          <CheckIcon />
                        </div>
                      </div>
                      <p className="text-[0.95rem] text-white/70 leading-[1.7]">
                        <strong className="text-white block mb-1 text-[1rem] group-hover/item:text-[var(--color-gold)] transition-colors duration-300">
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

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-5 mt-12">
            {/* Left arrow */}
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/20 disabled:hover:text-white/60 disabled:hover:bg-transparent"
              aria-label="Previous slide"
            >
              <ArrowIcon direction="left" />
            </button>

            {/* Dots */}
            <div className="flex gap-3" role="tablist" aria-label="Carousel navigation">
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

            {/* Right arrow */}
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === SLIDES.length - 1}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/20 disabled:hover:text-white/60 disabled:hover:bg-transparent"
              aria-label="Next slide"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
