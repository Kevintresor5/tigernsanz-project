import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-white/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-400 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-orange-500/20 group-hover:scale-105 transition-all">
                I
              </div>
              <span className="text-xl font-black text-white tracking-tight group-hover:text-orange-400 transition-colors">
                Infinity<span className="text-orange-500">Mura</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              <ul className="flex items-center gap-1 mr-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        activeSection === item.id
                          ? 'text-orange-400 bg-white/5'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Chat on WhatsApp Button */}
              <button
                onClick={() => handleLinkClick('contact')}
                className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-md shadow-orange-500/10 flex items-center gap-1 hover:translate-y-[-2px] duration-150 cursor-pointer"
              >
                Inquire Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out border-b border-white/5 bg-slate-950/98 ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-orange-500 bg-white/5 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-white/5">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold hover:bg-orange-600 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                Inquire Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
