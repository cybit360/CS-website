import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Building2, Handshake, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "CybitSolutions serves government agencies, commercial enterprises, and partners with mission-critical IT solutions across defense, civilian, and private sectors.",
};

const sectors = [
  {
    title: "Government",
    href: "/who-we-serve/government",
    icon: Shield,
    description:
      "Mission-critical solutions for federal agencies, the Department of Defense, and intelligence community. FedRAMP authorized and CMMC compliant.",
    highlights: [
      "Department of Defense",
      "Federal Civilian Agencies",
      "Intelligence Community",
      "State & Local Government",
    ],
  },
  {
    title: "Commercial & Enterprise",
    href: "/who-we-serve/commercial",
    icon: Building2,
    description:
      "Scalable technology solutions for enterprises across financial services, healthcare, energy, and technology sectors.",
    highlights: [
      "Financial Services",
      "Healthcare & Life Sciences",
      "Energy & Utilities",
      "Technology Companies",
    ],
  },
  {
    title: "Strategic Alliances",
    href: "/who-we-serve/alliances",
    icon: Handshake,
    description:
      "Deep partnerships with leading technology providers and certifications that ensure best-in-class delivery for every engagement.",
    highlights: [
      "Cloud Providers",
      "Cybersecurity Partners",
      "Platform Integrations",
      "Industry Certifications",
    ],
  },
];

export default function WhoWeServePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Our Clients
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Who We Serve
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From federal agencies safeguarding national security to enterprises
            driving digital transformation, CybitSolutions delivers tailored
            technology services that meet the highest standards of performance
            and compliance.
          </p>
        </div>
      </section>

      {/* Sector Cards */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">
            Our Core Sectors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
            We bring deep domain expertise to every sector we serve, combining
            technical excellence with an understanding of each industry&apos;s
            unique challenges.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/10">
                  <sector.icon className="h-7 w-7 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  {sector.title}
                </h3>
                <p className="mt-3 text-steel">{sector.description}</p>

                <ul className="mt-5 space-y-2">
                  {sector.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-steel"
                    >
                      <ChevronRight className="h-4 w-4 text-accent-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={sector.href}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-accent-cyan transition hover:gap-3"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Why Organizations Choose CybitSolutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            Our clients trust us because we combine technical depth with
            operational discipline, delivering measurable outcomes on every
            engagement.
          </p>
          <div className="mt-12 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "15+", label: "Years of Mission Experience" },
              { stat: "200+", label: "Cleared Professionals" },
              { stat: "99.9%", label: "System Uptime Delivered" },
              { stat: "50+", label: "Active Federal Contracts" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl font-bold text-accent-cyan">
                  {item.stat}
                </p>
                <p className="mt-2 text-steel">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-cyan py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/80">
            Whether you&apos;re a government agency or a commercial enterprise,
            our team is ready to help you achieve your technology objectives.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3 font-semibold text-white transition hover:bg-navy/90"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
