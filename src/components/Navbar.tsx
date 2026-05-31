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
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-stone-900'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div className="w-8 h-8 border border-stone-600 rounded-full flex items-center justify-center group-hover:border-stone-400 transition-all duration-300">
                <div className="w-1.5 h-1.5 bg-stone-100 rounded-full" />
              </div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-stone-100 group-hover:text-white transition-colors">
                InfinityMura
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.id)}
                      className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer relative py-1 ${
                        activeSection === item.id
                          ? 'text-stone-100'
                          : 'text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-stone-100 animate-pulse" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Sophisticated Inquire Button */}
              <button
                onClick={() => handleLinkClick('contact')}
                className="border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                Inquire
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-900 focus:outline-none transition-all cursor-pointer"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out border-b border-stone-900 bg-[#0a0a0a] ${
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
                    ? 'text-stone-100 border-l border-stone-400 pl-3 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-stone-900">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full text-center border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white py-3 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
