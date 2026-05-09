"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Confetti = ({ active }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (active) {
      const newParticles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        color: ["#3b82f6", "#a855f7", "#ec4899", "#22c55e"][Math.floor(Math.random() * 4)],
        size: Math.random() * 10 + 5,
      }));
      setParticles(newParticles);
      const timer = setTimeout(() => setParticles([]), 2000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[3000] flex items-center justify-center">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 1, 0.5], 
              x: p.x * 10, 
              y: p.y * 10, 
              opacity: 0,
              rotate: 360 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: "2px",
              position: "absolute"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Confetti;
