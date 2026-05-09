"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, School, MapPin } from "lucide-react";

const qualifications = [
  {
    degree: "Diploma in Engineering",
    institution: "Bhola PolyTechnic Institute",
    type: "Institute",
    period: "2023 - 2025",
    location: "Bhola, Bangladesh",
    status: "Present"
  },
  {
    degree: "HSC",
    institution: "Govt technical school and college, Bhola",
    type: "College",
    period: "2020 - 2022",
    location: "Bhola, Bangladesh"
  },
  {
    degree: "SSC",
    institution: "Govt technical school and college, Bhola",
    type: "School",
    period: "2018 - 2020",
    location: "Bhola, Bangladesh"
  }
];

const Qualification = () => {
  return (
    <section id="qualification" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <GraduationCap size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            My <span className="text-gradient">Qualification.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {qualifications.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-[2rem] border border-white/5 group-hover:border-primary/20 transition-all duration-500 relative z-10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <School size={120} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                        {q.type}
                      </span>
                      {q.status && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider border border-green-500/20 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {q.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {q.degree}
                    </h3>
                    <p className="text-foreground/70 font-medium flex items-center gap-2">
                      <School size={16} className="text-primary/50" />
                      {q.institution}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-xs font-bold text-primary border border-primary/10">
                      <Calendar size={14} />
                      {q.period}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-xs font-bold text-foreground/40 border border-white/5">
                      <MapPin size={14} />
                      {q.location}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connector for timeline effect if needed, or just a glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500 -z-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Qualification;
