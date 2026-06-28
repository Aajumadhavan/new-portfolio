"use client";

import React from "react";
import { servicesData } from "@/data/portfolioData";
import {
  FiTarget,
  FiCompass,
  FiUsers,
  FiShare2,
  FiEdit3,
  FiPenTool,
  FiImage,
  FiHash,
  FiFeather,
  FiSliders,
  FiBarChart2,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<any>> = {
  "google-ads": FiTarget,
  "meta-ads": FiCompass,
  "linkedin-ads": FiUsers,
  "social-media": FiShare2,
  creative: FiEdit3,
  "logo-design": FiPenTool,
  "poster-design": FiImage,
  "seo-writing": FiHash,
  "blog-writing": FiFeather,
  optimization: FiSliders,
  analytics: FiBarChart2,
  strategy: FiBriefcase,
};

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const cardVariants = {
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

  return (
    <section id="services" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            What I Can Do For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Your Brand
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mt-4 leading-relaxed font-sans">
            From hyper-targeted paid advertising campaigns to pixel-perfect visual brand identities, 
            I cover the full spectrum of digital performance and design.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || FiTarget;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="glass-panel glass-panel-hover p-6 rounded-xl flex flex-col items-start justify-between min-h-[220px]"
              >
                <div>
                  {/* Icon wrap */}
                  <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-cyan-400 mb-5 inline-block">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-display font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                </div>
                
                <button
                  className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-cyan-400 hover:text-indigo-400 transition-colors group cursor-none"
                >
                  Learn More
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
