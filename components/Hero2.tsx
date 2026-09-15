import Image from 'next/image';
import Link from 'next/link';

const circleImages = [
  "financial_planning.png",
  "retirement_planning.png",
  "tax_planning.png",
  "wealth_creation.png",
  "insurance_planning.png",
  "childs_future.png",
];

const Hero2 = () => {
  return (
    <section 
      className="w-full relative min-h-[800px] flex items-center bg-white overflow-hidden py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-[2px] bg-[#F29F05]"></div>
              <span className="text-[#F29F05] font-semibold tracking-wider text-sm uppercase">More Than Investments</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#0A192F] leading-tight mb-6">
              Your Financial Life <br />
              Is <span className="text-[#F29F05]">Bigger Than a Portfolio.</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Your financial future involves more than investments. From building wealth and planning for retirement to protecting your family and preparing for your child's future, every financial decision is connected.
            </p>
            <Link href="/solutions" className="inline-flex items-center px-6 py-3 bg-[#0A192F] text-white rounded font-medium hover:bg-[#0f2545] transition-colors w-fit">
              Explore Our Solutions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="pt-8">
            <div className="w-8 h-[2px] bg-[#F29F05] mb-4"></div>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#0A192F] mb-4">
              One Strategy. Multiple Goals.
            </h2>
            <p className="text-gray-700 text-lg max-w-lg leading-relaxed">
              MSK brings your financial priorities together through a structured, personalised approach designed around your life.
            </p>
          </div>
        </div>

        {/* Right Content - Concentric Circles */}
        <div className="relative w-full h-full hidden lg:flex items-center justify-center min-h-[400px]">
          <div className="relative flex items-center justify-center w-[400px] h-[400px]">
            {/* Outer Circle (2r) */}
            <div className="absolute inset-0 rounded-full border-[2px] border-gray-200"></div>
            {/* Inner Circle (r) with Logo */}
            <div className="absolute w-[150px] h-[150px] rounded-full border-[2px] border-[#F29F05] bg-white z-0 flex items-center justify-center shadow-sm">
              <Image 
                src="/MSK Logo Symbol.png" 
                alt="MSK Symbol" 
                width={110} 
                height={110} 
                className="object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            
            {/* Orbiting Container */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
              {circleImages.map((img, index) => {
                const angle = index * 60;
                return (
                  <div 
                    key={index} 
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div className="relative w-[176px] h-[176px] z-10 animate-[spin_40s_linear_infinite_reverse] flex items-center justify-center transition-transform hover:scale-110 duration-300">
                      <Image 
                        src={`/hero_section_2_pics/${img}`}
                        alt={img.replace('.png', '').replace(/_/g, ' ')}
                        fill
                        sizes="176px"
                        className="object-contain filter drop-shadow-md"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
