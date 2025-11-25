
import React from 'react';
import { Globe, Cpu, ArrowRight, Sparkles } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeIn from './ui/FadeIn';

type PageType = 'home' | 'websites' | 'ai-content';

interface ServicesProps {
  navigateTo: (page: PageType) => void;
}

const Services: React.FC<ServicesProps> = ({ navigateTo }) => {
  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Le Nostre Soluzioni" 
          subtitle="Scegli l'arma per la tua crescita digitale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto items-stretch">
          {/* Service 1: Websites */}
          <FadeIn className="h-full">
            <div 
              onClick={() => navigateTo('websites')}
              className="h-full p-10 md:p-14 rounded-[2.5rem] bg-[#11141d] border border-white/10 cursor-pointer group relative overflow-hidden transition-all duration-500 hover:border-cyan-500/40 shadow-xl"
            >
              {/* FILLER: Tech Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
              
              {/* FILLER: Giant Watermark */}
              <div className="absolute -right-10 -bottom-10 text-cyan-950/20 group-hover:text-cyan-500/10 transition-colors duration-500 transform -rotate-12 scale-[4] pointer-events-none">
                  <Globe size={64} fill="currentColor" />
              </div>

              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                    <div className="w-20 h-20 bg-slate-900 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative z-20">
                      <Globe size={40} />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-300 relative z-20">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"/>
                    </div>
                </div>
                
                <h3 className="font-heading text-4xl font-bold mb-6 text-white tracking-tight relative z-20">
                  Siti Web <br/><span className="text-cyan-400">High-Performance</span>
                </h3>
                <p className="font-body text-slate-400 mb-10 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-500 max-w-md relative z-20">
                  Ingegneria web pura. Sviluppiamo piattaforme che caricano istantaneamente e convertono il traffico in clienti.
                </p>
                
                <div className="mt-auto border-t border-white/5 pt-6 flex gap-3 flex-wrap relative z-20">
                    {['Next.js 14', 'React', 'Tailwind'].map(tag => (
                        <span key={tag} className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service 2: AI Content */}
          <FadeIn delay="150" className="h-full">
            <div 
              onClick={() => navigateTo('ai-content')}
              className="h-full p-10 md:p-14 rounded-[2.5rem] bg-[#11141d] border border-white/10 cursor-pointer group relative overflow-hidden transition-all duration-500 hover:border-violet-500/40 shadow-xl"
            >
              {/* FILLER: Tech Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
              
              {/* FILLER: Giant Watermark */}
              <div className="absolute -right-10 -bottom-10 text-violet-950/20 group-hover:text-violet-500/10 transition-colors duration-500 transform rotate-12 scale-[4] pointer-events-none">
                  <Cpu size={64} fill="currentColor" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-violet-500/10 transition-colors" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                    <div className="w-20 h-20 bg-slate-900 border border-violet-500/20 rounded-2xl flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-2xl relative z-20">
                      <Cpu size={40} />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-black group-hover:border-violet-500 transition-all duration-300 relative z-20">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"/>
                    </div>
                </div>
                
                <h3 className="font-heading text-4xl font-bold mb-6 text-white tracking-tight relative z-20">
                  Contenuti & Ads <br/><span className="text-violet-400">AI-Generated</span>
                </h3>
                
                <p className="font-body text-slate-400 mb-10 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-500 max-w-md relative z-20">
                  Scala la produzione di contenuti senza assumere una troupe. Video ads, avatar e copy generati dall'AI in 24h.
                </p>
                
                <div className="mt-auto border-t border-white/5 pt-6 flex gap-3 flex-wrap relative z-20">
                    {['Generative Video', 'Voice Clone', 'Auto-Edit'].map(tag => (
                        <span key={tag} className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Services;
