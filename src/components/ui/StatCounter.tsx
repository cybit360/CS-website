import { cn } from "@/lib/utils";

export interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
}

export function StatCounter({
  value,
  label,
  suffix,
  className,
}: StatCounterProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center animate-count-up",
        className
      )}
    >
      <span className="font-heading text-4xl font-extrabold text-accent-cyan sm:text-5xl lg:text-6xl">
        {value}
        {suffix && (
          <span className="text-3xl sm:text-4xl lg:text-5xl">{suffix}</span>
        )}
      </span>
      <span className="mt-2 text-sm font-medium uppercase tracking-wider text-steel">
        {label}
      </span>
    </div>
  );
}
