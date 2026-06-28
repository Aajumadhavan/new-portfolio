"use client";

import React from "react";
import { experienceData } from "@/data/portfolioData";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Trajectory
            </span>
          </h2>
        </div>

        {/* Timeline Path container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/20 space-y-12">
          {experienceData.map((exp) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              key={exp.id}
              className="relative"
            >
              {/* Timeline Pin Orb */}
              <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 h-6 w-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                <FiBriefcase className="w-3 h-3 text-cyan-400" />
              </span>

              {/* Card Container */}
              <div className="glass-panel p-6 md:p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  {/* Company & Role */}
                  <div className="flex items-center gap-4">
                    {/* Logo Circle */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center font-display font-bold text-white text-sm">
                      {exp.logoPlaceholder}
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-display font-bold text-white leading-snug">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-cyan-400 font-display font-semibold">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-wrap md:flex-col items-start gap-3 md:gap-1.5 md:items-end text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-cyan-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-indigo-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-3.5 mb-8">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-slate-400 text-xs leading-relaxed flex items-start gap-2.5 font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Highlight tags */}
                <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-indigo-500/5 border border-indigo-500/10 text-cyan-400 text-[9px] font-semibold font-display"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
