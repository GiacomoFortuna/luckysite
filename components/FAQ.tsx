import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-white/10">
      <button 
        className="w-full py-6 flex justify-between items-center text-left group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-medium text-slate-800 dark:text-slate-200 pr-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors font-heading">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-cyan-600 dark:text-cyan-400" /> : <ChevronDown size={20} className="text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => (
  <section id="faq" className="py-20 bg-transparent transition-colors duration-300">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionTitle title="Domande Frequenti" subtitle="Dubbi? Ecco le risposte che cerchi." />
      <div className="mt-8 bg-slate-50 dark:bg-slate-900/40 rounded-2xl p-4 md:p-8 border border-slate-200 dark:border-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] dark:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
        <FAQItem question="Quanto tempo ci vuole per un sito web?" answer="Grazie al nostro stack tecnologico moderno, consegniamo landing page in 5-7 giorni lavorativi e siti complessi in 2-3 settimane. La velocità è la nostra priorità." />
        <FAQItem question="Offrite manutenzione post-lancio?" answer="Sì, offriamo pacchetti di manutenzione mensile che includono aggiornamenti di sicurezza, monitoraggio uptime e piccole modifiche ai contenuti." />
        <FAQItem question="Come ottimizzate la SEO?" answer="Usiamo HTML semantico, ottimizzazione automatica delle immagini (WebP), Schema.org markup e garantiamo punteggi Core Web Vitals eccellenti, fattori chiave per il ranking su Google." />
      </div>
    </div>
  </section>
);

export default FAQ;