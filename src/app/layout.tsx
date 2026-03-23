import type { Metadata } from "next";
import { Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import "./globals.css";

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
    languages: {
      en: siteUrl,
      es: `${siteUrl}/es`,
      fr: `${siteUrl}/fr`,
    },
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
  return (
    <html className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0B1C2E" />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        <link rel="alternate" hrefLang="fr" href={`${siteUrl}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const t = localStorage.getItem('cybit-theme');
            if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
          } catch(e) {}
        `}} />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
