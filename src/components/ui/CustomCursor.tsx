"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer">("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")
      ) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border border-cyan-400/40 bg-cyan-400/5 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: cursorType === "pointer" ? 1.6 : 1,
          borderColor: cursorType === "pointer" ? "rgba(79, 70, 229, 0.8)" : "rgba(6, 182, 212, 0.4)",
          backgroundColor: cursorType === "pointer" ? "rgba(79, 70, 229, 0.15)" : "rgba(6, 182, 212, 0.05)",
        }}
      />
      
      {/* Ambient background light following cursor */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden opacity-25">
        <motion.div
          className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-600/10 to-cyan-500/10 blur-[130px]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        />
      </div>
    </>
  );
}
