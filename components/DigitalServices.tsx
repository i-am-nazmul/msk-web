'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const DIGITAL_SERVICES = [
  { icon: '/img/icon-access-portfolio.png',      title: 'Access Your Portfolio',  desc: 'View and manage your investments anytime, anywhere through our secure online portal.' },
  { icon: '/img/icon-real-time updates.png',     title: 'Real-Time Updates',      desc: 'Receive real-time updates and notifications about your investments and market trends.' },
  { icon: '/img/icon-online-consulatation.png',  title: 'Online Consultations',   desc: 'Schedule virtual meetings with our financial advisors at your convenience.' },
  { icon: '/img/icon-digital-transaction.png',   title: 'Digital Transactions',   desc: 'Execute transactions and manage your accounts with ease through our user-friendly interface.' },
];

export default function DigitalServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="digital-section" id="digital-services" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Technology & Convenience</div>
          <h2 className="section-title">Fully Digitalized Services</h2>
          <p className="digital-intro">
            In today&apos;s fast-paced world, we understand the importance of convenience and
            accessibility. MSK Investment Services is fully digitalized, offering a seamless and
            efficient experience for all our clients.
          </p>
        </div>

        {/* Cards use spring-bounce scale pop entrance with staggered delays */}
        <div className="digital-grid">
          {DIGITAL_SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`digital-card reveal-scale reveal-delay-${i + 1}`}
              role="article"
            >
              <div className="digital-icon-wrap">
                <Image src={service.icon} alt={service.title} width={38} height={38} style={{ objectFit: 'contain' }} />
              </div>
              <div className="digital-card-title">{service.title}</div>
              <p className="digital-card-desc">{service.desc}</p>
            </article>
          ))}
        </div>

        <div className="digital-coverage reveal">
          <p>
            We have our client base spread across major cities of{' '}
            <strong>Chennai, Hyderabad, Bengaluru, Delhi, Mumbai, Kolkata, Bhubaneshwar, Jaipur</strong>{' '}
            and more. We also offer our services to{' '}
            <strong>Non-Resident Indians & Persons of Indian Origin (PIO)</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
