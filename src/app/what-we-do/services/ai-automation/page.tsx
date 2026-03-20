import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Download,
  MessageSquare,
  FileText,
  Bot,
  Cpu,
  Eye,
  Workflow,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageImage } from "@/components/ui/PageImage";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "CybitSolutions AI and intelligent automation services including machine learning, NLP, computer vision, and robotic process automation for government missions.",
};

const functionalAreas = [
  {
    icon: Brain,
    title: "Generative AI & Large Language Models",
    description:
      "Deploy secure, enterprise-grade GenAI solutions with guardrails for federal environments. Fine-tune LLMs for mission-specific tasks with responsible AI principles.",
    capabilities: [
      "LLM Fine-Tuning & Deployment",
      "RAG (Retrieval-Augmented Generation)",
      "AI-Powered Document Intelligence",
      "Secure AI Sandboxes for Government",
      "Responsible AI Governance Frameworks",
    ],
  },
  {
    icon: Bot,
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate high-volume, repetitive workflows with intelligent bots that integrate with existing enterprise systems and reduce manual processing by 80%+.",
    capabilities: [
      "RPA Strategy & Roadmap",
      "UiPath / Power Automate Deployments",
      "Intelligent Document Processing (IDP)",
      "Bot Lifecycle Management",
      "Process Mining & Optimization",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision & Image Analytics",
    description:
      "AI-powered image and video analysis for surveillance, geospatial intelligence, quality inspection, and object detection in defense and federal applications.",
    capabilities: [
      "Object Detection & Classification",
      "Geospatial Image Analysis",
      "Video Analytics & Surveillance",
      "Quality Inspection Automation",
      "Satellite Imagery Processing",
    ],
  },
  {
    icon: Workflow,
    title: "Conversational AI & Intelligent Assistants",
    description:
      "Deploy secure chatbots and virtual assistants for citizen services, help desks, and internal operations with NLU and multi-channel support.",
    capabilities: [
      "Chatbot & Virtual Assistant Development",
      "Natural Language Understanding (NLU)",
      "Multi-Channel Integration",
      "Knowledge Base Automation",
      "Sentiment Analysis & Voice AI",
    ],
  },
];

const services = [
  "Generative AI Strategy & Implementation",
  "Enterprise RPA Program Design",
  "Computer Vision System Development",
  "Conversational AI & Chatbot Deployment",
  "AI/ML Model Development & Training",
  "Responsible AI Governance",
  "Intelligent Document Processing",
  "Process Mining & Automation Discovery",
  "AI-Powered Decision Support Systems",
  "Predictive Maintenance Solutions",
  "Natural Language Processing (NLP)",
  "AI Center of Excellence (CoE) Setup",
];

const standards = [
  "NIST AI RMF",
  "DoD AI Strategy",
  "Executive Order on AI",
  "OECD AI Principles",
  "ISO/IEC 42001",
  "Responsible AI Frameworks",
  "FedRAMP for AI Workloads",
  "DoD JAIC Guidelines",
];

const benefits = [
  "GenAI solutions with federal security guardrails and data sovereignty",
  "RPA reducing manual processing time by 80%+",
  "Computer vision enabling real-time situational awareness",
  "Conversational AI improving citizen service response times by 60%",
  "Responsible AI governance ensuring ethical, transparent deployment",
  "AI Center of Excellence accelerating organization-wide adoption",
];

const customers = [
  "Department of Defense (DoD)",
  "Department of State (DoS)",
  "Intelligence Community (IC)",
  "Federal Civilian Agencies",
  "Department of Homeland Security",
  "Healthcare (VA, HHS)",
  "Financial Institutions",
  "Manufacturing & Logistics",
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-accent-cyan">
              <Brain className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">Service Domain</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI &amp; Automation
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            GenAI, RPA, computer vision, and conversational AI with federal-grade security and responsible AI governance.
          </p>
        </div>
      </section>

      {/* Visual Accent */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageImage variant="ai" aspectRatio="wide" className="shadow-lg" />
        </div>
      </section>

      <section className="pt-6 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-steel leading-relaxed">
              CybitSolutions delivers AI and automation solutions that augment human decision-making, automate routine processes, and unlock intelligence from unstructured data. Our AI practice is built on responsible AI principles, with security guardrails and governance frameworks designed specifically for federal and defense environments where data sovereignty, explainability, and compliance are paramount.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-2">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Functional Areas</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {functionalAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan">
                    <area.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                </div>
                <p className="text-steel leading-relaxed mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-cyan mt-1 shrink-0" />
                      <span className="text-sm text-navy font-medium">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Example Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-cloud rounded-lg p-4">
                <Brain className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                <span className="text-navy font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Standards &amp; Frameworks</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {standards.map((s) => (
              <div key={s} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <span className="text-white text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                    <span className="text-steel leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">Target Customers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customers.map((c) => (
                  <div key={c} className="flex items-center gap-3 bg-cloud rounded-lg p-4">
                    <Building2 className="w-5 h-5 text-navy shrink-0" />
                    <span className="text-navy font-medium text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent-cyan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Deploy AI Responsibly?</h2>
          <p className="text-navy/70 max-w-2xl mx-auto mb-8 text-lg">
            From GenAI pilots to enterprise RPA programs, our AI experts build solutions with security and ethics built in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-we-do/capability-statements" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-slate transition-colors">
              <Download className="w-5 h-5" /> Capability Statement
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-cloud transition-colors">
              <MessageSquare className="w-5 h-5" /> Talk to an AI Specialist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
