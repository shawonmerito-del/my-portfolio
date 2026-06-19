"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const [stats, setStats] = useState({
    experience: 0,
    videos: 0,
    clients: 0,
    views: 0,
  });

  useEffect(() => {
    // Animating counts
    const duration = 2000;
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      setStats({
        experience: Math.min(5, Math.ceil((5 / steps) * stepCount)),
        videos: Math.min(500, Math.ceil((500 / steps) * stepCount)),
        clients: Math.min(50, Math.ceil((50 / steps) * stepCount)),
        views: Math.min(100, Math.ceil((100 / steps) * stepCount)),
      });

      if (stepCount >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative bg-[#050505] flex justify-center py-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-5xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden p-[1px] shadow-2xl shadow-black/50">
          {/* Stat 1 */}
          <div className="bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-4xl md:text-6xl font-black font-display text-white tracking-tight group-hover:scale-110 transition-transform duration-500">
              {stats.experience}<span className="text-[#00d2ff]">+</span>
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase mt-3">
              Years Exp.
            </span>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-4xl md:text-6xl font-black font-display text-white tracking-tight group-hover:scale-110 transition-transform duration-500">
              {stats.videos}<span className="text-[#8b5cf6]">+</span>
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase mt-3">
              Projects
            </span>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-4xl md:text-6xl font-black font-display text-white tracking-tight group-hover:scale-110 transition-transform duration-500">
              {stats.clients}<span className="text-[#d946ef]">+</span>
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase mt-3">
              Clients
            </span>
          </div>

          {/* Stat 4 */}
          <div className="bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-4xl md:text-6xl font-black font-display text-white tracking-tight group-hover:scale-110 transition-transform duration-500">
              {stats.views}M<span className="text-emerald-400">+</span>
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase mt-3">
              Views
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
