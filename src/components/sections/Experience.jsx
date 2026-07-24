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
    highlights: ["React, Node.js, Express, MongoDB", "Authentication & API development", "Built multiple full-stack projects"]
  },
  {
    company: "BD Calling Academy",
    role: "MERN Stack Intern",
    period: "2025",
    description: "Worked on real-world web applications using the MERN stack, focusing on frontend development, API integration, and UI responsiveness.",
    highlights: ["Built reusable React components", "Integrated REST APIs with frontend", "Improved UI responsiveness across devices"]
  },
  {
    company: "Institute & Self Learning",
    role: "Aspiring Web Developer",
    period: "2024",
    description: "Started my journey in web development through guidance from institute friends and self-learning. Built foundational knowledge in HTML, CSS, and JavaScript.",
    highlights: ["Learned HTML, CSS, JavaScript fundamentals", "Built small static web projects", "Developed strong interest in frontend"]
  }
];

const Experience = () => {

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Briefcase size={16} />
            <span className="text-sm font-semibold uppercase tracking-widest">Career</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Work <span className="text-gradient">History</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-3 top-6 w-4 h-4 rounded-full bg-primary border-[3px] border-background z-10" />

                <div className="glass p-6 lg:p-8 rounded-2xl group hover:border-primary/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-sm text-foreground/40 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-[10px] font-bold text-primary shrink-0">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-foreground/45 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, hi) => (
                      <span key={hi} className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-foreground/35 glass px-3 py-1.5 rounded-full">
                        <Award size={10} className="text-primary" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
