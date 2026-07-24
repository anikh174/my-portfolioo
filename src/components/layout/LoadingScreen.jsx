"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TOTAL_DURATION = 2200;
const CIRCLE_RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const LoadingScreen = ({ children }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    // Skip if already loaded this session
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio-loaded")) {
      setShow(false);
      return;
    }

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const raw = Math.min(elapsed / TOTAL_DURATION, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(eased * 100);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => {
          sessionStorage.setItem("portfolio-loaded", "1");
          setShow(false);
        }, 350);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const strokeOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
            </div>

            <div className="relative flex flex-col items-center">
              {/* Profile + circular progress */}
              <div className="relative w-28 h-28 mb-8">
                {/* SVG ring */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r={CIRCLE_RADIUS}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground/8"
                  />
                  {/* Progress */}
                  <circle
                    cx="50"
                    cy="50"
                    r={CIRCLE_RADIUS}
                    fill="none"
                    stroke="url(#loader-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={strokeOffset}
                    style={{ transition: "stroke-dashoffset 80ms linear" }}
                  />
                  <defs>
                    <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(239, 84%, 67%)" />
                      <stop offset="100%" stopColor="hsl(280, 80%, 60%)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Profile image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src="/image2.jpeg"
                    alt="Anik Hossain"
                    fill
                    sizes="7rem"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg font-bold tracking-tight mb-1"
              >
                Anik Hossain
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[11px] font-medium text-foreground/35 uppercase tracking-[0.2em] mb-8"
              >
                MERN Stack Developer
              </motion.p>

              {/* Percentage */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-xs font-semibold text-foreground/30 tabular-nums"
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!show && children}
    </>
  );
};

export default LoadingScreen;
