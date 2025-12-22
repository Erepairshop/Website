"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "eRepairShop",
    description: "Professionelle Webseite für einen Elektronik-Reparaturservice. Modernes Design mit Online-Terminbuchung und Preisübersicht.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    link: "https://erepairshop.de",
    featured: true,
  },
  {
    title: "PunktePass",
    description: "Digitales Treue-Punkte System als iOS App. Kunden sammeln Punkte und lösen Prämien ein - papierlos und modern.",
    tags: ["React Native", "iOS", "Mobile App", "UX Design"],
    link: "#",
    featured: true,
  },
];

export default function Projekte() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projekte" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ausgewählte <span className="text-accent">Projekte</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Einige meiner bisherigen Arbeiten und Referenzen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="glass rounded-xl overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]">
                {/* Project Preview */}
                <div className="h-56 bg-gradient-to-br from-card to-card-hover relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Logo/Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-28 h-28 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center backdrop-blur-sm border border-accent/30"
                    >
                      <span className="text-5xl font-bold gradient-text">
                        {project.title.charAt(0)}
                      </span>
                    </motion.div>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-xs backdrop-blur-sm border border-accent/30">
                      <Star className="w-3 h-3 fill-accent" />
                      Featured
                    </div>
                  )}

                  {/* Hover overlay with link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm"
                  >
                    <motion.a
                      href={project.link}
                      target={project.link !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-medium"
                    >
                      Projekt ansehen
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-muted text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full bg-card text-xs text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted text-sm">
            Weitere Projekte auf Anfrage verfügbar
          </p>
        </motion.div>
      </div>
    </section>
  );
}
