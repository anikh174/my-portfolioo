"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HireMeBadge = () => {
  return (
    <div className="fixed bottom-32 left-10 z-[100] hidden lg:block">
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-32 h-32 flex items-center justify-center group"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[11px] font-bold uppercase tracking-[0.2em] fill-foreground/30 group-hover:fill-primary transition-colors">
              <textPath xlinkHref="#circlePath">
                Available For Hire!!
              </textPath>
            </text>
          </svg>
        </motion.div>
        
        <div className="w-14 h-14 glass rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
          <ArrowUpRight size={24} />
        </div>
      </motion.a>
    </div>
  );
};

export default HireMeBadge;
