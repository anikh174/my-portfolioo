"use client";

import React from "react";
import { motion } from "framer-motion";

const CodeWindow = () => {
  const code = `const developer = {
  name: "Anik Hossain",
  skills: ["React", "Next.js", "Motion"],
  passion: "Creating Digital Art",
  motto: "Code is Poetry",
  status: "Available for Hire"
};

function createMagic() {
  return developer.skills.map(s => \`Building with \${s}...\`);
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm group"
    >
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] text-foreground/30 uppercase tracking-widest ml-2">anik.js</span>
      </div>
      <div className="p-6 text-foreground/70 leading-relaxed whitespace-pre-wrap">
        <span className="text-primary">const</span> <span className="text-purple-400">developer</span> = {"{"}
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">name:</span> <span className="text-green-400">"Anik Hossain"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">skills:</span> [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Motion"</span>],
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">passion:</span> <span className="text-green-400">"Creating Digital Art"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">motto:</span> <span className="text-green-400">"Code is Poetry"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">status:</span> <span className="text-green-400">"Available for Hire"</span>
        <br />
        {"}"};
        <br /><br />
        <span className="text-primary">function</span> <span className="text-yellow-400">createMagic</span>() {"{"}
        <br />
        &nbsp;&nbsp;<span className="text-primary">return</span> developer.skills.<span className="text-yellow-400">map</span>(s =&gt; <span className="text-green-400">\`Building with {"${s}"}...\`</span>);
        <br />
        {"}"}
      </div>
    </motion.div>
  );
};

export default CodeWindow;
