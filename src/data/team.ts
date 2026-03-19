// Leadership team data for CybitSolutions GovCon website

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
    slug: "james-carter",
    name: "James Carter",
    title: "Chief Executive Officer (CEO)",
    bio: "James Carter brings over 25 years of experience leading technology and government consulting organizations. Before founding Cybit Solutions, he served in senior leadership roles at multiple federal IT firms, where he drove growth strategies and built high-performing teams delivering mission-critical solutions to the Department of Defense and Intelligence Community. James is a veteran of the U.S. Army, where he served as a Signal Corps officer, and holds an MBA from Georgetown University and a B.S. in Computer Science from Virginia Tech.",
    credentials: [
      "MBA, Georgetown University",
      "B.S. Computer Science, Virginia Tech",
      "U.S. Army Veteran (Signal Corps)",
      "PMP Certified",
      "Secret Clearance",
    ],
    image: "/images/team/james-carter.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "sarah-nguyen",
    name: "Dr. Sarah Nguyen",
    title: "Chief Technology Officer (CTO)",
    bio: "Dr. Sarah Nguyen is a technologist and innovator with 20+ years of experience architecting enterprise solutions for federal agencies. She leads Cybit's technology strategy, R&D initiatives, and technical delivery across all service domains. Prior to joining Cybit, Sarah served as a principal engineer at a leading defense technology firm and held research positions at MIT Lincoln Laboratory. She holds a Ph.D. in Computer Engineering from Carnegie Mellon University and is a recognized thought leader in zero-trust architecture and AI/ML for government.",
    credentials: [
      "Ph.D. Computer Engineering, Carnegie Mellon University",
      "M.S. Computer Science, Stanford University",
      "AWS Solutions Architect Professional",
      "CISSP",
      "Top Secret/SCI Clearance",
    ],
    image: "/images/team/sarah-nguyen.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "michael-ross",
    name: "Michael Ross",
    title: "Chief Operating Officer (COO)",
    bio: "Michael Ross oversees Cybit's operational excellence, program delivery, and corporate functions. With 22 years of experience in federal IT operations and program management, he ensures that every engagement meets the highest standards of quality, compliance, and customer satisfaction. Michael previously served as VP of Operations at a major federal systems integrator and spent 10 years in the U.S. Navy as an Information Warfare officer. He holds an M.S. in Systems Engineering from Johns Hopkins University.",
    credentials: [
      "M.S. Systems Engineering, Johns Hopkins University",
      "B.S. Information Technology, U.S. Naval Academy",
      "U.S. Navy Veteran (Information Warfare)",
      "PMP Certified",
      "ITIL 4 Managing Professional",
      "Top Secret Clearance",
    ],
    image: "/images/team/michael-ross.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "alicia-martinez",
    name: "Alicia Martinez",
    title: "Vice President of Cybersecurity",
    bio: "Alicia Martinez leads Cybit's cybersecurity practice, bringing 18 years of experience in federal cybersecurity operations, risk management, and compliance. She has led SOC modernization, zero-trust implementation, and RMF authorization programs for DoD, Intelligence Community, and civilian agencies. Before joining Cybit, Alicia served as a cybersecurity division chief at a federal agency and held senior roles at multiple defense contractors. She is a frequent speaker at RSA Conference, AFCEA, and other industry events.",
    credentials: [
      "M.S. Cybersecurity, George Washington University",
      "CISSP",
      "CISM",
      "CCSP",
      "CEH",
      "GIAC Security Leadership (GSLC)",
      "Top Secret/SCI Clearance",
    ],
    image: "/images/team/alicia-martinez.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "david-kim",
    name: "David Kim",
    title: "Vice President of Cloud & Infrastructure",
    bio: "David Kim leads Cybit's cloud computing and infrastructure practice, overseeing cloud migration, hybrid architecture, and managed infrastructure services for federal clients. With 16 years of experience in cloud engineering and data center operations, David has led some of the largest federal cloud migration programs, including FedRAMP High and DoD IL5 environment builds. He is a multi-cloud certified architect with deep expertise across AWS, Azure, and Google Cloud government offerings.",
    credentials: [
      "M.S. Cloud Computing, University of Maryland",
      "AWS Solutions Architect Professional",
      "Azure Solutions Architect Expert",
      "Google Cloud Professional Architect",
      "Kubernetes Administrator (CKA)",
      "HashiCorp Terraform Associate",
      "Secret Clearance",
    ],
    image: "/images/team/david-kim.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    slug: "patricia-oconnell",
    name: "Patricia O'Connell",
    title: "Vice President of Federal Programs",
    bio: "Patricia O'Connell leads Cybit's federal program management and business development operations, ensuring successful delivery across all agency customer accounts. With 20 years of experience in federal contracting and program management, she has managed portfolios exceeding $500M across DoD, Department of State, and civilian agencies. Patricia is a recognized expert in federal acquisition, GWAC/BPA management, and strategic capture. She previously served as a contracting officer with the General Services Administration (GSA).",
    credentials: [
      "M.S. Government Contracts, George Washington University",
      "PMP Certified",
      "DAWIA Level III (Contracting)",
      "SAFe Program Consultant (SPC)",
      "Former GSA Contracting Officer",
      "Secret Clearance",
    ],
    image: "/images/team/patricia-oconnell.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

/** Helper to find a team member by slug */
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return leadershipTeam.find((member) => member.slug === slug);
}
