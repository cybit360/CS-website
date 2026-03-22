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

      {/* Our Location - Google Maps */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Location</h2>
            <p className="text-steel max-w-2xl mx-auto">
              Proudly serving federal agencies and commercial clients from the
              Washington, D.C. metro area — the heart of government operations.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.14121788856!2d-77.09697339568148!3d38.89376751855697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CybitSolutions Location"
            className="rounded-xl"
          />
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
