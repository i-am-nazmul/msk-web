'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  {
    label: 'Our Solutions',
    href: '#our-services',
    children: [
      { label: 'Wealth Management', href: '#our-services' },
      { label: 'Portfolio Management', href: '#our-services' },
      { label: 'Financial Planning', href: '#our-services' },
      { label: 'Tax Planning', href: '#our-services' },
    ],
  },
  { label: 'Our Philosophy', href: '#business-principles' },
  { label: 'Digital Experience', href: '#digital-services' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      setOpenDropdown(null);
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    []
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-5 md:px-8 lg:px-12 h-[72px] flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]'
            : 'bg-white border-b border-gray-100'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="MSK Investment Services home" className="flex-shrink-0">
          <Image
            src="/img/msk-logo.png"
            alt="MSK Investment Services"
            width={200}
            height={60}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5" role="list">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="relative"
              ref={link.children ? dropdownRef : undefined}
            >
              {link.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="flex items-center gap-1 text-[15px] font-medium text-[#1a2340] px-3 py-2 rounded-md hover:text-[var(--color-gold)] hover:bg-gray-50 transition-all duration-200"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 animate-[fadeInDown_0.15s_ease_both]">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className="block px-4 py-2.5 text-[15px] font-medium text-[#1a2340] hover:text-[var(--color-gold)] hover:bg-orange-50 transition-all duration-150"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[15px] font-medium text-[#1a2340] px-3 py-2 rounded-md hover:text-[var(--color-gold)] hover:bg-gray-50 transition-all duration-200 block relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[var(--color-gold)] after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-[15px] font-semibold text-white bg-[var(--color-navy)] px-5 py-2.5 rounded-lg hover:bg-[var(--color-navy-mid)] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px active:translate-y-0"
            id="nav-book-consultation-btn"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex lg:hidden flex-col gap-[5px] w-8 h-8 cursor-pointer items-center justify-center"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <span
            className={`block w-5 h-[2px] bg-[var(--color-navy)] rounded-full transition-transform duration-300 ${
              mobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[var(--color-navy)] rounded-full transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[var(--color-navy)] rounded-full transition-transform duration-300 ${
              mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileOpen ? 'flex' : 'hidden'
        } flex-col fixed top-[72px] left-0 right-0 bg-white shadow-lg pt-4 px-5 pb-8 z-[999] border-t border-gray-100 max-h-[80vh] overflow-y-auto`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <div key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-[#1a2340] py-3.5 border-b border-gray-100 transition-all duration-200 hover:text-[var(--color-gold)] hover:pl-2 flex items-center justify-between"
            >
              {link.label}
              {link.children && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
            {link.children && (
              <div className="pl-4">
                {link.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={(e) => handleNavClick(e, child.href)}
                    className="block text-base font-medium text-gray-500 py-2.5 border-b border-gray-50 hover:text-[var(--color-gold)] transition-colors duration-200"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="mt-5 text-center text-base font-semibold text-white bg-[var(--color-navy)] px-5 py-3 rounded-lg"
          id="mobile-book-consultation-btn"
        >
          Book a Consultation
        </a>
      </div>
    </>
  );
}
