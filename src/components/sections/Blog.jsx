"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "The Future of Frontend Development in 2026",
    excerpt: "Exploring the shift towards AI-driven interfaces and the evolution of framework architectures.",
    date: "May 12, 2026",
    readTime: "5 min",
    category: "Technology"
  },
  {
    title: "Mastering Framer Motion for Immersive UX",
    excerpt: "A deep dive into advanced animation techniques that make websites feel alive and responsive.",
    date: "Apr 28, 2026",
    readTime: "8 min",
    category: "Design"
  },
  {
    title: "Next.js 16: What's New and Why It Matters",
    excerpt: "Everything you need to know about the latest features in Next.js and how they impact performance.",
    date: "Mar 15, 2026",
    readTime: "6 min",
    category: "Development"
  }
];

const Blog = () => {

  return (
    <section id="blog" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-3">
              <BookOpen size={16} />
              <span className="text-sm font-semibold uppercase tracking-widest">Articles</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Latest <span className="text-gradient">Insights</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-primary hover:gap-3 gap-2 inline-flex items-center transition-all"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-primary/15 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-foreground/30 font-medium uppercase">
                  <Clock size={10} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-base font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/40 mb-6 leading-relaxed flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[10px] font-semibold text-foreground/25 uppercase tracking-wider">{post.date}</span>
                <span className="text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Read <ArrowRight size={10} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
