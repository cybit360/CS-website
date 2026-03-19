import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export interface CTABannerProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "cyan" | "navy";
  className?: string;
}

export function CTABanner({
  title,
  description,
  buttonLabel,
  buttonHref,
  variant = "cyan",
  className,
}: CTABannerProps) {
  const isCyan = variant === "cyan";

  return (
    <section
      className={cn(
        "w-full py-16",
        isCyan ? "bg-accent-cyan" : "bg-navy",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl">
          <h2
            className={cn(
              "font-heading text-2xl font-bold sm:text-3xl",
              isCyan ? "text-navy" : "text-white"
            )}
          >
            {title}
          </h2>

          {description && (
            <p
              className={cn(
                "mt-2 text-lg",
                isCyan ? "text-navy/80" : "text-cloud-dark"
              )}
            >
              {description}
            </p>
          )}
        </div>

        <Button
          variant={isCyan ? "secondary" : "primary"}
          size="lg"
          asChild
          className="shrink-0"
        >
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
