export default function Clients() {
  const ecosystemItems = [
    {
      name: 'TechStart Rwanda',
      logo: 'https://infinitymura.netlify.app/images/techstart.png',
      fallback: '🚀 TechStart'
    },
    {
      name: 'Dione Coaching Center',
      logo: 'https://infinitymura.netlify.app/images/dione.png',
      fallback: '🎓 Dione Coaching'
    },
    {
      name: 'Kigali Innovation Hub',
      logo: 'https://infinitymura.netlify.app/images/techstart.png',
      fallback: '💡 Kigali Hub'
    },
    {
      name: 'Rwanda ICT Chamber',
      logo: 'https://infinitymura.netlify.app/images/chamber.png',
      fallback: '🖥️ ICT Chamber'
    },
    {
      name: 'University of Rwanda',
      logo: 'https://infinitymura.netlify.app/images/logo.webp',
      fallback: '🏫 Uni of Rwanda'
    },
    {
      name: 'Banks of Rwanda',
      logo: 'https://infinitymura.netlify.app/images/bnr.png',
      fallback: '🏦 National Bank'
    },
  ];

  return (
    <section id="clients" className="py-16 bg-[#0B0F19] text-white overflow-hidden relative border-y border-white/5">
      {/* Glow ambient circle */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-[2px] bg-amber-500/50" />
            <h6 className="text-xs uppercase tracking-[4px] font-black text-orange-500">
              Our Ecosystem
            </h6>
            <div className="w-6 h-[2px] bg-amber-500/50" />
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Trusted By Leading Organizations
          </h2>
          <div className="h-[4px] w-24 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Column layout for Ecosystem partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ecosystemItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/5 hover:border-amber-500/30 hover:bg-white/10 rounded-2xl p-6 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/5 group cursor-pointer"
            >
              <img
                src={item.logo}
                alt={item.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to text logo if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const sibling = target.nextElementSibling as HTMLDivElement;
                  if (sibling) sibling.style.display = 'flex';
                }}
                className="max-h-[55px] max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                title={item.name}
              />
              <div 
                className="hidden text-xs font-bold text-center text-slate-400 group-hover:text-white transition-colors flex-col items-center justify-center"
              >
                {item.fallback}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
