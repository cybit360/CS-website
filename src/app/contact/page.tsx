import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact CybitSolutions for RFP responses, partnership inquiries, or general questions. Reach our team for government and enterprise IT solutions.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <Breadcrumb variant="dark" items={[{ label: "Contact" }]} />
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your agency&apos;s technology capabilities? Get
            in touch with our team to discuss how CybitSolutions can support
            your mission.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-steel mb-8">
                  Fill out the form below and a member of our team will respond
                  within one business day.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-cyan/10">
                    <MapPin className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Office Address</h3>
                    <p className="text-steel text-sm">
                      1234 Innovation Drive, Suite 500
                      <br />
                      Reston, VA 20190
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-cyan/10">
                    <Phone className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Phone</h3>
                    <p className="text-steel text-sm">+ (771) 233-1379</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-cyan/10">
                    <Mail className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Email</h3>
                    <p className="text-steel text-sm">info@cybitsolutions.net</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-cyan/10">
                    <Clock className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Business Hours</h3>
                    <p className="text-steel text-sm">
                      Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM EST
                    </p>
                    <p className="text-steel text-xs mt-1">
                      Closed on federal holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    href="/contact/partner"
                    className="flex items-center gap-2 text-white/80 hover:text-accent-cyan transition-colors text-sm"
                  >
                    <Building className="w-4 h-4" />
                    Partnership Inquiries
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Link>
                  <Link
                    href="/careers"
                    className="flex items-center gap-2 text-white/80 hover:text-accent-cyan transition-colors text-sm"
                  >
                    <Building className="w-4 h-4" />
                    Career Opportunities
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Link>
                  <Link
                    href="/contact/payment"
                    className="flex items-center gap-2 text-white/80 hover:text-accent-cyan transition-colors text-sm"
                  >
                    <Building className="w-4 h-4" />
                    Payment Portal
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div
            className="relative rounded-xl overflow-hidden aspect-[21/9] bg-gradient-to-br from-navy via-slate to-stone-700/30"
            role="img"
            aria-label="Office location map placeholder for Reston, Virginia"
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
            {/* Map pin visual */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg
                className="w-16 h-16 text-accent-cyan mb-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-white/80 font-semibold text-lg">Reston, Virginia</p>
              <p className="text-white/50 text-sm mt-1">1234 Innovation Drive, Suite 500</p>
            </div>
            {/* Decorative accents */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent-cyan/5 rounded-tl-full" />
            <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-white/[0.03] rounded-br-full" />
            {/* Decorative roads */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/10" />
            <div className="absolute top-1/3 left-0 w-full h-px bg-white/5" />
            <div className="absolute top-0 left-1/3 w-px h-full bg-white/5" />
            <div className="absolute top-2/3 left-0 w-full h-px bg-white/5" />
            <div className="absolute top-0 left-2/3 w-px h-full bg-white/5" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-steel max-w-2xl mx-auto mb-8">
            Schedule a consultation with one of our solutions architects to
            discuss your specific requirements and how CybitSolutions can help.
          </p>
          <Link
            href="/contact/partner"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Explore Partnerships
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
