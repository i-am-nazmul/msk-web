"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ResearchIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 19l2 2" />
  </svg>
);

const RiskIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ConsistencyIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l5-5m0 0v4m0-4h-4" />
  </svg>
);

const TimingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c0-5 3-9 8-10-5 1-8 5-8 10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c0-5-3-9-8-10 5 1 8 5 8 10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-12" />
    <circle cx="12" cy="6" r="3" />
  </svg>
);

const features = [
  {
    title: "Research Driven",
    desc: "We rely on in-depth research and fundamental analysis to identify quality opportunities.",
    icon: <ResearchIcon />
  },
  {
    title: "Risk Control",
    desc: "We focus on managing risk at the core, ensuring your wealth is protected across market cycles.",
    icon: <RiskIcon />
  },
  {
    title: "Consistency",
    desc: "We stay committed to a well-defined strategy, avoiding short-term reactions.",
    icon: <ConsistencyIcon />
  },
  {
    title: "No Market Timing",
    desc: "We don't try to predict the market. We focus on time in the market, not timing the market.",
    icon: <TimingIcon />
  }
];

const Hero4 = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["100%", "92%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "24px"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#F9FAFB] py-16 overflow-hidden">
      
      {/* Top Content */}
      <div className="w-[90%] lg:w-[85%] mx-auto mb-10 lg:mb-16 flex flex-col items-center text-center">
        <div className="w-full">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
            <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">Our Investment Philosophy</span>
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-sans font-bold text-[#0A192F] leading-[1.15] mb-6 tracking-tight w-full max-w-none text-center">
            A Disciplined Approach for a <span className="text-[#F29F05]">Brighter Tomorrow.</span>
          </h2>
        </div>
      </div>

      {/* Image Container */}
      <motion.div 
        style={{ width, borderRadius }}
        className="relative max-w-[1600px] mx-auto h-[450px] lg:h-[600px] overflow-hidden shadow-sm"
      >
        <Image 
          src="/hero_section_4_pic.png"
          fill
          alt="Disciplined investment approach"
          className="object-cover object-[70%_center] lg:object-center"
          priority
        />
        
        <div className="absolute top-8 left-6 md:top-12 md:left-10 lg:top-16 lg:left-16 z-10 max-w-lg lg:max-w-xl">
          <p className="text-[#0A192F] text-lg lg:text-xl font-medium italic leading-relaxed drop-shadow-sm">
            We believe wealth is not built by reacting to market noise, but by staying disciplined, informed and focused on what truly matters — your long-term financial well-being.
          </p>
        </div>
      </motion.div>
      
      {/* Bottom White Panel */}
      <div className="w-[90%] lg:w-[80%] mx-auto relative z-20 -mt-32 lg:-mt-24">
        <div className="bg-white rounded-xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] py-12 px-6 md:px-10 border border-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 divide-y md:divide-y-0 lg:divide-x divide-gray-100">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 lg:px-4 group cursor-default">
                <div className="w-[80px] h-[80px] rounded-full bg-[#6B21A8] flex items-center justify-center mb-6 text-white shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-bold text-[#0A192F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed max-w-[240px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom line and text */}
          <div className="mt-14 flex items-center justify-center opacity-80">
            <div className="flex-grow h-[1px] bg-gray-200"></div>
            <span className="px-6 text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Discipline Creates Wealth
            </span>
            <div className="flex-grow h-[1px] bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
