"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PolygonFrame from "@/components/ui/PolygonFrame";

export default function ModernHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 bg-black"
      style={{
        backgroundImage: "radial-gradient(circle at 10px 10px, rgba(60, 60, 60, 0.2) 2px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Glow effect following mouse */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] pointer-events-none"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
        }}
      />

      {/* Welcome badge */}
      <motion.div
        className="absolute top-16 md:top-24 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-gray-800 text-white font-medium flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
        Welcome to my universe
      </motion.div>

      {/* UI Magic badge */}
      <motion.div
        className="absolute top-32 md:top-40 right-[calc(50%-30px)] px-4 py-2 bg-purple-900/80 backdrop-blur-md rounded-md text-white font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        UI Magic
      </motion.div>

      {/* Clean Code badge */}
      <motion.div
        className="absolute top-40 md:top-48 right-[calc(50%-180px)] px-4 py-2 bg-blue-900/80 backdrop-blur-md rounded-md text-white font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Clean Code
      </motion.div>

      {/* Main text and polygon frame */}
      <div className="relative z-10 text-center">
        {/* Polygon Frame */}
        <motion.div
          className="mb-8 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PolygonFrame size={240}>
            <span className="text-white text-2xl font-bold">Developer</span>
          </PolygonFrame>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello
        </motion.h1>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Corner dots for the name box */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-gray-500 rounded-full" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-500 rounded-full" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gray-500 rounded-full" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gray-500 rounded-full" />
          
          <h2 className="text-5xl md:text-7xl font-bold text-white px-6 py-2 bg-black/80">
            I&apos;m Kinh Bach
          </h2>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="px-6 py-3 bg-gray-800/80 backdrop-blur-md rounded-md text-white font-medium inline-block">
            JavaScript Developer
          </span>
        </motion.div>
      </div>
    </section>
  );
}
