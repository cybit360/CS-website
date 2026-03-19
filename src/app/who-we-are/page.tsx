import Link from "next/link";
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "About CybitSolutions",
    description:
      "Our story, mission, and the values that drive us to deliver mission-critical IT solutions for the federal government and beyond.",
    href: "/who-we-are/about",
  },
  {
    icon: Users,
    title: "Leadership Team",
    description:
      "Meet the experienced professionals guiding our strategy, operations, and technical vision across every engagement.",
    href: "/who-we-are/leadership",
  },
  {
    icon: Heart,
    title: "Social Impact & Community",
    description:
      "How we give back through veteran hiring, STEM education, community partnerships, and sustainable business practices.",
    href: "/who-we-are/social-impact",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Who We Are
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A veteran-owned small business delivering trusted IT solutions to
            federal agencies and defense organizations. Built on integrity,
            driven by mission.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Get to Know CybitSolutions
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg leading-relaxed">
              From our founding story to our commitment to community, discover
              what makes us a trusted partner in mission-critical IT.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-xl p-8 border border-border card-hover block"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-navy/5 text-accent-cyan mb-6 group-hover:bg-accent-cyan/10 transition-colors">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h2>
                <p className="text-steel leading-relaxed mb-6">
                  {item.description}
                </p>
                <span className="inline-flex items-center text-accent-cyan font-semibold">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Why Organizations Trust CybitSolutions
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                With over two decades of experience supporting the Department of
                Defense, Department of State, and federal civilian agencies, we
                bring a unique blend of technical depth and mission
                understanding to every engagement.
              </p>
              <p className="text-steel leading-relaxed mb-6">
                As a veteran-owned small business, we understand the operational
                tempo, security requirements, and accountability standards that
                define government IT. Our team holds TS/SCI clearances and
                maintains the highest standards of compliance and integrity.
              </p>
              <ul className="space-y-3">
                {[
                  "20+ years of federal IT delivery",
                  "Veteran-owned small business (SDVOSB)",
                  "TS/SCI cleared workforce",
                  "CMMC Level 3 compliant",
                  "ISO 27001 & ISO 9001 certified",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-steel">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cloud rounded-xl p-8 border border-border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "500+", label: "Projects Delivered" },
                  { value: "150+", label: "Cleared Professionals" },
                  { value: "50+", label: "Active Contracts" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-accent-cyan mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-steel">{stat.label}</div>
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
          <h2 className="text-3xl font-bold text-navy mb-4">
            Partner with a Team You Can Trust
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Ready to learn how CybitSolutions can support your mission? Reach
            out for a consultation with our leadership team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-navy/5 transition-colors"
            >
              Join Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
