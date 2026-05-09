"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Palette, Check } from "lucide-react";

const colors = [
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#a855f7" },
  { name: "Pink", value: "#ec4899" },
  { name: "Green", value: "#10b981" },
  { name: "Orange", value: "#f59e0b" },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(colors[0].value);

  const changeColor = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--color-primary", color);
  };

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[1000] flex items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="glass-dark border border-white/10 p-4 rounded-l-3xl shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <Palette size={16} className="text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Accents</span>
              </div>
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => changeColor(color.value)}
                  className="w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center group"
                  style={{ 
                    backgroundColor: color.value,
                    borderColor: activeColor === color.value ? "white" : "transparent"
                  }}
                >
                  {activeColor === color.value && <Check size={16} className="text-white" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 glass border border-white/10 rounded-l-2xl flex items-center justify-center text-foreground/60 hover:text-primary transition-all shadow-xl"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Settings size={20} />
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeCustomizer;
