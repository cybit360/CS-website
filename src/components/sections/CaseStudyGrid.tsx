import Link from "next/link";
import { ArrowRight, Building, Shield, Monitor, Lock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    slug: "dod-c3bm-abms",
    icon: Shield,
    client: "DoD Air Force & Space Force",
    title: "C3BM / ABMS (JADC2)",
    summary: "Secure, zero-trust cloud battle network enabling sensor-to-shooter decision advantage across air, space, and cyber.",
    highlights: ["Zero-Trust", "ICAM/PKI", "RMF/ATO", "Multi-domain C2"],
    outcome: "Continuous ATO readiness; faster mission data exchange",
  },
  {
    slug: "dos-cakmi",
    icon: Lock,
    client: "Department of State",
    title: "Consular Affairs Key Management (CAKMI)",
    summary: "Enterprise key management and database encryption modernization protecting global consular data 24x7.",
    highlights: ["HSM/PKI", "Oracle 19c", "CyberArk", "KMIP"],
    outcome: "Centralized keys; full DAR/DIM coverage",
  },
  {
    slug: "dos-sparta-psim",
    icon: Building,
    client: "Department of State",
    title: "Diplomatic Security SPARTA PSIM",
    summary: "Unified physical security (PSIM) for real-time situational awareness across worldwide facilities.",
    highlights: ["Genetec", "C-CURE", "2D/3D Geo-dashboards"],
    outcome: "Supported $73M modernization program",
  },
];

export function CaseStudyGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">Proven Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Selected Case Studies
          </h2>
          <p className="text-steel max-w-2xl mx-auto">
            Mission-critical programs delivered for the Department of Defense, Department of State, and federal agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/what-we-do/past-performance#${study.slug}`}
              className="group bg-cloud rounded-xl p-6 border border-border card-hover block"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy text-accent-cyan">
                  <study.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold text-steel uppercase tracking-wide">
                  {study.client}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-cyan transition-colors">
                {study.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed mb-4">
                {study.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.highlights.map((h) => (
                  <span key={h} className="text-xs bg-navy/5 text-navy px-2 py-1 rounded font-medium">
                    {h}
                  </span>
                ))}
              </div>
              <p className="text-accent-cyan text-sm font-semibold flex items-center">
                {study.outcome}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/what-we-do/past-performance"
            className="inline-flex items-center gap-2 text-accent-cyan font-semibold hover:underline"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
