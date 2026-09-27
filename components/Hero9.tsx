"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const features = [
  {
    title: "Personalised Approach",
    desc: "Tailored strategies aligned with your unique goals, risk profile and life stage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Research-Led Insights",
    desc: "Investment decisions backed by in-depth research and fundamental analysis.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Transparent Guidance",
    desc: "Clear communication, no hidden agendas — just advice in your best interest.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Digital Convenience",
    desc: "A seamless digital experience to manage your investments anytime, anywhere.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.5,
      type: "spring",
      bounce: 0.25,
    },
  }),
};

const carouselFeatures = [...features, ...features];

const Hero9 = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
      <div className="max-w-[93.75rem] mx-auto">
        <section id="why-msk" className="w-full relative py-20 lg:py-28 overflow-hidden bg-[#F9FAFB] rounded-[2.5rem] lg:rounded-[4rem] shadow-xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero_section_9.png"
              alt="Why MSK Background"
              fill
              className="object-cover"
              quality={90}
              priority
            />
            {/* Soft radial glow only in the top-right to keep the rest of the image completely untouched */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] pointer-events-none" />
          </div>

      {/* Main content area */}
      <div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">

          {/* ── Text Content Column (Now on Right on Desktop) ── */}
          <div className="flex flex-col justify-between order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
            {/* Top content */}
            <div className="flex flex-col items-end text-right">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-black font-bold tracking-wider text-sm uppercase">
                  Why MSK
                </span>
                <div className="w-8 h-[2px] bg-[#F29F05]" />
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-bold text-black leading-[1.12] mb-6 tracking-tight drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-[#F29F05]">Advice</span> is easy.{" "}
                <br className="hidden sm:block" />
                A strategy built{" "}
                <br className="hidden sm:block" />
                <span className="text-black">around you is different.</span>
              </motion.h2>

              <motion.p
                className="text-black/90 text-lg leading-relaxed max-w-xl mb-8 font-medium drop-shadow-sm ml-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At MSK, we go beyond products and transactions. We take the
                time to understand your goals, build a personalised strategy,
                and stay with you at every step of your financial journey.
              </motion.p>

            </div>


          </div>

          {/* ── Feature Cards Column (Now on Left on Desktop) ── */}
          <div className="flex flex-col gap-5 lg:pr-6 order-2 lg:order-1 lg:col-start-1 lg:row-start-1">
            {/* Feature cards Carousel */}
            <div className="relative w-full overflow-hidden flex py-2">
              
              <motion.div
                className="flex gap-5"
                animate={{ 
                  x: ["0%", "0%", "-12.5%", "-12.5%", "-25%", "-25%", "-37.5%", "-37.5%", "-50%"] 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1],
                  ease: "easeInOut"
                }}
              >
                {carouselFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-7 border border-white overflow-hidden cursor-pointer hover:border-[#F29F05]/40 transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-[17.5rem] sm:w-[20rem] shrink-0"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[#FFF8EB] border border-[#F29F05]/20 flex items-center justify-center text-[#F29F05] mb-5 group-hover:bg-[#F29F05] group-hover:text-white group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300 shadow-sm">
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-sans font-bold text-black mb-2 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-black/80 leading-relaxed mb-4">
                      {feature.desc}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-[0.1875rem] bg-gradient-to-r from-[#F29F05] to-[#ffd166] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Decorative quote mark */}
              <svg className="absolute top-5 left-6 w-10 h-10 text-[#F29F05]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
              <blockquote className="relative pl-4 pt-4">
                <p className="text-black text-lg md:text-xl font-serif italic leading-relaxed mb-4 drop-shadow-sm">
                  &ldquo;Our success is measured by the trust our clients place in us
                  and the financial progress they make.&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#F29F05]" />
                  <cite className="not-italic text-sm font-bold text-black tracking-wider uppercase">
                    MSK Investment Services
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
        </section>

        {/* Text Below the Image Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.p
            className="font-script text-black text-4xl md:text-5xl leading-snug italic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            More Than Investments. A Partnership.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero9;
