"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  desc: string;
  isCurrent?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Senior Creative Video Editor",
    company: "DevsNest LLC",
    duration: "January 2025 – Present",
    desc: "Producing Shopify app tutorials, marketing campaigns, onboarding videos, advertisements, and product content. Creating high-converting promotional videos for global merchants.",
    isCurrent: true,
  },
  {
    role: "Associate Director (Media)",
    company: "Akhrai Film Production House",
    duration: "October 2020 – Present",
    desc: "Leading media production, cinematography, creative direction, and storytelling for films and commercial productions. Supervising camera crews, light design, and post-production workflows.",
    isCurrent: true,
  },
  {
    role: "Senior Creative Content Producer",
    company: "Onushthan.com",
    duration: "November 2024 – December 2024",
    desc: "Managed creative content production and event media campaigns. Developed viral social media strategies, promotional video content, and live event recording coverage.",
  },
  {
    role: "Senior Video Editor",
    company: "Merito (EdTech)",
    duration: "November 2024 – December 2024",
    desc: "Edited educational videos, advertisements, and digital content. Integrated motion graphics and visual elements to enhance digital learning outcomes and student retention.",
  },
  {
    role: "Cinematographer & Senior Video Editor",
    company: "Master Academy Bangladesh",
    duration: "January 2023 – October 2024",
    desc: "Produced educational content, promotional campaigns, and high-impact social media content. Handled camera work, lighting, and sound, followed by complete post-production editing.",
  },
  {
    role: "Video Editor",
    company: "TBN24 News",
    duration: "October 2021 – November 2021",
    desc: "Edited news reports, short documentaries, and broadcast-ready content under tight daily deadlines. Managed file exports matching television station specifications.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background neon flares */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-accent-blue/5 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-accent-purple/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">Professional Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
            Experience <span className="text-gradient-electric text-gradient-glow">Timeline</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
        </div>

        {/* Timeline body */}
        <div className="relative border-l border-white/10 md:mx-auto md:left-0 md:pl-0 pl-6 space-y-12">
          {/* Vertical central bar (decorative for desktop, simple line for mobile) */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent pointer-events-none" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-6 md:pl-10"
            >
              {/* Timeline Indicator Node */}
              <div
                className={`absolute left-0 top-1.5 -translate-x-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#050505] z-10 transition-all duration-300 ${
                  exp.isCurrent
                    ? "bg-accent-blue shadow-[0_0_12px_#00d2ff] scale-125 animate-pulse"
                    : "bg-zinc-600"
                }`}
              />

              {/* Glass Experience Card */}
              <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-4 relative">
                {/* Current Job Glow Badge */}
                {exp.isCurrent && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
                    <span className="text-[9px] font-mono text-accent-blue font-bold tracking-widest uppercase">
                      ACTIVE
                    </span>
                  </div>
                )}

                {/* Role Header */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg md:text-xl font-bold font-display uppercase text-white tracking-wide">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-zinc-400 font-medium">
                    <span className="text-accent-purple font-semibold">{exp.company}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Role Desc */}
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
