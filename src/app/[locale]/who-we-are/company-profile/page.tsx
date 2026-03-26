import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Cloud,
  Server,
  Code,
  BarChart3,
  Brain,
  Layers,
  Rocket,
  Cpu,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Users,
  CheckCircle,
  Star,
  Target,
  Briefcase,
  FileDown,
  Clock,
  Lock,
  Zap,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "CybitSolutions company profile — the Technology and Digital Transformation Division of AFANO Group, with 20+ years delivering cybersecurity, cloud, AI, and enterprise IT solutions to government and commercial clients.",
};

const companyStats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Cleared Professionals" },
  { value: "100+", label: "Contracts Delivered" },
  { value: "$2B+", label: "Program Value Managed" },
];

const serviceDomains = [
  {
    icon: Shield,
    title: "Cybersecurity & Risk Management",
    description:
      "Zero-trust architecture, SOC/MDR, GRC, vulnerability management, incident response, RMF authorization",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Virtualization",
    description:
      "AWS GovCloud, Azure Government, FedRAMP High, IL4/IL5, cloud migration, FinOps, Kubernetes",
  },
  {
    icon: Server,
    title: "Core IT Infrastructure & Operations",
    description:
      "SD-WAN, data center modernization, unified communications, NOC, help desk, disaster recovery",
  },
  {
    icon: Code,
    title: "Software Development & DevOps",
    description:
      "DevSecOps CI/CD, agile delivery, application modernization, API design, test automation",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Data lakes, ETL pipelines, BI dashboarding, data governance, geospatial analytics, real-time streaming",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "ML/NLP, RPA, computer vision, intelligent document processing, predictive analytics, MLOps",
  },
  {
    icon: Layers,
    title: "Enterprise IT Platforms",
    description:
      "ServiceNow ITSM, Salesforce CRM, M365 GCC High, SharePoint, SAP, enterprise architecture",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "IT modernization, legacy migration, citizen experience, portfolio rationalization, change management",
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    description:
      "Blockchain, post-quantum cryptography, edge computing, IoT, digital twins, 5G, AR/VR",
  },
  {
    icon: Building2,
    title: "Industry-Specific IT",
    description:
      "Healthcare IT, financial management, law enforcement tech, scientific HPC, logistics systems",
  },
];

const pastPerformance = [
  {
    client: "Multiple Federal Agencies",
    program: "Microsoft Ecosystem — Enterprise Platform Modernization",
    highlights: [
      "50,000+ users migrated to M365 GCC High with 99.99% uptime",
      "500+ citizen-developed Power Apps automating 200K+ hours annually",
      "Security incident response time reduced by 70% via Sentinel",
    ],
  },
  {
    client: "U.S. Air Force & U.S. Space Force",
    program: "DoD C3BM / ABMS — Joint All-Domain Command & Control",
    highlights: [
      "Reduced sensor-to-shooter timeline by 60%",
      "Full DevSecOps maturity with 2-week sprint cycles",
      "99.99% uptime across operational environments",
    ],
  },
  {
    client: "Department of State — Bureau of Consular Affairs",
    program: "CAKMI — Consular Affairs Key Management Infrastructure",
    highlights: [
      "Key provisioning reduced from 48 hours to under 5 minutes",
      "15 million+ daily cryptographic operations at 99.999% availability",
      "FIPS 140-2 Level 3 certification achieved globally",
    ],
  },
  {
    client: "Department of State — Bureau of IRM",
    program: "NGEM — Next-Generation Enterprise Monitoring",
    highlights: [
      "Consolidated 15+ monitoring tools into a single platform",
      "MTTD reduced from 45 minutes to under 3 minutes",
      "98% reduction in false-positive alerts via AIOps",
    ],
  },
  {
    client: "Department of State — Diplomatic Security",
    program: "SPARTA PSIM — Physical Security Information Management",
    highlights: [
      "Incident response time reduced from 12 min to 90 seconds",
      "10,000+ sensors integrated across 150+ facilities",
      "94% AI threat detection accuracy",
    ],
  },
  {
    client: "Defense Manpower Data Center (DMDC)",
    program: "RAPIDS/DEERS — Military ID & Benefits Modernization",
    highlights: [
      "ID issuance time reduced from 30 min to 8 min",
      "95% legacy COBOL migrated to cloud-native microservices",
      "18M+ annual transactions with zero security incidents",
    ],
  },
];

const naicsCodes = [
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541513", label: "Computer Facilities Management Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "518210", label: "Data Processing & Hosting Services" },
  { code: "541330", label: "Engineering Services" },
  { code: "561210", label: "Facilities Support Services" },
  { code: "611430", label: "Professional & Management Development Training" },
];

const contractVehicles = [
  "GSA MAS (Multiple Award Schedule)",
  "CIO-SP3 / CIO-SP4 (NITAAC)",
  "SEWP V (NASA)",
  "Alliant 2 SB (GSA)",
  "STARS III (GSA 8(a))",
  "OASIS+ SB (GSA)",
  "DISA SETI",
  "Army ITES-3S",
];

const certifications = [
  "AFANO Group — SDVOSB Certified",
  "AFANO Group — Minority-Owned Business Enterprise (MBE)",
  "CMMC Level 3 Certified",
  "ISO 27001 Certified",
  "ISO 9001 Certified",
  "SOC 2 Type II Attested",
  "FedRAMP Authorized Solutions",
  "TS/SCI Facility Clearance",
];

const technologyPartners = [
  "Amazon Web Services (AWS)",
  "Microsoft Azure",
  "Google Cloud Platform",
  "ServiceNow",
  "Splunk",
  "Cisco",
  "CrowdStrike",
  "HashiCorp",
  "Databricks",
  "IBM",
  "Palo Alto Networks",
  "Dell Technologies",
  "VMware (Broadcom)",
  "Fortinet",
  "Red Hat",
];

const leadershipTeam = [
  {
    name: 'Adupedee "Prof" Ababio',
    title: "Chief Architect / CISO",
    credentials: "Enterprise Security Architecture, Zero-Trust & NIST Compliance",
  },
  {
    name: 'Christian "Chris" Achemdey',
    title: "Division VP of Technology",
    credentials: "Cloud Architecture, DevSecOps, AI/ML for Government",
  },
  {
    name: "Adaobi Ikpeze",
    title: "Division VP of Operations & HR",
    credentials: "Program Management, Human Capital Strategy, Federal Compliance",
  },
  {
    name: "Stanley Opara",
    title: "Division VP of Cybersecurity",
    credentials: "SOC/MDR, Zero-Trust, RMF Authorization",
  },
  {
    name: "Stanley Gorman",
    title: "Division VP of Cloud & Infrastructure",
    credentials: "Multi-Cloud (AWS, Azure, GCP), FedRAMP, IL4/IL5",
  },
  {
    name: "Alpha Taylor",
    title: "Division VP of Government Programs",
    credentials: "Government Acquisition, Federal Program Management",
  },
];

const differentiators = [
  {
    icon: Lock,
    title: "Security-First DNA",
    description:
      "Every solution is built with zero-trust principles and NIST compliance from day one.",
  },
  {
    icon: Zap,
    title: "Mission-Speed Delivery",
    description:
      "Agile, DevSecOps-driven methodology delivering capabilities in sprints, not years.",
  },
  {
    icon: Users,
    title: "Cleared Workforce",
    description:
      "500+ professionals with active Secret, Top Secret, and TS/SCI clearances.",
  },
  {
    icon: Target,
    title: "Proven Past Performance",
    description:
      "100+ contracts across DoD, DoS, IC, and civilian agencies with measurable results.",
  },
];

export default function CompanyProfilePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Who We Are", href: "/who-we-are" }, { label: "Company Profile" }]} />
          <p className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Company Profile
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            CybitSolutions, the Technology and Digital Transformation Division
            of AFANO Group, delivers mission-critical cybersecurity, cloud, AI,
            and enterprise IT solutions to government and commercial clients
            worldwide.
          </p>
          <Link
            href="/company-profile-pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan/90 transition-colors"
          >
            <FileDown className="w-5 h-5" />
            Download Profile (PDF)
          </Link>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-steel font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Company Overview
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                Established in 2003, CybitSolutions is the Technology and
                Digital Transformation Division and Industry Domain Solutions of
                AFANO Group, serving as a trusted technology partner for federal
                agencies, the Department of Defense, the Intelligence Community,
                and commercial enterprises. We bring mission-grade discipline,
                innovation, and accountability to every engagement.
              </p>
              <p className="text-steel leading-relaxed mb-4">
                Our team of 500+ cleared professionals delivers end-to-end IT
                solutions across 10 mission-critical service domains, supporting
                programs that protect national security, modernize government
                operations, and advance digital transformation. We operate
                across CONUS and OCONUS locations, maintaining the clearances,
                certifications, and compliance posture required for the most
                sensitive government programs.
              </p>
              <p className="text-steel leading-relaxed">
                We leverage strategic partnerships with industry leaders
                including AWS, Microsoft, Google Cloud, ServiceNow, Splunk, and
                Cisco to deliver best-in-class solutions at mission speed.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent-cyan" />
                  Mission
                </h3>
                <p className="text-steel leading-relaxed">
                  To deliver innovative, secure, and reliable IT solutions that
                  empower federal agencies and commercial organizations to
                  accomplish their most critical missions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-cyan" />
                  Vision
                </h3>
                <p className="text-steel leading-relaxed">
                  To be the most trusted technology partner for organizations
                  protecting national security, advancing government
                  modernization, and serving the public good.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent-cyan" />
                  Headquarters
                </h3>
                <p className="text-steel leading-relaxed">
                  Washington, D.C. Metropolitan Area
                  <br />
                  <span className="text-sm">
                    With CONUS and OCONUS operational presence
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CybitSolutions */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why CybitSolutions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              What sets us apart as your technology partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent-cyan/10 text-accent-cyan mb-4 mx-auto">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Domains */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              10 Service Domains
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg">
              Comprehensive IT capabilities spanning the full spectrum of
              government and commercial technology needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDomains.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-border hover:border-accent-cyan/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-accent-cyan">
                    <service.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-navy">
                    {service.title}
                  </h3>
                </div>
                <p className="text-steel text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Past Performance
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg">
              Proven results across Department of Defense, Department of State,
              and federal civilian agencies.
            </p>
          </div>
          <div className="space-y-6">
            {pastPerformance.map((project) => (
              <div
                key={project.program}
                className="bg-cloud rounded-xl p-6 lg:p-8 border border-border"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="lg:w-1/3">
                    <p className="text-accent-cyan font-semibold text-sm mb-1">
                      {project.client}
                    </p>
                    <h3 className="text-lg font-bold text-navy">
                      {project.program}
                    </h3>
                  </div>
                  <div className="lg:w-2/3">
                    <ul className="space-y-2">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-steel text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Leadership Team
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg">
              Experienced leaders with deep government and commercial IT
              expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy to-accent-cyan flex items-center justify-center text-white font-bold text-lg mb-4">
                  {(() => {
                    const parts = member.name.split(" ").filter((n) => !n.startsWith('"'));
                    return parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
                  })()}
                </div>
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="text-accent-cyan font-medium text-sm mb-2">
                  {member.title}
                </p>
                <p className="text-steel text-sm">{member.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications, NAICS, Contract Vehicles, Partners */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-accent-cyan" />
                Certifications & Clearances
              </h2>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2 text-steel text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contract Vehicles */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-accent-cyan" />
                Contract Vehicles
              </h2>
              <ul className="space-y-3">
                {contractVehicles.map((cv) => (
                  <li
                    key={cv}
                    className="flex items-start gap-2 text-steel text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    {cv}
                  </li>
                ))}
              </ul>
            </div>

            {/* NAICS Codes */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-accent-cyan" />
                NAICS Codes
              </h2>
              <div className="space-y-2">
                {naicsCodes.map((n) => (
                  <div
                    key={n.code}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="font-mono font-bold text-navy bg-cloud px-2 py-1 rounded">
                      {n.code}
                    </span>
                    <span className="text-steel">{n.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partners */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-accent-cyan" />
                Technology Partners
              </h2>
              <ul className="space-y-3">
                {technologyPartners.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-steel text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Ready to discuss how CybitSolutions can support your mission?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-cyan/10 text-accent-cyan mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-white/80 text-sm">+ (771) 233-1379</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-cyan/10 text-accent-cyan mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-white/80 text-sm">info@cybitsolutions.net</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-cyan/10 text-accent-cyan mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-white/80 text-sm">www.cybitsolutions.net</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan/90 transition-colors"
            >
              Request Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/company-profile-pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-colors"
            >
              <FileDown className="w-5 h-5" />
              Download Full Profile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
