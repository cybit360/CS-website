// Partners, technology logos, and certification badges for CybitSolutions GovCon website

export interface Partner {
  name: string;
  logo: string;
  tier?: string;
  description?: string;
  url?: string;
}

export interface CertificationBadge {
  name: string;
  logo: string;
  description?: string;
}

export const technologyPartners: Partner[] = [
  {
    name: "Amazon Web Services (AWS)",
    logo: "/images/partners/aws.svg",
    tier: "Advanced Consulting Partner",
    description:
      "AWS GovCloud competency partner delivering FedRAMP-authorized cloud solutions for federal agencies.",
    url: "https://aws.amazon.com",
  },
  {
    name: "Microsoft",
    logo: "/images/partners/microsoft.svg",
    tier: "Gold Partner",
    description:
      "Microsoft Azure Government and M365 GCC High solutions partner for defense and civilian agencies.",
    url: "https://microsoft.com",
  },
  {
    name: "Google Cloud",
    logo: "/images/partners/google-cloud.svg",
    tier: "Partner",
    description:
      "Google Cloud Platform partner for data analytics, AI/ML, and FedRAMP-authorized cloud services.",
    url: "https://cloud.google.com",
  },
  {
    name: "ServiceNow",
    logo: "/images/partners/servicenow.svg",
    tier: "Premier Partner",
    description:
      "ServiceNow Elite partner for ITSM, ITOM, SecOps, and enterprise workflow automation in government.",
    url: "https://www.servicenow.com",
  },
  {
    name: "Splunk",
    logo: "/images/partners/splunk.svg",
    tier: "Premier Partner",
    description:
      "Splunk partner for enterprise security monitoring, observability, and AIOps across federal environments.",
    url: "https://www.splunk.com",
  },
  {
    name: "Cisco",
    logo: "/images/partners/cisco.svg",
    tier: "Gold Partner",
    description:
      "Cisco partner for enterprise networking, SD-WAN, security, and collaboration solutions for government.",
    url: "https://www.cisco.com",
  },
  {
    name: "HashiCorp",
    logo: "/images/partners/hashicorp.svg",
    tier: "Partner",
    description:
      "HashiCorp partner for infrastructure as code, secrets management, and zero-trust security with Terraform, Vault, and Consul.",
    url: "https://www.hashicorp.com",
  },
  {
    name: "CrowdStrike",
    logo: "/images/partners/crowdstrike.svg",
    tier: "Partner",
    description:
      "CrowdStrike partner for endpoint detection and response (EDR), threat intelligence, and managed detection services.",
    url: "https://www.crowdstrike.com",
  },
  {
    name: "Databricks",
    logo: "/images/partners/databricks.svg",
    tier: "Partner",
    description:
      "Databricks partner for unified data analytics, lakehouse architecture, and AI/ML workloads in government cloud environments.",
    url: "https://www.databricks.com",
  },
];

export const certificationBadges: CertificationBadge[] = [
  {
    name: "FedRAMP",
    logo: "/images/certifications/fedramp.svg",
    description:
      "Federal Risk and Authorization Management Program - standardized approach to security assessment for cloud products and services.",
  },
  {
    name: "ISO 27001",
    logo: "/images/certifications/iso-27001.svg",
    description:
      "International standard for information security management systems (ISMS), demonstrating systematic approach to managing sensitive information.",
  },
  {
    name: "SOC 2",
    logo: "/images/certifications/soc2.svg",
    description:
      "Service Organization Control 2 Type II certification, validating security, availability, processing integrity, confidentiality, and privacy controls.",
  },
  {
    name: "CMMC",
    logo: "/images/certifications/cmmc.svg",
    description:
      "Cybersecurity Maturity Model Certification - DoD framework for assessing and enhancing cybersecurity posture of defense industrial base contractors.",
  },
];
