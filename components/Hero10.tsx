"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const helpOptions = [
  "Portfolio Management",
  "Financial Planning",
  "Retirement Planning",
  "Tax Planning",
  "Insurance Planning",
  "NRI Services",
  "Other"
];

const trustBadges = [
  {
    title: "Personalised Guidance",
    desc: "Tailored to your goals",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Trusted & Transparent",
    desc: "Your interests first",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "A Long-Term Partnership",
    desc: "For every stage of life",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const Hero10 = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    helpWith: ""
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello MSK Investment Services!
I would like to request a consultation.

*Name:* ${formData.name}
*Mobile:* ${formData.countryCode} ${formData.mobile}
*Email:* ${formData.email}
*Interested in:* ${formData.helpWith}

Please get in touch with me.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "919884660060"; 
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full bg-white py-12 lg:py-24">
      <div className="max-w-[93.75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <section id="contact" className="w-full relative py-20 lg:py-28 rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#2D1B4E] to-[#1A0B2E] shadow-2xl">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[7.5rem]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#F29F05]/10 blur-[7.5rem]" />
      </div>

      <div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Column — Content ── */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-[2px] bg-[#F29F05]" />
              <span className="text-[#F29F05] font-bold tracking-wider text-sm uppercase">
                Let&apos;s Connect
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-bold text-white leading-[1.12] mb-6 tracking-tight">
              Let&apos;s Start With{" "}
              <br className="hidden sm:block" />
              Your <span className="text-[#F29F05]">Financial Goals.</span>
            </h2>

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
              Whether you&apos;re planning for the future, looking to grow
              your wealth, or need guidance on your investments —
              we&apos;re here to help. Book a personal consultation with
              our team and take the first step towards a more secure
              tomorrow.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * idx }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#F29F05] mb-4 group-hover:bg-[#F29F05] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {badge.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-white/50">
                    {badge.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column — Form ── */}
          <motion.div
            className="w-full max-w-[32.5rem] lg:ml-auto bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/20 p-8 sm:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          >
            {/* Form Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-[2px] bg-[#F29F05]"></div>
                <span className="text-[#F29F05] font-bold tracking-wider text-xs uppercase">Book a Consultation</span>
              </div>
              <h3 className="text-2xl font-sans font-bold text-white mb-2">
                Tell Us About Your Goals
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Fill in a few details and our team will get in touch with you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Your Name */}
              <div>
                <label className="block text-sm font-semibold text-white/90 mb-1.5">
                  Your Name <span className="text-[#F29F05]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#F29F05] focus:ring-2 focus:ring-[#F29F05]/20 focus:bg-white/10 transition-all duration-200"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-semibold text-white/90 mb-1.5">
                  Mobile Number <span className="text-[#F29F05]">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="w-[5.625rem] px-3 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm focus:outline-none focus:border-[#F29F05] focus:ring-2 focus:ring-[#F29F05]/20 focus:bg-white/10 transition-all duration-200 appearance-none cursor-pointer [&>option]:text-black"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                    <option value="+65">+65</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#F29F05] focus:ring-2 focus:ring-[#F29F05]/20 focus:bg-white/10 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-white/90 mb-1.5">
                  Email Address <span className="text-[#F29F05]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#F29F05] focus:ring-2 focus:ring-[#F29F05]/20 focus:bg-white/10 transition-all duration-200"
                />
              </div>

              {/* What can we help you with? */}
              <div className="relative">
                <label className="block text-sm font-semibold text-white/90 mb-1.5">
                  What can we help you with? <span className="text-[#F29F05]">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-left focus:outline-none focus:border-[#F29F05] focus:ring-2 focus:ring-[#F29F05]/20 transition-all duration-200 flex items-center justify-between"
                  >
                    <span className={formData.helpWith ? "text-white" : "text-white/40"}>
                      {formData.helpWith || "Select an option"}
                    </span>
                    <svg className={`w-4 h-4 text-white/60 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#2D1B4E] border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-50 py-1 max-h-[12.5rem] overflow-y-auto">
                      {helpOptions.map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            handleChange("helpWith", option);
                            setDropdownOpen(false);
                          }}
                          className="w-full px-4 py-2.5 text-left text-sm text-white/90 hover:bg-[#F29F05]/20 hover:text-white transition-colors duration-150"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#F29F05] text-[#0A192F] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#ffb327] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(242,159,5,0.3)] mt-2"
              >
                Request a Personal Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Privacy note */}
              <p className="flex items-center justify-center gap-2 text-xs text-white/50 pt-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1C8.676 1 6 3.676 6 7v2H4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V10a1 1 0 00-1-1h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4zm-1 12.732V19h2v-3.268a2 2 0 10-2 0z" />
                </svg>
                Your information is kept private and secure.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default Hero10;
