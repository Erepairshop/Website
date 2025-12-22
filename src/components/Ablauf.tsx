"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Erstgespräch",
    subtitle: "Erste Egyeztetés",
    description:
      "Wir besprechen Ihre Anforderungen, Ziele und Vorstellungen. Gemeinsam definieren wir den Projektumfang.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Konzept & Design",
    subtitle: "Tervezés",
    description:
      "Ich erstelle ein Konzept und Design-Mockups. Sie erhalten einen visuellen Eindruck vom Endprodukt.",
  },
  {
    number: "03",
    icon: Code,
    title: "Entwicklung",
    subtitle: "Fejlesztés",
    description:
      "Die technische Umsetzung erfolgt mit modernen Technologien. Regelmäßige Updates halten Sie informiert.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    subtitle: "Indítás",
    description:
      "Nach dem Launch biete ich Support und Wartung an. Ihr Projekt bleibt aktuell und performant.",
  },
];

export default function Ablauf() {
  return (
    <section id="ablauf" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
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
            So arbeite ich – <span className="text-accent">Ablauf</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Von der ersten Idee bis zum fertigen Projekt – transparent und strukturiert
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <div
                    className={`glass rounded-xl p-6 hover:border-accent/50 transition-all ${
                      index % 2 === 1 ? "md:ml-auto" : "md:mr-auto"
                    } max-w-md`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl font-bold text-accent/20">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className="text-xs text-muted">{step.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-muted text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center z-10 relative"
                  >
                    <step.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
