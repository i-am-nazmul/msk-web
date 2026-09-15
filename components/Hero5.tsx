"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Dedicated MSK App",
    desc: "A simple and secure way to manage your wealth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" strokeWidth={2} strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Portfolio Access",
    desc: "View your investments, performance and key insights.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h4v8H3v-8zm7-6h4v14h-4V7zm7-4h4v18h-4V3z" />
      </svg>
    )
  },
  {
    title: "Real-Time Updates",
    desc: "Stay informed with timely market updates and notifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Online Consultations",
    desc: "Connect with your advisor anytime, anywhere.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const bannerFeatures = [
  {
    title: "Secure",
    subtitle: "& Reliable",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Easy",
    subtitle: "to Use",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  },
  {
    title: "Access",
    subtitle: "Anywhere",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Hero5 = () => {
  return (
    <section className="w-full relative bg-[#F9FAFB] pt-20 pb-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-6 lg:pl-8 text-center items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 mb-4 justify-center w-full">
                <div className="w-8 h-[2px] bg-[#F29F05]"></div>
                <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">Digital Experience</span>
                <div className="w-8 h-[2px] bg-[#F29F05]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-bold text-[#0A192F] leading-[1.2] mb-6">
                Your Wealth. <br />
                <span className="text-[#F29F05]">Always Within Reach.</span>
              </h2>
              
              <p className="text-gray-700 text-lg max-w-[540px] mb-8 leading-relaxed mx-auto">
                Track your investments, stay informed and connect with your financial advisor through a seamless digital experience designed around you.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[600px] mx-auto">
                {features.map((f, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.15, y: -10 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 + (i * 0.15), type: "spring", bounce: 0.4 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f2e6d6] text-[#0A192F] flex items-center justify-center mb-4">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A192F] mb-2 leading-snug">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed px-4">
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content - Graphic */}
          <div className="relative w-[95%] lg:w-[90%] mx-auto flex items-center justify-center lg:ml-8 cursor-pointer">
            <motion.img 
              src="/hero_section_5_pic.png" 
              alt="MSK App Digital Experience" 
              className="w-full h-auto rounded-[32px] shadow-xl"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, rotate: -2, y: -10 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
            />
          </div>
        </div>
        
        {/* Bottom Banner */}
        <motion.div 
          className="w-full relative z-20 mt-16 lg:mt-24 bg-white rounded-xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] py-8 px-8 border border-gray-100 flex flex-col xl:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full xl:w-auto justify-between xl:justify-start">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#0A192F] mb-1">
                Download the <br /> MSK App
              </h3>
              <p className="text-sm text-gray-500">
                Your financial journey, now simpler.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.iw.mint.app" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current"><path d="M99.617 8.057a50.191 50.191 0 00-38.815-1.639 50.127 50.127 0 00-26.88 44.636v409.893a50.127 50.127 0 0026.88 44.636 50.19 50.19 0 0038.815-1.639l355.679-204.946a50.134 50.134 0 000-86.994L99.617 8.057zM76.994 65.467c0-2.35 1.134-4.524 3.033-5.817 1.898-1.294 4.314-1.528 6.425-.623l259.08 149.278L76.994 360.771V65.467zm0 381.066V220.151l247.925 125.66-244.466 140.852c-2.11.89-4.512.645-6.4-.645-1.89-1.29-3.023-3.466-3.023-5.816zm279.79-158.423l59.57-30.187c3.152-1.597 3.152-5.748 0-7.345l-59.57-30.187-133.048-76.666 266.19 153.366-133.142 76.685z"/></svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-semibold">GET IT ON</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 pl-8 border-l border-gray-200">
              {bannerFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[#0A192F]">
                    {f.icon}
                  </div>
                  <div className="flex flex-col text-xs font-semibold text-[#0A192F] leading-tight">
                    <span>{f.title}</span>
                    <span>{f.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden xl:block">
            <p className="text-gray-500 font-serif italic font-medium tracking-tight text-xl transform -rotate-2">
              Your Wealth.<br/>Our Commitment.<br/><span className="text-[#F29F05]">Now in Your Hands.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero5;
