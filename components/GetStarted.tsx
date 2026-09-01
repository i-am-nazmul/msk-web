'use client';

function downloadApp() {
  const ua = navigator.userAgent || navigator.vendor;
  const androidURL = 'https://play.google.com/store/apps/details?id=com.iw.mint.app';
  const iosURL = 'https://apps.apple.com/in/app/mint-by-investwell/id1479042500';
  if (/android/i.test(ua)) window.location.href = androidURL;
  else if (/iPhone|iPad|iPod/i.test(ua)) window.location.href = iosURL;
  else window.location.href = androidURL;
}

export default function GetStarted() {
  return (
    <section className="py-24 bg-white relative" id="get-started" aria-label="Call to action">
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px]">
        <div className="bg-[var(--color-gold)] rounded-[20px] p-10 md:p-14 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-8 relative overflow-hidden shadow-[0_24px_40px_rgba(248,177,27,0.15)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[40%] before:h-full before:bg-white/[0.08] before:-skew-x-[25deg] before:-translate-x-[40%] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[20%] after:h-[150%] after:bg-[#d4920f]/[0.08] after:skew-x-[15deg] after:translate-x-[20%]">
          <div className="relative z-[2]">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[var(--color-navy)] leading-[1.2] mb-3">Get started now with<br />MSK Investment Services</h2>
            <p className="text-[1.05rem] text-[var(--color-navy)]/80 m-0">Download our app and take control of your financial future today.</p>
          </div>
          <button
            className="relative z-[2] inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans text-[0.9rem] font-semibold tracking-[0.03em] transition-all duration-300 border-2 border-transparent active:scale-[0.97] active:translate-y-[1px] bg-[var(--color-navy)] text-white shadow-[0_4px_20px_rgba(10,22,40,0.2)] hover:bg-[var(--color-navy-mid)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(10,22,40,0.3)]"
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
        </div>
      </div>
    </section>
  );
}
