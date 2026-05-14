"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Github, Linkedin, Atom, Code, Server, Rocket, Database, Flame, Wind, Layers, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MagneticButton = ({ children, className, href, ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      <motion.a href={href} className={className} {...props}>
        {children}
      </motion.a>
    </motion.div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const orbitIcons = [
    { name: "React", slug: "react", color: "61DAFB", radius: 160, duration: 20 },
    { name: "Next.js", slug: "nextdotjs", color: "FFFFFF", radius: 200, duration: 25 },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E", radius: 240, duration: 30 },
    { name: "Tailwind", slug: "tailwindcss", color: "06B6D4", radius: 180, duration: 22 },
    { name: "MongoDB", slug: "mongodb", color: "47A248", radius: 220, duration: 28 },
    { name: "Node.js", slug: "nodedotjs", color: "339933", radius: 260, duration: 35 },
    { name: "Firebase", slug: "firebase", color: "FFCA28", radius: 140, duration: 18 },
    { name: "Express", slug: "express", color: "FFFFFF", radius: 280, duration: 40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-mesh">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image 
            src="/hero-banner.png" 
            alt="Hero Background" 
            fill
            className="w-full h-full object-cover dark:brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </motion.div>
        {/* Animated Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-lg md:text-xl font-medium text-primary mb-4 tracking-[0.3em] uppercase">
              {greeting}, {t("hero.greeting")}
            </h2>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
              {t("hero.name")}
            </h1>
            <div className="text-2xl md:text-4xl font-bold text-foreground/70 mb-8 h-20">
              <Typewriter
                words={[
                  "MERN Stack Developer.",
                  "UI/UX Designer.",
                  "React & Node.js Developer.",
                  "Problem Solver."
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="text-lg text-foreground/60 max-w-lg mb-10 leading-relaxed font-medium">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <MagneticButton 
                href="#projects"
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] transition-all shadow-xl shadow-primary/20"
              >
                {t("hero.cta_view")} <ArrowRight size={20} />
              </MagneticButton>
              <MagneticButton 
                href="/MD_Anik_Resume.pdf" 
                download
                className="px-10 py-5 glass text-foreground rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/10 transition-all border border-foreground/5 shadow-xl"
              >
                Download CV <ArrowRight size={20} className="rotate-90" />
              </MagneticButton>
              <div className="flex gap-4">
                <MagneticButton 
                  href="https://github.com/anikh174" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 glass rounded-2xl hover:bg-primary/10 transition-all border border-foreground/5 shadow-lg"
                >
                  <Github size={24} />
                </MagneticButton>
                <MagneticButton 
                  href="https://linkedin.com/in/hossainanik" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 glass rounded-2xl hover:bg-primary/10 transition-all border border-foreground/5 shadow-lg"
                >
                  <Linkedin size={24} />
                </MagneticButton>
                <MagneticButton 
                  href="https://www.facebook.com/anik.hossain.174" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 glass rounded-2xl hover:bg-primary/10 transition-all border border-foreground/5 shadow-lg"
                >
                  <Facebook size={24} />
                </MagneticButton>
                <MagneticButton 
                  href="https://www.instagram.com/ah_mekail?igsh=aXJ0OWphZDA3MnVw" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 glass rounded-2xl hover:bg-primary/10 transition-all border border-foreground/5 shadow-lg"
                >
                  <Instagram size={24} />
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Profile & Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            {/* Orbiting Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              {orbitIcons.map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute",
                    width: item.radius * 2,
                    height: item.radius * 2,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                    className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl group cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`} 
                        alt={item.name}
                        className="w-6 h-6"
                      />
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest whitespace-nowrap">
                      {item.name}
                    </span>
                    {/* Glow */}
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Profile Image */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-2 border-white/10 p-2 glass shadow-2xl -mt-10"
            >
              <Image 
                src="/image2.jpeg" 
                alt="Anik Hossain" 
                fill
                className="w-full h-full object-cover object-top rounded-[2.5rem]"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-2">Scroll</p>
        <div className="w-[1px] h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
