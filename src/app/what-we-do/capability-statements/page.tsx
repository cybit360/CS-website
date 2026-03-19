import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Shield,
  Award,
  FileText,
  Building2,
  Lock,
  BadgeCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statements | CybitSolutions",
  description:
    "Download CybitSolutions capability statements. View our NAICS codes, core competencies, certifications, clearances, and contract vehicles.",
};

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
    fullName: "Defense Information Systems Agency - Systems Engineering & Technical Innovation",
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

const downloadCards = [
  {
    title: "Corporate Capability Statement",
    description:
      "Full overview of CybitSolutions capabilities, past performance, and contract vehicles for federal procurement.",
    filename: "CybitSolutions-Capability-Statement.pdf",
  },
  {
    title: "Cybersecurity Services",
    description:
      "Focused capability statement covering zero-trust architecture, SIEM/SOAR, RMF compliance, and security operations.",
    filename: "CybitSolutions-Cybersecurity-Capabilities.pdf",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Multi-cloud capabilities for AWS GovCloud, Azure Government, and hybrid environments at all classification levels.",
    filename: "CybitSolutions-Cloud-Capabilities.pdf",
  },
];

export default function CapabilityStatementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-accent-cyan rounded-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Procurement Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Capability Statements
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Everything contracting officers and partners need to evaluate
            CybitSolutions for your next federal IT program.
          </p>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="py-20 bg-cloud">
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
                className="bg-white rounded-xl p-5 border border-border"
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

      {/* Core Competencies */}
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

      {/* Certifications & Clearances */}
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

      {/* Download Capability Statements */}
      <section className="py-20 bg-white">
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
                className="bg-cloud rounded-xl p-8 border border-border flex flex-col"
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
                <Link
                  href={`/downloads/${card.filename}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-slate transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="py-20 bg-cloud">
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
                className="bg-white rounded-xl p-6 border border-border"
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

      {/* CTA */}
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
