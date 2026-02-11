"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Wrench, Search, Zap, Bot, Code, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webseiten",
    description: "Moderne, responsive Webseiten die auf allen Geräten perfekt aussehen und schnell laden.",
    features: ["Responsive Design", "SEO optimiert", "Performance fokussiert"],
  },
  {
    icon: Smartphone,
    title: "Web Apps / PWA",
    description: "Komplexe Webanwendungen mit modernen Frameworks und optimaler User Experience.",
    features: ["React / Next.js", "Progressive Web Apps", "Offline-fähig"],
  },
  {
    icon: Bot,
    title: "KI & Automatisierung",
    description: "Intelligente Lösungen mit künstlicher Intelligenz für mehr Effizienz in Ihrem Business.",
    features: ["Chatbots & Assistenten", "Prozessautomatisierung", "KI-Integration"],
  },
  {
    icon: Code,
    title: "Backend & APIs",
    description: "Robuste Server-Lösungen und Schnittstellen für Ihre Anwendungen.",
    features: ["REST APIs", "Datenbanken", "Cloud Services"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Optimierung für Suchmaschinen und maximale Ladegeschwindigkeit.",
    features: ["Core Web Vitals", "Keyword Optimierung", "Analytics"],
  },
  {
    icon: Wrench,
    title: "Wartung & Support",
    description: "Kontinuierliche Betreuung und Weiterentwicklung Ihrer digitalen Produkte.",
    features: ["Updates & Backups", "Bug Fixes", "Erweiterungen"],
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
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
            Meine <span className="text-accent">Leistungen</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Von der ersten Idee bis zum fertigen Produkt - ich biete alle Services für Ihre digitale Präsenz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:border-accent/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                    <Zap className="w-3 h-3 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
