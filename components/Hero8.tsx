"use client";

import Image from 'next/image';
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

const Hero8 = () => {
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
    <div className="w-full bg-gradient-to-b from-white to-white py-8 lg:py-16">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <section id="contact" className="w-full relative py-20 lg:py-28 rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#2D1B4E] to-[#1A0B2E] shadow-2xl">
      {/* Abstract decorative blobs for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#F29F05]/10 blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          
          {/* Form Card */}
          <motion.div
            className="w-full max-w-[480px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-8 sm:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-[2px] bg-[#F29F05]"></div>
                <span className="text-[#F29F05] font-bold tracking-wider text-xs uppercase">Book a Consultation</span>
              </div>
              <h3 className="text-3xl font-sans font-bold text-white mb-2">
                Tell Us About Your Goals
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
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
                    className="w-[90px] px-3 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm focus:outline-none focus:border-[#F29F05] focus:ring-2 focus:ring-[#F29F05]/20 focus:bg-white/10 transition-all duration-200 appearance-none cursor-pointer [&>option]:text-black"
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
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#2D1B4E] border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-50 py-1 max-h-[200px] overflow-y-auto">
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
                className="w-full py-3.5 rounded-xl bg-[#F29F05] text-[#0A192F] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#ffb327] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(242,159,5,0.4)] mt-2"
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

export default Hero8;
