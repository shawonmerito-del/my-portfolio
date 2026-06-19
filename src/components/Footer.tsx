"use client";

import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-8">
        
        {/* Back To Top Scroll link */}
        <a
          href="#"
          onClick={scrollToTop}
          className="p-3 rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/10 hover:border-white/10 text-zinc-400 hover:text-white transition-all transform hover:-translate-y-1 clickable"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </a>

        {/* Logo and Tagline */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl md:text-2xl font-bold font-display uppercase tracking-[0.25em] text-white">
            BINI AMIN SHEIKH
          </span>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Crafting Stories Through Motion.
          </p>
        </div>

        {/* Quick bottom line */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full pt-8 border-t border-white/5 text-[10px] font-mono text-zinc-600 gap-4">
          <div>
            © 2026 BINI AMIN SHEIKH. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-default">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-default">TERMS OF USE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
