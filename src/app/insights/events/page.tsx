"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Video,
  CheckCircle,
  X,
  Mic,
  Monitor,
} from "lucide-react";

type EventCategory = "Conference" | "Webinar" | "Speaking Engagement";

interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventCategory;
  description: string;
}

interface PastEvent {
  title: string;
  date: string;
  location: string;
  type: string;
  attendees: number;
  description: string;
  recordingUrl: string;
}

const categoryIcons: Record<EventCategory, typeof Users> = {
  Conference: Users,
  Webinar: Monitor,
  "Speaking Engagement": Mic,
};

const categoryBadgeColors: Record<EventCategory, string> = {
  Conference: "bg-blue-100 text-blue-700",
  Webinar: "bg-purple-100 text-purple-700",
  "Speaking Engagement": "bg-amber-100 text-amber-700",
};

const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Zero Trust Summit 2026",
    date: "April 15-16, 2026",
    time: "9:00 AM - 5:00 PM ET",
    location: "Washington, D.C.",
    type: "Conference",
    description:
      "Join CybitSolutions at the premier federal cybersecurity conference. Our team will present on implementing zero trust architecture for classified environments and lead a hands-on workshop on identity-centric security models.",
  },
  {
    title: "Cloud Security Best Practices for Government",
    date: "April 28, 2026",
    time: "1:00 PM - 2:30 PM ET",
    location: "Virtual Webinar",
    type: "Webinar",
    description:
      "A deep-dive webinar covering cloud security controls, FedRAMP authorization strategies, and continuous monitoring approaches for government cloud deployments.",
  },
  {
    title: "AI in Defense: Opportunities & Challenges",
    date: "May 10, 2026",
    time: "10:00 AM - 12:00 PM ET",
    location: "Reston, VA",
    type: "Speaking Engagement",
    description:
      "Our Chief Technology Officer joins a panel of defense industry leaders to discuss the responsible adoption of artificial intelligence and machine learning in national security missions.",
  },
  {
    title: "Federal IT Modernization Conference 2026",
    date: "May 22-23, 2026",
    time: "8:30 AM - 4:30 PM ET",
    location: "Arlington, VA",
    type: "Conference",
    description:
      "CybitSolutions will showcase our government digital transformation capabilities, including cloud migration strategies, legacy modernization approaches, and citizen-facing digital service platforms.",
  },
  {
    title: "CMMC 2.0 Readiness Workshop",
    date: "June 5, 2026",
    time: "2:00 PM - 3:30 PM ET",
    location: "Virtual Webinar",
    type: "Webinar",
    description:
      "A practical workshop covering the Cybersecurity Maturity Model Certification 2.0 requirements, self-assessment procedures, and how to prepare your organization for third-party assessments.",
  },
  {
    title: "Securing the Software Supply Chain",
    date: "June 18, 2026",
    time: "11:00 AM - 12:30 PM ET",
    location: "National Press Club, Washington, D.C.",
    type: "Speaking Engagement",
    description:
      "Our VP of Engineering presents strategies for implementing SBOM-driven security practices and meeting Executive Order 14028 requirements for software supply chain integrity.",
  },
];

const pastEvents: PastEvent[] = [
  {
    title: "FedRAMP Authorization Workshop",
    date: "February 20, 2026",
    location: "Virtual Webinar",
    type: "Webinar",
    attendees: 320,
    description:
      "Interactive session walking through the FedRAMP authorization process from initial assessment to full ATO.",
    recordingUrl: "#",
  },
  {
    title: "DevSecOps for Government Teams",
    date: "January 15, 2026",
    location: "Arlington, VA",
    type: "Conference",
    attendees: 85,
    description:
      "Full-day seminar on building secure development pipelines that meet federal compliance requirements.",
    recordingUrl: "#",
  },
  {
    title: "Cybersecurity Trends 2026 Outlook",
    date: "December 8, 2025",
    location: "Virtual Webinar",
    type: "Webinar",
    attendees: 450,
    description:
      "Year-end analysis of emerging cybersecurity threats and predictions for the federal technology landscape.",
    recordingUrl: "#",
  },
];

function RegistrationModal({
  event,
  onClose,
}: {
  event: UpcomingEvent;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
    >
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2
              id="registration-title"
              className="text-xl font-bold text-navy"
            >
              Event Registration
            </h2>
            <button
              onClick={onClose}
              className="text-steel hover:text-navy transition p-1"
              aria-label="Close registration form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-steel text-sm mt-1">{event.title}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-steel/70">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {event.location}
            </span>
          </div>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Registration Confirmed
              </h3>
              <p className="text-steel text-sm mb-6">
                You have been registered for {event.title}. A confirmation email
                with event details will be sent to {formData.email}.
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
                  htmlFor="reg-name"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label
                  htmlFor="reg-email"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="john.smith@agency.gov"
                />
              </div>
              <div>
                <label
                  htmlFor="reg-company"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Company / Organization{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="Department of Defense"
                />
              </div>
              <div>
                <label
                  htmlFor="reg-title"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-title"
                  type="text"
                  required
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                  placeholder="Cybersecurity Program Manager"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-cyan text-navy font-semibold py-3 rounded-lg hover:brightness-110 transition mt-2"
              >
                Complete Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [registrationEvent, setRegistrationEvent] =
    useState<UpcomingEvent | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Conferences", "Webinars", "Speaking Engagements"];

  const filteredUpcoming =
    activeCategory === "All"
      ? upcomingEvents
      : upcomingEvents.filter((e) => {
          if (activeCategory === "Conferences") return e.type === "Conference";
          if (activeCategory === "Webinars") return e.type === "Webinar";
          if (activeCategory === "Speaking Engagements")
            return e.type === "Speaking Engagement";
          return true;
        });

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Events
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Events &amp; Webinars
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Connect with our experts at industry conferences, webinars, and
            workshops focused on federal technology and security.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-cloud text-steel hover:bg-navy/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {filteredUpcoming.map((event) => {
              const IconComponent =
                categoryIcons[event.type] || Users;
              return (
                <div
                  key={event.title}
                  className="bg-white rounded-2xl p-8 shadow-sm card-hover"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-accent-cyan/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-accent-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full ${categoryBadgeColors[event.type]}`}
                        >
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-navy mb-3">
                        {event.title}
                      </h3>
                      <p className="text-steel mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-steel/70">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => setRegistrationEvent(event)}
                        className="bg-accent-cyan text-navy font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredUpcoming.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-steel/30 mx-auto mb-4" />
                <p className="text-steel text-lg">
                  No upcoming events in this category.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-accent-cyan font-medium hover:underline"
                >
                  View all events
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10">
            Past Events Archive
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="bg-cloud rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium text-green-600">
                    Completed
                  </span>
                  <span className="text-xs text-steel/50 ml-auto">
                    {event.attendees} attendees
                  </span>
                </div>
                <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-steel mb-2">
                  {event.type}
                </span>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {event.title}
                </h3>
                <p className="text-steel text-sm mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-steel/60 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </span>
                </div>
                <a
                  href={event.recordingUrl}
                  className="inline-flex items-center gap-1 text-accent-cyan text-sm font-medium hover:gap-2 transition-all"
                >
                  <Video className="w-4 h-4" />
                  View Recording <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want Us to Speak at Your Event?
          </h2>
          <p className="text-gray-300 mb-8">
            Our experts are available for keynotes, panel discussions, and
            workshops on federal technology topics.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
          >
            Request a Speaker <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Registration Modal */}
      {registrationEvent && (
        <RegistrationModal
          event={registrationEvent}
          onClose={() => setRegistrationEvent(null)}
        />
      )}
    </main>
  );
}
