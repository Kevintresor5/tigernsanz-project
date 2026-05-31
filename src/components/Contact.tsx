import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check, Zap, Calendar, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSent(true);

      // Trigger standard mailto for backup
      const mailtoUrl = `mailto:remynsanzimana@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Attempt to open email dispatch
      window.location.href = mailtoUrl;

      // Reset form on success feedback
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1200);
  };

  const handleQuickWhatsApp = () => {
    const recipient = '250791767725';
    const text = 'Hi Remy, I just saw your portfolio and would like to hire your software services.';
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBookMeeting = () => {
    const recipient = '250791767725';
    const text = 'Hi Remy, I would like to book a meeting with you to discuss a custom software collaboration project.';
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#fcfbfa] border-t border-stone-200/50 relative select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Custom Header Title matching Screenshot 4 */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-stone-900 tracking-tight leading-none mb-3">
            Get In <span className="text-[#ff5500]">Touch</span>
          </h2>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 block">
            LET'S COLLABORATE ON YOUR NEXT BIG IDEA
          </span>
          <div className="h-[2px] w-12 bg-orange-500/30 mx-auto mt-4 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: DARK CONTACT INFO BLOCK FROM SCREENSHOT 4 */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-[#0b0e1b] rounded-[28px] p-8 border border-stone-850 shadow-xl flex flex-col justify-between h-full text-stone-300">
              
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-stone-400 mb-6 pb-2 border-b border-stone-800">
                  Contact Info
                </h4>

                <div className="space-y-6 mb-8">
                  {/* Phone Item */}
                  <div className="group cursor-pointer" onClick={handleQuickWhatsApp}>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#ff5500] block mb-1">
                      Direct Line
                    </span>
                    <p className="text-white text-base font-semibold tracking-wide transition-all duration-200 group-hover:text-[#ff5500]">
                      +250 791 767 725
                    </p>
                  </div>

                  {/* Mail Item */}
                  <div className="group cursor-pointer">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#ff5500] block mb-1">
                      Email
                    </span>
                    <p className="text-stone-300 text-sm font-mono tracking-wide transition-all duration-200 group-hover:text-white select-all break-all text-ellipsis overflow-hidden">
                      muragijimanaschadrack183@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Glowing Interactive Current Status block from Screenshot 4 */}
              <div className="mt-auto bg-[#13172c] p-6 rounded-2xl border border-stone-800 relative overflow-hidden shadow-inner">
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#ff5500]/5 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-orange-950/40 border border-orange-500/25 flex items-center justify-center text-[#ff5500] shrink-0">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <span className="text-[9px] font-mono text-stone-400 tracking-wider block font-bold uppercase">
                      Current Status
                    </span>
                    
                    <h5 className="font-bold text-white text-sm">
                      Available for projects
                    </h5>
                    
                    {/* Glowing active green dot badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                      <span className="text-emerald-400 font-bold text-[8px] tracking-wide uppercase">
                        On Duty & Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Book Meeting inside status block */}
                <button
                  type="button"
                  onClick={handleBookMeeting}
                  className="w-full mt-4 bg-transparent hover:bg-stone-900 border border-stone-700 text-stone-200 hover:text-white font-bold text-[10px] uppercase tracking-[0.18em] py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  Book Meeting
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: LIGHT INQUIRIES SHEET FROM SCREENSHOT 4 */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white border border-stone-200/80 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5 flex flex-col justify-between h-full">
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.22em] font-bold text-stone-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full p-4 border border-stone-200 bg-stone-50/50 text-stone-850 placeholder-stone-300 outline-none rounded-xl focus:border-stone-450 focus:bg-white text-sm font-semibold transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.22em] font-bold text-stone-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full p-4 border border-stone-200 bg-stone-50/50 text-stone-850 placeholder-stone-300 outline-none rounded-xl focus:border-stone-450 focus:bg-white text-sm font-semibold transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.22em] font-bold text-stone-400 mb-2">
                      Tell me about your project...
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      placeholder="Hi Remy, I have a project idea..."
                      className="w-full p-4 border border-stone-200 bg-stone-50/50 text-stone-850 placeholder-stone-300 outline-none rounded-xl focus:border-stone-450 focus:bg-white text-sm font-semibold transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Bottom Dual Button Actions corresponding to Screenshot 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {/* Dark Email Button */}
                  <button
                    type="submit"
                    disabled={loading || isSent}
                    className={`w-full p-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-[10px] uppercase tracking-[0.18em] ${
                      isSent
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        : 'bg-[#0b0e1b] hover:bg-stone-900 text-white shadow-sm'
                    }`}
                  >
                    {loading ? (
                      'Dispatching...'
                    ) : isSent ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        Dispatched
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Official Email
                      </>
                    )}
                  </button>

                  {/* Green Outline WhatsApp Button */}
                  <button
                    type="button"
                    onClick={handleQuickWhatsApp}
                    className="w-full p-4 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-white rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-[10px] uppercase tracking-[0.18em] active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-50/10" />
                    Chat on WhatsApp
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
