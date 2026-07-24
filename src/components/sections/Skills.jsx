"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "Express", slug: "express", color: "FFFFFF" },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "1572B6" },
];

const Skills = () => {

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Technical Arsenal.
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/25 transition-all duration-300">
                <img
                  src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                  alt={skill.name}
                  className="w-8 h-8 md:w-9 md:h-9"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-foreground/30 group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
