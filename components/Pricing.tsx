
import React from 'react';
import { CheckCircle2, Package, Zap } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Piani Semplici" subtitle="Investi nella tua crescita. Scegli la scalabilità." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Start Plan */}
          <FadeIn delay="0">
            <div className="h-full p-8 rounded-[2rem] bg-[#11141d] border border-white/10 backdrop-blur-md group relative overflow-hidden transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:scale-[1.01] shadow-xl hover:border-cyan-500/40 flex flex-col will-change-transform">
              
              {/* FILLER: Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
              
              {/* FILLER: Watermark */}
              <div className="absolute -right-8 -top-8 text-white/[0.03] transform rotate-12 scale-[3] pointer-events-none">
                  <Package size={48} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-300 mb-2 font-heading group-hover:text-cyan-400 transition-colors duration-300">Start</h3>
                <div className="text-3xl font-bold text-white mb-6 font-heading">Landing Page</div>
                <p className="text-sm text-slate-400 mb-8 font-body">Ideale per liberi professionisti e lancio prodotti.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="text-sm text-slate-300 flex gap-3"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> Monopagina ultra-veloce</li>
                  <li className="text-sm text-slate-300 flex gap-3"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> Copywriting base</li>
                  <li className="text-sm text-slate-300 flex gap-3"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> Form contatti integrato</li>
                </ul>
                <Button fullWidth>Inizia Ora</Button>
              </div>
            </div>
          </FadeIn>

           {/* Popular Plan */}
           <FadeIn delay="100">
            <div className="h-full relative p-8 rounded-[2rem] bg-[#0f172a] border border-cyan-500/50 flex flex-col transform md:-translate-y-4 z-10 transition-all duration-700 ease-out-expo hover:-translate-y-6 hover:scale-[1.02] shadow-[0_0_50px_rgba(6,182,212,0.2)] hover:shadow-[0_0_80px_rgba(6,182,212,0.5)] group overflow-hidden will-change-transform">
              
              {/* FILLER: Stronger Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
              
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent opacity-50 pointer-events-none transition-opacity duration-700 group-hover:opacity-70" />
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg z-20">
                Popolare
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-heading">Business AI</h3>
                <div className="text-3xl font-bold text-white mb-6 font-heading">Sito + Video</div>
                <p className="text-sm text-slate-400 mb-8 font-body">Il pacchetto completo per aggredire il mercato.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="text-sm text-white flex gap-3"><CheckCircle2 size={18} className="text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/> Sito web multi-pagina</li>
                  <li className="text-sm text-white flex gap-3"><CheckCircle2 size={18} className="text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/> SEO Advanced Setup</li>
                  <li className="text-sm text-white flex gap-3"><CheckCircle2 size={18} className="text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/> 2 Video Ads AI (30s)</li>
                  <li className="text-sm text-white flex gap-3"><CheckCircle2 size={18} className="text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/> Analytics + Dashboard</li>
                </ul>
                <Button fullWidth primary>Scegli Business</Button>
              </div>
            </div>
          </FadeIn>

          {/* Content Plan */}
          <FadeIn delay="200">
            <div className="h-full p-8 rounded-[2rem] bg-[#11141d] border border-white/10 backdrop-blur-md group relative overflow-hidden transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:scale-[1.01] shadow-xl hover:border-cyan-500/40 flex flex-col will-change-transform">
              
               {/* FILLER: Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
              
              {/* FILLER: Watermark */}
              <div className="absolute -right-8 -top-8 text-white/[0.03] transform rotate-12 scale-[3] pointer-events-none">
                  <Zap size={48} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-300 mb-2 font-heading group-hover:text-cyan-400 transition-colors duration-300">Content Flow</h3>
                <div className="text-3xl font-bold text-white mb-6 font-heading">Solo Video AI</div>
                <p className="text-sm text-slate-400 mb-8 font-body">Per chi ha già un sito ma serve traffico.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="text-sm text-slate-300 flex gap-3"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> 5 Video Verticali / mese</li>
                  <li className="text-sm text-slate-300 flex gap-3"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> Scripting AI Persuasivo</li>
                  <li className="text-sm text-slate-300 flex gap-3"><CheckCircle2 size={18} className="text-cyan-500 shrink-0"/> Voiceover multilingua</li>
                </ul>
                <Button fullWidth>Contatta Sales</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
