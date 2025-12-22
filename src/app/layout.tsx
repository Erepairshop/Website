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

  // Verification (add your codes here)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
              price: "499",
              priceCurrency: "EUR",
              minPrice: "499",
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
              price: "999",
              priceCurrency: "EUR",
              minPrice: "999",
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
              price: "1999",
              priceCurrency: "EUR",
              minPrice: "1999",
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
