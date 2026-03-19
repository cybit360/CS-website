import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function CareersStrip({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 bg-navy relative overflow-hidden", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-amber rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-accent-cyan text-sm font-semibold mb-3">
              <Users className="w-4 h-4" /> Join Our Mission
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Build What Matters. Protect What Counts.
            </h2>
            <p className="text-white/70 max-w-xl">
              Join a team of cleared professionals working on the nation&apos;s most critical IT missions.
              Veterans, early careers, and experienced professionals welcome.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/careers/open-roles"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan text-navy font-semibold rounded-lg hover:bg-accent-cyan-dark transition-colors"
            >
              Search Open Roles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/careers/culture"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Life at CybitSolutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
