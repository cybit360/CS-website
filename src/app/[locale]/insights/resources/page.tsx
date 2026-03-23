"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  BarChart3,
  Video,
  Download,
  Eye,
  ArrowRight,
  Filter,
  ChevronDown,
  ChevronUp,
  X,
  Lightbulb,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const resourceTypes = [
  { label: "All", icon: BookOpen },
  { label: "Whitepapers", icon: FileText },
  { label: "Case Studies", icon: BarChart3 },
  { label: "Infographics", icon: Lightbulb },
  { label: "Solution Briefs", icon: BookOpen },
  { label: "Videos", icon: Video },
];

const resources = [
  {
    title: "Zero Trust Implementation Roadmap for Federal Agencies",
    description:
      "A comprehensive guide covering the phased approach to implementing zero trust architecture aligned with NIST SP 800-207 and OMB M-22-09.",
    type: "Whitepaper" as const,
    pages: "32 pages",
    icon: FileText,
    slug: "zero-trust-roadmap",
    preview:
      "This whitepaper provides a detailed, phased roadmap for federal agencies transitioning to zero trust architecture. Key topics include identity-centric security models, micro-segmentation strategies, continuous verification protocols, and alignment with NIST SP 800-207 pillars. The guide covers assessment frameworks, maturity models, and practical implementation timelines tailored to government IT environments. It also addresses common challenges such as legacy system integration, workforce training requirements, and budget planning for multi-year zero trust initiatives.",
  },
  {
    title: "DoD Cloud Migration: Agency Success Story",
    description:
      "How CybitSolutions helped a DoD component migrate 200+ applications to an IL5 cloud environment in under 18 months.",
    type: "Case Study" as const,
    pages: "12 pages",
    icon: BarChart3,
    slug: "dod-cloud-migration",
    preview:
      "This case study chronicles the end-to-end migration of over 200 mission-critical applications from on-premises data centers to an Impact Level 5 (IL5) cloud environment. It covers the discovery and assessment phase, application rationalization decisions, the automated migration toolchain developed by our engineers, and the rigorous security validation process. The project achieved a 35% reduction in total infrastructure costs, 99.99% uptime during cutover, and full ATO within the accelerated timeline.",
  },
  {
    title: "The State of Federal Cybersecurity 2026",
    description:
      "Visual overview of key cybersecurity metrics, threat trends, and investment patterns across the federal government.",
    type: "Infographic" as const,
    pages: "1 page",
    icon: Lightbulb,
    slug: "federal-cybersecurity-2026",
    preview:
      "This infographic presents a visual snapshot of the federal cybersecurity landscape in 2026, including top threat vectors targeting government networks, agency spending trends on cyber defense, workforce gap statistics, and adoption rates for key frameworks like zero trust and CMMC 2.0. Data is sourced from GAO reports, CISA advisories, and federal budget documents to provide an authoritative overview for decision-makers.",
  },
  {
    title: "Building a DevSecOps Pipeline for Government",
    description:
      "Step-by-step video walkthrough of establishing a secure CI/CD pipeline that meets DISA STIG and FedRAMP requirements.",
    type: "Video" as const,
    pages: "45 min",
    icon: Video,
    slug: "devsecops-pipeline-gov",
    preview:
      "This 45-minute video walkthrough demonstrates how to build a fully compliant DevSecOps pipeline from scratch. Topics include configuring automated SAST/DAST scanning, integrating DISA STIG compliance checks into CI/CD workflows, container security scanning, infrastructure-as-code validation, and establishing continuous monitoring dashboards. The demo uses real-world tooling including GitLab CI, SonarQube, Anchore, and Terraform with government-specific configuration examples.",
  },
  {
    title: "AI/ML Governance Framework for Public Sector",
    description:
      "Whitepaper outlining responsible AI principles, risk management strategies, and compliance considerations for government AI programs.",
    type: "Whitepaper" as const,
    pages: "28 pages",
    icon: FileText,
    slug: "ai-ml-governance-framework",
    preview:
      "This whitepaper establishes a comprehensive governance framework for AI and machine learning initiatives within government agencies. It covers ethical AI principles aligned with the NIST AI Risk Management Framework, bias detection and mitigation strategies, model explainability requirements for government decision-making, data governance best practices, and procurement guidelines for AI solutions. The framework includes templates for AI impact assessments and model documentation standards.",
  },
  {
    title: "Civilian Agency Digital Transformation Case Study",
    description:
      "How a civilian agency modernized legacy systems, improved citizen services, and reduced operational costs by 40%.",
    type: "Case Study" as const,
    pages: "16 pages",
    icon: BarChart3,
    slug: "civilian-digital-transformation",
    preview:
      "This case study details a multi-year digital transformation initiative for a large civilian agency serving millions of citizens. The project encompassed legacy mainframe modernization using a strangler fig pattern, deployment of citizen-facing digital services with 508-compliance, API-first architecture implementation, and cloud-native application development. Outcomes included a 40% reduction in operational costs, 60% improvement in citizen service response times, and elimination of three legacy data centers.",
  },
  {
    title: "Cloud Security Posture Management for FedRAMP",
    description:
      "A solution brief outlining automated cloud security monitoring and continuous compliance for FedRAMP-authorized environments.",
    type: "Solution Brief" as const,
    pages: "8 pages",
    icon: BookOpen,
    slug: "cspm-fedramp-solution-brief",
    preview:
      "This solution brief describes CybitSolutions' approach to Cloud Security Posture Management (CSPM) tailored for FedRAMP-authorized environments. It covers automated configuration drift detection, continuous compliance monitoring against FedRAMP baselines, real-time alerting for security misconfigurations, and integrated remediation workflows. The solution supports AWS GovCloud, Azure Government, and Google Cloud with unified dashboards for security teams and AOs.",
  },
  {
    title: "Supply Chain Risk Management in Federal IT",
    description:
      "Solution brief covering strategies and tools for managing software supply chain risks in compliance with EO 14028.",
    type: "Solution Brief" as const,
    pages: "10 pages",
    icon: BookOpen,
    slug: "scrm-federal-it",
    preview:
      "This solution brief addresses the growing challenge of software supply chain security for federal agencies, aligned with Executive Order 14028 requirements. Topics include Software Bill of Materials (SBOM) generation and analysis, vendor risk assessment frameworks, secure software development attestation processes, and continuous monitoring of third-party components for vulnerabilities. The brief provides practical implementation guidance and tool recommendations for agencies at various maturity levels.",
  },
];

const typeBadgeColors: Record<string, string> = {
  Whitepaper: "bg-blue-100 text-blue-700",
  "Case Study": "bg-green-100 text-green-700",
  Infographic: "bg-amber-100 text-amber-700",
  Video: "bg-purple-100 text-purple-700",
  "Solution Brief": "bg-cyan-100 text-cyan-700",
};

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedResource, setExpandedResource] = useState<string | null>(null);

  const filteredResources =
    activeFilter === "All"
      ? resources
      : resources.filter((r) => {
          if (activeFilter === "Whitepapers") return r.type === "Whitepaper";
          if (activeFilter === "Case Studies") return r.type === "Case Study";
          if (activeFilter === "Infographics") return r.type === "Infographic";
          if (activeFilter === "Solution Briefs")
            return r.type === "Solution Brief";
          if (activeFilter === "Videos") return r.type === "Video";
          return true;
        });

  const togglePreview = (slug: string) => {
    setExpandedResource(expandedResource === slug ? null : slug);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Insights", href: "/insights" }, { label: "Resources" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Resource Library
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Access whitepapers, case studies, infographics, solution briefs, and
            videos from our team of federal technology experts.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-steel" />
            <span className="text-sm text-steel font-medium mr-2">
              Filter by type:
            </span>
            {resourceTypes.map((type) => (
              <button
                key={type.label}
                onClick={() => setActiveFilter(type.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition ${
                  activeFilter === type.label
                    ? "bg-navy text-white"
                    : "bg-cloud text-steel hover:bg-navy/10"
                }`}
              >
                <type.icon className="w-4 h-4" />
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => {
              const Icon = resource.icon;
              const isExpanded = expandedResource === resource.slug;
              return (
                <div
                  key={resource.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group flex flex-col"
                >
                  <div className="h-44 bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors duration-300">
                    <Icon className="w-16 h-16 text-navy/15 group-hover:text-navy/25 transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${typeBadgeColors[resource.type]}`}
                      >
                        {resource.type}
                      </span>
                      <span className="text-xs text-steel/60">
                        {resource.pages}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-accent-cyan transition line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-steel text-sm mb-5 line-clamp-3">
                      {resource.description}
                    </p>

                    {/* Preview Section */}
                    {isExpanded && (
                      <div className="mb-5 p-4 bg-cloud rounded-lg border border-navy/10 animate-in">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-navy">
                            Preview Summary
                          </span>
                          <button
                            onClick={() => togglePreview(resource.slug)}
                            className="text-steel hover:text-navy transition"
                            aria-label="Close preview"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-steel text-sm leading-relaxed">
                          {resource.preview}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-3 mt-auto">
                      <a
                        href={`/downloads/${resource.slug}.pdf`}
                        download
                        className="flex items-center gap-2 bg-accent-cyan text-navy text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                      <button
                        onClick={() => togglePreview(resource.slug)}
                        className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition ${
                          isExpanded
                            ? "bg-navy text-white"
                            : "bg-navy/5 text-navy hover:bg-navy/10"
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                        Preview
                        {isExpanded ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-steel/30 mx-auto mb-4" />
              <p className="text-steel text-lg">
                No resources found for this filter.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-accent-cyan font-medium hover:underline"
              >
                View all resources
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Whitepapers" },
              { value: "30+", label: "Case Studies" },
              { value: "20+", label: "Videos" },
              { value: "10K+", label: "Downloads" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-accent-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-steel text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution Brief?
          </h2>
          <p className="text-gray-300 mb-8">
            Our team can prepare tailored materials addressing your specific
            mission requirements and technology challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Request Materials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
