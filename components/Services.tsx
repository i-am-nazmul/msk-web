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
    <section className="py-20 md:py-[100px] bg-[var(--color-off-white)] relative" id="our-services" ref={sectionRef}>
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px]">
        
        {/* We use standard CSS classes for the entrance animation logic if they rely on intersecting '.visible'. 
            For now, we'll keep `reveal` and `reveal-scale` classes working by defining them in tailwind config or globally, 
            but we can also inline them if preferred. Since we kept the keyframes in globals, we can use Tailwind variants or just keep the reveal classes. 
            Let's keep the `reveal-scale` class as it's targeted by the IntersectionObserver. */}
        <div className="opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal-scale">
          <div className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-[length:200%_auto] mb-3 relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-[var(--color-gold)] bg-gradient-to-r from-[var(--color-gold)] via-[#fff3b0] to-[var(--color-gold)] animate-[gradientFlow_4s_linear_infinite]">
            What We Offer
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--color-navy)] leading-[1.2] mb-5">Our Services</h2>
          <p className="text-base md:text-[1.1rem] text-[#4a5568] max-w-[640px] leading-[1.6] mb-12">
            Comprehensive solutions designed to grow, protect, and manage your wealth at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="group bg-white rounded-[16px] p-8 relative overflow-hidden transition-all duration-400 border border-black/5 hover:border-transparent hover:shadow-[0_20px_40px_rgba(10,22,40,0.08)] opacity-0 scale-90 translate-y-6 [&.visible]:opacity-100 [&.visible]:scale-100 [&.visible]:translate-y-0 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] reveal-scale"
              style={{ transitionDelay: `${((i % 4) + 1) * 100}ms` }}
              role="article"
              onMouseMove={(e) => applyTilt(e.currentTarget, e)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >
              {/* shimmer sweep overlay — animated via CSS on hover */}
              <span className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-[rgba(248,177,27,0.15)] to-transparent pointer-events-none group-hover:animate-[shimmerSweep_0.7s_ease_forwards] -skew-x-[20deg]" aria-hidden="true" />
              
              <div className="w-14 h-14 rounded-full bg-[rgba(248,177,27,0.1)] flex items-center justify-center mb-6 transition-transform duration-400 group-hover:scale-110 group-hover:bg-[rgba(248,177,27,0.2)]">
                <Image src={service.icon} alt={service.title} width={36} height={36} style={{ objectFit: 'contain' }} />
              </div>
              <div className="font-serif text-[1.25rem] font-bold text-[var(--color-navy)] mb-3 transition-colors duration-300 group-hover:text-[var(--color-gold-dark)]">{service.title}</div>
              <p className="text-[0.95rem] text-[#4a5568] leading-[1.6]">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
