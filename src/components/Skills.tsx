"use client";

import React from "react";
import { skillsData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Core Competencies &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Toolbox
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mt-4 leading-relaxed font-sans">
            A comprehensive overview of my digital marketing specialization, branding creative capabilities, 
            and daily workspace software suites.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData.map((cat, idx) => (
            <motion.div
              variants={categoryVariants}
              key={idx}
              className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col justify-start"
            >
              <h3 className="text-xs font-display font-bold text-white mb-6 uppercase tracking-wider border-b border-white/5 pb-3">
                {cat.category}
              </h3>
              
              {/* Pills Wrap */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, itemIdx) => (
                  <motion.span
                    variants={pillVariants}
                    key={itemIdx}
                    className="px-3.5 py-2 text-[10px] font-semibold rounded-lg bg-white/5 hover:bg-indigo-600/10 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all duration-300 shadow-sm cursor-none"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
