import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin, Users, Award } from "lucide-react";

const avatarGradients = [
  "from-accent-cyan to-blue-600",
  "from-indigo-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-cyan-600",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export const metadata: Metadata = {
  title: "Leadership Team",
  description:
    "Meet the CybitSolutions leadership team. Experienced executives in federal IT, cybersecurity, cloud, and defense technology.",
};

const leaders = [
  {
    name: "James Mitchell",
    title: "Chief Executive Officer",
    bio: "25+ years of leadership in federal IT and defense technology. Former Army officer with deep expertise in cybersecurity strategy and government modernization programs.",
    linkedin: "#",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    bio: "Ph.D. in Computer Science with 20 years of experience architecting secure cloud and AI solutions for DoD and intelligence community clients.",
    linkedin: "#",
  },
  {
    name: "Robert Williams",
    title: "Chief Operating Officer",
    bio: "Former Marine Corps logistics officer. 18 years of experience in program management, operational excellence, and scaling government IT organizations.",
    linkedin: "#",
  },
  {
    name: "Maria Gonzalez",
    title: "VP of Engineering",
    bio: "15+ years leading software development and DevSecOps teams across federal programs. Expert in agile delivery and continuous integration for classified environments.",
    linkedin: "#",
  },
  {
    name: "David Park",
    title: "VP of Cybersecurity",
    bio: "CISSP, CISM certified with 20 years defending critical infrastructure. Former NSA analyst specializing in zero-trust architecture and threat intelligence.",
    linkedin: "#",
  },
  {
    name: "Angela Torres",
    title: "VP of Business Development",
    bio: "18 years of federal contracting and capture management experience. Proven track record securing multi-year contracts across DoD, DoS, and civilian agencies.",
    linkedin: "#",
  },
];

const advisors = [
  {
    name: "Gen. (Ret.) William Carter",
    title: "Strategic Advisor",
    bio: "Former commanding general with 35 years of military service. Advises on defense strategy, joint operations, and emerging technology adoption.",
  },
  {
    name: "Dr. Lisa Patel",
    title: "Technology Advisor",
    bio: "Former CIO of a major federal agency. Recognized thought leader in government digital transformation and cloud-first strategies.",
  },
  {
    name: "Mark Thompson",
    title: "Cybersecurity Advisor",
    bio: "Former CISO for a Fortune 100 company. Brings private-sector cybersecurity innovation and risk management expertise to our federal programs.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Leadership Team
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experienced leaders with deep federal IT expertise, military
            service backgrounds, and a shared commitment to mission success.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Executive Leadership
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg leading-relaxed">
              The team driving strategy, innovation, and delivery excellence
              across every CybitSolutions program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                className="bg-white rounded-xl border border-border overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-navy via-slate to-navy/80 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
                  <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent-cyan/10 rounded-tl-full" />
                  {/* Avatar with initials */}
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center shadow-lg ring-4 ring-white/20`}
                    role="img"
                    aria-label={`Portrait placeholder for ${leader.name}`}
                  >
                    <span className="text-2xl font-bold text-white select-none">
                      {getInitials(leader.name)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-accent-cyan font-semibold text-sm mb-4">
                    {leader.title}
                  </p>
                  <p className="text-steel text-sm leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                  <a
                    href={leader.linkedin}
                    className="inline-flex items-center gap-2 text-navy hover:text-accent-cyan transition-colors text-sm font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Advisory Board
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg leading-relaxed">
              Distinguished advisors who bring strategic insight and
              cross-sector expertise to guide our growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={advisor.name}
                className="bg-cloud rounded-xl p-8 border border-border"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${avatarGradients[(index + 3) % avatarGradients.length]} mb-6 mx-auto shadow-md`}
                  role="img"
                  aria-label={`Portrait placeholder for ${advisor.name}`}
                >
                  <span className="text-lg font-bold text-white select-none">
                    {getInitials(advisor.name)}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-navy mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-accent-cyan font-semibold text-sm mb-4">
                    {advisor.title}
                  </p>
                  <p className="text-steel text-sm leading-relaxed">
                    {advisor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="py-16 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
              We are always looking for talented professionals who share our
              commitment to mission excellence and innovation.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan/90 transition-colors"
            >
              View Open Positions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Connect with Our Leadership
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            Have a question about our capabilities or want to discuss a
            potential partnership? Our leadership team is ready to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
