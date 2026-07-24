"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Coffee, GitCommit, Trophy } from "lucide-react";

const stats = [
  { label: "Lines of Code", value: 250, suffix: "K+", icon: Code2 },
  { label: "Cups of Coffee", value: 1200, suffix: "", icon: Coffee },
  { label: "Git Commits", value: 500, suffix: "+", icon: GitCommit },
  { label: "Projects Done", value: 25, suffix: "+", icon: Trophy },
];

const Counter = ({ value, suffix, active }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const dur = 2000;
    const inc = value / (dur / 16);
    const id = setInterval(() => {
      start += inc;
      if (start >= value) { setCount(value); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [active, value]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Stats = () => {
  const ref = useRef(null);
  const active = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-11 h-11 glass rounded-xl flex items-center justify-center text-primary">
                  <s.icon size={20} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gradient">
                <Counter value={s.value} suffix={s.suffix} active={active} />
              </h3>
              <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground/35 mt-1">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
