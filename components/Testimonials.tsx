
import React from 'react';
import SectionTitle from './ui/SectionTitle';
import FadeIn from './ui/FadeIn';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: "Marco Rossi",
    role: "CEO, TechStart",
    content: "LuckySite ha rivoluzionato la nostra presenza online. Il nuovo sito carica in un istante e le conversioni sono raddoppiate in un mese."
  },
  {
    name: "Elena Bianchi",
    role: "Marketing Director, FashionBrand",
    content: "I video generati con l'AI sono indistinguibili da quelli girati in studio. Abbiamo risparmiato il 70% del budget marketing."
  },
  {
    name: "Davide Verdi",
    role: "Founder, GreenEco",
    content: "Professionalità top. Hanno capito subito il nostro bisogno di velocità e pulizia nel design. Consigliatissimi."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Dicono di Noi" subtitle="I risultati dei nostri clienti parlano chiaro." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="h-full">
              <div className="h-full p-8 rounded-[2rem] bg-[#11141d] border border-white/10 backdrop-blur-md group relative overflow-hidden transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:scale-[1.01] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.3)] hover:border-cyan-500/40 will-change-transform">
                
                {/* FILLER: Dot Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
                
                {/* FILLER: Watermark Quote */}
                <div className="absolute -right-4 -bottom-4 text-white/[0.03] transform -rotate-12 scale-[3] pointer-events-none group-hover:text-white/[0.05] transition-colors">
                    <MessageSquareQuote size={48} />
                </div>

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                
                <Quote className="absolute top-6 right-6 text-slate-800 group-hover:text-cyan-500/20 transition-colors duration-500 relative z-20" size={40} />
                
                <div className="relative z-10">
                  <div className="flex gap-1 text-amber-400 mb-6 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  
                  <p className="text-slate-300 font-body leading-relaxed mb-6 group-hover:text-white transition-colors duration-500 relative z-20">
                    "{t.content}"
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500 relative z-20">
                    <div className="font-bold text-white font-heading group-hover:text-cyan-400 transition-colors duration-300">{t.name}</div>
                    <div className="text-xs text-cyan-500 uppercase tracking-wider font-medium">{t.role}</div>
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

export default Testimonials;
