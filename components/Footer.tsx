
import React from 'react';

type PageType = 'home' | 'websites' | 'ai-content';

interface FooterProps {
  navigateTo: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    navigateTo('home');
    setTimeout(() => {
      const element = document.getElementById(target.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer id="contact" className="bg-transparent pt-12 pb-12 relative overflow-hidden transition-colors duration-300 relative z-10 border-t border-white/5">
      {/* Footer specific glow effect */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-gradient-to-t from-cyan-900/20 to-transparent blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                {/* Custom SVG Logo: Linear Neon Knot (Footer Version) */}
                <div className="w-10 h-10 relative flex-shrink-0">
                   <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                      <defs>
                         <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
                            <stop offset="100%" stopColor="#a855f7" /> {/* Violet */}
                         </linearGradient>
                      </defs>
                      <path 
                        d="M35 35 L65 35 L65 65 L35 65 Z M35 35 L35 20 A15 15 0 0 1 65 20 L65 35 M65 35 L80 35 A15 15 0 0 1 80 65 L65 65 M65 65 L65 80 A15 15 0 0 1 35 80 L35 65 M35 65 L20 65 A15 15 0 0 1 20 35 L35 35" 
                        stroke="url(#footer-logo-grad)" 
                        strokeWidth="8"
                      />
                   </svg>
                </div>
                <span className="text-2xl font-heading font-bold tracking-tighter text-white">
                    Lucky<span className="text-cyan-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">Site</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                  Costruiamo il futuro del web. Performance estreme e contenuti generati dall'IA per aziende che non si accontentano.
              </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-12 md:gap-24 w-full md:w-auto text-left">
            <div>
              <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Servizi</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-body">
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">Web Development</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">AI Video Ads</a></li>
                <li><a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">SEO Consulting</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">Brand Identity</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Azienda</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-body">
                <li><a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">Chi Siamo</a></li>
                <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">Portfolio</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:pl-1 duration-300 block">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-slate-600 dark:text-slate-500 text-xs md:text-sm font-body">© 2024 LuckySite Agency. All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-500 text-xs md:text-sm font-body bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            Sistemi Operativi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
