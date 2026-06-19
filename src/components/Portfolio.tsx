"use client";

import { useState } from "react";
import { Play, X, ExternalLink, Video, Film } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  software: string[];
  desc: string;
  stats?: string;
}

const CATEGORIES = [
  { label: "All Works", slug: "all" },
  { label: "SaaS & App Promo", slug: "saas" },
  { label: "Documentary & Drama", slug: "documentary" },
  { label: "Promo & Ads", slug: "promo" },
  { label: "Short Film & Music", slug: "film" },
  { label: "Social Media & EdTech", slug: "social" },
];

const PROJECTS: Project[] = [

  {
    id: 2,
    title: "Content Manager",
    category: "Saas Promo, Tutorial, Video Documentation",
    categorySlug: "saaspromotutorialvideodocumentation",
    thumbnail: "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/@NavidiumAppsShopify",
    duration: "Link",
    software: ["Script","AI Voiceover","Video Edit","Saas Test","Motion Graphics","Screen Record","Thumbnail With AI","Channel Manager"],
    desc: "Content Manager - Saas Promo, Tutorial, Video Documentation. Roles: Script, AI Voiceover, Video Edit, Saas Test, Motion Graphics, Screen Record, Thumbnail With AI, Channel Manager",
    stats: "View Project",
  },
  {
    id: 3,
    title: "Bangladesh Army CMP Project",
    category: "Historical Documentary",
    categorySlug: "historicaldocumentary",
    thumbnail: "url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.linkedin.com/posts/biniaminsheikh_videoediting-documentarystyle-sounddesign-activity-7400879332698664960-FkCX",
    duration: "Link",
    software: ["Motion Graphics","Edit","Music","Sound Design"],
    desc: "Bangladesh Army CMP Project - Historical Documentary. Roles: Motion Graphics, Edit, Music, and Sound Design",
    stats: "View Project",
  },
  {
    id: 4,
    title: "Bangladesh 8 Division 50th Anniversary",
    category: "Historical Documentary",
    categorySlug: "historicaldocumentary",
    thumbnail: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.linkedin.com/posts/biniaminsheikh_im-proud-to-share-that-i-had-the-opportunity-activity-7395558600942784513-69HK",
    duration: "Link",
    software: ["Motion Graphics","Edit","Music","Sound Design"],
    desc: "Bangladesh 8 Division 50th Anniversary - Historical Documentary. Roles: Motion Graphics, Edit, Music, and Sound Design",
    stats: "View Project",
  },
  {
    id: 5,
    title: "Reel About AI",
    category: "Reel",
    categorySlug: "reel",
    thumbnail: "url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://drive.google.com/file/d/1FOfI5JfW65tUBOOjklbyxTakD468tS_P/view?usp=drive_link",
    duration: "Link",
    software: ["Edit","Music","Subtitle","Motion Graphics"],
    desc: "Reel About AI - Reel. Roles: Edit, Music, Subtitle, Motion Graphics",
    stats: "View Project",
  },
  {
    id: 6,
    title: "FundedNext",
    category: "Promo Video",
    categorySlug: "promovideo",
    thumbnail: "url('https://images.unsplash.com/photo-1518131672697-611eb14bf8d6?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://drive.google.com/file/d/1TLTi1Pl9nJNJy1LAEkoklJTCM3UI9DlG/view?usp=sharing",
    duration: "Link",
    software: ["Edit","Color","Sound Design"],
    desc: "FundedNext - Promo Video. Roles: Edit, Color, Sound Design",
    stats: "View Project",
  },
  {
    id: 7,
    title: "KashKhata",
    category: "Saas App Bangla Promo",
    categorySlug: "saasappbanglapromo",
    thumbnail: "url('https://img.youtube.com/vi/-aX1fKw3zRw/maxresdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/-aX1fKw3zRw",
    duration: "Link",
    software: ["Script","Motion Graphics","Edit","Music","Sound Design"],
    desc: "KashKhata - Saas App Bangla Promo. Roles: Script, Motion Graphics, Edit, Music, and Sound Design",
    stats: "View Project",
  },
  {
    id: 8,
    title: "Reorder Promo",
    category: "Saas App Promo",
    categorySlug: "saasapppromo",
    thumbnail: "url('https://img.youtube.com/vi/YR6v52wynJA/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/YR6v52wynJA",
    duration: "Link",
    software: ["Motion Graphics","Edit","Music","Sound Design"],
    desc: "Reorder Promo - Saas App Promo. Roles: Motion Graphics, Edit, Music, and Sound Design",
    stats: "View Project",
  },
  {
    id: 9,
    title: "App Tutorial",
    category: "Web App Tutorial",
    categorySlug: "webapptutorial",
    thumbnail: "url('https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=1974&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/@NavidiumAppsShopify/playlists",
    duration: "Link",
    software: ["Script","Animation","Edit"],
    desc: "App Tutorial - Web App Tutorial. Roles: Script, Animation, Edit",
    stats: "View Project",
  },
  {
    id: 10,
    title: "Promo Ads",
    category: "Promo Video",
    categorySlug: "promovideo",
    thumbnail: "url('https://images.unsplash.com/photo-1590130985223-9366df0417dd?q=80&w=2071&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.linkedin.com/posts/biniaminsheikh_cinematography-fashionfilm-creativedirection-activity-7262892650494590978-NypL",
    duration: "Link",
    software: ["Cinematography","Directing","Color","Edit"],
    desc: "Promo Ads - Promo Video. Roles: Cinematography, Directing, Color & Edit",
    stats: "View Project",
  },
  {
    id: 11,
    title: "Rishka Fest",
    category: "Festival Promo",
    categorySlug: "festivalpromo",
    thumbnail: "url('https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.linkedin.com/posts/biniaminsheikh_rishkafestival-cinematography-mobilefilmmaking-activity-7274114028237402114-TOsP",
    duration: "Link",
    software: ["Cinematography","Directing","Color","Edit"],
    desc: "Rishka Fest - Festival Promo. Roles: Cinematography, Directing, Color & Edit",
    stats: "View Project",
  },
  {
    id: 12,
    title: "Promo",
    category: "Aps Fashion Winter Product",
    categorySlug: "apsfashionwinterproduct",
    thumbnail: "url('https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.linkedin.com/posts/biniaminsheikh_photography-motionvideo-creativeprojects-activity-7257437658149249024-YthV",
    duration: "Link",
    software: ["Product Photography","Motion Graphics"],
    desc: "Promo - Aps Fashion Winter Product. Roles: Product Photography And Motion Graphics",
    stats: "View Project",
  },
  {
    id: 13,
    title: "Ads",
    category: "Ads",
    categorySlug: "ads",
    thumbnail: "url('https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://www.linkedin.com/posts/biniaminsheikh_advertising-cinematography-videoediting-activity-7262126954286391297-lfqL",
    duration: "Link",
    software: ["Script","Cinematography","Directing","Color","Edit"],
    desc: "Ads - Ads. Roles: Script, Cinematography, Directing, Color & Edit",
    stats: "View Project",
  },
  {
    id: 14,
    title: "Chitro Kotha",
    category: "Music Video",
    categorySlug: "musicvideo",
    thumbnail: "url('https://img.youtube.com/vi/8O4b5QiBtBM/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/8O4b5QiBtBM",
    duration: "Link",
    software: ["Cinematography","Video Editing","Color Grading","Direction"],
    desc: "Chitro Kotha - Music Video. Roles: Cinematography, Video Editing, Color Grading and Direction",
    stats: "View Project",
  },
  {
    id: 15,
    title: "Ontim Valobasha",
    category: "Short Film",
    categorySlug: "shortfilm",
    thumbnail: "url('https://img.youtube.com/vi/8DZjxmR5FpM/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/8DZjxmR5FpM",
    duration: "Link",
    software: ["Assistant Director","Casting Director"],
    desc: "Ontim Valobasha - Short Film. Roles: Assistant Director, Casting Director",
    stats: "View Project",
  },
  {
    id: 16,
    title: "Onushthan Reel",
    category: "Event Photo Reel",
    categorySlug: "eventphotoreel",
    thumbnail: "url('https://images.unsplash.com/photo-1533256565147-38f32c321a60?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://drive.google.com/file/d/1qycHVbN8zYUqvNPsh_3V2OfLYA12xyj6/view?usp=drive_link",
    duration: "Link",
    software: ["Photography","Motion Graphics"],
    desc: "Onushthan Reel - Event Photo Reel. Roles: Photography And Motion Graphics",
    stats: "View Project",
  },
  {
    id: 17,
    title: "Babar Lekha Dairy",
    category: "Short Film",
    categorySlug: "shortfilm",
    thumbnail: "url('https://img.youtube.com/vi/mnfuqQpifq0/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/mnfuqQpifq0",
    duration: "Link",
    software: ["Assistant Director","Casting Director"],
    desc: "Babar Lekha Dairy - Short Film. Roles: Assistant Director, Casting Director",
    stats: "View Project",
  },
  {
    id: 18,
    title: "Illusion",
    category: "Short Film",
    categorySlug: "shortfilm",
    thumbnail: "url('https://img.youtube.com/vi/J19AIOXtaZw/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/J19AIOXtaZw",
    duration: "Link",
    software: ["Assistant Director","Casting Director"],
    desc: "Illusion - Short Film. Roles: Assistant Director, Casting Director",
    stats: "View Project",
  },
  {
    id: 19,
    title: "Panku Boys",
    category: "Music Video",
    categorySlug: "musicvideo",
    thumbnail: "url('https://img.youtube.com/vi/8O4b5QiBtBM/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/8O4b5QiBtBM",
    duration: "Link",
    software: ["Cinematography","Video Editing","Color Grading"],
    desc: "Panku Boys - Music Video. Roles: Cinematography, Video Editing And Color Grading",
    stats: "View Project",
  },
  {
    id: 20,
    title: "Kali Kapali",
    category: "Music Video",
    categorySlug: "musicvideo",
    thumbnail: "url('https://img.youtube.com/vi/HYbb7ayFJXc/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/HYbb7ayFJXc",
    duration: "Link",
    software: ["Cinematography","Video Editing","Color Grading Ad VFX"],
    desc: "Kali Kapali - Music Video. Roles: Cinematography, Video Editing, Color Grading Ad VFX",
    stats: "View Project",
  },
  {
    id: 21,
    title: "Kalo Golam",
    category: "TV Drama",
    categorySlug: "tvdrama",
    thumbnail: "url('https://img.youtube.com/vi/g0pEDno618k/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/g0pEDno618k",
    duration: "Link",
    software: ["Assistant Director"],
    desc: "Kalo Golam - TV Drama. Roles: Assistant Director",
    stats: "View Project",
  },
  {
    id: 22,
    title: "Tia",
    category: "TV Drama",
    categorySlug: "tvdrama",
    thumbnail: "url('https://img.youtube.com/vi/7rhjC4dDGUU/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/7rhjC4dDGUU",
    duration: "Link",
    software: ["Assistant Director"],
    desc: "Tia - TV Drama. Roles: Assistant Director",
    stats: "View Project",
  },
  {
    id: 23,
    title: "Abbas Mia O Sada Porir Golpo",
    category: "TV Drama",
    categorySlug: "tvdrama",
    thumbnail: "url('https://img.youtube.com/vi/21lloPpUlIY/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/21lloPpUlIY",
    duration: "Link",
    software: ["Assistant Director","Casting Director"],
    desc: "Abbas Mia O Sada Porir Golpo - TV Drama. Roles: Assistant Director and Casting Director",
    stats: "View Project",
  },
  {
    id: 24,
    title: "Food Station 19 Attack",
    category: "Tv Drama",
    categorySlug: "tvdrama",
    thumbnail: "url('https://img.youtube.com/vi/8SZLhAOJXEA/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/8SZLhAOJXEA",
    duration: "Link",
    software: ["Visual Effect"],
    desc: "Food Station 19 Attack - Tv Drama. Roles: Visual Effect",
    stats: "View Project",
  },
  {
    id: 25,
    title: "JolRong",
    category: "Short Film",
    categorySlug: "shortfilm",
    thumbnail: "url('https://img.youtube.com/vi/JLAMT7GFtZE/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/JLAMT7GFtZE",
    duration: "Link",
    software: ["Colour","Visual Effect"],
    desc: "JolRong - Short Film. Roles: Colour and Visual Effect",
    stats: "View Project",
  },
  {
    id: 26,
    title: "Shopnow Ghor",
    category: "Short FIlm",
    categorySlug: "shortfilm",
    thumbnail: "url('https://img.youtube.com/vi/A-Ukz6UbW0Y/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/A-Ukz6UbW0Y",
    duration: "Link",
    software: ["Colour","Sound"],
    desc: "Shopnow Ghor - Short FIlm. Roles: Colour And Sound",
    stats: "View Project",
  },
  {
    id: 27,
    title: "Info",
    category: "Information",
    categorySlug: "information",
    thumbnail: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://drive.google.com/file/d/1IRnXFlb9jpLGFqLIsCpTHKokUrP9lqdV/view?usp=sharing",
    duration: "Link",
    software: ["Motion","Video Edit"],
    desc: "Info - Information. Roles: Motion And Video Edit",
    stats: "View Project",
  },
  {
    id: 28,
    title: "Office Picnic",
    category: "Promo",
    categorySlug: "promo",
    thumbnail: "url('https://img.youtube.com/vi/LT5xvDjlZ48/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/LT5xvDjlZ48",
    duration: "Link",
    software: ["Cinematography","Motion","Edit"],
    desc: "Office Picnic - Promo. Roles: Cinematography, Motion And Edit",
    stats: "View Project",
  },
  {
    id: 29,
    title: "Bike Review",
    category: "Youtube Video",
    categorySlug: "youtubevideo",
    thumbnail: "url('https://images.unsplash.com/photo-1540829016269-e05670f88adb?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://drive.google.com/file/d/1z9meMj8_wL-AfWr3IJ0Mo_ZxhnRa2WC0/view?usp=drive_link",
    duration: "Link",
    software: ["Colour","Video Edit"],
    desc: "Bike Review - Youtube Video. Roles: Colour And Video Edit",
    stats: "View Project",
  },
  {
    id: 30,
    title: "Course Preview",
    category: "Edtech",
    categorySlug: "edtech",
    thumbnail: "url('https://img.youtube.com/vi/atOq_CKI15E/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/atOq_CKI15E",
    duration: "Link",
    software: ["Cinematography","Video Edit"],
    desc: "Course Preview - Edtech. Roles: Cinematography, Video Edit",
    stats: "View Project",
  },
  {
    id: 31,
    title: "Course Preview 2",
    category: "Edtech",
    categorySlug: "edtech",
    thumbnail: "url('https://img.youtube.com/vi/pfs4RY2t62o/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/pfs4RY2t62o",
    duration: "Link",
    software: ["Cinematography","Video Edit"],
    desc: "Course Preview 2 - Edtech. Roles: Cinematography, Video Edit",
    stats: "View Project",
  },
  {
    id: 32,
    title: "Course Preview 3",
    category: "Edtech",
    categorySlug: "edtech",
    thumbnail: "url('https://img.youtube.com/vi/pfs4RY2t62o/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/pfs4RY2t62o",
    duration: "Link",
    software: ["Cinematography","Video Edit"],
    desc: "Course Preview 3 - Edtech. Roles: Cinematography, Video Edit",
    stats: "View Project",
  },
  {
    id: 33,
    title: "Course Preview 4",
    category: "Edtech",
    categorySlug: "edtech",
    thumbnail: "url('https://img.youtube.com/vi/2BMcov9Jefs/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/2BMcov9Jefs",
    duration: "Link",
    software: ["Cinematography","Video Edit"],
    desc: "Course Preview 4 - Edtech. Roles: Cinematography, Video Edit",
    stats: "View Project",
  },
  {
    id: 34,
    title: "Motion Banner",
    category: "Edtech",
    categorySlug: "edtech",
    thumbnail: "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://drive.google.com/file/d/1d3tch6BIoOhRGB3u50VJxUUG9LSylRQB/view?usp=sharing",
    duration: "Link",
    software: ["Motion Graphics"],
    desc: "Motion Banner - Edtech. Roles: Motion Graphics",
    stats: "View Project",
  },
  {
    id: 35,
    title: "Course Preview 5",
    category: "Edtech",
    categorySlug: "edtech",
    thumbnail: "url('https://img.youtube.com/vi/pqPwvU_jrmA/hqdefault.jpg') center/cover no-repeat",
    videoUrl: "https://www.youtube.com/embed/pqPwvU_jrmA",
    duration: "Link",
    software: ["Cinematography","Video Edit"],
    desc: "Course Preview 5 - Edtech. Roles: Cinematography, Video Edit",
    stats: "View Project",
  },
  {
    id: 36,
    title: "Course Promo",
    category: "Edtech",
    categorySlug: "edtech",
    thumbnail: "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
    videoUrl: "https://drive.google.com/file/d/1L5N-vlUtKXwAwkM5AaQfpFOCW6J-oGYZ/view?usp=sharing",
    duration: "Link",
    software: ["Cinematography","Video Edit"],
    desc: "Course Promo - Edtech. Roles: Cinematography, Video Edit",
    stats: "View Project",
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = (tabSlug: string) => {
    if (tabSlug === "all") return PROJECTS;

    // Grouping the original slugs into broader simplified categories
    const mappings: Record<string, string[]> = {
      "saas": ["saasapppromo", "saaspromotutorialvideodocumentation", "saasappbanglapromo", "webapptutorial"],
      "documentary": ["historicaldocumentary", "tvdrama"],
      "promo": ["promovideo", "festivalpromo", "apsfashionwinterproduct", "ads", "promo"],
      "film": ["musicvideo", "shortfilm"],
      "social": ["reel", "eventphotoreel", "youtubevideo", "information", "edtech"]
    };

    return PROJECTS.filter((p) => {
      const allowedSlugs = mappings[tabSlug] || [tabSlug];
      return allowedSlugs.includes(p.categorySlug);
    });
  };

  const currentProjects = filteredProjects(activeTab);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[#0F1115] overflow-hidden">
      {/* Glow layers */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">My Creative Works</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
            Curated <span className="text-gradient-electric text-gradient-glow">Portfolio</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.slug;
            return (
              <button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 clickable ${
                  isActive
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white border-transparent shadow-[0_0_15px_rgba(0,210,255,0.25)]"
                    : "bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white hover:border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative aspect-video rounded-2xl border border-white/5 bg-zinc-900 overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Thumbnail */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={project.thumbnail.match(/url\('([^']+)'\)/)?.[1] || ""}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Visual Icons to make the gradient look like a video thumbnail */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 bg-black/40 group-hover:bg-black/20 transition-all duration-500">
                    {project.categorySlug === "motion" ? (
                      <Film className="w-12 h-12 text-white/20 group-hover:text-accent-purple/60 group-hover:scale-110 transition-all duration-500" />
                    ) : (
                      <Video className="w-12 h-12 text-white/20 group-hover:text-accent-blue/60 group-hover:scale-110 transition-all duration-500" />
                    )}
                  </div>
                </div>

                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-1" />

                {/* Top badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-[#050505]/60 text-[10px] font-mono text-zinc-300 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-white/90">
                    {project.duration}
                  </span>
                </div>

                {/* Bottom Title Bar & Icon trigger */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end z-10">
                  <div>
                    <h3 className="text-white text-base font-bold font-display uppercase tracking-wide group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs font-mono mt-1">
                      {project.stats}
                    </p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-[#050505]/60 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all shrink-0">
                    <Play fill="currentColor" size={14} className="ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state fallback */}
        {currentProjects.length === 0 && (
          <div className="text-center py-20 text-zinc-500 font-mono text-xs">
            No projects found in this category.
          </div>
        )}

      </div>

      {/* Project details overlay modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
          >
            {/* Modal Closer click layer */}
            <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0F1115] overflow-hidden z-10 shadow-[0_0_80px_rgba(0,210,255,0.15)] flex flex-col max-h-[90vh]"
            >
              
              {/* Modal Closer Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white z-50 transition-colors clickable"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto flex-1">
                {/* Aspect-video player header */}
                <div className="relative aspect-video w-full bg-black border-b border-white/5">
                  <iframe
                    src={`${selectedProject.videoUrl}?autoplay=1&mute=0&controls=1&rel=0`}
                    title={selectedProject.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Project details content */}
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                  {/* Left Column: Title and details */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div>
                      <span className="text-xs tracking-wider font-mono text-accent-blue uppercase font-semibold">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-xl md:text-3xl font-bold uppercase font-display text-white tracking-wide mt-1">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <p className="text-zinc-300 text-sm leading-relaxed font-light">
                      {selectedProject.desc}
                    </p>
                  </div>

                  {/* Right Column: Specifications tags */}
                  <div className="w-full md:w-[260px] flex flex-col gap-6 p-5 rounded-2xl bg-white/[0.01] border border-white/5 shrink-0 justify-between">
                    <div className="flex flex-col gap-4">
                      {/* Metric Stat */}
                      {selectedProject.stats && (
                        <div>
                          <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase block">Impact Result</span>
                          <span className="text-base font-bold text-gradient-electric font-display mt-0.5 block">
                            {selectedProject.stats}
                          </span>
                        </div>
                      )}

                      {/* Duration */}
                      <div>
                        <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase block">Duration</span>
                        <span className="text-sm font-semibold text-white mt-0.5 block">
                          {selectedProject.duration} Sec
                        </span>
                      </div>

                      {/* Tech stack badges */}
                      <div>
                        <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase block mb-1.5">Software Applied</span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.software.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono text-zinc-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => window.open(selectedProject.videoUrl, "_blank")}
                      className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5 mt-4 clickable"
                    >
                      Open Link <ExternalLink size={12} />
                    </button>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
