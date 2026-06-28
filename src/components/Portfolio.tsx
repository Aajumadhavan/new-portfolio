"use client";

import React, { useState, useEffect } from "react";
import { portfolioItems, PortfolioItem } from "@/data/portfolioData";
import ImageSlider from "./ui/ImageSlider";
import { FiX, FiExternalLink, FiFolder } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Logos",
  "Posters",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Close modal on Esc keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  const filteredItems = portfolioItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section id="portfolio" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Selected Works &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Creative Assets
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mt-4 leading-relaxed font-sans">
            Explore a curated selection of landing pages, marketing ads, visual identity packages, 
            and SEO-ranking articles designed to drive conversions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-none ${
                  isActive
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative glass-panel rounded-xl overflow-hidden cursor-none aspect-[4/3] flex flex-col justify-end"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Card Copy */}
                <div className="relative z-10 p-6 flex flex-col items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-cyan-400 font-display mb-2 px-2 py-0.5 rounded bg-cyan-900/40 border border-cyan-500/20">
                    {item.category}
                  </span>
                  <h3 className="text-sm md:text-base font-display font-bold text-white mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                    {item.description}
                  </p>
                  <span className="text-[10px] uppercase font-bold text-indigo-300 flex items-center gap-1 group-hover:underline underline-offset-4 font-display">
                    View Project Details
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Popup overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-[#030014]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#0b081e] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto relative shadow-2xl flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-none z-30"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Main Modal Contents */}
              <div className="p-6 md:p-8">
                {/* Visual Header Graphic/BeforeAfter */}
                <div className="mb-8 rounded-xl overflow-hidden border border-white/5 bg-slate-900/50">
                  {selectedItem.beforeAfter ? (
                    <ImageSlider
                      beforeImage={selectedItem.beforeAfter.before}
                      afterImage={selectedItem.beforeAfter.after}
                      beforeLabel="Concept Draft"
                      afterLabel="Final Design"
                    />
                  ) : selectedItem.pdfUrl ? (
                    /* PDF / Document display */
                    <div className="flex flex-col items-center justify-center p-12 bg-indigo-950/20 text-center">
                      <div className="p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-cyan-400 mb-4">
                        <FiFolder className="w-10 h-10" />
                      </div>
                      <h4 className="font-display font-bold text-white text-sm mb-2">
                        PDF Publication Attachment
                      </h4>
                      <p className="text-xs text-slate-400 max-w-sm mb-6 font-sans">
                        This project is accompanied by a full-length strategy guide report document.
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 cursor-none"
                        >
                          <FiExternalLink /> Open Document
                        </a>
                      </div>
                    </div>
                  ) : selectedItem.screenshots && selectedItem.screenshots.length > 1 ? (
                    /* Carousel representation */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedItem.screenshots.map((s, idx) => (
                        <div key={idx} className="relative aspect-video w-full">
                          <Image
                            src={s}
                            alt={`${selectedItem.title} screenshot ${idx}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover rounded-lg border border-white/5"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Default Image */
                    <div className="relative aspect-video w-full">
                      <Image
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  )}
                </div>

                {/* Info Metadata */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Brief details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-cyan-400 font-display">
                        Project Overview
                      </span>
                      <h3 className="text-xl font-display font-black text-white mt-1">
                        {selectedItem.title}
                      </h3>
                      <p className="text-slate-400 text-xs mt-3 leading-relaxed font-sans">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-white font-display uppercase tracking-wide">
                          The Challenge
                        </h4>
                        <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed font-sans">
                          {selectedItem.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white font-display uppercase tracking-wide">
                          The Solution
                        </h4>
                        <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed font-sans">
                          {selectedItem.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Sidebar statistics and metrics */}
                  <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display">
                        Client / Partner
                      </span>
                      <p className="text-white text-xs font-semibold font-display mt-1">
                        {selectedItem.client}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display">
                        Tools Employed
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {selectedItem.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-300 text-[9px] font-medium font-sans"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/5">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-cyan-400 font-display">
                        Campaign Outcome
                      </span>
                      <p className="text-slate-300 text-[11px] mt-2 leading-relaxed font-sans">
                        {selectedItem.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
