"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] w-14 h-14 glass rounded-full border border-white/10 flex items-center justify-center text-primary shadow-2xl hover:bg-primary hover:text-white transition-all group"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              style={{ pathLength: scrollYProgress }}
              className="text-primary group-hover:text-white"
            />
          </svg>
          <ArrowUp size={24} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
