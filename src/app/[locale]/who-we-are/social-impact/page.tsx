import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Flag,
  GraduationCap,
  Handshake,
  Heart,
  Leaf,
  Users,
  Target,
  Award,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Social Impact",
  description:
    "CybitSolutions' commitment to social impact including veteran hiring, STEM education, community service, and sustainable business practices.",
};

const initiatives = [
  {
    icon: Flag,
    title: "Veteran Hiring Commitment",
    description:
      "Over 40% of our workforce consists of military veterans and their families. We actively recruit from veteran transition programs, partner with organizations like Hiring Our Heroes and American Corporate Partners, and provide mentorship pathways for veterans entering the technology sector.",
    stats: [
      { value: "40%+", label: "Veteran Workforce" },
      { value: "100+", label: "Veterans Hired" },
    ],
  },
  {
    icon: GraduationCap,
    title: "STEM Education Initiatives",
    description:
      "We invest in the next generation of technology leaders through scholarships, internship programs, and partnerships with universities and coding bootcamps. Our engineers volunteer as mentors and guest lecturers at local schools and community colleges.",
    stats: [
      { value: "50+", label: "Scholarships Awarded" },
      { value: "200+", label: "Students Mentored" },
    ],
  },
  {
    icon: Handshake,
    title: "Community Partnerships",
    description:
      "CybitSolutions partners with local nonprofits, chambers of commerce, and civic organizations to strengthen the communities where we live and work. From food drives to tech donation programs, our team is committed to making a tangible difference.",
    stats: [
      { value: "25+", label: "Partner Organizations" },
      { value: "5K+", label: "Volunteer Hours" },
    ],
  },
];

export default function SocialImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Who We Are", href: "/who-we-are" }, { label: "Social Impact" }]} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Social Impact & Community
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our mission extends beyond technology. We are committed to
            supporting veterans, advancing education, and building stronger
            communities through meaningful action.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {initiatives.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-navy/5 text-accent-cyan">
                      <item.icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl font-bold text-navy">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-steel leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex gap-8">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-accent-cyan">
                          {stat.value}
                        </div>
                        <div className="text-sm text-steel">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`bg-white rounded-xl p-8 border border-border ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="h-48 bg-navy/5 rounded-lg flex items-center justify-center">
                    <item.icon
                      className="w-16 h-16 text-accent-cyan/30"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-navy/5 text-accent-cyan">
                  <Users className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-navy">
                  Diversity & Inclusion
                </h2>
              </div>
              <p className="text-steel leading-relaxed mb-4">
                CybitSolutions is committed to building a workforce that
                reflects the diversity of the communities and agencies we serve.
                We believe that diverse perspectives drive innovation, improve
                decision-making, and strengthen our ability to solve complex
                challenges.
              </p>
              <p className="text-steel leading-relaxed mb-6">
                Our inclusive culture ensures that every team member has equal
                access to opportunity, mentorship, and career advancement
                regardless of background, identity, or experience.
              </p>
              <ul className="space-y-3">
                {[
                  "Employee resource groups for veterans, women in tech, and underrepresented communities",
                  "Bias-free hiring practices and diverse interview panels",
                  "Annual diversity training and cultural competency programs",
                  "Partnerships with minority-serving institutions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-steel text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cloud rounded-xl p-8 border border-border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "45%", label: "Diverse Workforce" },
                  { value: "35%", label: "Women in Leadership" },
                  { value: "12", label: "ERG Communities" },
                  { value: "100%", label: "Pay Equity Audited" },
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

      {/* Environmental Sustainability */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-navy/5 text-accent-cyan mx-auto mb-6">
              <Leaf className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Environmental Sustainability
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg leading-relaxed">
              We are committed to reducing our environmental footprint and
              promoting sustainable practices across our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Carbon Reduction",
                description:
                  "Committed to a 50% reduction in carbon emissions by 2030 through remote work policies, energy-efficient facilities, and sustainable procurement.",
              },
              {
                icon: Award,
                title: "Green IT Practices",
                description:
                  "Cloud-first strategies reduce physical infrastructure. We prioritize energy-efficient data centers and responsible e-waste recycling for all hardware.",
              },
              {
                icon: Handshake,
                title: "Sustainable Partners",
                description:
                  "We partner with vendors and subcontractors who share our commitment to environmental responsibility and sustainable business practices.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-border"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan mb-6">
                  <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
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

      {/* CTA */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Partner with a Purpose-Driven Company
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Join us in making a difference. Whether as a client, partner, or
            team member, your impact starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
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
