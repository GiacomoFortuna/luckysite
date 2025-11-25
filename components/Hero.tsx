
import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-32 md:pt-32 overflow-hidden bg-transparent">
      
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Full width/height video container */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60 mix-blend-lighten"
            >
              {/* IMPORTANT: Rename your video file to 'hero-video.mp4' and place it in the public folder */}
              {/* Or update this src to match your file name */}
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Readability Overlays */}
          {/* Left Gradient: Strong opacity on left to cover the gap and make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-[#02040a]/90 md:via-[#02040a]/70 to-[#02040a]/30 z-10" />
          
          {/* Bottom Gradient: Seamless blend into next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
        
        {/* Text Content - Left Aligned */}
        <div className="flex flex-col items-start text-left max-w-3xl">
          <FadeIn>
            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 tracking-tighter text-white drop-shadow-2xl">
              Web Design & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 animate-gradient-x pb-2 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Contenuti AI
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light tracking-wide drop-shadow-md">
              Trasformiamo visitatori in clienti con siti ultra veloci, ottimizzati SEO e video ads generati con l’Intelligenza Artificiale.
              <span className="block mt-2 text-cyan-400 font-medium">Il futuro del marketing è qui. E ci arrivi prima degli altri.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 w-full sm:w-auto">
              <Button primary fullWidth={true} onClick={() => document.getElementById('newsletter')?.scrollIntoView({behavior: 'smooth'})}>
                Prenota una Call
              </Button>
              <Button fullWidth={true} onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                Esplora i Servizi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Hero;
