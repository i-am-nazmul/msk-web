'use client';

import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Our Services', href: '#our-services' },
  { label: 'About Us', href: '#about' },
  { label: 'Business Principles', href: '#business-principles' },
  { label: 'Digital Services', href: '#digital-services' },
  { label: 'Login', href: 'https://msk.investwell.app/app/#/login', external: true },
];

const MapIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full fill-[var(--color-gold)]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full fill-[var(--color-gold)]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full fill-[var(--color-gold)]">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1.06-.97a2 2 0 0 1 2.12-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.66 16.92z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[34px] h-[34px] fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.109.548 4.09 1.508 5.811L0 24l6.341-1.485A11.949 11.949 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 0 1-5.03-1.393l-.36-.214-3.764.882.924-3.653-.234-.375A9.773 9.773 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] relative overflow-hidden">
      {/* Gold top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" aria-hidden="true" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-[var(--color-gold)]/[0.04] to-transparent blur-3xl" aria-hidden="true" />

      <div className="pt-16 md:pt-20 pb-8 max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-[400px]">
            <Image
              src="/img/msk-logo.png"
              alt="MSK Investment Services"
              width={160}
              height={48}
              className="brightness-0 invert opacity-90 h-12 w-auto object-contain"
            />
            <p className="text-[0.95rem] text-white/70 leading-[1.7]">
              Comprehensive investment solutions tailored to meet the unique needs of our clients —
              helping you grow, protect, and manage your wealth.
            </p>

            {/* Social links placeholder */}
            <div className="flex gap-3 mt-2">
              {['LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 transition-all duration-300 hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/30 hover:text-[var(--color-gold)] hover:-translate-y-0.5"
                  aria-label={platform}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {platform === 'LinkedIn' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
                    {platform === 'Twitter' && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />}
                    {platform === 'Instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-bold tracking-[0.1em] uppercase mb-6 text-sm">Contact Us</div>
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-4 group transition-all duration-300">
                <div className="flex-shrink-0 w-[22px] h-[22px] mt-1 transition-transform duration-300 group-hover:scale-110"><MapIcon /></div>
                <a
                  href="https://maps.app.goo.gl/39RG7wW5o6UHasR6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.95rem] text-white/70 leading-[1.7] transition-colors duration-300 hover:text-[var(--color-gold)] no-underline"
                >
                  Ground Floor, New No 28, Old No 70,<br />
                  Spur Tank Road, Chetpet,<br />
                  Chennai, Tamil Nadu — 600031
                </a>
              </div>
              <div className="flex items-start gap-4 group transition-all duration-300">
                <div className="flex-shrink-0 w-[22px] h-[22px] mt-1 transition-transform duration-300 group-hover:scale-110"><MailIcon /></div>
                <a href="mailto:info@mskinvestmentservices.com" className="text-[0.95rem] text-white/70 leading-[1.7] transition-colors duration-300 hover:text-[var(--color-gold)] no-underline">
                  info@mskinvestmentservices.com
                </a>
              </div>
              <div className="flex items-start gap-4 group transition-all duration-300">
                <div className="flex-shrink-0 w-[22px] h-[22px] mt-1 transition-transform duration-300 group-hover:scale-110"><PhoneIcon /></div>
                <a href="tel:+919884660060" className="text-[0.95rem] text-white/70 leading-[1.7] transition-colors duration-300 hover:text-[var(--color-gold)] no-underline">
                  +91 98846 60060
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full max-w-[340px] h-[160px] rounded-xl overflow-hidden border border-white/15 mt-2 bg-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <iframe
                title="MSK Investment Services location map"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=MSK%20Investment%20Services%20Private%20Limited&zoom=12&maptype=roadmap"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <nav className="flex flex-wrap gap-4 md:gap-8 justify-center" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 font-medium transition-all duration-300 hover:text-[var(--color-gold)] relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--color-gold)] after:transition-all after:duration-300 hover:after:w-full"
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-[0.85rem] text-white/50 text-center md:text-right">
            © {new Date().getFullYear()} MSK Investment Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Action Button */}
      <a
        href="whatsapp://send?phone=+919884660060&text=Hello%2C%20I%20visited%20your%20website!"
        className="fixed bottom-6 right-6 z-[99] bg-[#25d366] text-white w-14 h-14 rounded-full flex justify-center items-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] animate-[wiggle_0.6s_ease_6s_infinite] hover:animate-none"
        aria-label="Chat with us on WhatsApp"
        id="whatsapp-fab"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  );
}
