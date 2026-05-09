"use client";

import React from "react";
import { Heart, Github, Linkedin, MessageSquare, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient tracking-tighter mb-2">ANIK.</h3>
            <p className="text-sm text-foreground/40 max-w-xs">
              Building the future of the web, one pixel at a time.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><MessageSquare size={20} /></a>
            </div>
            <p className="text-xs text-foreground/20 flex items-center gap-1 uppercase tracking-[0.2em] font-bold">
              Designed & Built with <Heart size={10} className="text-red-500 fill-red-500" /> by Anik
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all group shadow-xl shadow-black/20"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 text-center border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-foreground/10 uppercase tracking-[0.5em] font-black">
            © 2026 ANIK HOSSAIN. ALL RIGHTS RESERVED.
          </p>
          <div className="glass px-4 py-1 rounded-full border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">
              Live Visitors: 99+
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
