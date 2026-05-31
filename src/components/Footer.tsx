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
    <footer className="bg-[#0b0f19] text-white pt-16 pb-8 px-4 border-t border-white/5 relative select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          
          {/* Logo and short bio */}
          <div className="md:col-span-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500 font-black text-white flex items-center justify-center text-base">
                I
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Infinity<span className="text-orange-500">Mura</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed mx-auto md:mx-0">
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
                  className="w-11 h-11 bg-white/5 hover:bg-orange-500 hover:text-white rounded-xl flex items-center justify-center text-slate-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <IconClass className="w-5 h-5" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Attribution credit footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
          <p>© {currentYear} InfinityMura. All rights reserved.</p>

          <p className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
            Made with <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" /> in Musanze
          </p>

          <button
            onClick={onScrollToTop}
            className="p-3 bg-white/5 hover:bg-orange-500 hover:text-white rounded-xl transition-all duration-300 group cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:scale-105 duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
