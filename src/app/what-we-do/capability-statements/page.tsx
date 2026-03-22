import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  FileText,
  Building2,
  Lock,
  BadgeCheck,
  Target,
  Users,
  Layers,
  ShieldCheck,
  Zap,
  Code,
} from "lucide-react";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statements",
  description:
    "Download CybitSolutions capability statements. View our NAICS codes, core competencies, certifications, clearances, and contract vehicles.",
};

const coreCompetencies = [
  {
    title: "Cybersecurity & Zero Trust",
    description:
      "NIST RMF, continuous ATO, zero-trust architecture, SIEM/SOAR, vulnerability management, and penetration testing for federal environments.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Multi-cloud design and migration across AWS GovCloud, Azure Government, and hybrid environments at IL4/IL5/IL6 classification levels.",
  },
  {
    title: "AI & Data Analytics",
    description:
      "AIOps, machine learning operations, predictive analytics, NLP solutions, and data lake architecture for mission intelligence.",
  },
  {
    title: "Enterprise IT Modernization",
    description:
      "Legacy system transformation, Microsoft 365 GCC High, ServiceNow ITSM, digital workflow automation, and enterprise monitoring.",
  },
  {
    title: "Identity & Access Management",
    description:
      "PIV/CAC lifecycle management, PKI/HSM infrastructure, biometric enrollment, and ICAM solutions aligned to federal standards.",
  },
  {
    title: "DevSecOps & Software Engineering",
    description:
      "CI/CD pipeline automation, containerized microservices, Kubernetes orchestration, and secure software development lifecycle.",
  },
  {
    title: "Physical Security & PSIM",
    description:
      "Video surveillance integration, access control systems, intrusion detection, and unified security operations center platforms.",
  },
  {
    title: "Managed Services & Support",
    description:
      "24/7 global service desk, Tier 1-3 engineering support, SLA-driven operations, and proactive infrastructure monitoring.",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Mission-First Approach",
    description:
      "Every solution designed around operational outcomes, not just technology deployment.",
  },
  {
    icon: Users,
    title: "Cleared Workforce at Scale",
    description:
      "50+ professionals with active clearances from Secret to TS/SCI ready for immediate deployment.",
  },
  {
    icon: Layers,
    title: "Full-Spectrum IT Coverage",
    description:
      "10 integrated service domains covering the complete technology lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Compliance",
    description:
      "Built-in RMF, FedRAMP, CMMC, and FISMA compliance frameworks in every engagement.",
  },
  {
    icon: Zap,
    title: "Rapid ATO Achievement",
    description:
      "Proven methodology for accelerated Authority to Operate across cloud and on-premise environments.",
  },
  {
    icon: Code,
    title: "Agile & DevSecOps Native",
    description:
      "Security embedded in every sprint, not bolted on after the fact.",
  },
];

const pastPerformancePrograms = [
  {
    title: "DoD C3BM / ABMS",
    summary:
      "Command, Control, Communications, and Battle Management supporting the Advanced Battle Management System for joint all-domain operations.",
  },
  {
    title: "DoS CAKMI",
    summary:
      "Consolidated Agency Key Management Infrastructure providing enterprise PKI and cryptographic services for the Department of State.",
  },
  {
    title: "DoS NGEM",
    summary:
      "Next Generation Enterprise Management delivering global IT service management and enterprise monitoring across 270+ diplomatic posts.",
  },
  {
    title: "DoS SPARTA PSIM",
    summary:
      "Physical Security Information Management integrating surveillance, access control, and intrusion detection for diplomatic facilities worldwide.",
  },
  {
    title: "DoD RAPIDS / DEERS",
    summary:
      "Real-time Automated Personnel Identification System and Defense Enrollment Eligibility Reporting System supporting identity management for millions of service members.",
  },
  {
    title: "Microsoft Ecosystem",
    summary:
      "Enterprise-wide Microsoft 365 GCC High, Azure Government, and hybrid cloud deployments across multiple federal agencies.",
  },
];

const certifications = [
  {
    category: "Security Clearances",
    icon: Lock,
    items: [
      "Facility Clearance (FCL) - Top Secret",
      "Personnel clearances through TS/SCI",
      "Cleared staff across all 10 service domains",
      "Continuous evaluation program compliance",
    ],
  },
  {
    category: "Industry Certifications",
    icon: Award,
    items: [
      "ISO 27001 - Information Security Management",
      "ISO 20000 - IT Service Management",
      "CMMI Level 3 - Development & Services",
      "SOC 2 Type II Compliance",
    ],
  },
  {
    category: "Staff Certifications",
    icon: BadgeCheck,
    items: [
      "CISSP, CISM, CEH, CompTIA Security+",
      "AWS Solutions Architect, Azure Administrator",
      "PMP, ITIL v4, Scrum Master (CSM)",
      "ServiceNow, Splunk, Kubernetes (CKA)",
    ],
  },
];

const naicsCodes = [
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541513", label: "Computer Facilities Management Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "518210", label: "Data Processing & Hosting Services" },
  { code: "541330", label: "Engineering Services" },
  { code: "561210", label: "Facilities Support Services" },
  { code: "611430", label: "Professional & Management Development Training" },
];

const downloadCards = [
  {
    title: "Corporate Capability Statement",
    description:
      "Full overview of CybitSolutions capabilities, past performance, and contract vehicles for federal procurement.",
    filename: "CybitSolutions-Capability-Statement.pdf",
  },
];

const contractVehicles = [
  {
    name: "GSA MAS",
    fullName: "General Services Administration Multiple Award Schedule",
    description:
      "IT Professional Services, Software, and Cloud solutions available through GSA Advantage and eBuy.",
  },
  {
    name: "CIO-SP3",
    fullName: "Chief Information Officer - Solutions and Partners 3",
    description:
      "NIH NITAAC government-wide contract vehicle for IT solutions and services across all federal agencies.",
  },
  {
    name: "SEWP V",
    fullName: "Solutions for Enterprise-Wide Procurement V",
    description:
      "NASA-managed government-wide contract for IT products, services, and solutions with streamlined ordering.",
  },
  {
    name: "DISA SETI",
    fullName:
      "Defense Information Systems Agency - Systems Engineering & Technical Innovation",
    description:
      "DISA enterprise contract for systems engineering, cybersecurity, and technical innovation services.",
  },
  {
    name: "Alliant 2",
    fullName: "GSA Alliant 2 GWAC",
    description:
      "Best-in-class government-wide acquisition contract for complex integrated IT solutions and services.",
  },
];

export default function CapabilityStatementsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-accent-cyan rounded-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "What We Do", href: "/what-we-do" }, { label: "Capability Statements" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Procurement Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Capability Statements
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Everything contracting officers and partners need to evaluate
            CybitSolutions for your next IT program.
          </p>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Company Overview
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            A trusted partner delivering mission-critical IT solutions to
            federal agencies and commercial enterprises
          </p>

          <div className="bg-white rounded-xl p-8 lg:p-12 border border-border max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-accent-cyan">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">
                CybitSolutions
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-steel">
                  Veteran-Owned, Minority-Owned Small Business (VOSB / MBE)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-steel">
                  20+ years of government and commercial contracting experience
                  delivering enterprise-scale IT programs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-steel">
                  Specializing in cybersecurity, cloud computing, artificial
                  intelligence, data analytics, and enterprise IT services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-steel">
                  Headquartered in [City, State], serving federal agencies and
                  commercial clients worldwide
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-steel">
                  50+ cleared professionals across all 10 service domains with
                  clearances from Secret to TS/SCI
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Core Competencies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Core Competencies
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            Ten mission-critical IT domains staffed by cleared professionals
            with deep federal experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((comp) => (
              <div
                key={comp.title}
                className="bg-cloud rounded-xl p-6 border border-border"
              >
                <h3 className="text-base font-bold text-navy mb-3">
                  {comp.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Differentiators */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Differentiators
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            What sets CybitSolutions apart from other federal IT service
            providers
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-accent-cyan">
                    <diff.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy">
                    {diff.title}
                  </h3>
                </div>
                <p className="text-sm text-steel leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Past Performance / Experiences */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Past Performance
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            Proven delivery across major defense and civilian agency programs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {pastPerformancePrograms.map((program) => (
              <div
                key={program.title}
                className="bg-cloud rounded-xl p-6 border border-border"
              >
                <h3 className="text-base font-bold text-navy mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed">
                  {program.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/what-we-do/past-performance"
              className="inline-flex items-center gap-2 text-accent-cyan font-semibold hover:underline"
            >
              View Full Past Performance <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Certifications & Clearances */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Certifications &amp; Clearances
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            Industry-recognized certifications and federal security clearances
            that validate our commitment to excellence
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.category}
                className="bg-white rounded-xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-accent-cyan">
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">
                    {cert.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cert.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                      <span className="text-sm text-steel">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NAICS Codes */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            NAICS Codes
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            Primary North American Industry Classification System codes under
            which CybitSolutions is registered and actively performing work
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {naicsCodes.map((naics) => (
              <div
                key={naics.code}
                className="bg-cloud rounded-xl p-5 border border-border"
              >
                <span className="text-2xl font-bold text-accent-cyan">
                  {naics.code}
                </span>
                <p className="text-sm text-steel mt-2 leading-relaxed">
                  {naics.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Download Capability Statements */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Download Capability Statements
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            Formatted capability statements ready for inclusion in your
            procurement package
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {downloadCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-8 border border-border flex flex-col"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <DownloadButton href="/capability-pdf">
                  View &amp; Print PDF
                </DownloadButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contract Vehicles */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Contract Vehicles
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-12">
            Pre-competed contract vehicles enabling rapid procurement with
            reduced acquisition timelines
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractVehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="bg-cloud rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-cyan/10">
                    <Building2 className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-accent-cyan font-semibold uppercase tracking-wider mb-2">
                  {vehicle.fullName}
                </p>
                <p className="text-sm text-steel leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Banner */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with CybitSolutions?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
            Whether you are a contracting officer, prime contractor, or
            potential teaming partner, we are ready to support your next
            mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan-dark transition-colors"
            >
              Contact Our BD Team <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/past-performance"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Past Performance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
