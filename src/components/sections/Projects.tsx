"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const PlaceholderImage = dynamic(() => import("@/components/ui/PlaceholderImage"), {
  ssr: false,
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments.",
      category: "Web Development",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      link: "#",
      color: "#3b82f6",
    },
    {
      title: "Portfolio Website",
      description: "A beautiful portfolio website with smooth animations and responsive design.",
      category: "UI/UX Design",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      link: "#",
      color: "#8b5cf6",
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with real-time updates.",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
      color: "#10b981",
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using machine learning models.",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      link: "#",
      color: "#f59e0b",
    },
    {
      title: "Crypto Dashboard",
      description: "A real-time cryptocurrency dashboard with price tracking and portfolio management.",
      category: "Web Development",
      technologies: ["Vue.js", "D3.js", "Node.js", "WebSockets"],
      link: "#",
      color: "#ef4444",
    },
    {
      title: "Travel Blog",
      description: "A travel blog with a custom CMS for managing content and media.",
      category: "UI/UX Design",
      technologies: ["Next.js", "Sanity.io", "Tailwind CSS"],
      link: "#",
      color: "#3b82f6",
    },
  ];

  const filters = ["All", "Web Development", "UI/UX Design", "Mobile App", "AI/ML"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            Check out some of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-background hover:bg-primary/10"
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
                  <PlaceholderImage
                    width={400}
                    height={200}
                    text={project.title}
                    bgColor={project.color}
                    textColor="#ffffff"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block w-full text-center py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
