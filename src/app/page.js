"use client";

import { motion } from "framer-motion";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
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

export default function Home() {
  return (
    <LoadingScreen>
      <SmoothScroll>
        <main className="min-h-screen selection:bg-primary selection:text-white">
          <FloatingResume />
          <ScrollToTop />
          <Navbar />
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
      </SmoothScroll>
    </LoadingScreen>
  );
}
