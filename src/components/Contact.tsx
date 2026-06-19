"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  Send,
  MessageCircle,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SpotifyIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.24.96v.06zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.539-1.56.3z"/>
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/shawon.personal@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: formState.subject || "New Portfolio Contact",
          message: formState.message,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err) {
      console.error("FAILED...", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const contactDetails = [
    {
      icon: <Phone size={16} />,
      label: "Phone",
      value: "+8801680993032",
      href: "tel:+8801680993032",
      accent: "text-[#00d2ff]",
      bg: "bg-[#00d2ff]/10 border-[#00d2ff]/20",
    },
    {
      icon: <Mail size={16} />,
      label: "Email",
      value: "shawon.personal@gmail.com",
      href: "mailto:shawon.personal@gmail.com",
      accent: "text-[#8b5cf6]",
      bg: "bg-[#8b5cf6]/10 border-[#8b5cf6]/20",
    },
    {
      icon: <MapPin size={16} />,
      label: "Location",
      value: "Savar, Dhaka, Bangladesh",
      href: "https://maps.google.com/?q=Savar,Dhaka,Bangladesh",
      accent: "text-[#d946ef]",
      bg: "bg-[#d946ef]/10 border-[#d946ef]/20",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={16} />,
      href: "https://linkedin.com/in/biniaminsheikh",
      label: "LinkedIn",
      hoverClass: "hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5",
    },
    {
      icon: <Facebook size={16} />,
      href: "https://facebook.com/iamshawonofficial",
      label: "Facebook",
      hoverClass: "hover:border-blue-600/50 hover:text-blue-500 hover:bg-blue-600/5",
    },
    {
      icon: <Youtube size={16} />,
      href: "https://www.youtube.com/@BiniAminSheikh",
      label: "YouTube",
      hoverClass: "hover:border-red-500/50 hover:text-red-400 hover:bg-red-500/5",
    },
    {
      icon: <Instagram size={16} />,
      href: "https://www.instagram.com/bini_amin_sheikh/",
      label: "Instagram",
      hoverClass: "hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/5",
    },
    {
      icon: <MessageCircle size={16} />,
      href: "https://wa.me/8801680993032",
      label: "WhatsApp",
      hoverClass: "hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5",
    },
    {
      icon: <SpotifyIcon size={16} />,
      href: "https://open.spotify.com/artist/3MB4tWBTdhgnbCpWW0I2iX",
      label: "Spotify",
      hoverClass: "hover:border-[#1DB954]/50 hover:text-[#1DB954] hover:bg-[#1DB954]/5",
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background neon orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00d2ff]/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header — centered above columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] font-mono text-[#00d2ff] uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-display tracking-tight text-white leading-tight">
            Let&apos;s Create Something{" "}
            <span className="text-gradient-electric text-gradient-glow">Amazing</span>
          </h2>
          <div className="h-[1px] w-16 bg-gradient-to-r from-[#00d2ff] to-[#8b5cf6] mt-5 mx-auto" />
        </motion.div>

        {/* Two-column grid — equal columns, vertically centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* ─── LEFT COLUMN ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Tagline */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Have an upcoming video project, brand film, or Shopify campaign?
              Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3">
              {contactDetails.map((detail, i) => (
                <motion.a
                  key={i}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover clickable"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${detail.bg} ${detail.accent} transition-all duration-300`}>
                    {detail.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                      {detail.label}
                    </span>
                    <span className="text-sm font-semibold text-white truncate block mt-0.5 group-hover:text-[#00d2ff] transition-colors duration-300">
                      {detail.value}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-600 group-hover:text-[#00d2ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  />
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-white/5" />

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
                Connect On Social
              </span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`group w-10 h-10 rounded-xl border border-white/8 bg-white/[0.02] text-zinc-500 flex items-center justify-center transition-all duration-300 clickable ${social.hoverClass}`}
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse shrink-0" />
              Available for freelance projects · Response within 24 hrs
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN — Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-7 md:p-8 rounded-3xl glass-panel relative overflow-hidden">
              {/* Subtle top glare line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

              <h3 className="text-base font-bold font-display uppercase tracking-[0.18em] text-white mb-6">
                Send A Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Name + Email side by side on md+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Full Name <span className="text-[#00d2ff]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Email <span className="text-[#00d2ff]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Message <span className="text-[#00d2ff]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00d2ff]/50 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#8b5cf6] to-[#d946ef] text-white text-xs font-bold tracking-[0.2em] uppercase shadow-lg hover:shadow-[#8b5cf6]/25 hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 clickable mt-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={15} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Launch Message
                    </>
                  )}
                </button>

                {/* Success/Error alert messages */}
                <AnimatePresence>
                  {isSent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex items-start gap-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/8 text-emerald-400"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <span className="text-xs font-mono leading-relaxed">
                        Message sent! I&apos;ll get back to you within 24 hours.
                      </span>
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex items-start gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/8 text-red-400"
                    >
                      <span className="text-xs font-mono leading-relaxed">
                        {error}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
