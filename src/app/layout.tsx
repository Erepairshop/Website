import type { Metadata } from "next";
import "./globals.css";

const siteConfig = {
  name: "Borota.dev",
  title: "Borota.dev | Professionelle Webentwicklung in Deutschland",
  description:
    "Professionelle Webentwicklung & App-Entwicklung in Lauingen. Moderne Webseiten, Web Apps und Mobile Apps mit Next.js, React & TypeScript. ✓ Faire Preise ✓ Persönliche Betreuung",
  url: "https://borota.dev",
  author: "Erik Borota",
  email: "info@borota.dev",
  phone: "+49 176 98479520",
  address: {
    street: "Siedlungsring 51",
    city: "Lauingen",
    postalCode: "89415",
    country: "Deutschland",
  },
};

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: siteConfig.title,
    template: "%s | Borota.dev",
  },
  description: siteConfig.description,
  keywords: [
    "Webentwicklung",
    "Webdesign",
    "Web Apps",
    "Mobile Apps",
    "Next.js",
    "React",
    "TypeScript",
    "Webentwickler",
    "Freelancer",
    "Lauingen",
    "Deutschland",
    "Responsive Design",
    "SEO Optimierung",
    "Website erstellen lassen",
    "Professionelle Website",
    "Webseite erstellen",
    "App Entwicklung",
    "Frontend Entwicklung",
    "Full Stack Entwickler",
    "Webdesigner Lauingen",
    "Webentwickler Augsburg",
    "Webentwickler Bayern",
    "Homepage erstellen lassen",
    "Webseite für Unternehmen",
    "PWA Entwicklung",
    "KI Integration",
    "Chatbot Entwicklung",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.name,

  // Canonical URL
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Borota.dev - Professionelle Webentwicklung",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@borotadev",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "mjR9O3XgDid8NgKQOayrCtv9u5NuFpHMi690aILhO24",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Other
  category: "technology",
  classification: "Business",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "de-DE",
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#person`,
      },
      description: siteConfig.description,
      inLanguage: "de-DE",
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "DE",
      },
      sameAs: [
        // Add social media URLs here
        // "https://github.com/borotadev",
        // "https://linkedin.com/in/borotadev",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      description:
        "Professionelle Webentwicklung und App-Entwicklung. Moderne Webseiten, Web Apps und Mobile Apps.",
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.5667,
        longitude: 10.4333,
      },
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Webentwicklung Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Starter Paket",
              description: "One-Page Website mit Responsive Design",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "399",
              priceCurrency: "EUR",
              minPrice: "399",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Paket",
              description: "Bis zu 5 Seiten mit CMS Integration",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "899",
              priceCurrency: "EUR",
              minPrice: "899",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Premium Paket",
              description: "Unbegrenzte Seiten mit Web App / PWA",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "1899",
              priceCurrency: "EUR",
              minPrice: "1899",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Wie läuft ein Projekt ab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nach einem kostenlosen Erstgespräch erstelle ich ein individuelles Angebot. Nach Freigabe beginnt die Design-Phase, gefolgt von der Entwicklung. Sie erhalten regelmäßige Updates und können Feedback geben. Nach Abnahme geht Ihre Website live.",
          },
        },
        {
          "@type": "Question",
          name: "Wie lange dauert die Erstellung einer Website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eine einfache One-Page Website ist in 1-2 Wochen fertig. Komplexere Projekte mit mehreren Seiten oder Web-Apps dauern 3-6 Wochen. Den genauen Zeitrahmen besprechen wir im Erstgespräch.",
          },
        },
        {
          "@type": "Question",
          name: "Was kostet eine Website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Die Preise starten ab 399€ für eine One-Page Website. Business-Pakete ab 899€ und Premium-Lösungen ab 1899€. Jedes Projekt ist individuell - kontaktieren Sie mich für ein genaues Angebot.",
          },
        },
        {
          "@type": "Question",
          name: "Bieten Sie auch Wartung und Support an?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja! Ich biete Wartungspakete ab 49€/Monat an. Das beinhaltet regelmäßige Updates, Backups, Sicherheitschecks und technischen Support. So bleibt Ihre Website immer aktuell und sicher.",
          },
        },
        {
          "@type": "Question",
          name: "Kann ich meine Website selbst bearbeiten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selbstverständlich! Bei den Business- und Premium-Paketen integriere ich ein benutzerfreundliches CMS (Content Management System), mit dem Sie Texte, Bilder und Inhalte selbst bearbeiten können - ohne Programmierkenntnisse.",
          },
        },
        {
          "@type": "Question",
          name: "Was ist eine Progressive Web App (PWA)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eine PWA ist eine Website, die sich wie eine native App verhält. Sie kann auf dem Homescreen installiert werden, funktioniert offline und ist besonders schnell. Perfekt für Unternehmen, die eine App-ähnliche Erfahrung ohne App-Store-Gebühren möchten.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//wa.me" />
      </head>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
