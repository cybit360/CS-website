import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Lock,
  Building,
  Monitor,
  Users,
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Past Performance",
  description:
    "Review CybitSolutions' proven track record delivering mission-critical IT solutions for DoD, federal civilian agencies, and enterprise clients.",
};

const majorCaseStudies = [
  {
    id: "dod-c3bm-abms",
    icon: Shield,
    client: "DoD Air Force & Space Force",
    title: "C3BM / ABMS (JADC2)",
    period: "Multi-Year Program",
    value: "Major DoD Program",
    summary:
      "Designed and implemented secure, zero-trust cloud battle network enabling sensor-to-shooter decision advantage across air, space, and cyber domains as part of the Joint All-Domain Command and Control (JADC2) initiative.",
    highlights: [
      "Zero-Trust Architecture Design & Implementation",
      "ICAM/PKI Identity & Access Management",
      "RMF/ATO Authorization & Continuous Monitoring",
      "Multi-domain Command & Control Integration",
      "Cloud-native Security Operations",
    ],
    technologies: ["Zero-Trust", "ICAM/PKI", "RMF/ATO", "AWS GovCloud", "Kubernetes"],
    outcome: "Achieved continuous ATO readiness with faster mission data exchange across multi-domain operations.",
  },
  {
    id: "dos-cakmi",
    icon: Lock,
    client: "Department of State",
    title: "Consular Affairs Key Management Infrastructure (CAKMI)",
    period: "Multi-Year Contract",
    value: "Enterprise Security Program",
    summary:
      "Enterprise key management and database encryption modernization protecting global consular data 24x7 across hundreds of worldwide facilities. Centralized cryptographic key lifecycle management for one of the largest civilian federal databases.",
    highlights: [
      "HSM/PKI Cryptographic Key Management",
      "Oracle 19c Database Encryption",
      "CyberArk Privileged Access Management",
      "KMIP Key Interoperability Protocol",
      "24/7 Global Operations Support",
    ],
    technologies: ["HSM/PKI", "Oracle 19c", "CyberArk", "KMIP", "Thales"],
    outcome: "Centralized key management with full data-at-rest and data-in-motion encryption coverage.",
  },
  {
    id: "dos-ngem",
    icon: Globe,
    title: "Next Generation Enterprise Monitoring (NGEM)",
    client: "Department of State",
    period: "Multi-Year Contract",
    value: "Global Enterprise Platform",
    summary:
      "Modernized enterprise monitoring and observability platform serving diplomatic missions worldwide. Migrated legacy monitoring systems to modern, secure, cloud-enabled platforms providing comprehensive visibility across global IT infrastructure.",
    highlights: [
      "Enterprise Monitoring Modernization",
      "Observability Platform Deployment & Management",
      "Directory Services & Identity Federation",
      "Global Infrastructure Support",
      "Comprehensive Infrastructure Observability",
    ],
    technologies: ["Microsoft 365", "Exchange", "Active Directory", "Azure AD", "SCCM"],
    outcome: "Successful global monitoring platform modernization providing comprehensive observability across diplomatic infrastructure worldwide.",
  },
  {
    id: "dos-sparta-psim",
    icon: Building,
    title: "Diplomatic Security SPARTA PSIM",
    client: "Department of State",
    period: "Multi-Year Contract",
    value: "$73M Modernization Program",
    summary:
      "Unified physical security information management (PSIM) platform providing real-time situational awareness across worldwide diplomatic facilities. Integrated video surveillance, access control, and intrusion detection into a single operational dashboard.",
    highlights: [
      "Genetec Security Center Integration",
      "C-CURE Access Control Systems",
      "2D/3D Geospatial Dashboards",
      "Real-Time Video Analytics",
      "Global Facility Security Monitoring",
    ],
    technologies: ["Genetec", "C-CURE", "GIS/Mapping", "PSIM", "Video Analytics"],
    outcome: "Supported $73M modernization program with unified physical security across global facilities.",
  },
  {
    id: "dod-rapids-deers",
    icon: Users,
    title: "RAPIDS / DEERS",
    client: "Department of Defense (DMDC)",
    period: "Multi-Year Contract",
    value: "Enterprise Identity System",
    summary:
      "Supported the Real-Time Automated Personnel Identification System (RAPIDS) and Defense Enrollment Eligibility Reporting System (DEERS) serving millions of DoD personnel, dependents, and retirees worldwide for identity credential issuance and benefits eligibility verification.",
    highlights: [
      "Identity Credential Issuance (CAC)",
      "Benefits Eligibility Verification",
      "Database Administration & Optimization",
      "System Integration & Testing",
      "Global Help Desk & Tier 3 Support",
    ],
    technologies: ["Oracle", "Java", "LDAP", "PKI/CAC", "ServiceNow"],
    outcome: "Reliable identity credential services supporting millions of DoD personnel globally.",
  },
];

const microsoftCaseStudies = [
  {
    id: "ms-document-inventory",
    title: "Enterprise Document & Inventory Management Ecosystem",
    summary:
      "Comprehensive suite of Microsoft-powered applications transforming document management, inventory tracking, and policy distribution across the enterprise.",
    highlights: [
      "Architected end-to-end Inventory Management System using Power Apps and Dataverse with QR/Barcode scanning (90% data accuracy improvement)",
      "Centralized SharePoint-based DMS with automated version control and metadata tagging (60% reduction in file retrieval time)",
      "Circular & Policy Distribution App with digital acknowledgment tracking (100% compliance across 100,000+ employees)",
    ],
    technologies: ["Power Apps", "Dataverse", "SharePoint Online", "Power Automate"],
    outcome:
      "Unified document and inventory ecosystem delivering 90% data accuracy improvement and 100% policy compliance.",
  },
  {
    id: "ms-hr-operations",
    title: "Automated Human Resources & Operations Solutions",
    summary:
      "End-to-end HR and operations automation replacing manual, paper-based processes with intelligent Microsoft Power Platform workflows.",
    highlights: [
      "e-Leave Management System and Performance Appraisal App replacing manual processes with Power Automate approval workflows",
      "Employee Tracking & Registration System with Azure AD for secure authentication and real-time monitoring",
      "Unified Task & Schedule Management Application integrated with Microsoft Teams",
    ],
    technologies: ["Power Apps", "Power Automate", "Azure AD", "Microsoft Teams"],
    outcome:
      "Eliminated manual HR processes with automated workflows, secure authentication, and real-time team collaboration.",
  },
  {
    id: "ms-bi-analytics",
    title: "Business Intelligence & Data Analysis",
    summary:
      "Data-driven decision-making through interactive dashboards and centralized communication tools built on the Microsoft ecosystem.",
    highlights: [
      "Interactive Power BI dashboards tracking KPIs, inventory levels, and employee performance",
      "Custom Memo Application reducing email clutter with centralized audit trail",
    ],
    technologies: ["Power BI", "Power Apps", "Dataverse", "Microsoft 365"],
    outcome:
      "Real-time visibility into organizational KPIs with streamlined internal communications.",
  },
  {
    id: "ms-featured-inventory",
    title: "Featured Project: Automated Inventory & Asset Management System",
    summary:
      "End-to-end inventory solution using Power Apps (Canvas) and Dataverse replacing a legacy spreadsheet-based system with modern automation and analytics.",
    highlights: [
      "End-to-end inventory solution using Power Apps (Canvas) and Dataverse replacing legacy spreadsheet system",
      "Custom Power Automate workflows for low-stock alerts and automated purchase requisitions (50% reduction in stockouts)",
      "Power BI executive dashboard for real-time asset turnover and procurement trends",
      "QR/Barcode scanning improving data accuracy by 90% and cutting check-in time by half",
    ],
    technologies: ["Power Apps", "Dataverse", "Power Automate", "Power BI"],
    outcome:
      "50% reduction in stockouts, 90% data accuracy improvement, and real-time executive visibility into asset management.",
  },
  {
    id: "ms-featured-dms",
    title: "Featured Project: Enterprise Document Management System (DMS)",
    summary:
      "Centralized SharePoint Online repository replacing fragmented folder structures across 30+ departments with enterprise-grade security and collaboration.",
    highlights: [
      "Centralized SharePoint Online repository for 30+ departments replacing fragmented folder structures",
      "Granular access controls and Azure Information Protection (AIP) labels",
      "Automated document lifecycle management reducing manual filing time by 100+ hours per week",
      "Microsoft Teams integration for seamless real-time co-authoring for 10,000+ concurrent users",
    ],
    technologies: [
      "SharePoint Online",
      "Azure Information Protection",
      "Microsoft Teams",
      "Power Automate",
    ],
    outcome:
      "100+ hours per week saved in manual filing with secure, real-time collaboration for 10,000+ concurrent users.",
  },
  {
    id: "ms-featured-eleave",
    title: "Featured Project: Automated e-Leave & Appraisal Ecosystem",
    summary:
      "Custom Power Apps solution unifying leave management and performance tracking with multi-level approvals and comprehensive HR analytics.",
    highlights: [
      "Custom Power Apps solution for leave management and performance tracking",
      "Multi-level management approvals with automated email notifications and calendar sync",
      "Power BI dashboard for HR leadership (90% improvement in administrative oversight)",
      "Dataverse historical performance data providing 360-degree employee growth view",
    ],
    technologies: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "Microsoft 365"],
    outcome:
      "90% improvement in administrative oversight with 360-degree employee performance visibility.",
  },
];

const summaryCaseStudies = [
  "DoD Cloud Migration & FedRAMP Authorization",
  "Federal Agency Zero-Trust Architecture Design",
  "Enterprise SIEM/SOAR Platform Deployment",
  "Government Data Center Consolidation",
  "Agile DevSecOps Pipeline Implementation",
  "Federal CRM Modernization (Salesforce Gov)",
  "AI/ML Predictive Analytics Platform",
  "Enterprise ServiceNow ITSM Rollout",
  "Government Mobile App Development",
  "Federal Network SD-WAN Migration",
  "Cybersecurity Operations Center (SOC) Stand-Up",
  "Legacy Mainframe Modernization",
  "Enterprise Identity Management (ICAM)",
  "Federal Data Lake & BI Platform",
  "Government ERP Cloud Migration",
  "Secure Collaboration Platform Deployment",
  "Federal IoT Security Assessment",
  "Enterprise Backup & DR Solution",
  "Government Website 508 Remediation",
  "Classified Network Infrastructure Build",
  "Federal RPA Program Implementation",
  "Cloud Cost Optimization (FinOps)",
  "Endpoint Detection & Response (EDR)",
  "Government API Gateway Platform",
  "Federal IT Asset Management Program",
];

export default function PastPerformancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Proven Results
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Past Performance
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Mission-critical programs delivered for the Department of Defense,
            Department of State, and federal agencies. Every engagement backed by
            20+ years of operational excellence.
          </p>
        </div>
      </section>

      {/* Performance Visual */}
      <section className="py-12 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PageImage variant="cybersecurity" aspectRatio="video" />
            <PageImage variant="cloud" aspectRatio="video" />
            <PageImage variant="government" aspectRatio="video" />
          </div>
        </div>
      </section>

      {/* Microsoft Ecosystem Past Performance */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">
              Featured Microsoft Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Microsoft Ecosystem Past Performance
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Enterprise solutions built on the Microsoft Power Platform,
              SharePoint, Azure, and Microsoft 365 ecosystem.
            </p>
          </div>

          <div className="space-y-8">
            {microsoftCaseStudies.map((study) => (
              <div
                key={study.id}
                id={study.id}
                className="bg-cloud rounded-xl p-8 border border-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0078D4] text-white">
                        <Monitor className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#0078D4] uppercase tracking-wide">
                          Microsoft Ecosystem
                        </p>
                        <h3 className="text-xl font-bold text-navy">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-steel leading-relaxed mb-6">
                      {study.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-[#0078D4]/10 text-[#0078D4] px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 bg-white rounded-lg p-4">
                      <Award className="w-5 h-5 text-[#0078D4] shrink-0 mt-0.5" />
                      <p className="text-navy font-medium text-sm">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {study.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#0078D4] mt-0.5 shrink-0" />
                          <span className="text-sm text-steel">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Case Studies */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">
              Featured Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Major Case Studies
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Detailed performance summaries from our largest and most impactful
              government programs.
            </p>
          </div>

          <div className="space-y-8">
            {majorCaseStudies.map((study) => (
              <div
                key={study.id}
                id={study.id}
                className="bg-cloud rounded-xl p-8 border border-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy text-accent-cyan">
                        <study.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-wide">
                          {study.client}
                        </p>
                        <h3 className="text-xl font-bold text-navy">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-steel leading-relaxed mb-6">
                      {study.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-navy/5 text-navy px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 bg-white rounded-lg p-4">
                      <Award className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                      <p className="text-navy font-medium text-sm">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {study.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" />
                          <span className="text-sm text-steel">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-xs text-steel">
                        <span className="font-semibold">Period:</span>{" "}
                        {study.period}
                      </p>
                      <p className="text-xs text-steel mt-1">
                        <span className="font-semibold">Scope:</span>{" "}
                        {study.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Case Studies */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Additional Past Performance
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              A broader portfolio of projects across federal, defense, and
              enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {summaryCaseStudies.map((study) => (
              <div
                key={study}
                className="flex items-start gap-2 bg-white rounded-lg p-4 border border-border"
              >
                <CheckCircle className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-navy text-sm font-medium">{study}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to See Our Results in Action?
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Request detailed past performance references or discuss how our
            experience applies to your mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              Request References <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/capability-statements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors"
            >
              <FileText className="w-5 h-5" /> Download Capability Statement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
