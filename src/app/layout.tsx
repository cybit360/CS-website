import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";

const siteUrl = "https://www.cybitsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CybitSolutions | Mission-Grade IT for Government & Enterprise",
    template: "%s | CybitSolutions",
  },
  description:
    "CybitSolutions delivers secure, scalable IT solutions for federal agencies and enterprise organizations. Specializing in cybersecurity, cloud, AI, and digital transformation across the GovCon landscape.",
  keywords: [
    "GovCon",
    "government IT",
    "cybersecurity",
    "cloud computing",
    "federal contractor",
    "digital transformation",
    "CybitSolutions",
  ],
  authors: [{ name: "CybitSolutions" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CybitSolutions",
    title: "CybitSolutions | Mission-Grade IT for Government & Enterprise",
    description:
      "CybitSolutions delivers secure, scalable IT solutions for federal agencies and enterprise organizations. Specializing in cybersecurity, cloud, AI, and digital transformation.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "CybitSolutions - Mission-Grade IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CybitSolutions | Mission-Grade IT for Government & Enterprise",
    description:
      "CybitSolutions delivers secure, scalable IT solutions for federal agencies and enterprise organizations. Specializing in cybersecurity, cloud, AI, and digital transformation.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "theme-color": "#0B1C2E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CybitSolutions",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description:
      "Veteran-Owned, Minority-Owned IT firm delivering secure, scalable solutions for federal agencies and enterprise organizations.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+17712331379",
      email: "info@cybitsolutions.net",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/cybitsolutions",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0B1C2E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Skip link for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
