"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Coffee, GitCommit, Trophy } from "lucide-react";

const stats = [
  { label: "Lines of Code", value: "250K+", icon: Code2 },
  { label: "Cups of Coffee", value: "1,200", icon: Coffee },
  { label: "Git Commits", value: "500+", icon: GitCommit },
  { label: "Awards Won", value: "3", icon: Trophy },
];

const Stats = () => {
  return (
    <section className="py-20 relative border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                  <stat.icon size={24} />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-1 tracking-tighter text-gradient">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
