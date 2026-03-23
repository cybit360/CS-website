import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Cpu,
  FileText,
  Users,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Mail,
  Shield,
  Globe,
  TrendingUp,
  Award,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PartnerForm } from "@/components/ui/PartnerForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Explore partnership opportunities with CybitSolutions. Joint ventures, teaming agreements, and technology partnerships for government contracting.",
};

const partnershipTypes = [
  {
    icon: Cpu,
    title: "Technology Partners",
    description:
      "Collaborate on cutting-edge solutions by integrating your technology with our federal IT delivery capabilities. We partner with leading OEMs and SaaS providers.",
    highlights: ["Joint solution development", "Co-marketing opportunities", "Technical integration support"],
  },
  {
    icon: FileText,
    title: "Subcontracting",
    description:
      "Leverage CybitSolutions as a prime or subcontractor on federal contracts. We bring deep domain expertise and proven past performance across civilian and defense agencies.",
    highlights: ["Federal contract vehicles", "Cleared personnel", "Agile delivery teams"],
  },
  {
    icon: Users,
    title: "Teaming Agreements",
    description:
      "Form strategic teaming arrangements to pursue large-scale federal opportunities. Pool complementary capabilities to deliver comprehensive solutions.",
    highlights: ["Complementary capabilities", "Shared risk and reward", "Expanded contract reach"],
  },
  {
    icon: GraduationCap,
    title: "Mentor-Protege",
    description:
      "Participate in SBA Mentor-Protege programs to develop small business capacity. CybitSolutions is committed to fostering growth in the federal contracting ecosystem.",
    highlights: ["SBA program participation", "Capacity building", "Joint venture opportunities"],
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Trusted Federal Partner",
    description:
      "Benefit from our established relationships and proven track record with federal agencies across civilian and defense sectors.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description:
      "Access opportunities across the country with our distributed workforce and multiple office locations supporting federal missions.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Expand your market presence through joint pursuits on high-value federal contracts and task orders.",
  },
  {
    icon: Award,
    title: "Quality & Compliance",
    description:
      "Partner with a company that maintains rigorous quality standards, CMMI maturity, and full federal compliance.",
  },
];

export default function PartnerPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Contact", href: "/contact" }, { label: "Partner With Us" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Partner With Us
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join forces with CybitSolutions to deliver transformative technology
            solutions for federal agencies. Together, we can achieve more.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              We offer multiple partnership models designed to create mutual
              value and deliver exceptional outcomes for our federal clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent-cyan/10">
                      <Icon className="w-7 h-7 text-accent-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">{type.title}</h3>
                  </div>
                  <p className="text-steel mb-5">{type.description}</p>
                  <ul className="space-y-2">
                    {type.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-steel"
                      >
                        <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why Partner With CybitSolutions?
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Our partners gain access to a proven federal IT services company
              with deep technical expertise and a commitment to shared success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-accent-cyan/10 mb-4">
                    <Icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-steel text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Inquiry Form */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Submit a Partnership Inquiry
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Interested in partnering with CybitSolutions? Fill out the form
              below and our partnerships team will reach out to start a
              conversation about how we can work together.
            </p>
            <div className="flex items-center justify-center gap-2 text-accent-cyan font-semibold mt-4">
              <Mail className="w-5 h-5" />
              info@cybitsolutions.net
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <PartnerForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-steel max-w-2xl mx-auto mb-8">
            Whether you are a technology provider, small business, or large
            enterprise, we have a partnership model that fits your goals.
          </p>
          <Link
            href="/what-we-do/capability-statements"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Our Capabilities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
