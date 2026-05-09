"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "The Future of Frontend Development in 2026",
    excerpt: "Exploring the shift towards AI-driven interfaces and the evolution of framework architectures.",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    title: "Mastering Framer Motion for Immersive UX",
    excerpt: "A deep dive into advanced animation techniques that make websites feel alive and responsive.",
    date: "April 28, 2026",
    readTime: "8 min read",
    category: "Design"
  },
  {
    title: "Next.js 16: What's New and Why It Matters",
    excerpt: "Everything you need to know about the latest features in Next.js and how they impact performance.",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Development"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-primary mb-4">
              <BookOpen size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Latest <span className="text-gradient">Insights.</span>
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="text-primary font-bold flex items-center gap-2 group"
          >
            View All Posts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-foreground/40 font-medium uppercase">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-foreground/50 text-sm mb-8 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="text-xs font-bold text-foreground/30 uppercase tracking-widest">
                {post.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
