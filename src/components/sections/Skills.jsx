"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Atom, 
  Wind, 
  Code, 
  Rocket, 
  Server, 
  Database, 
  Flame, 
  Github, 
  Layout, 
  Palette, 
  Layers
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SkillIcon = ({ name, slug, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10, scale: 1.1 }}
    className="group relative flex flex-col items-center"
  >
    <div className={`w-20 h-20 md:w-24 md:h-24 glass rounded-3xl flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.2)]`}>
      <Image 
        src={`https://cdn.simpleicons.org/${slug}/${color}`} 
        alt={name}
        width={40}
        height={40}
        className="w-10 h-10 transition-all duration-500 group-hover:scale-110"
      />
      
      {/* Dynamic Glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 group-hover:text-primary transition-colors">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  const { t } = useLanguage();

  const skillList = [
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "Express", slug: "express", color: "FFFFFF" },
    { name: "Firebase", slug: "firebase", color: "FFCA28" },
    { name: "Git", slug: "git", color: "F05032" },
    { name: "HTML5", slug: "html5", color: "E34F26" },
    { name: "CSS3", slug: "css", color: "1572B6" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
          >
            {t("skills.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/50 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold"
          >
            {t("skills.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          {skillList.map((skill, idx) => (
            <SkillIcon 
              key={skill.name} 
              name={skill.name} 
              slug={skill.slug}
              color={skill.color}
              delay={idx * 0.05} 
            />
          ))}
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
};

export default Skills;
