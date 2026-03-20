import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Download,
  MessageSquare,
  Smartphone,
  RefreshCw,
  Layout,
  Workflow,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Digital Transformation & Government IT",
  description:
    "CybitSolutions digital transformation services including IT modernization, citizen experience platforms, and government technology strategy.",
};

const functionalAreas = [
  {
    icon: Layout,
    title: "GovTech Platforms & Citizen Portals",
    description:
      "Design and deploy citizen-facing digital services, self-service portals, and government platforms that improve public engagement and service delivery.",
    capabilities: [
      "Citizen Self-Service Portals",
      "Government CMS & Content Platforms",
      "Digital Forms & Workflow Automation",
      "Multi-Language & Accessibility (508)",
      "Identity Verification & Login.gov",
    ],
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization & Migration",
    description:
      "Migrate legacy mainframe and monolithic applications to modern, cloud-native architectures using proven modernization patterns and risk mitigation strategies.",
    capabilities: [
      "Application Portfolio Assessment",
      "Mainframe-to-Cloud Migration",
      "Monolith-to-Microservices Refactoring",
      "Database Modernization",
      "API-First Architecture Design",
    ],
  },
  {
    icon: Workflow,
    title: "Business Process Reengineering",
    description:
      "Analyze, redesign, and automate business processes to eliminate waste, improve efficiency, and align operations with digital-first strategies.",
    capabilities: [
      "Process Analysis & Mapping",
      "Lean Six Sigma Optimization",
      "Workflow Automation Design",
      "Organizational Change Management",
      "Digital Maturity Assessments",
    ],
  },
  {
    icon: Smartphone,
    title: "Omni-Channel Experience Design",
    description:
      "Create seamless user experiences across web, mobile, kiosks, and contact centers with user-centered design and accessibility-first principles.",
    capabilities: [
      "UX Research & Design",
      "Responsive Web Design",
      "Progressive Web Apps (PWA)",
      "Mobile-First Strategy",
      "Customer Journey Mapping",
    ],
  },
];

const services = [
  "Digital Transformation Strategy & Roadmap",
  "Citizen Portal Design & Development",
  "Legacy Application Modernization",
  "Business Process Reengineering",
  "Organizational Change Management",
  "UX/UI Design & Accessibility",
  "Government CMS Implementation",
  "Digital Forms & e-Signature",
  "Mobile Application Development",
  "API Strategy & Integration",
  "Digital Maturity Assessment",
  "Customer Experience Optimization",
];

const standards = [
  "21st Century IDEA Act",
  "Section 508 / WCAG 2.2",
  "USWDS (U.S. Web Design)",
  "Login.gov Standards",
  "OMB M-23-22",
  "Federal CX Standards",
  "TOGAF",
  "Lean Six Sigma",
];

const benefits = [
  "Citizen-centric digital services improving public satisfaction",
  "Legacy modernization reducing maintenance costs by 50%+",
  "508-compliant designs ensuring universal accessibility",
  "Agile delivery accelerating digital transformation timelines",
  "Change management ensuring successful adoption at scale",
  "API-first architecture enabling interoperability and reuse",
];

const customers = [
  "Federal Civilian Agencies",
  "Department of State (DoS)",
  "Department of Veterans Affairs",
  "State & Local Government",
  "Healthcare (HHS, CMS)",
  "Education (ED)",
  "Transportation (DOT)",
  "Social Services Agencies",
];

export default function DigitalTransformationPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Globe className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">Service Domain</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Digital Transformation
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            GovTech platforms, citizen portals, and legacy modernization driving government and enterprise into the digital age.
          </p>
        </div>
      </section>

      {/* Visual Accent */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageImage variant="government" aspectRatio="wide" className="shadow-lg" />
        </div>
      </section>

      <section className="pt-6 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions partners with government agencies and enterprises to reimagine how they deliver services, engage citizens, and operate in a digital-first world. From legacy modernization and citizen portal development to business process reengineering and organizational change management, we guide organizations through every phase of their digital transformation journey.
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
                <Globe className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
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
          <h2 className="text-3xl font-bold text-navy mb-4">Start Your Digital Transformation</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Modernize legacy systems, reimagine citizen services, and accelerate your digital journey with our team.
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
