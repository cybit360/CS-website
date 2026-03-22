import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, MessageSquare, Shield, Zap, Target, CheckCircle } from "lucide-react";
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

const capabilities = [
  "FedRAMP Authorized",
  "CMMC Level 3",
  "ISO 27001 Certified",
  "SOC 2 Type II",
  "TS/SCI Cleared Staff",
  "Zero-Trust Architecture",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-navy overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[700px] h-[700px] bg-accent-cyan/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent-amber/6 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/4 rounded-full blur-[100px]" />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-accent-cyan/3 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-5 py-2 text-xs font-bold tracking-widest text-accent-cyan uppercase mb-8">
                <Shield className="w-3.5 h-3.5" />
                VETERAN-OWNED &bull; CLEARED PROFESSIONALS &bull; 20+ YEARS
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] mb-6">
                Mission-grade innovation for{" "}
                <span className="gradient-text">cyber, cloud, and AI.</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                We design, secure, and operate digital mission systems for government
                and enterprise&mdash;at scale and in compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/what-we-do/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan-dark transition-all text-base shadow-lg shadow-accent-cyan/25 hover:shadow-xl hover:shadow-accent-cyan/30 hover:-translate-y-0.5"
                >
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/what-we-do/capability-statements"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all text-base"
                >
                  <Download className="w-4 h-4" /> Capability Statement
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-accent-amber/30 text-accent-amber font-semibold rounded-lg hover:bg-accent-amber/10 hover:border-accent-amber/50 transition-all text-base"
                >
                  <MessageSquare className="w-4 h-4" /> Contact / RFP
                </Link>
              </div>
            </div>

            {/* Right side — capability badges */}
            <div className="hidden lg:flex flex-col gap-4 items-end">
              <div className="glass-card rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm">
                <h3 className="text-accent-cyan text-sm font-bold uppercase tracking-wider mb-4">Compliance & Certifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-cyan/70 shrink-0" />
                      <span className="text-white/70 text-sm">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-amber/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent-amber" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Active Programs</p>
                    <p className="text-white/50 text-xs">DoD, DoS, DHS, IC & more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 gradient-line" />
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Stats Bar */}
      <section className="relative navy-section">
        <div className="py-16 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2 transition-transform group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm font-medium uppercase tracking-wider">
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

      {/* Animated Gradient Divider */}
      <div className="gradient-line" />

      {/* CTA Banner */}
      <section className="relative py-20 navy-section overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-1.5 text-xs font-bold tracking-widest text-accent-cyan uppercase mb-6">
            <Zap className="w-3.5 h-3.5" />
            GET STARTED TODAY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to Modernize Your Mission?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            From Zero-Trust architecture to cloud migration, our experts are ready to help you
            accelerate outcomes while maintaining compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan-dark transition-all shadow-lg shadow-accent-cyan/25 hover:shadow-xl hover:shadow-accent-cyan/30 hover:-translate-y-0.5"
            >
              Request a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/capability-statements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all"
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
