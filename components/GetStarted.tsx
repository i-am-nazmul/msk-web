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
    <section className="get-started-section" id="get-started" aria-label="Call to action">
      <div className="container">
        <div className="get-started-inner">
          <div className="get-started-text">
            <h2>Get started now with<br />MSK Investment Services</h2>
            <p>Download our app and take control of your financial future today.</p>
          </div>
          <button
            className="btn btn-navy"
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
