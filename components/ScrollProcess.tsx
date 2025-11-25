
import React, { useState, useEffect, useRef } from 'react';
import { Search, Layout, Code2, Rocket, Play, CheckCircle2, Terminal, BarChart } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const steps = [
  {
    id: 1,
    title: "Analisi Strategica",
    subtitle: "Data-Driven Blueprint",
    description: "Non tiriamo a indovinare. Analizziamo i dati dei competitor e progettiamo un'architettura informativa basata sulle keyword ad alto traffico.",
    icon: <Search />,
    color: "cyan"
  },
  {
    id: 2,
    title: "UX/UI Design",
    subtitle: "Morphing Experience",
    description: "Trasformiamo wireframe grezzi in interfacce utente vibranti. Ogni interazione è studiata per guidare l'occhio e ridurre l'attrito verso la conversione.",
    icon: <Layout />,
    color: "violet"
  },
  {
    id: 3,
    title: "Sviluppo & Build",
    subtitle: "Clean Code Architecture",
    description: "Niente builder pesanti. Scriviamo codice moderno (React/Next.js) compilato staticamente per performance istantanee e sicurezza blindata.",
    icon: <Code2 />,
    color: "emerald"
  },
  {
    id: 4,
    title: "Lancio & AI Content",
    subtitle: "Market Domination",
    description: "Go-live immediato e generazione automatica di asset video verticali per i social media. Il tuo brand è ovunque, simultaneamente.",
    icon: <Rocket />,
    color: "amber"
  }
];

const getBgColor = (color: string) => {
  switch (color) {
    case 'cyan': return 'bg-cyan-500';
    case 'violet': return 'bg-violet-500';
    case 'emerald': return 'bg-emerald-500';
    case 'amber': return 'bg-amber-500';
    default: return 'bg-slate-500';
  }
};

const getTextColor = (color: string) => {
  switch (color) {
    case 'cyan': return 'text-cyan-400';
    case 'violet': return 'text-violet-400';
    case 'emerald': return 'text-emerald-400';
    case 'amber': return 'text-amber-400';
    default: return 'text-slate-400';
  }
};

const VisualWrapper = ({ active, children }: { active: boolean; children?: React.ReactNode }) => (
  <div className={`absolute inset-0 transition-all duration-700 ease-out-expo ${active ? 'opacity-100 scale-100 blur-0 translate-y-0' : 'opacity-0 scale-95 blur-md translate-y-8 pointer-events-none'}`}>
    {children}
  </div>
);

const ScrollProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step'));
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Il Processo LuckySite" subtitle="Tecnologia fluida, risultati tangibili." />

        {/* 
            SINGLE GRID CONTAINER 
            Default alignItems is 'stretch', so the Right Column will be as tall as the Left Column.
        */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-20">
          
          {/* 
              LEFT COLUMN: SCROLLABLE STEPS 
              Large vertical gap ensures the section is tall enough for the sticky effect to work.
          */}
          <div className="flex flex-col gap-[40vh] pb-[20vh] pt-10">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                data-step={step.id}
                className={`transition-all duration-500 flex flex-col justify-center min-h-[30vh] p-8 rounded-[2rem] border ${
                    activeStep === step.id 
                    ? 'bg-white/[0.05] border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] backdrop-blur-md' 
                    : 'bg-transparent border-transparent opacity-30 blur-[1px]'
                }`}
              >
                 <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 transform
                        ${activeStep === step.id ? `${getBgColor(step.color)} scale-110 rotate-3` : 'bg-slate-800'}`}
                    >
                        {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <span className={`text-4xl font-bold font-heading text-white/10`}>0{step.id}</span>
                 </div>

                 <h3 className={`text-3xl font-bold mb-4 font-heading transition-colors duration-300 ${activeStep === step.id ? 'text-white' : 'text-slate-500'}`}>
                    {step.title}
                 </h3>
                 <div className={`text-sm font-bold uppercase tracking-widest mb-4 transition-colors duration-300 ${activeStep === step.id ? getTextColor(step.color) : 'text-slate-600'}`}>
                    {step.subtitle}
                 </div>
                 <p className={`text-lg leading-relaxed transition-colors duration-300 ${activeStep === step.id ? 'text-slate-300' : 'text-slate-600'}`}>
                    {step.description}
                 </p>
              </div>
            ))}
          </div>

          {/* 
              RIGHT COLUMN: STICKY CARD SEMPRE ALLA STESSA POSIZIONE 
              Applied 'self-start' and 'sticky' directly to the column.
          */}
          <div className="hidden lg:block lg:sticky lg:top-24 self-start">
            <div className="relative w-full aspect-square max-w-xl bg-[#02040a] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5 mx-auto">
              
              {/* Background Grid & Glow (Static) */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#02040a]/50 to-[#02040a]" />
              
              {/* DYNAMIC VISUALS CONTAINER */}
              <div className="absolute inset-0 p-12 flex items-center justify-center">
                
                {/* 1. DASHBOARD ANALYTICS */}
                <VisualWrapper active={activeStep === 1}>
                    <div className="w-full h-full relative flex flex-col gap-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="text-[10px] font-mono text-cyan-500 flex items-center gap-1">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" /> LIVE DATA
                            </div>
                        </div>
                        {/* Main Chart Area */}
                        <div className="flex-1 bg-slate-900/50 rounded-xl border border-white/5 p-4 flex items-end justify-between gap-2 relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/30 animate-[shine_2s_linear_infinite]" />
                             {[40, 70, 45, 90, 65, 85].map((h, i) => (
                                 <div key={i} className="w-full bg-cyan-500/20 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                     <div className="absolute bottom-0 w-full bg-cyan-400" style={{ height: '0%', animation: `grow-up 1s ease-out ${i*0.1}s forwards` }} />
                                     <style>{`@keyframes grow-up { to { height: 100%; } }`}</style>
                                 </div>
                             ))}
                        </div>
                        {/* Side Widgets */}
                        <div className="grid grid-cols-2 gap-4 h-1/3">
                            <div className="bg-slate-900/50 rounded-xl border border-white/5 p-4 flex items-center gap-3">
                                <div className="p-2 bg-cyan-500/10 rounded-lg"><BarChart size={16} className="text-cyan-400" /></div>
                                <div><div className="h-2 w-12 bg-slate-700 rounded mb-1"/> <div className="h-2 w-8 bg-slate-800 rounded"/></div>
                            </div>
                            <div className="bg-slate-900/50 rounded-xl border border-white/5 p-4 flex items-center gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg"><Search size={16} className="text-purple-400" /></div>
                                <div><div className="h-2 w-12 bg-slate-700 rounded mb-1"/> <div className="h-2 w-8 bg-slate-800 rounded"/></div>
                            </div>
                        </div>
                    </div>
                </VisualWrapper>

                {/* 2. WIREFRAME TO UI MORPH */}
                <VisualWrapper active={activeStep === 2}>
                    <div className="w-full h-full relative">
                        {/* Wireframe Layer (Fades Out) */}
                        <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-xl p-4 flex flex-col gap-4 animate-pulse opacity-30">
                             <div className="w-full h-8 border border-dashed border-slate-700 rounded-lg" />
                             <div className="flex gap-4">
                                 <div className="w-1/3 h-32 border border-dashed border-slate-700 rounded-lg" />
                                 <div className="flex-1 space-y-2">
                                     <div className="w-full h-4 bg-slate-800/50 rounded" />
                                     <div className="w-2/3 h-4 bg-slate-800/50 rounded" />
                                     <div className="w-1/2 h-8 border border-dashed border-slate-700 rounded mt-4" />
                                 </div>
                             </div>
                        </div>
                        {/* UI Layer (Slides In) */}
                        <div className="absolute inset-0 bg-slate-900 rounded-xl border border-white/10 shadow-2xl p-4 flex flex-col gap-4 overflow-hidden transform transition-all duration-1000 origin-bottom-right rotate-2 hover:rotate-0">
                            <div className="w-full h-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg shadow-lg flex items-center px-3 justify-between">
                                <div className="flex gap-1"><div className="w-2 h-2 bg-white/20 rounded-full"/><div className="w-2 h-2 bg-white/20 rounded-full"/></div>
                            </div>
                            <div className="flex gap-4">
                                 <div className="w-1/3 h-32 bg-slate-800 rounded-lg border border-white/5 relative overflow-hidden">
                                     <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent" />
                                 </div>
                                 <div className="flex-1 space-y-2 pt-2">
                                     <div className="w-full h-3 bg-slate-700 rounded animate-pulse" />
                                     <div className="w-3/4 h-3 bg-slate-700 rounded animate-pulse delay-75" />
                                     <div className="w-1/2 h-8 bg-indigo-500 rounded-lg mt-4 shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center justify-center text-[10px] font-bold text-white">CLICK ME</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </VisualWrapper>

                {/* 3. CODE TERMINAL */}
                <VisualWrapper active={activeStep === 3}>
                    <div className="w-full h-full bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
                        {/* Terminal Header */}
                        <div className="bg-[#161b22] px-4 py-2 border-b border-white/5 flex items-center gap-2">
                            <Terminal size={14} className="text-slate-400" />
                            <span className="text-slate-400">bash — build</span>
                        </div>
                        {/* Terminal Body */}
                        <div className="p-4 text-slate-300 space-y-2">
                            <div className="flex gap-2">
                                <span className="text-emerald-400">➜</span>
                                <span className="text-blue-400">~/luckysite</span>
                                <span className="text-white">npm run build</span>
                            </div>
                            <div className="text-slate-500">Creating an optimized production build...</div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500">✔</span> 
                                <span>Compiled successfully</span>
                                <span className="text-slate-500">(432ms)</span>
                            </div>
                            <div className="space-y-1 pl-4 border-l border-slate-700 mt-2">
                                <div className="flex justify-between w-3/4"><span className="text-slate-400">First Load JS</span> <span className="text-green-400">45 kB</span></div>
                                <div className="flex justify-between w-3/4"><span className="text-slate-400">Connect</span> <span className="text-green-400">100%</span></div>
                            </div>
                            <div className="mt-4 p-2 bg-green-500/10 border border-green-500/20 rounded text-green-400 flex items-center gap-2">
                                <Rocket size={14} /> Build Complete. Deploying to Edge...
                            </div>
                        </div>
                    </div>
                </VisualWrapper>

                {/* 4. AI CONTENT CARDS */}
                <VisualWrapper active={activeStep === 4}>
                     <div className="w-full h-full relative flex items-center justify-center">
                         {/* Card 1 (Back) */}
                         <div className="absolute w-40 h-64 bg-slate-800 rounded-2xl border border-white/10 transform -rotate-12 -translate-x-12 scale-90 opacity-50 shadow-xl">
                            <div className="w-full h-full bg-gradient-to-b from-transparent to-black/60 relative">
                                <div className="absolute bottom-4 left-4 w-8 h-1 bg-slate-600 rounded" />
                            </div>
                         </div>
                         {/* Card 2 (Back) */}
                         <div className="absolute w-40 h-64 bg-slate-800 rounded-2xl border border-white/10 transform rotate-12 translate-x-12 scale-90 opacity-50 shadow-xl">
                             <div className="w-full h-full bg-gradient-to-b from-transparent to-black/60 relative">
                                <div className="absolute bottom-4 left-4 w-8 h-1 bg-slate-600 rounded" />
                            </div>
                         </div>
                         {/* Main Card (Front) */}
                         <div className="absolute w-48 h-72 bg-slate-900 rounded-2xl border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)] overflow-hidden transform hover:scale-105 transition-transform duration-500 z-10">
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                             <div className="absolute top-4 right-4 px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded uppercase">REC</div>
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                 <Play size={20} className="text-white fill-white ml-1" />
                             </div>
                             <div className="absolute bottom-6 left-6 right-6">
                                 <div className="flex items-center gap-2 mb-2">
                                     <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center"><Rocket size={12} className="text-black" /></div>
                                     <span className="text-xs font-bold text-white">@luckysite_ai</span>
                                 </div>
                                 <div className="h-2 w-3/4 bg-slate-500/50 rounded mb-1" />
                                 <div className="h-2 w-1/2 bg-slate-500/50 rounded" />
                             </div>
                         </div>
                     </div>
                </VisualWrapper>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ScrollProcess;
