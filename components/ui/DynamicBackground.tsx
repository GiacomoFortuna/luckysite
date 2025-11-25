import React, { useEffect, useRef } from 'react';

const DynamicBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridLayerRef = useRef<HTMLDivElement>(null);
  const glowLayerRef = useRef<HTMLDivElement>(null);
  const beamLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 768;

      if (!isDesktop) return;

      // 1. GRID LAYER (Deepest - Moves very slow)
      // Speed factor: 0.1
      if (gridLayerRef.current) {
        gridLayerRef.current.style.transform = `translate3d(0, ${scrollY * 0.1}px, 0)`;
      }

      // 2. GLOW/NEBULA LAYER (Mid - Moves moderate + Fades)
      // Speed factor: 0.25
      if (glowLayerRef.current) {
        // Fade out logic (keep existing)
        const fadeOut = Math.max(0, 1 - scrollY / (viewportHeight * 0.9));
        glowLayerRef.current.style.opacity = fadeOut.toString();
        
        // Parallax logic
        glowLayerRef.current.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
      }

      // 3. BEAM LAYER (Closest - Moves faster)
      // Speed factor: 0.5
      if (beamLayerRef.current) {
        beamLayerRef.current.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
      }
    };

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Base Dark Canvas (Deep Tech Black) - STATIC */}
      <div className="absolute inset-0 bg-[#02040a]" />

      {/* 2. Grid Layer - PARALLAX (Slow) */}
      <div ref={gridLayerRef} className="absolute inset-0 will-change-transform origin-top transition-transform duration-75 ease-out">
         {/* Tech Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-10"></div>
      </div>

      {/* 3. Colorful Nebula Layer - PARALLAX (Mid) + FADE OUT */}
      <div ref={glowLayerRef} className="absolute inset-0 will-change-[opacity,transform] transition-[opacity,transform] duration-75 ease-out origin-top">
        {/* Top Left - Cyan/Teal Nebula */}
        <div className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] bg-cyan-900/15 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-float-slow" />
        
        {/* Bottom Right - Violet/Indigo Nebula */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] bg-indigo-900/15 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-float-medium" />
        
        {/* Center Right - Soft Emerald Accent */}
        <div className="absolute top-[30%] right-[-20%] w-[50vw] h-[50vw] bg-emerald-900/10 rounded-full blur-[100px] mix-blend-screen opacity-30 animate-pulse" />
        
        {/* Center Depth Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-blue-950/10 rounded-full blur-[140px]" />
      </div>

      {/* 4. Parallax Light Beams - PARALLAX (Fast) */}
      <div ref={beamLayerRef} className="absolute inset-0 will-change-transform z-10 origin-top transition-transform duration-75 ease-out">
        {/* Beam 1: Cyan - Top Left to Bottom Right */}
        <div className="absolute top-[-50%] left-[10%] w-[1px] h-[200vh] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent rotate-[35deg] blur-[2px]" />
        
        {/* Beam 2: Violet - Top Right to Bottom Left */}
        <div className="absolute top-[-50%] right-[20%] w-[1px] h-[200vh] bg-gradient-to-b from-transparent via-violet-500/10 to-transparent rotate-[-25deg] blur-[2px]" />
        
        {/* Beam 3: Vertical faint highlight */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent blur-[1px] opacity-20" />
      </div>

      {/* 5. Texture & Vignette - STATIC OVERLAY */}
      {/* Noise Grain - Cinematic Film Feel */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-20"></div>
      
      {/* Vignette - Focus on center content */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#02040a]/30 to-[#02040a]/90 pointer-events-none z-20"></div>
    </div>
  );
};

export default DynamicBackground;