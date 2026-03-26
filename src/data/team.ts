// Leadership team data for CybitSolutions — Technology and Digital Transformation Division of AFANO Group

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  image: string;
  linkedin?: string;
}

export const leadershipTeam: TeamMember[] = [
  {
    slug: "adupedee-ababio",
    name: 'Adupedee "Prof" Ababio',
    title: "Chief Architect / Information Security Officer (CISO)",
    bio: "Adupedee Ababio leads CybitSolutions' technical architecture and information security strategy as Chief Architect and CISO. With extensive experience in enterprise security architecture, zero-trust frameworks, and compliance-driven IT modernization, he oversees the design and security posture of mission-critical systems across federal and commercial engagements. Under his leadership, CybitSolutions delivers secure, scalable solutions that meet the most rigorous government standards.",
    credentials: [
      "Enterprise Security Architecture",
      "Zero-Trust & NIST Compliance",
      "Federal IT Modernization",
      "Risk Management Framework (RMF)",
    ],
    image: "/images/team/adupedee-ababio.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "christian-achemdey",
    name: 'Christian "Chris" Achemdey',
    title: "Division VP of Technology",
    bio: "Christian Achemdey drives CybitSolutions' technology strategy, R&D initiatives, and technical delivery across all service domains. With deep expertise in cloud architecture, DevSecOps, and AI/ML solutions for government environments, he ensures that the division stays at the forefront of emerging technologies while delivering reliable, mission-grade solutions to federal and commercial clients.",
    credentials: [
      "Cloud Architecture & DevSecOps",
      "AI/ML for Government",
      "Enterprise Technology Strategy",
      "Agile Delivery Leadership",
    ],
    image: "/images/team/christian-achemdey.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "adaobi-ikpeze",
    name: "Adaobi Ikpeze",
    title: "Division VP of Operations and Human Resources",
    bio: "Adaobi Ikpeze oversees CybitSolutions' operational excellence, program delivery, and human capital strategy. She ensures that every engagement meets the highest standards of quality, compliance, and customer satisfaction while building and retaining a world-class workforce of cleared professionals across the division's federal and commercial programs.",
    credentials: [
      "Program Management & Delivery",
      "Human Capital Strategy",
      "Operational Excellence",
      "Federal Compliance & Quality",
    ],
    image: "/images/team/adaobi-ikpeze.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "stanley-opara",
    name: "Stanley Opara",
    title: "Division VP of Cybersecurity",
    bio: "Stanley Opara leads CybitSolutions' cybersecurity practice, bringing extensive experience in government and commercial cybersecurity operations, risk management, and compliance. He has led SOC modernization, zero-trust implementation, and RMF authorization programs for DoD, Intelligence Community, and civilian agencies, ensuring robust security postures across all division engagements.",
    credentials: [
      "SOC/MDR Operations",
      "Zero-Trust Architecture",
      "RMF Authorization & Compliance",
      "Threat Intelligence & Incident Response",
    ],
    image: "/images/team/stanley-opara.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "stanley-gorman",
    name: "Stanley Gorman",
    title: "Division VP of Cloud & Infrastructure",
    bio: "Stanley Gorman leads CybitSolutions' cloud computing and infrastructure practice, overseeing cloud migration, hybrid architecture, and managed infrastructure services for government and commercial clients. He has led large-scale government cloud migration programs, including FedRAMP High and DoD IL5 environment builds, delivering secure and scalable infrastructure across multi-cloud environments.",
    credentials: [
      "Multi-Cloud Architecture (AWS, Azure, GCP)",
      "FedRAMP & IL4/IL5 Environments",
      "Cloud Migration & FinOps",
      "Kubernetes & Infrastructure Automation",
    ],
    image: "/images/team/stanley-gorman.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "alpha-taylor",
    name: "Alpha Taylor",
    title: "Division VP of Government Programs",
    bio: "Alpha Taylor leads CybitSolutions' government program management and business development operations, ensuring successful delivery across all agency customer accounts. With deep experience in government contracting and program management, she has managed portfolios across DoD, Department of State, and civilian agencies, and is a recognized expert in government acquisition and strategic capture.",
    credentials: [
      "Government Acquisition & Capture",
      "Federal Program Management",
      "GWAC/BPA Management",
      "Strategic Business Development",
    ],
    image: "/images/team/alpha-taylor.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

/** Helper to find a team member by slug */
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return leadershipTeam.find((member) => member.slug === slug);
}
