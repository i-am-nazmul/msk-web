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
    sectionRef.current?.querySelectorAll('.reveal, .reveal-fade, .about-stat').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-layout">
          <div className="about-left reveal">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">About Us</h2>

            {/* Animated counter stat card */}
            <div className="about-stat reveal-delay-2 about-stat">
              <div className="about-stat-number">
                <span ref={statRef}>0</span>+
              </div>
              <span className="about-stat-label">Years of Excellence</span>
            </div>
          </div>

          <div className="about-text reveal reveal-delay-1">
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
