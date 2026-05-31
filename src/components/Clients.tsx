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
    <section id="clients" className="py-20 bg-[#f9f8f6] text-stone-800 relative border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header content */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 block mb-3">
            OUR ECOSYSTEM
          </span>
          <h2 className="text-3xl font-serif text-stone-850 italic tracking-tight">
            Trusted By Leading Organizations
          </h2>
          <div className="h-px w-12 bg-emerald-500/30 mx-auto mt-4" />
        </div>

        {/* Column layout for Ecosystem partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ecosystemItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200/70 hover:border-emerald-500/30 hover:bg-emerald-50/20 rounded-2xl p-6 min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] group cursor-pointer shadow-sm"
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
                className="max-h-[48px] max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                title={item.name}
              />
              <div 
                className="hidden text-xs font-semibold text-center text-stone-500 group-hover:text-emerald-600 transition-colors flex flex-col items-center justify-center font-mono"
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
