'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const SERVICES = [
  { icon: '/img/icon-portfolio-management.png', title: 'Portfolio Management',    desc: 'Customized investment strategies to maximize returns and minimize risks.' },
  { icon: '/img/icon-financial-planning.png',   title: 'Financial Planning',      desc: 'Comprehensive financial plans to help you achieve your long-term financial goals.' },
  { icon: '/img/icon-retirement-planning.png',  title: 'Retirement Planning',     desc: 'Tailored retirement solutions to ensure a secure and comfortable future.' },
  { icon: '/img/icon-wealth-management.png',    title: 'Wealth Management',       desc: 'Holistic wealth management services to grow and protect your assets.' },
  { icon: '/img/icon-tax-planning.png',         title: 'Tax Planning',            desc: 'Efficient tax strategies to optimize your financial outcomes.' },
  { icon: '/img/icon-life-goal.png',            title: 'Life Goals',              desc: 'Invest with a target in mind — track and achieve your important life goals.' },
  { icon: '/img/icon-child-future-saving.png',  title: 'Child Future Saving',     desc: "Secure your child's future from education to marriage with early, smart investments." },
  { icon: '/img/icon-insurance-planning.png',   title: 'Insurance Planning',      desc: 'Comprehensive insurance solutions to safeguard your financial future.' },
];

/* 3-D tilt on mouse move */
function applyTilt(card: HTMLElement, e: React.MouseEvent<HTMLElement>) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const rotY = ((x - cx) / cx) * 8;   // max ±8 deg
  const rotX = -((y - cy) / cy) * 6;  // max ±6 deg
  card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
}

function resetTilt(card: HTMLElement) {
  card.style.transform = '';
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="our-services" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions designed to grow, protect, and manage your wealth at every stage of life.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`service-card reveal-scale reveal-delay-${(i % 4) + 1}`}
              role="article"
              onMouseMove={(e) => applyTilt(e.currentTarget, e)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >
              {/* shimmer sweep overlay — animated via CSS on hover */}
              <span className="shimmer-sweep" aria-hidden="true" />
              <div className="service-icon-wrap">
                <Image src={service.icon} alt={service.title} width={36} height={36} style={{ objectFit: 'contain' }} />
              </div>
              <div className="service-title">{service.title}</div>
              <p className="service-desc">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
