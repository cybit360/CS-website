import Link from "next/link";
import { ArrowRight, Briefcase, Award, FileText, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    icon: Briefcase,
    title: "Services & Solutions",
    description:
      "Explore our 10 mission-critical IT domains spanning cybersecurity, cloud, AI, data analytics, and more. Each domain is backed by 20+ years of federal and enterprise delivery.",
    href: "/what-we-do/services",
  },
  {
    icon: Award,
    title: "Past Performance",
    description:
      "Review proven results across DoD, DoS, and federal programs. From JADC2 battle networks to global key management, our track record speaks for itself.",
    href: "/what-we-do/past-performance",
  },
  {
    icon: FileText,
    title: "Capability Statements",
    description:
      "Download our capability statements, review core competencies, NAICS codes, and certifications that qualify CybitSolutions for your next contract.",
    href: "/what-we-do/capability-statements",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description:
      "Learn how our Discovery-Design-Build-Operate methodology drives innovation, accelerates delivery, and ensures mission success from day one.",
    href: "/what-we-do/our-approach",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            What We Do
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            End-to-end IT solutions engineered for national security, federal
            compliance, and enterprise scale. From strategy to operations, we
            deliver mission-grade outcomes.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-xl p-8 border border-border card-hover block"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-navy/5 text-accent-cyan mb-6 group-hover:bg-accent-cyan/10 transition-colors">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h2>
                <p className="text-steel leading-relaxed mb-6">
                  {item.description}
                </p>
                <span className="inline-flex items-center text-accent-cyan font-semibold">
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Discuss Your Mission?
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Our team of cleared professionals is ready to architect your next
            solution. Contact us for a consultation or submit an RFP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
