// Searchable index of all pages for the global command palette

export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // ── Main ──────────────────────────────────────────────────────────────
  {
    title: "Home",
    description:
      "Mission-grade IT solutions for government and enterprise",
    href: "/",
    category: "Main",
    keywords: ["home", "cybitsolutions", "govcon", "veteran", "minority"],
  },

  // ── What We Do ────────────────────────────────────────────────────────
  {
    title: "What We Do",
    description:
      "Overview of our services, past performance, and approach",
    href: "/what-we-do",
    category: "What We Do",
    keywords: ["services", "capabilities", "overview", "what we do"],
  },
  {
    title: "Services & Solutions",
    description:
      "10 service domains across cybersecurity, cloud, AI, and more",
    href: "/what-we-do/services",
    category: "What We Do",
    keywords: ["services", "solutions", "domains", "cybersecurity", "cloud", "AI"],
  },
  {
    title: "Cybersecurity & Risk Management",
    description:
      "End-to-end cybersecurity services including zero-trust, SOC, and incident response",
    href: "/what-we-do/services/cybersecurity",
    category: "What We Do",
    keywords: ["cybersecurity", "risk", "zero trust", "SOC", "FISMA", "compliance", "security"],
  },
  {
    title: "Cloud Computing & Virtualization",
    description:
      "Cloud migration, multi-cloud strategy, and FedRAMP-authorized solutions",
    href: "/what-we-do/services/cloud",
    category: "What We Do",
    keywords: ["cloud", "AWS", "Azure", "GCP", "FedRAMP", "migration", "virtualization"],
  },
  {
    title: "Core IT Infrastructure, Networking & Operations",
    description:
      "Network design, data center modernization, and IT operations management",
    href: "/what-we-do/services/infrastructure",
    category: "What We Do",
    keywords: ["infrastructure", "networking", "data center", "operations", "IT ops"],
  },
  {
    title: "Software Development & DevOps",
    description:
      "Custom application development, DevSecOps pipelines, and agile delivery",
    href: "/what-we-do/services/software-devops",
    category: "What We Do",
    keywords: ["software", "development", "DevOps", "DevSecOps", "agile", "CI/CD"],
  },
  {
    title: "Data & Analytics",
    description:
      "Data engineering, business intelligence, and advanced analytics solutions",
    href: "/what-we-do/services/data-analytics",
    category: "What We Do",
    keywords: ["data", "analytics", "BI", "business intelligence", "data engineering", "visualization"],
  },
  {
    title: "AI & Automation",
    description:
      "Artificial intelligence, machine learning, and intelligent process automation",
    href: "/what-we-do/services/ai-automation",
    category: "What We Do",
    keywords: ["AI", "artificial intelligence", "machine learning", "automation", "ML", "RPA"],
  },
  {
    title: "Enterprise IT Services & Platforms",
    description:
      "ITSM, ERP, ServiceNow, and enterprise platform management",
    href: "/what-we-do/services/enterprise-it",
    category: "What We Do",
    keywords: ["enterprise", "ITSM", "ERP", "ServiceNow", "platforms", "management"],
  },
  {
    title: "Digital Transformation & Government IT",
    description:
      "IT modernization, citizen experience, and government digital strategy",
    href: "/what-we-do/services/digital-transformation",
    category: "What We Do",
    keywords: ["digital transformation", "modernization", "government IT", "citizen experience"],
  },
  {
    title: "Emerging & Next-Gen Technologies",
    description:
      "Blockchain, quantum computing, IoT, and edge computing solutions",
    href: "/what-we-do/services/emerging-tech",
    category: "What We Do",
    keywords: ["emerging", "blockchain", "quantum", "IoT", "edge computing", "next-gen"],
  },
  {
    title: "Industry-Specific IT",
    description:
      "Tailored IT solutions for defense, healthcare, financial services, and energy",
    href: "/what-we-do/services/industry-specific",
    category: "What We Do",
    keywords: ["industry", "defense", "healthcare", "financial", "energy", "sector"],
  },
  {
    title: "Past Performance",
    description:
      "Proven results across DoD, DoS, and federal programs with measurable impact",
    href: "/what-we-do/past-performance",
    category: "What We Do",
    keywords: ["past performance", "case studies", "results", "DoD", "federal"],
  },
  {
    title: "Capability Statements",
    description:
      "Download capability statements, NAICS codes, certifications, and contract vehicles",
    href: "/what-we-do/capability-statements",
    category: "What We Do",
    keywords: ["capability", "NAICS", "certifications", "contract vehicles", "download"],
  },
  {
    title: "Our Approach",
    description:
      "Discovery-Design-Build-Operate methodology driving innovation and mission success",
    href: "/what-we-do/our-approach",
    category: "What We Do",
    keywords: ["approach", "methodology", "discovery", "design", "build", "operate"],
  },

  // ── Who We Are ────────────────────────────────────────────────────────
  {
    title: "Who We Are",
    description:
      "Our mission, vision, values, and leadership team",
    href: "/who-we-are",
    category: "Who We Are",
    keywords: ["about", "mission", "vision", "values", "who we are"],
  },
  {
    title: "About CybitSolutions",
    description:
      "Our mission, vision, values, and commitment to delivering excellence in federal IT",
    href: "/who-we-are/about",
    category: "Who We Are",
    keywords: ["about", "mission", "vision", "values", "veteran-owned", "minority-owned"],
  },
  {
    title: "Leadership",
    description:
      "Meet the experienced leaders driving innovation and mission success",
    href: "/who-we-are/leadership",
    category: "Who We Are",
    keywords: ["leadership", "team", "executives", "management", "leaders"],
  },
  {
    title: "Company Profile",
    description:
      "Full company profile with capabilities, past performance, certifications, and leadership",
    href: "/who-we-are/company-profile",
    category: "Who We Are",
    keywords: ["company profile", "profile", "capabilities", "bid", "proposal", "overview", "NAICS", "certifications"],
  },
  {
    title: "Social Impact",
    description:
      "Our commitment to diversity, sustainability, veterans, and community engagement",
    href: "/who-we-are/social-impact",
    category: "Who We Are",
    keywords: ["social impact", "diversity", "sustainability", "veterans", "community", "CSR"],
  },

  // ── Who We Serve ──────────────────────────────────────────────────────
  {
    title: "Who We Serve",
    description:
      "Government, commercial, and strategic alliance partnerships",
    href: "/who-we-serve",
    category: "Who We Serve",
    keywords: ["serve", "clients", "customers", "government", "commercial"],
  },
  {
    title: "Government Solutions",
    description:
      "DoD, Department of State, Federal Civilian, and Intelligence Community programs",
    href: "/who-we-serve/government",
    category: "Who We Serve",
    keywords: ["government", "DoD", "DoS", "federal", "intelligence", "civilian"],
  },
  {
    title: "Commercial & Enterprise",
    description:
      "Enterprise-grade IT for financial services, healthcare, energy, and technology",
    href: "/who-we-serve/commercial",
    category: "Who We Serve",
    keywords: ["commercial", "enterprise", "financial", "healthcare", "energy", "private sector"],
  },
  {
    title: "Strategic Alliances & Certifications",
    description:
      "Technology partnerships, certifications, and contract vehicles",
    href: "/who-we-serve/alliances",
    category: "Who We Serve",
    keywords: ["alliances", "certifications", "partnerships", "contract vehicles", "SDVOSB"],
  },

  // ── Insights ──────────────────────────────────────────────────────────
  {
    title: "Insights",
    description:
      "News, resources, events, and thought leadership",
    href: "/insights",
    category: "Insights",
    keywords: ["insights", "news", "resources", "thought leadership"],
  },
  {
    title: "News & Insights",
    description:
      "Latest announcements, thought leadership, and company news",
    href: "/insights/news",
    category: "Insights",
    keywords: ["news", "announcements", "blog", "thought leadership", "press"],
  },
  {
    title: "Resource Library",
    description:
      "Whitepapers, case studies, infographics, and technical resources",
    href: "/insights/resources",
    category: "Insights",
    keywords: ["resources", "whitepapers", "case studies", "infographics", "library"],
  },
  {
    title: "Events & Webinars",
    description:
      "Upcoming conferences, webinars, and speaking engagements",
    href: "/insights/events",
    category: "Insights",
    keywords: ["events", "webinars", "conferences", "speaking", "calendar"],
  },

  // ── Careers ───────────────────────────────────────────────────────────
  {
    title: "Careers",
    description:
      "Join our team of mission-driven IT professionals",
    href: "/careers",
    category: "Careers",
    keywords: ["careers", "jobs", "hiring", "work", "employment"],
  },
  {
    title: "Open Positions",
    description:
      "Explore current job opportunities across cybersecurity, cloud, engineering, and more",
    href: "/careers/open-roles",
    category: "Careers",
    keywords: ["jobs", "open positions", "roles", "apply", "hiring", "opportunities"],
  },
  {
    title: "Culture & Benefits",
    description:
      "Our culture, benefits, professional development, and what makes CybitSolutions great",
    href: "/careers/culture",
    category: "Careers",
    keywords: ["culture", "benefits", "perks", "professional development", "workplace"],
  },
  {
    title: "Employee Testimonials",
    description:
      "Hear from our team about life at CybitSolutions",
    href: "/careers/testimonials",
    category: "Careers",
    keywords: ["testimonials", "reviews", "employees", "team", "stories"],
  },

  // ── Contact ───────────────────────────────────────────────────────────
  {
    title: "Contact Us",
    description:
      "Reach out for questions, RFP inquiries, or to schedule a consultation",
    href: "/contact",
    category: "Contact",
    keywords: ["contact", "RFP", "consultation", "inquiry", "email", "phone"],
  },
  {
    title: "Partner With Us",
    description:
      "Explore teaming, subcontracting, and technology partnership opportunities",
    href: "/contact/partner",
    category: "Contact",
    keywords: ["partner", "teaming", "subcontracting", "supplier", "alliance"],
  },
  {
    title: "Payment Portal",
    description:
      "Invoice information, payment methods, and accounting contacts",
    href: "/contact/payment",
    category: "Contact",
    keywords: ["payment", "invoice", "billing", "accounting", "portal"],
  },

  // ── Legal ─────────────────────────────────────────────────────────────
  {
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect your information",
    href: "/legal/privacy",
    category: "Legal",
    keywords: ["privacy", "policy", "data protection", "GDPR"],
  },
  {
    title: "Terms of Use",
    description:
      "Website terms of use and conditions",
    href: "/legal/terms",
    category: "Legal",
    keywords: ["terms", "conditions", "legal", "use"],
  },
  {
    title: "Accessibility Statement",
    description:
      "Our commitment to WCAG 2.2 AA accessibility standards",
    href: "/legal/accessibility",
    category: "Legal",
    keywords: ["accessibility", "WCAG", "ADA", "section 508"],
  },
  {
    title: "Cookie Policy",
    description:
      "How we use cookies and tracking technologies",
    href: "/legal/cookies",
    category: "Legal",
    keywords: ["cookies", "tracking", "policy"],
  },
];
