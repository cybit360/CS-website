/**
 * CybitSolutions — Company Profile PowerPoint Generator
 * Professional presentation for government contract bidding
 * Usage: node scripts/generate-company-profile-pptx.js
 */

const PptxGenJS = require("pptxgenjs");
const path = require("path");
const fs = require("fs");

const pptx = new PptxGenJS();

// ── Brand Colors ──
const NAVY = "0B1C2E";
const SLATE = "1E2A38";
const CYAN = "13C0F5";
const AMBER = "FFC766";
const STEEL = "5C6B7A";
const CLOUD = "F4F7FA";
const WHITE = "FFFFFF";
const DARK_OVERLAY = "0A1628";

// ── Presentation Setup ──
pptx.author = "CybitSolutions";
pptx.company = "CybitSolutions — A Division of AFANO Group";
pptx.subject = "Company Profile for Government Contract Bidding";
pptx.title = "CybitSolutions Company Profile";
pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5

// ── Helper: Add background + top/bottom bars ──
function addSlideChrome(slide, opts = {}) {
  const { darkBg = true } = opts;

  if (darkBg) {
    slide.background = { color: NAVY };
    // Top gradient bar
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: "100%", h: 0.06, fill: { color: CYAN } });
    // Bottom gradient bar
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.44, w: "100%", h: 0.06, fill: { color: CYAN } });
  } else {
    slide.background = { color: WHITE };
    // Top accent
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: "100%", h: 0.05, fill: { color: CYAN } });
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0.05, w: "100%", h: 0.03, fill: { color: NAVY } });
  }

  // Decorative corner accent (top-right glow)
  if (darkBg) {
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 10, y: -1.5, w: 5, h: 5,
      fill: { color: CYAN, transparency: 92 },
    });
  }
}

function addPageNumber(slide, num, total, darkBg = true) {
  slide.addText(`${num} / ${total}`, {
    x: 12.2, y: 7.05, w: 1, h: 0.3,
    fontSize: 8, color: darkBg ? "6C7888" : STEEL,
    align: "right",
  });
}

function addFooterText(slide, darkBg = true) {
  slide.addText("CybitSolutions — A Division of AFANO Group · SDVOSB · MBE", {
    x: 0.5, y: 7.05, w: 5, h: 0.3,
    fontSize: 7, color: darkBg ? "4F6070" : STEEL,
  });
}

// Check for logo
const logoPath = path.join(__dirname, "..", "public", "images", "logo.png");
const hasLogo = fs.existsSync(logoPath);

const TOTAL_SLIDES = 12;

// ═══════════════════════════════════════════
// SLIDE 1: COVER
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  slide.background = { color: NAVY };

  // Top/bottom bars
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: "100%", h: 0.08, fill: { color: CYAN } });
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.42, w: "100%", h: 0.08, fill: { color: CYAN } });

  // Glow accents
  slide.addShape(pptx.ShapeType.ellipse, { x: 8, y: -2, w: 7, h: 7, fill: { color: CYAN, transparency: 94 } });
  slide.addShape(pptx.ShapeType.ellipse, { x: -2, y: 4, w: 5, h: 5, fill: { color: AMBER, transparency: 95 } });

  // Logo
  if (hasLogo) {
    slide.addImage({ path: logoPath, x: 3.67, y: 1.0, w: 6, h: 1.5, sizing: { type: "contain", w: 6, h: 1.5 } });
  } else {
    slide.addText("CybitSolutions", { x: 2, y: 1.2, w: 9.33, h: 1, fontSize: 44, fontFace: "Arial", bold: true, color: WHITE, align: "center" });
  }

  // Division text
  slide.addText("The Technology & Digital Transformation Division of AFANO Group", {
    x: 2, y: 2.7, w: 9.33, h: 0.4,
    fontSize: 11, color: "7A8494", align: "center", letterSpacing: 3,
  });

  // Divider line
  slide.addShape(pptx.ShapeType.rect, { x: 5.67, y: 3.3, w: 2, h: 0.03, fill: { color: CYAN } });

  // Title
  slide.addText("Company Profile", {
    x: 1.5, y: 3.6, w: 10.33, h: 1.0,
    fontSize: 48, fontFace: "Arial", bold: true, color: WHITE, align: "center",
  });

  // Tagline
  slide.addText("Mission-Grade Innovation for Cyber, Cloud & AI", {
    x: 2, y: 4.5, w: 9.33, h: 0.5,
    fontSize: 18, fontFace: "Arial", italic: true, color: CYAN, align: "center",
  });

  // Stats row
  const stats = [
    { val: "20+", label: "Years Experience" },
    { val: "500+", label: "Cleared Staff" },
    { val: "100+", label: "Contracts Delivered" },
    { val: "$2B+", label: "Program Value" },
  ];
  stats.forEach((s, i) => {
    const x = 2.0 + i * 2.5;
    slide.addText(s.val, { x, y: 5.4, w: 2.2, h: 0.5, fontSize: 28, bold: true, color: CYAN, align: "center" });
    slide.addText(s.label, { x, y: 5.85, w: 2.2, h: 0.3, fontSize: 9, color: "6C7888", align: "center" });
  });

  // Badges
  const badges = ["SDVOSB", "MBE", "TS/SCI CLEARED", "CMMC L3"];
  badges.forEach((b, i) => {
    const x = 2.8 + i * 2.0;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 6.5, w: 1.7, h: 0.35,
      fill: { color: CYAN, transparency: 90 },
      line: { color: CYAN, width: 0.75, transparency: 50 },
      rectRadius: 0.15,
    });
    slide.addText(b, { x, y: 6.5, w: 1.7, h: 0.35, fontSize: 8, bold: true, color: CYAN, align: "center" });
  });

  // Footer
  slide.addText("www.cybitsolutions.net  ·  info@cybitsolutions.net  ·  (771) 233-1379", {
    x: 2, y: 7.08, w: 9.33, h: 0.25, fontSize: 8, color: "4F6070", align: "center",
  });
}

// ═══════════════════════════════════════════
// SLIDE 2: TABLE OF CONTENTS
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Table of Contents", {
    x: 0.8, y: 0.4, w: 6, h: 0.7,
    fontSize: 28, bold: true, color: WHITE, fontFace: "Arial",
  });

  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  const items = [
    "Company Overview",
    "Our Services — 10 Domains",
    "Past Performance Highlights",
    "Leadership Team",
    "Certifications & Clearances",
    "Contract Vehicles & NAICS Codes",
    "Technology Partners",
    "Why CybitSolutions",
    "Contact Information",
  ];

  items.forEach((item, i) => {
    const y = 1.5 + i * 0.55;
    slide.addText(`0${i + 1}`, {
      x: 1.0, y, w: 0.6, h: 0.4,
      fontSize: 16, bold: true, color: CYAN, align: "left",
    });
    slide.addText(item, {
      x: 1.8, y, w: 6, h: 0.4,
      fontSize: 15, color: WHITE, fontFace: "Arial",
    });
    slide.addShape(pptx.ShapeType.rect, { x: 1.8, y: y + 0.38, w: 5, h: 0.005, fill: { color: "2B384C" } });
  });

  // Right side decorative
  slide.addShape(pptx.ShapeType.rect, { x: 9, y: 0.5, w: 0.04, h: 6.5, fill: { color: CYAN, transparency: 70 } });

  addFooterText(slide);
  addPageNumber(slide, 2, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 3: COMPANY OVERVIEW
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Company Overview", {
    x: 0.8, y: 0.4, w: 6, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  // Left column — description
  slide.addText([
    { text: "Established in 2003, ", options: { color: "D4D8DC", fontSize: 12 } },
    { text: "CybitSolutions", options: { color: CYAN, fontSize: 12, bold: true } },
    { text: " is the Technology and Digital Transformation Division of ", options: { color: "D4D8DC", fontSize: 12 } },
    { text: "AFANO Group", options: { color: CYAN, fontSize: 12, bold: true } },
    { text: ", delivering mission-critical IT solutions to federal agencies, the Department of Defense, Intelligence Community, and commercial enterprises.", options: { color: "D4D8DC", fontSize: 12 } },
  ], { x: 0.8, y: 1.5, w: 5.5, h: 1.5, lineSpacingMultiple: 1.3 });

  slide.addText("Our 500+ cleared professionals operate across 10 service domains, supporting programs that protect national security and advance digital transformation with CONUS and OCONUS presence, TS/SCI clearances, and full federal compliance.", {
    x: 0.8, y: 3.0, w: 5.5, h: 1.0,
    fontSize: 11, color: "A0A8B0", lineSpacingMultiple: 1.4,
  });

  // Right side — Mission & Vision cards
  // Mission card
  slide.addShape(pptx.ShapeType.roundRect, { x: 7, y: 1.5, w: 5.5, h: 1.3, fill: { color: SLATE }, rectRadius: 0.1 });
  slide.addShape(pptx.ShapeType.rect, { x: 7, y: 1.5, w: 0.06, h: 1.3, fill: { color: CYAN } });
  slide.addText("MISSION", { x: 7.3, y: 1.55, w: 5, h: 0.3, fontSize: 10, bold: true, color: CYAN, letterSpacing: 2 });
  slide.addText("Deliver innovative, secure, and reliable IT solutions that empower federal agencies to accomplish their most critical missions.", {
    x: 7.3, y: 1.85, w: 4.9, h: 0.8, fontSize: 10, color: "D4D8DC", lineSpacingMultiple: 1.3,
  });

  // Vision card
  slide.addShape(pptx.ShapeType.roundRect, { x: 7, y: 3.1, w: 5.5, h: 1.3, fill: { color: SLATE }, rectRadius: 0.1 });
  slide.addShape(pptx.ShapeType.rect, { x: 7, y: 3.1, w: 0.06, h: 1.3, fill: { color: AMBER } });
  slide.addText("VISION", { x: 7.3, y: 3.15, w: 5, h: 0.3, fontSize: 10, bold: true, color: AMBER, letterSpacing: 2 });
  slide.addText("Be the most trusted technology partner for organizations protecting national security and advancing government modernization.", {
    x: 7.3, y: 3.45, w: 4.9, h: 0.8, fontSize: 10, color: "D4D8DC", lineSpacingMultiple: 1.3,
  });

  // Stats bar at bottom
  const bottomStats = [
    { val: "20+", label: "Years of\nExperience" },
    { val: "500+", label: "Cleared\nProfessionals" },
    { val: "100+", label: "Contracts\nDelivered" },
    { val: "$2B+", label: "Program Value\nManaged" },
    { val: "10", label: "Service\nDomains" },
    { val: "24/7", label: "Global\nOperations" },
  ];

  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.0, w: 12.33, h: 1.6, fill: { color: SLATE } });

  bottomStats.forEach((s, i) => {
    const x = 0.8 + i * 2.05;
    slide.addText(s.val, { x, y: 5.15, w: 1.8, h: 0.55, fontSize: 24, bold: true, color: CYAN, align: "center" });
    slide.addText(s.label, { x, y: 5.7, w: 1.8, h: 0.6, fontSize: 8, color: "8890A0", align: "center" });
    if (i < bottomStats.length - 1) {
      slide.addShape(pptx.ShapeType.rect, { x: x + 1.9, y: 5.3, w: 0.01, h: 0.9, fill: { color: "334054" } });
    }
  });

  addFooterText(slide);
  addPageNumber(slide, 3, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 4: SERVICE DOMAINS (1-5)
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Our Services — 10 Domains", {
    x: 0.8, y: 0.4, w: 8, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  const domains1 = [
    { num: "01", title: "Cybersecurity & Risk Management", desc: "Zero-trust architecture, SOC/MDR, governance risk & compliance, NIST RMF, vulnerability management, penetration testing, and incident response for federal missions." },
    { num: "02", title: "Cloud Computing & Virtualization", desc: "AWS GovCloud, Azure Government, FedRAMP High, IL4/IL5/IL6, cloud migration, hybrid/multi-cloud strategy, and FinOps optimization." },
    { num: "03", title: "Core IT Infrastructure & Operations", desc: "SD-WAN, data center modernization, network operations center (NOC), Tier 1–3 help desk, monitoring, and disaster recovery." },
    { num: "04", title: "Software Development & DevOps", desc: "DevSecOps CI/CD pipelines, agile methodology, application modernization, microservices, API design, and test automation." },
    { num: "05", title: "Data & Analytics", desc: "Enterprise data lakes, ETL/ELT pipelines, BI dashboarding, data governance, geospatial analytics, and real-time streaming." },
  ];

  domains1.forEach((d, i) => {
    const y = 1.4 + i * 1.15;
    // Number badge
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.8, y, w: 0.55, h: 0.5, fill: { color: CYAN }, rectRadius: 0.08 });
    slide.addText(d.num, { x: 0.8, y, w: 0.55, h: 0.5, fontSize: 14, bold: true, color: NAVY, align: "center" });
    // Title
    slide.addText(d.title, { x: 1.55, y, w: 5, h: 0.35, fontSize: 14, bold: true, color: WHITE });
    // Description
    slide.addText(d.desc, { x: 1.55, y: y + 0.35, w: 10, h: 0.55, fontSize: 10, color: "A0A8B0", lineSpacingMultiple: 1.2 });
    // Divider
    if (i < 4) slide.addShape(pptx.ShapeType.rect, { x: 1.55, y: y + 1.0, w: 10.5, h: 0.005, fill: { color: "242F44" } });
  });

  addFooterText(slide);
  addPageNumber(slide, 4, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 5: SERVICE DOMAINS (6-10)
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Our Services — 10 Domains (cont.)", {
    x: 0.8, y: 0.4, w: 8, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  const domains2 = [
    { num: "06", title: "AI & Automation", desc: "Machine learning, NLP, robotic process automation (RPA), computer vision, intelligent document processing, and MLOps for federal AI initiatives." },
    { num: "07", title: "Enterprise IT Platforms", desc: "ServiceNow ITSM, Salesforce CRM, Microsoft 365 GCC High, SharePoint Online, SAP, and enterprise architecture consulting." },
    { num: "08", title: "Digital Transformation & Gov IT", desc: "IT modernization roadmaps, legacy system migration, citizen experience platforms, change management, and agile governance." },
    { num: "09", title: "Emerging & Next-Gen Technologies", desc: "Blockchain for supply chain, post-quantum cryptography, edge computing, IoT/IIoT, 5G integration, and AR/VR for training." },
    { num: "10", title: "Industry-Specific IT", desc: "Healthcare IT (HIPAA), financial management systems, law enforcement technology, high-performance computing, and logistics platforms." },
  ];

  domains2.forEach((d, i) => {
    const y = 1.4 + i * 1.15;
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.8, y, w: 0.55, h: 0.5, fill: { color: AMBER }, rectRadius: 0.08 });
    slide.addText(d.num, { x: 0.8, y, w: 0.55, h: 0.5, fontSize: 14, bold: true, color: NAVY, align: "center" });
    slide.addText(d.title, { x: 1.55, y, w: 5, h: 0.35, fontSize: 14, bold: true, color: WHITE });
    slide.addText(d.desc, { x: 1.55, y: y + 0.35, w: 10, h: 0.55, fontSize: 10, color: "A0A8B0", lineSpacingMultiple: 1.2 });
    if (i < 4) slide.addShape(pptx.ShapeType.rect, { x: 1.55, y: y + 1.0, w: 10.5, h: 0.005, fill: { color: "242F44" } });
  });

  addFooterText(slide);
  addPageNumber(slide, 5, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 6: PAST PERFORMANCE (1-3)
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Past Performance Highlights", {
    x: 0.8, y: 0.4, w: 8, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  const perf1 = [
    {
      client: "Multiple Federal Agencies (DoD, Civilian, IC)",
      program: "Microsoft Ecosystem — Enterprise Platform Modernization",
      results: ["M365 GCC High migration for 50,000+ users with 99.99% uptime", "500+ Power Apps deployed, 200K+ hours automated annually", "70% faster incident response via Microsoft Sentinel integration"],
    },
    {
      client: "U.S. Air Force & Space Force",
      program: "C3BM / ABMS — Joint All-Domain Command & Control (JADC2)",
      results: ["60% faster sensor-to-shooter timeline via zero-trust cloud battle network", "99.99% uptime in contested operational environments", "Full DevSecOps maturity with 2-week sprint cycles"],
    },
    {
      client: "Department of State — Consular Affairs",
      program: "CAKMI — Consular Affairs Key Management Infrastructure",
      results: ["Key provisioning reduced from 48 hours to 5 minutes", "15M+ daily cryptographic operations at 99.999% uptime", "FIPS 140-2 Level 3 certified across global facilities"],
    },
  ];

  perf1.forEach((p, i) => {
    const y = 1.4 + i * 1.9;
    // Card background
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.8, y, w: 11.73, h: 1.7, fill: { color: SLATE }, rectRadius: 0.08 });
    // Left accent bar
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y, w: 0.06, h: 1.7, fill: { color: CYAN } });
    // Client
    slide.addText(p.client.toUpperCase(), { x: 1.1, y: y + 0.05, w: 11, h: 0.25, fontSize: 8, bold: true, color: CYAN, letterSpacing: 1.5 });
    // Program
    slide.addText(p.program, { x: 1.1, y: y + 0.3, w: 11, h: 0.3, fontSize: 13, bold: true, color: WHITE });
    // Results
    p.results.forEach((r, j) => {
      slide.addText(`►  ${r}`, { x: 1.3, y: y + 0.65 + j * 0.3, w: 10.5, h: 0.3, fontSize: 10, color: "D4D8DC" });
    });
  });

  addFooterText(slide);
  addPageNumber(slide, 6, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 7: PAST PERFORMANCE (4-6)
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Past Performance Highlights (cont.)", {
    x: 0.8, y: 0.4, w: 8, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  const perf2 = [
    {
      client: "Department of State — IRM",
      program: "NGEM — Next-Generation Enterprise Monitoring",
      results: ["15+ monitoring tools consolidated into single unified platform", "Mean time to detect (MTTD) reduced from 45 minutes to under 3 minutes", "98% reduction in false-positive alerts across global diplomatic missions"],
    },
    {
      client: "Department of State — Diplomatic Security",
      program: "SPARTA PSIM — Physical Security Information Management",
      results: ["Response time reduced from 12 minutes to 90 seconds", "10,000+ sensors integrated across 150+ diplomatic facilities worldwide", "94% AI-powered threat detection accuracy supporting $73M modernization"],
    },
    {
      client: "DMDC, Department of Defense",
      program: "RAPIDS/DEERS — Military ID Modernization",
      results: ["ID issuance time reduced from 30 minutes to 8 minutes", "95% of legacy COBOL systems migrated to cloud-native architecture", "18M+ annual identity transactions processed with zero security incidents"],
    },
  ];

  perf2.forEach((p, i) => {
    const y = 1.4 + i * 1.9;
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.8, y, w: 11.73, h: 1.7, fill: { color: SLATE }, rectRadius: 0.08 });
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y, w: 0.06, h: 1.7, fill: { color: AMBER } });
    slide.addText(p.client.toUpperCase(), { x: 1.1, y: y + 0.05, w: 11, h: 0.25, fontSize: 8, bold: true, color: AMBER, letterSpacing: 1.5 });
    slide.addText(p.program, { x: 1.1, y: y + 0.3, w: 11, h: 0.3, fontSize: 13, bold: true, color: WHITE });
    p.results.forEach((r, j) => {
      slide.addText(`►  ${r}`, { x: 1.3, y: y + 0.65 + j * 0.3, w: 10.5, h: 0.3, fontSize: 10, color: "D4D8DC" });
    });
  });

  addFooterText(slide);
  addPageNumber(slide, 7, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 8: LEADERSHIP TEAM
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Leadership Team", {
    x: 0.8, y: 0.4, w: 6, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  const leaders = [
    { name: 'Adupedee "Prof" Ababio', title: "Chief Architect / CISO", desc: "Enterprise Security Architecture · Zero-Trust & NIST Compliance · 20+ years of federal cybersecurity leadership" },
    { name: 'Christian "Chris" Achemdey', title: "Division VP of Technology", desc: "Cloud Architecture · DevSecOps · AI/ML for Government · Multi-cloud platform engineering" },
    { name: "Adaobi Ikpeze", title: "Division VP of Operations & HR", desc: "Program Management · Human Capital Strategy · Federal Compliance · Organizational Excellence" },
    { name: "Stanley Opara", title: "Division VP of Cybersecurity", desc: "SOC/MDR Operations · Zero-Trust Implementation · RMF Authorization · Threat Intelligence" },
    { name: "Stanley Gorman", title: "Division VP of Cloud & Infrastructure", desc: "Multi-Cloud (AWS, Azure, GCP) · FedRAMP Authorization · IL4/IL5 Environments · Migration" },
    { name: "Alpha Taylor", title: "Division VP of Government Programs", desc: "Government Acquisition · Federal Program Management · Contract Strategy · Stakeholder Relations" },
  ];

  leaders.forEach((l, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.8 + col * 4.05;
    const y = 1.5 + row * 2.8;

    // Card
    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 3.75, h: 2.4, fill: { color: SLATE }, rectRadius: 0.1 });
    // Top accent
    slide.addShape(pptx.ShapeType.rect, { x, y, w: 3.75, h: 0.05, fill: { color: i < 3 ? CYAN : AMBER } });

    // Avatar circle
    const initials = l.name.split(" ").filter(n => !n.startsWith('"'));
    const init = initials.length >= 2 ? initials[0][0] + initials[initials.length - 1][0] : initials[0][0];
    slide.addShape(pptx.ShapeType.ellipse, { x: x + 1.38, y: y + 0.2, w: 1, h: 1, fill: { color: NAVY }, line: { color: CYAN, width: 1.5 } });
    slide.addText(init, { x: x + 1.38, y: y + 0.2, w: 1, h: 1, fontSize: 20, bold: true, color: CYAN, align: "center", valign: "middle" });

    // Name
    slide.addText(l.name, { x: x + 0.15, y: y + 1.25, w: 3.45, h: 0.3, fontSize: 11, bold: true, color: WHITE, align: "center" });
    // Title
    slide.addText(l.title, { x: x + 0.15, y: y + 1.5, w: 3.45, h: 0.25, fontSize: 9, bold: true, color: CYAN, align: "center" });
    // Desc
    slide.addText(l.desc, { x: x + 0.15, y: y + 1.8, w: 3.45, h: 0.5, fontSize: 8, color: "A0A8B0", align: "center", lineSpacingMultiple: 1.2 });
  });

  addFooterText(slide);
  addPageNumber(slide, 8, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 9: CERTIFICATIONS & CLEARANCES
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Certifications & Clearances", {
    x: 0.8, y: 0.4, w: 8, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  const certs = [
    { name: "SDVOSB Certified", desc: "Service-Disabled Veteran-Owned Small Business via AFANO Group", color: CYAN },
    { name: "MBE Certified", desc: "Minority Business Enterprise via AFANO Group", color: CYAN },
    { name: "CMMC Level 3", desc: "Cybersecurity Maturity Model Certification — Good Cyber Hygiene", color: AMBER },
    { name: "ISO 27001", desc: "Information Security Management System certified", color: AMBER },
    { name: "ISO 9001", desc: "Quality Management System certified", color: CYAN },
    { name: "SOC 2 Type II", desc: "Service Organization Control for security, availability, confidentiality", color: CYAN },
    { name: "FedRAMP Authorized", desc: "Federal Risk and Authorization Management Program solutions", color: AMBER },
    { name: "TS/SCI Facility Clearance", desc: "Top Secret / Sensitive Compartmented Information cleared facility and personnel", color: AMBER },
  ];

  certs.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.8 + col * 6.2;
    const y = 1.5 + row * 1.35;

    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.8, h: 1.1, fill: { color: SLATE }, rectRadius: 0.08 });
    slide.addShape(pptx.ShapeType.rect, { x, y, w: 0.06, h: 1.1, fill: { color: c.color } });

    // Checkmark circle
    slide.addShape(pptx.ShapeType.ellipse, { x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55, fill: { color: c.color, transparency: 85 } });
    slide.addText("✓", { x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55, fontSize: 18, bold: true, color: c.color, align: "center", valign: "middle" });

    slide.addText(c.name, { x: x + 1.0, y: y + 0.15, w: 4.5, h: 0.35, fontSize: 13, bold: true, color: WHITE });
    slide.addText(c.desc, { x: x + 1.0, y: y + 0.5, w: 4.5, h: 0.4, fontSize: 9, color: "A0A8B0" });
  });

  addFooterText(slide);
  addPageNumber(slide, 9, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 10: CONTRACT VEHICLES & NAICS
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Contract Vehicles & NAICS Codes", {
    x: 0.8, y: 0.4, w: 8, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  // Contract Vehicles
  slide.addText("CONTRACT VEHICLES", { x: 0.8, y: 1.4, w: 5, h: 0.35, fontSize: 12, bold: true, color: CYAN, letterSpacing: 2 });

  const vehicles = [
    "GSA MAS (Multiple Award Schedule)",
    "CIO-SP3 / CIO-SP4 (NIH NITAAC)",
    "SEWP V (NASA)",
    "Alliant 2 Small Business",
    "STARS III",
    "OASIS+ Small Business",
    "DISA SETI",
    "Army ITES-3S",
  ];

  vehicles.forEach((v, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.8 + col * 6.2;
    const y = 1.9 + row * 0.55;

    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.8, h: 0.4, fill: { color: SLATE }, rectRadius: 0.05 });
    slide.addText(`►  ${v}`, { x: x + 0.15, y, w: 5.5, h: 0.4, fontSize: 10, color: WHITE });
  });

  // NAICS Codes
  slide.addText("NAICS CODES", { x: 0.8, y: 4.3, w: 5, h: 0.35, fontSize: 12, bold: true, color: AMBER, letterSpacing: 2 });

  const naics = [
    { code: "541512", desc: "Computer Systems Design Services" },
    { code: "541511", desc: "Custom Computer Programming Services" },
    { code: "541513", desc: "Computer Facilities Management Services" },
    { code: "541519", desc: "Other Computer Related Services" },
    { code: "518210", desc: "Data Processing & Hosting Services" },
    { code: "541330", desc: "Engineering Services" },
    { code: "561210", desc: "Facilities Support Services" },
    { code: "611430", desc: "Professional & Management Development Training" },
  ];

  naics.forEach((n, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.8 + col * 6.2;
    const y = 4.8 + row * 0.55;

    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.8, h: 0.4, fill: { color: SLATE }, rectRadius: 0.05 });
    slide.addText(n.code, { x: x + 0.15, y, w: 0.8, h: 0.4, fontSize: 10, bold: true, color: AMBER });
    slide.addText(`— ${n.desc}`, { x: x + 0.9, y, w: 4.7, h: 0.4, fontSize: 10, color: "D4D8DC" });
  });

  addFooterText(slide);
  addPageNumber(slide, 10, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 11: TECHNOLOGY PARTNERS + WHY US
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  addSlideChrome(slide, { darkBg: true });

  slide.addText("Technology Partners & Differentiators", {
    x: 0.8, y: 0.4, w: 10, h: 0.7,
    fontSize: 28, bold: true, color: WHITE,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.1, w: 1.5, h: 0.03, fill: { color: CYAN } });

  // Partners
  slide.addText("STRATEGIC TECHNOLOGY PARTNERS", { x: 0.8, y: 1.4, w: 8, h: 0.3, fontSize: 10, bold: true, color: CYAN, letterSpacing: 2 });

  const allPartners = [
    "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform",
    "ServiceNow", "Splunk", "Cisco Systems",
    "CrowdStrike", "HashiCorp", "Databricks",
    "IBM", "Palo Alto Networks", "Dell Technologies",
    "VMware (Broadcom)", "Fortinet", "Red Hat",
  ];

  allPartners.forEach((p, i) => {
    const col = i % 5;
    const row = Math.floor(i / 5);
    const x = 0.8 + col * 2.45;
    const y = 1.9 + row * 0.55;

    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 2.25, h: 0.4, fill: { color: SLATE }, rectRadius: 0.05, line: { color: "2B384C", width: 0.5 } });
    slide.addText(p, { x, y, w: 2.25, h: 0.4, fontSize: 8, color: WHITE, align: "center" });
  });

  // Why CybitSolutions
  slide.addText("WHY CYBITSOLUTIONS", { x: 0.8, y: 3.9, w: 8, h: 0.3, fontSize: 10, bold: true, color: AMBER, letterSpacing: 2 });

  const reasons = [
    { title: "Mission-First Approach", desc: "Every solution designed for operational impact, compliance, and mission success — not just technical metrics." },
    { title: "Cleared & Compliant", desc: "TS/SCI facility clearance, CMMC L3, ISO 27001, FedRAMP — full compliance posture for the most sensitive programs." },
    { title: "Agile at Scale", desc: "DevSecOps maturity with 2-week sprints, CI/CD automation, and proven delivery across DoD, DoS, DHS, and IC." },
    { title: "End-to-End Capability", desc: "10 integrated service domains covering cyber, cloud, AI, data, and enterprise IT — one partner for the full mission stack." },
  ];

  reasons.forEach((r, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.8 + col * 6.2;
    const y = 4.4 + row * 1.3;

    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.8, h: 1.1, fill: { color: SLATE }, rectRadius: 0.08 });
    slide.addShape(pptx.ShapeType.rect, { x, y, w: 0.06, h: 1.1, fill: { color: AMBER } });
    slide.addText(r.title, { x: x + 0.3, y: y + 0.1, w: 5.2, h: 0.3, fontSize: 12, bold: true, color: WHITE });
    slide.addText(r.desc, { x: x + 0.3, y: y + 0.4, w: 5.2, h: 0.55, fontSize: 9, color: "D4D8DC", lineSpacingMultiple: 1.3 });
  });

  addFooterText(slide);
  addPageNumber(slide, 11, TOTAL_SLIDES);
}

// ═══════════════════════════════════════════
// SLIDE 12: CONTACT / CLOSING
// ═══════════════════════════════════════════
{
  const slide = pptx.addSlide();
  slide.background = { color: NAVY };

  // Top/bottom accent bars
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: "100%", h: 0.08, fill: { color: CYAN } });
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.42, w: "100%", h: 0.08, fill: { color: CYAN } });

  // Glow
  slide.addShape(pptx.ShapeType.ellipse, { x: 8, y: -2, w: 7, h: 7, fill: { color: CYAN, transparency: 94 } });

  // Logo
  if (hasLogo) {
    slide.addImage({ path: logoPath, x: 3.67, y: 1.2, w: 6, h: 1.5, sizing: { type: "contain", w: 6, h: 1.5 } });
  } else {
    slide.addText("CybitSolutions", { x: 2, y: 1.5, w: 9.33, h: 1, fontSize: 44, bold: true, color: WHITE, align: "center" });
  }

  slide.addText("A Division of AFANO Group", {
    x: 2, y: 2.8, w: 9.33, h: 0.4,
    fontSize: 12, color: "7A8494", align: "center", letterSpacing: 3,
  });

  slide.addShape(pptx.ShapeType.rect, { x: 5.67, y: 3.4, w: 2, h: 0.03, fill: { color: CYAN } });

  slide.addText("Let's Build the Future of Federal IT — Together.", {
    x: 1.5, y: 3.7, w: 10.33, h: 0.8,
    fontSize: 26, bold: true, color: WHITE, align: "center",
  });

  slide.addText("Ready to modernize your mission? Contact us to discuss how CybitSolutions\ncan deliver mission-grade solutions for your agency.", {
    x: 2.5, y: 4.5, w: 8.33, h: 0.7,
    fontSize: 12, color: "A0A8B0", align: "center", lineSpacingMultiple: 1.4,
  });

  // Contact info boxes
  const contacts = [
    { label: "PHONE", value: "+ (771) 233-1379" },
    { label: "EMAIL", value: "info@cybitsolutions.net" },
    { label: "WEBSITE", value: "www.cybitsolutions.net" },
  ];

  contacts.forEach((c, i) => {
    const x = 2.3 + i * 3.1;
    slide.addShape(pptx.ShapeType.roundRect, { x, y: 5.5, w: 2.7, h: 1.0, fill: { color: SLATE }, rectRadius: 0.1 });
    slide.addText(c.label, { x, y: 5.55, w: 2.7, h: 0.35, fontSize: 9, bold: true, color: CYAN, align: "center", letterSpacing: 2 });
    slide.addText(c.value, { x, y: 5.9, w: 2.7, h: 0.4, fontSize: 11, color: WHITE, align: "center" });
  });

  // Bottom tagline
  slide.addText("SDVOSB  ·  MBE  ·  TS/SCI Cleared  ·  CMMC L3  ·  ISO 27001  ·  FedRAMP", {
    x: 1.5, y: 6.8, w: 10.33, h: 0.3,
    fontSize: 8, color: "5E6C7C", align: "center", letterSpacing: 1.5,
  });
}

// ── Generate the file ──
const outputDir = path.join(__dirname, "..", "public", "downloads");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, "CybitSolutions-Company-Profile.pptx");

pptx.writeFile({ fileName: outputPath }).then(() => {
  console.log(`✅ PowerPoint generated: ${outputPath}`);
}).catch((err) => {
  console.error("Error generating PPTX:", err);
});
