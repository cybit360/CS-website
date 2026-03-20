import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  Download,
  MessageSquare,
  Headphones,
  Settings,
  LayoutDashboard,
  Users,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Enterprise IT Services & Platforms",
  description:
    "CybitSolutions enterprise IT services including ITSM, service desk, platform management, and end-user computing for government and commercial organizations.",
};

const functionalAreas = [
  {
    icon: Headphones,
    title: "IT Service Management (ITSM)",
    description:
      "Implement and optimize ITSM platforms like ServiceNow for incident, problem, change, and asset management aligned with ITIL best practices.",
    capabilities: [
      "ServiceNow Implementation & Customization",
      "ITIL Process Design & Automation",
      "Service Catalog & Self-Service Portal",
      "Incident & Problem Management",
      "Change & Release Management",
    ],
  },
  {
    icon: Settings,
    title: "ERP & CRM Modernization",
    description:
      "Modernize enterprise resource planning and customer relationship management platforms for federal environments with cloud-first approaches.",
    capabilities: [
      "SAP / Oracle ERP Modernization",
      "Salesforce Government Cloud",
      "Microsoft Dynamics 365",
      "ERP Cloud Migration",
      "Custom Integration Development",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "End-User Computing & Digital Workplace",
    description:
      "Deploy and manage modern digital workplace solutions including VDI, endpoint management, and collaboration tools for distributed federal workforces.",
    capabilities: [
      "Virtual Desktop Infrastructure (VDI)",
      "Endpoint Management (Intune/SCCM)",
      "Microsoft 365 / Google Workspace",
      "Digital Workplace Strategy",
      "BYOD & Mobile Device Management",
    ],
  },
  {
    icon: Users,
    title: "Managed IT Services & Help Desk",
    description:
      "24/7 managed IT operations and help desk services with tiered support, SLA management, and continuous improvement programs.",
    capabilities: [
      "24/7 Help Desk & Service Desk",
      "Tier 1-3 Technical Support",
      "Remote & On-Site Support",
      "Asset Lifecycle Management",
      "SLA Monitoring & Reporting",
    ],
  },
];

const services = [
  "ServiceNow ITSM Implementation",
  "ERP Cloud Migration & Modernization",
  "CRM Platform Deployment (Salesforce/Dynamics)",
  "Virtual Desktop Infrastructure (VDI)",
  "Microsoft 365 Government Deployment",
  "Managed Help Desk Services (24/7)",
  "Endpoint Detection & Response (EDR)",
  "IT Asset Management (ITAM)",
  "Configuration Management Database (CMDB)",
  "Enterprise Collaboration Platforms",
  "Print & Peripheral Management",
  "IT Operations Automation",
];

const standards = [
  "ITIL v4",
  "ISO 20000",
  "COBIT 2019",
  "NIST SP 800-53",
  "FedRAMP",
  "Section 508",
  "DISA STIGs",
  "ISO 27001",
];

const benefits = [
  "ITSM automation reducing ticket resolution times by 40%+",
  "Cloud-based ERP/CRM reducing maintenance overhead",
  "VDI enabling secure remote work for cleared personnel",
  "24/7 help desk with 95%+ first-call resolution rates",
  "ITIL-aligned processes ensuring consistent service delivery",
  "Unified endpoint management across devices and platforms",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of State (DoS)",
  "Federal Civilian Agencies",
  "State & Local Government",
  "Healthcare Systems",
  "Educational Institutions",
  "Financial Services",
  "Enterprise Organizations",
];

export default function EnterpriseITPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Monitor className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">Service Domain</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Enterprise IT Services
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            ServiceNow, ERP/CRM modernization, and ITSM platforms delivering operational excellence for federal and enterprise environments.
          </p>
        </div>
      </section>

      {/* Visual Accent */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageImage variant="office" aspectRatio="wide" className="shadow-lg" />
        </div>
      </section>

      <section className="pt-6 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions provides comprehensive enterprise IT services that modernize operations, improve service delivery, and reduce costs. From ITSM platform implementation and ERP/CRM modernization to managed help desk services and digital workplace solutions, we help federal agencies and enterprises run their IT environments efficiently, securely, and at scale.
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
                <Monitor className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
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
          <h2 className="text-3xl font-bold text-navy mb-4">Optimize Your Enterprise IT</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From ServiceNow to managed services, we make your IT operations more efficient, secure, and user-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-we-do/capability-statements" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors">
              <Download className="w-5 h-5" /> Capability Statement
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors">
              <MessageSquare className="w-5 h-5" /> Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
