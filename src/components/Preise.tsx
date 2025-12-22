"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Send } from "lucide-react";

const packages = [
  {
    name: "Starter",
    subtitle: "Für kleine Projekte",
    price: "ab 499",
    unit: "€",
    description: "Einmalig",
    features: [
      "One-Page Website",
      "Responsive Design",
      "Kontaktformular",
      "SEO Grundoptimierung",
      "1 Korrekturschleife",
    ],
    popular: false,
  },
  {
    name: "Business",
    subtitle: "Am beliebtesten",
    price: "ab 999",
    unit: "€",
    description: "Einmalig",
    features: [
      "Bis zu 5 Seiten",
      "Responsive Design",
      "Kontaktformular",
      "SEO Optimierung",
      "CMS Integration",
      "3 Korrekturschleifen",
      "Google Analytics",
    ],
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "Für Unternehmen",
    price: "ab 1999",
    unit: "€",
    description: "Einmalig",
    features: [
      "Unbegrenzte Seiten",
      "Custom Design",
      "Web App / PWA",
      "Backend Integration",
      "API Entwicklung",
      "Unbegrenzte Korrekturen",
      "Priority Support",
      "Wartung (3 Monate)",
    ],
    popular: false,
  },
];

const additionalServices = [
  { name: "Wartung & Support", price: "ab 49€/Monat" },
  { name: "SEO Optimierung", price: "ab 199€" },
  { name: "Logo Design", price: "ab 149€" },
  { name: "Hosting Setup", price: "ab 99€" },
];

export default function Preise() {
  return (
    <section id="preise" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
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
            Transparente <span className="text-accent">Preise</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Faire Preise für professionelle Webentwicklung. Jedes Projekt ist individuell – kontaktieren Sie mich für ein genaues Angebot.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative rounded-2xl p-6 ${
                pkg.popular
                  ? "bg-gradient-to-b from-accent/20 to-accent/5 border-2 border-accent"
                  : "glass"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-background text-sm font-medium rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Beliebt
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted">{pkg.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-xl text-muted">{pkg.unit}</span>
                </div>
                <p className="text-sm text-muted">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 ${pkg.popular ? "text-accent" : "text-accent"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  pkg.popular
                    ? "bg-accent text-background hover:bg-accent/90"
                    : "bg-card hover:bg-card-hover border border-border"
                }`}
              >
                <Send className="w-4 h-4" />
                Anfragen
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Weitere Leistungen</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="px-4 py-2 glass rounded-lg text-sm"
              >
                <span className="text-muted">{service.name}:</span>{" "}
                <span className="text-accent font-medium">{service.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-6">
            Alle Preise verstehen sich zzgl. MwSt. • Individuelle Angebote auf Anfrage
          </p>
        </motion.div>
      </div>
    </section>
  );
}
