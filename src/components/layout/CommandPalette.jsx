"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, User, Code, Mail, ArrowRight } from "lucide-react";

const actions = [
  { name: "About Me", href: "#about", icon: User },
  { name: "View Projects", href: "#projects", icon: Code },
  { name: "My Skills", href: "#skills", icon: Search },
  { name: "Contact Me", href: "#contact", icon: Mail },
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg glass-dark border border-white/10 rounded-2xl z-[1001] overflow-hidden"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/10">
              <Search className="text-foreground/40 mr-3" size={20} />
              <input
                autoFocus
                className="bg-transparent border-none outline-none w-full text-lg placeholder:text-foreground/20"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="px-2 py-1 bg-white/5 rounded text-[10px] text-foreground/40 font-bold border border-white/5">
                ESC
              </div>
            </div>

            <div className="p-2 max-h-80 overflow-y-auto">
              {filteredActions.length > 0 ? (
                filteredActions.map((action, idx) => (
                  <a
                    key={idx}
                    href={action.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 hover:bg-primary hover:text-white rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <action.icon size={18} className="text-primary group-hover:text-white" />
                      <span className="font-medium">{action.name}</span>
                    </div>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))
              ) : (
                <div className="p-8 text-center text-foreground/40">
                  No results found for "{query}"
                </div>
              )}
            </div>

            <div className="p-4 bg-white/5 flex items-center justify-between text-[10px] text-foreground/40 uppercase tracking-widest font-bold">
              <span>Navigation</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Command size={10} /> + K to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
