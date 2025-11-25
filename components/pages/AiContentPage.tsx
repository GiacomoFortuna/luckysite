
import React, { useEffect } from 'react';
import { ArrowRight, Bot, Video, Zap, BarChart, PlayCircle, Mic } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

type PageType = 'home' | 'websites' | 'ai-content';

interface PageProps {
  navigateTo: (page: PageType) => void;
}

const AiContentPage: React.FC<PageProps> = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-transparent min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 shadow-[0_0_20px_rgba(99,102,241,0.2)] animate-float-medium">
              <Bot size={16} />
              <span>Generative AI Studio</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Video Ads & Content <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Powered by AI</span>
            </h1>
            <p className="font-body text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Scala la tua produzione di contenuti senza assumere una troupe cinematografica. Creiamo video ads virali, avatar parlanti e copy persuasivo in ore, non settimane.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button primary onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}>Inizia Ora</Button>
              <Button onClick={() => navigateTo('home')}>Torna alla Home</Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-6 py-12 border-y border-white/5 backdrop-blur-sm bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Video size={32} />, title: "Ads Social 30s", desc: "Video verticali perfetti per Reels, TikTok e YouTube Shorts." },
            { icon: <Zap size={32} />, title: "Velocità 10x", desc: "Dall'idea al file esportato in meno di 24 ore." },
            { icon: <BarChart size={32} />, title: "-70% Costi", desc: "Nessun attore, nessuna location fisica, nessun noleggio attrezzatura." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 100} className="h-full">
              <div className="p-8 rounded-[2rem] bg-[#11141d] border border-white/10 backdrop-blur-md h-full group relative overflow-hidden transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:scale-[1.01] shadow-xl hover:border-indigo-500/40 will-change-transform">
                
                {/* FILLER: Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
                
                {/* FILLER: Watermark */}
                <div className="absolute -right-6 -bottom-6 text-white/[0.03] transform -rotate-12 scale-[3] pointer-events-none group-hover:text-indigo-500/10 transition-colors">
                    {item.icon}
                </div>

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                
                <div className="relative z-10">
                  <div className="text-indigo-400 mb-6 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 ease-out-expo inline-block relative z-20 bg-slate-900/50 p-3 rounded-2xl border border-white/5">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-indigo-400 transition-colors duration-300 relative z-20">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 relative z-20">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-6 py-16">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-heading">Come Funziona la Magia</h2>
            
            <div className="space-y-8">
                {[
                    { step: "01", title: "Scripting AI", desc: "Analizziamo il tuo brand e generiamo script persuasivi basati su framework di copywriting collaudati (AIDA, PAS).", icon: <Mic size={24} /> },
                    { step: "02", title: "Generazione Visual", desc: "Creiamo avatar realistici o sequenze video stock mixate con AI per visualizzare il messaggio.", icon: <Bot size={24} /> },
                    { step: "03", title: "Voiceover & Editing", desc: "Voci neurali indistinguibili dall'umano e montaggio dinamico con sottotitoli animati.", icon: <PlayCircle size={24} /> }
                ].map((s, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] bg-slate-800/20 border border-white/10 items-start md:items-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 transition-all duration-700 ease-out-expo group relative overflow-hidden hover:-translate-y-1 hover:scale-[1.01] will-change-transform">
                             {/* FILLER: Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                            
                            <div className="text-4xl font-bold text-white/10 font-heading group-hover:text-indigo-500/20 transition-colors duration-500 relative z-10">{s.step}</div>
                            
                            <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out-expo shadow-[0_0_20px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">
                                {s.icon}
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-indigo-400 transition-colors duration-300">{s.title}</h3>
                                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">{s.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
         </div>
      </section>

      {/* Example Placeholder */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-5xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">Esempi di Output</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FadeIn>
                    <div className="aspect-[9/16] bg-black/40 rounded-[2rem] border border-white/10 relative overflow-hidden group max-w-xs mx-auto shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-700 ease-out-expo hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        <div className="absolute bottom-6 left-6 text-left">
                            <div className="text-xs text-indigo-400 font-bold uppercase mb-1 drop-shadow-md">Avatar AI</div>
                            <div className="text-white font-bold text-lg">Corporate Presenter</div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-700 ease-out-expo shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                              <PlayCircle size={32} className="text-white fill-white/20" />
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay="100">
                    <div className="aspect-[9/16] bg-black/40 rounded-[2rem] border border-white/10 relative overflow-hidden group max-w-xs mx-auto shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transition-all duration-700 ease-out-expo hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        <div className="absolute bottom-6 left-6 text-left">
                            <div className="text-xs text-purple-400 font-bold uppercase mb-1 drop-shadow-md">Product Showcase</div>
                            <div className="text-white font-bold text-lg">Dynamic Editing</div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-700 ease-out-expo shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                              <PlayCircle size={32} className="text-white fill-white/20" />
                            </div>
                        </div>
                    </div>
                </FadeIn>
             </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-6 text-center">
        <div className="bg-gradient-to-r from-indigo-950/40 to-purple-900/40 rounded-[3rem] p-12 border border-white/10 relative overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.2)] group hover:shadow-[0_0_100px_rgba(99,102,241,0.3)] transition-all duration-700 ease-out-expo hover:scale-[1.01]">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
            
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10 font-heading">Pronto a dominare i social?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">Smetti di sprecare budget in produzioni costose. Passa alla generazione di contenuti AI.</p>
            <div className="relative z-10 inline-block">
               <Button primary fullWidth={false} onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}>Prenota Strategia Gratuita</Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AiContentPage;
