import Link from "next/link";
import {
  Newspaper,
  ArrowRight,
  Clock,
  Tag,
  Mail,
  Search,
} from "lucide-react";

const articles = [
  {
    title: "Zero Trust Architecture: A Federal Agency Implementation Guide",
    excerpt:
      "Learn how federal agencies are adopting zero trust principles to modernize their security posture and meet OMB mandates.",
    category: "Cybersecurity",
    date: "March 12, 2026",
    readTime: "8 min read",
  },
  {
    title: "Accelerating Cloud Migration for DoD Workloads",
    excerpt:
      "Strategies for moving mission-critical defense workloads to IL5-authorized cloud environments while maintaining compliance.",
    category: "Cloud",
    date: "March 5, 2026",
    readTime: "6 min read",
  },
  {
    title: "How AI/ML is Transforming Intelligence Analysis",
    excerpt:
      "Exploring the role of machine learning models in processing vast datasets for actionable intelligence insights.",
    category: "AI/ML",
    date: "February 27, 2026",
    readTime: "10 min read",
  },
  {
    title: "Navigating the FY2026 GovCon Landscape",
    excerpt:
      "Key trends and opportunities shaping the government contracting market this fiscal year and beyond.",
    category: "GovCon",
    date: "February 18, 2026",
    readTime: "7 min read",
  },
  {
    title: "Digital Transformation in Civilian Agencies",
    excerpt:
      "How civilian agencies are leveraging modern platforms to improve citizen services and operational efficiency.",
    category: "Digital Transformation",
    date: "February 10, 2026",
    readTime: "5 min read",
  },
  {
    title: "Supply Chain Risk Management for IT Systems",
    excerpt:
      "Best practices for identifying and mitigating supply chain risks in government technology procurement.",
    category: "Cybersecurity",
    date: "January 30, 2026",
    readTime: "9 min read",
  },
];

const categoryColors: Record<string, string> = {
  Cybersecurity: "bg-red-100 text-red-700",
  Cloud: "bg-blue-100 text-blue-700",
  "AI/ML": "bg-purple-100 text-purple-700",
  GovCon: "bg-green-100 text-green-700",
  "Digital Transformation": "bg-amber-100 text-amber-700",
};

export default function NewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Newspaper className="w-14 h-14 text-accent-cyan mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">News &amp; Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert analysis and commentary on the topics shaping federal
            technology and cybersecurity.
          </p>
        </div>
      </section>

      {/* Search / Filter Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-cloud rounded-lg px-4 py-2 flex-1 min-w-[240px]">
              <Search className="w-5 h-5 text-steel" />
              <span className="text-steel text-sm">Search articles...</span>
            </div>
            {Object.keys(categoryColors).map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-cloud rounded-lg text-sm text-steel cursor-pointer hover:bg-navy/10 transition"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
              >
                <div className="h-48 bg-navy/5 flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-navy/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[article.category]}`}
                    >
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-accent-cyan transition line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-steel text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-steel/70">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Mail className="w-12 h-12 text-accent-cyan mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-navy mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-steel mb-8">
            Get the latest insights, analysis, and industry news delivered to
            your inbox every week. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <div className="flex-1 bg-cloud rounded-lg px-4 py-3 text-steel text-sm">
              Enter your email address
            </div>
            <button className="bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Story to Share?</h2>
          <p className="text-gray-300 mb-8">
            We welcome guest contributions from industry thought leaders and
            practitioners.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
