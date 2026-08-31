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
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1.06-.97a2 2 0 0 1 2.12-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.66 16.92z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.109.548 4.09 1.508 5.811L0 24l6.341-1.485A11.949 11.949 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 0 1-5.03-1.393l-.36-.214-3.764.882.924-3.653-.234-.375A9.773 9.773 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Image
              src="/img/msk-logo.png"
              alt="MSK Investment Services"
              width={160}
              height={48}
            />
            <p>
              Comprehensive investment solutions tailored to meet the unique needs of our clients —
              helping you grow, protect, and manage your wealth.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-contact-title">Contact Us</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><MapIcon /></div>
                <a
                  href="https://maps.app.goo.gl/39RG7wW5o6UHasR6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-text"
                >
                  Ground Floor, New No 28, Old No 70,<br />
                  Spur Tank Road, Chetpet,<br />
                  Chennai, Tamil Nadu — 600031
                </a>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><MailIcon /></div>
                <a href="mailto:info@mskinvestmentservices.com" className="footer-contact-text">
                  info@mskinvestmentservices.com
                </a>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><PhoneIcon /></div>
                <a href="tel:+919884660060" className="footer-contact-text">
                  +91 98846 60060
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="footer-map">
              <iframe
                title="MSK Investment Services location map"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=MSK%20Investment%20Services%20Private%20Limited&zoom=12&maptype=roadmap"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <nav className="footer-nav-links" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} MSK Investment Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Action Button */}
      <a
        href="whatsapp://send?phone=+919884660060&text=Hello%2C%20I%20visited%20your%20website!"
        className="whatsapp-fab"
        aria-label="Chat with us on WhatsApp"
        id="whatsapp-fab"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  );
}
