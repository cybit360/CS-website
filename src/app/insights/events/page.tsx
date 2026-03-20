import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Video,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Webinars",
  description:
    "Join CybitSolutions at upcoming industry conferences, webinars, and events focused on cybersecurity, cloud, and federal IT modernization.",
};

const upcomingEvents = [
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
    type: "Panel Discussion",
    description:
      "Our Chief Technology Officer joins a panel of defense industry leaders to discuss the responsible adoption of artificial intelligence and machine learning in national security missions.",
  },
];

const pastEvents = [
  {
    title: "FedRAMP Authorization Workshop",
    date: "February 20, 2026",
    location: "Virtual Webinar",
    type: "Workshop",
    attendees: 320,
    description:
      "Interactive session walking through the FedRAMP authorization process from initial assessment to full ATO.",
  },
  {
    title: "DevSecOps for Government Teams",
    date: "January 15, 2026",
    location: "Arlington, VA",
    type: "Seminar",
    attendees: 85,
    description:
      "Full-day seminar on building secure development pipelines that meet federal compliance requirements.",
  },
  {
    title: "Cybersecurity Trends 2026 Outlook",
    date: "December 8, 2025",
    location: "Virtual Webinar",
    type: "Webinar",
    attendees: 450,
    description:
      "Year-end analysis of emerging cybersecurity threats and predictions for the federal technology landscape.",
  },
];

export default function EventsPage() {
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

      {/* Upcoming Events */}
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-accent-cyan/10 rounded-xl flex items-center justify-center">
                    {event.type === "Webinar" ? (
                      <Video className="w-8 h-8 text-accent-cyan" />
                    ) : (
                      <Users className="w-8 h-8 text-accent-cyan" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan">
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
                    <button className="bg-accent-cyan text-navy font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
                className="bg-cloud rounded-2xl p-6 hover:shadow-md transition"
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
                <button className="text-accent-cyan text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View Recording <ArrowRight className="w-4 h-4" />
                </button>
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
    </main>
  );
}
