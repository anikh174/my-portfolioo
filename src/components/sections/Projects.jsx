"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Folder, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    id: 1,
    title: "SkillSphere",
    category: "Web",
    image: "https://couponswala.com/blog/wp-content/uploads/2022/01/SKILLSHARE-free-courses.jpg",
    description: "A curated collection of my technical abilities, tools, and technologies I use to build modern, interactive, and scalable web experiences.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    live: "https://skillsphere-flame.vercel.app/",
    github: "https://github.com/anikh174/SkillSphere"
  },
  {
    id: 2,
    title: "KeenKeeper",
    category: "Web",
    image: "https://pbs.twimg.com/media/HGbWzapbwAAmYfj.jpg",
    description: "Next-gen e-commerce interface focusing on smooth transitions and glassmorphism.",
    tech: ["React", "Styled Components", "Tailwind"],
    live: "https://keenkeeper-next.vercel.app/",
    github: "https://github.com/anikh174/KeenKeeper"
  },
  {
    id: 3,
    title: "DevNexus Platform",
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    description: "A collaborative platform for developers to share code snippets and projects.",
    tech: ["Next.js", "Node.js", "MongoDB", "Prisma"],
    live: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Digi-tools",
    category: "Web",
    image: "https://www.ssl2buy.com/wp-content/uploads/2023/08/discover-the-best-al-tools-best-practices-to-use-it-safely.jpg",
    description: "A collection of modern AI-powered utilities designed to enhance productivity, automate tasks, and deliver intelligent assistance with speed and simplicity.",
    tech: ["React", "Tailwind"],
    live: " https://digi-tools-174.netlify.app/",
    github: "https://github.com/anikh174/a6-digi-tools"
  }
];

const categories = ["All", "Web", "UI", "Fullstack"];

const ProjectCard = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative glass rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="relative aspect-video overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div className="flex gap-4" style={{ transform: "translateZ(75px)" }}>
            <div className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors">
              <ExternalLink size={20} />
            </div>
            <div className="p-3 glass text-white rounded-full hover:bg-primary transition-colors">
              <Github size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-8" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-primary/20">
            {project.category}
          </span>
          <Folder size={18} className="text-foreground/20" />
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-foreground/50 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] text-foreground/40 font-medium">#{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* ... (Header and filters remain) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              {t("projects.title")}
            </h2>
            <p className="text-foreground/50 max-w-xl">
              {t("projects.description")}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 glass p-2 rounded-2xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "hover:bg-white/5 text-foreground/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[2000] cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-4 md:inset-20 glass-dark border border-white/10 rounded-[3rem] z-[2001] overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                
                <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto flex flex-col justify-center">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <Filter className="rotate-45" size={24} />
                  </button>
                  
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    {selectedProject.category} Project
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                    {selectedProject.title}
                  </h3>
                  <p className="text-foreground/60 text-lg mb-10 leading-relaxed">
                    {selectedProject.description}
                    <br /><br />
                    This project is a focused exploration of modern frontend architecture, with strong emphasis on accessibility, performance optimization, and delivering a smooth, intuitive user experience. It leverages the latest development tools and best practices to build a clean, efficient, and high-quality web application.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-12">
                    {selectedProject.tech.map((t) => {
                      const slug = t.toLowerCase().replace(/ /g, "").replace(/\.js/g, "dotjs");
                      return (
                        <span key={t} className="px-4 py-2 glass rounded-full text-xs font-bold border border-white/5 flex items-center gap-2">
                          <Image 
                            src={`https://cdn.simpleicons.org/${slug === 'tailwindcss' ? 'tailwindcss' : slug}`} 
                            alt={t}
                            width={16}
                            height={16}
                            className="w-4 h-4 brightness-200"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={selectedProject.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a 
                      href={selectedProject.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 glass border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                      GitHub <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        <div className="mt-20 text-center">
          <motion.a
            href="https://github.com/anikh174?tab=repositories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
          >
            View All Projects on GitHub <Github size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
