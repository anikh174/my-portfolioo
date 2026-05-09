"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award } from "lucide-react";

const experiences = [
   {
    company: "Programming Hero",
    role: "Full-Stack MERN Learner",
    period: "2026 - Present",
    description: "Strengthening full-stack development skills through structured learning and project-based practice.",
    highlights: [
    "React, Node.js, Express, MongoDB",
    "Authentication & API development",
    "Built multiple full-stack projects"
  ]
  },
  {
    company: "BD Calling Academy",
    role: "MERN Stack Intern",
    period: "2025",
    description: "Worked on real-world web applications using the MERN stack, focusing on frontend development, API integration, and UI responsiveness.",
    highlights: [
    "Built reusable React components",
    "Integrated REST APIs with frontend",
    "Improved UI responsiveness across devices"
  ]
  },
  {
    company: "Institute & Self Learning",
    role: "Aspiring Web Developer",
    period: "2024",
    description: "Started my journey in web development through guidance from institute friends and self-learning. Built foundational knowledge in HTML, CSS, and JavaScript while exploring how real-world web applications work.",
    highlights: [
    "Learned HTML, CSS, JavaScript fundamentals",
    "Built small static web projects",
    "Developed strong interest in frontend development"
  ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <Briefcase size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Work <span className="text-gradient">History.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 group hover:border-primary/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-foreground/60 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-bold text-primary border border-primary/20 bg-primary/5">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>
              
              <p className="text-foreground/50 mb-8 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/40">
                    <Award size={14} className="text-primary" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Experience;
