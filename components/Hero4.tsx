"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';



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
      <div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">Our Investment Philosophy</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-bold text-[#0A192F] leading-[1.15] mb-6 tracking-tight"
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
            className="w-full max-w-5xl mx-auto mb-12 origin-center"
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
              style={{ width: '100%', height: 'auto' }}
              className="rounded-3xl shadow-lg"
              priority
            />
          </motion.div>
          

        </div>

        {/* Bottom tagline */}
        <motion.div 
          className="mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-grow max-w-[12.5rem] h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          <span className="px-6 text-xs md:text-sm font-bold tracking-[0.25em] text-[#0A192F]/30 uppercase">
            Discipline Creates Wealth
          </span>
          <div className="flex-grow max-w-[12.5rem] h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero4;
