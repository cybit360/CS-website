import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  ArrowRight,
  Download,
  MessageSquare,
  FileText,
  Server,
  Shield,
  Workflow,
  Database,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Cloud Computing & Virtualization",
  description:
    "CybitSolutions cloud services including FedRAMP-authorized migrations, hybrid cloud architecture, and virtualization for government and enterprise environments.",
};

const functionalAreas = [
  {
    icon: Cloud,
    title: "Cloud Strategy & Migration",
    description:
      "Develop cloud-first strategies aligned with federal mandates. Plan and execute migrations to AWS GovCloud, Azure Government, and Google Cloud with minimal mission disruption.",
    capabilities: [
      "Cloud Readiness Assessments",
      "Migration Planning & Execution",
      "Hybrid & Multi-Cloud Architecture",
      "Cloud Cost Optimization (FinOps)",
      "GovCloud IL4-IL6 Deployments",
    ],
  },
  {
    icon: Server,
    title: "Cloud Infrastructure & Platform Engineering",
    description:
      "Build and manage cloud-native infrastructure using Infrastructure as Code (IaC), containerization, and serverless patterns optimized for government workloads.",
    capabilities: [
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Kubernetes & Container Orchestration",
      "Serverless Architecture Design",
      "Platform Engineering & Golden Paths",
      "High-Availability & Disaster Recovery",
    ],
  },
  {
    icon: Shield,
    title: "Cloud Security & Compliance",
    description:
      "Implement cloud-native security controls and achieve FedRAMP, IL4/IL5/IL6 authorization. Continuous compliance monitoring across all cloud environments.",
    capabilities: [
      "FedRAMP Authorization Support",
      "Cloud Security Posture Management (CSPM)",
      "Cloud Workload Protection (CWPP)",
      "IL4/IL5/IL6 Architecture & Controls",
      "Cloud-Native SIEM & Logging",
    ],
  },
  {
    icon: Workflow,
    title: "Cloud Operations & Managed Services",
    description:
      "24/7 cloud operations with SRE practices, automated scaling, and proactive monitoring. Full lifecycle managed services for government cloud environments.",
    capabilities: [
      "Managed Cloud Operations (24/7)",
      "Site Reliability Engineering (SRE)",
      "Cloud Monitoring & Observability",
      "Auto-Scaling & Performance Tuning",
      "Backup, DR & Business Continuity",
    ],
  },
];

const services = [
  "Cloud Migration & Modernization",
  "GovCloud (AWS/Azure/GCP) Architecture",
  "FedRAMP Authorization & Continuous Monitoring",
  "Kubernetes & Container Platform Engineering",
  "Infrastructure as Code (IaC) Implementation",
  "Cloud Security Posture Management (CSPM)",
  "FinOps & Cloud Cost Optimization",
  "Multi-Cloud Network Architecture",
  "Serverless Application Development",
  "Cloud-Native DevSecOps Pipelines",
  "Virtual Desktop Infrastructure (VDI)",
  "Disaster Recovery as a Service (DRaaS)",
];

const standards = [
  "FedRAMP High/Moderate",
  "DoD IL4 / IL5 / IL6",
  "NIST SP 800-53",
  "NIST SP 800-145",
  "CISA Cloud Security",
  "CSA Cloud Controls Matrix",
  "AWS Well-Architected",
  "Azure CAF",
  "DISA Cloud SRG",
  "ISO 27017 / 27018",
];

const benefits = [
  "Accelerated cloud migration with proven federal methodologies",
  "FedRAMP-ready architecture reducing authorization timelines",
  "Multi-cloud flexibility across AWS, Azure, and GCP GovCloud",
  "FinOps practices reducing cloud spend by 20-40%",
  "24/7 managed cloud operations with cleared personnel",
  "Infrastructure as Code ensuring consistent, auditable deployments",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of State (DoS)",
  "Intelligence Community (IC)",
  "Federal Civilian Agencies",
  "State & Local Government",
  "Defense Industrial Base (DIB)",
  "Healthcare (HIPAA)",
  "Financial Services",
];

export default function CloudPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Cloud className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Service Domain
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Cloud Computing &amp; Virtualization
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Multi-cloud platforms for GovCloud IL4-IL6 compliance. Migrate,
            modernize, and operate mission workloads at scale with FedRAMP-ready
            architecture.
          </p>
        </div>
      </section>

      {/* Visual Accent */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageImage variant="cloud" aspectRatio="wide" className="shadow-lg" />
        </div>
      </section>

      {/* Intro */}
      <section className="pt-6 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed mb-6">
              CybitSolutions designs, builds, and operates cloud environments
              that meet the most demanding federal security and compliance
              requirements. Our cloud practice spans strategy through operations,
              with deep expertise in AWS GovCloud, Azure Government, and hybrid
              architectures that support DoD Impact Levels 4 through 6.
            </p>
            <p className="text-lg text-steel leading-relaxed">
              Whether you are migrating legacy systems to the cloud, building
              cloud-native applications, or optimizing existing cloud
              investments, our cleared engineers deliver solutions that balance
              mission agility with rigorous compliance.
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
              Four practice areas covering the complete cloud lifecycle from
              strategy to managed operations.
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 bg-cloud rounded-lg p-4"
              >
                <Cloud className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-navy font-medium text-sm">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Standards &amp; Frameworks
            </h2>
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

      {/* Benefits & Customers */}
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
            Accelerate Your Cloud Journey
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From cloud readiness assessments to full managed services, our
            engineers are ready to architect your next-generation cloud
            environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/what-we-do/capability-statements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              <Download className="w-5 h-5" /> Cloud Capability Statement
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> Talk to a Cloud Architect
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
