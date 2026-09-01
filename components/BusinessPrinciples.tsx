'use client';

import { useEffect, useRef } from 'react';

const PRINCIPLES = [
  {
    bg: '/img/article-01.jpg',
    title: 'Client Communication',
    text: 'Our communication with clients must fulfill their needs and enhance our relationships. We aim for every client to fully grasp our philosophy, approach, actions, and results. When reporting our performance, we accurately present our achievements, avoiding excuses for losses and not claiming credit for unexpected gains.',
  },
  {
    bg: '/img/article-04.jpg',
    title: 'Pursuing Investment Excellence',
    text: 'Our aim is to excel in investing — securing attractive returns without taking on equivalent risk, a balance achievable only in less efficient markets. Our foremost priority is ensuring our actions lead to consistency, capital protection, and outstanding performance during challenging times.',
  },
  {
    bg: '/img/article-02.jpg',
    title: 'Exclusive, Comprehensive Research',
    text: 'To add value in our markets, we rely on a "knowledge advantage" derived from exclusive, comprehensive research. We have developed a consistently applied research methodology focused on identifying key elements for success and pinpointing investment candidates that meet these criteria.',
  },
  {
    bg: '/img/article-06.jpg',
    title: 'Long-Term Value Creation',
    text: 'We are committed to fostering sustainable, long-term value creation in every investment we make — looking beyond short-term gains to focus on opportunities that provide enduring benefits for our clients, stakeholders, and society.',
  },
];

// Alternate: even index slides from left, odd from right
const revealClass = (i: number) => (i % 2 === 0 ? 'opacity-0 -translate-x-14 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [&.visible]:opacity-100 [&.visible]:translate-x-0 reveal-left' : 'opacity-0 translate-x-14 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [&.visible]:opacity-100 [&.visible]:translate-x-0 reveal-right');

export default function BusinessPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-[100px] bg-[var(--color-navy)]" id="business-principles" ref={sectionRef}>
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px]">
        <div className="opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal">
          <div className="inline-block text-sm font-bold tracking-[0.15em] uppercase mb-3 relative pl-12 text-[var(--color-gold)] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-[var(--color-gold)]">
            How We Operate
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.2] mb-5">Business Principles</h2>
          <p className="text-base md:text-[1.1rem] text-white/60 max-w-[640px] leading-[1.6] mb-12">
            The foundational values and philosophies that guide every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <article
              key={p.title}
              /* alternating slide-from-left / slide-from-right */
              className={`group relative h-[420px] overflow-hidden flex items-end p-8 md:p-12 ${revealClass(i)}`}
              style={{ transitionDelay: `${((i % 2) + 1) * 100}ms` }}
              role="article"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-105 z-0" style={{ backgroundImage: `url(${p.bg})` }} aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/80 to-transparent z-[1] transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />
              
              <div className="relative z-[2] w-full max-w-[500px]">
                <h2 className="font-serif text-[1.5rem] font-bold text-white mb-4 transition-all duration-400 group-hover:text-[var(--color-gold)] group-hover:-translate-y-2">{p.title}</h2>
                <p className="text-[0.95rem] text-white/70 leading-[1.7] opacity-0 max-h-0 overflow-hidden transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:max-h-[240px] group-hover:translate-y-0">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
