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
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-stone-900 relative select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl font-serif italic text-stone-100 tracking-tight">
            Contact Us
          </h2>
          <div className="h-px w-12 bg-stone-700 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-950/40 rounded-[32px] p-8 border border-stone-900 relative overflow-hidden text-stone-200">
              
              <h4 className="text-xl font-serif italic text-stone-200 mb-2">Direct Collaboration</h4>
              <p className="text-stone-550 text-xs sm:text-sm leading-relaxed mb-8">
                Ready to kick off your project? Drop us a lines or start a direct WhatsApp text to begin instantly.
              </p>

              {/* Action buttons */}
              <button
                onClick={handleQuickWhatsApp}
                className="w-full bg-stone-100 hover:bg-white text-[#0a0a0a] font-bold text-xs uppercase tracking-[0.2em] p-4 rounded-full transition-all cursor-pointer"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Address cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-[#0d0d0d]/40 border border-stone-900 rounded-[20px]">
                <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-850 text-stone-450 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h6 className="text-[9px] uppercase font-bold text-stone-500 tracking-wider mb-0.5">Email Us</h6>
                  <p className="text-stone-300 text-sm font-mono leading-tight">
                    muragijimanaschadrack183@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-[#0d0d0d]/40 border border-stone-900 rounded-[20px]">
                <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-850 text-stone-450 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h6 className="text-[9px] uppercase font-bold text-stone-500 tracking-wider mb-0.5">Call Us</h6>
                  <p className="text-stone-300 text-sm font-mono leading-tight">
                    +250 791 767 225
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-[#0d0d0d]/40 border border-stone-900 rounded-[20px]">
                <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-850 text-stone-450 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h6 className="text-[9px] uppercase font-bold text-stone-500 tracking-wider mb-0.5">Location</h6>
                  <p className="text-stone-300 text-sm font-mono leading-tight">
                    Musanze — Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT INQUIRIES SHEET */}
          <div className="lg:col-span-7">
            <div className="bg-stone-950/45 border border-stone-900 rounded-[32px] p-6 sm:p-10">
              <h4 className="font-serif italic text-stone-200 text-lg mb-6">
                Send an Inquiry Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.22em] font-bold text-stone-500 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full p-3.5 border border-stone-900 bg-stone-900/40 text-stone-100 placeholder-stone-705 outline-none rounded-xl focus:border-stone-700 text-sm font-semibold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.22em] font-bold text-stone-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full p-3.5 border border-stone-900 bg-stone-900/40 text-stone-100 placeholder-stone-705 outline-none rounded-xl focus:border-stone-700 text-sm font-semibold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-[0.22em] font-bold text-stone-500 mb-2">
                    Subject Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject Title"
                    className="w-full p-3.5 border border-stone-900 bg-stone-900/40 text-stone-100 placeholder-stone-705 outline-none rounded-xl focus:border-stone-700 text-sm font-semibold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-[0.22em] font-bold text-stone-500 mb-2">
                    Detailed Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Describe your request..."
                    className="w-full p-3.5 border border-stone-900 bg-stone-900/40 text-stone-100 placeholder-stone-705 outline-none rounded-xl focus:border-stone-700 text-sm font-semibold transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || isSent}
                  className={`w-full p-4 rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-[0.2em] ${
                    isSent
                      ? 'bg-stone-800 text-stone-200'
                      : 'bg-stone-100 hover:bg-white text-[#0a0a0a]'
                  }`}
                >
                  {loading ? (
                    'Sending...'
                  ) : isSent ? (
                    <>
                      <Check className="w-4 h-4 text-stone-200" />
                      Inquiry Dispatched!
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
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
