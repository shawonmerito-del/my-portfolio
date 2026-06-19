"use client";

import {
  Video,
  Layers,
  Camera,
  Tv,
  Youtube,
  ShoppingBag,
  Palette,
  Sliders,
  Volume2,
  Smartphone,
  Wand2,
  Megaphone
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Video className="text-accent-blue" size={24} />,
    title: "Professional Video Editing",
    desc: "Seamless splicing, visual pacing, dialogue flow, and cinematic narrative assembly for films, promos, and corporate branding.",
    tag: "Post-Production",
  },
  {
    icon: <Layers className="text-accent-purple" size={24} />,
    title: "Motion Graphics Design",
    desc: "Dynamic logo animations, lower-thirds, explainer elements, typography animations, and customized 2D/3D screen layouts.",
    tag: "Animation",
  },
  {
    icon: <Camera className="text-accent-pink" size={24} />,
    title: "Cinematography",
    desc: "Professional camera operations, lighting setups, shot composition, and camera movement coordination for movie shoots and ads.",
    tag: "Production",
  },
  {
    icon: <Tv className="text-accent-blue" size={24} />,
    title: "Commercial Ads Production",
    desc: "High-end television and internet advertisement production focusing on hook optimization, visual hierarchy, and sales conversions.",
    tag: "Marketing",
  },
  {
    icon: <Youtube className="text-accent-purple" size={24} />,
    title: "YouTube Video Editing",
    desc: "Audience retention focused editing incorporating sound effects, memes, zoom cuts, popups, and eye-catching graphic hooks.",
    tag: "Digital Content",
  },
  {
    icon: <ShoppingBag className="text-accent-pink" size={24} />,
    title: "Shopify Product Videos",
    desc: "Tailored explainer videos, application tutorials, and ads demonstrating specific benefits of SaaS integrations for Shopify merchants.",
    tag: "E-commerce",
  },
  {
    icon: <Palette className="text-accent-blue" size={24} />,
    title: "Color Grading",
    desc: "Cinematic color space transformations (LOG/RAW to Rec.709), look creation (teal & orange, moody film), and atmosphere tuning.",
    tag: "Color Art",
  },
  {
    icon: <Sliders className="text-accent-purple" size={24} />,
    title: "Color Correction",
    desc: "Shot matching, exposure correction, white balance calibration, and skin-tone restoration across multiple camera bodies.",
    tag: "Color Art",
  },
  {
    icon: <Volume2 className="text-accent-pink" size={24} />,
    title: "Sound Design",
    desc: "Sound effects (Foley) overlays, ambient room noise setups, audio leveling, hiss removal, and custom music track sync.",
    tag: "Audio",
  },
  {
    icon: <Smartphone className="text-accent-blue" size={24} />,
    title: "Social Media Reels",
    desc: "Optimized vertical content (TikToks, Shorts, Reels) with fast splicing, captions, and trendy audio syncing.",
    tag: "Digital Content",
  },
  {
    icon: <Wand2 className="text-accent-purple" size={24} />,
    title: "Visual Effects (VFX)",
    desc: "Chroma key green screen removal, digital sky replacement, object wire removals, matte painting, and composite layering.",
    tag: "VFX",
  },
  {
    icon: <Megaphone className="text-accent-pink" size={24} />,
    title: "Promotional Production",
    desc: "Comprehensive campaigns, teaser releases, event coverage trailers, and corporate product marketing videos.",
    tag: "Production",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">My Offerings</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
            Premium <span className="text-gradient-electric text-gradient-glow">Services</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between min-h-[260px] group"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-accent-blue/30 group-hover:bg-accent-blue/5 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-mono font-medium tracking-wider text-zinc-500 uppercase">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-white mt-6 group-hover:text-accent-blue transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs leading-relaxed mt-3 font-light">
                  {service.desc}
                </p>
              </div>

              {/* Decorative underline indicator */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-accent-blue to-accent-purple mt-6 group-hover:w-12 transition-all duration-300 rounded" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
