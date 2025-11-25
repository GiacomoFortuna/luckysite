
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WebsitesPage from './components/pages/WebsitesPage';
import AiContentPage from './components/pages/AiContentPage';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';
import DynamicBackground from './components/ui/DynamicBackground';

export type PageType = 'home' | 'websites' | 'ai-content';

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navigateTo = (page: PageType) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          background-color: #02040a;
        }

        /* Global Noise Texture for Premium Feel */
        .bg-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 50;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #02040a; 
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a; 
          border-radius: 4px;
          border: 1px solid #333;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #0e7490;
          box-shadow: 0 0 10px #0e7490;
        }
        
        /* Animation Utilities */
        @keyframes float-slow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -20px, 0) scale(1.02); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-15px, 15px, 0) scale(0.98); }
        }
        @keyframes beam-rotate {
          0% { transform: rotate(0deg); opacity: 0.05; }
          50% { opacity: 0.12; }
          100% { transform: rotate(360deg); opacity: 0.05; }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        
        .animate-float-slow { animation: float-slow 18s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-beam { animation: beam-rotate 30s linear infinite; }
        .animate-shine { animation: shine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
      `}</style>
      
      {/* Main Container */}
      <div className={`relative font-sans antialiased scroll-smooth overflow-x-hidden selection:bg-cyan-500/40 selection:text-cyan-100 bg-[#02040a] text-slate-900 dark:text-slate-100 min-h-screen`}>
        <div className="bg-noise fixed inset-0 z-[60] pointer-events-none mix-blend-overlay"></div>
        <SchemaMarkup />
        <DynamicBackground />
        
        <Navbar 
          currentPage={currentPage}
          navigateTo={navigateTo}
        />
        
        <main className="relative z-10">
          {currentPage === 'home' && <Home navigateTo={navigateTo} />}
          {currentPage === 'websites' && <WebsitesPage navigateTo={navigateTo} />}
          {currentPage === 'ai-content' && <AiContentPage navigateTo={navigateTo} />}
        </main>
        
        <Footer navigateTo={navigateTo} />
      </div>
    </>
  );
};

export default App;
