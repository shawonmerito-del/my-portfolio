"use client";

import { Heart, Sparkles, Target, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function Passion() {
  const cards = [
    {
      icon: <Sparkles className="text-accent-blue" size={24} />,
      title: "Visual Storytelling",
      desc: "Transforming ideas into powerful, emotional visual experiences through editing, color grading, and custom motion graphics.",
    },
    {
      icon: <Heart className="text-accent-purple" size={24} />,
      title: "Connection & Emotion",
      desc: "Creating cinematic content that connects with people on a deeper level, inspires strong emotions, and leaves a lasting impact.",
    },
    {
      icon: <Target className="text-accent-pink" size={24} />,
      title: "Continuous Innovation",
      desc: "Constantly studying new visual trends, advanced plugins, and generative AI to improve efficiency and design fidelity.",
    },
    {
      icon: <Compass className="text-accent-blue" size={24} />,
      title: "Cross-Disciplinary Art",
      desc: "Merging experiences in music, theatre, and media production to bring strategic, multi-sensory thinking to video products.",
    },
  ];

  return (
    <section id="passion" className="relative py-24 md:py-32 bg-[#0F1115] overflow-hidden">
      {/* Background large outlined text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[12rem] md:text-[24rem] font-bold text-white/[0.01] uppercase tracking-[0.1em] font-display border-zinc-800">
          CREATIVE
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2 block">Inner Compass</span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
              What <span className="text-gradient-electric text-gradient-glow">Drives Me</span>
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-sm font-light">
            Combining digital expertise, cinematic flair, and raw human emotions to craft stories that resonate globally.
          </p>
        </div>

        {/* Passion Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl glass-panel bg-white/[0.01] border-white/5 mb-12 shadow-inner"
        >
          <p className="text-lg md:text-2xl text-white font-light leading-relaxed text-center italic font-display">
            &ldquo;Deeply passionate about creativity, storytelling, and transforming ideas into powerful visual experiences through video editing, cinematography, visual effects, and digital media. My work is not just about cuts and transitions—it&apos;s about evoking feelings and engineering brand success.&rdquo;
          </p>
        </motion.div>

        {/* Passion Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover"
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
