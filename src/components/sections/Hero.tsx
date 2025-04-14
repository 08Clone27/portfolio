"use client";

import { motion } from "framer-motion";
import PolygonFrame from "@/components/ui/PolygonFrame";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 z-0"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-lg font-medium text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm
          </motion.span>

          <motion.div
            className="relative py-6 px-8 mb-2 border-2 border-primary/30 rounded-lg overflow-hidden backdrop-blur-sm bg-background/30 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
          >
            {/* Shooting star effects */}
            <motion.div
              className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{ top: '30%', left: '-80px' }}
              animate={{
                left: ['-10%', '110%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute h-0.5 w-12 bg-gradient-to-r from-transparent via-accent to-transparent"
              style={{ top: '60%', left: '-50px' }}
              animate={{
                left: ['-10%', '110%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 7,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute h-0.5 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent"
              style={{ top: '45%', left: '-60px' }}
              animate={{
                left: ['-10%', '110%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
                delay: 3.5,
              }}
            />

            {/* Twinkling stars */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5,
                }}
              />
            ))}
            <motion.div
              className="text-4xl md:text-6xl font-bold tracking-wide font-sans relative py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text">
                <span className="font-sans">Duong Tuan Minh Nguyen</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl font-medium mb-6 text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Engineering Student
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/80 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a 19-year-old student from Vietnam studying in Ireland. Passionate about engineering
            and computer science, I'm excited to share my journey and growth through this portfolio.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-96 h-96 md:w-[500px] md:h-[500px] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <PolygonFrame
              size={500}
              imageSrc="/images/avatar.jpg"
              frameWidth={30}
              holeSize={0.6}
              className="cursor-pointer"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
