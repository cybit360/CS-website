import Link from "next/link";
import {
  Heart,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  PiggyBank,
  Palmtree,
  ShieldCheck,
  GraduationCap,
  Laptop,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Collaboration First",
    description:
      "We believe the best solutions come from diverse teams working together toward a common mission.",
  },
  {
    icon: Target,
    title: "Mission Focus",
    description:
      "Every project we take on serves a purpose. Our work directly supports national security and public services.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We encourage curiosity, invest in R&D, and empower our people to explore emerging technologies.",
  },
];

const benefits = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Comprehensive medical, dental, and vision coverage for you and your family with multiple plan options.",
  },
  {
    icon: PiggyBank,
    title: "401(k) with Match",
    description:
      "Generous employer match on retirement contributions to help you build long-term financial security.",
  },
  {
    icon: Palmtree,
    title: "Generous PTO",
    description:
      "Flexible paid time off, federal holidays, and personal days to recharge and spend time with loved ones.",
  },
  {
    icon: ShieldCheck,
    title: "Clearance Sponsorship",
    description:
      "We sponsor and support security clearance processes for qualified candidates at all levels.",
  },
  {
    icon: GraduationCap,
    title: "Training & Certifications",
    description:
      "Tuition assistance, certification reimbursement, and access to industry-leading training platforms.",
  },
  {
    icon: Laptop,
    title: "Remote & Hybrid Options",
    description:
      "Flexible work arrangements including remote, hybrid, and on-site options depending on program requirements.",
  },
];

export default function CulturePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-14 h-14 text-accent-cyan" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Culture &amp; Benefits</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            At CybitSolutions, we invest in our people. Discover the culture,
            benefits, and opportunities that make us a top employer in federal
            technology.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-steel max-w-2xl mx-auto">
              Our culture is built on shared values that guide how we work, lead,
              and support each other every day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-sm text-center"
                >
                  <div className="w-16 h-16 bg-accent-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-steel">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Benefits &amp; Perks
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              We offer a comprehensive benefits package designed to support your
              health, finances, and career growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-cloud rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-steel text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work-Life Balance */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Work-Life Balance
            </h2>
            <p className="text-steel">
              We understand that great work happens when our team members feel
              supported both professionally and personally.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "Flexible schedules to accommodate personal and family needs",
              "Remote and hybrid work options across most programs",
              "Generous parental leave for growing families",
              "Employee wellness programs and resources",
              "Team events and community-building activities",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span className="text-steel">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Professional Development
            </h2>
            <p className="text-steel">
              Your growth is our priority. We provide the tools and support to
              help you advance your career in federal technology.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "Annual training budget for conferences and courses",
              "Industry certification reimbursement (AWS, Azure, CISSP, PMP, and more)",
              "Internal mentorship and leadership development programs",
              "Cross-functional project opportunities to broaden your expertise",
              "Clear career progression paths with regular reviews",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span className="text-steel">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-gray-300 mb-8">
            Explore open positions and take the next step in your career with
            CybitSolutions.
          </p>
          <Link
            href="/careers/open-roles"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            View Open Positions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
