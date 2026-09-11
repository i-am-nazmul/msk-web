'use client';

import Image from 'next/image';
import { useCallback } from 'react';

function downloadApp() {
  const ua = navigator.userAgent || navigator.vendor;
  const androidURL = 'https://play.google.com/store/apps/details?id=com.iw.mint.app';
  const iosURL = 'https://apps.apple.com/in/app/mint-by-investwell/id1479042500';
  if (/android/i.test(ua)) window.location.href = androidURL;
  else if (/iPhone|iPad|iPod/i.test(ua)) window.location.href = iosURL;
  else window.location.href = androidURL;
}

const TRUST_BADGES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Secure & Trusted',
    desc: 'Your data is protected with highest standards',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Transparent Access',
    desc: 'Real-time visibility of your portfolio',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Goal Focused',
    desc: 'Every strategy is aligned with your goals',
  },
];

export default function Hero() {
  const scrollTo = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  return (
    <section
      className="relative bg-white pt-[72px] min-h-screen flex items-center overflow-hidden"
      id="home"
      aria-label="Hero banner"
    >


      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ── Left column ── */}
        <div className="flex flex-col">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 mb-6 animate-[fadeInUp_0.6s_ease_both]">
            <span className="block w-8 h-[2px] bg-[var(--color-gold)]" />
            <span className="text-[13px] font-bold tracking-[0.18em] uppercase text-[var(--color-gold)]">
              Invest with Clarity. Grow with Confidence.
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-inter tracking-tighter text-[clamp(3rem,6vw,4.5rem)] font-bold leading-[1.12] text-[#0a1628] mb-6 animate-[fadeInUp_0.7s_ease_0.1s_both]"
          >
            Your <span className="text-[1.2em]">Wealth</span><br />
            Deserves More Than<br />
            <span className="text-[var(--color-gold)]">Market Noise.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-[1.125rem] leading-[1.7] text-gray-500 max-w-[500px] mb-9 animate-[fadeInUp_0.7s_ease_0.2s_both]">
            Personalised investment strategies, disciplined risk management and transparent
            guidance—designed around your goals, not market predictions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-[fadeInUp_0.7s_ease_0.3s_both]">
            <button
              onClick={scrollTo('#contact')}
              className="group inline-flex items-center gap-2 bg-[var(--color-navy)] text-white text-[1rem] font-semibold px-8 py-4 rounded-lg shadow-[0_4px_16px_rgba(10,22,40,0.25)] hover:bg-[var(--color-navy-mid)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,22,40,0.3)] active:translate-y-0 transition-all duration-200"
              id="hero-consultation-btn"
              aria-label="Book your wealth consultation"
            >
              Book Your Wealth Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={downloadApp}
              className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy)] text-[1rem] font-semibold px-8 py-4 rounded-lg border border-gray-200 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-200"
              id="hero-app-btn"
              aria-label="Explore the MSK App"
            >
              Explore the MSK App
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 animate-[fadeInUp_0.7s_ease_0.4s_both]">
            {TRUST_BADGES.map((b) => (
              <div key={b.title} className="flex items-start gap-3 max-w-[160px]">
                <div className="flex-shrink-0 mt-0.5 text-[var(--color-gold)]">{b.icon}</div>
                <div>
                  <p className="text-[14px] font-bold text-[#0a1628] leading-tight">{b.title}</p>
                  <p className="text-[13px] text-gray-400 leading-snug mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — phone mockup ── */}
        <div className="relative flex items-center justify-center animate-[fadeInUp_0.9s_ease_0.2s_both]">


          <div className="relative w-full max-w-[480px]">
            <Image
              src="/hero_image.png"
              alt="Financial Freedom Pyramid - Research, Risk Control, Consistency, Discipline, Your Financial Freedom"
              width={480}
              height={640}
              priority
              quality={95}
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
