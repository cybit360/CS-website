import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CybitSolutions | Mission-Grade IT for Government & Enterprise",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
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
      </body>
    </html>
  );
}
