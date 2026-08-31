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
const revealClass = (i: number) => (i % 2 === 0 ? 'reveal-left' : 'reveal-right');

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
    <section className="principles-section" id="business-principles" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label" style={{ color: 'var(--clr-gold)' }}>How We Operate</div>
          <h2 className="section-title section-title--light">Business Principles</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The foundational values and philosophies that guide every decision we make.
          </p>
        </div>

        <div className="principles-grid">
          {PRINCIPLES.map((p, i) => (
            <article
              key={p.title}
              /* alternating slide-from-left / slide-from-right */
              className={`principle-card ${revealClass(i)} reveal-delay-${(i % 2) + 1}`}
              role="article"
            >
              <div className="principle-card-bg" style={{ backgroundImage: `url(${p.bg})` }} aria-hidden="true" />
              <div className="principle-card-overlay" aria-hidden="true" />
              <div className="principle-card-content">
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
