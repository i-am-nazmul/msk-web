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
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-5 md:px-[5vw] lg:px-[60px] h-[72px] flex items-center justify-between transition-all duration-400 ${
          scrolled ? 'bg-[#0a1628]/95 backdrop-blur-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.3)]' : ''
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="MSK Investment Services home">
          <Image
            src="/img/msk-logo.png"
            alt="MSK Investment Services"
            width={160}
            height={48}
            priority
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/85 relative transition-colors duration-300 hover:text-[var(--color-gold)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-gold)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://msk.investwell.app/app/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white px-5 py-2 border-[1.5px] border-white/35 rounded-full transition-colors duration-300 hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-[var(--color-navy)]"
            id="nav-login-btn"
          >
            Login
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] w-7 cursor-pointer p-1"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <span className={`block h-[2px] bg-white rounded-full transition-transform duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] bg-white rounded-full transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] bg-white rounded-full transition-transform duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileOpen ? 'flex' : 'hidden'
        } flex-col gap-0 fixed top-[72px] left-0 right-0 bg-[#0a1628]/95 backdrop-blur-[20px] pt-6 px-5 pb-8 z-[999] border-t border-white/10`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-base font-medium text-white/85 py-3.5 border-b border-white/10 transition-all duration-300 hover:text-[var(--color-gold)] hover:pl-2"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://msk.investwell.app/app/#/login"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center text-sm font-semibold text-white px-5 py-2 border-[1.5px] border-white/35 rounded-full transition-colors duration-300 hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-[var(--color-navy)]"
        >
          Login
        </a>
      </div>
    </>
  );
}
