"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
  glowColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Bini is an absolute wizard. He took our complex Shopify application interfaces and created video tutorials that simplified onboarding, boosting customer retention immediately.",
    author: "Johnathan Miller",
    role: "Founder & CEO",
    company: "Navidium Apps",
    rating: 5,
    initials: "JM",
    glowColor: "rgba(0, 210, 255, 0.2)",
  },
  {
    quote: "Working with Bini on our brand film campaigns was a breeze. His understanding of cinematography composition, camera lighting, and visual pacing is world-class.",
    author: "Raihan Ahmed",
    role: "Director",
    company: "Akhrai Production",
    rating: 5,
    initials: "RA",
    glowColor: "rgba(139, 92, 246, 0.2)",
  },
  {
    quote: "Bini's YouTube edits are exceptional. He understands how to maintain high audience retention, add the right sound effects, and keeps the viewers hooked from start to finish.",
    author: "Mark Sterling",
    role: "Content Creator",
    company: "TechVibe Channel",
    rating: 5,
    initials: "MS",
    glowColor: "rgba(217, 70, 239, 0.2)",
  },
  {
    quote: "The promotional product demo tutorials Bini edited generated immediate conversions. He brings both creativity and strategic marketing alignment to video products.",
    author: "Lisa Vance",
    role: "VP of Marketing",
    company: "Dynamatic Cart",
    rating: 5,
    initials: "LV",
    glowColor: "rgba(0, 210, 255, 0.2)",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      handleNext();
    }, 8000); // Auto-advance every 8 seconds

    return () => clearInterval(autoPlayTimer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#0F1115] overflow-hidden">
      {/* Dynamic background glow mirroring current slide color preference */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full filter blur-[150px] pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: current.glowColor }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs tracking-[0.3em] font-mono text-accent-blue uppercase mb-2">Social Proof</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white">
            Client <span className="text-gradient-electric text-gradient-glow">Reviews</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4" />
        </div>

        {/* Carousel Frame */}
        <div className="relative min-h-[380px] md:min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full p-8 md:p-12 rounded-3xl glass-panel relative flex flex-col gap-6"
            >
              {/* Quote Mark background */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-white/[0.02] pointer-events-none" />

              {/* Star rating */}
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base md:text-xl text-zinc-200 font-light leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Client Profile details */}
              <div className="flex items-center gap-4 mt-4 border-t border-white/5 pt-6">
                {/* Circle Avatar badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center font-display font-bold text-white text-sm shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                  {current.initials}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-bold uppercase font-display tracking-wider text-white">
                    {current.author}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {current.role} at <strong className="text-accent-blue font-semibold">{current.company}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur text-white hover:bg-white hover:text-black hover:border-transparent transition-all clickable"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20">
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur text-white hover:bg-white hover:text-black hover:border-transparent transition-all clickable"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* Bullet indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 clickable ${
                index === currentIndex ? "w-8 bg-accent-blue" : "w-2 bg-white/10 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
