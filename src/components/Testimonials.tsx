"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/data/portfolioData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[currentIndex];

  return (
    <section className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Client & Recruiter{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Endorsements
            </span>
          </h2>
        </div>

        {/* Carousel Wrap */}
        <div className="relative min-h-[250px] flex flex-col justify-between items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 relative w-full mb-8"
            >
              {/* Quote Mark Decoration */}
              <span className="absolute top-6 left-6 text-6xl text-cyan-500/10 font-serif leading-none select-none pointer-events-none">
                “
              </span>

              <p className="text-slate-300 text-xs md:text-sm italic leading-relaxed mb-8 relative z-10 font-sans">
                "{active.message}"
              </p>

              {/* Avatar + Author details */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/15">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-display">
                    {active.name}
                  </h4>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-cyan-400/80 mt-1 font-display">
                    {active.role}, {active.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-none"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-none ${
                    currentIndex === idx ? "w-6 bg-cyan-400" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-none"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
