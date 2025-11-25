
import React from 'react';
import { Zap, Bot, Target, ArrowRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import SectionTitle from './ui/SectionTitle';

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "Sito Lento",
      problem: "Load > 3s",
      solution: "Load < 0.4s",
      desc: "Un sito lento uccide le vendite. La nostra architettura azzera le attese.",
      color: "text-cyan-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
      border: "group-hover:border-cyan-500/50",
      bgBeam: "from-cyan-500/10",
      icon: <Zap size={24} />,
      watermark: <Zap size={64} />
    },
    {
      title: "Costi Video",
      problem: "Troupe & Set",
      solution: "Generazione AI",
      desc: "Produci asset video infiniti al 10% del costo tradizionale.",
      color: "text-violet-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]",
      border: "group-hover:border-violet-500/50",
      bgBeam: "from-violet-500/10",
      icon: <Bot size={24} />,
      watermark: <Bot size={64} />
    },
    {
      title: "Zero Leads",
      problem: "Bassa Conv.",
      solution: "UX Persuasiva",
      desc: "Design studiato psicologicamente per trasformare i visitatori in clienti.",
      color: "text-emerald-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]",
      border: "group-hover:border-emerald-500/50",
      bgBeam: "from-emerald-500/10",
      icon: <Target size={24} />,
      watermark: <Target size={64} />
    }
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Il Problema del Mercato" subtitle="Upgrade necessario. Non rimanere indietro." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {points.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 100} className="h-full">
                  <div className={`h-full relative group rounded-[2rem] bg-[#11141d] border border-white/5 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg ${item.border} ${item.glow}`}>
                    
                    {/* FILLER: Tech Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                    
                    {/* FILLER: Dynamic Beam */}
                    <div className={`absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l ${item.bgBeam} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />
                    
                    {/* FILLER: Giant Watermark */}
                    <div className="absolute -right-6 -top-6 text-white/[0.03] transform rotate-12 scale-[2.5] pointer-events-none transition-colors duration-500 group-hover:text-white/[0.05]">
                        {item.watermark}
                    </div>

                    <div className="p-8 relative z-10 flex flex-col h-full">
                        
                        {/* Header: Icon + Title */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-xl bg-slate-900 border border-white/10 ${item.color} shadow-lg relative z-20`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white font-heading tracking-wide relative z-20">{item.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-20">
                            {item.desc}
                        </p>

                        {/* Transformation Stats - VISIBILITY INCREASED */}
                        <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between font-mono tracking-wider relative z-20">
                             <div className="flex flex-col gap-1">
                                <span className="text-slate-500 line-through decoration-red-500/50 decoration-2 text-sm font-semibold group-hover:text-slate-400 transition-colors">{item.problem}</span>
                             </div>
                             
                             <ArrowRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
                             
                             <div className="flex flex-col gap-1 items-end">
                                <span className={`${item.color} text-sm font-bold glow-text shadow-cyan-500/50`}>{item.solution}</span>
                             </div>
                        </div>

                    </div>
                  </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
