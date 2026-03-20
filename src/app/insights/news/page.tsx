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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const articles = [
  {
    title: "Zero Trust Architecture: A Federal Agency Implementation Guide",
    excerpt:
      "Learn how federal agencies are adopting zero trust principles to modernize their security posture and meet OMB mandates.",
    content:
      "Zero Trust Architecture (ZTA) has become a cornerstone of federal cybersecurity strategy. Under OMB M-22-09, agencies are required to adopt zero trust principles across their IT environments by the end of FY2024, and many are still working toward full implementation. This guide covers the five pillars of zero trust\u2014Identity, Devices, Networks, Applications & Workloads, and Data\u2014and provides practical steps agencies can take to assess their current posture, prioritize investments, and achieve compliance. CybitSolutions has helped multiple federal agencies design and implement zero trust architectures that meet NIST 800-207 standards while maintaining operational continuity. From micro-segmentation to continuous authentication, our approach ensures mission systems remain protected against advanced persistent threats.",
    category: "Cybersecurity",
    date: "March 12, 2026",
    readTime: "8 min read",
  },
  {
    title: "Accelerating Cloud Migration for DoD Workloads",
    excerpt:
      "Strategies for moving mission-critical defense workloads to IL5-authorized cloud environments while maintaining compliance.",
    content:
      "Migrating Department of Defense workloads to the cloud requires careful planning to maintain IL4/IL5 compliance and ensure mission readiness. This article explores proven strategies for cloud migration, including workload assessment and classification, selecting the right cloud service provider (AWS GovCloud, Azure Government, or Oracle Cloud Infrastructure), and establishing a robust governance framework. We discuss how to address common challenges such as data sovereignty requirements, latency-sensitive applications, and the need for hybrid architectures. CybitSolutions has successfully migrated over 200 mission-critical applications to FedRAMP High and IL5-authorized environments, reducing infrastructure costs by an average of 35% while improving system availability and disaster recovery capabilities.",
    category: "Cloud",
    date: "March 5, 2026",
    readTime: "6 min read",
  },
  {
    title: "How AI/ML is Transforming Intelligence Analysis",
    excerpt:
      "Exploring the role of machine learning models in processing vast datasets for actionable intelligence insights.",
    content:
      "The Intelligence Community is leveraging artificial intelligence and machine learning to fundamentally change how analysts process and interpret data. With the volume of collected intelligence growing exponentially, traditional manual analysis methods can no longer keep pace. This article examines how AI/ML models are being deployed for natural language processing of foreign-language documents, image and video recognition for geospatial intelligence, anomaly detection in signals intelligence, and predictive analytics for threat forecasting. We also discuss the ethical considerations and oversight mechanisms needed to ensure responsible AI deployment in intelligence operations. CybitSolutions is at the forefront of developing AI-powered analytics platforms that augment human analysts, enabling faster and more accurate decision-making in support of national security missions.",
    category: "AI/ML",
    date: "February 27, 2026",
    readTime: "10 min read",
  },
  {
    title: "Navigating the FY2026 GovCon Landscape",
    excerpt:
      "Key trends and opportunities shaping the government contracting market this fiscal year and beyond.",
    content:
      "The FY2026 government contracting landscape presents both challenges and opportunities for IT service providers. With federal IT spending projected to exceed $100 billion, areas of significant growth include cybersecurity, cloud modernization, AI/ML adoption, and zero trust implementation. This article covers the major contract vehicles and procurement trends, the impact of the Modernizing Government Technology (MGT) Act, and how small and mid-tier businesses can position themselves for success. We analyze agency-specific priorities across DoD, DHS, and civilian agencies, and provide guidance on building competitive teaming arrangements. CybitSolutions continues to grow its portfolio through strategic partnerships and a focus on delivering measurable mission outcomes.",
    category: "GovCon",
    date: "February 18, 2026",
    readTime: "7 min read",
  },
  {
    title: "Digital Transformation in Civilian Agencies",
    excerpt:
      "How civilian agencies are leveraging modern platforms to improve citizen services and operational efficiency.",
    content:
      "Civilian federal agencies are undergoing a digital transformation driven by the need to improve citizen-facing services and internal operations. From the IRS to the VA, agencies are adopting modern platforms that include cloud-native applications, API-driven architectures, and low-code/no-code solutions. This article explores successful transformation initiatives, the role of customer experience (CX) mandates from the Executive Order on Transforming Federal Customer Experience, and how agencies are measuring the impact of their digital investments. CybitSolutions has partnered with multiple civilian agencies to modernize legacy systems, implement digital service platforms, and create data-driven decision-making frameworks that improve both efficiency and citizen satisfaction.",
    category: "Digital Transformation",
    date: "February 10, 2026",
    readTime: "5 min read",
  },
  {
    title: "Supply Chain Risk Management for IT Systems",
    excerpt:
      "Best practices for identifying and mitigating supply chain risks in government technology procurement.",
    content:
      "Supply chain risk management (SCRM) has become a critical priority for government agencies procuring IT systems and services. Recent high-profile incidents have highlighted vulnerabilities in software supply chains, hardware components, and third-party service providers. This article covers the NIST SP 800-161 framework for supply chain risk management, the requirements of Section 889 of the NDAA, and practical approaches to vendor risk assessment and continuous monitoring. We discuss how organizations can implement software bills of materials (SBOMs), conduct rigorous supplier due diligence, and establish incident response plans for supply chain compromises. CybitSolutions helps agencies build resilient supply chains through comprehensive risk assessments, automated vulnerability scanning, and ongoing compliance monitoring across their entire technology ecosystem.",
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
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const toggleArticle = (title: string) => {
    setExpandedArticle(expandedArticle === title ? null : title);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
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
            {articles.map((article) => {
              const isExpanded = expandedArticle === article.title;
              return (
                <article
                  key={article.title}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group ${
                    isExpanded ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleArticle(article.title)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleArticle(article.title);
                      }
                    }}
                  >
                    {!isExpanded && (
                      <div className="h-48 bg-navy/5 flex items-center justify-center">
                        <Newspaper className="w-12 h-12 text-navy/20" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[article.category]}`}
                        >
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-accent-cyan transition">
                        {article.title}
                      </h3>
                      <p className="text-steel text-sm mb-4">
                        {article.excerpt}
                      </p>
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-steel leading-relaxed text-sm">
                            {article.content}
                          </p>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-sm text-steel/70 mt-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {article.date}
                        </span>
                      </div>
                      <button
                        className="mt-4 inline-flex items-center gap-2 text-accent-cyan font-medium text-sm hover:underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleArticle(article.title);
                        }}
                      >
                        {isExpanded ? (
                          <>
                            Read Less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Read More <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
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
