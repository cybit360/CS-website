import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    category: "Cybersecurity",
    title: "Zero Trust Architecture: A Practical Guide for Federal Agencies",
    excerpt: "How to implement Zero Trust across your enterprise while maintaining mission continuity and compliance.",
    date: "2024-12-15",
    slug: "zero-trust-guide",
  },
  {
    category: "Cloud",
    title: "Navigating FedRAMP High: Lessons from GovCloud Migrations",
    excerpt: "Key insights from our experience migrating mission-critical workloads to AWS GovCloud IL5/IL6.",
    date: "2024-11-20",
    slug: "fedramp-high-lessons",
  },
  {
    category: "AI & Automation",
    title: "AI in Government: Balancing Innovation with Compliance",
    excerpt: "How agencies can leverage GenAI and ML while meeting NIST AI RMF and responsible AI mandates.",
    date: "2024-10-08",
    slug: "ai-government-compliance",
  },
];

export function InsightsTiles({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 bg-cloud", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">Latest Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              News & Thought Leadership
            </h2>
          </div>
          <Link
            href="/insights/news"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-accent-cyan font-semibold hover:underline"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/news#${post.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-border card-hover block"
            >
              <div className="h-48 bg-gradient-to-br from-navy to-slate flex items-center justify-center">
                <span className="text-accent-cyan/30 text-6xl font-bold">CS</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="flex items-center text-xs text-steel">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-cyan transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
