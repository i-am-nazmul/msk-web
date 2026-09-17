"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const servingOptions = [
  {
    title: "HNI / Affluent Investors",
    desc: "A more personalised approach to managing substantial wealth.",
    image: "/hero_section_6_pics/affluent_investors.png",
    imageOverlay: ["PRESERVE", "GROW", "CREATE", "LEGACIES"],
    icon: (
      <svg className="w-7 h-7 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4.5 18l1.5-12 4.5 4.5L12 3l1.5 7.5L18 6l1.5 12H4.5z" />
      </svg>
    ),
    bullets: [
      "Customised investment strategies",
      "Wealth preservation and growth",
      "Access to exclusive opportunities"
    ]
  },
  {
    title: "Individual Investors",
    desc: "Structured strategies for building wealth around your life goals.",
    image: "/hero_section_6_pics/individual_partners.png",
    imageOverlay: ["BUILD", "PLAN", "ACHIEVE", "TOGETHER"],
    icon: (
      <svg className="w-7 h-7 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    bullets: [
      "Goal-based financial planning",
      "Mutual funds, equities and more",
      "Guidance at every life stage"
    ]
  },
  {
    title: "NRIs",
    desc: "Stay connected to your financial strategy, wherever you are.",
    image: "/hero_section_6_pics/nri.png",
    imageClass: "object-[80%_center]",
    imageOverlay: ["STAY", "CONNECTED", "INVEST", "GROW"],
    icon: (
      <svg className="w-7 h-7 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.172 13.906l4.636 1.159m0 0l-1.393 4.178c-.287.863.666 1.545 1.341.961l2.483-2.146m0 0l5.801 1.45 3.39-10.168-10.168 3.39 1.45 5.801zm0 0l-5.801-1.45m0 0L2.013 7.828" />
      </svg>
    ),
    bullets: [
      "Invest in India with ease",
      "Personalised advisory and support",
      "Seamless digital experience"
    ]
  }
];

const Hero6 = () => {
  return (
    <section className="w-full relative bg-[#F9FAFB] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
            <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">WHO WE SERVE</span>
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#0A192F] mb-6 leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Different Goals. <span className="text-[#F29F05]">A Common Partner.</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Every investor's journey is unique. At MSK, we offer personalised solutions designed around your goals, no matter where you are in life.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 perspective-1000">
          {servingOptions.map((opt, i) => (
            <motion.div 
              key={i}
              className={`bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full group relative ${i === 1 ? 'z-20' : 'z-0'}`}
              initial={{ 
                opacity: 0, 
                y: 40
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (i * 0.15), 
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Top Image Section */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image 
                  src={opt.image} 
                  alt={opt.title} 
                  fill 
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${opt.imageClass || 'object-center'}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-6 left-6 flex flex-col text-white font-semibold text-xs tracking-[0.2em] space-y-1.5 z-10">
                  {opt.imageOverlay.map(txt => <span key={txt} className="drop-shadow-md">{txt}</span>)}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 pt-14 relative flex-grow flex flex-col bg-white">
                {/* Overlapping Icon */}
                <div className="absolute -top-10 left-8 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white z-10 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  {opt.icon}
                </div>
                
                <h3 className="text-2xl font-sans text-[#0A192F] font-bold mb-3">{opt.title}</h3>
                <p className="text-gray-600 mb-4 leading-snug">{opt.desc}</p>
                
                <ul className="space-y-2 mb-4">
                  {opt.bullets.map(b => (
                    <li key={b} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-[#F29F05] mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero6;
