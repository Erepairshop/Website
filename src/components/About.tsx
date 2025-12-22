"use client";

import { motion } from "framer-motion";
import { Code, Laptop, Rocket, Zap } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Laptop },
  { name: "Node.js", icon: Rocket },
  { name: "REST APIs", icon: Zap },
  { name: "Git / GitHub", icon: Code },
];

export default function About() {
  return (
    <section id="ueber-mich" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Über <span className="text-accent">mich</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ein kurzer Einblick in meine Arbeit und Fähigkeiten
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hallo, ich bin <span className="text-accent">Developer</span>
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              Ich entwickle moderne Webanwendungen und Webseiten mit Fokus auf
              Performance, Benutzerfreundlichkeit und sauberen Code. Mit
              mehrjähriger Erfahrung in der Webentwicklung helfe ich
              Unternehmen und Startups, ihre digitale Präsenz zu optimieren.
            </p>
            <p className="text-muted mb-6 leading-relaxed">
              Mein Tech-Stack umfasst moderne Technologien wie Next.js, React,
              TypeScript und Tailwind CSS. Ich lege großen Wert auf
              responsive Design und optimale User Experience.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-muted">Projekte</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted">Zufriedenheit</div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-4 text-center hover:border-accent/50 transition-colors"
              >
                <skill.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
