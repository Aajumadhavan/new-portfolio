"use client";

import React from "react";
import { statsData } from "@/data/portfolioData";
import StatCounter from "./ui/StatCounter";

const timelineHighlights = [
  { role: "Engineer Trainee", company: "Nireerkshan Engineering", duration: "2020 - 2021" },
  { role: "Academic Associate", company: "Vedantu", duration: "2021 - 2022" },
  { role: "Freelancer", company: "Self-Employed", duration: "2022 - 2023" },
  { role: "Performance Marketer", company: "Codingmart Technologies", duration: "2024 - Present" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Blending Analytics With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Creative Storytelling
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Image Placeholder */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="relative aspect-square w-full rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.01] backdrop-blur-md flex flex-col justify-center items-center p-8 text-center">
              {/* Abstract decorative graphic */}
              <div className="w-48 h-48 rounded-full border border-dashed border-cyan-400/20 flex items-center justify-center animate-[spin_40s_linear_infinite] mb-6">
                <div className="w-36 h-36 rounded-full border border-indigo-400/20 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-sm" />
                </div>
              </div>
              <p className="text-xs text-slate-400 italic font-display">
                "Growth is not just about ad spend; it's about connecting compelling design with high-intent target optimization."
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-6" />
            </div>
          </div>

          {/* Right Column: Profile & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-md md:text-lg font-display font-bold text-white mb-4">
              Who I Am
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8">
              I am a Performance Marketer and Creative Designer with an engineering foundation. 
              My transition from engineering to digital marketing enables me to bring deep analytical 
              precision, campaign tracking metrics, and A/B test methodologies into brand campaigns 
              while designing aesthetic visual content. I specialize in building, optimization, and scaling 
              search/social ad accounts that produce measurable, positive ROAS.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {statsData.map((stat) => (
                <div
                  key={stat.id}
                  className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-black text-cyan-400 text-glow">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mt-2 font-display">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Timeline Highlighting */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-300 font-display mb-6">
                Professional Journey
              </h4>
              <div className="relative pl-6 border-l border-white/10 space-y-6">
                {timelineHighlights.map((hl, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Indicator */}
                    <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400 border border-[#030014] ring-4 ring-cyan-400/20" />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center">
                      <div>
                        <h5 className="text-xs font-bold text-white font-display">
                          {hl.role}
                        </h5>
                        <span className="text-[10px] text-slate-400">
                          {hl.company}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 mt-1 sm:mt-0 font-display">
                        {hl.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
