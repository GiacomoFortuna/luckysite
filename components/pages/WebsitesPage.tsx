
import React, { useEffect } from 'react';
import { ArrowRight, Gauge, Search, MousePointerClick, Smartphone, Shield, Layers } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

type PageType = 'home' | 'websites' | 'ai-content';

interface PageProps {
  navigateTo: (page: PageType) => void;
}

const WebsitesPage: React.FC<PageProps> = ({ navigateTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-transparent min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-float-fast">
              <Gauge size={16} />
              <span>Performance-First Engineering</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Siti Web Moderni <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Che Convertono</span>
            </h1>
            <p className="font-body text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Smettila di perdere clienti a causa di siti lenti e datati. Progettiamo esperienze digitali ultra-rapide, ottimizzate per Google e studiate per vendere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button primary onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Richiedi Preventivo</Button>
              <Button onClick={() => navigateTo('home')}>Torna alla Home</Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Tech Stack / Benefits Grid */}
      <section className="container mx-auto px-6 py-12 border-y border-white/5 backdrop-blur-sm bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Gauge size={32} />, title: "Core Web Vitals 99+", desc: "Google premia la velocità. I nostri siti superano tutti i test di performance." },
            { icon: <Search size={32} />, title: "SEO Tecnica Nativa", desc: "Struttura semantica perfetta per scalare le posizioni sui motori di ricerca." },
            { icon: <MousePointerClick size={32} />, title: "Conversion Design", desc: "Layout studiati per guidare l'utente verso l'acquisto o il contatto." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 100} className="h-full">
              <div className="p-8 rounded-[2rem] bg-[#11141d] border border-white/10 backdrop-blur-md h-full group relative overflow-hidden transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:scale-[1.01] shadow-xl hover:border-cyan-500/40 will-change-transform">
                
                {/* FILLER: Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
                
                {/* FILLER: Watermark */}
                <div className="absolute -right-6 -bottom-6 text-white/[0.03] transform -rotate-12 scale-[3] pointer-events-none group-hover:text-cyan-500/10 transition-colors">
                    {item.icon}
                </div>

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out-expo inline-block relative z-20 bg-slate-900/50 p-3 rounded-2xl border border-white/5">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-cyan-400 transition-colors duration-300 relative z-20">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 relative z-20">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Deep Dive Features */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Non il solito WordPress Lento</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Utilizziamo tecnologie di nuova generazione (React, Next.js, Astro). Questo significa zero caricamenti inutili, sicurezza totale e una fluidità che i vecchi CMS non possono eguagliare.
              </p>
              <ul className="space-y-3">
                {['Nessun plugin vulnerabile', 'Caricamento istantaneo', 'Codice pulito'].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-white"><Shield size={18} className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.4)]"/> {li}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay="200">
              <div className="aspect-square rounded-[2rem] bg-gradient-to-tr from-slate-800 to-slate-900 border border-white/10 relative overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.15)] group hover:border-cyan-500/30 transition-all duration-700 ease-out-expo">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-[1500ms] ease-out-expo"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 text-center shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out-expo group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                    <div className="text-5xl font-bold text-green-400 mb-1 font-heading drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">0.4s</div>
                    <div className="text-xs text-slate-300 uppercase tracking-widest">Tempo Caricamento</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <FadeIn delay="200" className="order-2 md:order-1">
              <div className="aspect-video rounded-[2rem] bg-gradient-to-bl from-slate-800 to-slate-900 border border-white/10 relative overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.15)] group hover:border-cyan-500/30 transition-all duration-700 ease-out-expo">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-[1500ms] ease-out-expo"></div>
              </div>
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Responsive & Mobile First</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Oggi il 70% del traffico è mobile. Progettiamo partendo dallo schermo dello smartphone per garantire un'esperienza tattile perfetta, senza menu rotti o testi illeggibili.
              </p>
              <ul className="space-y-3">
                {['Navigazione Thumb-friendly', 'Immagini ottimizzate', 'Layout fluido'].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-white"><Smartphone size={18} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"/> {li}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-6 text-center">
        <div className="bg-gradient-to-r from-cyan-950/40 to-blue-900/40 rounded-[3rem] p-12 border border-white/10 relative overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.2)] group hover:shadow-[0_0_100px_rgba(6,182,212,0.3)] transition-all duration-700 ease-out-expo hover:scale-[1.01]">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
            
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10 font-heading">Pronto a fare il salto di qualità?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">Analizziamo gratuitamente il tuo sito attuale e ti proponiamo una strategia di rifacimento.</p>
            <div className="relative z-10 inline-block">
               <Button primary fullWidth={false} onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}>Prenota Analisi Gratuita</Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default WebsitesPage;
