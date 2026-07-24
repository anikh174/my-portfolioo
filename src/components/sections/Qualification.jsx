"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, School, MapPin, Award, Briefcase, Trophy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "internship", label: "Internship", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

const education = [
  {
    degree: "Diploma in Engineering",
    institution: "Bhola PolyTechnic Institute",
    type: "Institute",
    period: "2023 - 2025",
    location: "Bhola, Bangladesh",
    status: "Present",
    description: "Specializing in Computer Science & Technology with focus on software development and modern web technologies."
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Govt Technical School and College, Bhola",
    type: "College",
    period: "2020 - 2022",
    location: "Bhola, Bangladesh",
    description: "Completed higher secondary education with a focus on science and technology."
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Govt Technical School and College, Bhola",
    type: "School",
    period: "2018 - 2020",
    location: "Bhola, Bangladesh",
    description: "Secondary education with foundational knowledge in science, mathematics, and computing."
  }
];

const internships = [
  {
    role: "MERN Stack Intern",
    company: "BD Calling Academy",
    period: "2025",
    description: "Worked on real-world web applications using the MERN stack, focusing on frontend development, API integration, and UI responsiveness.",
    highlights: ["Built reusable React components", "Integrated REST APIs with frontend", "Improved UI responsiveness across devices"]
  },
  {
    role: "Full-Stack MERN Learner",
    company: "Programming Hero",
    period: "2026 - Present",
    description: "Strengthening full-stack development skills through structured learning and project-based practice.",
    highlights: ["React, Node.js, Express, MongoDB", "Authentication & API development", "Built multiple full-stack projects"]
  }
];

const certifications = [
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    date: "2026",
    description: "Comprehensive full-stack web development training covering React, Node.js, Express, MongoDB, and modern deployment practices.",
    credential: "#"
  },
  {
    title: "MERN Stack Internship Certificate",
    issuer: "BD Calling Academy",
    date: "2025",
    description: "Certified for completing a hands-on MERN stack internship with real-world project experience.",
    credential: "#"
  }
];

const achievements = [
  {
    title: "25+ Projects Completed",
    description: "Built and deployed over 25 web applications ranging from static sites to full-stack platforms with authentication, payments, and dashboards.",
    icon: "🚀"
  },
  {
    title: "Open Source Contributor",
    description: "Actively contributing to open-source projects on GitHub, collaborating with developers worldwide.",
    icon: "💻"
  },
  {
    title: "Problem Solver",
    description: "Solved 200+ coding challenges on various platforms, strengthening algorithmic and data structure skills.",
    icon: "🧩"
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices to stay current with the fast-evolving web ecosystem.",
    icon: "📚"
  }
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="qualification" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <GraduationCap size={16} />
            <span className="text-sm font-semibold uppercase tracking-widest">Qualifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            My <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-sm text-foreground/40 mt-4 max-w-lg mx-auto">
            Education, experience, and achievements that shape my professional journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "glass text-foreground/50 hover:text-foreground hover:border-primary/15"
                )}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="max-w-4xl mx-auto"
          >
            {/* Education */}
            {activeTab === "education" && (
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-foreground/8 hidden md:block" />
                <div className="space-y-6">
                  {education.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="relative md:pl-12"
                    >
                      <div className="hidden md:block absolute left-3 top-6 w-4 h-4 rounded-full bg-primary border-[3px] border-background z-10" />
                      <div className="glass p-6 rounded-2xl group hover:border-primary/15 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/15">
                                {item.type}
                              </span>
                              {item.status && (
                                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider border border-green-500/15">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                  {item.status}
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.degree}</h3>
                            <p className="text-sm text-foreground/50 font-medium flex items-center gap-1.5 mt-1">
                              <School size={13} className="text-primary/40" />
                              {item.institution}
                            </p>
                          </div>
                          <div className="flex sm:flex-col gap-2 shrink-0">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-[10px] font-bold text-primary">
                              <Calendar size={11} />
                              {item.period}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-[10px] font-bold text-foreground/30">
                              <MapPin size={11} />
                              {item.location}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-foreground/40 leading-relaxed mt-2">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Internship */}
            {activeTab === "internship" && (
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-foreground/8 hidden md:block" />
                <div className="space-y-6">
                  {internships.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="relative md:pl-12"
                    >
                      <div className="hidden md:block absolute left-3 top-6 w-4 h-4 rounded-full bg-primary border-[3px] border-background z-10" />
                      <div className="glass p-6 rounded-2xl group hover:border-primary/15 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                          <div>
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.role}</h3>
                            <p className="text-sm text-foreground/50 font-medium">{item.company}</p>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-[10px] font-bold text-primary shrink-0">
                            <Calendar size={11} />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-sm text-foreground/40 leading-relaxed mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((h, hi) => (
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
            )}

            {/* Certifications */}
            {activeTab === "certifications" && (
              <div className="grid sm:grid-cols-2 gap-5">
                {certifications.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="glass p-6 rounded-2xl group hover:border-primary/15 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Award size={18} />
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-[10px] font-bold text-primary">
                        <Calendar size={11} />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors mb-1">{item.title}</h3>
                    <p className="text-xs text-foreground/40 font-medium mb-3">{item.issuer}</p>
                    <p className="text-sm text-foreground/40 leading-relaxed mb-4">{item.description}</p>
                    {item.credential && (
                      <a href={item.credential} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2.5 transition-all">
                        View Credential <ExternalLink size={12} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {activeTab === "achievements" && (
              <div className="grid sm:grid-cols-2 gap-5">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="glass p-6 rounded-2xl group hover:border-primary/15 transition-all duration-300"
                  >
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/40 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Qualification;
