"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.02,
            y: -mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
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
          <span className="px-4 py-2 rounded-full glass text-sm text-muted flex items-center gap-2 glow-hover">
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
          <span className="text-accent glow-text">die funktionieren</span>
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
            className="group px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 btn-glow glow-hover"
          >
            <Code2 className="w-5 h-5" />
            Projekt anfragen
          </a>
          <a
            href="#leistungen"
            className="px-8 py-4 glass rounded-lg hover:bg-card-hover transition-all duration-300 flex items-center gap-2 card-glow"
          >
            Mehr erfahren
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Terminal-like decoration with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="mt-16 max-w-2xl mx-auto perspective-1000"
        >
          <div className="glass rounded-lg p-4 text-left font-mono text-sm card-glow">
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
