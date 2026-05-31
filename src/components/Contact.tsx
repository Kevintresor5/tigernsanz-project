import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      const mailtoUrl = `mailto:muragijimanaschadrack183@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Attempt to open email dispatch
      window.location.href = mailtoUrl;

      // Reset form on success feedback
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1200);
  };

  const handleQuickWhatsApp = () => {
    const recipient = '250791767725';
    const text = 'Hi Schadrack, I just saw your portfolio and would like to hire your software services.';
    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[3px] font-black text-orange-500 block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Contact Us
          </h2>
          <div className="h-[4px] w-12 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] rounded-3xl p-6 shadow-xl border border-white/5 relative overflow-hidden text-white">
              
              {/* Active Ping status */}
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full w-max mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Active Service Desk
              </div>

              <h4 className="text-xl font-extrabold mb-2">Direct Collaboration</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                Ready to kick off your project? Drop us a lines or start a direct WhatsApp text to begin instantly.
              </p>

              {/* Action buttons */}
              <button
                onClick={handleQuickWhatsApp}
                className="w-full bg-orange-500 text-white font-bold p-3.5 rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Address cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl p-4.5">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Email Us</h6>
                  <p className="text-slate-750 text-sm font-semibold leading-tight">
                    muragijimanaschadrack183@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl p-4.5">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Call Us</h6>
                  <p className="text-slate-755 text-sm font-semibold leading-tight">
                    +250 791 767 225
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl p-4.5">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Location</h6>
                  <p className="text-slate-750 text-sm font-semibold leading-tight">
                    Musanze — Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT INQUIRIES SHEET */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-[32px] p-6 sm:p-10 shadow-xl">
              <h4 className="font-extrabold text-slate-800 text-lg mb-6">
                Send an Inquiry Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full p-3.5 border border-slate-200 bg-slate-50 outline-none rounded-xl focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full p-3.5 border border-slate-200 bg-slate-50 outline-none rounded-xl focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-400 mb-2">
                    Subject Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject Title"
                    className="w-full p-3.5 border border-slate-200 bg-slate-50 outline-none rounded-xl focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-400 mb-2">
                    Detailed Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Describe your request..."
                    className="w-full p-3.5 border border-slate-200 bg-slate-50 outline-none rounded-xl focus:border-orange-500 focus:bg-white text-sm font-semibold transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || isSent}
                  className={`w-full p-3.5 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isSent
                      ? 'bg-emerald-500 text-white shadow-emerald-500/10'
                      : 'bg-[#0f172a] text-white hover:bg-slate-800'
                  }`}
                >
                  {loading ? (
                    'Sending...'
                  ) : isSent ? (
                    <>
                      <Check className="w-5 h-5 text-white" />
                      Inquiry Dispatched!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      Dispatch Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
