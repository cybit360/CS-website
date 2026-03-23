import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Landmark,
  HeartPulse,
  Zap,
  Cpu,
  ShieldCheck,
  BarChart3,
  Cloud,
  Lock,
} from "lucide-react";
import { PageImage } from "@/components/ui/PageImage";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Commercial",
  description:
    "CybitSolutions delivers enterprise IT solutions for commercial clients across finance, healthcare, energy, and technology sectors with government-grade security.",
};

const industries = [
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Secure, compliant technology solutions for banks, insurance providers, and fintech companies navigating complex regulatory landscapes.",
    services: [
      "Regulatory compliance automation (SOX, PCI-DSS)",
      "Fraud detection and analytics platforms",
      "Secure cloud migration and infrastructure",
      "Identity management and zero-trust security",
      "Real-time data processing pipelines",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant platforms and data solutions that empower healthcare organizations to improve patient outcomes while protecting sensitive data.",
    services: [
      "HIPAA-compliant cloud architectures",
      "Electronic health record integrations",
      "Clinical data analytics and AI/ML",
      "Telehealth platform development",
      "Medical device security assessments",
    ],
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Operational technology security and digital transformation for energy companies managing critical infrastructure.",
    services: [
      "OT/IT convergence and security",
      "SCADA system modernization",
      "Predictive maintenance analytics",
      "Smart grid infrastructure support",
      "NERC CIP compliance consulting",
    ],
  },
  {
    icon: Cpu,
    title: "Technology Companies",
    description:
      "Engineering support, platform security, and scalable infrastructure for technology companies at every stage of growth.",
    services: [
      "Cloud-native application development",
      "DevSecOps and CI/CD automation",
      "Product security assessments",
      "Scalable microservices architecture",
      "SRE and platform reliability engineering",
    ],
  },
];

const enterpriseServices = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Comprehensive cybersecurity programs including penetration testing, vulnerability management, and incident response.",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    description:
      "Multi-cloud strategy, migration execution, and ongoing optimization across AWS, Azure, and Google Cloud.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Modern data platforms, business intelligence, and AI/ML solutions that turn raw data into strategic advantage.",
  },
  {
    icon: Lock,
    title: "Compliance & Risk",
    description:
      "Risk assessments, compliance frameworks, and audit preparation for SOC 2, ISO 27001, PCI-DSS, and HIPAA.",
  },
];

export default function CommercialPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Who We Serve", href: "/who-we-serve" }, { label: "Commercial" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Commercial &amp; Enterprise
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We help enterprises accelerate digital transformation, strengthen
            security posture, and unlock the full potential of modern technology
            platforms.
          </p>
        </div>
      </section>

      {/* Commercial Visual */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <PageImage variant="tech" aspectRatio="wide" />
        </div>
      </section>

      {/* Industries */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-navy">
              Industries We Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
              Deep domain expertise across regulated and high-growth industries,
              with solutions tailored to each sector&apos;s unique requirements.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-10 lg:grid-cols-2">
            {industries.map((industry) => (
              <StaggerItem
                key={industry.title}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10">
                  <industry.icon className="h-6 w-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  {industry.title}
                </h3>
                <p className="mt-2 text-steel">{industry.description}</p>
                <ul className="mt-5 space-y-2">
                  {industry.services.map((svc) => (
                    <li
                      key={svc}
                      className="flex items-start gap-2 text-sm text-steel"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                      {svc}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <FadeIn delay={0.1}>
            <h2 className="text-center text-3xl font-bold text-navy">
              Enterprise Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
              Cross-industry capabilities that scale with your business and meet
              enterprise-grade security and compliance standards.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {enterpriseServices.map((svc) => (
              <StaggerItem
                key={svc.title}
                className="rounded-xl border border-border bg-cloud p-6 text-center card-hover"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-cyan/10">
                  <svc.icon className="h-7 w-7 text-accent-cyan" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{svc.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Commercial Clients */}
      <section className="bg-cloud py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <FadeIn delay={0.1}>
            <h2 className="text-center text-3xl font-bold text-navy">
              Why Enterprises Trust CybitSolutions
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              "Government-grade security applied to commercial environments",
              "Cleared engineering talent with deep technical expertise",
              "Proven delivery across complex, regulated industries",
              "Flexible engagement models from staff augmentation to managed services",
              "24/7 security operations and incident response",
              "Multi-cloud certified across AWS, Azure, and GCP",
            ].map((item) => (
              <StaggerItem
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-white p-5 hover:border-accent-cyan/30 hover:shadow-sm transition-all"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan" />
                <p className="text-steel">{item}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-cyan py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Elevate Your Enterprise Technology
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/80">
            Bring government-tested rigor to your commercial operations. Talk to
            our enterprise team today.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3 font-semibold text-white transition hover:bg-navy/90"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
