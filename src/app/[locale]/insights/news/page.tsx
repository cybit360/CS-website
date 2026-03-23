"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Newspaper,
  ArrowRight,
  Clock,
  Tag,
  Mail,
  Search,
} from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { blogPosts, categoryColors, formatDate } from "@/data/blog-posts";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogPosts.filter((article) => {
    const matchesCategory =
      !activeCategory || article.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Insights", href: "/insights" }, { label: "News" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Insights
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            News &amp; Insights
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
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
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm text-navy outline-none w-full placeholder:text-steel"
                aria-label="Search articles"
              />
            </div>
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeCategory === null
                  ? "bg-navy text-white"
                  : "bg-cloud text-steel cursor-pointer hover:bg-navy/10"
              }`}
            >
              All
            </button>
            {Object.keys(categoryColors).map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-cloud text-steel cursor-pointer hover:bg-navy/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <Newspaper className="w-12 h-12 text-steel/30 mx-auto mb-4" />
              <p className="text-steel text-lg">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setSearchQuery("");
                }}
                className="mt-4 text-accent-cyan font-medium text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => {
                const catColor =
                  categoryColors[article.category] ||
                  "bg-gray-100 text-gray-700";
                return (
                  <Link
                    key={article.slug}
                    href={`/insights/news/${article.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group block"
                  >
                    <div className="h-48 bg-navy/5 flex items-center justify-center">
                      <Newspaper className="w-12 h-12 text-navy/20" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full ${catColor}`}
                        >
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-accent-cyan transition">
                        {article.title}
                      </h3>
                      <p className="text-steel text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-steel/70 mt-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-2 text-accent-cyan font-medium text-sm group-hover:underline">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
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
          <NewsletterForm className="max-w-lg mx-auto" />
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
