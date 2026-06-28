"use client";

import React from "react";

const timelineHighlights = [
  { role: "Chartered Engineer Trainee", company: "Nireerkshan Engineering Services", duration: "2023 - 2024" },
  { role: "Academic Associate & DTP", company: "Vedantu", duration: "2024 - 2025" },
  { role: "Performance Marketer & Creative Designer", company: "Codingmart Technologies", duration: "2024 - Present" },
  { role: "Freelancer (Digital Marketer)", company: "Sun Associate", duration: "2025" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
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

        <div className="flex flex-col justify-center">
          <h3 className="text-md md:text-lg font-display font-bold text-white mb-4 text-center">
            Who I Am
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            My journey began with an engineering background, building strong analytical and problem-solving skills before expanding into desktop publishing and academic operations. Today, I combine creativity with strategy to design impactful visuals, create SEO-driven content, manage Meta Ads campaigns, and optimize digital experiences using WordPress, AI tools, and analytics. I’m passionate about helping brands grow through innovative, data-driven marketing solutions. </p>

          {/* Timeline Highlighting */}
          <div className="max-w-2xl mx-auto w-full">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-300 font-display mb-6 text-center">
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
    </section>
  );
}
