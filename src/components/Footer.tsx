import { Github, Twitter, Facebook, ArrowUp, Heart, Linkedin } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/schdrack', color: '#fff' },
    { icon: Linkedin, url: 'https://linkedin.com/in/schadrack-muragijimana', color: '#0077b5' },
    { icon: Twitter, url: 'https://x.com/MSchadrack566', color: '#1da1f2' },
  ];

  return (
    <footer className="bg-[#060606] text-stone-300 pt-16 pb-8 px-6 border-t border-stone-900 relative select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-stone-900/80">
          
          {/* Logo and short bio */}
          <div className="md:col-span-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full border border-stone-850 font-serif italic text-stone-200 flex items-center justify-center text-xs font-semibold bg-stone-950">
                I
              </div>
              <span className="text-xl font-serif italic text-stone-100 tracking-tight">
                Infinity<span className="text-stone-400">Mura</span>
              </span>
            </div>
            <p className="text-stone-550 text-xs sm:text-sm max-w-lg leading-relaxed mx-auto md:mx-0">
              Software Developer & IT Specialist based in Kigali, Rwanda. Building high-performance digital solutions and empowering tech talent.
            </p>
          </div>

          {/* Social icons */}
          <div className="md:col-span-4 flex items-center justify-center md:justify-end gap-3">
            {socialLinks.map((social, sIdx) => {
              const IconClass = social.icon;
              return (
                <a
                  key={sIdx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-stone-950 border border-stone-900 hover:bg-stone-900 hover:text-stone-100 hover:border-stone-800 rounded-full flex items-center justify-center text-stone-500 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <IconClass className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Attribution credit footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.15em] font-bold text-stone-500">
          <p>© {currentYear} InfinityMura. All rights reserved.</p>

          <p className="flex items-center gap-1.5 hover:text-stone-300 transition-colors">
            Made with <Heart className="w-3.5 h-3.5 text-stone-500" /> in Musanze
          </p>

          <button
            onClick={onScrollToTop}
            className="p-3 bg-stone-950 border border-stone-900 hover:border-stone-800 hover:bg-stone-900 rounded-full transition-all duration-300 group cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-stone-500 group-hover:text-stone-200 group-hover:scale-105 duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
