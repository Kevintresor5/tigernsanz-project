import { Star, Quote, Send } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jean Claude',
      role: 'Co-Founder, TechStart Rwanda',
      quote: 'Schadrack is exceptional at both developing robust systems and teaching the next generation of engineers.',
      avatar: 'J',
      rating: 5,
      color: '#eb7604',
    },
    {
      id: 2,
      name: 'Aline',
      role: 'Director, Dione Coaching',
      quote: 'His technical support is swift, professional, and reliable. Truly a valuable asset.',
      avatar: 'A',
      rating: 5,
      color: '#e4973b',
    },
    {
      id: 3,
      name: 'Peter',
      role: 'CTO, Kigali Innovation',
      quote: 'We collaborated on several fintech and API gateways. Excellence in code.',
      avatar: 'P',
      rating: 5,
      color: '#b6252a',
    },
    {
      id: 4,
      name: 'Divine M.',
      role: 'Product Owner, Urwibutso',
      quote: 'A reliable software partner. Delivered our retail e-commerce platform on time with outstanding scalability.',
      avatar: 'D',
      rating: 5,
      color: '#10b981',
    },
  ];

  const handleWhatsappPartnership = () => {
    const recipient = '250791767725';
    const text = `Hi Schadrack, I read your testimonials and would like to explore a potential partnership with InfinityMura.`;
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="testimonials" className="py-20 bg-white relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[3px] font-black text-orange-500 block mb-2">
            CLIENT VOUCHERS
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Testimonials
          </h2>
          <div className="h-[4px] w-12 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fade-in">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50 border border-slate-100/50 hover:bg-white hover:border-slate-150 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 transform hover:-translate-y-1 group cursor-pointer"
            >
              <div>
                {/* Rating score */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {Array.from({ length: test.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed italic mb-8 relative">
                  <Quote className="w-10 h-10 text-orange-500/10 absolute -top-5 -left-4 -z-0" />
                  <span className="relative z-10">"{test.quote}"</span>
                </p>
              </div>

              {/* Author item card info */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100 mt-auto">
                <div
                  className="w-12 h-12 rounded-full font-black text-white flex items-center justify-center text-base"
                  style={{ backgroundColor: test.color }}
                >
                  {test.avatar}
                </div>
                <div>
                  <h6 className="font-extrabold text-slate-800 text-base mb-0.5 leading-none">
                    {test.name}
                  </h6>
                  <p className="text-slate-400 text-xs font-bold leading-none uppercase">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership invitation block banner */}
        <div className="relative overflow-hidden bg-slate-900 text-white rounded-[32px] p-8 sm:p-10 border border-white/5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold mb-1">
              Have a Large Project or Venture?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Let's join forces and build reliable tech solutions for your organization.
            </p>
          </div>
          <button
            onClick={handleWhatsappPartnership}
            className="w-full sm:w-auto bg-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 active:scale-98 transition-all duration-205 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/15"
          >
            <Send className="w-4 h-4" />
            Discuss Partnership
          </button>
        </div>

      </div>
    </section>
  );
}
