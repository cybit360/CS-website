import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  backgroundImage?: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden bg-navy", className)}
    >
      {/* Optional background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}

      {/* Gradient overlay */}
      <div className="hero-gradient absolute inset-0 -z-10" aria-hidden="true" />

      {/* Content */}
      <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:py-32">
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cloud-dark sm:text-xl">
            {subtitle}
          </p>
        )}

        {/* CTA buttons */}
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryCTA && (
              <Button variant="primary" size="lg" asChild>
                <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
              </Button>
            )}

            {secondaryCTA && (
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
