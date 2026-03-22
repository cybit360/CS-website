"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
  links?: { label: string; href: string }[];
}

interface QuickAction {
  label: string;
  query: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  { label: "Our Services", query: "services" },
  { label: "Contact Us", query: "contact" },
  { label: "View Careers", query: "careers" },
  { label: "Certifications", query: "certifications" },
];

const FAQ_RESPONSES: {
  keywords: string[];
  response: string;
  links?: { label: string; href: string }[];
}[] = [
  {
    keywords: ["service", "services", "what do you do", "offerings", "capabilities", "solutions"],
    response:
      "CybitSolutions offers 10 core service domains: Cybersecurity & Risk Management, Cloud Computing & Virtualization, Core IT Infrastructure, Software Development & DevOps, Data & Analytics, AI & Automation, Enterprise IT Services, Digital Transformation, Emerging Technologies, and Industry-Specific IT.",
    links: [
      { label: "View All Services", href: "/what-we-do/services" },
      { label: "Capability Statements", href: "/what-we-do/capability-statements" },
    ],
  },
  {
    keywords: ["contact", "reach", "phone", "email", "get in touch", "rfp", "proposal"],
    response:
      "You can reach CybitSolutions at info@cybitsolutions.net or call + (771) 233-1379. You can also submit an RFP or general inquiry through our contact form.",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Submit an RFP", href: "/contact" },
    ],
  },
  {
    keywords: ["certification", "certifications", "certified", "iso", "cmmi", "soc"],
    response:
      "CybitSolutions holds ISO 27001, ISO 20000, CMMI Level 3, and SOC 2 Type II certifications. Our staff holds CISSP, AWS Solutions Architect, Azure Administrator, PMP, and ITIL v4 certifications among others.",
    links: [
      { label: "View Certifications", href: "/who-we-serve/alliances" },
      { label: "Capability Statements", href: "/what-we-do/capability-statements" },
    ],
  },
  {
    keywords: ["career", "careers", "job", "jobs", "hiring", "work", "employment", "open roles", "positions"],
    response:
      "We are always looking for talented professionals to join our team. Check our Open Roles page for current opportunities. We offer competitive benefits, professional development, and a mission-driven culture.",
    links: [
      { label: "Open Roles", href: "/careers/open-roles" },
      { label: "Culture & Benefits", href: "/careers/culture" },
    ],
  },
  {
    keywords: ["clearance", "clearances", "security clearance", "top secret", "ts/sci", "cleared"],
    response:
      "CybitSolutions maintains a Facility Clearance (FCL) at the Top Secret level. Our personnel hold clearances through TS/SCI, and we maintain a continuous evaluation program across all service domains.",
    links: [
      { label: "Capability Statements", href: "/what-we-do/capability-statements" },
    ],
  },
  {
    keywords: ["contract", "contracts", "vehicle", "gsa", "sewp", "alliant", "cio-sp3", "procurement"],
    response:
      "CybitSolutions is available through multiple pre-competed contract vehicles: GSA MAS, CIO-SP3, SEWP V, DISA SETI, and Alliant 2 GWAC. These vehicles enable streamlined procurement for federal agencies.",
    links: [
      { label: "Contract Vehicles", href: "/what-we-do/capability-statements" },
      { label: "Contact BD Team", href: "/contact" },
    ],
  },
  {
    keywords: ["about", "who", "company", "veteran", "minority", "history", "background"],
    response:
      "CybitSolutions is a Veteran-Owned, Minority-Owned IT firm with over 20 years of government and commercial contracting experience. We specialize in delivering mission-grade IT solutions for federal agencies, the DoD, and the Intelligence Community.",
    links: [
      { label: "About Us", href: "/who-we-are/about" },
      { label: "Leadership", href: "/who-we-are/leadership" },
    ],
  },
  {
    keywords: ["cloud", "aws", "azure", "migration", "govcloud"],
    response:
      "Our Cloud Computing & Virtualization practice covers AWS GovCloud, Azure Government, and hybrid/multi-cloud environments. We handle cloud strategy, migration, security, FinOps, and managed cloud services at all classification levels including IL4/IL5/IL6.",
    links: [
      { label: "Cloud Services", href: "/what-we-do/services/cloud" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    keywords: ["cyber", "cybersecurity", "security", "zero trust", "siem", "soar", "soc"],
    response:
      "Our Cybersecurity & Risk Management practice delivers end-to-end security services including SOC/MDR operations, zero-trust architecture, RMF compliance, vulnerability management, and incident response for federal environments.",
    links: [
      { label: "Cybersecurity Services", href: "/what-we-do/services/cybersecurity" },
      { label: "Schedule Assessment", href: "/contact" },
    ],
  },
  {
    keywords: ["ai", "artificial intelligence", "machine learning", "automation", "rpa", "ml"],
    response:
      "Our AI & Automation practice brings responsible AI to federal missions. We deliver machine learning, NLP, RPA, computer vision, intelligent document processing, and MLOps solutions aligned with the NIST AI Risk Management Framework.",
    links: [
      { label: "AI & Automation Services", href: "/what-we-do/services/ai-automation" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    keywords: ["partner", "teaming", "subcontract", "alliance", "partnership"],
    response:
      "CybitSolutions actively seeks teaming partnerships with prime contractors and other firms. We bring deep federal IT expertise, cleared personnel, and proven past performance to teaming arrangements.",
    links: [
      { label: "Partner With Us", href: "/contact/partner" },
      { label: "Alliances & Certifications", href: "/who-we-serve/alliances" },
    ],
  },
  {
    keywords: ["naics", "codes", "sic"],
    response:
      "Our primary NAICS codes include: 541512 (Computer Systems Design), 541511 (Custom Computer Programming), 541513 (Computer Facilities Management), 541519 (Other Computer Related Services), 518210 (Data Processing & Hosting), and more.",
    links: [
      { label: "Full NAICS List", href: "/what-we-do/capability-statements" },
    ],
  },
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm the CybitSolutions assistant. How can I help you today? You can ask about our services, certifications, contract vehicles, careers, or anything else.",
};

const GREETING_MESSAGE: Message = {
  role: "assistant",
  content:
    "\u{1F44B} Hi there! Welcome to CybitSolutions. How can I help you today?",
};

function getResponse(input: string): Message {
  const lower = input.toLowerCase().trim();

  for (const faq of FAQ_RESPONSES) {
    for (const keyword of faq.keywords) {
      if (lower.includes(keyword)) {
        return {
          role: "assistant",
          content: faq.response,
          links: faq.links,
        };
      }
    }
  }

  return {
    role: "assistant",
    content:
      "Thank you for your question. For detailed assistance, I'd recommend reaching out to our team directly. You can contact us at info@cybitsolutions.net or call + (771) 233-1379.",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "View Our Services", href: "/what-we-do/services" },
    ],
  };
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-open chat with greeting on EVERY first visit per browser session
  useEffect(() => {
    const hasBeenGreeted = sessionStorage.getItem("cybit-chat-greeted");
    if (!hasBeenGreeted) {
      // Show greeting after 1.5 seconds for a professional, welcoming feel
      const timer = setTimeout(() => {
        setMessages([GREETING_MESSAGE, WELCOME_MESSAGE]);
        setIsOpen(true);
        sessionStorage.setItem("cybit-chat-greeted", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const response = getResponse(trimmed);

    setMessages((prev) => [...prev, userMessage, response]);
    setInput("");
  };

  const handleQuickAction = (query: string) => {
    const userMessage: Message = { role: "user", content: query };
    const response = getResponse(query);
    setMessages((prev) => [...prev, userMessage, response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-20 right-4 sm:right-6 z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Chat assistant"
        aria-hidden={!isOpen}
      >
        <div className="w-[calc(100vw-2rem)] sm:w-[400px] max-h-[500px] bg-white rounded-2xl shadow-2xl border border-[#D1D9E0] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#0B1C2E] px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2563EB]/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  CybitSolutions Assistant
                </p>
                <p className="text-white/50 text-xs">Ask us anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0 max-h-[340px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-[#0B1C2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-[#2563EB]" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    msg.role === "user"
                      ? "bg-[#2563EB] text-[#0B1C2E]"
                      : "bg-[#F4F7FA] text-[#1E2A38]"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.links.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          className="inline-block text-xs font-semibold text-[#2563EB] bg-white border border-[#2563EB]/30 rounded-full px-3 py-1 hover:bg-[#2563EB]/10 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5 text-[#0B1C2E]" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2 shrink-0">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleQuickAction(action.query)}
                  className="text-xs font-medium text-[#0B1C2E] bg-[#F4F7FA] border border-[#D1D9E0] rounded-full px-3 py-1.5 hover:bg-[#2563EB]/10 hover:border-[#2563EB]/30 transition-colors cursor-pointer"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#D1D9E0] px-4 py-3 flex items-center gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 text-sm text-[#1E2A38] placeholder-[#5C6B7A]/60 bg-transparent outline-none"
              aria-label="Chat message input"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-[#0B1C2E] hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isOpen
            ? "bg-[#0B1C2E] hover:bg-[#1E2A38]"
            : "bg-[#2563EB] hover:bg-[#1D4ED8] chat-pulse"
        }`}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
}
