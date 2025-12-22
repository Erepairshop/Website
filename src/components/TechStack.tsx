"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "Tools & Other",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
    ],
  },
];

const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "📦" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Vercel", icon: "▲" },
];

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Moderne Technologien für maximale Performance und Skalierbarkeit
          </p>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-2xl hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all cursor-default">
                {tech.icon}
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted whitespace-nowrap">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-6 text-accent">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name}</span>
                      <span className="text-muted">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-card rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + index * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
