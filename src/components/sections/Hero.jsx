"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Github, Linkedin, Facebook, Instagram, Download } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/anikh174", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/hossainanik", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/anik.hossain.174", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/ah_mekail", label: "Instagram" },
];

const orbitSkills = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
];

const Hero = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreeting("Good Morning");
    else if (h < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              {greeting}, I am
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              Anik Hossain.
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/50 mb-6 h-12">
              <Typewriter
                words={[
                  "MERN Stack Developer.",
                  "UI/UX Designer.",
                  "React & Node.js Developer.",
                  "Problem Solver.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>

            <p className="text-base text-foreground/50 max-w-lg mb-10 leading-relaxed">
              Crafting immersive digital experiences with modern technologies and a keen eye for design. I build websites that are fast, accessible, and beautiful.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="/MD_Anik_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:bg-foreground/5 transition-all duration-300"
              >
                <Download size={16} /> Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 glass rounded-xl flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/20 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile image with orbiting skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Orbit — desktop only, hidden on pointer:coarse via CSS */}
            <div className="orbit-ring absolute w-[22rem] h-[22rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
              {orbitSkills.map((skill, i) => {
                const angle = (360 / orbitSkills.length) * i;
                const rad = (angle * Math.PI) / 180;
                const radius = 50;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);

                return (
                  <div
                    key={skill.name}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="orbit-item w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 glass rounded-xl flex items-center justify-center border border-white/8 hover:border-primary/30 hover:scale-110 transition-all duration-200">
                      <img
                        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Profile image — above orbit ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10">
                <Image
                  src="/image2.jpeg"
                  alt="Anik Hossain"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/25 font-semibold">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
