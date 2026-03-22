import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Download,
  MessageSquare,
  FileText,
  GitBranch,
  TestTube,
  Rocket,
  Shield,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Software Development & DevOps",
  description:
    "CybitSolutions software engineering and DevSecOps services including CI/CD pipelines, custom application development, and agile delivery for federal programs.",
};

const functionalAreas = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Full-stack application development using modern languages, frameworks, and microservices architectures. Agile delivery with continuous stakeholder feedback.",
    capabilities: [
      "Full-Stack Web & Mobile Development",
      "Microservices & API Design",
      "Legacy Application Modernization",
      "Low-Code/No-Code Platform Development",
      "508-Compliant UI/UX Design",
    ],
  },
  {
    icon: GitBranch,
    title: "DevSecOps & CI/CD Pipelines",
    description:
      "Automated build, test, and deployment pipelines with security integrated at every stage. Accelerate delivery while maintaining compliance.",
    capabilities: [
      "CI/CD Pipeline Design & Automation",
      "GitOps & Infrastructure as Code",
      "Automated Security Scanning (SAST/DAST)",
      "Container Build & Registry Management",
      "Release Management & Feature Flags",
    ],
  },
  {
    icon: TestTube,
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive testing strategies including automated regression, performance, security, and accessibility testing across all environments.",
    capabilities: [
      "Automated Test Framework Design",
      "Performance & Load Testing",
      "Security Testing & Pen Testing",
      "Accessibility (508) Testing",
      "Test Data Management",
    ],
  },
  {
    icon: Rocket,
    title: "Agile Program Management",
    description:
      "Scaled Agile (SAFe) and Scrum delivery management for large federal programs. Metrics-driven execution with full transparency.",
    capabilities: [
      "SAFe & Scrum Implementation",
      "Agile Coaching & Transformation",
      "Product Ownership & Backlog Management",
      "Sprint Planning & Execution",
      "Metrics & Value Stream Mapping",
    ],
  },
];

const services = [
  "Custom Application Development",
  "DevSecOps Pipeline Implementation",
  "Agile Software Delivery (SAFe/Scrum)",
  "Legacy Modernization & Re-platforming",
  "API Gateway & Integration Services",
  "Mobile Application Development",
  "Automated Testing Frameworks",
  "Container & Kubernetes Deployment",
  "Secure SDLC Implementation",
  "508 Compliance & Accessibility",
  "Technical Debt Remediation",
  "Open Source Software Management",
];

const standards = [
  "SAFe 6.0",
  "NIST Secure SDLC",
  "OWASP SAMM",
  "ISO 12207",
  "CMMI Dev Level 3+",
  "Section 508 / WCAG",
  "DoD DevSecOps Reference",
  "CNCF Best Practices",
];

const benefits = [
  "Agile delivery reducing time-to-production by 60%+",
  "DevSecOps pipelines catching vulnerabilities before deployment",
  "Automated testing providing 90%+ code coverage",
  "Microservices enabling independent scaling and deployment",
  "SAFe methodology aligning teams to mission outcomes",
  "508-compliant applications ensuring universal accessibility",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of State (DoS)",
  "Federal Civilian Agencies",
  "Intelligence Community (IC)",
  "State & Local Government",
  "Healthcare Organizations",
  "Financial Services",
  "Defense Contractors",
];

export default function SoftwareDevOpsPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "What We Do", href: "/what-we-do" }, { label: "Services", href: "/what-we-do" }, { label: "Software Development & DevOps" }]} />
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Code className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">Service Domain</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Software Engineering &amp; DevOps
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Agile DevSecOps, CI/CD pipelines, and secure SDLC practices delivering mission-ready software at the speed of relevance.
          </p>
        </div>
      </section>

      {/* Visual Accent */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageImage variant="innovation" aspectRatio="wide" className="shadow-lg" />
        </div>
      </section>

      <section className="pt-6 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions delivers modern software engineering and DevSecOps services that accelerate delivery while embedding security into every phase of the development lifecycle. Our Agile teams build, test, and deploy applications using CI/CD pipelines, containerization, and automated quality gates that ensure compliance with federal standards from the first commit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Functional Areas</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {functionalAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan">
                    <area.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                </div>
                <p className="text-steel leading-relaxed mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-cyan mt-1 shrink-0" />
                      <span className="text-sm text-navy font-medium">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Example Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-cloud rounded-lg p-4">
                <Code className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-navy font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Standards &amp; Frameworks</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {standards.map((s) => (
              <div key={s} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <span className="text-white text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                    <span className="text-steel leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">Target Customers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customers.map((c) => (
                  <div key={c} className="flex items-center gap-3 bg-cloud rounded-lg p-4">
                    <Building2 className="w-5 h-5 text-navy shrink-0" />
                    <span className="text-navy font-medium text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Build Better Software, Faster</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From custom application development to DevSecOps transformation, our engineering teams deliver mission-ready software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-we-do/capability-statements" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors">
              <Download className="w-5 h-5" /> Capability Statement
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors">
              <MessageSquare className="w-5 h-5" /> Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
