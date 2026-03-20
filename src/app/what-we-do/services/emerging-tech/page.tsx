import type { Metadata } from "next";
import Link from "next/link";
import {
  Atom,
  Download,
  MessageSquare,
  Lock,
  Link2,
  Cpu,
  Leaf,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "Emerging & Next-Gen Technologies",
  description:
    "CybitSolutions emerging technology services including quantum computing, blockchain, edge computing, and green IT for forward-looking government programs.",
};

const functionalAreas = [
  {
    icon: Lock,
    title: "Quantum Computing & Post-Quantum Cryptography",
    description:
      "Prepare for the quantum era with quantum readiness assessments, post-quantum cryptography migration, and quantum computing exploration for defense and federal applications.",
    capabilities: [
      "Quantum Readiness Assessments",
      "Post-Quantum Cryptography (PQC) Migration",
      "Quantum Algorithm Research",
      "Hybrid Classical-Quantum Solutions",
      "Quantum Key Distribution (QKD) Analysis",
    ],
  },
  {
    icon: Link2,
    title: "Blockchain & Distributed Ledger",
    description:
      "Enterprise blockchain solutions for supply chain transparency, identity management, secure voting, and tamper-proof record-keeping in government environments.",
    capabilities: [
      "Blockchain Feasibility Assessments",
      "Distributed Ledger Design",
      "Smart Contract Development",
      "Supply Chain Provenance",
      "Digital Identity & Credentialing",
    ],
  },
  {
    icon: Cpu,
    title: "IoT & Edge Computing",
    description:
      "Deploy secure IoT ecosystems and edge computing platforms for smart buildings, tactical environments, and industrial operations with real-time data processing.",
    capabilities: [
      "IoT Architecture & Security",
      "Edge Computing Platforms",
      "Smart Building & Facility IoT",
      "Industrial IoT (IIoT) Solutions",
      "Tactical Edge Deployments",
    ],
  },
  {
    icon: Leaf,
    title: "Green IT & Sustainability",
    description:
      "Sustainable IT strategies reducing energy consumption, carbon footprint, and e-waste while meeting federal sustainability mandates and Executive Orders.",
    capabilities: [
      "Green Data Center Design",
      "Energy-Efficient Infrastructure",
      "E-Waste Management Programs",
      "Carbon Footprint Analytics",
      "Sustainability Reporting Dashboards",
    ],
  },
];

const services = [
  "Quantum Readiness Assessment",
  "Post-Quantum Cryptography Migration",
  "Blockchain Proof-of-Concept Development",
  "IoT Platform Architecture & Security",
  "Edge Computing Design & Deployment",
  "Smart Building IoT Solutions",
  "Digital Twin Development",
  "Green IT Strategy & Implementation",
  "Emerging Technology Scouting",
  "Innovation Lab & Pilot Programs",
  "Technology Feasibility Studies",
  "Sustainability Reporting Solutions",
];

const standards = [
  "NIST PQC Standards",
  "NIST IoT Cybersecurity",
  "IEEE IoT Standards",
  "EO 14057 (Sustainability)",
  "LEED / Energy Star",
  "ISO 14001",
  "W3C DID Standards",
  "CISA IoT Security",
];

const benefits = [
  "Quantum-ready cryptography protecting against future threats",
  "Blockchain enabling tamper-proof audit trails and transparency",
  "IoT providing real-time operational intelligence from connected assets",
  "Edge computing reducing latency for tactical and field operations",
  "Green IT strategies reducing energy costs by 25-40%",
  "Innovation labs de-risking emerging technology adoption",
];

const customers = [
  "Department of Defense (DoD)",
  "Intelligence Community (IC)",
  "Federal Civilian Agencies",
  "Department of Energy (DOE)",
  "NASA & Space Programs",
  "Defense Contractors",
  "Critical Infrastructure",
  "Research Institutions",
];

export default function EmergingTechPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Atom className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">Service Domain</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Emerging Technologies
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Quantum, blockchain, IoT, and green IT innovation preparing your organization for the technologies of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions explores and operationalizes emerging technologies that will define the next generation of government and enterprise IT. From post-quantum cryptography and blockchain to IoT ecosystems and green IT initiatives, our emerging technology practice helps organizations evaluate, pilot, and scale transformative technologies with managed risk and federal-grade security.
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
                <Atom className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
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
          <h2 className="text-3xl font-bold text-navy mb-4">Explore What is Next</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From quantum readiness to IoT deployments, we help you adopt emerging technologies with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-we-do/capability-statements" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors">
              <Download className="w-5 h-5" /> Capability Statement
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors">
              <MessageSquare className="w-5 h-5" /> Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
