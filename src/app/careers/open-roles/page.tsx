import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Shield,
  Building2,
  Clock,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Open Roles",
  description:
    "Browse current job openings at CybitSolutions. Positions in cybersecurity, cloud engineering, software development, and federal IT programs.",
};

const jobs = [
  {
    title: "Sr. Cybersecurity Engineer",
    location: "Ft. Meade, MD",
    clearance: "TS/SCI",
    department: "Cybersecurity",
    type: "Full-time",
  },
  {
    title: "Cloud Architect",
    location: "Remote",
    clearance: "Secret",
    department: "Cloud Engineering",
    type: "Full-time",
  },
  {
    title: "DevSecOps Engineer",
    location: "Pentagon, VA",
    clearance: "TS",
    department: "Engineering",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    location: "Rosslyn, VA",
    clearance: "Secret",
    department: "Data & Analytics",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    clearance: "Public Trust",
    department: "Software Development",
    type: "Full-time",
  },
  {
    title: "Network Engineer",
    location: "Tampa, FL",
    clearance: "TS/SCI",
    department: "Infrastructure",
    type: "Full-time",
  },
  {
    title: "IT Project Manager",
    location: "Washington, DC",
    clearance: "Secret",
    department: "Program Management",
    type: "Full-time",
  },
  {
    title: "Systems Administrator",
    location: "Colorado Springs, CO",
    clearance: "TS",
    department: "IT Operations",
    type: "Full-time",
  },
];

export default function OpenRolesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Open Positions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore current opportunities across cybersecurity, cloud,
            engineering, and management. Find the role where your skills make a
            mission-critical difference.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Current Openings
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              We are actively hiring across multiple disciplines and locations.
              All positions offer competitive compensation and benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-navy mb-4">
                  {job.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-steel text-sm">
                    <MapPin className="w-4 h-4 text-accent-cyan" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-steel text-sm">
                    <Shield className="w-4 h-4 text-accent-cyan" />
                    {job.clearance} Clearance
                  </div>
                  <div className="flex items-center gap-2 text-steel text-sm">
                    <Building2 className="w-4 h-4 text-accent-cyan" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-2 text-steel text-sm">
                    <Clock className="w-4 h-4 text-accent-cyan" />
                    {job.type}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition text-sm"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-steel max-w-2xl mx-auto mb-6">
            We are always looking for talented professionals to join our team. If
            you don&apos;t see a position that matches your background, submit a
            general application and we&apos;ll keep you in mind for future
            openings.
          </p>
          <ul className="inline-flex flex-col gap-3 text-left mb-10">
            {[
              "All experience levels welcome",
              "Clearance sponsorship available",
              "Remote and hybrid options for many roles",
              "Competitive referral bonuses",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-steel">
                <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
            >
              Submit General Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Next Mission Starts Here
          </h2>
          <p className="text-gray-300 mb-8">
            Join CybitSolutions and build the technology that protects and serves
            our nation.
          </p>
          <Link
            href="/careers/culture"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Explore Our Culture <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
