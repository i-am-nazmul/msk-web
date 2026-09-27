"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Ganesh Gnanasekaran",
    role: "Client",
    text: "I've been consulting with Mr. Meenakshi Sundaram from MSK Investment Services Pvt Ltd, and I must say, the experience has been excellent. He takes the time to understand my financial goals and offers well-informed, practical advice tailored to my needs. His approach is professional, transparent, and genuinely client-focused. With his guidance, I feel much more confident about my financial planning and investments. I truly appreciate his commitment and depth of knowledge. Highly recommended for anyone seeking a trustworthy financial advisor.",
    rating: 5,
  },
  {
    name: "Kinshuk Das",
    role: "Client",
    text: "MSK investment services is one of the best for personal investment planning. The team is very methodical in their approach and they will guide you properly with various options which are the most suitable for your need and purpose. What I liked the most about the passionate involvement of MS in the job and how he makes sure you to do the correct things. I have also immensely benefitted for sourcing my home loan. He has guided me to the correct place where I got my loan without any hassle. This depicts his depth in networking. I wish MSK all the best for coming years.",
    rating: 5,
  },
  {
    name: "Sahil Paudel",
    role: "Client",
    text: "They are very professional and approachable, I have never worried about my finances after I started consulting them for my investments. The team has promptly responded to my queries and addressed the issues with efficiency.",
    rating: 5,
  },
  {
    name: "Viswanathan Narayanan",
    role: "Client",
    text: "MSK investments analysed deeply and suggested investment plans that suited my requirements. I was impressed with the detailed reports that was shared to help me understand how it works. They do a great job…both in terms of return on investment and customer service.",
    rating: 5,
  },
  {
    name: "Sandhya Devi",
    role: "Client",
    text: "MSK Investment Services is an excellent professional team for our personal investment planning. Their team adopts a meticulous and strategic approach, providing well-informed guidance on the best options to match our financial goals and requirements. Meenakshi Sundaram sir is genuinely committed to ensuring that you make the right investment choices. Just a call away, he is always approachable and ready to help us in all aspects, be it documentation or KYC or bank loan etc. He has immense knowledge and very good networking. All the best to MSK Investments!",
    rating: 5,
  },
  {
    name: "krishna kumar",
    role: "Client",
    text: "MSK Investment Services is an excellent option for those who are looking for guidance and end to end support for personal investment. Especially, Mr Meenakshi Sundaram is an excellent investment planner with vast experience and knowledge. In addition, his team provides an excellent service. Go to place for personal investment.",
    rating: 5,
  },
  {
    name: "Sumathy Regan",
    role: "Client",
    text: "MSK Investment Services offers expert financial guidance with a highly professional team. I highly recommend them for their reliable advice and strategic investment approach.",
    rating: 5,
  },
  {
    name: "Sowmya Shakthi",
    role: "Client",
    text: "The experience with MSK investment services showed they really cared about the relationship with the client, they were very patient and responsive through the process and built trust very quickly, overall great experience.",
    rating: 5,
  },
  {
    name: "Vijay Varma",
    role: "Client",
    text: "Trust was my biggest impediment, their experience and planning helped me overcome that really well. I have worked with others but it was different here.",
    rating: 5,
  },
  {
    name: "Archana Sarangi",
    role: "Client",
    text: "They provide tailored planning and services that consistently deliver. They have a very responsive team and clear communication.",
    rating: 5,
  }
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
            <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">Client Stories</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-tight font-sans font-bold text-[#0A192F] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Words That <span className="text-[#F29F05]">Matter.</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every story reflects a relationship built on trust.
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
              className="flex flex-col justify-between flex-shrink-0 w-[20rem] md:w-[25rem] h-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-100 cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div>
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
              </div>
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
