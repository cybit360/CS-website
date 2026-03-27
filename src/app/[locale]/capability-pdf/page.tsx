"use client";

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

const coreCompetencies = [
  {
    title: "Cybersecurity & Zero Trust",
    items: "NIST RMF, continuous ATO, zero-trust architecture, SIEM/SOAR, vulnerability management, penetration testing",
  },
  {
    title: "Cloud & Infrastructure",
    items: "AWS GovCloud, Azure Government, hybrid/multi-cloud, IL4/IL5/IL6, FedRAMP authorization",
  },
  {
    title: "AI & Data Analytics",
    items: "AIOps, ML operations, predictive analytics, NLP solutions, data lake architecture",
  },
  {
    title: "Enterprise IT Modernization",
    items: "Legacy transformation, M365 GCC High, ServiceNow ITSM, digital workflow automation",
  },
  {
    title: "Identity & Access Management",
    items: "PIV/CAC lifecycle, PKI/HSM infrastructure, biometric enrollment, ICAM solutions",
  },
  {
    title: "DevSecOps & Software Engineering",
    items: "CI/CD pipelines, containerized microservices, Kubernetes orchestration, secure SDLC",
  },
  {
    title: "Physical Security & PSIM",
    items: "Video surveillance, access control, intrusion detection, unified SOC platforms",
  },
  {
    title: "Managed Services & Support",
    items: "24/7 global service desk, Tier 1-3 engineering, SLA-driven operations, proactive monitoring",
  },
];

const pastPerformance = [
  {
    client: "Multiple Federal Agencies (DoD, Civilian, IC)",
    project: "Microsoft Ecosystem: Enterprise Platform Modernization",
    description:
      "M365 GCC High migration for 50,000+ users, Azure Government IL5 authorization, Power Platform automation saving 200K+ hours annually.",
  },
  {
    client: "DoD Air Force & Space Force",
    project: "C3BM / ABMS (JADC2)",
    description:
      "Zero-trust cloud battle network with ICAM/PKI, RMF/ATO authorization, and multi-domain C2 integration for JADC2 initiative.",
  },
  {
    client: "Department of State",
    project: "Consular Affairs Key Management Infrastructure (CAKMI)",
    description:
      "Enterprise HSM/PKI key management and Oracle 19c database encryption protecting global consular data 24x7 across hundreds of facilities.",
  },
  {
    client: "Department of State",
    project: "Next Generation Enterprise Monitoring (NGEM)",
    description:
      "Modernized enterprise monitoring and observability platform serving diplomatic missions worldwide with comprehensive infrastructure visibility.",
  },
  {
    client: "Department of State",
    project: "Diplomatic Security SPARTA PSIM",
    description:
      "Unified PSIM platform with Genetec, C-CURE, and geospatial dashboards supporting $73M modernization across global diplomatic facilities.",
  },
  {
    client: "Department of Defense (DMDC)",
    project: "RAPIDS / DEERS",
    description:
      "Identity credential issuance (CAC) and benefits eligibility verification serving millions of DoD personnel, dependents, and retirees worldwide.",
  },
];

const contractVehicles = [
  "GSA MAS (Multiple Award Schedule)",
  "CIO-SP3 (NIH NITAAC)",
  "SEWP V (NASA)",
  "DISA SETI",
  "Alliant 2 GWAC",
];

const certifications = [
  "ISO 27001 - Information Security Management",
  "ISO 20000 - IT Service Management",
  "CMMI Level 3 - Development & Services",
  "SOC 2 Type II Compliance",
];

const clearances = [
  "Facility Clearance (FCL) - Top Secret",
  "Personnel clearances through TS/SCI",
  "Continuous evaluation program compliance",
];

export default function CapabilityPDFPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="capability-pdf-page bg-white min-h-screen">
      {/* Print Action Bar - hidden when printing */}
      <div className="no-print bg-[#0B1C2E] text-white py-4 px-6 flex items-center justify-between sticky top-0 z-50">
        <p className="text-sm text-white/80">
          Use <strong>Ctrl+P</strong> (or <strong>Cmd+P</strong> on Mac) to
          print or save as PDF
        </p>
        <button
          onClick={handlePrint}
          className="px-5 py-2 bg-[#13C0F5] text-[#0B1C2E] font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* PDF Content */}
      <div className="max-w-[850px] mx-auto px-8 py-10 print-content">
        {/* Header */}
        <header className="flex items-start justify-between border-b-4 border-[#13C0F5] pb-6 mb-8">
          <div>
            <h1
              className="text-3xl font-bold text-[#0B1C2E] tracking-tight"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              CybitSolutions
            </h1>
            <p className="text-sm text-[#5C6B7A] mt-1 font-medium">
              A Division of AFANO Group | SDVOSB | MBE
            </p>
            <p
              className="text-lg font-semibold text-[#0B1C2E] mt-2"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Corporate Capability Statement
            </p>
          </div>
          <div className="text-right text-sm text-[#5C6B7A] leading-relaxed">
            <p className="font-semibold text-[#0B1C2E]">CybitSolutions — A Division of AFANO Group</p>
            <p>info@cybitsolutions.net</p>
            <p>+ (771) 233-1379</p>
            <p>www.cybitsolutions.com</p>
          </div>
        </header>

        {/* Company Overview */}
        <section className="mb-8">
          <h2
            className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 uppercase tracking-wide text-sm"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Company Overview
          </h2>
          <p className="text-sm text-[#1E2A38] leading-relaxed">
            CybitSolutions is the Technology and Digital Transformation Division
            and Industry Domain Solutions of AFANO Group, with over 20 years of
            government and commercial contracting experience. We deliver
            mission-grade IT solutions across cybersecurity, cloud computing,
            artificial intelligence, data analytics, and digital transformation
            for federal agencies, the Department of Defense, and the Intelligence
            Community. Our cleared professionals combine deep technical expertise
            with proven federal delivery methodologies to protect national
            security and advance agency missions.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-8">
          <h2
            className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 uppercase tracking-wide text-sm"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {coreCompetencies.map((comp) => (
              <div key={comp.title}>
                <h3 className="text-sm font-bold text-[#0B1C2E]">
                  {comp.title}
                </h3>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  {comp.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Past Performance */}
        <section className="mb-8">
          <h2
            className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 uppercase tracking-wide text-sm"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Past Performance Highlights
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {pastPerformance.map((perf) => (
              <div
                key={perf.project}
                className="border-l-[3px] border-[#13C0F5] pl-3"
              >
                <p className="text-xs font-bold text-[#0B1C2E]">
                  {perf.client}
                </p>
                <p className="text-xs font-semibold text-[#13C0F5]">
                  {perf.project}
                </p>
                <p className="text-[11px] text-[#5C6B7A] leading-relaxed">
                  {perf.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column: Certs/Clearances and Contract Vehicles/NAICS */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Left: Certifications & Clearances */}
          <div>
            <h2
              className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 uppercase tracking-wide text-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Certifications
            </h2>
            <ul className="space-y-1">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="text-xs text-[#1E2A38] flex items-start gap-2"
                >
                  <span className="text-[#13C0F5] font-bold mt-0.5">
                    &#10003;
                  </span>
                  {cert}
                </li>
              ))}
            </ul>

            <h2
              className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 mt-5 uppercase tracking-wide text-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Security Clearances
            </h2>
            <ul className="space-y-1">
              {clearances.map((cl) => (
                <li
                  key={cl}
                  className="text-xs text-[#1E2A38] flex items-start gap-2"
                >
                  <span className="text-[#13C0F5] font-bold mt-0.5">
                    &#10003;
                  </span>
                  {cl}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contract Vehicles & NAICS */}
          <div>
            <h2
              className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 uppercase tracking-wide text-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Contract Vehicles
            </h2>
            <ul className="space-y-1">
              {contractVehicles.map((cv) => (
                <li
                  key={cv}
                  className="text-xs text-[#1E2A38] flex items-start gap-2"
                >
                  <span className="text-[#13C0F5] font-bold mt-0.5">
                    &#9654;
                  </span>
                  {cv}
                </li>
              ))}
            </ul>

            <h2
              className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 mt-5 uppercase tracking-wide text-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              NAICS Codes
            </h2>
            <div className="grid grid-cols-2 gap-1">
              {naicsCodes.map((naics) => (
                <p key={naics.code} className="text-xs text-[#1E2A38]">
                  <span className="font-bold text-[#0B1C2E]">
                    {naics.code}
                  </span>{" "}
                  <span className="text-[#5C6B7A]">- {naics.label}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <section className="mb-8">
          <h2
            className="font-bold text-[#0B1C2E] border-b-2 border-[#0B1C2E] pb-1 mb-3 uppercase tracking-wide text-sm"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Why CybitSolutions
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#13C0F5]">20+</p>
              <p className="text-xs text-[#5C6B7A]">
                Years Federal Experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#13C0F5]">500+</p>
              <p className="text-xs text-[#5C6B7A]">Cleared Professionals</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#13C0F5]">100+</p>
              <p className="text-xs text-[#5C6B7A]">
                Federal Contracts Delivered
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-[#13C0F5] pt-4 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-[#0B1C2E]">
                CybitSolutions — A Division of AFANO Group
              </p>
              <p className="text-xs text-[#5C6B7A]">
                SDVOSB | MBE | Technology & Digital Transformation
              </p>
            </div>
            <div className="text-right text-xs text-[#5C6B7A]">
              <p>info@cybitsolutions.net | + (771) 233-1379</p>
              <p>www.cybitsolutions.com</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
