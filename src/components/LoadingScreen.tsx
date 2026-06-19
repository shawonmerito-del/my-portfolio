"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1600; // Total loading duration in ms
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              onFinished();
            }, 600); // Wait for fade out animation
          }, 400); // Pause briefly at 100
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {!isDone && (
          <motion.div
          className="fixed inset-0 bg-[#050505] z-[99999] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%", filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <motion.div 
              className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-accent-blue/10 rounded-full blur-[120px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
          {/* Top Logo / Label */}
          <div className="flex justify-between items-center text-xs tracking-[0.3em] text-zinc-500 uppercase font-display">
            <div>Portfolio ©2026</div>
            <div>Creative Studio</div>
          </div>

          {/* Central Typography and Progress Bar */}
          <div className="max-w-4xl mx-auto w-full flex flex-col items-start gap-6 relative z-10">
            <div className="overflow-hidden pb-2">
              <motion.h1
                className="flex text-4xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter text-white font-display"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {"BINI AMIN SHEIKH".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { y: 100, opacity: 0, rotateY: 90 },
                      visible: { y: 0, opacity: 1, rotateY: 0 },
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={char === " " ? "w-4 md:w-8" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.p
                className="text-xs md:text-sm tracking-[0.4em] text-accent-blue font-medium uppercase relative inline-block"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                Crafting Stories Through Motion
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-blue/30" />
              </motion.p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-[3px] bg-white/5 relative mt-8 overflow-visible rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                {/* Flare at the tip of the progress bar */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full filter blur-[4px]" />
              </motion.div>
            </div>
          </div>

          {/* Bottom stats / Counter */}
          <div className="flex justify-between items-end relative z-10">
            <div className="text-left max-w-xs text-[10px] md:text-xs tracking-wider text-zinc-500 font-sans leading-relaxed hidden sm:block">
              EDITING • CINEMATOGRAPHY<br/>MOTION DESIGN • VFX<br/>MUSIC ARTIST • RAPPER
            </div>
            
            <div className="text-right flex items-baseline">
              <motion.span 
                className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white font-display tabular-nums leading-none"
              >
                {Math.round(progress)}
              </motion.span>
              <span className="text-2xl md:text-4xl font-light text-zinc-600 mb-2 ml-1">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
