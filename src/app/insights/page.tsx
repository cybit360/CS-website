import type { Metadata } from "next";
import Link from "next/link";
import {
  Newspaper,
  BookOpen,
  Calendar,
  ArrowRight,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Stay informed with CybitSolutions insights on cybersecurity, cloud computing, AI, and digital transformation trends across the federal IT landscape.",
};

const sections = [
  {
    title: "News & Insights",
    description:
      "Stay informed with the latest developments in cybersecurity, cloud computing, and digital transformation across the federal landscape.",
    href: "/insights/news",
    icon: Newspaper,
    imageVariant: "cybersecurity" as const,
  },
  {
    title: "Resource Library",
    description:
      "Access whitepapers, case studies, infographics, and videos that showcase our expertise and thought leadership.",
    href: "/insights/resources",
    icon: BookOpen,
    imageVariant: "data" as const,
  },
  {
    title: "Events & Webinars",
    description:
      "Join us at upcoming industry events and webinars to learn from our experts and connect with peers.",
    href: "/insights/events",
    icon: Calendar,
    imageVariant: "innovation" as const,
  },
];

export default function InsightsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Knowledge Hub
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Insights &amp; Resources
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore our latest thinking on technology, security, and innovation.
            From in-depth analysis to hands-on resources, discover what drives
            mission success.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Explore Our Knowledge Base
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Dive into curated content designed to keep you ahead of the curve
              in an ever-evolving technology landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                >
                  <PageImage variant={section.imageVariant} aspectRatio="video" className="rounded-none" />
                  <div className="p-8">
                  <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-cyan/20 transition">
                    <Icon className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {section.title}
                  </h3>
                  <p className="text-steel mb-6">{section.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent-cyan font-medium">
                    Browse <ArrowRight className="w-4 h-4" />
                  </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <TrendingUp className="w-10 h-10 text-accent-cyan mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-navy mb-4">
            Trending Topics
          </h2>
          <p className="text-steel max-w-2xl mx-auto mb-10">
            The subjects our experts and clients are focused on right now.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Zero Trust Architecture",
              "FedRAMP Compliance",
              "AI in Government",
              "Cloud Migration",
              "Supply Chain Security",
              "DevSecOps",
            ].map((topic) => (
              <span
                key={topic}
                className="px-5 py-2 bg-navy/5 text-navy rounded-full text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights delivered
            straight to your inbox.
          </p>
          <NewsletterForm variant="dark" className="max-w-lg mx-auto" />
        </div>
      </section>
    </main>
  );
}
