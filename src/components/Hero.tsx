"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="px-4 py-2 rounded-full glass text-sm text-muted flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            Verfügbar für neue Projekte
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Webseiten & Apps
          <br />
          <span className="text-accent">die funktionieren</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8"
        >
          Ich entwickle moderne, performante Weblösungen mit Fokus auf
          Benutzerfreundlichkeit und Qualität. Von der Idee bis zum Launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#kontakt"
            className="group px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            Projekt anfragen
          </a>
          <a
            href="#leistungen"
            className="px-8 py-4 glass rounded-lg hover:bg-card-hover transition-all duration-300 flex items-center gap-2"
          >
            Mehr erfahren
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Terminal-like decoration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass rounded-lg p-4 text-left font-mono text-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-muted">
              <span className="text-accent">$</span> npx create-project{" "}
              <span className="text-accent-secondary">--modern</span>{" "}
              <span className="text-foreground">my-awesome-app</span>
            </div>
            <div className="text-muted mt-1">
              <span className="text-accent">→</span> Initialisiere Next.js 14...
            </div>
            <div className="text-muted">
              <span className="text-accent">→</span> Konfiguriere Tailwind CSS...
            </div>
            <div className="text-accent mt-1">
              ✓ Projekt erfolgreich erstellt!
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
