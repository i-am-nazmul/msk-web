'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Our Services', href: '#our-services' },
  { label: 'About Us', href: '#about' },
  { label: 'Business Principles', href: '#business-principles' },
  { label: 'Digital Services', href: '#digital-services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    []
  );

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="nav-logo" aria-label="MSK Investment Services home">
          <Image
            src="/img/msk-logo.png"
            alt="MSK Investment Services"
            width={160}
            height={48}
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a
            href="https://msk.investwell.app/app/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-login"
            id="nav-login-btn"
          >
            Login
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a
          href="https://msk.investwell.app/app/#/login"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-login"
        >
          Login
        </a>
      </div>
    </>
  );
}
