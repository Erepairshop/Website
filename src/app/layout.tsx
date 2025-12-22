import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Borota.dev | Webseiten & Apps die funktionieren",
  description: "Professionelle Webentwicklung - Moderne, responsive Webseiten, Web Apps, Mobile Apps. Next.js, React, TypeScript Entwickler.",
  keywords: ["Webentwicklung", "Web Apps", "Mobile Apps", "Next.js", "React", "TypeScript", "Developer"],
  authors: [{ name: "Borota.dev" }],
  openGraph: {
    title: "Borota.dev | Webseiten & Apps die funktionieren",
    description: "Professionelle Webentwicklung - Moderne, responsive Webseiten, Web Apps, Mobile Apps.",
    url: "https://borota.dev",
    siteName: "Borota.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
