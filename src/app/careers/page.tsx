import Link from "next/link";
import {
  Briefcase,
  ArrowRight,
  Users,
  Heart,
  MessageSquare,
  Rocket,
  Shield,
  GraduationCap,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Mission-Driven Work",
    description:
      "Contribute to projects that directly impact national security and public services. Your work matters at CybitSolutions.",
  },
  {
    icon: GraduationCap,
    title: "Growth & Development",
    description:
      "Access continuous learning opportunities, certification support, and clear career paths that help you reach your full potential.",
  },
  {
    icon: Shield,
    title: "Industry Leadership",
    description:
      "Work alongside recognized experts in cybersecurity, cloud, and AI/ML, tackling the most complex federal technology challenges.",
  },
];

const sections = [
  {
    title: "Open Positions",
    description:
      "Browse our current job openings across engineering, cybersecurity, cloud, and management. Find the role that matches your skills and ambitions.",
    href: "/careers/open-roles",
    icon: Briefcase,
  },
  {
    title: "Culture & Benefits",
    description:
      "Discover what makes CybitSolutions a great place to work, from comprehensive benefits to a collaborative and inclusive environment.",
    href: "/careers/culture",
    icon: Heart,
  },
  {
    title: "Employee Testimonials",
    description:
      "Hear directly from our team members about their experiences, career growth, and why they choose CybitSolutions.",
    href: "/careers/testimonials",
    icon: MessageSquare,
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Briefcase className="w-14 h-14 text-accent-cyan" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Careers at CybitSolutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join a team of innovators and problem-solvers dedicated to
            delivering secure, mission-critical technology solutions for the
            federal government.
          </p>
          <div className="mt-10">
            <Link
              href="/careers/open-roles"
              className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
            >
              View Open Roles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why CybitSolutions?
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              We invest in our people because they are the foundation of every
              successful mission we support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-8 shadow-sm text-center"
                >
                  <div className="w-16 h-16 bg-accent-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-steel">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Explore Careers
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Learn more about life at CybitSolutions and find your next
              opportunity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="bg-cloud rounded-2xl p-8 hover:shadow-lg transition group"
                >
                  <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-cyan/20 transition">
                    <Icon className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {section.title}
                  </h3>
                  <p className="text-steel mb-6">{section.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent-cyan font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cloud py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Team Members" },
              { value: "95%", label: "Retention Rate" },
              { value: "4.8/5", label: "Employee Satisfaction" },
              { value: "50+", label: "Open Roles" },
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
          <Users className="w-10 h-10 text-accent-cyan mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-gray-300 mb-8">
            Explore our open positions and take the next step in your career
            with CybitSolutions.
          </p>
          <Link
            href="/careers/open-roles"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Browse Open Roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
