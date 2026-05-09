"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Rocket, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import CodeWindow from "@/components/ui/CodeWindow";

const JourneyItem = ({ year, title, description, icon: Icon }) => (
  <div className="relative pl-8 pb-12 border-l border-white/10 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-white animate-ping" />
    </div>
    <span className="text-xs font-bold text-primary uppercase tracking-widest">
      {year}
    </span>
    <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
    <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Story Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 text-primary mb-4">
              <User size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">
                {t("about.title")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
              {t("about.subtitle")}
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="glass p-6 rounded-2xl">
                  <h4 className="text-3xl font-black text-primary mb-1">1+</h4>
                  <p className="text-sm text-foreground/50 uppercase tracking-widest">
                    {t("about.exp_years")}
                  </p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <h4 className="text-3xl font-black text-primary mb-1">25+</h4>
                  <p className="text-sm text-foreground/50 uppercase tracking-widest">
                    {t("about.projects_done")}
                  </p>
                </div>
              </div>

              <div className="mt-10 opacity-30 hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-foreground/40 mb-2 italic">
                  Handcrafted with passion by
                </p>
                <h3 className="text-4xl font-signature text-primary">
                  Anik Hossain
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Journey Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative z-10">
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <Rocket className="text-primary" /> {t("about.journey")}
              </h3>

              <div className="mb-10">
                <CodeWindow />
              </div>

              <div className="space-y-2">
                <JourneyItem
                  year="2024"
                  title="Starting Point"
                  description="Began learning web development fundamentals including HTML, CSS, and JavaScript. Built small static projects to understand the basics."
                />
                <JourneyItem
                  year="2025"
                  title="Internship Experience"
                  description="Worked as a web development intern, gaining hands-on experience with real-world projects and improving frontend development skills."
                />
                <JourneyItem
                  year="2026"
                  title="MERN Stack Focus"
                  description="Currently focusing on MERN stack development, building full-stack applications with React, Node.js, Express, and MongoDB."
                />
                <JourneyItem
                  year="Present"
                  title="Growth & Practice"
                  description="Continuously building projects, improving problem-solving skills, and exploring modern web development best practices."
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
