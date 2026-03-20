// Navigation data for CybitSolutions GovCon website mega-menu

export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export interface UtilityLink {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      {
        label: "Services & Solutions",
        href: "/what-we-do/services",
        description:
          "Explore our 10 mission-critical IT domains spanning cybersecurity, cloud, AI, and more.",
      },
      {
        label: "Past Performance",
        href: "/what-we-do/past-performance",
        description:
          "Proven results across DoD, DoS, and government programs with measurable mission impact.",
      },
      {
        label: "Capability Statements",
        href: "/what-we-do/capability-statements",
        description:
          "Download our capability statements, NAICS codes, certifications, and contract vehicles.",
      },
      {
        label: "Our Approach",
        href: "/what-we-do/our-approach",
        description:
          "Discovery-Design-Build-Operate methodology driving innovation and mission success.",
      },
    ],
  },
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      {
        label: "About CybitSolutions",
        href: "/who-we-are/about",
        description:
          "Our mission, vision, values, and commitment to delivering excellence in government and commercial IT.",
      },
      {
        label: "Leadership",
        href: "/who-we-are/leadership",
        description:
          "Meet the experienced leaders driving innovation and mission success.",
      },
      {
        label: "Company Profile",
        href: "/who-we-are/company-profile",
        description:
          "Full company profile with capabilities, past performance, certifications, and leadership.",
      },
      {
        label: "Social Impact",
        href: "/who-we-are/social-impact",
        description:
          "Our commitment to diversity, sustainability, veterans, and community engagement.",
      },
    ],
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    children: [
      {
        label: "Government Solutions",
        href: "/who-we-serve/government",
        description:
          "DoD, Department of State, Federal Civilian, and Intelligence Community programs.",
      },
      {
        label: "Commercial & Enterprise",
        href: "/who-we-serve/commercial",
        description:
          "Enterprise-grade IT for financial services, healthcare, energy, and technology sectors.",
      },
      {
        label: "Strategic Alliances & Certifications",
        href: "/who-we-serve/alliances",
        description:
          "Technology partnerships, certifications, and contract vehicles.",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      {
        label: "News & Insights",
        href: "/insights/news",
        description:
          "Latest announcements, thought leadership, and company news.",
      },
      {
        label: "Resource Library",
        href: "/insights/resources",
        description:
          "Whitepapers, case studies, infographics, and technical resources.",
      },
      {
        label: "Events & Webinars",
        href: "/insights/events",
        description:
          "Upcoming conferences, webinars, and speaking engagements.",
      },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      {
        label: "Open Positions",
        href: "/careers/open-roles",
        description:
          "Explore current job opportunities across cybersecurity, cloud, engineering, and more.",
      },
      {
        label: "Culture & Benefits",
        href: "/careers/culture",
        description:
          "Our culture, benefits, professional development, and what makes CybitSolutions a great place to work.",
      },
      {
        label: "Employee Testimonials",
        href: "/careers/testimonials",
        description:
          "Hear from our team about life at CybitSolutions.",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      {
        label: "Contact Us",
        href: "/contact",
        description:
          "Reach out for questions, RFP inquiries, or to schedule a consultation.",
      },
      {
        label: "Partner With Us",
        href: "/contact/partner",
        description:
          "Explore teaming, subcontracting, and technology partnership opportunities.",
      },
      {
        label: "Payment Portal",
        href: "/contact/payment",
        description:
          "Invoice information, payment methods, and accounting contacts.",
      },
    ],
  },
];

export const utilityLinks: UtilityLink[] = [
  { label: "Contract Vehicles", href: "/what-we-do/capability-statements" },
  { label: "Suppliers", href: "/contact/partner" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Privacy", href: "/legal/privacy" },
];
