import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Globe,
  Building,
  Eye,
  FileCheck,
  Lock,
} from "lucide-react";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Government",
  description:
    "CybitSolutions delivers mission-critical IT solutions for the Department of Defense, federal civilian agencies, intelligence community, and state and local government.",
};

const agencies = [
  {
    icon: Shield,
    title: "Department of Defense",
    description:
      "End-to-end IT modernization, cybersecurity operations, and cloud migration for DoD components and combatant commands.",
    capabilities: [
      "Zero-trust architecture implementation",
      "Cloud migration to IL4/IL5 environments",
      "Cybersecurity operations center support",
      "Data analytics and AI/ML platforms",
      "DevSecOps pipeline engineering",
    ],
  },
  {
    icon: Globe,
    title: "Department of State",
    description:
      "Secure communications, global infrastructure management, and digital diplomacy solutions for overseas missions and domestic operations.",
    capabilities: [
      "Worldwide IT infrastructure management",
      "Secure communications systems",
      "Identity and access management",
      "Cloud-hosted collaboration platforms",
      "ITAR-compliant data handling",
    ],
  },
  {
    icon: Building,
    title: "Federal Civilian Agencies",
    description:
      "Digital transformation, application modernization, and managed services for civilian agencies pursuing mission excellence.",
    capabilities: [
      "Legacy application modernization",
      "Enterprise cloud adoption",
      "Managed IT services and help desk",
      "Agile software development",
      "Data governance and analytics",
    ],
  },
  {
    icon: Eye,
    title: "Intelligence Community",
    description:
      "Specialized technology solutions for intelligence operations, including secure analytics platforms and mission-critical systems.",
    capabilities: [
      "Advanced data analytics platforms",
      "Secure multi-domain solutions",
      "Machine learning for SIGINT/GEOINT",
      "High-performance computing environments",
      "Continuous monitoring and threat detection",
    ],
  },
];

const contractVehicles = [
  { name: "GSA MAS", description: "Multiple Award Schedule" },
  { name: "CIO-SP3", description: "Chief Information Officer \u2013 Solutions and Partners 3" },
  { name: "SEWP V", description: "Solutions for Enterprise-Wide Procurement" },
  { name: "ALLIANT 2", description: "Government-Wide Acquisition Contract" },
  { name: "STARS III", description: "8(a) STARS III GWAC" },
  { name: "OASIS+", description: "One Acquisition Solution for Integrated Services" },
];

const complianceBadges = [
  { icon: Lock, label: "FedRAMP", detail: "High Baseline Authorized" },
  { icon: Shield, label: "CMMC", detail: "Level 2 Certified" },
  { icon: FileCheck, label: "FISMA", detail: "Fully Compliant" },
  { icon: Globe, label: "ITAR", detail: "Registered & Compliant" },
];

export default function GovernmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Government Solutions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Trusted by federal agencies and the defense community, CybitSolutions delivers secure, compliant, and mission-ready technology
            services that protect national interests.
          </p>
        </div>
      </section>

      {/* Government Visual */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <PageImage variant="government" aspectRatio="wide" />
        </div>
      </section>

      {/* Agency Sections */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">
            Agencies &amp; Mission Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
            We support the full spectrum of government missions with specialized
            teams and proven delivery frameworks.
          </p>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {agencies.map((agency) => (
              <div
                key={agency.title}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10">
                  <agency.icon className="h-6 w-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  {agency.title}
                </h3>
                <p className="mt-2 text-steel">{agency.description}</p>
                <ul className="mt-5 space-y-2">
                  {agency.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm text-steel"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">
            Contract Vehicles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
            Streamlined procurement through established government-wide and
            agency-specific contract vehicles.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contractVehicles.map((cv) => (
              <div
                key={cv.name}
                className="rounded-xl border border-border bg-cloud p-6 text-center card-hover"
              >
                <p className="text-lg font-bold text-accent-cyan">{cv.name}</p>
                <p className="mt-1 text-sm text-steel">{cv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">
            Compliance &amp; Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
            Our rigorous compliance posture ensures your data and operations meet
            the most demanding regulatory requirements.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {complianceBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center rounded-xl border border-border bg-white p-6 text-center shadow-sm card-hover"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                  <badge.icon className="h-7 w-7 text-accent-cyan" />
                </div>
                <p className="mt-4 text-lg font-bold text-navy">
                  {badge.label}
                </p>
                <p className="mt-1 text-sm text-steel">{badge.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-cyan py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Partner with a Proven Government Contractor
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/80">
            Let us help you modernize operations, strengthen cybersecurity, and
            deliver on your agency&apos;s mission.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3 font-semibold text-white transition hover:bg-navy/90"
          >
            Contact Our Government Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
