"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

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
              className="group"
            >
              <div className="glass rounded-xl overflow-hidden hover:border-accent/50 transition-all">
                {/* Project Preview */}
                <div className="h-48 bg-gradient-to-br from-card to-card-hover relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-accent">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      className="p-3 rounded-full bg-background/80 hover:bg-accent hover:text-background transition-colors"
                      aria-label="Projekt ansehen"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-card text-xs text-muted"
                      >
                        {tag}
                      </span>
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
