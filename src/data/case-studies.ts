// Case studies data for CybitSolutions GovCon website

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  mission: string;
  challenge: string[];
  solution: string[];
  results: string[];
  compliance: string;
  technologies: string;
}

export interface SummaryCaseStudy {
  title: string;
  category: string;
  description: string;
  quote: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "dod-c3bm-abms",
    title: "DoD C3BM / ABMS: Joint All-Domain Command & Control",
    client: "U.S. Air Force & U.S. Space Force",
    mission:
      "Support the Advanced Battle Management System (ABMS) and Command, Control, Communications, and Battle Management (C3BM) programs to enable Joint All-Domain Command and Control (JADC2) across air, space, cyber, land, and sea domains.",
    challenge: [
      "Legacy C2 systems operated in domain-specific silos, preventing cross-domain information sharing and joint decision-making.",
      "Existing infrastructure could not handle the volume, velocity, and variety of sensor data required for real-time battle management.",
      "Integrating disparate data sources across classification levels and coalition partners posed significant interoperability challenges.",
      "The program required rapid prototyping and iteration using DevSecOps practices unfamiliar to many legacy defense contractors.",
      "Stringent cybersecurity requirements at IL5/IL6 demanded zero-trust architectures while maintaining millisecond-level latency.",
    ],
    solution: [
      "Designed and deployed a cloud-native, microservices-based C2 platform on AWS GovCloud and Azure Government at IL5.",
      "Implemented real-time data fusion pipelines using Apache Kafka and Kubernetes to ingest and correlate sensor data across domains.",
      "Built ML-powered decision-support tools that provide commanders with AI-enhanced situational awareness and course-of-action recommendations.",
      "Established a DevSecOps pipeline with automated security scanning, continuous integration, and continuous delivery to enable rapid iteration.",
      "Deployed zero-trust network architecture with identity-based access controls and continuous monitoring across all classification levels.",
      "Created cross-domain solutions enabling secure data sharing between classification levels and coalition partner networks.",
    ],
    results: [
      "Reduced sensor-to-shooter timeline by 60% through automated data fusion and AI-assisted targeting.",
      "Achieved full DevSecOps maturity, delivering new capabilities in 2-week sprint cycles versus 18-month waterfall releases.",
      "Integrated 12 previously siloed data sources into a unified common operating picture.",
      "Maintained 99.99% uptime across all operational environments including contested and degraded conditions.",
      "Successfully demonstrated cross-domain data sharing in 3 joint exercises with coalition partners.",
      "Received DoD CIO commendation for cybersecurity excellence and zero-trust implementation.",
    ],
    compliance:
      "DoD IL5/IL6, NIST SP 800-53 Rev 5, CNSSI 1253, DoD Zero Trust Reference Architecture, DoD DevSecOps Reference Design, JSIG/RMF",
    technologies:
      "AWS GovCloud, Azure Government, Kubernetes, Apache Kafka, Terraform, GitLab CI/CD, Istio Service Mesh, Elasticsearch, TensorFlow, Python, React",
  },
  {
    slug: "dos-cakmi",
    title: "DoS CAKMI: Consular Affairs Key Management Infrastructure",
    client: "U.S. Department of State, Bureau of Consular Affairs",
    mission:
      "Design, implement, and operate the Consular Affairs Key Management Infrastructure (CAKMI) that secures the cryptographic foundations of passport issuance, visa processing, and consular services for U.S. citizens and foreign nationals worldwide.",
    challenge: [
      "The existing PKI infrastructure supporting consular operations was aging, lacked automation, and could not scale to meet increasing global demand.",
      "Cryptographic key management processes were largely manual, creating security risks and operational bottlenecks across 230+ posts worldwide.",
      "The system needed to support multiple credential types (passports, visas, consular reports) with different cryptographic requirements and lifecycles.",
      "Global distribution required 24/7/365 availability with sub-second response times across high-latency, low-bandwidth connections.",
      "Compliance with federal cryptographic standards (FIPS 140-2 Level 3) while planning for post-quantum cryptography migration.",
    ],
    solution: [
      "Architected a globally distributed, high-availability PKI platform with HSM-backed key management across primary and disaster recovery sites.",
      "Automated certificate lifecycle management including provisioning, renewal, revocation, and archival for all consular credential types.",
      "Implemented a zero-trust key management architecture with role-based access controls, multi-person integrity, and comprehensive audit logging.",
      "Deployed edge-optimized cryptographic services to maintain performance at posts with limited connectivity.",
      "Built a cryptographic agility framework to enable future migration to post-quantum algorithms without system redesign.",
      "Created a centralized management console providing real-time visibility into cryptographic operations across all global sites.",
    ],
    results: [
      "Reduced key provisioning time from 48 hours to under 5 minutes through automation.",
      "Achieved FIPS 140-2 Level 3 certification for all cryptographic modules across the global infrastructure.",
      "Processed over 15 million cryptographic operations daily with 99.999% availability.",
      "Eliminated 3 critical audit findings related to manual key management processes.",
      "Reduced operational costs by 40% through automation and consolidation of legacy systems.",
      "Successfully completed post-quantum cryptography readiness assessment ahead of NIST deadlines.",
    ],
    compliance:
      "FIPS 140-2 Level 3, NIST SP 800-57, NIST SP 800-53, HSPD-12, ICAO 9303 (Machine Readable Travel Documents), WebPKI Standards, Federal PKI Policy",
    technologies:
      "Thales Luna HSMs, Microsoft Active Directory Certificate Services, EJBCA, Venafi Trust Protection Platform, Entrust PKI, Java, PowerShell, Splunk, ServiceNow",
  },
  {
    slug: "dos-ngem",
    title: "DoS NGEM: Next-Generation Enterprise Monitoring",
    client: "U.S. Department of State, Bureau of Information Resource Management (IRM)",
    mission:
      "Architect and deploy the Next-Generation Enterprise Monitoring (NGEM) platform to provide comprehensive observability across the Department of State's global IT infrastructure spanning 270+ diplomatic posts, data centers, and cloud environments.",
    challenge: [
      "The existing monitoring infrastructure consisted of 15+ disparate tools with no unified visibility, creating blind spots and delayed incident response.",
      "Global IT operations spanning 270+ posts across 180 countries required monitoring across extreme network conditions and time zones.",
      "Increasing cloud adoption (AWS, Azure, O365) demanded monitoring capabilities that extended beyond traditional on-premises infrastructure.",
      "Alert fatigue from uncorrelated, redundant notifications resulted in critical events being missed or delayed.",
      "The platform needed to support both unclassified and classified monitoring requirements with appropriate data separation.",
    ],
    solution: [
      "Deployed a unified observability platform built on Splunk Enterprise and Splunk ITSI for infrastructure, application, and security monitoring.",
      "Implemented AIOps-powered event correlation and anomaly detection to reduce alert noise and surface genuine incidents.",
      "Built custom monitoring integrations for State Department-specific applications and legacy systems not supported by commercial connectors.",
      "Designed a tiered monitoring architecture with edge collectors at posts, regional aggregators, and centralized analytics in Washington DC.",
      "Created executive dashboards and operational views providing real-time visibility from global overview to individual endpoint detail.",
      "Implemented automated remediation playbooks for common infrastructure issues, reducing mean time to resolve.",
    ],
    results: [
      "Consolidated 15+ monitoring tools into a single unified platform, reducing tool sprawl and licensing costs by 55%.",
      "Reduced mean time to detect (MTTD) from 45 minutes to under 3 minutes through AIOps-powered correlation.",
      "Decreased mean time to resolve (MTTR) by 65% through automated remediation and streamlined workflows.",
      "Achieved 98% reduction in false-positive alerts through ML-based anomaly detection and intelligent thresholding.",
      "Provided monitoring coverage for 50,000+ endpoints, 3,000+ applications, and hybrid cloud infrastructure.",
      "Enabled proactive capacity planning, preventing 200+ potential outages through predictive analytics.",
    ],
    compliance:
      "NIST SP 800-53, NIST SP 800-137 (ISCM), CDM Program Requirements, FISMA, FedRAMP (for cloud monitoring), ITIL 4 Event Management",
    technologies:
      "Splunk Enterprise, Splunk ITSI, Splunk SOAR, AppDynamics, Thousand Eyes, SolarWinds, Ansible, Python, REST APIs, Grafana, Prometheus, PagerDuty",
  },
  {
    slug: "dos-sparta-psim",
    title: "DoS SPARTA PSIM: Physical Security Information Management",
    client: "U.S. Department of State, Bureau of Diplomatic Security (DS)",
    mission:
      "Implement the Security Platform for Assessment, Response, and Threat Analysis (SPARTA) Physical Security Information Management (PSIM) system to unify and enhance physical security operations across Department of State facilities worldwide.",
    challenge: [
      "Physical security systems (CCTV, access control, intrusion detection, fire alarm) operated independently with no integrated common operating picture.",
      "Security operators at the Diplomatic Security Command Center (DSCC) had to monitor multiple screens and systems, leading to delayed response times.",
      "Facility security systems varied by post, manufacturer, and age, creating integration complexity across 270+ diplomatic facilities.",
      "The system needed to correlate physical security events with cyber threat intelligence for comprehensive situational awareness.",
      "Strict requirements for operating across multiple classification levels while maintaining real-time performance.",
    ],
    solution: [
      "Deployed a PSIM platform that integrates video surveillance, access control, intrusion detection, and fire alarm systems into a single operator interface.",
      "Implemented AI-powered video analytics for automated threat detection including perimeter breach, loitering, and abandoned object recognition.",
      "Built correlation engines that fuse physical security events with cyber threat feeds and geopolitical intelligence for contextual awareness.",
      "Designed standardized integration adapters to connect 50+ different security system types and manufacturers.",
      "Created automated response procedures (standard operating procedures / SOPs) that guide operators through incident response workflows.",
      "Deployed mobile command capabilities enabling security personnel to receive alerts and manage incidents from field locations.",
    ],
    results: [
      "Reduced average incident response time from 12 minutes to under 90 seconds through automated detection and guided response.",
      "Integrated 10,000+ physical security sensors and devices across 150+ facilities into a unified platform.",
      "Achieved 94% accuracy in AI-powered threat detection with less than 2% false positive rate.",
      "Decreased security staffing requirements by 25% through automation while improving coverage.",
      "Correlated 500+ daily security events across physical and cyber domains for comprehensive threat awareness.",
      "Received Diplomatic Security Service Award of Excellence for innovation in protective security.",
    ],
    compliance:
      "ICD 705 (SCIFs), DoS OSPB Physical Security Standards, UL 2050, NIST SP 800-53 (Physical and Environmental Protection family), Interagency Security Committee (ISC) Standards, HSPD-12",
    technologies:
      "Genetec Security Center, Lenel OnGuard, Milestone XProtect, Axis Communications, BriefCam, IBM i2 Analyst Notebook, Esri ArcGIS, Kafka, Elasticsearch, React, Node.js",
  },
  {
    slug: "dod-rapids-deers",
    title: "DoD RAPIDS/DEERS: Military ID & Benefits Modernization",
    client: "Defense Manpower Data Center (DMDC), U.S. Department of Defense",
    mission:
      "Modernize the Real-Time Automated Personnel Identification System (RAPIDS) and Defense Enrollment Eligibility Reporting System (DEERS) that serve as the authoritative identity and benefits eligibility systems for 30+ million DoD-affiliated personnel worldwide.",
    challenge: [
      "RAPIDS/DEERS legacy mainframe systems were over 30 years old, running on aging COBOL codebases with critical knowledge concentrated in a shrinking pool of subject matter experts.",
      "The systems processed 50,000+ daily transactions for ID card issuance, benefits verification, and eligibility determination with zero tolerance for downtime.",
      "Modernization had to occur incrementally without disrupting services to 30+ million active duty, reserve, retiree, and dependent beneficiaries.",
      "Complex integration requirements with 200+ downstream systems including TRICARE, commissary, exchange, MWR, and base access systems.",
      "Strict PKI and identity verification requirements for Common Access Card (CAC) and military ID issuance.",
    ],
    solution: [
      "Designed and executed a phased legacy modernization strategy, replacing COBOL mainframe modules with cloud-native microservices on AWS GovCloud.",
      "Implemented API-first architecture enabling self-service capabilities and modern integration with downstream systems.",
      "Built a real-time eligibility engine that replaced batch processing, enabling instant benefits verification across all service branches.",
      "Deployed biometric enrollment and identity verification capabilities including fingerprint, facial recognition, and iris scanning.",
      "Created a modern web-based operator interface replacing green-screen terminals at 1,600+ RAPIDS sites worldwide.",
      "Implemented comprehensive data migration with zero data loss from legacy mainframe to modern database platforms.",
    ],
    results: [
      "Reduced ID card issuance time from 30 minutes to under 8 minutes per transaction.",
      "Migrated 95% of legacy COBOL functions to cloud-native microservices while maintaining continuous operations.",
      "Decreased system operating costs by 45% through mainframe reduction and cloud optimization.",
      "Improved system availability from 99.5% to 99.99% through cloud-native resilience and redundancy.",
      "Enabled self-service capabilities reducing in-person visits by 35% for routine transactions.",
      "Successfully processed 18+ million annual ID card transactions with zero security incidents.",
    ],
    compliance:
      "FIPS 201-3 (PIV), HSPD-12, NIST SP 800-73 (PIV Interfaces), NIST SP 800-76 (Biometrics), DoD PKI, DoD IL4/IL5, NIST SP 800-53, FISMA",
    technologies:
      "AWS GovCloud, Java/Spring Boot, PostgreSQL, MongoDB, Apache Kafka, React, Kubernetes, Terraform, Jenkins, HID Global (card printers), Crossmatch (biometrics), OpenAM/ForgeRock",
  },
];

export const summaryCaseStudies: SummaryCaseStudy[] = [
  {
    title: "Zero Trust Network Architecture for Intelligence Agency",
    category: "Cybersecurity & Risk Management",
    description:
      "Implemented a comprehensive zero-trust architecture for a major intelligence community agency, replacing legacy perimeter-based security with identity-centric micro-segmentation across 50,000+ endpoints.",
    quote: "CybitSolutions' zero-trust implementation fundamentally transformed our security posture while improving user experience.",
    result: "78% reduction in lateral movement risk; achieved full CISA ZTA maturity Level 3.",
  },
  {
    title: "SOC Modernization for Federal Civilian Agency",
    category: "Cybersecurity & Risk Management",
    description:
      "Transformed a legacy security operations center into a modern, AI-augmented SOC with SOAR automation, reducing analyst workload and improving threat detection across cloud and on-premises environments.",
    quote: "Our analysts now focus on real threats instead of chasing false positives.",
    result: "92% reduction in false positives; MTTD decreased from 4 hours to 12 minutes.",
  },
  {
    title: "CMMC Level 2 Readiness for Defense Industrial Base",
    category: "Cybersecurity & Risk Management",
    description:
      "Guided a mid-size defense contractor through CMMC Level 2 assessment preparation, implementing 110 NIST SP 800-171 controls and establishing a continuous monitoring program.",
    quote: "CybitSolutions made CMMC compliance achievable and sustainable for our organization.",
    result: "Achieved CMMC Level 2 certification on first assessment attempt with zero findings.",
  },
  {
    title: "Multi-Cloud Migration for Federal Health Agency",
    category: "Cloud Computing & Virtualization",
    description:
      "Migrated 200+ applications from on-premises data centers to a hybrid AWS/Azure environment, implementing FinOps practices and achieving FedRAMP High authorization.",
    quote: "The migration was seamless, and our cloud costs are 30% lower than projected.",
    result: "40% reduction in infrastructure costs; 99.99% availability post-migration.",
  },
  {
    title: "IL5 Cloud Environment for DoD Program Office",
    category: "Cloud Computing & Virtualization",
    description:
      "Built a DoD IL5 cloud environment on AWS GovCloud for a major weapons system program office, enabling secure collaboration and data analytics across multiple classification levels.",
    quote: "CybitSolutions delivered our IL5 environment in half the time we expected.",
    result: "Deployed in 90 days versus 180-day estimate; supports 5,000+ daily users.",
  },
  {
    title: "SD-WAN Deployment for Global Diplomatic Network",
    category: "Core IT Infrastructure, Networking & Operations",
    description:
      "Designed and deployed SD-WAN across 150+ diplomatic posts worldwide, replacing legacy MPLS circuits with software-defined networking for improved performance and resilience.",
    quote: "Application performance at our overseas posts has improved dramatically.",
    result: "65% improvement in application performance; 50% reduction in WAN circuit costs.",
  },
  {
    title: "Data Center Consolidation for Civilian Agency",
    category: "Core IT Infrastructure, Networking & Operations",
    description:
      "Consolidated 8 aging data centers into 2 modern, energy-efficient facilities with full redundancy, supporting the agency's DCOI mandate and sustainability goals.",
    quote: "The consolidation exceeded our expectations for both cost savings and reliability.",
    result: "60% reduction in data center footprint; PUE improved from 2.1 to 1.3.",
  },
  {
    title: "Enterprise Help Desk Transformation",
    category: "Core IT Infrastructure, Networking & Operations",
    description:
      "Modernized a federal agency's Tier 1/2 help desk with AI-powered chatbots, automated ticket routing, and self-service portals, significantly improving end-user satisfaction.",
    quote: "Self-service resolution has transformed how our employees interact with IT support.",
    result: "45% of tickets resolved via self-service; CSAT improved from 3.2 to 4.6 out of 5.",
  },
  {
    title: "DevSecOps Platform for Army Software Factory",
    category: "Software Development & DevOps",
    description:
      "Built a comprehensive DevSecOps platform supporting 20+ development teams, integrating security scanning, automated testing, and continuous delivery to classified environments.",
    quote: "Our deployment frequency went from monthly to daily without compromising security.",
    result: "30x increase in deployment frequency; 85% reduction in security vulnerabilities in production.",
  },
  {
    title: "Legacy Modernization: COBOL to Cloud-Native",
    category: "Software Development & DevOps",
    description:
      "Migrated a 2-million-line COBOL application to cloud-native microservices on Kubernetes, preserving business logic while enabling modern development practices and scalability.",
    quote: "CybitSolutions proved that even our most complex legacy systems can be modernized.",
    result: "70% reduction in maintenance costs; new feature delivery time reduced from months to days.",
  },
  {
    title: "Mobile App for Field Operations",
    category: "Software Development & DevOps",
    description:
      "Developed a cross-platform mobile application for federal field inspectors, enabling offline-capable data collection, GPS tracking, and real-time reporting from remote locations.",
    quote: "Our inspectors can now complete reports in the field instead of back at the office.",
    result: "50% reduction in report processing time; 99.5% data sync success rate in low-connectivity areas.",
  },
  {
    title: "Enterprise Data Lake for Federal Analytics",
    category: "Data & Analytics",
    description:
      "Built an enterprise data lake on AWS integrating 40+ data sources for a federal civilian agency, enabling self-service analytics and reducing time-to-insight for policy decisions.",
    quote: "For the first time, our analysts can answer complex policy questions in hours instead of weeks.",
    result: "90% reduction in data preparation time; 300+ self-service reports created by business users.",
  },
  {
    title: "Real-Time Fraud Detection Analytics Platform",
    category: "Data & Analytics",
    description:
      "Implemented a real-time streaming analytics platform for a federal financial agency to detect and prevent fraudulent transactions using pattern analysis and anomaly detection.",
    quote: "The platform catches fraud patterns our manual processes never could.",
    result: "$150M+ in prevented fraudulent transactions in first year; 95% detection accuracy.",
  },
  {
    title: "Geospatial Intelligence Dashboard",
    category: "Data & Analytics",
    description:
      "Developed a geospatial intelligence platform combining satellite imagery, open-source data, and classified intelligence feeds for a defense intelligence agency.",
    quote: "The geospatial dashboard has become our primary tool for regional threat assessment.",
    result: "Integrated 25+ data feeds; reduced analysis cycle from 72 hours to 4 hours.",
  },
  {
    title: "AI-Powered Document Processing for Immigration",
    category: "Artificial Intelligence & Automation",
    description:
      "Deployed intelligent document processing using NLP and computer vision to automate classification, extraction, and routing of 10,000+ daily immigration documents.",
    quote: "AI has transformed our document processing from a bottleneck into a competitive advantage.",
    result: "85% of documents processed without human intervention; processing time reduced by 70%.",
  },
  {
    title: "Predictive Maintenance for Military Fleet",
    category: "Artificial Intelligence & Automation",
    description:
      "Built ML models for predictive maintenance of military vehicle fleets, analyzing sensor data, maintenance records, and operational tempo to forecast component failures.",
    quote: "We're now fixing problems before they happen instead of after they cause mission impact.",
    result: "40% reduction in unplanned maintenance; 25% improvement in vehicle availability rates.",
  },
  {
    title: "RPA Program for Federal Financial Management",
    category: "Artificial Intelligence & Automation",
    description:
      "Established an enterprise RPA Center of Excellence and deployed 50+ bots automating financial reconciliation, reporting, and compliance processes across a federal CFO office.",
    quote: "RPA freed our finance team to focus on analysis instead of data entry.",
    result: "200,000+ hours of manual work automated annually; $12M in annual cost savings.",
  },
  {
    title: "ServiceNow ITSM Transformation",
    category: "Enterprise IT Services & Platforms",
    description:
      "Implemented ServiceNow ITSM, ITOM, and SecOps modules for a large federal agency, consolidating 6 legacy ticketing systems and enabling enterprise-wide service management.",
    quote: "ServiceNow has given us visibility into our IT operations that we never had before.",
    result: "70% improvement in incident resolution time; single platform serving 80,000+ users.",
  },
  {
    title: "Microsoft 365 GCC High Migration",
    category: "Enterprise IT Services & Platforms",
    description:
      "Migrated 25,000 users from legacy on-premises Exchange and SharePoint to Microsoft 365 GCC High, enabling modern collaboration while meeting DoD security requirements.",
    quote: "The migration was the smoothest enterprise IT change our organization has experienced.",
    result: "Zero downtime during migration; 40% improvement in collaboration tool adoption.",
  },
  {
    title: "ERP Modernization for Defense Finance",
    category: "Enterprise IT Services & Platforms",
    description:
      "Modernized a defense agency's ERP system, migrating from a customized legacy platform to SAP S/4HANA Government, improving financial management and audit readiness.",
    quote: "Our financial close process went from 30 days to 5 days after the ERP modernization.",
    result: "Achieved clean audit opinion for first time in agency history; 80% faster financial reporting.",
  },
  {
    title: "Citizen Portal Modernization",
    category: "Digital Transformation & Government IT",
    description:
      "Redesigned a citizen-facing federal portal using human-centered design principles, implementing a responsive, accessible interface that reduced call center volume and improved citizen satisfaction.",
    quote: "Citizens can now complete in 10 minutes online what used to require a 2-hour office visit.",
    result: "60% reduction in call center volume; citizen satisfaction scores improved from 45% to 89%.",
  },
  {
    title: "IT Modernization Roadmap for Cabinet Agency",
    category: "Digital Transformation & Government IT",
    description:
      "Developed a comprehensive 5-year IT modernization roadmap for a cabinet-level agency, including application rationalization, cloud strategy, and workforce transformation planning.",
    quote: "CybitSolutions' roadmap gave us a clear, actionable path from legacy to modern.",
    result: "Identified $200M in modernization savings; rationalized portfolio from 400 to 180 applications.",
  },
  {
    title: "TBM Implementation for Federal CIO",
    category: "Digital Transformation & Government IT",
    description:
      "Implemented Technology Business Management (TBM) framework for a federal CIO office, enabling IT cost transparency, benchmarking, and data-driven investment decisions.",
    quote: "For the first time, we can show exactly where every IT dollar goes and what value it delivers.",
    result: "100% IT spend visibility achieved; identified 15% in optimization opportunities.",
  },
  {
    title: "IoT Sensor Network for Facility Management",
    category: "Emerging & Next-Gen Technologies",
    description:
      "Deployed an IoT sensor network across 50+ federal buildings for environmental monitoring, energy optimization, and predictive maintenance of HVAC and critical infrastructure.",
    quote: "The IoT platform pays for itself through energy savings alone.",
    result: "25% reduction in energy costs; 30% decrease in emergency maintenance calls.",
  },
  {
    title: "Post-Quantum Cryptography Assessment",
    category: "Emerging & Next-Gen Technologies",
    description:
      "Conducted a comprehensive post-quantum cryptography readiness assessment for a defense agency, inventorying all cryptographic assets and developing a prioritized migration roadmap.",
    quote: "CybitSolutions helped us understand our quantum risk before it became a crisis.",
    result: "Cataloged 100,000+ cryptographic instances; migration roadmap completed 18 months ahead of mandate.",
  },
  {
    title: "Healthcare IT Modernization for Military Health",
    category: "Industry-Specific IT",
    description:
      "Supported the Military Health System's transition to a modern electronic health record, including data migration, workflow redesign, and training across 10+ military treatment facilities.",
    quote: "The EHR transition improved clinical workflows and patient safety across our facilities.",
    result: "Successful go-live at 10 facilities; 30% improvement in clinical documentation efficiency.",
  },
];

/** Helper to find a case study by slug */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

/** Helper to filter summary case studies by category */
export function getSummaryCaseStudiesByCategory(
  category: string
): SummaryCaseStudy[] {
  return summaryCaseStudies.filter((cs) => cs.category === category);
}
