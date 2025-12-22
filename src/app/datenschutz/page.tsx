import { Code2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Borota.dev",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Code2 className="w-6 h-6 text-accent" />
            <span>
              Borota<span className="text-accent">.dev</span>
            </span>
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Wer ist verantwortlich für die Datenerfassung?
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              entnehmen.
            </p>

            <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
              Wie erfassen wir Ihre Daten?
            </h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p className="mt-2">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Hosting
            </h2>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              6. Kontakt
            </h2>
            <p>
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns
              wenden:
              <br />
              E-Mail: kontakt@borota.dev
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
