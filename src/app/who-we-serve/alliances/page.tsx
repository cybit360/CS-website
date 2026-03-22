import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Server,
  Network,
  Award,
  FileCheck,
  BadgeCheck,
  ScrollText,
} from "lucide-react";
import { PartnerLogo } from "@/components/ui/PartnerLogos";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Alliances & Certifications",
  description:
    "CybitSolutions technology partnerships, contract vehicles, and certifications including AWS, Azure, CMMC, and FedRAMP authorizations.",
};

const technologyPartners = [
  {
    name: "AWS",
    tier: "Advanced Consulting Partner",
    specializations: [
      "Government Cloud (GovCloud)",
      "Security Competency",
      "DevOps Competency",
    ],
  },
  {
    name: "Microsoft",
    tier: "Gold Partner",
    specializations: [
      "Azure Government",
      "Microsoft 365 Government",
      "Dynamics 365",
    ],
  },
  {
    name: "Google Cloud",
    tier: "Partner Advantage",
    specializations: [
      "Infrastructure Modernization",
      "Data Analytics",
      "Application Development",
    ],
  },
  {
    name: "ServiceNow",
    tier: "Elite Partner",
    specializations: [
      "IT Service Management",
      "Security Operations",
      "GRC Platform",
    ],
  },
  {
    name: "Splunk",
    tier: "Premier Partner",
    specializations: [
      "SIEM Implementation",
      "Security Analytics",
      "IT Operations",
    ],
  },
  {
    name: "Cisco",
    tier: "Gold Integrator",
    specializations: [
      "Network Infrastructure",
      "Zero Trust Security",
      "Collaboration Solutions",
    ],
  },
  {
    name: "HashiCorp",
    tier: "Systems Integrator Partner",
    specializations: [
      "Terraform Enterprise",
      "Vault Secret Management",
      "Consul Service Mesh",
    ],
  },
  {
    name: "CrowdStrike",
    tier: "Certified Partner",
    specializations: [
      "Endpoint Detection & Response",
      "Threat Intelligence",
      "Managed Threat Hunting",
    ],
  },
  {
    name: "Databricks",
    tier: "Consulting Partner",
    specializations: [
      "Lakehouse Architecture",
      "ML/AI Platforms",
      "Data Engineering",
    ],
  },
  {
    name: "IBM",
    tier: "Gold Partner",
    specializations: [
      "Hybrid Cloud & Red Hat OpenShift",
      "Enterprise AI (watsonx)",
      "Mainframe Modernization",
    ],
  },
];

const certifications = [
  {
    icon: ShieldCheck,
    name: "FedRAMP",
    level: "High Baseline",
    description:
      "Authorized to operate in the most stringent federal cloud security tier.",
  },
  {
    icon: Award,
    name: "ISO 27001",
    level: "Certified",
    description:
      "Internationally recognized information security management standard.",
  },
  {
    icon: FileCheck,
    name: "SOC 2 Type II",
    level: "Attested",
    description:
      "Independent audit of security, availability, and confidentiality controls.",
  },
  {
    icon: BadgeCheck,
    name: "CMMC",
    level: "Level 2",
    description:
      "Cybersecurity Maturity Model Certification for defense contractors.",
  },
];

const contractVehicles = [
  {
    icon: ScrollText,
    name: "GSA MAS",
    fullName: "Multiple Award Schedule",
    description:
      "Simplified acquisition for IT professional services, software, and cloud solutions across all federal agencies.",
  },
  {
    icon: Server,
    name: "CIO-SP3",
    fullName: "Chief Information Officer \u2013 Solutions and Partners 3",
    description:
      "Government-wide contract for IT services supporting health, science, and other federal missions.",
  },
  {
    icon: Network,
    name: "SEWP V",
    fullName: "Solutions for Enterprise-Wide Procurement",
    description:
      "NASA-managed GWAC providing access to commercial IT products, services, and solutions.",
  },
];

export default function AlliancesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Who We Serve", href: "/who-we-serve" }, { label: "Alliances" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Strategic Alliances &amp; Certifications
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our partnerships with industry-leading technology providers and
            commitment to the highest certifications ensure we deliver
            best-in-class solutions for every engagement.
          </p>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-navy">
              Technology Partners
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
              We maintain deep, certified partnerships with the platforms that
              power modern government and enterprise IT.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologyPartners.map((partner) => (
              <StaggerItem
                key={partner.name}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm card-hover"
              >
                <div className="flex items-center gap-3">
                  <PartnerLogo name={partner.name} showName={false} size="md" />
                  <div>
                    <h3 className="text-lg font-semibold text-navy">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-medium text-accent-cyan">
                      {partner.tier}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {partner.specializations.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2 text-sm text-steel"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <FadeIn delay={0.1}>
            <h2 className="text-center text-3xl font-bold text-navy">
              Certifications &amp; Compliance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
              Our certifications demonstrate a verified commitment to security,
              quality, and regulatory compliance.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <StaggerItem
                key={cert.name}
                className="flex flex-col items-center rounded-xl border border-border bg-cloud p-6 text-center card-hover"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                  <cert.icon className="h-7 w-7 text-accent-cyan" />
                </div>
                <p className="mt-4 text-lg font-bold text-navy">{cert.name}</p>
                <p className="text-sm font-medium text-accent-cyan">
                  {cert.level}
                </p>
                <p className="mt-2 text-sm text-steel">{cert.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <FadeIn delay={0.1}>
            <h2 className="text-center text-3xl font-bold text-navy">
              Contract Vehicles
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
              Accelerate procurement through our pre-competed, government-approved
              contract vehicles.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
            {contractVehicles.map((cv) => (
              <StaggerItem
                key={cv.name}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10">
                  <cv.icon className="h-6 w-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold text-navy">{cv.name}</h3>
                <p className="text-sm font-medium text-accent-cyan">
                  {cv.fullName}
                </p>
                <p className="mt-3 text-sm text-steel">{cv.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-cyan py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Leverage Our Partnerships
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/80">
            Gain access to best-in-class technology through our certified
            partnerships and streamlined procurement vehicles.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3 font-semibold text-white transition hover:bg-navy/90"
          >
            Explore Partnership Opportunities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
