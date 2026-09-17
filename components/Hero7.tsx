"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Client First",
    desc: "Your goals are our priority",
    icon: (
      <svg className="w-6 h-6 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  },
  {
    title: "Independent",
    desc: "Unbiased advice, always",
    icon: (
      <svg className="w-6 h-6 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
  {
    title: "Trusted",
    desc: "Built on integrity and transparency",
    icon: (
      <svg className="w-6 h-6 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    title: "Long-Term View",
    desc: "Relationships beyond transactions",
    icon: (
      <svg className="w-6 h-6 text-[#0A192F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 4.144 3.356 7.5 7.5 7.5.231 0 .454-.035.664-.1A7.5 7.5 0 0111.5 21a7.5 7.5 0 01-7.5-7.5c0-3.327 2.164-6.143 5.15-7.164A7.5 7.5 0 0111.35 3.836z" />
      </svg>
    )
  }
];

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "₹ 80+ Crore", label: "Assets Under Guidance" },
  { value: "500+", label: "Happy Clients" },
  { value: "1", label: "Common Goal", subLabel: "Your Financial Well-being" }
];

const Hero7 = () => {
  return (
    <section className="w-full relative bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Content Area */}
        <div className="px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-10 lg:pb-16 max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
            <span className="text-[#F29F05] font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-[#0A192F] mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Guided by Values.<br />
            Focused on <span className="text-[#F29F05]">Your Future.</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-base md:text-lg lg:text-[1.125rem] font-inter max-w-3xl mx-auto leading-[1.8] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            MSK Investment Services Private Limited is a SEBI-registered wealth management firm, committed to helping individuals, families and businesses build, protect and grow their wealth through personalized and research-driven solutions.
          </motion.p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center text-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50/50">
                  {feature.icon}
                </div>
                <h4 className="text-[#0A192F] font-bold text-lg">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>


        </div>

      </div>

      {/* Stats Bottom Bar */}
      <div className="w-full bg-white border-t border-gray-100 py-10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="flex flex-col items-center text-center space-y-1 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-3xl md:text-4xl font-serif font-semibold text-[#0A192F]">{stat.value}</span>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    {stat.subLabel && <span className="text-sm text-gray-500">{stat.subLabel}</span>}
                  </div>
                  {/* Vertical Divider for all but last on md+ */}
                  {i !== stats.length - 1 && (
                    <div className="hidden md:block absolute right-[-2rem] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-200"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
