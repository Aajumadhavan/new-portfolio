"use client";

import React from "react";
import { caseStudiesData } from "@/data/portfolioData";
import StatCounter from "./ui/StatCounter";
import { FiTrendingUp } from "react-icons/fi";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Proven Performance & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Measurable Growth
            </span>
          </h2>
        </div>

        {/* Case Studies Layout */}
        <div className="space-y-12">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Media Column */}
              <div className="lg:col-span-5 relative aspect-video lg:aspect-auto min-h-[300px]">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#030014] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest text-cyan-400 bg-[#030014]/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md font-display">
                  {cs.category}
                </span>
              </div>

              {/* Copy & Metrics Column */}
              <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-display font-black text-white mb-6">
                    {cs.title}
                  </h3>

                  {/* Problem & Solution block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-300 font-display mb-2">
                        The Challenge
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">
                        {cs.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-display mb-2">
                        The Solution
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tools list */}
                  <div className="flex flex-wrap gap-1.5 items-center mb-8">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mr-2 font-display">
                      Tech stack:
                    </span>
                    {cs.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300 text-[9px] font-sans"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Highlights */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                  {cs.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display flex items-center gap-1">
                        <FiTrendingUp className="text-cyan-400" />
                        {metric.label}
                      </span>
                      <span className="text-xl md:text-2xl font-display font-black text-cyan-400 text-glow mt-2">
                        <StatCounter
                          value={Math.abs(metric.value)}
                          prefix={metric.prefix || ""}
                          suffix={metric.suffix}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
