import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-widest",
            dark ? "text-accent-cyan" : "text-accent-cyan-dark"
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg leading-relaxed",
            dark ? "text-steel" : "text-steel",
            align === "left" && "mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
