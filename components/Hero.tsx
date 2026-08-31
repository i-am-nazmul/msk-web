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
    <section className="hero" id="home" aria-label="Hero banner">
      <div className="hero-bg">
        <Image
          src="/img/hero-bg-01.jpg"
          alt="MSK Investment Services background"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        {/* Badge — pulsing border via CSS */}
        <div className="hero-eyebrow">Trusted Investment Partner Since 2010</div>

        {/* Title — "Investment" glows on loop */}
        <h1 className="hero-title">
          Comprehensive<br />
          <span className="hero-title-accent">Investment</span> Solutions
        </h1>

        <p className="hero-subtitle">
          Tailored to meet the unique needs of our clients — from portfolio management
          to personalized financial planning.
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-gold"
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
            className="btn btn-outline-white"
            onClick={scrollTo('#our-services')}
            id="hero-explore-btn"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator — floats up and down via CSS floatBob */}
      <a href="#about" className="hero-scroll" onClick={scrollTo('#about')} aria-label="Scroll to content">
        <div className="scroll-mouse">
          <span className="scroll-wheel" />
        </div>
        <span className="scroll-label">Scroll</span>
      </a>
    </section>
  );
}
