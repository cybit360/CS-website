import Link from "next/link";
import { ShieldCheck, Cloud, Server, Code, BarChart3, Brain, Monitor, Globe, Atom, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const domains = [
  { icon: ShieldCheck, title: "Cybersecurity & Risk", slug: "cybersecurity", description: "Zero-Trust defenses, FedRAMP High, RMF/ATO acceleration" },
  { icon: Cloud, title: "Cloud & Virtualization", slug: "cloud", description: "Multi-cloud platforms for GovCloud IL4-IL6 compliance" },
  { icon: Server, title: "IT Infrastructure", slug: "infrastructure", description: "Resilient data centers, SD-WAN, unified communications" },
  { icon: Code, title: "Software & DevOps", slug: "software-devops", description: "Agile DevSecOps, CI/CD pipelines, secure SDLC" },
  { icon: BarChart3, title: "Data & Analytics", slug: "data-analytics", description: "Governed data ecosystems, BI dashboards, ML pipelines" },
  { icon: Brain, title: "AI & Automation", slug: "ai-automation", description: "GenAI, RPA, computer vision, conversational AI" },
  { icon: Monitor, title: "Enterprise IT", slug: "enterprise-it", description: "ServiceNow, ERP/CRM modernization, ITSM platforms" },
  { icon: Globe, title: "Digital Transformation", slug: "digital-transformation", description: "GovTech platforms, citizen portals, legacy modernization" },
  { icon: Atom, title: "Emerging Tech", slug: "emerging-tech", description: "Quantum, blockchain, IoT, green IT innovation" },
  { icon: Building2, title: "Industry-Specific IT", slug: "industry-specific", description: "Healthcare, finance, education, defense verticals" },
];

export function FeaturedDomains({ className, limit = 3 }: { className?: string; limit?: number }) {
  const displayed = domains.slice(0, limit);

  return (
    <section className={cn("py-20 bg-cloud", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">Our Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            10 Mission-Critical Domains
          </h2>
          <p className="text-steel max-w-2xl mx-auto">
            End-to-end IT solutions spanning cybersecurity, cloud, AI, and beyond — engineered for government and enterprise.
          </p>
        </div>

        <div className={cn(
          "grid gap-6",
          limit <= 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        )}>
          {displayed.map((domain) => (
            <Link
              key={domain.slug}
              href={`/what-we-do/services/${domain.slug}`}
              className="group bg-white rounded-xl p-6 border border-border card-hover block"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan mb-4 group-hover:bg-accent-cyan/10 transition-colors">
                <domain.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-cyan transition-colors">
                {domain.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed mb-4">
                {domain.description}
              </p>
              <span className="inline-flex items-center text-accent-cyan text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {limit < domains.length && (
          <div className="text-center mt-10">
            <Link
              href="/what-we-do/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-slate transition-colors"
            >
              View All 10 Domains <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export { domains };
