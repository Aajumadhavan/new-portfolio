"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/data/portfolioData";
import { FiArrowUp, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Magnetic from "./ui/Magnetic";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
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
    <footer className="relative bg-[#02000a] border-t border-white/5 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Copy */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-2 group cursor-none mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform duration-300"></span>
            GROWTH<span className="text-indigo-400 font-light">LAB</span>
          </a>
          <p className="text-[10px] text-slate-500 font-sans">
            © {new Date().getFullYear()} GrowthLab. All rights reserved. Created for Chaitanya Emani.
          </p>
        </div>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-none font-display"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social hooks */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="p-2.5 rounded-full bg-white/5 border border-white/15 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-none"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="p-2.5 rounded-full bg-white/5 border border-white/15 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-none"
            aria-label="Instagram Profile"
          >
            <FiInstagram />
          </a>
          <a
            href="mailto:chaitanya.emani@example.com"
            className="p-2.5 rounded-full bg-white/5 border border-white/15 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-none"
            aria-label="Send Email"
          >
            <FiMail />
          </a>
        </div>
      </div>

      {/* Back to top scroll button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-35">
          <Magnetic range={0.25}>
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg border border-white/10 transition-transform cursor-none"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </Magnetic>
        </div>
      )}
    </footer>
  );
}
