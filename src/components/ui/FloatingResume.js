"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileDown, Download } from "lucide-react";

const FloatingResume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: -50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
      className="fixed bottom-10 left-10 z-[100] hidden md:block"
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, x: 10 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-3 glass px-6 py-4 rounded-2xl border border-white/10 shadow-2xl hover:bg-primary hover:text-white transition-all group"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-colors">
          <FileDown size={20} />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Curriculum Vitae</p>
          <p className="text-sm font-bold flex items-center gap-1">
            Download CV <Download size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </p>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default FloatingResume;
