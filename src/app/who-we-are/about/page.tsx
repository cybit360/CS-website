import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Target,
  Lightbulb,
  Handshake,
  Award,
  Users,
  CheckCircle,
  Star,
  Rocket,
  Flag,
} from "lucide-react";
import { PageImage } from "@/components/ui/PageImage";
import { AnimatedSection } from "@/components/animations/AnimatedAboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CybitSolutions is a Veteran-Owned, Minority-Owned IT firm delivering secure, scalable technology solutions. Learn about our mission, values, and 20+ year history.",
};

const timeline = [
  {
    year: "2003",
    title: "Founded",
    description:
      "CybitSolutions established as a veteran-owned IT services company focused on federal cybersecurity and infrastructure.",
    icon: Flag,
  },
  {
    year: "2008",
    title: "First Major Contract",
    description:
      "Awarded our first multi-year DoD contract supporting global key management and cryptographic systems.",
    icon: Star,
  },
  {
    year: "2015",
    title: "Rapid Growth",
    description:
      "Expanded to 100+ employees with new capabilities in cloud migration, data analytics, and DevSecOps.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description:
      "Recognized with multiple industry awards for innovation in AI-driven cybersecurity and zero-trust architecture.",
    icon: Award,
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every engagement, earning the trust of our clients and partners.",
  },
  {
    icon: Target,
    title: "Mission Focus",
    description:
      "Every decision and deliverable is measured against its impact on the mission our clients serve.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We invest in emerging technologies and creative approaches to solve tomorrow's challenges today.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We build lasting relationships by treating every client engagement as a true partnership.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Our team is our greatest asset. We invest in professional growth, well-being, and career development.",
  },
  {
    icon: CheckCircle,
    title: "Excellence",
    description:
      "We pursue continuous improvement in quality, security, and delivery across every program.",
  },
];

const certifications = [
  "SDVOSB Certified",
  "CMMC Level 3",
  "ISO 27001",
  "ISO 9001",
  "FedRAMP Authorized",
  "TS/SCI Facility Clearance",
  "SOC 2 Type II",
  "ITIL v4 Certified Staff",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            About CybitSolutions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A veteran-owned small business with 20+ years of experience
            delivering mission-critical IT solutions to federal agencies and
            defense organizations worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Company Overview Visual */}
          <AnimatedSection>
            <div className="mb-16">
              <PageImage variant="office" aspectRatio="wide" className="max-w-4xl mx-auto" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-steel leading-relaxed mb-4">
                CybitSolutions was founded with a clear purpose: to bring
                military-grade discipline and innovation to the world of federal
                IT. As a Service-Disabled Veteran-Owned Small Business, we
                understand the operational demands, security imperatives, and
                accountability standards that define government technology.
              </p>
              <p className="text-steel leading-relaxed mb-4">
                From our first cybersecurity contract to becoming a trusted
                partner across DoD, DoS, and civilian agencies, we have grown by
                consistently delivering results that matter. Our team of 150+
                cleared professionals brings deep domain expertise across
                cybersecurity, cloud, AI, and enterprise IT.
              </p>
              <p className="text-steel leading-relaxed">
                Today, CybitSolutions operates across multiple CONUS and OCONUS
                locations, supporting critical missions that protect national
                security and advance government modernization.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-navy mb-4">
                Mission & Vision
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-accent-cyan font-semibold mb-2">
                    Our Mission
                  </h4>
                  <p className="text-steel leading-relaxed">
                    To deliver innovative, secure, and reliable IT solutions
                    that empower federal agencies to accomplish their most
                    critical missions.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="text-accent-cyan font-semibold mb-2">
                    Our Vision
                  </h4>
                  <p className="text-steel leading-relaxed">
                    To be the most trusted technology partner for organizations
                    protecting national security, advancing government
                    modernization, and serving the public good.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Journey</h2>
            <p className="text-steel max-w-2xl mx-auto text-lg leading-relaxed">
              Key milestones that shaped CybitSolutions into the company we are
              today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative bg-cloud rounded-xl p-6 border border-border card-hover"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan mb-4">
                  <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-bold text-accent-cyan mb-2">
                  {item.year}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg leading-relaxed">
              The principles that guide every decision, every engagement, and
              every relationship at CybitSolutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 border border-border card-hover"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent-cyan/10 text-accent-cyan mb-6">
                  <value.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-steel leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Certifications & Clearances
          </h2>
          <p className="text-steel max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Industry-recognized certifications and government clearances that
            qualify us for the most sensitive programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 px-5 py-3 bg-cloud rounded-lg border border-border text-navy font-semibold text-sm hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-accent-cyan" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Learn more about our capabilities or start a conversation about your
            next mission-critical project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/what-we-do/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-navy/5 transition-colors"
            >
              View Our Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
