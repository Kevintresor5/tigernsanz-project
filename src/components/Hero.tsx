import { Play, Send, CheckCircle2 } from 'lucide-react';

const heroGraffiti = new URL('../assets/images/hero_graffiti_1780258294803.png', import.meta.url).href;

interface HeroProps {
  onExploreCourses: () => void;
  onGetStarted: () => void;
}

export default function Hero({ onExploreCourses, onGetStarted }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#0a0a0a] text-[#e5e5e5] pt-32 pb-20 px-6 sm:px-8 lg:px-12"
    >
      {/* Decorative Sophisticated Dark background lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] border border-stone-800 rotate-45 rounded-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] border border-stone-850 -rotate-12 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start select-none">
            
            {/* Elegant Minimal Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 border border-stone-800 rounded-full text-[10px] uppercase tracking-[0.25em] text-stone-400 bg-stone-900/40">
              <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-pulse" />
              Rwanda’s Tech Catalyst
            </div>

            {/* Premium Serif Display Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] leading-[0.85] font-serif text-stone-100 tracking-tight text-center lg:text-left mb-8">
              Digital <br />
              <span className="italic text-stone-400 block mt-2 lg:ml-20">Symmetry</span>
            </h1>

            {/* Refined Border Subtitle */}
            <div className="border-l border-stone-700 pl-6 text-left max-w-xl mb-12">
              <p className="text-base font-semibold text-stone-200 tracking-wide mb-1.5">
                Software <span className="text-stone-500 font-normal">•</span> Training{' '}
                <span className="text-stone-500 font-normal">•</span> IT Solutions
              </p>
              <p className="text-[10px] font-bold text-stone-500 tracking-[0.25em] uppercase">
                Established / Musanze, Rwanda / Est. 2024
              </p>
            </div>

            {/* Actions: Thin elegant outline + Solid premium light button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-stone-100 text-[#0a0a0a] hover:bg-white px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/30"
              >
                Get Started
              </button>
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto border border-stone-800 text-stone-300 hover:text-white hover:border-stone-600 px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Hero Right Media Box matching architectural frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="relative max-w-[420px] w-full aspect-[4/5] bg-stone-950 rounded-3xl overflow-hidden shadow-2xl border border-stone-900 group transition-all duration-500">
              
              {/* Main Background Image / Image placeholder */}
              <img
                src={heroGraffiti}
                alt="Dream It Believe It Build It"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay inside Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-95 pointer-events-none z-10" />

              {/* Sophisticated Geometric Line Details */}
              <div className="absolute inset-0 pointer-events-none z-20 border border-stone-800/40 m-4 rounded-[20px]" />

              {/* Founder status card overlay - Elegant Modern Minimal Styling */}
              <div className="absolute bottom-8 left-6 right-6 bg-[#0a0a0a]/90 backdrop-blur-md px-6 py-5 rounded-2xl border border-stone-800 shadow-xl z-20 hover:border-stone-700 transition-all duration-350">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
                  <span className="text-stone-400 font-bold text-[9px] tracking-[0.25em] uppercase">
                    Founder & Lead Engineer
                  </span>
                </div>
                <div className="text-stone-100 font-serif italic text-base text-center mb-2">
                  Schadrack Muragijimana
                </div>
                <div className="h-px w-[40px] mx-auto bg-stone-800 my-2" />
                <p className="text-[11px] text-stone-400 font-medium italic text-center leading-relaxed">
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
