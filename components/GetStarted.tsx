'use client';

import { useCallback } from 'react';

function downloadApp() {
  const ua = navigator.userAgent || navigator.vendor;
  const androidURL = 'https://play.google.com/store/apps/details?id=com.iw.mint.app';
  const iosURL = 'https://apps.apple.com/in/app/mint-by-investwell/id1479042500';
  if (/android/i.test(ua)) window.location.href = androidURL;
  else if (/iPhone|iPad|iPod/i.test(ua)) window.location.href = iosURL;
  else window.location.href = androidURL;
}

export default function GetStarted() {
  const scrollTo = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  return (
    <section className="py-24 md:py-28 bg-white relative overflow-hidden" id="get-started" aria-label="Call to action">
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px]">
        <div className="bg-gradient-to-r from-[#f8b11b] via-[#ffc94d] to-[#f8b11b] bg-[length:200%_100%] animate-[gradientShift_6s_ease_infinite] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-10 relative overflow-hidden shadow-[0_24px_60px_rgba(248,177,27,0.2)]">
          {/* Decorative floating shapes */}
          <div className="absolute top-0 left-0 w-[40%] h-full bg-white/[0.06] -skew-x-[25deg] -translate-x-[40%]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-[20%] h-[150%] bg-[#d4920f]/[0.06] skew-x-[15deg] translate-x-[20%]" aria-hidden="true" />

          {/* Floating circles */}
          <div className="absolute top-6 right-[20%] w-20 h-20 rounded-full border-2 border-white/10 animate-[float_6s_ease_infinite]" aria-hidden="true" />
          <div className="absolute bottom-8 left-[15%] w-12 h-12 rounded-full bg-white/[0.06] animate-[float_8s_ease_infinite_1s]" aria-hidden="true" />
          <div className="absolute top-1/2 right-[40%] w-6 h-6 rounded-full bg-[var(--color-navy)]/[0.06] animate-[float_5s_ease_infinite_0.5s]" aria-hidden="true" />

          <div className="relative z-[2] max-w-[520px]">
            <h2 className="font-inter tracking-tighter text-[clamp(1.75rem,3.5vw,2.8rem)] font-bold text-[var(--color-navy)] leading-[1.15] mb-4">Get started now with<br />MSK Investment Services</h2>
            <p className="text-[1.1rem] text-[var(--color-navy)]/70 leading-[1.6]">Download our app and take control of your financial future today.</p>
          </div>

          <div className="relative z-[2] flex flex-col sm:flex-row gap-4">
            <button
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-inter text-[0.95rem] font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-[0.97] active:translate-y-[1px] bg-[var(--color-navy)] text-white shadow-[0_4px_20px_rgba(10,22,40,0.25)] hover:bg-[var(--color-navy-mid)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,22,40,0.35)]"
              onClick={downloadApp}
              id="cta-download-btn"
              aria-label="Download the MSK Investment app"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download App
            </button>

            <button
              onClick={scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-inter text-[0.95rem] font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-[0.97] active:translate-y-[1px] bg-white/90 text-[var(--color-navy)] shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:bg-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm"
              id="cta-consultation-btn"
              aria-label="Book a consultation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M8 7V3M16 7V3M7 11h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
              </svg>
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
