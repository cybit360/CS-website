import { Shield, Zap, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const points = [
  {
    icon: Shield,
    title: "Security Without Compromise",
    description: "Zero-Trust, FedRAMP High, IL5/IL6 architectures designed to protect your most critical assets.",
  },
  {
    icon: Zap,
    title: "Speed at Scale",
    description: "Cloud-native platforms, cATO DevSecOps, and global delivery that accelerate your mission.",
  },
  {
    icon: Target,
    title: "Outcomes That Matter",
    description: "Lower risk, faster ATOs, and measurable ROI backed by 20+ years of proven performance.",
  },
];

export function ProofPoints({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point) => (
            <div key={point.title} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-cyan/10 text-accent-cyan mb-5">
                <point.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 font-[family-name:var(--font-heading)]">
                {point.title}
              </h3>
              <p className="text-steel leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
