import React from 'react';
import { Cpu, Globe, Cloud, Shield, Wifi, Database, Layers, Command } from 'lucide-react';

const logos = [
  { icon: <Cpu />, name: "TechCore" },
  { icon: <Globe />, name: "GlobalNet" },
  { icon: <Cloud />, name: "SkyCloud" },
  { icon: <Shield />, name: "SecureIT" },
  { icon: <Wifi />, name: "Connex" },
  { icon: <Database />, name: "DataFlow" },
  { icon: <Layers />, name: "Stacker" },
  { icon: <Command />, name: "CmdCorp" },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-10 bg-[#02040a] border-b border-white/5 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Tecnologia scelta da innovatori
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-[shine_30s_linear_infinite] gap-12 whitespace-nowrap px-12">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-600 group-hover:text-slate-400 transition-colors duration-300">
              {React.cloneElement(logo.icon as React.ReactElement<any>, { size: 24 })}
              <span className="text-lg font-heading font-bold">{logo.name}</span>
            </div>
          ))}
        </div>
        
        {/* Side Fades for seamless effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#02040a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#02040a] to-transparent z-10" />
      </div>
      
      {/* Inline style for the marquee animation specifically */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;