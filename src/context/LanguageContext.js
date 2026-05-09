"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      blog: "Blog",
      more: "More",
      qualification: "Qualification"
    },
    hero: {
      greeting: "Hello, I am",
      name: "Anik Hossain.",
      description: "Crafting immersive digital experiences with modern technologies and a keen eye for design. I build websites that are fast, accessible, and beautiful.",
      cta_view: "View Projects",
      cta_talk: "Let's Talk"
    },
    about: {
      title: "My Story",
      subtitle: "Transforming Ideas Into Digital Reality.",
      description1: "My journey into web development started with curiosity, guided by friends from my institute who introduced me to programming. What began as exploration soon turned into a strong passion for building interactive web experiences. In 2025, during my 8th semester, I joined an internship at ~BD Calling Academy, where I worked with the MERN stack and gained practical experience in real-world projects, team collaboration, and modern web development practices. To further strengthen my skills, I enrolled in ~Programming Hero, where I am currently improving my full-stack development abilities, focusing on building scalable and production-ready applications. As a MERN-focused developer, I aim to create clean, responsive, and meaningful digital experiences that combine design and functionality.",
      description2: "As a frontend developer, I don't just write code; I craft digital interfaces that tell a story. I believe that every pixel has a purpose.",
      exp_years: "Years Experience",
      projects_done: "Projects Completed",
      journey: "My Journey"
    },
    skills: {
      title: "Technical Arsenal.",
      subtitle: "Expertise"
    },
    projects: {
      title: "Featured Creations.",
      description: "A selection of my recent works where design meets engineering."
    },
    contact: {
      title: "Let's Create Something Legendary.",
      subtitle: "Have a project in mind? Or just want to say hi? My inbox is always open.",
      send: "Send Message",
      sent: "Message Sent!"
    }
  },
  bn: {
    nav: {
      about: "সম্পর্কে",
      projects: "প্রকল্প",
      skills: "দক্ষতা",
      experience: "অভিজ্ঞতা",
      contact: "যোগাযোগ",
      blog: "ব্লগ",
      more: "আরো",
      qualification: "যোগ্যতা"
    },
    hero: {
      greeting: "হ্যালো, আমি",
      name: "অনিক হোসেন।",
      description: "আধুনিক প্রযুক্তি এবং ডিজাইনের সমন্বয়ে অসাধারণ ডিজিটাল অভিজ্ঞতা তৈরি করি। আমি দ্রুত, সহজলভ্য এবং সুন্দর ওয়েবসাইট তৈরি করি।",
      cta_view: "প্রকল্প দেখুন",
      cta_talk: "কথা বলি"
    },
    about: {
      title: "আমার গল্প",
      subtitle: "ধারণাকে ডিজিটাল বাস্তবতায় রূপান্তর করা।",
      description1: "ওয়েব ডেভেলপমেন্টের জগতে আমার যাত্রা শুরু হয়েছিল একটি সহজ 'হ্যালো ওয়ার্ল্ড' দিয়ে যা পরে ইন্টারেক্টিভ অভিজ্ঞতা তৈরির প্রতি এক তীব্র আবেগে পরিণত হয়েছে।",
      description2: "একজন ফ্রন্টেন্ড ডেভেলপার হিসেবে, আমি শুধু কোড লিখি না; আমি এমন ডিজিটাল ইন্টারফেস তৈরি করি যা একটি গল্প বলে। আমি বিশ্বাস করি প্রতিটি পিক্সেলের একটি উদ্দেশ্য আছে।",
      exp_years: "বছরের অভিজ্ঞতা",
      projects_done: "প্রকল্প সম্পন্ন",
      journey: "আমার যাত্রা"
    },
    skills: {
      title: "প্রযুক্তিগত অস্ত্রাগার।",
      subtitle: "দক্ষতা"
    },
    projects: {
      title: "নির্বাচিত সৃষ্টি।",
      description: "আমার সাম্প্রতিক কাজের একটি সংগ্রহ যেখানে ডিজাইন এবং ইঞ্জিনিয়ারিংয়ের মিলন ঘটে।"
    },
    contact: {
      title: "চলুন কিছু অসাধারণ তৈরি করি।",
      subtitle: "আপনার মনে কি কোনো প্রকল্প আছে? নাকি শুধু হ্যালো বলতে চান? আমার ইনবক্স সর্বদা উন্মুক্ত।",
      send: "বার্তা পাঠান",
      sent: "বার্তা পাঠানো হয়েছে!"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const t = (path) => {
    const keys = path.split(".");
    let result = translations[lang];
    for (const key of keys) {
      if (result) result = result[key];
    }
    return result || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
