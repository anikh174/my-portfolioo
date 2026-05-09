"use client";

import { motion } from "framer-motion";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import CommandPalette from "@/components/layout/CommandPalette";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Qualification from "@/components/sections/Qualification";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingResume from "@/components/ui/FloatingResume";
import ScrollToTop from "@/components/ui/ScrollToTop";
import HireMeBadge from "@/components/ui/HireMeBadge";
import ThemeCustomizer from "@/components/ui/ThemeCustomizer";

export default function Home() {
  return (
    <LoadingScreen>
      <SmoothScroll>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <main className="min-h-screen bg-mesh selection:bg-primary selection:text-white relative">
            <FloatingResume />
            <HireMeBadge />
            <ThemeCustomizer />
            <ScrollToTop />
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"
              />
              <motion.div
                animate={{
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"
              />
            </div>
            
            <Navbar />
            <CommandPalette />
            
            <Hero />
            <About />
            <Stats />
            <Skills />
            <Projects />
            <Experience />
            <Blog />
            <Qualification />
            <Contact />
            
            <Footer />
          </main>
        </motion.div>
      </SmoothScroll>
    </LoadingScreen>
  );
}
