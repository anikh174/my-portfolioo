"use client";

import React from "react";
import { Heart, Github, Linkedin, Facebook, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Qualifications", href: "#qualification" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/anikh174", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anik-hossain174", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/anik.hossain.174", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/ah_mekail", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5">
      {/* Top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-black tracking-tighter inline-block mb-4">
              ANIK<span className="text-primary">.</span>
            </a>
            <p className="text-sm font-medium text-foreground/60 mb-1">MERN Stack Developer</p>
            <p className="text-sm text-foreground/30 leading-relaxed max-w-xs">
              Building the future of the web, one pixel at a time. Always learning, always creating.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/25 mb-5">Navigation</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}
                  className="text-sm text-foreground/40 hover:text-primary transition-colors duration-200 font-medium">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/25 mb-5">Contact</p>
            <div className="space-y-3.5">
              <a href="mailto:hossainanik174@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/40 hover:text-primary transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:bg-primary/15 transition-all duration-200">
                  <Mail size={14} />
                </div>
                hossainanik174@gmail.com
              </a>
              <a href="tel:+8801518953763"
                className="flex items-center gap-3 text-sm text-foreground/40 hover:text-primary transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:bg-primary/15 transition-all duration-200">
                  <Phone size={14} />
                </div>
                +880 1518-953763
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground/40">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary/60">
                  <MapPin size={14} />
                </div>
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/25 mb-5">Connect</p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-foreground/30 hover:text-primary hover:border-primary/20 hover:scale-105 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Available for hire</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-foreground/20 font-medium">
            &copy; {new Date().getFullYear()} Anik Hossain. All rights reserved.
          </p>
          <p className="text-[11px] text-foreground/20 flex items-center gap-1 font-medium">
            Designed & Built with <Heart size={10} className="text-red-500 fill-red-500" /> by Anik
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
