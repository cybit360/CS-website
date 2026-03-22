import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Search,
  PenTool,
  Hammer,
  Settings,
  Lightbulb,
  FlaskConical,
  ShieldCheck,
  Award,
  Target,
  Cpu,
  BarChart3,
  Users,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Discover CybitSolutions' proven four-phase delivery methodology, commitment to innovation, and quality-first approach to federal IT solutions.",
};

const phases = [
  {
    number: "01",
    name: "Discovery",
    icon: Search,
    color: "bg-accent-cyan/10 text-accent-cyan",
    description:
      "We begin every engagement by deeply understanding your mission, stakeholders, and operational environment. Our discovery phase establishes the strategic foundation for measurable success.",
    activities: [
      "Stakeholder interviews and mission analysis",
      "Current-state architecture assessment",
      "Requirements gathering and gap analysis",
      "Risk identification and mitigation planning",
      "Compliance and security baseline review",
    ],
    outcome: "Mission-aligned roadmap with clear success criteria",
  },
  {
    number: "02",
    name: "Design",
    icon: PenTool,
    color: "bg-blue-500/10 text-blue-500",
    description:
      "Our architects translate mission requirements into detailed technical blueprints. Every design decision is validated against security, scalability, and compliance requirements before implementation begins.",
    activities: [
      "Solution architecture and design documentation",
      "Security architecture and zero-trust design",
      "Infrastructure sizing and capacity planning",
      "Integration mapping and API strategy",
      "Prototype development and design validation",
    ],
    outcome: "Validated technical blueprint ready for agile execution",
  },
  {
    number: "03",
    name: "Build",
    icon: Hammer,
    color: "bg-emerald-500/10 text-emerald-500",
    description:
      "We execute iteratively using DevSecOps practices, delivering working capabilities every sprint. Continuous integration, automated testing, and security scanning are embedded from day one.",
    activities: [
      "Agile sprint execution with 2-week cycles",
      "CI/CD pipeline automation and DevSecOps",
      "Continuous security scanning and compliance checks",
      "User acceptance testing and feedback loops",
      "Incremental deployment and migration execution",
    ],
    outcome: "Production-ready solution delivered on schedule",
  },
  {
    number: "04",
    name: "Operate",
    icon: Settings,
    color: "bg-purple-500/10 text-purple-500",
    description:
      "Post-deployment, we provide 24/7 managed services, proactive monitoring, and continuous improvement. Our operations teams maintain SLA compliance while identifying opportunities for optimization.",
    activities: [
      "24/7 monitoring and incident response",
      "SLA management and performance reporting",
      "Proactive capacity and security management",
      "Continuous improvement and optimization",
      "Knowledge transfer and staff augmentation",
    ],
    outcome: "Sustained operational excellence with 99.9%+ uptime",
  },
];

const innovationAreas = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Exploring AIOps, predictive analytics, and intelligent automation to enhance operational efficiency across federal IT environments.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    description:
      "Advancing zero-trust implementations aligned with CISA maturity models and DoD reference architectures for continuous security validation.",
  },
  {
    icon: FlaskConical,
    title: "Emerging Technologies",
    description:
      "Evaluating quantum-resistant cryptography, edge computing, and 5G integration for next-generation government infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Building advanced analytics platforms and data mesh architectures that transform raw data into actionable mission intelligence.",
  },
];

const qualityCommitments = [
  {
    title: "CMMI Level 3 Processes",
    description:
      "Defined and managed processes for software development and service delivery, ensuring consistency and repeatability across all programs.",
  },
  {
    title: "ISO 27001 Security Management",
    description:
      "Information security management system ensuring systematic protection of client data and infrastructure at every stage of delivery.",
  },
  {
    title: "FedRAMP & FISMA Compliance",
    description:
      "All solutions are designed and operated in compliance with federal security standards including NIST 800-53, FedRAMP, and FISMA requirements.",
  },
  {
    title: "Continuous ATO Practices",
    description:
      "Automated compliance monitoring and continuous authorization processes that maintain security posture without slowing delivery velocity.",
  },
  {
    title: "Agile & DevSecOps Standards",
    description:
      "SAFe and Scrum frameworks combined with DevSecOps practices ensure rapid, secure, and transparent delivery with full traceability.",
  },
  {
    title: "Cleared Workforce Management",
    description:
      "Rigorous hiring, continuous evaluation, and professional development programs ensuring our staff meets the highest federal standards.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-accent-cyan rounded-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "What We Do", href: "/what-we-do" }, { label: "Our Approach" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            How We Deliver
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our Approach
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A proven four-phase methodology that transforms complex federal IT
            challenges into mission-ready solutions — on time, on budget, and
            fully compliant.
          </p>
        </div>
      </section>

      {/* Methodology Timeline */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Four-Phase Delivery Methodology
          </h2>
          <p className="text-steel text-center max-w-2xl mx-auto mb-16">
            Every engagement follows our battle-tested framework, tailored to
            the unique requirements of each mission
          </p>

          {/* Phase Navigation */}
          <div className="flex items-center justify-center gap-2 mb-16">
            {phases.map((phase, index) => (
              <div key={phase.name} className="flex items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border">
                  <span className="text-accent-cyan font-bold text-sm">
                    {phase.number}
                  </span>
                  <span className="text-navy font-semibold text-sm hidden sm:inline">
                    {phase.name}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-accent-cyan mx-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          {/* Phase Details */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <FadeIn key={phase.name} delay={index * 0.1}>
              <div
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Phase Header */}
                  <div className="lg:col-span-4 bg-navy p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-lg ${phase.color}`}
                      >
                        <phase.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-accent-cyan text-sm font-medium">
                          Phase {phase.number}
                        </p>
                        <h3 className="text-2xl font-bold text-white">
                          {phase.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Phase Content */}
                  <div className="lg:col-span-8 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
                          Key Activities
                        </h4>
                        <ul className="space-y-3">
                          {phase.activities.map((activity) => (
                            <li
                              key={activity}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                              <span className="text-sm text-steel">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-end">
                        <div className="bg-cloud rounded-lg p-6 w-full">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5 text-accent-cyan" />
                            <h4 className="text-sm font-semibold text-navy uppercase tracking-wider">
                              Phase Outcome
                            </h4>
                          </div>
                          <p className="text-steel text-sm leading-relaxed">
                            {phase.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & R&D */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-accent-cyan" />
              <h2 className="text-3xl font-bold text-navy">
                Innovation &amp; R&amp;D
              </h2>
            </div>
            <p className="text-steel text-center max-w-2xl mx-auto mb-12">
              We invest continuously in emerging technologies and capabilities
              that will define the next generation of federal IT
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((area) => (
              <StaggerItem
                key={area.title}
                className="bg-cloud rounded-xl p-6 border border-border card-hover"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-cyan/10 text-accent-cyan mb-4">
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed">
                  {area.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-accent-cyan" />
              <h2 className="text-3xl font-bold text-navy">
                Quality &amp; Compliance Commitment
              </h2>
            </div>
            <p className="text-steel text-center max-w-2xl mx-auto mb-12">
              Rigorous standards and certified processes ensure every deliverable
              meets the highest federal quality and security requirements
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityCommitments.map((commitment) => (
              <StaggerItem
                key={commitment.title}
                className="bg-white rounded-xl p-6 border border-border card-hover"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                  <h3 className="text-base font-bold text-navy">
                    {commitment.title}
                  </h3>
                </div>
                <p className="text-sm text-steel leading-relaxed pl-8">
                  {commitment.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              Why Our Approach Works
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                metric: "20+",
                label: "Years of Federal Experience",
              },
              {
                icon: ShieldCheck,
                metric: "100%",
                label: "ATO Success Rate",
              },
              {
                icon: Target,
                metric: "99.9%",
                label: "Average SLA Uptime",
              },
              {
                icon: Award,
                metric: "50+",
                label: "Active Cleared Staff",
              },
            ].map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-navy/5 text-accent-cyan mx-auto mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <p className="text-4xl font-bold text-accent-cyan mb-2">
                  {stat.metric}
                </p>
                <p className="text-sm text-steel">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let Us Apply Our Approach to Your Mission
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
            Schedule a discovery session with our solutions architects and see
            how our proven methodology can accelerate your program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan-dark transition-colors"
            >
              Schedule a Discovery Session <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
