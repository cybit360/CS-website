"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Shield,
  Building2,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  X,
  DollarSign,
  Upload,
  Laptop,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface Job {
  title: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  clearance: string;
  department: string;
  type: string;
  salaryRange: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    title: "Cybersecurity Analyst",
    location: "Ft. Meade, MD",
    locationType: "On-site",
    clearance: "TS/SCI",
    department: "Cybersecurity & Risk Management",
    type: "Full-time",
    salaryRange: "$95,000 - $135,000",
    overview:
      "Join our cybersecurity team to monitor, detect, and respond to threats targeting federal networks. You will work alongside government security operations teams to safeguard mission-critical systems and ensure compliance with NIST and CISA frameworks.",
    responsibilities: [
      "Monitor security information and event management (SIEM) systems for threat detection and incident response",
      "Conduct vulnerability assessments and penetration testing on federal information systems",
      "Analyze security alerts and investigate potential incidents using forensic tools and techniques",
      "Develop and maintain incident response playbooks and standard operating procedures",
      "Perform threat intelligence analysis and produce actionable threat reports",
      "Support Risk Management Framework (RMF) assessment and authorization activities",
      "Collaborate with cross-functional teams to implement security controls aligned with NIST SP 800-53",
    ],
    requirements: [
      "Bachelor's degree in Cybersecurity, Computer Science, or related field",
      "3+ years of experience in cybersecurity operations or incident response",
      "Active TS/SCI security clearance",
      "Experience with SIEM platforms (Splunk, Elastic, or similar)",
      "Knowledge of NIST Cybersecurity Framework and SP 800-53 controls",
      "CompTIA Security+ or CISSP certification (or ability to obtain within 6 months)",
      "Familiarity with federal cybersecurity directives and BODs",
    ],
    preferredQualifications: [
      "GIAC certifications (GCIH, GCIA, or GCFE)",
      "Experience with cloud security monitoring (AWS GovCloud, Azure Government)",
      "Familiarity with zero trust architecture principles",
      "Prior experience supporting DoD or IC clients",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Annual professional development budget of $5,000",
      "Certification reimbursement program",
      "Flexible PTO policy",
    ],
  },
  {
    title: "Cloud Engineer",
    location: "Remote (U.S.-based)",
    locationType: "Remote",
    clearance: "Secret",
    department: "Cloud Computing & Virtualization",
    type: "Full-time",
    salaryRange: "$120,000 - $165,000",
    overview:
      "Design, build, and manage secure cloud infrastructure for federal government clients. You will architect cloud solutions across AWS GovCloud and Azure Government that meet FedRAMP and IL4/IL5 requirements while driving modernization initiatives.",
    responsibilities: [
      "Design and implement cloud infrastructure using Infrastructure as Code (Terraform, CloudFormation)",
      "Architect multi-account, multi-region cloud environments meeting FedRAMP High and IL5 requirements",
      "Build and maintain CI/CD pipelines for infrastructure deployment and application releases",
      "Implement cloud security controls including encryption, IAM policies, and network segmentation",
      "Perform cloud cost optimization and resource right-sizing for government clients",
      "Support FedRAMP authorization activities including SSP documentation and POA&M remediation",
      "Mentor junior engineers and conduct architecture reviews",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Engineering, or equivalent experience",
      "5+ years of cloud engineering experience with AWS or Azure",
      "Active Secret clearance (or ability to obtain)",
      "AWS Solutions Architect Professional or Azure Solutions Architect Expert certification",
      "Proficiency in Terraform and at least one programming language (Python, Go, or TypeScript)",
      "Experience with container orchestration (Kubernetes, ECS, or EKS)",
      "Understanding of FedRAMP and NIST 800-53 compliance requirements",
    ],
    preferredQualifications: [
      "Experience with AWS GovCloud or Azure Government regions",
      "Multi-cloud architecture experience",
      "Familiarity with service mesh technologies (Istio, Consul)",
      "Experience supporting cloud migration programs for government agencies",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Full remote work flexibility with home office stipend",
      "Annual professional development budget of $5,000",
      "Flexible PTO policy",
    ],
  },
  {
    title: "DevSecOps Engineer",
    location: "Pentagon, VA",
    locationType: "On-site",
    clearance: "TS",
    department: "Software Development & DevOps",
    type: "Full-time",
    salaryRange: "$115,000 - $155,000",
    overview:
      "Build and maintain secure software delivery pipelines that integrate security testing throughout the development lifecycle. You will embed security into every stage of the CI/CD process for mission-critical DoD applications.",
    responsibilities: [
      "Design and maintain CI/CD pipelines integrating SAST, DAST, SCA, and container scanning tools",
      "Implement automated compliance checks aligned with DISA STIGs and Security Technical Implementation Guides",
      "Build and manage container platforms using Kubernetes with hardened security configurations",
      "Develop infrastructure-as-code templates that enforce security baselines and compliance policies",
      "Create automated remediation workflows for common security findings and misconfigurations",
      "Collaborate with development teams to adopt secure coding practices and shift-left security",
      "Maintain Platform One / Big Bang configurations and integrations",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Engineering, or equivalent experience",
      "4+ years of experience in DevOps or DevSecOps roles",
      "Active Top Secret clearance",
      "Experience with GitLab CI/CD, Jenkins, or GitHub Actions",
      "Proficiency in container technologies (Docker, Kubernetes, Helm)",
      "Knowledge of DISA STIGs, SCAP, and automated compliance tools (OpenSCAP, Anchore)",
      "Experience with scripting languages (Bash, Python, Go)",
    ],
    preferredQualifications: [
      "Experience with DoD Platform One / Big Bang",
      "CKS (Certified Kubernetes Security Specialist) or CKA certification",
      "Familiarity with OPA/Gatekeeper policy enforcement",
      "Experience with GitOps workflows (ArgoCD, Flux)",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Transit / parking benefits for Pentagon area",
      "Annual professional development budget of $5,000",
      "Flexible PTO policy",
    ],
  },
  {
    title: "Data Scientist",
    location: "Rosslyn, VA",
    locationType: "Hybrid",
    clearance: "Secret",
    department: "Data & Analytics",
    type: "Full-time",
    salaryRange: "$125,000 - $170,000",
    overview:
      "Apply advanced analytics and machine learning to solve complex problems for government clients. You will build data pipelines, develop predictive models, and deliver actionable insights that support evidence-based decision-making across federal agencies.",
    responsibilities: [
      "Design and build machine learning models for classification, regression, and anomaly detection use cases",
      "Develop ETL pipelines and data processing workflows using Python, Spark, and SQL",
      "Create interactive dashboards and visualizations for government stakeholders",
      "Conduct exploratory data analysis to identify patterns, trends, and actionable insights",
      "Implement model validation, testing, and monitoring frameworks for production ML systems",
      "Collaborate with subject matter experts to translate mission requirements into analytical solutions",
      "Document model methodologies, assumptions, and performance metrics for government review",
    ],
    requirements: [
      "Master's degree in Data Science, Statistics, Computer Science, or related field",
      "4+ years of experience in data science or advanced analytics roles",
      "Active Secret clearance (or ability to obtain)",
      "Proficiency in Python and ML frameworks (scikit-learn, TensorFlow, or PyTorch)",
      "Experience with SQL and data warehousing platforms",
      "Strong understanding of statistical methods, hypothesis testing, and experimental design",
      "Excellent written and verbal communication skills for non-technical audiences",
    ],
    preferredQualifications: [
      "Experience with NLP or computer vision applications",
      "Familiarity with cloud ML services (SageMaker, Azure ML)",
      "Knowledge of responsible AI practices and bias mitigation techniques",
      "Prior experience working with government data programs",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Hybrid schedule (3 days in-office, 2 remote)",
      "Annual professional development budget of $5,000",
      "Flexible PTO policy",
    ],
  },
  {
    title: "AI/ML Engineer",
    location: "Remote (U.S.-based)",
    locationType: "Remote",
    clearance: "Secret",
    department: "AI & Automation",
    type: "Full-time",
    salaryRange: "$135,000 - $185,000",
    overview:
      "Engineer production-grade AI and machine learning systems for government applications. You will design scalable ML infrastructure, build model training pipelines, and deploy AI solutions that meet the unique requirements of government operations.",
    responsibilities: [
      "Design and implement scalable ML training and inference pipelines on cloud infrastructure",
      "Build model serving infrastructure with monitoring, A/B testing, and rollback capabilities",
      "Develop RAG (Retrieval Augmented Generation) systems and LLM-based applications for government use cases",
      "Implement MLOps best practices including version control, experiment tracking, and model registry",
      "Optimize model performance for latency, throughput, and cost efficiency",
      "Create automated data labeling and annotation pipelines",
      "Ensure AI systems comply with government AI ethics guidelines and the NIST AI RMF",
    ],
    requirements: [
      "Master's degree in Computer Science, AI/ML, or related field",
      "5+ years of experience building production ML systems",
      "Active Secret clearance (or ability to obtain)",
      "Deep expertise in Python and ML frameworks (PyTorch, TensorFlow, Hugging Face)",
      "Experience with ML infrastructure (Kubeflow, MLflow, SageMaker)",
      "Strong software engineering skills including testing, CI/CD, and code review practices",
      "Knowledge of LLM fine-tuning, prompt engineering, and RAG architectures",
    ],
    preferredQualifications: [
      "PhD in Machine Learning, AI, or related field",
      "Experience deploying AI systems in government or regulated environments",
      "Familiarity with edge computing and model optimization (ONNX, TensorRT)",
      "Publications in top ML conferences (NeurIPS, ICML, ACL)",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Full remote work flexibility with home office stipend",
      "Annual professional development and conference budget of $7,500",
      "Flexible PTO policy",
    ],
  },
  {
    title: "Program Manager",
    location: "Washington, DC",
    locationType: "Hybrid",
    clearance: "Secret",
    department: "Enterprise IT Services & Platforms",
    type: "Full-time",
    salaryRange: "$130,000 - $175,000",
    overview:
      "Lead complex federal IT programs from planning through delivery. You will manage cross-functional teams, oversee contract performance, and serve as the primary client interface for multi-million dollar government technology initiatives.",
    responsibilities: [
      "Manage full lifecycle IT programs including scope, schedule, budget, and risk for government contracts",
      "Serve as the primary point of contact for government Contracting Officer Representatives (CORs)",
      "Develop and maintain Integrated Master Schedules, staffing plans, and work breakdown structures",
      "Lead Agile/SAFe ceremonies and ensure delivery teams meet sprint commitments and program milestones",
      "Prepare and deliver monthly status reports, Earned Value Management (EVM) analysis, and executive briefings",
      "Identify and mitigate program risks, manage issue escalation, and implement corrective actions",
      "Coordinate with capture and proposal teams to support recompete and new business efforts",
    ],
    requirements: [
      "Bachelor's degree in IT, Business, Engineering, or related field",
      "8+ years of IT program or project management experience, with 5+ in federal contracting",
      "Active Secret clearance",
      "PMP (Project Management Professional) certification",
      "Experience managing programs valued at $10M+ annually",
      "Strong understanding of FAR/DFARS, CPARS, and government contract types (FFP, T&M, CPFF)",
      "Excellent stakeholder management and communication skills",
    ],
    preferredQualifications: [
      "SAFe Agilist or Scrum Master certification",
      "Experience with EVMS and Earned Value Management systems",
      "ITIL v4 Foundation certification",
      "Prior government civilian or military service",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Hybrid schedule (3 days in-office, 2 remote)",
      "Annual professional development budget of $5,000",
      "Flexible PTO policy",
    ],
  },
  {
    title: "Network Administrator",
    location: "Tampa, FL",
    locationType: "On-site",
    clearance: "TS/SCI",
    department: "Core IT Infrastructure, Networking & Operations",
    type: "Full-time",
    salaryRange: "$90,000 - $125,000",
    overview:
      "Manage and maintain enterprise network infrastructure supporting classified government operations. You will ensure network availability, performance, and security for mission-critical environments at USCENTCOM and supporting commands.",
    responsibilities: [
      "Configure, manage, and troubleshoot Cisco and Juniper routers, switches, and firewalls",
      "Monitor network performance and availability using enterprise NMS tools (SolarWinds, PRTG)",
      "Implement and maintain VPN, SD-WAN, and MPLS connections across multiple classification domains",
      "Perform network security hardening aligned with DISA STIGs and NSA configuration guides",
      "Plan and execute network change requests following ITIL change management processes",
      "Support network incident response and root cause analysis for outages and degradations",
      "Maintain network documentation including topology diagrams, IP address plans, and SOPs",
    ],
    requirements: [
      "Bachelor's degree in IT, Network Engineering, or equivalent experience",
      "4+ years of enterprise network administration experience",
      "Active TS/SCI security clearance",
      "CCNA or CCNP certification",
      "Experience with Cisco IOS/NX-OS and Juniper JunOS platforms",
      "Knowledge of routing protocols (BGP, OSPF, EIGRP) and network security concepts",
      "Understanding of DoD network architectures and classification domains (NIPR, SIPR, JWICS)",
    ],
    preferredQualifications: [
      "CCNP Security or JNCIS-SEC certification",
      "Experience with Palo Alto or Fortinet next-gen firewalls",
      "Familiarity with network automation (Ansible, Python/Netmiko)",
      "Prior USCENTCOM or USSOCOM support experience",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Relocation assistance available",
      "Annual professional development budget of $5,000",
      "Flexible PTO policy",
    ],
  },
  {
    title: "Software Developer",
    location: "Remote (U.S.-based)",
    locationType: "Remote",
    clearance: "Public Trust",
    department: "Software Development & DevOps",
    type: "Full-time",
    salaryRange: "$105,000 - $150,000",
    overview:
      "Build modern, accessible web applications for federal civilian agencies. You will work on full-stack development using React, Node.js, and cloud services to deliver citizen-facing digital services and internal agency platforms that meet Section 508 and USWDS standards.",
    responsibilities: [
      "Develop responsive, accessible web applications using React/Next.js and Node.js/Express",
      "Design and implement RESTful APIs and microservices architectures for government systems",
      "Write clean, testable code with comprehensive unit, integration, and end-to-end test coverage",
      "Implement Section 508 accessibility compliance and follow USWDS design patterns",
      "Collaborate with UX designers and product owners in Agile sprint ceremonies",
      "Perform code reviews and contribute to team engineering standards and best practices",
      "Integrate with government authentication systems (Login.gov, PIV/CAC) and external APIs",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or equivalent experience",
      "3+ years of professional software development experience",
      "Ability to obtain Public Trust clearance",
      "Strong proficiency in JavaScript/TypeScript, React, and Node.js",
      "Experience with SQL and NoSQL databases (PostgreSQL, MongoDB)",
      "Familiarity with cloud services (AWS or Azure) and containerization (Docker)",
      "Understanding of Agile methodologies and version control (Git)",
    ],
    preferredQualifications: [
      "Experience with the U.S. Web Design System (USWDS)",
      "Knowledge of Section 508 / WCAG 2.1 AA accessibility standards",
      "Experience with GraphQL or API gateway patterns",
      "Prior experience on federal civilian agency projects (VA, HHS, SSA, etc.)",
    ],
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match up to 6%",
      "Full remote work flexibility with home office stipend",
      "Annual professional development budget of $5,000",
      "Flexible PTO policy",
    ],
  },
];

const locationTypeColors: Record<string, string> = {
  Remote: "bg-green-100 text-green-700",
  Hybrid: "bg-blue-100 text-blue-700",
  "On-site": "bg-amber-100 text-amber-700",
};

function ApplicationModal({
  job,
  onClose,
}: {
  job: Job;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    coverLetter: "",
  });
  const [resumeFileName, setResumeFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-title"
    >
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2
              id="application-title"
              className="text-xl font-bold text-navy"
            >
              Apply for Position
            </h2>
            <button
              onClick={onClose}
              className="text-steel hover:text-navy transition p-1"
              aria-label="Close application form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-steel text-sm mt-1">{job.title}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-steel/70">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              {job.salaryRange}
            </span>
          </div>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Application Submitted
              </h3>
              <p className="text-steel text-sm mb-6">
                Thank you for applying for the {job.title} position. Our
                recruiting team will review your application and contact you at{" "}
                {formData.email} within 5-7 business days.
              </p>
              <button
                onClick={onClose}
                className="bg-accent-cyan text-navy font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="app-name"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="app-name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="app-email"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="app-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="jane.doe@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="app-phone"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="app-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="app-linkedin"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  LinkedIn URL
                </label>
                <input
                  id="app-linkedin"
                  type="url"
                  value={formData.linkedIn}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedIn: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="https://linkedin.com/in/janedoe"
                />
              </div>
              <div>
                <label
                  htmlFor="app-resume"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Resume <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="app-resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-steel cursor-pointer hover:bg-cloud transition">
                    <Upload className="w-4 h-4 text-accent-cyan" />
                    {resumeFileName || "Upload resume (PDF, DOC, DOCX)"}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="app-cover"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Cover Letter
                </label>
                <textarea
                  id="app-cover"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData({ ...formData, coverLetter: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan resize-none"
                  placeholder="Tell us why you are interested in this role and what makes you a great fit..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-cyan text-navy font-semibold py-3 rounded-lg hover:brightness-110 transition mt-2"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OpenRolesPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  const toggleJob = (title: string) => {
    setExpandedJob(expandedJob === title ? null : title);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Careers", href: "/careers" }, { label: "Open Roles" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Open Positions
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore current opportunities across cybersecurity, cloud,
            engineering, and management. Find the role where your skills make a
            mission-critical difference.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Current Openings
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              We are actively hiring across multiple disciplines and locations.
              All positions offer competitive compensation and benefits. Click
              any role to view the full job description.
            </p>
          </div>
          <div className="space-y-6">
            {jobs.map((job, index) => {
              const isExpanded = expandedJob === job.title;
              return (
                <FadeIn key={job.title} delay={index * 0.1}>
                <div
                  className="bg-white rounded-2xl overflow-hidden border border-border card-hover"
                >
                  {/* Job Header */}
                  <button
                    onClick={() => toggleJob(job.title)}
                    className="w-full p-6 text-left flex flex-col lg:flex-row lg:items-center gap-4"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-navy mb-3">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 text-steel text-sm">
                          <MapPin className="w-4 h-4 text-accent-cyan" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-steel text-sm">
                          <Shield className="w-4 h-4 text-accent-cyan" />
                          {job.clearance} Clearance
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-steel text-sm">
                          <DollarSign className="w-4 h-4 text-accent-cyan" />
                          {job.salaryRange}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-steel text-sm">
                          <Building2 className="w-4 h-4 text-accent-cyan" />
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${locationTypeColors[job.locationType]}`}
                      >
                        <Laptop className="w-3 h-3 inline mr-1" />
                        {job.locationType}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-steel" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-steel" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Job Description */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2">
                            Overview
                          </h4>
                          <p className="text-steel leading-relaxed">
                            {job.overview}
                          </p>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-steel text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-steel text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Preferred Qualifications */}
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2">
                            Preferred Qualifications
                          </h4>
                          <ul className="space-y-2">
                            {job.preferredQualifications.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-steel text-sm"
                              >
                                <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-amber font-bold">
                                  +
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Clearance & Location */}
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="bg-cloud rounded-lg p-4">
                            <div className="text-xs text-steel/60 mb-1">
                              Clearance Level
                            </div>
                            <div className="font-semibold text-navy flex items-center gap-1.5">
                              <Shield className="w-4 h-4 text-accent-cyan" />
                              {job.clearance}
                            </div>
                          </div>
                          <div className="bg-cloud rounded-lg p-4">
                            <div className="text-xs text-steel/60 mb-1">
                              Location
                            </div>
                            <div className="font-semibold text-navy flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-accent-cyan" />
                              {job.locationType}
                            </div>
                          </div>
                          <div className="bg-cloud rounded-lg p-4">
                            <div className="text-xs text-steel/60 mb-1">
                              Salary Range
                            </div>
                            <div className="font-semibold text-navy flex items-center gap-1.5">
                              <DollarSign className="w-4 h-4 text-accent-cyan" />
                              {job.salaryRange}
                            </div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2">
                            Benefits
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {job.benefits.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-steel text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-2">
                          <button
                            onClick={() => setApplyingJob(job)}
                            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition text-sm"
                          >
                            Apply Now <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
          <h2 className="text-3xl font-bold text-navy mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-steel max-w-2xl mx-auto mb-6">
            We are always looking for talented professionals to join our team. If
            you don&apos;t see a position that matches your background, submit a
            general application and we&apos;ll keep you in mind for future
            openings.
          </p>
          <ul className="inline-flex flex-col gap-3 text-left mb-10">
            {[
              "All experience levels welcome",
              "Clearance sponsorship available",
              "Remote and hybrid options for many roles",
              "Competitive referral bonuses",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-steel">
                <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
            >
              Submit General Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Next Mission Starts Here
          </h2>
          <p className="text-gray-300 mb-8">
            Join CybitSolutions and build the technology that protects and serves
            our nation.
          </p>
          <Link
            href="/careers/culture"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Explore Our Culture <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Application Modal */}
      {applyingJob && (
        <ApplicationModal
          job={applyingJob}
          onClose={() => setApplyingJob(null)}
        />
      )}
    </main>
  );
}
