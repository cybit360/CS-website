import { cn } from "@/lib/utils";
import { PartnerLogo } from "@/components/ui/PartnerLogos";

const partners = [
  "AWS", "Microsoft", "Google Cloud", "ServiceNow", "Splunk",
  "Cisco", "IBM", "HashiCorp", "CrowdStrike", "Databricks",
];

const certifications = ["FedRAMP", "ISO 27001", "SOC 2", "CMMC"];

export function TrustStrip({ className }: { className?: string }) {
  return (
    <section className={cn("bg-cloud py-8 border-y border-border", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-steel mb-6 uppercase tracking-wider">
          Trusted by leading agencies &mdash; Powered by industry partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-10 hover:opacity-80 transition-opacity"
              title={name}
            >
              <PartnerLogo name={name} size="sm" />
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold text-navy border border-navy/10"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
