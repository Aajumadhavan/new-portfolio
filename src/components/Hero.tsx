"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Magnetic from "./ui/Magnetic";

const rotatingTexts = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "Creative Design",
  "Content Marketing",
  "SEO",
  "Analytics",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleScrollClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030014] pt-24"
    >
      {/* Background Grid & Light Blobs */}
      <div className="absolute inset-0 z-0">
        {/* CSS Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Radial Gradients (Ambient glows) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Shape 1 */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[15%] w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500/10 to-cyan-500/20 border border-white/5 backdrop-blur-[2px]"
        />
        {/* Shape 2 */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500/5 to-indigo-500/15 border border-white/5 backdrop-blur-[2px]"
        />
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 font-display">
              Open to Projects & Hiring
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-none mb-6 text-white"
          >
            Performance Marketer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-glow">
              & Creative Designer
            </span>
          </motion.h1>

          {/* Rotating Text Area */}
          <div className="h-8 md:h-10 mb-6 flex items-center overflow-hidden font-display text-lg md:text-2xl font-bold">
            <span className="text-slate-400 mr-2 font-light">Specializing in</span>
            <div className="relative h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 text-cyan-400 font-bold tracking-wide whitespace-nowrap text-glow"
                >
                  {rotatingTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm text-slate-400 max-w-xl mb-10 leading-relaxed font-sans"
          >
            I create high-converting digital marketing campaigns, engaging creatives,
            SEO-focused content, and data-driven strategies that help brands scale dynamically.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <Magnetic range={0.15}>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollClick("portfolio");
                }}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 cursor-none border border-white/5"
              >
                View My Work
              </a>
            </Magnetic>

            <Magnetic range={0.15}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollClick("contact");
                }}
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-300 border border-white/10 hover:border-white/20 cursor-none"
              >
                Contact Me
              </a>
            </Magnetic>

            <a
              href="#"
              className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-wider underline underline-offset-4 decoration-cyan-400 transition-colors py-2 px-3 cursor-none"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Visual Placeholder */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-72 h-72 md:w-80 md:h-80"
          >
            {/* Rotating Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-cyan-400/20"
            />
            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 blur-2xl opacity-30 animate-pulse-slow" />
            
            {/* Visual Profile Placeholder */}
            <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.01] backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center">
              {/* Inner Glowing Orb */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 opacity-20 blur-xl" />
              
              {/* Symbolic Avatar Shape */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>

              <span className="relative z-10 text-sm font-display font-semibold tracking-wider text-white">
                Chaitanya Emani
              </span>
              <span className="relative z-10 text-[9px] uppercase font-bold tracking-widest text-cyan-400/80 mt-1">
                Data-Driven Creative
              </span>
              <div className="relative z-10 flex gap-3 mt-4">
                {/* Social links */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-none"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-none"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-none"
                  aria-label="Email"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => handleScrollClick("about")}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-none group"
          aria-label="Scroll to About"
        >
          <span className="text-[9px] uppercase tracking-widest font-bold font-display opacity-80 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1.5 transition-colors group-hover:border-white/40">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
