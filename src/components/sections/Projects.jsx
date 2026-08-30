"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Travel Planner",
    category: "Fullstack",
    image:
      "https://media.foratravel.com/image/upload/v1729871097/contentful-migration/blogPosts/featuredImage/yjxsl5weafffj9suot5u.jpg",
    description:
      "An AI-powered travel planning web application that helps users generate personalized travel itineraries based on their destination, budget, travel style, and trip duration.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    live: "https://ai-travel-planer-eta.vercel.app/",
    githubClient: "https://github.com/anikh174/ai-travel-planer",
    githubServer: "https://github.com/anikh174/ai-travel-planer-server",
  },
  {
    id: 2,
    title: "TicketBari",
    category: "Fullstack",
    image: "https://statics.vinpearl.com/international-travel-0_1684821084.jpg",
    description:
      "A full-stack event ticket booking platform that allows users to discover, book, and manage event tickets online with role-based dashboards and Stripe payments.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
    ],
    live: "https://ticket-barii.vercel.app/",
    githubClient: "https://github.com/anikh174/ticket-barii",
    githubServer: "https://github.com/anikh174/ticketbari-server",
  },
  {
    id: 3,
    title: "Foundora",
    category: "Fullstack",
    image:
      "https://images.squarespace-cdn.com/content/v1/66cf5967accaa00b41ccfca5/1726877308142-H3IGBY0C0UZJW0YWBDVJ/camera-card-communication-1449080.jpg",
    description:
      "A full-stack crowdfunding platform that allows users to create fundraising campaigns, explore projects, and securely contribute through Stripe payments.",
    tech: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
    ],
    live: "https://foundora-snowy.vercel.app/",
    githubClient: "https://github.com/anikh174/foundora",
    githubServer: "https://github.com/anikh174/foundora-server",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Featured <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-sm text-foreground/40 mt-4 max-w-lg mx-auto">
            A selection of my recent works where design meets engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(project)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group hover:border-primary/15 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Desktop: hover overlay */}
                <div className="project-hover-overlay absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <ExternalLink size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">
                    Click Me for Details
                  </span>
                </div>

                {/* Mobile: always-visible button */}
                <div className="project-mobile-btn absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-center">
                  <span className="px-5 py-2 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-lg">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                  <Folder size={14} className="text-foreground/15" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-foreground/40 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-semibold text-foreground/30 uppercase tracking-wider"
                    >
                      #{t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-[9px] font-semibold text-primary/50">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[2000]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-0 z-[2001] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 lg:p-12"
              >
                <div className="glass-dark rounded-t-2xl sm:rounded-2xl w-full sm:max-w-3xl md:max-w-4xl max-h-[92vh] sm:max-h-[85vh] overflow-hidden flex flex-col">
                  {/* Close button */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                  >
                    <X size={16} />
                  </button>

                  {/* Image */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 shrink-0">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 sm:left-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {selected.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 tracking-tight">
                      {selected.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-foreground/50 leading-relaxed mb-5">
                      {selected.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selected.tech.map((t) => {
                          const slug = t
                            .toLowerCase()
                            .replace(/ /g, "")
                            .replace(/\.js/g, "dotjs");
                          return (
                            <span
                              key={t}
                              className="px-3 py-1.5 glass rounded-full text-[11px] font-semibold flex items-center gap-1.5"
                            >
                              <img
                                src={`https://cdn.simpleicons.org/${slug === "tailwindcss" ? "tailwindcss" : slug}`}
                                alt=""
                                className="w-3 h-3 brightness-200"
                                onError={(e) =>
                                  (e.target.style.display = "none")
                                }
                              />
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <a
                        href={selected.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 glass rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all"
                      >
                        Client <Github size={14} />
                      </a>
                      <a
                        href={selected.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 glass rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all"
                      >
                        Server <Github size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/anikh174?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View All on GitHub <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
