import Link from "next/link";
import {
  Server,
  Download,
  MessageSquare,
  FileText,
  Network,
  Radio,
  HardDrive,
  Wifi,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const functionalAreas = [
  {
    icon: HardDrive,
    title: "Data Center & Facility Infrastructure",
    description:
      "Design, build, and modernize Tier III/IV data centers with redundant power, cooling, and connectivity. Support for SCIF and classified environments.",
    capabilities: [
      "Data Center Design & Build",
      "Colocation & Hosting Services",
      "Power & Cooling Optimization",
      "SCIF Infrastructure Support",
      "Green Data Center Initiatives",
    ],
  },
  {
    icon: Network,
    title: "Network Architecture & SD-WAN",
    description:
      "Enterprise network design with SD-WAN, MPLS, and zero-trust network access. High-availability architectures for mission-critical operations.",
    capabilities: [
      "SD-WAN Design & Deployment",
      "MPLS & WAN Optimization",
      "Zero-Trust Network Access (ZTNA)",
      "Network Segmentation & Microsegmentation",
      "IPv6 Migration & Dual-Stack",
    ],
  },
  {
    icon: Radio,
    title: "Unified Communications & Collaboration",
    description:
      "Deploy and manage UC platforms including VoIP, video conferencing, and secure messaging for distributed federal workforces.",
    capabilities: [
      "VoIP & SIP Trunking",
      "Video Conferencing Platforms",
      "Secure Messaging & Chat",
      "Contact Center Solutions",
      "UC Platform Integration",
    ],
  },
  {
    icon: Wifi,
    title: "Wireless & Edge Infrastructure",
    description:
      "Wireless network design for campus, field, and tactical environments. IoT-ready edge infrastructure with secure connectivity.",
    capabilities: [
      "Enterprise Wi-Fi 6/6E Design",
      "Edge Computing Infrastructure",
      "IoT Network Architecture",
      "Tactical & Field Deployments",
      "Spectrum Management",
    ],
  },
];

const services = [
  "Data Center Consolidation & Modernization",
  "SD-WAN Architecture & Migration",
  "Network Infrastructure Assessment",
  "Unified Communications Deployment",
  "Cabling & Physical Infrastructure",
  "Load Balancing & Traffic Management",
  "DNS, DHCP & IP Address Management (DDI)",
  "Wireless Site Surveys & Deployment",
  "Edge Computing & IoT Infrastructure",
  "Network Monitoring & Management",
  "Disaster Recovery Site Design",
  "SCIF & Classified Network Build-Out",
];

const standards = [
  "DISA STIGs",
  "TIA-942 Data Center",
  "BICSI Standards",
  "IEEE 802.11ax (Wi-Fi 6)",
  "NIST SP 800-82",
  "ICS/SCADA Security",
  "Uptime Institute Tiers",
  "ASHRAE Thermal Guidelines",
];

const benefits = [
  "Resilient, redundant infrastructure with 99.999% uptime targets",
  "SD-WAN reducing WAN costs by 30-50% with improved performance",
  "SCIF-ready designs meeting ICD 705 requirements",
  "Unified communications enabling secure remote collaboration",
  "Edge infrastructure extending compute to tactical environments",
  "Energy-efficient designs reducing operational costs",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of State (DoS)",
  "Federal Civilian Agencies",
  "Intelligence Community (IC)",
  "State & Local Government",
  "Healthcare Systems",
  "Financial Institutions",
  "Critical Infrastructure",
];

export default function InfrastructurePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Server className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Service Domain
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            IT Infrastructure &amp; Networking
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Resilient data centers, SD-WAN, and unified communications
            engineered for mission-critical government and enterprise
            environments.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions builds and manages the foundational infrastructure
              that powers federal missions and enterprise operations. From
              Tier III/IV data centers and SD-WAN architectures to unified
              communications and edge computing, our infrastructure practice
              delivers resilient, high-performance environments that meet the
              most demanding availability and security requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Functional Areas */}
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Example Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3 bg-cloud rounded-lg p-4">
                <Server className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-navy font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
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

      {/* Benefits & Customers */}
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

      {/* CTA */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Modernize Your Infrastructure</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From data center design to SD-WAN deployment, our engineers build infrastructure that never quits.
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
