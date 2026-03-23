import type { Metadata } from "next";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProofPoints } from "@/components/sections/ProofPoints";
import { FeaturedDomains } from "@/components/sections/FeaturedDomains";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { InsightsTiles } from "@/components/sections/InsightsTiles";
import { CareersStrip } from "@/components/sections/CareersStrip";
import {
  AnimatedHeroSection,
  AnimatedStatsSection,
  AnimatedCTABanner,
} from "@/components/animations/AnimatedHomeContent";

export const metadata: Metadata = {
  title: "CybitSolutions | Mission-Grade IT for Government & Enterprise",
  description:
    "CybitSolutions delivers secure, scalable IT solutions for federal agencies and enterprise organizations. Cybersecurity, cloud, AI, and digital transformation.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedHeroSection />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Stats Bar with CountUp */}
      <AnimatedStatsSection />

      {/* Proof Points */}
      <ProofPoints />

      {/* Featured Domains */}
      <FeaturedDomains limit={3} />

      {/* Case Studies */}
      <CaseStudyGrid />

      {/* Accent Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

      {/* CTA Banner */}
      <AnimatedCTABanner />

      {/* Latest Insights */}
      <InsightsTiles />

      {/* Careers Strip */}
      <CareersStrip />
    </>
  );
}
