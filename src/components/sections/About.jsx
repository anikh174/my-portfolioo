"use client";

import React from "react";
import { motion } from "framer-motion";

const journey = [
  { year: "2024", title: "Starting Point", desc: "Began learning web development fundamentals including HTML, CSS, and JavaScript. Built small static projects to understand the basics." },
  { year: "2025", title: "Internship Experience", desc: "Worked as a web development intern at BD Calling Academy, gaining hands-on experience with real-world projects and MERN stack." },
  { year: "2026", title: "MERN Stack Focus", desc: "Currently focusing on full-stack MERN development, building scalable applications with React, Node.js, Express, and MongoDB." },
  { year: "Now", title: "Growth & Practice", desc: "Continuously building projects, improving problem-solving skills, and exploring modern web development best practices." },
];

const About = () => {

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              My Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-8 leading-tight">
              Transforming Ideas Into Digital Reality.
            </h2>

            <div className="space-y-4 text-foreground/60 leading-relaxed">
              <p>My journey into web development started with curiosity, guided by friends from my institute who introduced me to programming. What began as exploration soon turned into a strong passion for building interactive web experiences. In 2025, during my 8th semester, I joined an internship at ~BD Calling Academy, where I worked with the MERN stack and gained practical experience in real-world projects, team collaboration, and modern web development practices. To further strengthen my skills, I enrolled in ~Programming Hero, where I am currently improving my full-stack development abilities, focusing on building scalable and production-ready applications. As a MERN-focused developer, I aim to create clean, responsive, and meaningful digital experiences that combine design and functionality.</p>
              <p>As a frontend developer, I don&apos;t just write code; I craft digital interfaces that tell a story. I believe that every pixel has a purpose.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="glass p-5 rounded-2xl">
                <h4 className="text-2xl font-black text-primary mb-1">1+</h4>
                <p className="text-xs text-foreground/40 uppercase tracking-widest font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="glass p-5 rounded-2xl">
                <h4 className="text-2xl font-black text-primary mb-1">25+</h4>
                <p className="text-xs text-foreground/40 uppercase tracking-widest font-semibold">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 lg:p-10 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-8">My Journey</h3>
            <div className="space-y-8">
              {journey.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/15 last:border-transparent">
                  <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[5px] rounded-full bg-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {item.year}
                  </span>
                  <h4 className="text-sm font-bold mt-1">{item.title}</h4>
                  <p className="text-xs text-foreground/40 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
