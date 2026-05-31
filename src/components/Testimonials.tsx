import { Star, Quote, Send } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jean Claude',
      role: 'Co-Founder, TechStart Rwanda',
      quote: 'Remy is exceptional at both developing robust systems and teaching the next generation of engineers.',
      avatar: 'J',
      rating: 5,
      color: '#ff5500',
    },
    {
      id: 2,
      name: 'Aline',
      role: 'Director, Dione Coaching',
      quote: 'His technical support is swift, professional, and reliable. Truly a valuable asset.',
      avatar: 'A',
      rating: 5,
      color: '#ff661b',
    },
    {
      id: 3,
      name: 'Peter',
      role: 'CTO, Kigali Innovation',
      quote: 'We collaborated on several fintech and API gateways. Excellence in code.',
      avatar: 'P',
      rating: 5,
      color: '#ff8833',
    },
    {
      id: 4,
      name: 'Divine M.',
      role: 'Product Owner, Urwibutso',
      quote: 'A reliable software partner. Delivered our retail e-commerce platform on time with outstanding scalability.',
      avatar: 'D',
      rating: 5,
      color: '#ffa044',
    },
  ];

  const handleWhatsappPartnership = () => {
    const recipient = '250795547233';
    const text = `Hi Remy, I read your testimonials and would like to explore a potential partnership with reneproject.`;
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="testimonials" className="py-24 bg-[#070913] border-t border-stone-900 relative select-none animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 block mb-2">
            CLIENT VOUCHERS
          </span>
          <h2 className="text-4xl font-serif italic text-stone-100 tracking-tight">
            Testimonials
          </h2>
          <div className="h-px w-12 bg-stone-700 mx-auto mt-4" />
        </div>

        {/* Testimonials grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fade-in">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-stone-950/40 border border-stone-900 hover:border-stone-750 hover:bg-stone-900/10 p-8 rounded-[32px] flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.01] group cursor-pointer"
            >
              <div>
                {/* Rating score */}
                <div className="flex items-center gap-1 text-orange-500 mb-5">
                  {Array.from({ length: test.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-3 h-3 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed italic mb-8 relative">
                  <Quote className="w-8 h-8 text-stone-900/40 absolute -top-4 -left-3 -z-0" />
                  <span className="relative z-10">"{test.quote}"</span>
                </p>
              </div>

              {/* Author item card info */}
              <div className="flex items-center gap-3 pt-5 border-t border-stone-900 mt-auto">
                <div
                  className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 text-stone-300 font-serif italic flex items-center justify-center text-sm font-semibold"
                >
                  {test.avatar}
                </div>
                <div>
                  <h6 className="font-serif italic text-stone-200 text-sm leading-tight">
                    {test.name}
                  </h6>
                  <p className="text-stone-500 text-[9px] font-mono uppercase mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership invitation block banner */}
        <div className="relative overflow-hidden bg-stone-950 text-stone-200 rounded-[32px] p-8 sm:p-10 border border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-serif italic text-stone-100 mb-1">
              Have a Large Project or Venture?
            </h4>
            <p className="text-stone-500 text-xs sm:text-sm">
              Let's join forces and build reliable tech solutions for your organization.
            </p>
          </div>
          <button
            onClick={handleWhatsappPartnership}
            className="w-full sm:w-auto bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-205 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-500/10"
          >
            <Send className="w-4 h-4" />
            Discuss Partnership
          </button>
        </div>

      </div>
    </section>
  );
}
