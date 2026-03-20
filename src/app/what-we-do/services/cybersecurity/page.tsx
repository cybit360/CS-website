import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Download,
  MessageSquare,
  FileText,
  Lock,
  Eye,
  Network,
  Code,
  ClipboardCheck,
  CheckCircle,
  Users,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Cybersecurity & Risk Management",
  description:
    "CybitSolutions cybersecurity services including zero trust architecture, security operations, vulnerability management, and compliance for federal and enterprise clients.",
};

const functionalAreas = [
  {
    icon: Lock,
    title: "Information/Data Security & Zero Trust",
    description:
      "Design and implement Zero-Trust architectures aligned with NIST SP 800-207. Data-centric security with encryption at rest and in transit, DLP, and microsegmentation across hybrid environments.",
    capabilities: [
      "Zero-Trust Architecture (ZTA) Design",
      "Data Loss Prevention (DLP)",
      "Encryption & Key Management",
      "Microsegmentation",
      "Identity-Aware Access Controls",
    ],
  },
  {
    icon: Network,
    title: "Network Security & Security Operations",
    description:
      "24/7 security operations with SIEM, SOAR, and XDR platforms. Proactive threat hunting, incident response, and continuous monitoring for federal and enterprise networks.",
    capabilities: [
      "SOC/NOC Operations (24/7/365)",
      "SIEM & SOAR Platform Management",
      "Threat Intelligence & Hunting",
      "Incident Response & Forensics",
      "Vulnerability Management",
    ],
  },
  {
    icon: Code,
    title: "Application Security & DevSecOps",
    description:
      "Embed security into every phase of the software lifecycle. SAST, DAST, SCA, and container security integrated into CI/CD pipelines for continuous compliance.",
    capabilities: [
      "Secure SDLC Integration",
      "SAST/DAST/SCA Scanning",
      "Container & Kubernetes Security",
      "API Security Testing",
      "DevSecOps Pipeline Automation",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Governance, Risk & Compliance (GRC)",
    description:
      "Accelerate ATO timelines with automated RMF workflows, continuous monitoring, and compliance dashboards. Full lifecycle FISMA, FedRAMP, and CMMC support.",
    capabilities: [
      "RMF/ATO Acceleration",
      "FedRAMP Authorization Support",
      "CMMC Assessment & Remediation",
      "Continuous Monitoring (ConMon)",
      "POA&M Management & Reporting",
    ],
  },
];

const services = [
  "Zero-Trust Architecture Design & Implementation",
  "RMF/ATO Package Development & Acceleration",
  "SOC-as-a-Service (24/7 Managed Detection & Response)",
  "Penetration Testing & Red Team Assessments",
  "Cloud Security Posture Management (CSPM)",
  "Identity, Credential & Access Management (ICAM)",
  "FedRAMP Authorization Support",
  "CMMC Readiness Assessment & Remediation",
  "Insider Threat Program Development",
  "Cyber Threat Intelligence & Hunting",
  "Security Architecture Review & Modernization",
  "Incident Response & Digital Forensics",
];

const standards = [
  "NIST SP 800-53 / 800-171 / 800-207",
  "NIST Cybersecurity Framework (CSF)",
  "FISMA / FedRAMP",
  "CMMC 2.0 (Levels 1-3)",
  "CISA Zero Trust Maturity Model",
  "DISA STIGs & SRGs",
  "ISO 27001 / 27002",
  "OWASP Top 10",
  "MITRE ATT&CK Framework",
  "CJIS Security Policy",
];

const benefits = [
  "Reduce ATO timelines by up to 50% with automated RMF workflows",
  "24/7/365 security operations with cleared personnel",
  "Zero-Trust architecture aligned to federal mandates",
  "Proactive threat hunting reducing mean-time-to-detect",
  "Continuous compliance with automated monitoring dashboards",
  "Integrated DevSecOps reducing vulnerabilities by 80%+",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of State (DoS)",
  "Intelligence Community (IC)",
  "Department of Homeland Security (DHS)",
  "Federal Civilian Agencies",
  "Defense Industrial Base (DIB)",
  "State & Local Government",
  "Critical Infrastructure Operators",
];

export default function CybersecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Service Domain
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Cybersecurity &amp; Risk Management
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Defend your mission with Zero-Trust architecture, 24/7 security
            operations, and federal-grade compliance. Purpose-built for
            organizations where security is non-negotiable.
          </p>
        </div>
      </section>

      {/* Visual Accent */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageImage variant="cybersecurity" aspectRatio="wide" className="shadow-lg" />
        </div>
      </section>

      {/* Intro */}
      <section className="pt-6 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed mb-6">
              CybitSolutions delivers comprehensive cybersecurity services that
              protect federal missions, defense systems, and enterprise
              operations against advanced persistent threats. With 20+ years of
              experience across DoD, DoS, and federal civilian agencies, our
              cleared cybersecurity professionals architect, implement, and
              operate security solutions that meet the highest compliance
              standards while enabling mission agility.
            </p>
            <p className="text-lg text-steel leading-relaxed">
              Our approach integrates Zero-Trust principles across every
              engagement, from network architecture to application security,
              ensuring that your organization stays ahead of evolving threats
              while maintaining continuous compliance with FISMA, FedRAMP, CMMC,
              and agency-specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Functional Areas */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Functional Areas
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Four specialized practice areas delivering defense-in-depth across
              your entire cyber landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {functionalAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-xl p-8 border border-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan">
                    <area.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                </div>
                <p className="text-steel leading-relaxed mb-6">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-cyan mt-1 shrink-0" />
                      <span className="text-sm text-navy font-medium">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Example Services
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              A sample of the cybersecurity services we deliver across federal
              and enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 bg-cloud rounded-lg p-4"
              >
                <ShieldCheck className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-navy font-medium text-sm">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Frameworks */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Standards &amp; Frameworks
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We design and certify solutions against the most rigorous
              cybersecurity standards in government and industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {standards.map((standard) => (
              <div
                key={standard}
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
              >
                <span className="text-white text-sm font-medium">
                  {standard}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">
                Why CybitSolutions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                    <span className="text-steel leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">
                Target Customers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customers.map((customer) => (
                  <div
                    key={customer}
                    className="flex items-center gap-3 bg-cloud rounded-lg p-4"
                  >
                    <Building2 className="w-5 h-5 text-navy shrink-0" />
                    <span className="text-navy font-medium text-sm">
                      {customer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Secure Your Mission Today
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Whether you need a Zero-Trust assessment, SOC-as-a-Service, or ATO
            acceleration, our cyber experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/what-we-do/capability-statements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              <Download className="w-5 h-5" /> Cyber Capability Statement
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> Talk to a Cyber Architect
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy/30 text-navy font-semibold rounded-lg hover:bg-navy/5 transition-colors"
            >
              <FileText className="w-5 h-5" /> Submit RFP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
