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
    <section className="py-20 md:py-[100px] bg-[var(--color-off-white)] relative overflow-hidden" id="our-services" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#f8b11b]/5 to-transparent blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0a1628]/5 to-transparent blur-3xl" aria-hidden="true" />

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px] relative z-10">
        <div className="opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal-scale">
          <div className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-[length:200%_auto] mb-3 relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-[var(--color-gold)] bg-gradient-to-r from-[var(--color-gold)] via-[#fff3b0] to-[var(--color-gold)] animate-[gradientFlow_4s_linear_infinite]">
            What We Offer
          </div>
          <h2 className="font-inter tracking-tighter text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold text-[var(--color-navy)] leading-[1.15] mb-5">Our Services</h2>
          <p className="text-[1.05rem] md:text-[1.15rem] text-[#4a5568] max-w-[640px] leading-[1.7] mb-14">
            Comprehensive solutions designed to grow, protect, and manage your wealth at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-9 relative overflow-hidden transition-all duration-400 border border-black/[0.04] hover:border-transparent hover:shadow-[0_20px_50px_rgba(10,22,40,0.1)] opacity-0 scale-90 translate-y-6 [&.visible]:opacity-100 [&.visible]:scale-100 [&.visible]:translate-y-0 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] reveal-scale"
              style={{ transitionDelay: `${((i % 4) + 1) * 100}ms` }}
              role="article"
              onMouseMove={(e) => applyTilt(e.currentTarget, e)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >
              {/* Gold bottom accent that slides in on hover */}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden="true" />

              {/* shimmer sweep overlay */}
              <span className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-[rgba(248,177,27,0.12)] to-transparent pointer-events-none group-hover:animate-[shimmerSweep_0.7s_ease_forwards] -skew-x-[20deg]" aria-hidden="true" />

              {/* Gradient ring icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgba(248,177,27,0.12)] to-[rgba(248,177,27,0.04)] flex items-center justify-center mb-7 transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(248,177,27,0.2)] group-hover:from-[rgba(248,177,27,0.2)] group-hover:to-[rgba(248,177,27,0.08)] ring-1 ring-[rgba(248,177,27,0.15)] group-hover:ring-[rgba(248,177,27,0.3)]">
                <Image src={service.icon} alt={service.title} width={36} height={36} style={{ objectFit: 'contain' }} />
              </div>
              <div className="font-inter tracking-tight text-[1.15rem] font-bold text-[var(--color-navy)] mb-3 transition-colors duration-300 group-hover:text-[var(--color-gold-dark)]">{service.title}</div>
              <p className="text-[0.95rem] text-[#5a6577] leading-[1.7]">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
