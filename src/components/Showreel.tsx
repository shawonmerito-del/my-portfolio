"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Showreel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // YouTube Showreel Embed URL
  const SHOWREEL_VIDEO_ID = "7fNLJ69NnmM";
  const DEMO_VIDEO_EMBED = "https://www.youtube.com/embed/7fNLJ69NnmM?list=PL_6uiYiqJmjT_B8G8OhgDMisx3mR7D7mw&autoplay=1&mute=0&controls=1&rel=0";

  return (
    <section id="showreel" className="relative pt-8 pb-24 md:pt-10 md:pb-32 bg-[#050505] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">Featured Project</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
            Cinematic <span className="text-gradient-electric text-gradient-glow">Showreel</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
        </div>

        {/* Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_0_50px_rgba(0,210,255,0.05)] group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* Neon Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 via-transparent to-accent-purple/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Glare Glass Reflections */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-10" />

          {/* Mock Video Looping - Background Cover */}
          <div className="absolute inset-0 z-0 bg-zinc-900 flex items-center justify-center">
            {/* Visual simulation of timeline editing using an iframe overlay or custom graphic */}
            <iframe
              src={`https://www.youtube.com/embed/7fNLJ69NnmM?list=PL_6uiYiqJmjT_B8G8OhgDMisx3mR7D7mw&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playsinline=1`}
              className="w-full h-[135%] pointer-events-none scale-110 opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-1000 object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          {/* Dark Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500 z-0" />

          {/* Action Trigger Elements Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
            {/* Top Bar */}
            <div className="flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-white/80 uppercase">
                4K UHD RESOLUTION • 60 FPS
              </span>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-white/80 uppercase">
                  REC
                </span>
              </div>
            </div>

            {/* Play Button Indicator */}
            <div className="flex items-center justify-center flex-1">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-[#050505] flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300"
              >
                {/* Micro ripple glow rings */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-[ping_2s_infinite]" />
                <Play fill="currentColor" className="ml-1.5 md:ml-2 w-8 h-8 md:w-10 md:h-10" />
              </motion.div>
            </div>

            {/* Bottom Bar Details */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div className="text-left">
                <p className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-1">
                  OFFICIAL PORTFOLIO CUT
                </p>
                <h3 className="text-lg md:text-2xl font-bold uppercase font-display text-white">
                  BINI AMIN SHEIKH – SHOWREEL 2026
                </h3>
              </div>
              <span className="text-xs tracking-[0.2em] font-mono text-zinc-400 group-hover:text-white transition-colors duration-300">
                [ CLICK TO PLAY SHOWREEL ]
              </span>
            </div>

          </div>
        </motion.div>

        {/* Small cinematic specs layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 opacity-60">
          <div className="px-4 py-3 rounded-lg border border-white/5 bg-white/[0.01] text-center">
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Camera Rig</span>
            <span className="text-xs font-semibold text-white uppercase mt-1 block">RED V-Raptor / Sony FX3</span>
          </div>
          <div className="px-4 py-3 rounded-lg border border-white/5 bg-white/[0.01] text-center">
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Grade Color</span>
            <span className="text-xs font-semibold text-white uppercase mt-1 block">DaVinci HDR LUTs</span>
          </div>
          <div className="px-4 py-3 rounded-lg border border-white/5 bg-white/[0.01] text-center">
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Motion VFX</span>
            <span className="text-xs font-semibold text-white uppercase mt-1 block">After Effects / Blender</span>
          </div>
          <div className="px-4 py-3 rounded-lg border border-white/5 bg-white/[0.01] text-center">
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Sound Mix</span>
            <span className="text-xs font-semibold text-white uppercase mt-1 block">Dolby Atmos Cinematic</span>
          </div>
        </div>

      </div>

      {/* Fullscreen Video Playback Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
          >
            {/* Modal Closer Background */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            {/* Closer Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white z-50 transition-colors clickable"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative aspect-video w-full max-w-5xl rounded-2xl border border-white/10 bg-black overflow-hidden z-10 shadow-[0_0_100px_rgba(0,210,255,0.2)]"
            >
              <iframe
                src={DEMO_VIDEO_EMBED}
                title="Bini Amin Sheikh Showreel"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
