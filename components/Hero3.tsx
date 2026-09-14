import Image from 'next/image';
import Link from 'next/link';

const solutions = [
  {
    title: "Portfolio Management",
    description: "Customized strategies for long-term growth.",
    image: "/hero_section_3_pics/portfolio_management.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    )
  },
  {
    title: "Financial Planning",
    description: "A clear plan for every stage of life.",
    image: "/hero_section_3_pics/financial_planning.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Retirement Planning",
    description: "A more secure, independent tomorrow.",
    image: "/hero_section_3_pics/retirement_planning.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0 0a3 3 0 11-3-3m12-7A9 9 0 003 12h18z" />
      </svg>
    )
  },
  {
    title: "Wealth Management",
    description: "Holistic solutions for your complete financial well-being.",
    image: "/hero_section_3_pics/wealth_management.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8h19l-9.5 13.5L2.5 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8L8 2h8l5.5 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 2L12 8L16 2" />
      </svg>
    )
  },
  {
    title: "Tax Planning",
    description: "Smarter strategies for a more efficient tomorrow.",
    image: "/hero_section_3_pics/tax_planning.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c3.866 0 7-1.343 7-3s-3.134-3-7-3-7 1.343-7 3 3.134 3 7 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12c0 1.657-3.134 3-7 3s-7-1.343-7-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 16c0 1.657-3.134 3-7 3s-7-1.343-7-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v11" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 5v11" />
      </svg>
    )
  },
  {
    title: "Child's Future Planning",
    description: "Today's planning for their brighter tomorrow.",
    image: "/hero_section_3_pics/child_education.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Insurance Planning",
    description: "Protection for what matters most.",
    image: "/hero_section_3_pics/Insurance_planning.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const SolutionCard = ({ title, description, image, icon }: { title: string, description: string, image: string, icon: React.ReactNode }) => (
  <div className="relative overflow-hidden bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full group transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 min-h-[160px] cursor-pointer">
    {/* Image side (right) */}
    <div className="absolute inset-y-0 right-0 w-[85%] pointer-events-none">
      <Image src={image} fill alt={title} className="object-cover object-left group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
    </div>

    {/* Content side (left) */}
    <div className="relative z-10 p-5 md:p-6 flex flex-col justify-center flex-grow w-[80%] lg:w-[90%]">
      <div>
        <div className="text-[#F29F05] mb-2">
          {icon}
        </div>
        <h3 className="text-xl font-sans text-[#0A192F] font-bold mb-1 leading-tight pr-4 whitespace-pre-line">
          {title.replace(" ", "\n")}
        </h3>
        <p className="text-sm font-sans font-semibold text-gray-700 max-w-[200px] leading-snug">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Hero3 = () => {
  return (
    <section className="w-full relative bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-sans font-bold text-[#374151] leading-tight mb-6">
              A Complete Approach to Your Wealth.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
              From your first investment to your retirement years, our solutions are designed to help you build, protect and pass on what matters most.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <div key={i} className={i === 6 ? "md:col-span-2 lg:col-span-3 flex justify-center" : ""}>
              <div className={i === 6 ? "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]" : "h-full"}>
                <SolutionCard {...solution} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero3;
