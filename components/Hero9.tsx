"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const features = [
  {
    title: "Personalised Approach",
    desc: "Tailored strategies aligned with your unique goals, risk profile and life stage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Research-Led Insights",
    desc: "Investment decisions backed by in-depth research and fundamental analysis.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Transparent Guidance",
    desc: "Clear communication, no hidden agendas — just advice in your best interest.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Digital Convenience",
    desc: "A seamless digital experience to manage your investments anytime, anywhere.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.5,
      type: "spring",
      bounce: 0.25,
    },
  }),
};

const carouselFeatures = [...features, ...features];

const Hero9 = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24 pt-4">
      <div className="max-w-[93.75rem] mx-auto">
        
        <div className="text-center mb-10 lg:mb-14">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-sans font-bold text-[#0A192F] mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why <span className="text-[#F29F05]">MSK?</span>
          </motion.h2>

          <motion.h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-sans font-bold text-black leading-[1.1] mb-6 lg:mb-8 tracking-tight drop-shadow-sm max-w-[90%] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#F29F05]">Advice</span> is easy.{" "}
            <br className="lg:hidden" />
            A strategy built{" "}
            <br className="hidden lg:block" />
            <span className="text-black">around you is different.</span>
          </motion.h3>
        </div>

        <section id="why-msk" className="w-full relative h-[25rem] sm:h-[30rem] lg:h-[40rem] overflow-hidden bg-[#F9FAFB] rounded-[2.5rem] lg:rounded-[4rem] shadow-xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero_section_9.png"
              alt="Why MSK Background"
              fill
              className="object-cover object-left lg:object-center"
              quality={90}
              priority
            />
          </div>
        </section>

        <motion.p
          className="text-black/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-medium px-4 mt-8 lg:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At MSK, we go beyond products and transactions. We take the
          time to understand your goals, build a personalised strategy,
          and stay with you at every step of your financial journey.
        </motion.p>

        {/* Text Below the Image Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.p
            className="font-script text-black text-4xl md:text-5xl leading-snug italic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            More Than Investments. A Partnership.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero9;
