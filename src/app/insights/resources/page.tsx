import Link from "next/link";
import {
  BookOpen,
  FileText,
  BarChart3,
  Video,
  Download,
  Eye,
  ArrowRight,
  Filter,
} from "lucide-react";

const resourceTypes = [
  { label: "All", icon: BookOpen },
  { label: "Whitepapers", icon: FileText },
  { label: "Case Studies", icon: BarChart3 },
  { label: "Infographics", icon: BarChart3 },
  { label: "Videos", icon: Video },
];

const resources = [
  {
    title: "Zero Trust Implementation Roadmap for Federal Agencies",
    description:
      "A comprehensive guide covering the phased approach to implementing zero trust architecture aligned with NIST SP 800-207 and OMB M-22-09.",
    type: "Whitepaper",
    pages: "32 pages",
    icon: FileText,
  },
  {
    title: "DoD Cloud Migration: Agency Success Story",
    description:
      "How CybitSolutions helped a DoD component migrate 200+ applications to an IL5 cloud environment in under 18 months.",
    type: "Case Study",
    pages: "12 pages",
    icon: BarChart3,
  },
  {
    title: "The State of Federal Cybersecurity 2026",
    description:
      "Visual overview of key cybersecurity metrics, threat trends, and investment patterns across the federal government.",
    type: "Infographic",
    pages: "1 page",
    icon: BarChart3,
  },
  {
    title: "Building a DevSecOps Pipeline for Government",
    description:
      "Step-by-step video walkthrough of establishing a secure CI/CD pipeline that meets DISA STIG and FedRAMP requirements.",
    type: "Video",
    pages: "45 min",
    icon: Video,
  },
  {
    title: "AI/ML Governance Framework for Public Sector",
    description:
      "Whitepaper outlining responsible AI principles, risk management strategies, and compliance considerations for government AI programs.",
    type: "Whitepaper",
    pages: "28 pages",
    icon: FileText,
  },
  {
    title: "Civilian Agency Digital Transformation Case Study",
    description:
      "How a civilian agency modernized legacy systems, improved citizen services, and reduced operational costs by 40%.",
    type: "Case Study",
    pages: "16 pages",
    icon: BarChart3,
  },
];

const typeBadgeColors: Record<string, string> = {
  Whitepaper: "bg-blue-100 text-blue-700",
  "Case Study": "bg-green-100 text-green-700",
  Infographic: "bg-amber-100 text-amber-700",
  Video: "bg-purple-100 text-purple-700",
};

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <BookOpen className="w-14 h-14 text-accent-cyan mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Resource Library</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access whitepapers, case studies, infographics, and videos from our
            team of federal technology experts.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-steel" />
            <span className="text-sm text-steel font-medium mr-2">
              Filter by type:
            </span>
            {resourceTypes.map((type) => (
              <button
                key={type.label}
                className="flex items-center gap-2 px-4 py-2 bg-cloud rounded-lg text-sm text-steel hover:bg-navy/10 transition"
              >
                <type.icon className="w-4 h-4" />
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                >
                  <div className="h-44 bg-navy/5 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-navy/15" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${typeBadgeColors[resource.type]}`}
                      >
                        {resource.type}
                      </span>
                      <span className="text-xs text-steel/60">
                        {resource.pages}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-accent-cyan transition line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-steel text-sm mb-5 line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 bg-accent-cyan text-navy text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button className="flex items-center gap-2 bg-navy/5 text-navy text-sm font-medium px-4 py-2 rounded-lg hover:bg-navy/10 transition">
                        <Eye className="w-4 h-4" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Whitepapers" },
              { value: "30+", label: "Case Studies" },
              { value: "20+", label: "Videos" },
              { value: "10K+", label: "Downloads" },
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
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution Brief?
          </h2>
          <p className="text-gray-300 mb-8">
            Our team can prepare tailored materials addressing your specific
            mission requirements and technology challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Request Materials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
