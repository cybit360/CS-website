"use client";

import Image from "next/image";

/* ── Data ── */

const companyStats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Cleared Staff" },
  { value: "100+", label: "Contracts Delivered" },
  { value: "$2B+", label: "Program Value" },
];

const serviceDomains = [
  { title: "Cybersecurity & Risk Management", desc: "Zero-trust, SOC/MDR, GRC, RMF, vulnerability mgmt, IR" },
  { title: "Cloud Computing & Virtualization", desc: "AWS GovCloud, Azure Gov, FedRAMP, IL4/IL5, FinOps" },
  { title: "Core IT Infrastructure & Ops", desc: "SD-WAN, data center, NOC, help desk, DR" },
  { title: "Software Development & DevOps", desc: "DevSecOps CI/CD, agile, app modernization, APIs" },
  { title: "Data & Analytics", desc: "Data lakes, ETL, BI, governance, geospatial" },
  { title: "AI & Automation", desc: "ML/NLP, RPA, computer vision, IDP, MLOps" },
  { title: "Enterprise IT Platforms", desc: "ServiceNow, M365 GCC High, Salesforce, SAP" },
  { title: "Digital Transformation", desc: "IT modernization, legacy migration, CX" },
  { title: "Emerging Technologies", desc: "Blockchain, post-quantum, edge, IoT, 5G" },
  { title: "Industry-Specific IT", desc: "Healthcare, financial, law enforcement, HPC" },
];

const pastPerformance = [
  {
    client: "Multiple Federal Agencies",
    program: "Microsoft Ecosystem — Enterprise Modernization",
    results: ["50K+ users M365 GCC High", "500+ Power Apps", "70% faster IR"],
  },
  {
    client: "USAF & Space Force",
    program: "C3BM / ABMS — JADC2",
    results: ["60% faster sensor-to-shooter", "99.99% uptime", "DevSecOps maturity"],
  },
  {
    client: "Dept. of State — Consular",
    program: "CAKMI — Key Management Infrastructure",
    results: ["48hrs → 5min provisioning", "15M+ daily crypto ops", "FIPS 140-2 L3"],
  },
  {
    client: "Dept. of State — IRM",
    program: "NGEM — Next-Gen Enterprise Monitoring",
    results: ["15+ tools consolidated", "MTTD: 45min → 3min", "98% fewer false+"],
  },
  {
    client: "Dept. of State — DS",
    program: "SPARTA PSIM — Physical Security",
    results: ["Response: 12min → 90sec", "10K+ sensors, 150+ sites", "94% AI accuracy"],
  },
  {
    client: "DMDC, DoD",
    program: "RAPIDS/DEERS — Military ID Modernization",
    results: ["ID: 30 → 8 min", "95% COBOL migrated", "18M+ annual txns"],
  },
];

const leadershipTeam = [
  { name: 'Adupedee "Prof" Ababio', title: "Chief Architect / CISO", creds: "Enterprise Security · Zero-Trust · NIST" },
  { name: 'Christian "Chris" Achemdey', title: "VP of Technology", creds: "Cloud · DevSecOps · AI/ML" },
  { name: "Adaobi Ikpeze", title: "VP of Operations & HR", creds: "Program Mgmt · Human Capital" },
  { name: "Stanley Opara", title: "VP of Cybersecurity", creds: "SOC/MDR · Zero-Trust · RMF" },
  { name: "Stanley Gorman", title: "VP of Cloud & Infra", creds: "Multi-Cloud · FedRAMP · IL4/5" },
  { name: "Alpha Taylor", title: "VP of Gov Programs", creds: "Acquisition · Federal Programs" },
];

function getInitials(name: string) {
  const parts = name.split(" ").filter((n) => !n.startsWith('"'));
  return parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
}

const naicsCodes = [
  "541512", "541511", "541513", "541519", "518210", "541330", "561210", "611430",
];

const naicsLabels: Record<string, string> = {
  "541512": "Computer Systems Design",
  "541511": "Custom Programming",
  "541513": "Computer Facilities Mgmt",
  "541519": "Other Computer Services",
  "518210": "Data Processing & Hosting",
  "541330": "Engineering Services",
  "561210": "Facilities Support",
  "611430": "Prof. Development Training",
};

const contractVehicles = [
  "GSA MAS", "CIO-SP3/SP4", "SEWP V", "Alliant 2 SB",
  "STARS III", "OASIS+ SB", "DISA SETI", "ITES-3S",
];

const certifications = [
  "SDVOSB Certified (AFANO Group)", "MBE Certified (AFANO Group)",
  "CMMC Level 3", "ISO 27001", "ISO 9001",
  "SOC 2 Type II", "FedRAMP Authorized", "TS/SCI Facility Clearance",
];

const partners = [
  "AWS", "Microsoft", "Google Cloud", "ServiceNow", "Splunk",
  "Cisco", "CrowdStrike", "HashiCorp", "Databricks", "IBM",
  "Palo Alto", "Dell", "VMware", "Fortinet", "Red Hat",
];

/* ── Styles — using inline style objects for print-safe font sizing ── */

const S = {
  // Font sizes in pt for print reliability
  xs: { fontSize: "7pt", lineHeight: "1.3" } as React.CSSProperties,
  sm: { fontSize: "8pt", lineHeight: "1.4" } as React.CSSProperties,
  base: { fontSize: "9pt", lineHeight: "1.5" } as React.CSSProperties,
  md: { fontSize: "10pt", lineHeight: "1.4" } as React.CSSProperties,
  lg: { fontSize: "13pt", lineHeight: "1.2" } as React.CSSProperties,
  xl: { fontSize: "16pt", lineHeight: "1.1" } as React.CSSProperties,
  xxl: { fontSize: "28pt", lineHeight: "1.0" } as React.CSSProperties,
  hero: { fontSize: "36pt", lineHeight: "1.0" } as React.CSSProperties,
};

const NAVY = "#0B1C2E";
const CYAN = "#13C0F5";
const AMBER = "#FFC766";
const STEEL = "#5C6B7A";
const SLATE = "#1E2A38";
const CLOUD = "#F4F7FA";

export default function CompanyProfilePDFPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Print Action Bar */}
      <div className="print:hidden" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: NAVY, color: "#fff", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ ...S.base, fontWeight: 600, color: "#fff" }}>CybitSolutions Company Profile — Print or Save as PDF</span>
        <button onClick={() => window.print()} style={{ padding: "8px 24px", background: CYAN, color: NAVY, fontWeight: 700, borderRadius: 8, border: "none", cursor: "pointer", ...S.base }}>
          Print / Save as PDF
        </button>
      </div>

      <div style={{ paddingTop: 56 }} className="print:!pt-0">

        {/* ═══════ PAGE 1: COVER ═══════ */}
        <div className="profile-page" style={{ background: NAVY, color: "#fff", display: "flex", flexDirection: "column", minHeight: "10.5in", position: "relative", overflow: "hidden" }}>
          {/* Top gradient bar */}
          <div style={{ height: 6, background: `linear-gradient(90deg, ${CYAN}, ${AMBER}, ${CYAN})` }} />

          {/* Dot pattern */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `radial-gradient(circle, ${CYAN} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

          {/* Glow accents */}
          <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: `${CYAN}15`, borderRadius: "50%", filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 200, height: 200, background: `${AMBER}12`, borderRadius: "50%", filter: "blur(80px)" }} />

          <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 48px" }}>
            <Image src="/images/logo.png" alt="CybitSolutions Logo" width={340} height={85} style={{ height: 80, width: "auto", marginBottom: 28 }} />

            <p style={{ ...S.xs, color: "rgba(255,255,255,0.45)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 28 }}>
              The Technology &amp; Digital Transformation Division of AFANO Group
            </p>

            <div style={{ width: 100, height: 2, background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)`, marginBottom: 28 }} />

            <h1 style={{ ...S.hero, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", marginBottom: 8 }}>Company Profile</h1>
            <p style={{ ...S.lg, color: CYAN, fontWeight: 600, fontStyle: "italic", marginBottom: 40 }}>
              Mission-Grade Innovation for Cyber, Cloud &amp; AI
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28, maxWidth: 520, width: "100%", marginBottom: 40 }}>
              {companyStats.map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ ...S.xl, fontWeight: 800, color: CYAN }}>{s.value}</div>
                  <div style={{ ...S.xs, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div style={{ display: "flex", gap: 10 }}>
              {["SDVOSB", "MBE", "TS/SCI Cleared", "CMMC L3"].map((b) => (
                <span key={b} style={{ ...S.xs, padding: "4px 14px", border: `1px solid ${CYAN}40`, borderRadius: 20, color: CYAN, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ position: "relative", zIndex: 1, padding: "10px 48px", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ ...S.xs, color: "rgba(255,255,255,0.35)" }}>A Division of AFANO Group · SDVOSB · MBE</span>
            <span style={{ ...S.xs, color: "rgba(255,255,255,0.35)" }}>www.cybitsolutions.net · info@cybitsolutions.net · (771) 233-1379</span>
          </div>
        </div>

        {/* ═══════ PAGE 2: OVERVIEW + SERVICES ═══════ */}
        <div className="profile-page" style={{ display: "flex", flexDirection: "column", padding: "20px 36px 16px", minHeight: "10.5in" }}>
          {/* Accent bar */}
          <div style={{ height: 3, background: `linear-gradient(90deg, ${CYAN}, ${NAVY}, ${AMBER})`, borderRadius: 2, marginBottom: 16 }} />

          {/* Section: Company Overview */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 4, height: 18, borderRadius: 2, background: CYAN }} />
            <h2 style={{ ...S.md, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>Company Overview</h2>
            <div style={{ flex: 1, height: 1, background: `${CYAN}30` }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
            <div>
              <p style={{ ...S.sm, color: SLATE, marginBottom: 6 }}>
                Established in 2003, <strong>CybitSolutions</strong> is the Technology and Digital
                Transformation Division of <strong>AFANO Group</strong>, delivering mission-critical
                IT solutions to federal agencies, DoD, Intelligence Community, and commercial enterprises.
              </p>
              <p style={{ ...S.sm, color: SLATE }}>
                Our 500+ cleared professionals operate across 10 service domains, supporting programs that
                protect national security and advance digital transformation with CONUS/OCONUS presence,
                TS/SCI clearances, and full federal compliance.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ background: NAVY, borderRadius: 8, padding: "8px 12px" }}>
                <h3 style={{ ...S.xs, color: CYAN, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>Mission</h3>
                <p style={{ ...S.xs, color: "rgba(255,255,255,0.8)" }}>
                  Deliver innovative, secure, and reliable IT solutions that empower federal agencies to accomplish their most critical missions.
                </p>
              </div>
              <div style={{ background: NAVY, borderRadius: 8, padding: "8px 12px" }}>
                <h3 style={{ ...S.xs, color: AMBER, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>Vision</h3>
                <p style={{ ...S.xs, color: "rgba(255,255,255,0.8)" }}>
                  Be the most trusted technology partner for organizations protecting national security and advancing government modernization.
                </p>
              </div>
              <div style={{ background: CLOUD, borderRadius: 8, padding: "8px 12px", borderLeft: `3px solid ${CYAN}` }}>
                <h3 style={{ ...S.xs, color: NAVY, fontWeight: 700 }}>Headquarters</h3>
                <p style={{ ...S.xs, color: STEEL }}>Washington, D.C. Metro Area · CONUS &amp; OCONUS</p>
              </div>
            </div>
          </div>

          {/* Section: Service Domains */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 4, height: 18, borderRadius: 2, background: CYAN }} />
            <h2 style={{ ...S.md, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>10 Service Domains</h2>
            <div style={{ flex: 1, height: 1, background: `${CYAN}30` }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 14px" }}>
            {serviceDomains.map((s, i) => (
              <div key={s.title} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "5px 8px", background: CLOUD, borderRadius: 4, borderLeft: `3px solid ${CYAN}` }}>
                <div style={{ ...S.xs, width: 16, height: 16, borderRadius: 3, background: NAVY, color: CYAN, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ ...S.xs, fontWeight: 700, color: NAVY }}>{s.title}</div>
                  <div style={{ fontSize: "6.5pt", lineHeight: "1.3", color: STEEL }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Page footer */}
          <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "6pt", color: STEEL }}>CybitSolutions — A Division of AFANO Group · SDVOSB · MBE</span>
            <span style={{ fontSize: "6pt", color: STEEL }}>Page 2 of 4</span>
          </div>
        </div>

        {/* ═══════ PAGE 3: PAST PERFORMANCE + LEADERSHIP ═══════ */}
        <div className="profile-page" style={{ display: "flex", flexDirection: "column", padding: "20px 36px 16px", minHeight: "10.5in" }}>
          <div style={{ height: 3, background: `linear-gradient(90deg, ${CYAN}, ${NAVY}, ${AMBER})`, borderRadius: 2, marginBottom: 16 }} />

          {/* Past Performance */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 4, height: 18, borderRadius: 2, background: CYAN }} />
            <h2 style={{ ...S.md, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>Past Performance Highlights</h2>
            <div style={{ flex: 1, height: 1, background: `${CYAN}30` }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {pastPerformance.map((p) => (
              <div key={p.program} style={{ borderRadius: 6, overflow: "hidden", border: `1px solid #E5E7EB` }}>
                <div style={{ background: NAVY, padding: "6px 10px" }}>
                  <div style={{ fontSize: "6pt", color: CYAN, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.client}</div>
                  <div style={{ ...S.xs, fontWeight: 700, color: "#fff" }}>{p.program}</div>
                </div>
                <div style={{ background: CLOUD, padding: "5px 10px" }}>
                  {p.results.map((r) => (
                    <div key={r} style={{ display: "flex", alignItems: "flex-start", gap: 4, marginBottom: 1 }}>
                      <span style={{ color: CYAN, fontSize: "6pt", marginTop: 1 }}>&#9654;</span>
                      <span style={{ fontSize: "6.5pt", lineHeight: "1.3", color: SLATE }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 4, height: 18, borderRadius: 2, background: CYAN }} />
            <h2 style={{ ...S.md, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>Leadership Team</h2>
            <div style={{ flex: 1, height: 1, background: `${CYAN}30` }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {leadershipTeam.map((m) => (
              <div key={m.name} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 10px", borderRadius: 6, background: CLOUD, border: `1px solid #E5E7EB` }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${NAVY}, ${CYAN})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, flexShrink: 0, ...S.xs }}>
                  {getInitials(m.name)}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ ...S.xs, fontWeight: 700, color: NAVY }}>{m.name}</div>
                  <div style={{ fontSize: "6.5pt", lineHeight: "1.3", color: CYAN, fontWeight: 600 }}>{m.title}</div>
                  <div style={{ fontSize: "6pt", lineHeight: "1.3", color: STEEL, marginTop: 1 }}>{m.creds}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "6pt", color: STEEL }}>CybitSolutions — A Division of AFANO Group · SDVOSB · MBE</span>
            <span style={{ fontSize: "6pt", color: STEEL }}>Page 3 of 4</span>
          </div>
        </div>

        {/* ═══════ PAGE 4: CERTS, VEHICLES, NAICS, PARTNERS, CONTACT ═══════ */}
        <div className="profile-page" style={{ display: "flex", flexDirection: "column", padding: "20px 36px 16px", minHeight: "10.5in" }}>
          <div style={{ height: 3, background: `linear-gradient(90deg, ${CYAN}, ${NAVY}, ${AMBER})`, borderRadius: 2, marginBottom: 16 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px", marginBottom: 12 }}>
            {/* Certifications */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div style={{ width: 4, height: 14, borderRadius: 2, background: CYAN }} />
                <h2 style={{ ...S.sm, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>Certifications &amp; Clearances</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {certifications.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: `${CYAN}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: CYAN, fontSize: "6pt", fontWeight: 700 }}>&#10003;</span>
                    </div>
                    <span style={{ ...S.xs, color: SLATE }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contract Vehicles */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div style={{ width: 4, height: 14, borderRadius: 2, background: CYAN }} />
                <h2 style={{ ...S.sm, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>Contract Vehicles</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {contractVehicles.map((cv) => (
                  <div key={cv} style={{ display: "flex", alignItems: "center", gap: 4, background: CLOUD, borderRadius: 4, padding: "3px 8px", border: "1px solid #E5E7EB" }}>
                    <span style={{ color: AMBER, fontSize: "6pt" }}>&#9654;</span>
                    <span style={{ ...S.xs, color: SLATE, fontWeight: 500 }}>{cv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NAICS Codes */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div style={{ width: 4, height: 14, borderRadius: 2, background: AMBER }} />
                <h2 style={{ ...S.sm, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>NAICS Codes</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 8px" }}>
                {naicsCodes.map((code) => (
                  <div key={code} style={{ ...S.xs, color: SLATE, fontFamily: "monospace", padding: "1px 0" }}>
                    <strong style={{ color: NAVY }}>{code}</strong> — {naicsLabels[code]}
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partners */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div style={{ width: 4, height: 14, borderRadius: 2, background: AMBER }} />
                <h2 style={{ ...S.sm, fontWeight: 800, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em" }}>Technology Partners</h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {partners.map((p) => (
                  <span key={p} style={{ ...S.xs, display: "inline-block", padding: "2px 8px", background: CLOUD, borderRadius: 4, color: NAVY, fontWeight: 600, border: "1px solid #E5E7EB" }}>{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div style={{ background: `linear-gradient(90deg, ${NAVY}, ${SLATE})`, borderRadius: 10, padding: "14px 20px", marginTop: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Image src="/images/logo.png" alt="CybitSolutions" width={140} height={35} style={{ height: 28, width: "auto" }} />
                <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
                <div>
                  <div style={{ ...S.sm, fontWeight: 700, color: "#fff" }}>Contact Us</div>
                  <div style={{ fontSize: "6.5pt", color: "rgba(255,255,255,0.45)" }}>Washington, D.C. Metro · CONUS &amp; OCONUS</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "6pt", color: CYAN, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Phone</div>
                  <div style={{ ...S.xs, color: "rgba(255,255,255,0.8)" }}>+ (771) 233-1379</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "6pt", color: CYAN, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Email</div>
                  <div style={{ ...S.xs, color: "rgba(255,255,255,0.8)" }}>info@cybitsolutions.net</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "6pt", color: CYAN, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Web</div>
                  <div style={{ ...S.xs, color: "rgba(255,255,255,0.8)" }}>www.cybitsolutions.net</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "6pt", color: STEEL }}>CybitSolutions — A Division of AFANO Group · SDVOSB · MBE · CAGE: XXXXX · DUNS: XXX-XXX-XXXX</span>
            <span style={{ fontSize: "6pt", color: STEEL }}>Page 4 of 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
