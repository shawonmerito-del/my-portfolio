"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Passion from "@/components/Passion";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <span className="text-zinc-600 font-mono text-xs tracking-widest animate-pulse">
          INITIALIZING...
        </span>
      </div>
    );
  }

  return (
    <>
      {/* 1. Preloader count screen */}
      <LoadingScreen onFinished={() => setLoading(false)} />

      {/* Main Container loaded hidden until preloader is done */}
      <div
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0 pointer-events-none max-h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        {/* 3. Navigation Header */}
        <Header />

        {/* 4. Page Sections */}
        <main>
          <Hero />
          <Showreel />
          <Stats />
          <About />
          <Services />
          <Portfolio />
          <Music />
          <Skills />
          <Experience />
          <Testimonials />
          <Passion />
          <Education />
          <Contact />
        </main>

        {/* 5. Footer */}
        <Footer />
      </div>
    </>
  );
}
