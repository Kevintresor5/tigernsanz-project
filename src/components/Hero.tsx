import { MessageCircle, ArrowRight, Star } from 'lucide-react';

const ownerProfileImg = new URL('../assets/images/owner_profile_1780260030406.png', import.meta.url).href;

interface HeroProps {
  onExploreCourses: () => void;
  onGetStarted: () => void;
}

export default function Hero({ onExploreCourses, onGetStarted }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#070913] text-[#e5e5e5] pt-32 pb-20 px-6 sm:px-8 lg:px-12"
    >
      {/* Immersive faded background portrait of the founder on the left */}
      <div 
        className="absolute left-0 bottom-0 top-0 w-full lg:w-[50%] opacity-20 lg:opacity-35 pointer-events-none z-0 mix-blend-luminosity bg-no-repeat bg-[#070913]"
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent 30%, #070913 90%), url(${ownerProfileImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 15%',
        }}
      />

      {/* Modern cybernetic background accent points */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[25%] w-[350px] h-[350px] bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content aligned with screenshot */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left select-none">
            
            {/* Elegant Minimal Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 border border-orange-500/25 rounded-full text-[10px] uppercase tracking-[0.25em] text-orange-400 bg-orange-950/20">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              Rwanda’s Tech Catalyst
            </div>

            {/* Premium Serif Display Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] leading-tight font-sans font-black tracking-tight text-white mb-6">
              Infinity<span className="text-[#ff5500]">_Mura</span>
            </h1>

            {/* Refined Custom Subtitle Border Layout */}
            <div className="bg-[#0b0e1b]/70 backdrop-blur-md p-5 rounded-2xl border border-stone-800/80 mb-10 max-w-xl">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-stone-200 mb-2 font-mono">
                <span>Software</span> 
                <span className="text-[#ff5500]">•</span> 
                <span className="text-[#ff5500]">Training</span> 
                <span className="text-[#ff5500]">•</span> 
                <span>IT Solutions</span>
              </div>
              <p className="text-[9px] font-bold text-stone-400 tracking-[0.3em] uppercase">
                — PROUDLY BUILT IN MUSANZE —
              </p>
            </div>

            {/* Actions: Get Started with WhatsApp styling + Outline Explore Courses */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Request Service / Get Started button with embedded WhatsApp logo */}
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-[#ff5500] hover:bg-[#e04b00] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-orange-500/20 active:scale-[0.98]"
              >
                {/* Embedded custom elegant minimal WhatsApp logo */}
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.417 9.864-9.864.001-2.636-1.02-5.115-2.875-6.973C16.398 1.91 13.922.887 11.997.887c-5.446 0-9.873 4.42-9.876 9.865-.001 1.983.518 3.921 1.5 5.626L2.647 20.9l4.511-1.182z"/>
                </svg>
                Get Started
              </button>
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto border border-stone-700 text-stone-200 hover:text-white hover:border-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-[#0b0e1b]/30 backdrop-blur"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Hero Right Media Box - Overlapping founder badge matching Screenshot 2 precisely */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-16 lg:mt-0">
            <div className="relative max-w-[340px] sm:max-w-[360px] w-full pt-16 pb-8 px-6 sm:px-8 bg-[#0b0e1b]/90 backdrop-blur-md rounded-3xl border border-stone-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-all duration-500">
              
              {/* Overlapping small circular floating profile avatar sticker */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                <div className="w-[100px] h-[100px] rounded-full p-[3px] bg-[#070913] border border-stone-800 shadow-xl overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={ownerProfileImg}
                    alt="Remy Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Card Meta Content Info */}
              <div className="text-center mt-2">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                  <span className="text-orange-400 font-bold text-[9px] tracking-[0.3em] uppercase block">
                    Founder & Lead Engineer
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif italic text-white mb-2 font-medium tracking-wide">
                  Remy Nsanzimana
                </h3>
                
                <div className="h-px w-[60px] mx-auto bg-stone-800 my-4" />
                
                <p className="text-xs text-stone-400 font-medium italic leading-relaxed max-w-[280px] mx-auto select-none">
                  "Empowering Rwanda's digital future through elegant code and innovative training."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
