"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const VietnamFlag = dynamic(() => import("@/components/ui/VietnamFlag"), {
  ssr: false,
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Vietnam Interactive Ethnicity Map",
      description: "An interactive map showing the distribution of ethnic groups across Vietnam, with detailed information about each ethnic group.",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://vi-interactive-ethnicity-map.vercel.app/",
      github: "https://github.com/08Clone27/vi-interactive-ethnicity-map",
      color: "#d4380d",
    },
  ];

  const filters = ["All", "Web Development"];

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
            Check out my project that I've been working on.
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
            className="grid grid-cols-1 md:grid-cols-1 max-w-2xl mx-auto gap-8"
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
                <div className="relative h-48 overflow-hidden flex items-center justify-center">
                  <VietnamFlag
                    width={400}
                    height={267}
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
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      className="inline-block flex-1 text-center py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                    <a
                      href={project.github}
                      className="inline-block flex-1 text-center py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
