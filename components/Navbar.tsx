
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type PageType = 'home' | 'websites' | 'ai-content';

interface NavbarProps {
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string, isPage: boolean = false) => {
    e.preventDefault();
    setIsOpen(false);

    if (isPage) {
      if (target === 'websites') navigateTo('websites');
      if (target === 'ai-content') navigateTo('ai-content');
      return;
    }

    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const element = document.getElementById(target.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (target === '#home') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(target.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: "Servizi", href: "#services" },
    { name: "Perché noi", href: "#why-us" },
    { name: "Processo", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/50 dark:bg-[#02040a]/50 backdrop-blur-xl border-slate-200 dark:border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, '#home')} className="text-xl md:text-2xl font-heading font-bold tracking-tighter flex items-center gap-3 group flex-shrink-0">
          {/* Custom SVG Logo: Linear Neon Knot */}
          <div className="w-10 h-10 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-90">
             <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                <defs>
                   <linearGradient id="nav-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
                      <stop offset="100%" stopColor="#a855f7" /> {/* Violet */}
                   </linearGradient>
                </defs>
                <path 
                  d="M35 35 L65 35 L65 65 L35 65 Z M35 35 L35 20 A15 15 0 0 1 65 20 L65 35 M65 35 L80 35 A15 15 0 0 1 80 65 L65 65 M65 65 L65 80 A15 15 0 0 1 35 80 L35 65 M35 65 L20 65 A15 15 0 0 1 20 35 L35 35" 
                  stroke="url(#nav-logo-grad)" 
                  strokeWidth="8"
                />
             </svg>
          </div>
          
          <span className="text-slate-900 dark:text-white transition-colors text-2xl tracking-tighter">
            Lucky<span className="text-cyan-600 dark:text-cyan-500 font-extrabold drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">Site</span>
          </span>
        </a>

        {/* Desktop Links - Enhanced Visibility Container */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 dark:bg-black/60 px-8 py-3 rounded-full border border-white/20 dark:border-white/15 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-heading font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#newsletter"
            onClick={(e) => handleNavClick(e, '#newsletter')}
            className="px-6 py-2.5 bg-slate-900 dark:bg-cyan-600/10 hover:bg-cyan-600 dark:hover:bg-cyan-500/20 rounded-full text-sm font-bold border border-transparent dark:border-cyan-500/30 hover:border-cyan-500 text-white hover:text-white dark:text-cyan-400 transition-all duration-300 shadow-md dark:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] backdrop-blur-sm"
          >
            Newsletter
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="text-slate-800 dark:text-white p-2 rounded-lg transition-colors" 
            onClick={() => setIsOpen(!isOpen)} 
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white dark:bg-[#02040a]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-2xl transform transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-heading font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 py-2 border-b border-slate-100 dark:border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#newsletter" 
            onClick={(e) => handleNavClick(e, '#newsletter')}
            className="text-center mt-4 py-3 bg-cyan-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(8,145,178,0.3)]"
          >
            Iscriviti alla Newsletter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
