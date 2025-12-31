/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { useStore } from '../../store';
import { ChevronDown, Hexagon, Layers, Globe, ArrowRight } from 'lucide-react';

// Extend Window interface for Calendly global
declare global {
  interface Window {
    Calendly: any;
  }
}

const SectionCard: React.FC<{ 
    title: string; 
    description: string; 
    icon: React.ReactNode; 
    color: string;
}> = ({ title, description, icon, color }) => (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 group max-w-4xl w-full">
        <div className="p-4 rounded-xl bg-gray-900/80 group-hover:scale-110 transition-transform duration-500" style={{ color }}>
            {icon}
        </div>
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold font-cyber mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
                {description}
            </p>
            <button className="mt-6 flex items-center text-sm font-bold tracking-widest uppercase hover:gap-4 gap-2 transition-all" style={{ color }}>
                View Projects <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    </div>
);

export const HUD: React.FC = () => {
  const { setScrollProgress } = useStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const maxScroll = scrollHeight - clientHeight;
        const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
        setScrollProgress(progress);
    }
  };

  const openCalendly = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (window.Calendly) {
        window.Calendly.showPopupWidget('https://calendly.com/deathwish/meeting');
    } else {
        window.open('https://calendly.com/deathwish/meeting', '_blank');
    }
  };

  return (
    <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-auto overflow-x-hidden scroll-smooth z-50 text-white selection:bg-cyan-500/30"
    >
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-[60] bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-2">
                <Hexagon className="w-8 h-8 text-cyan-400 fill-cyan-400/20" />
                <span className="font-cyber font-bold text-xl tracking-wider">GAMES INTERACTIVE</span>
            </div>
            {/* Nav bar buttons removed as requested */}
        </nav>

        {/* HERO SECTION */}
        <section className="h-screen w-full flex flex-col items-center justify-center relative p-4">
            <div className="text-center space-y-6 max-w-4xl">
                <div className="inline-block px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/20 text-cyan-400 text-xs font-mono tracking-[0.2em] mb-4">
                    EST. 2024 // METAVERSE ARCHITECTS
                </div>
                <h1 className="text-5xl md:text-8xl font-black font-cyber tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                    FORGING<br/>REALITIES
                </h1>
                <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                    We build immersive multiplayer experiences at the intersection of Gaming, Web3, and cutting-edge Unity engineering.
                </p>
                
                <div className="pt-8">
                  <button 
                    onClick={openCalendly}
                    className="px-10 py-4 bg-cyan-500 text-black font-black tracking-[0.2em] uppercase hover:bg-white hover:scale-105 transition-all duration-300 rounded shadow-[0_0_30px_rgba(0,255,255,0.4)]"
                  >
                    Start a Project
                  </button>
                </div>
            </div>
            
            <div className="absolute bottom-10 animate-bounce">
                <ChevronDown className="w-8 h-8 text-gray-500" />
            </div>
        </section>

        {/* WEB3 SECTION */}
        <section className="h-screen w-full flex items-center justify-center p-4 relative">
             <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2 hidden md:block">
                <div className="h-32 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50"></div>
             </div>
             <SectionCard 
                title="WEB3 NATIVE"
                description="We integrate blockchain technology seamlessly into gameplay. From NFT asset ownership to decentralized autonomous organizations (DAOs), we build the economies of tomorrow."
                icon={<Hexagon className="w-10 h-10" />}
                color="#ff00ff"
             />
        </section>

        {/* UNITY SECTION */}
        <section className="h-screen w-full flex items-center justify-center p-4 relative">
             <SectionCard 
                title="UNITY MASTERY"
                description="Pushing the boundaries of what's possible in the browser and on desktop. Our team specializes in high-fidelity shaders, physics, and optimized rendering pipelines."
                icon={<Layers className="w-10 h-10" />}
                color="#ffff00"
             />
        </section>

        {/* MULTIPLAYER SECTION */}
        <section className="h-screen w-full flex items-center justify-center p-4 relative">
             <SectionCard 
                title="MULTIPLAYER SCALE"
                description="Real-time synchronization for thousands of concurrent users. We build robust backend infrastructure that ensures lag-free, competitive, and social experiences."
                icon={<Globe className="w-10 h-10" />}
                color="#00ff00"
             />
        </section>

        {/* FOOTER / CONTACT */}
        <footer className="min-h-[50vh] bg-black/90 flex flex-col items-center justify-center text-center p-8 border-t border-white/10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-8 text-white">READY TO START?</h2>
            <button 
                onClick={openCalendly}
                className="px-12 py-4 bg-white text-black font-bold text-xl rounded hover:scale-105 transition-transform mb-12 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
                GET IN TOUCH
            </button>
            <div className="flex gap-8 text-gray-500 text-sm tracking-widest uppercase">
                <a href="https://x.com/JakeGameDev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X / TWITTER</a>
                <a href="https://www.linkedin.com/company/65722982/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
                <a href="https://www.facebook.com/GamesInteractiveUK" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FACEBOOK</a>
            </div>
            <p className="mt-12 text-gray-700 text-xs font-mono">
                © 2026 GAMES INTERACTIVE STUDIO. ALL RIGHTS RESERVED.
            </p>
        </footer>
    </div>
  );
};