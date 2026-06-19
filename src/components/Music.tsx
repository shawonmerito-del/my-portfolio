"use client";

import { motion } from "framer-motion";
import { Music as MusicIcon } from "lucide-react";

export default function Music() {
  return (
    <section id="music" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1DB954]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 text-[#1DB954] mb-3">
              <MusicIcon size={20} />
              <span className="text-xs font-mono uppercase tracking-[0.3em]">
                Music Artist & Rapper
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white leading-tight">
              Listen on <span className="text-[#1DB954]">Spotify</span>
            </h2>
          </div>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-light">
            Beyond the lens and editing desk, I express my creativity and storytelling through rhythm and poetry. Check out my latest tracks below.
          </p>
        </motion.div>

        {/* Spotify Embeds */}
        <div className="flex flex-col gap-6">
          {/* Featured Song / Album */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full glass-panel rounded-3xl p-4 md:p-6 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent pointer-events-none" />
            <h3 className="text-white font-display uppercase tracking-widest text-sm mb-4">
              Featured Release
            </h3>
            <iframe 
              style={{ borderRadius: "16px" }} 
              src="https://open.spotify.com/embed/album/7Jr0Xzsb7RLiYJdV2X9jB7?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="shadow-2xl"
            ></iframe>
          </motion.div>

          {/* Full Discography / Artist Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full glass-panel rounded-3xl p-4 md:p-6 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent pointer-events-none" />
            <h3 className="text-white font-display uppercase tracking-widest text-sm mb-4">
              Top Tracks & Discography
            </h3>
            <iframe 
              style={{ borderRadius: "16px" }} 
              src="https://open.spotify.com/embed/artist/3MB4tWBTdhgnbCpWW0I2iX?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="shadow-2xl"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
