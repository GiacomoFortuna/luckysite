
import React from 'react';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeIn from './ui/FadeIn';

const steps = [
  {
    icon: <MessageSquare size={24} />,
    title: "Analisi",
    desc: "Briefing strategico per capire i tuoi obiettivi."
  },
  {
    icon: <PenTool size={24} />,
    title: "Design",
    desc: "UX/UI o Scripting AI per definire lo stile."
  },
  {
    icon: <Code2 size={24} />,
    title: "Sviluppo",
    desc: "Coding pulito o Generazione Asset AI."
  },
  {
    icon: <Rocket size={24} />,
    title: "Lancio",
    desc: "Go-live, ottimizzazione e monitoraggio."
  }
];

const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Come Lavoriamo" subtitle="Un processo lineare, trasparente e senza sorprese." />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-cyan-900 via-cyan-500/50 to-cyan-900 z-0" />
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#11141d] border border-cyan-500/20 group-hover:border-cyan-500/50 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-all duration-500 ease-out-expo shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] mb-6 group-hover:scale-110 group-hover:rotate-3 relative z-10 will-change-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-cyan-400 transition-colors duration-300">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] group-hover:text-slate-300 transition-colors duration-300">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
