"use client";

import { Cpu, Terminal, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface SoftwareSkill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

const SOFTWARE_SKILLS: SoftwareSkill[] = [
  { name: "Adobe Premiere Pro", level: 98, category: "Editing" },
  { name: "Adobe After Effects", level: 92, category: "Motion/VFX" },
  { name: "DaVinci Resolve", level: 95, category: "Color/Grading" },
  { name: "Adobe Photoshop", level: 88, category: "Graphic" },
  { name: "Figma", level: 85, category: "UX/Graphic" },
  { name: "CapCut", level: 90, category: "Reels/Tiktoks" },
];

const VIDEO_PRODUCTION = [
  "Cinematography",
  "Color Correction",
  "Color Grading",
  "Direction",
  "Gimbal",
  "Motion Graphics",
  "Photography",
  "Sound Mix & Mastering",
  "Video Editing",
  "Visual Effects (VFX)",
];

const DIGITAL_SKILLS = [
  "AI Tools (Text, Image & Video)",
  "Basic QA",
  "Content Writing",
  "Digital Marketing",
  "Domain & Web Hosting",
  "Shopify",
  "Vibe Coding",
  "WooCommerce",
  "WordPress",
];

const SHOPIFY_APPS = [
  {
    name: "Navidium Shipping Protection",
    desc: "Created shipping protection onboarding guides and marketing explainer videos.",
  },
  {
    name: "Navidium Returns & Exchanges",
    desc: "Designed walkthrough guides and ads showcasing automated returns portals.",
  },
  {
    name: "Navidium Product Warranty",
    desc: "Produced tutorials detailing warranty policy setups and upsells.",
  },
  {
    name: "Navidium Bundle",
    desc: "Developed promotional videos and dashboard setups for merchants.",
  },
  {
    name: "Cart & Upsell by Navidium",
    desc: "Highlighted upselling flows and side cart widgets via high-converting ads.",
  },
  {
    name: "Dynamatic Cart & Upsell Engine",
    desc: "Created product demos highlighting dynamic checkout triggers.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#0F1115] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Main Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
            Skills & <span className="text-gradient-electric text-gradient-glow">Expertise</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
        </div>

        {/* 1. Software Proficiency & Core Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left: Software Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <Cpu size={22} className="text-accent-blue" />
              <h3 className="text-lg md:text-xl font-bold font-display uppercase tracking-wider text-white">
                Software Proficiency
              </h3>
            </div>

            <div className="p-8 rounded-3xl glass-panel bg-white/[0.02] border-white/5 space-y-7 shadow-xl">
              {SOFTWARE_SKILLS.map((skill, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex justify-between items-end text-xs md:text-sm font-semibold tracking-wider uppercase font-mono">
                    <span className="text-white flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_#00d2ff]" />
                      {skill.name}
                    </span>
                    <span className="text-accent-blue">{skill.level}%</span>
                  </div>
                  {/* Slider rail */}
                  <div className="h-2.5 bg-black/40 rounded-full overflow-hidden relative border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[pulse_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Technical Badges categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {/* Video Production Skills */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Zap size={22} className="text-accent-purple" />
                <h3 className="text-lg md:text-xl font-bold font-display uppercase tracking-wider text-white">
                  Video Production
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {VIDEO_PRODUCTION.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-semibold text-zinc-300 flex items-center gap-2 hover:border-accent-blue/50 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all cursor-default shadow-sm"
                  >
                    <CheckCircle2 size={12} className="text-accent-blue" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Digital & Tech Skills */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Terminal size={22} className="text-accent-pink" />
                <h3 className="text-lg md:text-xl font-bold font-display uppercase tracking-wider text-white">
                  Digital Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {DIGITAL_SKILLS.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-semibold text-zinc-300 flex items-center gap-2 hover:border-accent-purple/50 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all cursor-default shadow-sm"
                  >
                    <CheckCircle2 size={12} className="text-accent-purple" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* 2. Shopify Ecosystem Experience Subsection */}
        <div className="mt-16">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">Platform Efficacy</span>
            <h3 className="text-2xl md:text-4xl font-bold uppercase font-display tracking-tight text-white">
              Shopify Ecosystem <span className="text-gradient-electric text-gradient-glow">Experience</span>
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm max-w-xl mt-3 font-light leading-relaxed">
              Showcase expertise creating tutorials, product demos, onboarding videos, advertisements, and educational content for Shopify merchants. Proven ability to translate SaaS dashboard operations into high-converting videos.
            </p>
          </div>

          {/* Shopify cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOPIFY_APPS.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-3 group relative overflow-hidden"
              >
                {/* Visual green neon indicator behind */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full filter blur-xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

                <div className="flex justify-between items-center">
                  {/* Mock App tag */}
                  <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 px-2.5 py-0.5 rounded border border-emerald-400/20">
                    Shopify App
                  </span>

                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                </div>

                <h4 className="text-base font-bold font-display uppercase tracking-wider text-white mt-2 group-hover:text-accent-blue transition-colors duration-300">
                  {app.name}
                </h4>

                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  {app.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
