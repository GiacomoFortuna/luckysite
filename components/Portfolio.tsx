
import React from 'react';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Works</span>
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
              Non mostriamo tutto. Mostriamo solo ciò che ha spostato l'ago della bilancia per i nostri clienti.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 transition-all duration-300 group">
            <span className="text-sm font-bold uppercase tracking-wider">Tutti i progetti</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            
            {/* ITEM 1: LARGE FEATURED (Spans 2 cols, 2 rows) */}
            <FadeIn className="md:col-span-2 md:row-span-2 h-full">
              <div className="group relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#11141d] border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481487484168-9b930d5b7d9d?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center transition-transform duration-[1500ms] ease-out-expo group-hover:scale-105 opacity-60 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        E-Commerce Redesign
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-tight">Neon District</h3>
                      <p className="text-slate-400 max-w-md text-lg line-clamp-2">Migrazione da Shopify a Next.js. Risultato: +140% velocità, +45% conversion rate.</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                      <ArrowRight size={28} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ITEM 2: VERTICAL (AI Video) */}
            <FadeIn delay="100" className="md:col-span-1 md:row-span-2 h-full">
              <div className="group relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#11141d] border border-white/10 shadow-xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-black z-0" />
                 {/* Simulated Vertical Video UI */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </div>
                 </div>
                 
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-2">AI Campaign</div>
                    <h3 className="text-2xl font-bold text-white mb-1 font-heading">Luxe Fragrance</h3>
                    <p className="text-slate-500 text-sm">30 video assets in 24h</p>
                 </div>
              </div>
            </FadeIn>

            {/* ITEM 3: WIDE (SaaS Dashboard) */}
            <FadeIn delay="200" className="md:col-span-3 md:row-span-1 h-full">
               <div className="group relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#11141d] border border-white/10 shadow-xl flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 p-10 flex flex-col justify-center order-2 md:order-1 relative z-10">
                     <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">SaaS Platform</div>
                     <h3 className="text-3xl font-bold text-white mb-4 font-heading">FinFlow Analytics</h3>
                     <p className="text-slate-400 mb-6">Dashboard finanziaria real-time con milioni di data points. Ottimizzazione rendering canvas.</p>
                     <div className="flex items-center gap-2 text-white font-bold text-sm hover:gap-4 transition-all cursor-pointer">
                        Vedi Case Study <ArrowRight size={16} />
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 h-full relative order-1 md:order-2 overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-l from-[#050505] to-transparent z-10" />
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                  </div>
               </div>
            </FadeIn>

        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="text-cyan-400 font-bold font-heading text-lg hover:underline">Vedi tutto il portfolio →</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
