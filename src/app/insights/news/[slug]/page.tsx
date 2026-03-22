import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Linkedin,
  Twitter,
  Mail,
  Newspaper,
} from "lucide-react";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
  formatDate,
  categoryColors,
} from "@/data/blog-posts";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${post.title} | CybitSolutions Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main>
        <section className="bg-navy py-24 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              Article Not Found
            </h1>
            <p className="text-white/70 mb-8">
              The article you are looking for does not exist or has been moved.
            </p>
            <Link
              href="/insights/news"
              className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const shareUrl = `https://cybitsolutions.com/insights/news/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);
  const shareText = encodeURIComponent(post.excerpt);
  const catColor =
    categoryColors[post.category] || "bg-gray-100 text-gray-700";

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          {/* Breadcrumb */}
          <div className="[&_nav]:mb-8 [&_a]:text-white/60 [&_a:hover]:text-accent-cyan [&_span[aria-current]]:text-white [&_svg]:text-white/30">
            <Breadcrumb
              items={[
                { label: "Insights", href: "/insights" },
                { label: "News", href: "/insights/news" },
                { label: post.title },
              ]}
            />
          </div>

          <Link
            href="/insights/news"
            className="inline-flex items-center gap-2 text-accent-cyan text-sm font-medium mb-8 hover:underline transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News &amp; Insights
          </Link>

          <div className="max-w-4xl">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6 ${catColor}`}
            >
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>
                  {post.author.name}
                  <span className="hidden sm:inline">
                    , {post.author.role}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-steel" />
              <span className="text-sm font-semibold text-navy">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-cloud text-steel hover:bg-navy/10 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-navy/50" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">
                  Written by {post.author.name}
                </p>
                <p className="text-sm text-steel">{post.author.role}</p>
                <p className="text-xs text-steel/70 mt-1">
                  Published {formatDate(post.date)}
                </p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <span className="text-sm font-semibold text-navy block mb-4">
              Share this article
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white text-sm font-medium rounded-lg hover:brightness-110 transition"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white text-sm font-medium rounded-lg hover:brightness-110 transition"
                aria-label="Share on X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
                X / Twitter
              </a>
              <a
                href={`mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${encodeURIComponent(shareUrl)}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-steel text-white text-sm font-medium rounded-lg hover:brightness-110 transition"
                aria-label="Share via Email"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-cloud py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => {
                const relCatColor =
                  categoryColors[related.category] ||
                  "bg-gray-100 text-gray-700";
                return (
                  <Link
                    key={related.slug}
                    href={`/insights/news/${related.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group block"
                  >
                    <div className="h-40 bg-navy/5 flex items-center justify-center">
                      <Newspaper className="w-10 h-10 text-navy/20" />
                    </div>
                    <div className="p-6">
                      <span
                        className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${relCatColor}`}
                      >
                        {related.category}
                      </span>
                      <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-accent-cyan transition">
                        {related.title}
                      </h3>
                      <p className="text-steel text-sm line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-steel/70 mt-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {related.readTime}
                        </span>
                        <span>{formatDate(related.date)}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Strengthen Your IT Capabilities?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact our team to discuss how CybitSolutions can support your
            mission with proven cybersecurity, cloud, and digital transformation
            expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
