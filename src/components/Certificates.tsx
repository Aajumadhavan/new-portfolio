"use client";

import React, { useState, useEffect } from "react";
import { certificatesData, Certificate } from "@/data/portfolioData";
import { FiEye, FiDownload, FiX, FiAward } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  // Close modal on Esc keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    if (activeCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCert]);

  return (
    <section id="certificates" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Licensure &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mt-4 leading-relaxed font-sans">
            Verifiable badges and credentials certifying my expertise in search engine advertising, 
            social campaigns, and B2B growth funnels.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-5 rounded-2xl flex flex-col justify-between group relative"
            >
              <div>
                {/* Visual Image container */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/5 bg-slate-950 mb-5">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-[#030014]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setActiveCert(cert)}
                      className="p-3 rounded-full bg-slate-900/90 border border-white/10 text-cyan-400 hover:text-white transition-colors cursor-none"
                      aria-label="Preview certificate"
                    >
                      <FiEye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 mb-6">
                  <FiAward className="text-cyan-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-display font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1 font-display uppercase tracking-wider font-bold">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[9px] uppercase font-bold tracking-wider text-white border border-white/5 flex items-center justify-center gap-1 cursor-none"
                >
                  <FiEye /> View
                </button>
                <a
                  href={cert.viewUrl || "#"}
                  target="_blank"
                  onClick={(e) => {
                    if (cert.viewUrl === "#") e.preventDefault();
                  }}
                  className="px-3 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/35 border border-indigo-500/20 text-[9px] uppercase font-bold tracking-wider text-cyan-400 flex items-center justify-center gap-1 cursor-none"
                >
                  <FiDownload /> Verifiable
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-[#030014]/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex flex-col justify-end"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close trigger */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 border border-white/15 text-white hover:bg-slate-800 transition-colors cursor-none z-10"
                aria-label="Close preview"
              >
                <FiX className="w-5 h-5" />
              </button>

              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                sizes="80vw"
                className="object-cover"
              />

              {/* Title Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <span className="text-[9px] uppercase font-bold tracking-widest text-cyan-400 font-display">
                  {activeCert.organization}
                </span>
                <h4 className="text-sm md:text-base font-display font-black text-white mt-1">
                  {activeCert.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
