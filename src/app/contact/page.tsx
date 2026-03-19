import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  ArrowRight,
} from "lucide-react";

const subjects = [
  "General Inquiry",
  "RFP/RFI Response",
  "Partnership Opportunity",
  "Career Inquiry",
  "Technical Support",
];

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
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
              <div className="bg-white rounded-xl border border-border p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-steel mb-8">
                  Fill out the form below and a member of our team will respond
                  within one business day.
                </p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-border text-steel focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-border text-steel focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Agency or Company"
                        className="w-full px-4 py-3 rounded-lg border border-border text-steel focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(703) 555-0100"
                        className="w-full px-4 py-3 rounded-lg border border-border text-steel focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border text-steel focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan bg-white">
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-lg border border-border text-steel focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan resize-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
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
                    <p className="text-steel text-sm">(703) 555-0100</p>
                    <p className="text-steel text-xs mt-1">
                      Toll-free: (800) 555-0100
                    </p>
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
                    <p className="text-steel text-sm">info@cybitsolutions.com</p>
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
