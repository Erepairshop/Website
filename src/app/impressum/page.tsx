import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen von Borota.dev - Webentwicklung von Erik Borota in Lauingen, Deutschland.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/impressum",
  },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Borota.dev"
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Erik Borota
              <br />
              Siedlungsring 51
              <br />
              89415 Lauingen
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Kontakt
            </h2>
            <p>
              Telefon: +49 176 98479520
              <br />
              E-Mail: info@borota.dev
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE308874569
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Erik Borota
              <br />
              Siedlungsring 51
              <br />
              89415 Lauingen
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Haftungsausschluss
            </h2>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Borota.dev. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
