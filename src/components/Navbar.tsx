import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Send } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showShopModal, setShowShopModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Training', id: 'training' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const handleShopClick = () => {
    setShowShopModal(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070913]/95 backdrop-blur-md py-3.5 border-b border-stone-800/60 shadow-lg'
            : 'bg-[#070913]/85 backdrop-blur-sm py-5 border-b border-stone-900/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Logo from the screenshot */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div className="w-8 h-8 border border-orange-500/40 rounded-full flex items-center justify-center group-hover:border-orange-500 transition-all duration-300">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              </div>
              <span className="text-sm font-black tracking-widest text-white transition-colors">
                Infinity<span className="text-[#ff5500]">_Mura</span>
              </span>
            </div>

            {/* Desktop Navigation Links matching Screenshot 2 */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.id)}
                      className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer relative py-1.5 ${
                        activeSection === item.id
                          ? 'text-[#ff5500]'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff5500]" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Action Buttons matching Screenshot 2 */}
              <div className="flex items-center gap-3 pl-4 border-l border-stone-800">
                {/* Shop button list-item styled with shopping bag icon */}
                <button
                  onClick={handleShopClick}
                  className="bg-stone-900/90 hover:bg-stone-800 text-stone-100 hover:text-white border border-stone-700 hover:border-stone-500 px-4 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-orange-400" />
                  Shop
                </button>

                {/* Request Service button in bright orange filled style */}
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="bg-[#ff5500] hover:bg-[#e04b00] text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer shadow-md shadow-orange-550/10 active:scale-95"
                >
                  Request Service
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Portable mobile shop button */}
              <button
                onClick={handleShopClick}
                className="bg-stone-900 hover:bg-stone-800 text-[#ff5500] p-2.5 border border-stone-800 rounded-full cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-900 focus:outline-none transition-all cursor-pointer"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out border-b border-stone-800 bg-[#070913] ${
            isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left py-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-[#ff5500] border-l border-[#ff5500] pl-3 font-bold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-stone-800 space-y-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleShopClick();
                }}
                className="w-full text-center border border-stone-700 bg-stone-900 text-white py-3 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-orange-400" />
                Shop Products
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full text-center bg-[#ff5500] text-white py-3 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                Request Service
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Elegant shop products listing drawer/modal */}
      {showShopModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
          <div className="bg-[#0b0e1b] rounded-3xl border border-stone-800 max-w-xl w-full p-6 sm:p-8 relative text-[#e5e5e5] animate-[fadeIn_0.25s_ease-out]">
            <button
              onClick={() => setShowShopModal(false)}
              className="absolute top-4 right-4 p-2 bg-stone-900 border border-stone-800 hover:bg-stone-800 rounded-full text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-950/40 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-orange-400 tracking-widest uppercase block">INFINITYMURA ECO-SHOP</span>
                <h3 className="text-xl font-serif italic text-white">Academy & Software Shop</h3>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed mb-6">
              Book advanced tech trainings, acquire industrial SaaS platforms, or buy custom IT-infrastructure tools built by our development house.
            </p>

            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
              {/* Product item 1 */}
              <div className="p-4 bg-stone-950/60 rounded-xl border border-stone-900 hover:border-orange-500/20 transition-all flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Advanced Fullstack Eng. (3-Months)</h4>
                  <p className="text-[11px] text-stone-500 mt-1">Direct mentorship on Laravel, React, Next.js with deployment certification.</p>
                </div>
                <button 
                  onClick={() => {
                    const msg = encodeURIComponent("Hi Remy, I'm interested in purchasing enrollment for the Advanced Fullstack Engineering Course (3-Months). Can we talk?");
                    window.open(`https://wa.me/250791767725?text=${msg}`, '_blank');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg shrink-0"
                >
                  Buy
                </button>
              </div>

              {/* Product item 2 */}
              <div className="p-4 bg-stone-950/60 rounded-xl border border-stone-900 hover:border-orange-500/20 transition-all flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Custom School ERP License</h4>
                  <p className="text-[11px] text-stone-500 mt-1">Multi-campus software package for complete student, attendance & grading management.</p>
                </div>
                <button 
                  onClick={() => {
                    const msg = encodeURIComponent("Hi Remy, I'm interested in a custom School ERP License customisation for our institution. Can I get a quote?");
                    window.open(`https://wa.me/250791767725?text=${msg}`, '_blank');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg shrink-0"
                >
                  Buy
                </button>
              </div>

              {/* Product item 3 */}
              <div className="p-4 bg-stone-950/60 rounded-xl border border-stone-900 hover:border-orange-500/20 transition-all flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Tailored E-Commerce Suite</h4>
                  <p className="text-[11px] text-stone-500 mt-1">Complete online store integrated with Momo, Airtel Money, and card processing.</p>
                </div>
                <button 
                  onClick={() => {
                    const msg = encodeURIComponent("Hi Remy, I'm looking to buy the Tailored E-Commerce Suite for my online retail store. Let's talk details!");
                    window.open(`https://wa.me/250791767725?text=${msg}`, '_blank');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg shrink-0"
                >
                  Buy
                </button>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-900 flex justify-end">
              <button
                onClick={() => setShowShopModal(false)}
                className="text-[10px] font-bold tracking-widest text-stone-500 hover:text-stone-300 uppercase"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
