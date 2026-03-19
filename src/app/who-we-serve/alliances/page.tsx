import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  ShieldCheck,
  Server,
  Network,
  Award,
  FileCheck,
  BadgeCheck,
  ScrollText,
} from "lucide-react";

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
      <section className="hero-gradient bg-navy py-24 text-center">
        <div className="container mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Who We Serve
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Strategic Alliances &amp; Certifications
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Our partnerships with industry-leading technology providers and
            commitment to the highest certifications ensure we deliver
            best-in-class solutions for every engagement.
          </p>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">
            Technology Partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
            We maintain deep, certified partnerships with the platforms that
            power modern government and enterprise IT.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologyPartners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Cloud className="h-6 w-6 text-accent-cyan" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">
            Certifications &amp; Compliance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
            Our certifications demonstrate a verified commitment to security,
            quality, and regulatory compliance.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center rounded-xl border border-border bg-cloud p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                  <cert.icon className="h-7 w-7 text-accent-cyan" />
                </div>
                <p className="mt-4 text-lg font-bold text-navy">{cert.name}</p>
                <p className="text-sm font-medium text-accent-cyan">
                  {cert.level}
                </p>
                <p className="mt-2 text-sm text-steel">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">
            Contract Vehicles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
            Accelerate procurement through our pre-competed, government-approved
            contract vehicles.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {contractVehicles.map((cv) => (
              <div
                key={cv.name}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
                  <cv.icon className="h-6 w-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold text-navy">{cv.name}</h3>
                <p className="text-sm font-medium text-accent-cyan">
                  {cv.fullName}
                </p>
                <p className="mt-3 text-sm text-steel">{cv.description}</p>
              </div>
            ))}
          </div>
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
