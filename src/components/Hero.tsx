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
      className="min-h-screen d-flex flex-col justify-center relative overflow-hidden bg-[#0f172a] text-white pt-24 pb-16 px-4"
    >
      {/* Background with Zoom and Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full hero-zoom-bg bg-cover bg-center brightness-30 scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a]/40 via-[#0f172a]/80 to-[#0f172a]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center flex-grow py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start select-none">
            {/* Rocket Badge */}
            <div className="mb-6 inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm font-bold shadow-sm tracking-wide">
              <span className="text-orange-500 font-black animate-pulse">🚀</span>
              <span className="text-slate-100 font-semibold">Rwanda’s Tech Catalyst</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-none">
              <span className="block text-white">Infinity</span>
              <span className="block text-gradient mt-2">Mura</span>
            </h1>

            {/* Subtitle */}
            <div className="border-l-4 border-orange-500 pl-4 text-left max-w-xl mb-10">
              <p className="text-lg font-extrabold text-slate-100 tracking-wide mb-1 flex items-center gap-2">
                Software <span className="text-orange-500">•</span> Training{' '}
                <span className="text-orange-500">•</span> IT Solutions
              </p>
              <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">
                — PROUDLY BUILT IN MUSANZE —
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-orange-600 shadow-lg shadow-orange-500/20 active:translate-y-0 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5 flex-shrink-0" />
                Get Started
              </button>
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/15 backdrop-blur-md active:translate-y-0 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white text-white flex-shrink-0" />
                Explore Courses
              </button>
            </div>
          </div>

          {/* Hero Right Media Overlap */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="relative max-w-[450px] w-full aspect-square bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group hover:border-orange-500/20 transition-all duration-500">
              {/* Main image */}
              <img
                src={heroGraffiti}
                alt="Dream It Believe It Build It"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay inside Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

              {/* Founder status card overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#0f172a]/90 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/10 shadow-xl z-20 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span className="text-white font-black text-xs tracking-wider uppercase">
                    Founder & Lead Engineer
                  </span>
                </div>
                <div className="text-white font-medium text-sm text-center mb-1">
                  Schadrack Muragijimana
                </div>
                <div className="h-[1px] w-[50%] mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent my-2" />
                <p className="text-xs text-slate-400 font-medium italic text-center leading-relaxed">
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
