'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statRef    = useRef<HTMLSpanElement>(null);
  const counted    = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            // Animate the "15+" counter when it scrolls into view
            if (e.target.classList.contains('about-stat') && !counted.current) {
              counted.current = true;
              const numEl = statRef.current;
              if (!numEl) return;
              let start = 0;
              const end = 15;
              const duration = 1400;
              const startTime = performance.now();
              const tick = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                numEl.textContent = String(Math.round(eased * end));
                if (progress < 1) requestAnimationFrame(tick);
                else {
                  numEl.textContent = '15';
                  numEl.closest('.about-stat-number')?.classList.add('popped');
                }
              };
              requestAnimationFrame(tick);
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .about-stat').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-[100px] bg-white" id="about" ref={sectionRef}>
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-[5vw] lg:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-24 items-start">
          <div className="sticky top-[100px] opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal">
            <div className="inline-block text-sm font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-[length:200%_auto] mb-3 relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-[var(--color-gold)] bg-gradient-to-r from-[var(--color-gold)] via-[#fff3b0] to-[var(--color-gold)] animate-[gradientFlow_4s_linear_infinite]">
              Who We Are
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--color-navy)] leading-[1.2] mb-5">About Us</h2>

            {/* Animated counter stat card */}
            <div className="mt-8 md:mt-12 p-8 border border-black/5 bg-[#fbfcfd] rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] inline-block min-w-[240px] opacity-0 translate-y-8 transition-all duration-[800ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 about-stat reveal">
              <div className="about-stat-number font-serif text-[clamp(3.5rem,6vw,5rem)] font-bold text-[var(--color-navy)] leading-[1] mb-2 relative inline-flex transition-transform duration-[400ms] [&.popped]:animate-[countPop_0.5s_ease_forwards]">
                <span ref={statRef}>0</span>+
              </div>
              <span className="block text-[0.95rem] font-bold tracking-[0.1em] uppercase text-[var(--color-gold-dark)]">Years of Excellence</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 font-sans text-base md:text-[1.1rem] leading-[1.8] text-[#4a5568] opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 reveal">
            <p>
              MSK Investment Services Private Limited specializes in providing comprehensive investment
              solutions tailored to meet the unique needs of our clients. As a trusted name in the
              investment industry, we are dedicated to helping individuals and businesses achieve their
              financial goals through strategic investment management and personalized financial planning.
            </p>
            <p>
              Our team of experienced financial managers and advisors work diligently to ensure that
              our clients receive the highest level of service and the best possible returns on their
              investments.
            </p>
            <p>
              In addition to investment management, we offer a full range of financial planning services
              including retirement planning, estate planning, and tax planning. We work closely with
              our clients to understand their financial goals and develop a customized plan to help them
              achieve them.
            </p>
            <p>
              At MSK Investment Services, we believe that our clients&apos; success is our success. We are
              committed to providing the highest quality investment and financial planning services
              possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
