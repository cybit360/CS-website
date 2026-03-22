import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProofPoints } from "@/components/sections/ProofPoints";
import { FeaturedDomains } from "@/components/sections/FeaturedDomains";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { InsightsTiles } from "@/components/sections/InsightsTiles";
import { CareersStrip } from "@/components/sections/CareersStrip";

export const metadata: Metadata = {
  title: "CybitSolutions | Mission-Grade IT for Government & Enterprise",
  description:
    "CybitSolutions delivers secure, scalable IT solutions for federal agencies and enterprise organizations. Cybersecurity, cloud, AI, and digital transformation.",
};

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "6", label: "Major Defense & State Programs" },
  { value: "10K+", label: "Users Supported Globally" },
  { value: "100%", label: "Compliance Track Record" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.04]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-accent-cyan rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent-amber rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent-cyan uppercase mb-6">
              VETERAN-OWNED &bull; CLEARED PROFESSIONALS &bull; 20+ YEARS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Mission-grade innovation for{" "}
              <span className="text-accent-cyan">cyber, cloud, and AI.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              We design, secure, and operate digital mission systems for government
              and enterprise&mdash;at scale and in compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/what-we-do/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan-dark transition-colors text-lg shadow-lg shadow-accent-cyan/20"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/what-we-do/capability-statements"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                <Download className="w-5 h-5" /> Capability Statement
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent-amber/40 text-accent-amber font-semibold rounded-lg hover:bg-accent-amber/10 transition-colors text-lg"
              >
                <MessageSquare className="w-5 h-5" /> Contact / RFP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Stats Bar */}
      <section className="relative bg-navy">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-amber to-accent-cyan" />
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <ProofPoints />

      {/* Featured Domains */}
      <FeaturedDomains limit={3} />

      {/* Case Studies */}
      <CaseStudyGrid />

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      {/* CTA Banner */}
      <section className="relative py-16 bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Mission?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
            From Zero-Trust architecture to cloud migration, our experts are ready to help you
            accelerate outcomes while maintaining compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan/90 transition-colors"
            >
              Request a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/capability-statements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Download className="w-5 h-5" /> Download Capability Statement
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <InsightsTiles />

      {/* Careers Strip */}
      <CareersStrip />
    </>
  );
}
