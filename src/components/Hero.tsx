"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, Send, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 120]);
  const bgY = useTransform(scrollY, [0, 500], [0, -80]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse move handler for follow glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-4 bg-[#050505]"
    >
      {/* Interactive mouse follow glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden lg:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 210, 255, 0.05), rgba(139, 92, 246, 0.02) 40%, transparent 80%)`,
        }}
      />

      {/* Grid Pattern and radial glow */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0 mask-image:linear-gradient(to_bottom,white,transparent)" />
      
      <motion.div 
        style={{ y: bgY }}
        className="absolute w-[800px] h-[800px] bg-[#8b5cf6]/10 rounded-full filter blur-[180px] -top-60 -left-40 pointer-events-none"
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute w-[600px] h-[600px] bg-[#00d2ff]/10 rounded-full filter blur-[150px] bottom-10 -right-20 pointer-events-none"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center items-center text-center relative z-10 flex-1">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-mono font-medium text-zinc-300 uppercase tracking-widest">
            Available For Global Projects
          </span>
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          className="flex flex-col items-center gap-6 w-full"
        >
          {/* Main Title */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center font-display relative z-10 uppercase tracking-tighter leading-[0.9]"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white">
                  BINI
                </span>
                <span className="text-6xl md:text-8xl lg:text-[10rem] font-light text-zinc-400">
                  AMIN
                </span>
              </div>
              <span className="text-6xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#8b5cf6] mt-2 md:mt-4">
                SHEIKH
              </span>
            </motion.h1>
            
            {/* Floating Sparkle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 md:-right-20 text-[#00d2ff] opacity-50 hidden md:block"
            >
              <Sparkles size={48} strokeWidth={1} />
            </motion.div>
          </div>

          {/* Subtitles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center gap-4 mt-6"
          >
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs md:text-sm tracking-[0.25em] font-mono font-medium text-zinc-400 uppercase">
              <span className="text-white">Film Director</span>
              <span className="text-[#00d2ff]">•</span>
              <span>Senior Video Editor</span>
              <span className="text-[#00d2ff]">•</span>
              <span>Cinematographer</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>Motion Designer</span>
              <span className="text-[#1DB954]">•</span>
              <span className="text-white">Rapper</span>
            </div>
            
            <p className="text-sm md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
              Transforming raw footage into <strong className="text-white font-medium">cinematic masterclasses</strong>, and expressing stories through rhythm and poetry. Specialized in high-end commercial ads, brand films, SaaS promos, and creating compelling digital and musical content.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("showreel")}
              className="group relative px-8 py-4 rounded-full bg-white text-black text-sm font-bold tracking-[0.15em] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto clickable shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#00d2ff] to-[#8b5cf6] transition-all duration-500 ease-out group-hover:w-full opacity-10" />
              <Play size={16} className="fill-black group-hover:text-[#8b5cf6] group-hover:fill-[#8b5cf6] transition-colors" />
              <span className="relative z-10 group-hover:text-[#8b5cf6] transition-colors">Play Showreel</span>
            </button>
            
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
              }}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] text-white text-sm font-semibold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 w-full sm:w-auto clickable hover:border-white/30"
            >
              Explore Work <ArrowRight size={16} />
            </a>

            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/5 hover:bg-[#00d2ff]/10 text-white text-sm font-semibold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 w-full sm:w-auto clickable hover:border-[#00d2ff]/60 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]"
            >
              Download CV <Download size={16} />
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* Downward indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-[9px] tracking-[0.4em] font-mono uppercase text-zinc-600 mb-3">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#00d2ff]/50 to-transparent animate-[float_3s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}
