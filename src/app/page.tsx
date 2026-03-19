import Link from "next/link";
import { ArrowRight, Download, MessageSquare, Shield, Zap, Target } from "lucide-react";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProofPoints } from "@/components/sections/ProofPoints";
import { FeaturedDomains } from "@/components/sections/FeaturedDomains";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { InsightsTiles } from "@/components/sections/InsightsTiles";
import { CareersStrip } from "@/components/sections/CareersStrip";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "5", label: "Major DoD/DoS Programs" },
  { value: "10K+", label: "Users Supported Globally" },
  { value: "100%", label: "Compliance Track Record" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-accent-cyan rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent-amber rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent-cyan text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
              <Shield className="w-4 h-4" />
              Veteran-Owned &bull; Cleared Professionals &bull; 20+ Years
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan-dark transition-colors text-lg"
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-steel text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <ProofPoints />

      {/* Featured Domains */}
      <FeaturedDomains limit={3} />

      {/* Case Studies */}
      <CaseStudyGrid />

      {/* CTA Banner */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready to Modernize Your Mission?
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From Zero-Trust architecture to cloud migration, our experts are ready to help you
            accelerate outcomes while maintaining compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              Request a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/capability-statements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-cloud transition-colors"
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
