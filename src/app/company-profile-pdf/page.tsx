"use client";

import Image from "next/image";

const companyStats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Cleared Professionals" },
  { value: "100+", label: "Contracts Delivered" },
  { value: "$2B+", label: "Program Value Managed" },
];

const serviceDomains = [
  {
    title: "Cybersecurity & Risk Management",
    desc: "Zero-trust, SOC/MDR, GRC, RMF, vulnerability management, incident response",
  },
  {
    title: "Cloud Computing & Virtualization",
    desc: "AWS GovCloud, Azure Gov, FedRAMP High, IL4/IL5, migration, FinOps",
  },
  {
    title: "Core IT Infrastructure & Operations",
    desc: "SD-WAN, data center modernization, NOC, help desk, disaster recovery",
  },
  {
    title: "Software Development & DevOps",
    desc: "DevSecOps CI/CD, agile, app modernization, API design, test automation",
  },
  {
    title: "Data & Analytics",
    desc: "Data lakes, ETL, BI dashboarding, governance, geospatial, streaming",
  },
  {
    title: "AI & Automation",
    desc: "ML/NLP, RPA, computer vision, intelligent document processing, MLOps",
  },
  {
    title: "Enterprise IT Platforms",
    desc: "ServiceNow, Salesforce, M365 GCC High, SharePoint, SAP, EA",
  },
  {
    title: "Digital Transformation",
    desc: "IT modernization, legacy migration, citizen experience, change management",
  },
  {
    title: "Emerging Technologies",
    desc: "Blockchain, post-quantum crypto, edge computing, IoT, 5G, AR/VR",
  },
  {
    title: "Industry-Specific IT",
    desc: "Healthcare IT, financial mgmt, law enforcement tech, HPC, logistics",
  },
];

const pastPerformance = [
  {
    client: "U.S. Air Force & Space Force",
    program: "C3BM / ABMS — Joint All-Domain Command & Control",
    results: [
      "60% faster sensor-to-shooter timeline",
      "99.99% uptime in operational environments",
      "Full DevSecOps maturity — 2-week sprints",
    ],
  },
  {
    client: "Dept. of State — Consular Affairs",
    program: "CAKMI — Key Management Infrastructure",
    results: [
      "Key provisioning: 48 hrs → 5 min",
      "15M+ daily crypto ops at 99.999% uptime",
      "FIPS 140-2 Level 3 certified globally",
    ],
  },
  {
    client: "Dept. of State — IRM",
    program: "NGEM — Next-Gen Enterprise Monitoring",
    results: [
      "15+ tools consolidated into single platform",
      "MTTD: 45 min → under 3 min",
      "98% reduction in false-positive alerts",
    ],
  },
  {
    client: "Dept. of State — Diplomatic Security",
    program: "SPARTA PSIM — Physical Security Mgmt",
    results: [
      "Response time: 12 min → 90 seconds",
      "10,000+ sensors across 150+ facilities",
      "94% AI threat detection accuracy",
    ],
  },
  {
    client: "DMDC, Dept. of Defense",
    program: "RAPIDS/DEERS — Military ID Modernization",
    results: [
      "ID issuance: 30 min → 8 min",
      "95% COBOL migrated to cloud-native",
      "18M+ annual transactions, zero incidents",
    ],
  },
];

const leadershipTeam = [
  { name: "James Carter", title: "Chief Executive Officer", creds: "MBA Georgetown · U.S. Army Veteran · PMP" },
  { name: "Dr. Sarah Nguyen", title: "Chief Technology Officer", creds: "Ph.D. Carnegie Mellon · CISSP · AWS SA Pro" },
  { name: "Michael Ross", title: "Chief Operating Officer", creds: "M.S. Johns Hopkins · U.S. Navy Veteran · PMP" },
  { name: "Alicia Martinez", title: "VP of Cybersecurity", creds: "CISSP · CISM · CCSP · CEH · TS/SCI" },
  { name: "David Kim", title: "VP of Cloud & Infrastructure", creds: "AWS SA Pro · Azure Expert · GCP Architect · CKA" },
  { name: "Patricia O'Connell", title: "VP of Government Programs", creds: "DAWIA III · PMP · SAFe SPC · Former GSA CO" },
];

const naicsCodes = [
  "541512 — Computer Systems Design",
  "541511 — Custom Programming",
  "541513 — Computer Facilities Mgmt",
  "541519 — Other Computer Services",
  "518210 — Data Processing & Hosting",
  "541330 — Engineering Services",
  "561210 — Facilities Support",
  "611430 — Prof. Development Training",
];

const contractVehicles = [
  "GSA MAS",
  "CIO-SP3 / CIO-SP4",
  "SEWP V (NASA)",
  "Alliant 2 SB",
  "STARS III",
  "OASIS+ SB",
  "DISA SETI",
  "Army ITES-3S",
];

const certifications = [
  "Service-Disabled Veteran-Owned SB (SDVOSB)",
  "Minority-Owned Business Enterprise (MBE)",
  "CMMC Level 3 Certified",
  "ISO 27001 Certified",
  "ISO 9001 Certified",
  "SOC 2 Type II Attested",
  "FedRAMP Authorized Solutions",
  "TS/SCI Facility Clearance",
];

const partners = [
  "AWS", "Microsoft Azure", "Google Cloud", "ServiceNow", "Splunk",
  "Cisco", "CrowdStrike", "HashiCorp", "Databricks", "IBM",
];

export default function CompanyProfilePDFPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Print Action Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-navy text-white px-6 py-3 flex items-center justify-between print:hidden">
        <span className="font-semibold text-sm">
          CybitSolutions Company Profile — Print or Save as PDF
        </span>
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-accent-cyan text-navy font-bold rounded-lg hover:bg-accent-cyan/90 transition-colors text-sm"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="pt-14 print:pt-0">
        {/* ===== PAGE 1: Cover ===== */}
        <div className="profile-page bg-[#0B1C2E] text-white flex flex-col items-center justify-center min-h-[11in] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#13C0F5]" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#13C0F5]" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, #13C0F5 1px, transparent 1px), radial-gradient(circle at 75% 75%, #13C0F5 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div className="relative z-10 text-center px-12 py-16">
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="CybitSolutions Logo"
                width={280}
                height={70}
                className="mx-auto h-20 w-auto"
              />
            </div>
            <div className="w-24 h-0.5 bg-[#13C0F5] mx-auto mb-8" />
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              Company Profile
            </h1>
            <p className="text-xl text-[#13C0F5] font-medium italic mb-12">
              Mission-Grade Innovation for Cyber, Cloud, and AI
            </p>
            <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
              {companyStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-[#13C0F5]">{s.value}</div>
                  <div className="text-xs text-white/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-white/40 text-sm">
              Veteran-Owned · Minority-Owned · SDVOSB Certified
            </div>
          </div>
        </div>

        {/* ===== PAGE 2: Company Overview ===== */}
        <div className="profile-page px-12 py-10 min-h-[11in]">
          <div className="border-b-2 border-[#13C0F5] pb-3 mb-8">
            <h2 className="text-2xl font-bold text-[#0B1C2E]">Company Overview</h2>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-[#5C6B7A] leading-relaxed mb-4">
                Founded in 2003, CybitSolutions is a Service-Disabled Veteran-Owned
                Small Business (SDVOSB) and Minority-Owned Business Enterprise (MBE)
                delivering mission-critical IT solutions to federal agencies, the
                Department of Defense, Intelligence Community, and commercial enterprises.
              </p>
              <p className="text-sm text-[#5C6B7A] leading-relaxed mb-4">
                Our team of 500+ cleared professionals operates across 10 service domains,
                supporting programs that protect national security, modernize government
                operations, and advance digital transformation. We maintain CONUS and
                OCONUS presence with the clearances, certifications, and compliance
                posture required for the most sensitive government programs.
              </p>
              <p className="text-sm text-[#5C6B7A] leading-relaxed">
                We leverage strategic partnerships with AWS, Microsoft, Google Cloud,
                ServiceNow, Splunk, Cisco, and other industry leaders to deliver
                best-in-class solutions at mission speed.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F4F7FA] rounded-lg p-5 border-l-4 border-[#13C0F5]">
                <h3 className="font-bold text-[#0B1C2E] text-sm mb-2">Mission</h3>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  To deliver innovative, secure, and reliable IT solutions that empower
                  federal agencies and commercial organizations to accomplish their most
                  critical missions.
                </p>
              </div>
              <div className="bg-[#F4F7FA] rounded-lg p-5 border-l-4 border-[#FFC766]">
                <h3 className="font-bold text-[#0B1C2E] text-sm mb-2">Vision</h3>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  To be the most trusted technology partner for organizations protecting
                  national security, advancing government modernization, and serving the
                  public good.
                </p>
              </div>
              <div className="bg-[#F4F7FA] rounded-lg p-5 border-l-4 border-[#13C0F5]">
                <h3 className="font-bold text-[#0B1C2E] text-sm mb-2">Headquarters</h3>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  Washington, D.C. Metropolitan Area<br />
                  CONUS and OCONUS operational presence
                </p>
              </div>
            </div>
          </div>

          {/* Service Domains */}
          <div className="border-b-2 border-[#13C0F5] pb-3 mb-6 mt-10">
            <h2 className="text-2xl font-bold text-[#0B1C2E]">Service Domains</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {serviceDomains.map((s, i) => (
              <div key={s.title} className="flex items-start gap-3 p-3 rounded-lg bg-[#F4F7FA]">
                <div className="flex items-center justify-center w-7 h-7 rounded bg-[#0B1C2E] text-[#13C0F5] font-bold text-xs shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1C2E] text-sm">{s.title}</h3>
                  <p className="text-xs text-[#5C6B7A] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-xs text-[#5C6B7A]">
            CybitSolutions Company Profile · Page 2
          </div>
        </div>

        {/* ===== PAGE 3: Past Performance ===== */}
        <div className="profile-page px-12 py-10 min-h-[11in]">
          <div className="border-b-2 border-[#13C0F5] pb-3 mb-8">
            <h2 className="text-2xl font-bold text-[#0B1C2E]">Past Performance</h2>
          </div>

          <div className="space-y-5">
            {pastPerformance.map((p) => (
              <div key={p.program} className="bg-[#F4F7FA] rounded-lg p-5 border border-[#E5E7EB]">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full min-h-[60px] bg-[#13C0F5] rounded-full shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-[#13C0F5] font-semibold uppercase tracking-wide mb-1">
                      {p.client}
                    </p>
                    <h3 className="font-bold text-[#0B1C2E] text-sm mb-3">{p.program}</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {p.results.map((r) => (
                        <div key={r} className="bg-white rounded p-2 text-center">
                          <p className="text-xs text-[#5C6B7A] leading-tight">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="border-b-2 border-[#13C0F5] pb-3 mb-6 mt-10">
            <h2 className="text-2xl font-bold text-[#0B1C2E]">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {leadershipTeam.map((m) => (
              <div key={m.name} className="bg-[#F4F7FA] rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B1C2E] to-[#13C0F5] flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-bold text-[#0B1C2E] text-sm">{m.name}</h3>
                <p className="text-xs text-[#13C0F5] font-medium mb-1">{m.title}</p>
                <p className="text-[10px] text-[#5C6B7A]">{m.creds}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-xs text-[#5C6B7A]">
            CybitSolutions Company Profile · Page 3
          </div>
        </div>

        {/* ===== PAGE 4: Certifications, NAICS, Vehicles, Partners, Contact ===== */}
        <div className="profile-page px-12 py-10 min-h-[11in]">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Certifications */}
            <div>
              <div className="border-b-2 border-[#13C0F5] pb-2 mb-4">
                <h2 className="text-lg font-bold text-[#0B1C2E]">Certifications & Clearances</h2>
              </div>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs text-[#5C6B7A]">
                    <span className="text-[#13C0F5] mt-0.5">&#10003;</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contract Vehicles */}
            <div>
              <div className="border-b-2 border-[#13C0F5] pb-2 mb-4">
                <h2 className="text-lg font-bold text-[#0B1C2E]">Contract Vehicles</h2>
              </div>
              <ul className="space-y-2">
                {contractVehicles.map((cv) => (
                  <li key={cv} className="flex items-start gap-2 text-xs text-[#5C6B7A]">
                    <span className="text-[#13C0F5] mt-0.5">&#10003;</span>
                    {cv}
                  </li>
                ))}
              </ul>
            </div>

            {/* NAICS */}
            <div>
              <div className="border-b-2 border-[#FFC766] pb-2 mb-4">
                <h2 className="text-lg font-bold text-[#0B1C2E]">NAICS Codes</h2>
              </div>
              <ul className="space-y-2">
                {naicsCodes.map((n) => (
                  <li key={n} className="text-xs text-[#5C6B7A] font-mono">{n}</li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <div className="border-b-2 border-[#FFC766] pb-2 mb-4">
                <h2 className="text-lg font-bold text-[#0B1C2E]">Technology Partners</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="inline-block px-3 py-1 bg-[#F4F7FA] rounded text-xs text-[#0B1C2E] font-medium border border-[#E5E7EB]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-[#0B1C2E] rounded-xl p-8 text-white">
            <div className="text-center mb-6">
              <Image
                src="/images/logo.png"
                alt="CybitSolutions Logo"
                width={200}
                height={50}
                className="mx-auto h-12 w-auto mb-4"
              />
              <h2 className="text-xl font-bold">Contact Us</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-[#13C0F5] text-xs font-semibold uppercase tracking-wide mb-1">Phone</p>
                <p className="text-sm text-white/80">(771) 233-1379</p>
              </div>
              <div>
                <p className="text-[#13C0F5] text-xs font-semibold uppercase tracking-wide mb-1">Email</p>
                <p className="text-sm text-white/80">info@cybitsolutions.net</p>
              </div>
              <div>
                <p className="text-[#13C0F5] text-xs font-semibold uppercase tracking-wide mb-1">Website</p>
                <p className="text-sm text-white/80">www.cybitsolutions.net</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-white/40">
                Washington, D.C. Metropolitan Area · CONUS & OCONUS Operations
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-[#5C6B7A]">
              CybitSolutions Company Profile · Page 4
            </p>
            <p className="text-[10px] text-[#5C6B7A] mt-2">
              Veteran-Owned · Minority-Owned · SDVOSB Certified · CAGE Code: XXXXX · DUNS: XXX-XXX-XXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
