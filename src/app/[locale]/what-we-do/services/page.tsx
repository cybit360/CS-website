import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnimatedServicesHero,
  AnimatedDomainsGrid,
} from "@/components/animations/AnimatedServicesContent";

export const metadata: Metadata = {
  title: "Services & Solutions",
  description:
    "Explore CybitSolutions' 10 mission-critical IT service domains including cybersecurity, cloud, AI, data analytics, and digital transformation for government and enterprise.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedServicesHero />

      {/* Domains Grid */}
      <AnimatedDomainsGrid />

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
