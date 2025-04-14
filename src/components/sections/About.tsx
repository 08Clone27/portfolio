"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "19", label: "Years Old" },
    { value: "2023", label: "Started Studying in Ireland" },
    { value: "CS2", label: "Favorite Game" },
    { value: "Engineering", label: "Future Major" },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-foreground/80 mb-4">
              My name is Duong Tuan Minh Nguyen. I am nineteen years old and my birthday is on August 27.
              I&apos;ve lived in Hanoi, Vietnam 🇻🇳 for my whole life before I went to Ireland to live and
              study for at least the next 5 years.
            </p>
            <p className="text-foreground/80 mb-4">
              I am studying in the International Foundation Program in Marino Institute of Education.
              After completing my foundations year, I intend to study engineering (or Computer Science)
              in Trinity College of Dublin.
            </p>
            <p className="text-foreground/80 mb-4">
              Besides studying, I really like playing games, movies and sports. The game I play the most
              is Counter Strike: Global Offensive (CS2) and games about sports (basketball, soccer, etc.)🎮.
              The movies that left the most impression on me are Forrest Gump and 12 Angry Man🎞️.
            </p>
            <p className="text-foreground/80">
              My favorite basketball player is Giannis Antetokounmpo🏀 and my favorite soccer player is
              Iker Casillas⚽. I hope that through this portfolio, you will better understand my education
              and development during my time studying here.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-lg text-center"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h4>
                <p className="text-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
