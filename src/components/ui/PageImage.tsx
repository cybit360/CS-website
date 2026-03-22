import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageImageProps {
  variant:
    | "cybersecurity"
    | "cloud"
    | "data"
    | "ai"
    | "government"
    | "team"
    | "office"
    | "tech"
    | "military"
    | "innovation"
    | "emerging"
    | "industry";
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
  overlay?: boolean;
}

const images: Record<PageImageProps["variant"], { src: string; alt: string }> = {
  cybersecurity: {
    src: "/images/services/cybersecurity.jpg",
    alt: "Cybersecurity operations center with digital security visualizations",
  },
  cloud: {
    src: "/images/services/cloud.jpg",
    alt: "Cloud computing infrastructure and server architecture",
  },
  data: {
    src: "/images/services/data-analytics.jpg",
    alt: "Data analytics dashboards and visualization tools",
  },
  ai: {
    src: "/images/services/ai-automation.jpg",
    alt: "Artificial intelligence and machine learning technology",
  },
  government: {
    src: "/images/services/digital-transformation.jpg",
    alt: "Digital transformation and global technology networks",
  },
  team: {
    src: "/images/about/team-collaboration.jpg",
    alt: "Professional team collaborating in a modern office environment",
  },
  office: {
    src: "/images/services/enterprise-it.jpg",
    alt: "Modern enterprise office and IT workspace",
  },
  tech: {
    src: "/images/services/infrastructure.jpg",
    alt: "IT infrastructure, networking, and data center operations",
  },
  military: {
    src: "/images/services/cybersecurity.jpg",
    alt: "Military-grade cybersecurity and defense technology",
  },
  innovation: {
    src: "/images/services/software-devops.jpg",
    alt: "Software development and DevOps engineering",
  },
  emerging: {
    src: "/images/services/emerging-tech.jpg",
    alt: "Emerging technologies including quantum computing and blockchain",
  },
  industry: {
    src: "/images/services/industry-specific.jpg",
    alt: "Industry-specific IT solutions for regulated sectors",
  },
};

const gradients: Record<PageImageProps["variant"], string> = {
  cybersecurity: "from-navy via-slate to-accent-cyan/30",
  cloud: "from-blue-900 via-sky-800 to-cyan-600/40",
  data: "from-navy via-indigo-900 to-violet-800/30",
  ai: "from-slate via-navy to-accent-cyan/20",
  government: "from-navy via-slate to-stone-700/30",
  team: "from-slate via-stone-700 to-navy",
  office: "from-stone-800 via-slate to-navy/80",
  tech: "from-navy via-cyan-900 to-accent-cyan/30",
  military: "from-stone-900 via-olive-900 to-navy",
  innovation: "from-navy via-purple-900 to-accent-cyan/20",
  emerging: "from-navy via-indigo-900 to-purple-800/30",
  industry: "from-navy via-slate to-stone-700/20",
};

export function PageImage({
  variant,
  className,
  aspectRatio = "video",
  overlay = true,
}: PageImageProps) {
  const aspectClass =
    aspectRatio === "video"
      ? "aspect-video"
      : aspectRatio === "square"
        ? "aspect-square"
        : "aspect-[21/9]";

  const imageData = images[variant];

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden",
        aspectClass,
        className
      )}
      role="img"
      aria-label={imageData.alt}
    >
      {/* Real photo */}
      <Image
        src={imageData.src}
        alt={imageData.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
      />

      {/* Gradient overlay for text readability */}
      {overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-40",
            gradients[variant]
          )}
        />
      )}
    </div>
  );
}
