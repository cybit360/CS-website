import Link from "next/link";
import {
  BarChart3,
  Download,
  MessageSquare,
  FileText,
  Database,
  LineChart,
  PieChart,
  Layers,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const functionalAreas = [
  {
    icon: Database,
    title: "Data Engineering & Governance",
    description:
      "Build governed data ecosystems with enterprise data lakes, data warehouses, and ETL/ELT pipelines. Ensure data quality, lineage, and compliance across all sources.",
    capabilities: [
      "Enterprise Data Lake Architecture",
      "ETL/ELT Pipeline Development",
      "Data Quality & Cleansing",
      "Master Data Management (MDM)",
      "Data Governance & Cataloging",
    ],
  },
  {
    icon: LineChart,
    title: "Business Intelligence & Visualization",
    description:
      "Transform raw data into actionable insights with interactive dashboards, reports, and self-service analytics platforms for decision-makers at every level.",
    capabilities: [
      "Dashboard & Report Development",
      "Self-Service Analytics Platforms",
      "Tableau / Power BI / Qlik Deployments",
      "Executive KPI Scorecards",
      "Embedded Analytics & APIs",
    ],
  },
  {
    icon: PieChart,
    title: "Advanced Analytics & ML Pipelines",
    description:
      "Predictive analytics, statistical modeling, and machine learning pipelines that turn historical data into forward-looking intelligence.",
    capabilities: [
      "Predictive & Prescriptive Analytics",
      "ML Model Development & Training",
      "NLP & Text Analytics",
      "Anomaly Detection & Pattern Recognition",
      "MLOps & Model Monitoring",
    ],
  },
  {
    icon: Layers,
    title: "Big Data & Real-Time Streaming",
    description:
      "Process and analyze massive datasets in real-time with distributed computing frameworks and streaming architectures.",
    capabilities: [
      "Apache Spark / Hadoop / Kafka",
      "Real-Time Stream Processing",
      "Graph Databases & Analysis",
      "Geospatial Data Processing",
      "Data Federation & Virtualization",
    ],
  },
];

const services = [
  "Enterprise Data Strategy & Roadmap",
  "Data Lake & Data Warehouse Design",
  "BI Dashboard Development",
  "Predictive Analytics & ML Models",
  "Data Governance Program Implementation",
  "ETL/ELT Pipeline Automation",
  "Real-Time Data Streaming Platforms",
  "Data Quality Assessment & Remediation",
  "Self-Service Analytics Enablement",
  "Master Data Management (MDM)",
  "Geospatial Intelligence (GEOINT) Analytics",
  "Compliance & Audit Data Solutions",
];

const standards = [
  "NIST Data Standards",
  "DAMA-DMBOK",
  "CDMC Framework",
  "FAIR Data Principles",
  "DoD Data Strategy",
  "Federal Data Strategy",
  "ISO 8000",
  "GDPR / CCPA",
];

const benefits = [
  "Unified data ecosystems breaking down organizational silos",
  "Self-service analytics empowering mission owners",
  "ML pipelines delivering predictive intelligence at scale",
  "Data governance ensuring compliance and trust",
  "Real-time dashboards enabling faster decision-making",
  "50%+ reduction in data preparation time through automation",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of State (DoS)",
  "Federal Civilian Agencies",
  "Intelligence Community (IC)",
  "Healthcare (HHS, VA)",
  "Financial Regulators",
  "State & Local Government",
  "Energy & Utilities",
];

export default function DataAnalyticsPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <BarChart3 className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">Service Domain</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Data &amp; Analytics
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Governed data ecosystems, BI dashboards, and ML pipelines transforming raw data into mission-critical intelligence.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions builds governed data ecosystems that transform raw, siloed data into actionable intelligence. Our data practice spans the full analytics lifecycle from data engineering and governance through business intelligence, advanced analytics, and real-time streaming, all designed to meet federal data standards and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Functional Areas</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {functionalAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan">
                    <area.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                </div>
                <p className="text-steel leading-relaxed mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-cyan mt-1 shrink-0" />
                      <span className="text-sm text-navy font-medium">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Example Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-cloud rounded-lg p-4">
                <BarChart3 className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-navy font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Standards &amp; Frameworks</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {standards.map((s) => (
              <div key={s} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <span className="text-white text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                    <span className="text-steel leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">Target Customers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customers.map((c) => (
                  <div key={c} className="flex items-center gap-3 bg-cloud rounded-lg p-4">
                    <Building2 className="w-5 h-5 text-navy shrink-0" />
                    <span className="text-navy font-medium text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Unlock the Power of Your Data</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From data strategy to real-time analytics, our team builds the platforms that power data-driven missions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-we-do/capability-statements" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors">
              <Download className="w-5 h-5" /> Capability Statement
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors">
              <MessageSquare className="w-5 h-5" /> Talk to a Data Architect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
