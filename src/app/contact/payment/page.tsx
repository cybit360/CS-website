import type { Metadata } from "next";
import Link from "next/link";
import {
  CreditCard,
  Building2,
  FileText,
  HelpCircle,
  ArrowRight,
  Mail,
  Phone,
  Shield,
  Clock,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Payment",
  description:
    "CybitSolutions payment information, invoicing details, and accounts payable contact for government and commercial clients.",
};

const paymentMethods = [
  {
    icon: Building2,
    title: "ACH / Wire Transfer",
    description:
      "Send payments directly via ACH or wire transfer. Contact our accounting team for banking details and routing information.",
  },
  {
    icon: CreditCard,
    title: "Government Purchase Card",
    description:
      "We accept payments via government purchase cards (GPC) for applicable orders and services under the micro-purchase threshold.",
  },
  {
    icon: FileText,
    title: "Invoice Payment",
    description:
      "Pay against an existing invoice using your preferred method. Reference your invoice number for faster processing.",
  },
];

const faqs = [
  {
    question: "What payment terms does CybitSolutions offer?",
    answer:
      "Our standard payment terms are Net 30 from the date of invoice. Custom terms may be arranged for large-scale contracts or government-specific billing cycles. Contact our accounting team for details.",
  },
  {
    question: "How do I request a copy of my invoice?",
    answer:
      "You can request a copy of any invoice by emailing accounting@cybitsolutions.net with your contract number, invoice number, or purchase order reference. We typically respond within one business day.",
  },
  {
    question: "Can I set up recurring payments?",
    answer:
      "Yes, we support recurring ACH payments for ongoing service contracts. Our accounting team can help you set up automated payment schedules aligned with your billing cycle.",
  },
  {
    question: "What information should I include with my payment?",
    answer:
      "Please include your invoice number, contract number, and organization name with all payments. For wire transfers, include this information in the memo field to ensure proper allocation.",
  },
  {
    question: "Who do I contact about billing discrepancies?",
    answer:
      "For any billing questions or discrepancies, please contact our accounting team at accounting@cybitsolutions.net or call (703) 555-0105. We aim to resolve all billing inquiries within 48 hours.",
  },
];

export default function PaymentPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Payment Portal
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Manage your payments, view invoice information, and connect with our
            accounting team for billing support.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Accepted Payment Methods
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              CybitSolutions accepts multiple payment methods to accommodate
              federal agency and commercial client requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="bg-white rounded-xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-accent-cyan/10 mb-5">
                    <Icon className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {method.title}
                  </h3>
                  <p className="text-steel text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Invoice Information */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Invoice Information
              </h2>
              <p className="text-steel max-w-2xl mx-auto">
                Locate key details on your invoice to streamline your payment
                process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cloud rounded-xl border border-border p-6">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-cyan" />
                  Invoice Details
                </h3>
                <ul className="space-y-3">
                  {[
                    "Invoice Number (top right of document)",
                    "Contract or Task Order Number",
                    "Billing Period and Due Date",
                    "Line Item Descriptions and Amounts",
                    "Remittance Address",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-steel"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cloud rounded-xl border border-border p-6">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent-cyan" />
                  Payment Security
                </h3>
                <ul className="space-y-3">
                  {[
                    "All transactions processed securely",
                    "PCI DSS compliant payment handling",
                    "Encrypted data transmission",
                    "Verified banking credentials on file",
                    "Audit trail for all payments received",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-steel"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Accounting */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-border p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Contact Our Accounting Team
              </h2>
              <p className="text-steel">
                Have questions about an invoice, payment status, or need
                remittance details? Our accounting team is here to help.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-accent-cyan/10 mb-3">
                  <Mail className="w-6 h-6 text-accent-cyan" />
                </div>
                <p className="text-sm font-semibold text-navy mb-1">Email</p>
                <p className="text-sm text-steel">accounting@cybitsolutions.net</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-accent-cyan/10 mb-3">
                  <Phone className="w-6 h-6 text-accent-cyan" />
                </div>
                <p className="text-sm font-semibold text-navy mb-1">Phone</p>
                <p className="text-sm text-steel">(703) 555-0105</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-accent-cyan/10 mb-3">
                  <Clock className="w-6 h-6 text-accent-cyan" />
                </div>
                <p className="text-sm font-semibold text-navy mb-1">Hours</p>
                <p className="text-sm text-steel">Mon&ndash;Fri, 9AM&ndash;5PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Payment FAQs
              </h2>
              <p className="text-steel">
                Common questions about billing, invoicing, and payments.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-cloud rounded-xl border border-border p-6"
                >
                  <h3 className="font-bold text-navy flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-steel text-sm mt-3 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cloud py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Need Additional Assistance?
          </h2>
          <p className="text-steel max-w-2xl mx-auto mb-8">
            For general inquiries or to speak with a member of our team about
            contract-related matters, visit our main contact page.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
