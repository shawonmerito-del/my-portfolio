"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import biniPortrait from "@/assets/img/bini_new_portrait.jpg";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase">Who I Am</span>
              <div className="h-[1px] w-8 bg-accent-blue" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white leading-tight">
              Crafting Visuals,
              <br />
              <span className="text-gradient-electric text-gradient-glow">Empowering Stories</span>
            </h2>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-2 font-light">
              I am <strong className="text-white font-medium">Bini Amin Sheikh</strong>, a passionate creative professional with years of experience in video editing, cinematography, motion graphics, visual effects, and content production.
            </p>
            
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
              My mission is to transform ideas into engaging visual stories that connect with audiences, strengthen brands, and deliver measurable results. I blend artistic creativity with technological mastery to produce content that stands out in today&apos;s noisy digital ecosystem.
            </p>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
              With experience across software companies, film production houses, educational platforms, event management organizations, and media industries, I bring both design elegance and strategic content marketing thinking to every project.
            </p>

            {/* Quick credentials cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <span className="text-xs tracking-wider text-accent-blue font-mono font-medium block">CREATIVE FOCUS</span>
                <span className="text-sm font-semibold text-white mt-1 block">Cinematic Storytelling, Brand Films, Product Promo</span>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <span className="text-xs tracking-wider text-accent-purple font-mono font-medium block">INDUSTRIES SERVED</span>
                <span className="text-sm font-semibold text-white mt-1 block">Film, Promos, EdTech, Software, SaaS, E-com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Floating Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Background glowing frame rings */}
            <div className="absolute inset-0 w-full h-full max-w-[360px] aspect-[4/5] bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 filter blur-2xl rounded-2xl opacity-50 transform translate-x-4 translate-y-4" />

            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl glass-panel p-3 animate-[float_8s_ease-in-out_infinite]">
              {/* Corner tech decals */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent-blue rounded-tl pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent-blue rounded-tr pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent-blue rounded-bl pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent-blue rounded-br pointer-events-none" />

              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
                <Image
                  src={biniPortrait}
                  alt="Bini Amin Sheikh Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                  className="object-cover object-center transition-all duration-700 scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
