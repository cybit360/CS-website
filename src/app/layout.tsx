import type { Metadata } from "next";
import { Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CybitSolutions",
    legalName: "CybitSolutions LLC",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/logo.png`,
    description:
      "Veteran-Owned, Minority-Owned IT firm delivering secure, scalable solutions for federal agencies and enterprise organizations. Specializing in cybersecurity, cloud computing, AI, and digital transformation across the GovCon landscape.",
    foundingDate: "2004",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
    naics: ["541512", "541511", "541513", "541519", "518210"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+17712331379",
        email: "info@cybitsolutions.net",
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        telephone: "+17712331379",
        email: "info@cybitsolutions.net",
        contactType: "sales",
        availableLanguage: "English",
        areaServed: "US",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    telephone: "+17712331379",
    email: "info@cybitsolutions.net",
    sameAs: [
      "https://www.linkedin.com/company/cybitsolutions",
    ],
    knowsAbout: [
      "Cybersecurity",
      "Cloud Computing",
      "IT Infrastructure",
      "Software Development",
      "DevOps",
      "Data Analytics",
      "Artificial Intelligence",
      "Digital Transformation",
      "Government IT",
      "Enterprise IT Services",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CybitSolutions",
    url: siteUrl,
    description:
      "Mission-Grade IT for Government & Enterprise",
    publisher: {
      "@type": "Organization",
      name: "CybitSolutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0B1C2E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
