"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Command, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import Confetti from "@/components/ui/Confetti";

const navLinks = [
  { name: "About", href: "#about", key: "about" },
  { name: "Projects", href: "#projects", key: "projects" },
  { name: "Skills", href: "#skills", key: "skills" },
  { name: "Experience", href: "#experience", key: "experience" },
  { name: "Contact", href: "#contact", key: "contact" },
];

const moreLinks = [
  { name: "Qualification", href: "#qualification", key: "qualification" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);


  const handleLogoClick = (e) => {
    e.preventDefault();
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);
    if (newClicks === 5) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
      setLogoClicks(0);
    }
  };

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass-dark py-3" : "bg-transparent"
      )}
    >
      <Confetti active={showConfetti} />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.a
            href="#"
            onClick={handleLogoClick}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient tracking-tighter"
          >
            ANIK.
          </motion.a>
          
          <div className="hidden lg:flex flex-col text-[10px] uppercase tracking-widest text-foreground/40 font-bold border-l border-foreground/10 pl-8">
            <span>Dhaka, BD</span>
            <span>{time}</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center gap-2 px-3 py-1 glass rounded-full border border-green-500/20 mr-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Available for Hire</span>
          </div>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {t(`nav.${link.key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
          
          {/* More Dropdown */}
          <div className="relative group/more">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              {t('nav.more')} <ChevronDown size={14} className="group-hover/more:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 glass-dark rounded-xl border border-white/10 opacity-0 invisible group-hover/more:opacity-100 group-hover/more:visible transition-all duration-300 translate-y-2 group-hover/more:translate-y-0 overflow-hidden">
              {moreLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center space-x-1 border border-white/10 px-3">
              <Command size={14} />
              <span className="text-xs">K</span>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold px-2">{t('nav.more')}</p>
                {moreLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium hover:text-primary transition-colors pl-2"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
