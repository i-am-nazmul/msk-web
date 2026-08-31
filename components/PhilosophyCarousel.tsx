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
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <polyline points="2,8 6,12 14,4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PhilosophyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
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

  return (
    <section className="philosophy-section" id="investment-philosophy" aria-label="Investment philosophy carousel">
      <div className="container">
        <div className="reveal" style={{ color: 'white', marginBottom: 0 }}>
          <div className="section-label">Our Approach</div>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-track" ref={trackRef} role="list">
            {SLIDES.map((slide, si) => (
              <div
                key={slide.title}
                className="carousel-slide"
                role="listitem"
                aria-label={`Slide ${si + 1}: ${slide.title}`}
              >
                <h2 className="carousel-slide-title">{slide.title}</h2>
                <ul className="philosophy-list">
                  {slide.items.map((item) => (
                    <li key={item.heading} className="philosophy-item">
                      <div className="philosophy-check">
                        <CheckIcon />
                      </div>
                      <p className="philosophy-item-text">
                        <strong style={{ color: 'white', display: 'block', marginBottom: '4px' }}>
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
          <div className="carousel-dots" role="tablist" aria-label="Carousel navigation">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
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
