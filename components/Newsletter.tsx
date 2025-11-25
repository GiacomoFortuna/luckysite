import React from 'react';
import { Sparkles, Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => (
  <section id="newsletter" className="py-16 bg-transparent border-t border-b border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 pointer-events-none" />
    <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
      <div className="inline-flex items-center justify-center gap-2 mb-6">
        <Sparkles size={20} className="text-cyan-600 dark:text-cyan-400 animate-pulse" />
        <span className="font-heading font-bold text-cyan-800 dark:text-cyan-100 uppercase tracking-wider text-sm">AI & Tech Trends</span>
      </div>
      
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Iscriviti alla Newsletter</h2>
      <p className="font-body text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Ricevi update su Intelligenza Artificiale, trend di design e offerte esclusive. Zero spam, solo valore puro per il tuo business.
      </p>
      
      <form className="max-w-md mx-auto space-y-4 md:space-y-0 md:flex md:gap-3" onSubmit={(e) => e.preventDefault()}>
        <div className="relative flex-1 group">
          <input 
            type="email" 
            placeholder="La tua email migliore" 
            className="w-full bg-white dark:bg-black/60 border border-slate-300 dark:border-white/20 rounded-xl px-5 py-4 text-slate-900 dark:text-white text-sm focus:border-cyan-600 dark:focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-600 dark:focus:ring-cyan-400 transition-all placeholder-slate-400 dark:placeholder-slate-500 backdrop-blur-sm group-hover:border-slate-400 dark:group-hover:border-white/30 pl-12 shadow-sm"
          />
          <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
        </div>
        <button className="w-full md:w-auto px-8 py-4 bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-bold rounded-xl text-sm transition-all shadow-lg dark:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap group">
          Iscriviti Ora 
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </form>
      <p className="text-xs text-slate-500 dark:text-slate-600 mt-6">
        Unisciti a +1.200 professionisti del digitale.
      </p>
    </div>
  </section>
);

export default Newsletter;