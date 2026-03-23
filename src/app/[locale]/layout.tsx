import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ToastProvider } from "@/components/ui/Toast";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const siteUrl = "https://www.cybitsolutions.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Provide all messages to client components
  const messages = await getMessages();

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
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
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

        {/* Skip link for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <ToastProvider>
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </ToastProvider>

        <Footer />
        <ChatWidget />
        <CookieConsent />
        <ScrollToTop />
        <ServiceWorkerRegistration />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
