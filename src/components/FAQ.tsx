"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wie läuft ein Projekt ab?",
    answer:
      "Nach einem kostenlosen Erstgespräch erstelle ich ein individuelles Angebot. Nach Freigabe beginnt die Design-Phase, gefolgt von der Entwicklung. Sie erhalten regelmäßige Updates und können Feedback geben. Nach Abnahme geht Ihre Website live.",
  },
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer:
      "Eine einfache One-Page Website ist in 1-2 Wochen fertig. Komplexere Projekte mit mehreren Seiten oder Web-Apps dauern 3-6 Wochen. Den genauen Zeitrahmen besprechen wir im Erstgespräch.",
  },
  {
    question: "Was kostet eine Website?",
    answer:
      "Die Preise starten ab 399€ für eine One-Page Website. Business-Pakete ab 899€ und Premium-Lösungen ab 1899€. Jedes Projekt ist individuell - kontaktieren Sie mich für ein genaues Angebot.",
  },
  {
    question: "Bieten Sie auch Wartung und Support an?",
    answer:
      "Ja! Ich biete Wartungspakete ab 49€/Monat an. Das beinhaltet regelmäßige Updates, Backups, Sicherheitschecks und technischen Support. So bleibt Ihre Website immer aktuell und sicher.",
  },
  {
    question: "Kann ich meine Website selbst bearbeiten?",
    answer:
      "Selbstverständlich! Bei den Business- und Premium-Paketen integriere ich ein benutzerfreundliches CMS (Content Management System), mit dem Sie Texte, Bilder und Inhalte selbst bearbeiten können - ohne Programmierkenntnisse.",
  },
  {
    question: "Was ist eine Progressive Web App (PWA)?",
    answer:
      "Eine PWA ist eine Website, die sich wie eine native App verhält. Sie kann auf dem Homescreen installiert werden, funktioniert offline und ist besonders schnell. Perfekt für Unternehmen, die eine App-ähnliche Erfahrung ohne App-Store-Gebühren möchten.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Häufig gestellte <span className="text-accent">Fragen</span>
          </h2>
          <p className="text-muted">
            Antworten auf die wichtigsten Fragen rund um meine Dienstleistungen
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass rounded-xl p-5 text-left hover:border-accent/50 transition-all group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium group-hover:text-accent transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-muted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
