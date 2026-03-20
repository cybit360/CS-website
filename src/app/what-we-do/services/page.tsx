import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { domains } from "@/components/sections/FeaturedDomains";

export const metadata: Metadata = {
  title: "Services & Solutions",
  description:
    "Explore CybitSolutions' 10 mission-critical IT service domains including cybersecurity, cloud, AI, data analytics, and digital transformation for government and enterprise.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Our Capabilities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Services &amp; Solutions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ten mission-critical IT domains delivering end-to-end capabilities
            for government and enterprise. Each domain is staffed by cleared
            professionals with deep federal experience.
          </p>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {domains.map((domain) => (
              <Link
                key={domain.slug}
                href={`/what-we-do/services/${domain.slug}`}
                className="group bg-white rounded-xl p-6 border border-border card-hover block"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan mb-4 group-hover:bg-accent-cyan/10 transition-colors">
                  <domain.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-cyan transition-colors">
                  {domain.title}
                </h2>
                <p className="text-steel text-sm leading-relaxed mb-4">
                  {domain.description}
                </p>
                <span className="inline-flex items-center text-accent-cyan text-sm font-semibold">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
            Our domains work together seamlessly. Talk to an architect about a
            cross-domain solution tailored to your mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan-dark transition-colors"
            >
              Request a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/capability-statements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Download Capability Statement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
