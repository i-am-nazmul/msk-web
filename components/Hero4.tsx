"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: "Research Driven",
    desc: "We rely on in-depth research and fundamental analysis to identify quality opportunities.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 19l2 2" />
      </svg>
    ),
    number: "01"
  },
  {
    title: "Risk Control",
    desc: "We focus on managing risk at the core, ensuring your wealth is protected across market cycles.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    number: "02"
  },
  {
    title: "Consistency",
    desc: "We stay committed to a well-defined strategy, avoiding short-term reactions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l5-5m0 0v4m0-4h-4" />
      </svg>
    ),
    number: "03"
  },
  {
    title: "No Market Timing",
    desc: "We don't try to predict the market. We focus on time in the market, not timing the market.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c0-5 3-9 8-10-5 1-8 5-8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c0-5-3-9-8-10 5 1 8 5 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-12" />
        <circle cx="12" cy="6" r="3" />
      </svg>
    ),
    number: "04"
  }
];

const Hero4 = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section id="business-principles" className="relative w-full bg-[#F9FAFB] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
            <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">Our Investment Philosophy</span>
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[56px] font-sans font-bold text-[#0A192F] leading-[1.15] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Disciplined Approach for a <span className="text-[#F29F05]">Brighter Tomorrow.</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-500 text-lg lg:text-xl font-medium italic leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe wealth is not built by reacting to market noise, but by staying disciplined, informed and focused on what truly matters — your long-term financial well-being.
          </motion.p>
        </div>

        {/* Image + Cards Layout */}
        <div>
          {/* Image */}
          <motion.div 
            ref={imageRef}
            className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg mb-12 origin-center"
            style={{ 
              scale: imageScale,
              opacity: imageOpacity
            }}
          >
            <Image 
              src="/hero_section_4_pic.png"
              width={1920}
              height={1080}
              sizes="(max-width: 1024px) 100vw, 1024px"
              alt="Disciplined investment approach"
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
          
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.08)] cursor-default overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, scale: 1.03, rotate: -1.5 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 * idx, type: "spring", bounce: 0.3 }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F29F05]/5 via-transparent to-[#0A192F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number + Icon row */}
                <div className="relative flex items-center justify-between mb-5">
                  <span className="text-5xl font-sans font-extrabold text-[#0A192F]/[0.06] leading-none select-none">
                    {feature.number}
                  </span>
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#0A192F] to-[#1a3260] flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="relative text-lg font-sans font-bold text-[#0A192F] mb-2 group-hover:text-[#F29F05] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="relative text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F29F05] via-[#ffd166] to-[#F29F05] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-b-2xl" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div 
          className="mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-grow max-w-[200px] h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          <span className="px-6 text-xs md:text-sm font-bold tracking-[0.25em] text-[#0A192F]/30 uppercase">
            Discipline Creates Wealth
          </span>
          <div className="flex-grow max-w-[200px] h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero4;
