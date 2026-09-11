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
    <section className="py-20 md:py-[100px] bg-[var(--color-off-white)] relative overflow-hidden" id="digital-services" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#f8b11b]/[0.04] to-transparent blur-3xl" aria-hidden="true" />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px] relative z-10">
        <div className="opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal">
          <div className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-[length:200%_auto] mb-3 relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-[var(--color-gold)] bg-gradient-to-r from-[var(--color-gold)] via-[#fff3b0] to-[var(--color-gold)] animate-[gradientFlow_4s_linear_infinite]">
            Technology & Convenience
          </div>
          <h2 className="font-inter tracking-tighter text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold text-[var(--color-navy)] leading-[1.15] mb-5">Fully Digitalized Services</h2>
          <p className="text-[1.05rem] md:text-[1.15rem] text-[#4a5568] max-w-[720px] leading-[1.7] mb-14">
            In today&apos;s fast-paced world, we understand the importance of convenience and
            accessibility. MSK Investment Services is fully digitalized, offering a seamless and
            efficient experience for all our clients.
          </p>
        </div>

        {/* Cards with gradient top-border accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {DIGITAL_SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="group bg-white p-9 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] opacity-0 scale-90 translate-y-6 [&.visible]:opacity-100 [&.visible]:scale-100 [&.visible]:translate-y-0 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] reveal-scale relative overflow-hidden"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              role="article"
            >
              {/* Gradient top border */}
              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(248,177,27,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-off-white)] to-[#f0ece4] flex justify-center items-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(248,177,27,0.15)] group-hover:bg-gradient-to-br group-hover:from-[rgba(248,177,27,0.15)] group-hover:to-[rgba(248,177,27,0.05)] ring-1 ring-black/[0.04] group-hover:ring-[rgba(248,177,27,0.2)]">
                <Image src={service.icon} alt={service.title} width={38} height={38} style={{ objectFit: 'contain' }} />
              </div>
              <div className="relative z-10 font-inter tracking-tight text-[1.1rem] font-bold text-[var(--color-navy)] mb-3 transition-colors duration-300 group-hover:text-[var(--color-gold-dark)]">{service.title}</div>
              <p className="relative z-10 text-[0.92rem] text-[#5a6577] leading-[1.7]">{service.desc}</p>
            </article>
          ))}
        </div>

        {/* Cities callout with gradient background */}
        <div className="mt-14 md:mt-18 bg-gradient-to-br from-[#eef1f6] via-[#f5f3ee] to-[#eef1f6] p-8 md:p-10 rounded-2xl text-center max-w-[900px] mx-auto border border-[var(--color-gold)]/10 opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] animate-[borderGlow_4s_ease_infinite]">
          {/* Decorative corner shapes */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent rounded-br-[32px]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[var(--color-gold)]/10 to-transparent rounded-tl-[32px]" aria-hidden="true" />
          
          <p className="relative z-10 text-[1rem] md:text-[1.1rem] text-[var(--color-navy)] leading-[1.7]">
            We have our client base spread across major cities of{' '}
            <strong className="text-[var(--color-gold-dark)]">Chennai, Hyderabad, Bengaluru, Delhi, Mumbai, Kolkata, Bhubaneshwar, Jaipur</strong>{' '}
            and more. We also offer our services to{' '}
            <strong className="text-[var(--color-gold-dark)]">Non-Resident Indians & Persons of Indian Origin (PIO)</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
