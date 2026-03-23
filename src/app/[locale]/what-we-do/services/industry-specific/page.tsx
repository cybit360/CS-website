import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Download,
  MessageSquare,
  Heart,
  Landmark,
  GraduationCap,
  Shield,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Industry-Specific IT",
  description:
    "CybitSolutions industry-specific IT solutions for healthcare, finance, education, and defense sectors with tailored compliance and domain expertise.",
};

const functionalAreas = [
  {
    icon: Shield,
    title: "Defense & Intelligence",
    description:
      "Mission-critical IT solutions for DoD, Intelligence Community, and defense industrial base organizations requiring the highest levels of security and compliance.",
    capabilities: [
      "Classified System Administration",
      "SCIF IT Infrastructure",
      "Tactical Communications Systems",
      "C4ISR Support Services",
      "Weapons System IT Integration",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare IT",
    description:
      "Healthcare IT solutions for VA, MHS, HHS, and commercial healthcare organizations. HIPAA-compliant systems supporting electronic health records, telehealth, and clinical analytics.",
    capabilities: [
      "EHR Implementation & Support",
      "Telehealth Platform Deployment",
      "Clinical Data Analytics",
      "HIPAA Compliance & Security",
      "Health Information Exchange (HIE)",
    ],
  },
  {
    icon: Landmark,
    title: "Financial Services & Regulatory",
    description:
      "Secure IT solutions for financial regulators, Treasury, IRS, and commercial financial institutions. SOX, PCI-DSS, and GLBA compliance expertise.",
    capabilities: [
      "Financial System Modernization",
      "Regulatory Compliance Automation",
      "Anti-Fraud Analytics & Detection",
      "PCI-DSS / SOX Compliance",
      "Financial Data Security & Encryption",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Research",
    description:
      "IT solutions for educational institutions and research organizations supporting secure collaboration, student information systems, and research computing.",
    capabilities: [
      "Student Information Systems (SIS)",
      "Learning Management Systems (LMS)",
      "Research Computing Infrastructure",
      "Campus Network Architecture",
      "FERPA Compliance & Data Security",
    ],
  },
];

const services = [
  "Defense Mission System IT Support",
  "Healthcare EHR & Telehealth Solutions",
  "Financial System Modernization",
  "Education Technology Platforms",
  "Industry-Specific Compliance Programs",
  "Vertical Data Analytics Solutions",
  "Sector-Specific Cloud Migrations",
  "Regulatory Reporting Automation",
  "Industry IoT & OT Security",
  "Vertical SaaS Implementation",
  "Sector Workforce Management Systems",
  "Industry-Specific AI/ML Applications",
];

const standards = [
  "HIPAA / HITECH",
  "PCI-DSS",
  "SOX Compliance",
  "FERPA",
  "ITAR / EAR",
  "CJIS Security Policy",
  "NERC CIP",
  "FDA 21 CFR Part 11",
];

const benefits = [
  "Deep domain expertise across defense, healthcare, finance, and education",
  "Industry-specific compliance accelerators reducing audit preparation",
  "Vertical solutions leveraging proven frameworks and architectures",
  "Cross-industry best practices adapted for sector-specific requirements",
  "Cleared professionals with industry certifications and domain knowledge",
  "Pre-built integrations with industry-standard platforms and systems",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of Veterans Affairs",
  "Health & Human Services (HHS)",
  "Department of Treasury / IRS",
  "Department of Education",
  "Financial Regulators (SEC, FDIC)",
  "Healthcare Systems & Hospitals",
  "Universities & Research Labs",
];

export default function IndustrySpecificPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "What We Do", href: "/what-we-do" }, { label: "Services", href: "/what-we-do" }, { label: "Industry-Specific IT" }]} />
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Building2 className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">Service Domain</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Industry-Specific IT Solutions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Tailored IT solutions for healthcare, finance, education, and defense verticals with deep domain expertise and compliance knowledge.
          </p>
        </div>
      </section>

      {/* Visual Accent */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageImage variant="industry" aspectRatio="wide" className="shadow-lg" />
        </div>
      </section>

      <section className="pt-6 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions brings deep vertical expertise to organizations operating in highly regulated industries. Our industry-specific practice combines technical capabilities with domain knowledge in defense, healthcare, financial services, and education to deliver solutions that address unique sector requirements, compliance mandates, and operational challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Industry Verticals</h2>
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
                <Building2 className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
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
          <h2 className="text-3xl font-bold text-navy mb-4">Industry Expertise You Can Trust</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Our vertical specialists understand your industry from the inside out. Talk to an expert in your sector today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-we-do/capability-statements" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors">
              <Download className="w-5 h-5" /> Capability Statement
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors">
              <MessageSquare className="w-5 h-5" /> Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
