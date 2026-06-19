"use client";

import { GraduationCap, Award, BookOpen, Heart, Globe, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  specialization?: string;
  board?: string;
  completed: string;
}

const EDUCATION: EducationItem[] = [
  {
    degree: "B.B.S Pass Course",
    institution: "Govt. Savar University College",
    completed: "2019",
  },
  {
    degree: "Higher Secondary Certificate (H.S.C)",
    institution: "Savar Technical & BM College",
    specialization: "Computer Operation",
    board: "BTEB",
    completed: "2015",
  },
  {
    degree: "Secondary School Certificate (S.S.C)",
    institution: "Akran High School",
    specialization: "Business Studies",
    board: "Dhaka Board",
    completed: "2013",
  },
];

const ORGANIZATIONAL_SKILLS = [
  "Shopify",
  "Slack",
  "Trello",
  "Communication",
  "Leadership",
  "Team Collaboration",
  "Project Management",
];

const LANGUAGES = [
  { name: "Bangla", proficiency: "Native", code: "BN" },
  { name: "English", proficiency: "Intermediate", code: "EN" },
];

const INTERESTS = [
  "Film Direction",
  "Travelling",
  "Music",
  "Theatre",
  "Blood Donation",
  "Gaming",
  "Career Development",
  "Storytelling",
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Sections title */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">Qualifications & Background</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
            Education & <span className="text-gradient-electric text-gradient-glow">Credentials</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Academic Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="text-accent-blue" size={20} />
              <h3 className="text-lg md:text-xl font-bold font-display uppercase tracking-wider text-white">
                Academic Timeline
              </h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 space-y-8">
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 -translate-x-[29px] w-2.5 h-2.5 rounded-full bg-accent-blue shadow-[0_0_8px_#00d2ff]" />

                  <div className="p-5 rounded-2xl glass-panel hover:border-accent-blue/30 transition-all duration-300">
                    <span className="text-[10px] font-mono text-accent-blue font-bold tracking-wider uppercase block">
                      Completed: {edu.completed}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase font-display mt-2">
                      {edu.degree}
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1">{edu.institution}</p>
                    
                    {(edu.specialization || edu.board) && (
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 pt-3 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                        {edu.specialization && (
                          <span>MAJOR: {edu.specialization.toUpperCase()}</span>
                        )}
                        {edu.board && (
                          <span>BOARD: {edu.board.toUpperCase()}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Organizational, Languages, Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            
            {/* 1. Organizational Skills */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <UserCheck className="text-accent-purple" size={18} />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  Organizational Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {ORGANIZATIONAL_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-semibold text-zinc-300 hover:border-accent-purple/40 hover:bg-accent-purple/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Languages */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Globe className="text-accent-blue" size={18} />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  Languages
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-4 rounded-2xl glass-panel flex justify-between items-center group hover:border-accent-blue/30 transition-all"
                  >
                    <div>
                      <span className="text-xs font-mono text-zinc-500 uppercase">Language</span>
                      <h4 className="text-sm font-bold text-white uppercase font-display mt-0.5">
                        {lang.name}
                      </h4>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono text-accent-blue font-bold tracking-widest uppercase bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/20">
                        {lang.proficiency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Interests & Hobbies */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Heart className="text-accent-pink" size={18} />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  Interests & Hobbies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.01] text-xs font-semibold text-zinc-400 hover:text-white hover:border-accent-pink/40 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
