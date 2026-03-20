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
    | "innovation";
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
  overlay?: boolean;
}

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
};

const icons: Record<PageImageProps["variant"], string> = {
  cybersecurity: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  cloud:
    "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z",
  data: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9",
  ai: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  government:
    "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3",
  team: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  office:
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  tech: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  military:
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  innovation:
    "M13 10V3L4 14h7v7l9-11h-7z",
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

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden",
        aspectClass,
        className
      )}
      role="img"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div
        className={cn("absolute inset-0 bg-gradient-to-br", gradients[variant])}
      />

      {/* Grid pattern overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
      )}

      {/* Centered decorative icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-24 h-24 text-white/[0.07]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={icons[variant]} />
        </svg>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent-cyan/5 rounded-tl-full" />
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-white/[0.03] rounded-br-full" />
    </div>
  );
}
