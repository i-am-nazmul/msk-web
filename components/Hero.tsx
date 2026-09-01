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

export default function Hero() {
  const scrollTo = useCallback((id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="home" aria-label="Hero banner">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-bg-01.jpg"
          alt="MSK Investment Services background"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0a1628]/85 via-[#112244]/75 to-[#0a1628]/60" aria-hidden="true" />

      <div className="relative z-[2] text-center px-5 max-w-[860px]">
        {/* Badge — pulsing border via CSS */}
        <div className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] bg-[rgba(248,177,27,0.1)] border border-[rgba(248,177,27,0.3)] py-1.5 px-4.5 rounded-full mb-6 animate-[fadeInDown_0.8s_ease_0.2s_both,borderPulse_3s_ease_1s_infinite]">
          Trusted Investment Partner Since 2010
        </div>

        {/* Title — "Investment" glows on loop */}
        <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-[1.15] mb-5 animate-[fadeInUp_0.9s_ease_0.4s_both]">
          Comprehensive<br />
          <span className="text-[var(--color-gold)] animate-[heroTitleGlow_4s_ease-in-out_infinite] inline-block">Investment</span> Solutions
        </h1>

        <p className="text-[clamp(1rem,2vw,1.2rem)] text-white/75 mb-10 animate-[fadeInUp_0.9s_ease_0.6s_both]">
          Tailored to meet the unique needs of our clients — from portfolio management
          to personalized financial planning.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-[fadeInUp_0.9s_ease_0.8s_both]">
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans text-[0.9rem] font-semibold tracking-[0.03em] transition-all duration-300 border-2 border-transparent active:scale-[0.97] active:translate-y-[1px] bg-[var(--color-gold)] text-[var(--color-navy)] shadow-[0_4px_20px_rgba(248,177,27,0.4)] hover:bg-[var(--color-gold-dark)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(248,177,27,0.5)]"
            onClick={downloadApp}
            id="hero-download-btn"
            aria-label="Download the MSK Investment app"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zM2 20c0-4.418 4.03-8 9-8s9 3.582 9 8" />
            </svg>
            Download App
          </button>
          <a
            href="#our-services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans text-[0.9rem] font-semibold tracking-[0.03em] transition-all duration-300 border-2 border-white/50 active:scale-[0.97] active:translate-y-[1px] bg-transparent text-white hover:bg-white hover:text-[var(--color-navy)] hover:border-white"
            onClick={scrollTo('#our-services')}
            id="hero-explore-btn"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator — floats up and down via CSS floatBob */}
      <a href="#about" className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 animate-[floatBob_3s_ease-in-out_infinite,fadeIn_1s_ease_1.2s_both]" onClick={scrollTo('#about')} aria-label="Scroll to content">
        <div className="w-[26px] h-[42px] border-2 border-white/50 rounded-[13px] relative flex justify-center">
          <span className="w-1 h-2 bg-[var(--color-gold)] rounded-sm absolute top-1.5 animate-scroll-bounce" />
        </div>
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/50">Scroll</span>
      </a>
    </section>
  );
}
