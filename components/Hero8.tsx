"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Aarav Sharma",
    role: "Business Owner",
    text: "MSK transformed how I view my wealth. Their structured approach brought much-needed clarity to my family's financial future.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "IT Professional",
    text: "The personalised attention and transparent guidance I receive is unmatched. Truly a partner I can trust with my life savings.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "NRI Investor",
    text: "Managing investments from abroad was stressful until I found MSK. Their digital platform and dedicated advisors make it seamless.",
    rating: 5,
  },
  {
    name: "Sneha Desai",
    role: "Doctor",
    text: "They don't just sell products; they build strategies. Their focus on risk control gives me complete peace of mind.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Corporate Executive",
    text: "Discipline and consistency—that's what MSK brings to the table. My portfolio has grown steadily without the usual market anxiety.",
    rating: 5,
  },
];

// Duplicate reviews to create a seamless infinite loop
const MARQUEE_ITEMS = [...REVIEWS, ...REVIEWS, ...REVIEWS];

const Hero8 = () => {
  return (
    <section id="reviews" className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <div className="text-center">
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
            <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">Client Stories</span>
            <div className="w-8 h-[2px] bg-[#F29F05]"></div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-tight font-sans font-bold text-[#0A192F] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Don't Just Take <span className="text-[#F29F05]">Our Word</span> For It.
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See what our clients have to say about their journey to financial freedom with MSK.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Note: using x: ["0%", "-33.333%"] because we tripled the array to ensure perfect looping without jumping */}
        <motion.div
          className="flex space-x-6 px-3"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {MARQUEE_ITEMS.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[20rem] md:w-[25rem] bg-white rounded-2xl p-8 shadow-xl border border-gray-100 cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex gap-1 mb-6 text-[#F29F05]">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic leading-relaxed text-[0.9375rem]">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-[#0A192F] text-lg">{review.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{review.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero8;
