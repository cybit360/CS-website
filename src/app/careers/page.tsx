import type { Metadata } from "next";
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
import { PageImage } from "@/components/ui/PageImage";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { CountUp } from "@/components/animations/CountUp";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CybitSolutions and build your career in mission-critical IT. Explore open roles in cybersecurity, cloud, AI, and federal technology programs.",
};

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
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Careers" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Join Our Team
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Careers at CybitSolutions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
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

      {/* Team Visual Banner */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <PageImage variant="team" aspectRatio="wide" />
        </div>
      </section>

      {/* Why Work Here */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Why CybitSolutions?
              </h2>
              <p className="text-steel max-w-2xl mx-auto">
                We invest in our people because they are the foundation of every
                successful mission we support.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <StaggerItem
                  key={reason.title}
                  className="bg-white rounded-2xl p-8 shadow-sm text-center card-hover"
                >
                  <div className="w-16 h-16 bg-accent-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-steel">{reason.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Explore Cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.1}>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Explore Careers
              </h2>
              <p className="text-steel max-w-2xl mx-auto">
                Learn more about life at CybitSolutions and find your next
                opportunity.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <StaggerItem key={section.title}>
                  <Link
                    href={section.href}
                    className="block bg-cloud rounded-2xl p-8 card-hover group h-full"
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
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cloud py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-1">
                  <CountUp to={200} suffix="+" />
                </div>
                <div className="text-steel text-sm">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-1">
                  <CountUp to={95} suffix="%" />
                </div>
                <div className="text-steel text-sm">Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-1">
                  4.8/5
                </div>
                <div className="text-steel text-sm">Employee Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-1">
                  <CountUp to={50} suffix="+" />
                </div>
                <div className="text-steel text-sm">Open Roles</div>
              </div>
            </div>
          </FadeIn>
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
