
import React from 'react';
import { Zap, BarChart3, ShieldCheck, Smartphone } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeIn from './ui/FadeIn';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="L'Ecosistema LuckySite" subtitle="Tecnologia proprietaria per risultati ingiusti." />
        
        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[240px]">
          
          {/* Feature 1: Large (Speed) */}
          <FadeIn className="md:col-span-2">
            <div className="h-full p-8 rounded-[2rem] bg-[#11141d] border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-lg">
               
               {/* FILLER: Tech Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
               
               {/* FILLER: Giant Watermark */}
               <div className="absolute -right-8 -bottom-12 text-cyan-950/20 group-hover:text-cyan-500/10 transition-colors duration-500 transform rotate-12 scale-[4] pointer-events-none">
                  <Zap size={64} fill="currentColor" />
               </div>

               {/* FILLER: Dynamic Beam */}
               <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="relative z-10">
                 <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-cyan-950/30 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        <Zap size={28} className="group-hover:text-white transition-colors" />
                    </div>
                    {/* Animated Pulse Dot */}
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </div>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-cyan-50 transition-colors">Velocità Ludicrous</h3>
                 <p className="text-slate-400 max-w-md group-hover:text-slate-300 transition-colors">I nostri siti caricano in meno di 1 secondo. Utilizziamo edge caching globale e ottimizzazione automatica.</p>
               </div>
               
               <div className="relative z-10 mt-4 flex gap-2">
                 <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">99/100 Speed</div>
               </div>
            </div>
          </FadeIn>

          {/* Feature 2: Tall (Mobile) */}
          <FadeIn className="md:row-span-2">
             <div className="h-full p-8 rounded-[2rem] bg-[#11141d] border border-white/10 hover:border-violet-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col shadow-lg">
                
                {/* FILLER: Grid + Top Light */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-violet-500/10 to-transparent opacity-60" />

                {/* FILLER: Giant Watermark */}
                <div className="absolute -right-16 top-1/2 text-violet-950/20 group-hover:text-violet-500/10 transition-colors duration-500 transform -rotate-12 scale-[5] pointer-events-none">
                  <Smartphone size={64} fill="currentColor" />
               </div>

                <div className="w-14 h-14 bg-violet-950/30 border border-violet-500/20 rounded-2xl flex items-center justify-center text-violet-400 mb-6 shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0.2)] relative z-10">
                    <Smartphone size={28} className="group-hover:text-white transition-colors"/>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-violet-50 transition-colors relative z-10">Mobile First Nativo</h3>
                <p className="text-slate-400 mb-8 flex-1 group-hover:text-slate-300 transition-colors relative z-10">
                  Non adattiamo il desktop al mobile. Progettiamo per il pollice.
                </p>
                
                {/* Visual Mockup Animated */}
                <div className="w-full bg-slate-900 border border-white/10 rounded-t-2xl h-40 relative overflow-hidden translate-y-4 shadow-2xl group-hover:translate-y-2 transition-transform duration-700 ease-out-expo z-10">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                    <div className="absolute inset-x-4 top-4 h-2 bg-slate-800 rounded-full group-hover:bg-violet-500/30 transition-colors" />
                    <div className="absolute inset-x-4 top-8 bottom-0 bg-slate-800/50 rounded-t-lg border-t border-white/5 group-hover:bg-slate-800/80 transition-colors" />
                    <div className="absolute top-12 left-8 w-12 h-12 rounded-full bg-violet-500/20 blur-md animate-pulse" />
                </div>
             </div>
          </FadeIn>

          {/* Feature 3: Standard (SEO) */}
          <FadeIn>
             <div className="h-full p-8 rounded-[2rem] bg-[#11141d] border border-white/10 hover:border-emerald-500/50 transition-all duration-500 group relative overflow-hidden shadow-lg">
                
                {/* FILLER: Rising Graph Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-500/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />

                 {/* FILLER: Giant Watermark */}
                 <div className="absolute -right-8 -bottom-8 text-emerald-950/20 group-hover:text-emerald-500/10 transition-colors duration-500 transform rotate-12 scale-[3.5] pointer-events-none">
                  <BarChart3 size={64} fill="currentColor" />
               </div>

                <div className="w-12 h-12 bg-emerald-950/30 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] relative z-10">
                    <BarChart3 size={24} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-emerald-50 transition-colors relative z-10">SEO Semantica</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors relative z-10">Struttura HTML5 perfetta e Schema.org.</p>
             </div>
          </FadeIn>

          {/* Feature 4: Standard (Security) */}
          <FadeIn>
             <div className="h-full p-8 rounded-[2rem] bg-[#11141d] border border-white/10 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden shadow-lg">
                
                {/* FILLER: Corner Glow */}
                <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-blue-500/10 blur-[80px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />

                 {/* FILLER: Giant Watermark */}
                 <div className="absolute -right-8 -bottom-8 text-blue-950/20 group-hover:text-blue-500/10 transition-colors duration-500 transform -rotate-12 scale-[3.5] pointer-events-none">
                  <ShieldCheck size={64} fill="currentColor" />
               </div>

                <div className="w-12 h-12 bg-blue-950/30 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.2)] relative z-10">
                    <ShieldCheck size={24} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-blue-50 transition-colors relative z-10">Security by Design</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors relative z-10">Protezione DDoS e SSL automatico.</p>
             </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
