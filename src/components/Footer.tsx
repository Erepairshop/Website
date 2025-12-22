"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Leistungen", href: "#leistungen" },
  { name: "Projekte", href: "#projekte" },
  { name: "Preise", href: "#preise" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/logo-white.png"
              alt="Borota.dev"
              className="h-10 w-auto"
            />
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-accent/50 hover:text-accent transition-all"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} Borota.dev. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="/impressum"
              className="text-muted hover:text-accent transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-muted hover:text-accent transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
