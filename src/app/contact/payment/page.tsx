"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  FileText,
  HelpCircle,
  ArrowRight,
  Mail,
  Phone,
  Shield,
  Clock,
  CheckCircle,
  Search,
  AlertCircle,
  Lock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Payment method definitions                                        */
/* ------------------------------------------------------------------ */

const paymentMethods = [
  {
    id: "stripe",
    name: "Stripe",
    logo: (
      <svg viewBox="0 0 60 25" className="w-16 h-7" aria-hidden="true">
        <text x="0" y="19" fontWeight="700" fontSize="18" fill="#635BFF" fontFamily="Inter, sans-serif">stripe</text>
      </svg>
    ),
    description: "Pay securely with credit or debit card via Stripe.",
  },
  {
    id: "paypal",
    name: "PayPal",
    logo: (
      <svg viewBox="0 0 70 25" className="w-18 h-7" aria-hidden="true">
        <text x="0" y="19" fontWeight="700" fontSize="18" fill="#003087" fontFamily="Inter, sans-serif">Pay</text>
        <text x="30" y="19" fontWeight="700" fontSize="18" fill="#009CDE" fontFamily="Inter, sans-serif">Pal</text>
      </svg>
    ),
    description: "Use your PayPal account or linked bank for payment.",
  },
  {
    id: "square",
    name: "Square",
    logo: (
      <svg viewBox="0 0 80 25" className="w-18 h-7" aria-hidden="true">
        <rect x="0" y="3" width="18" height="18" rx="3" fill="#000" />
        <rect x="5" y="8" width="8" height="8" rx="1" fill="#fff" />
        <text x="24" y="19" fontWeight="600" fontSize="16" fill="#000" fontFamily="Inter, sans-serif">Square</text>
      </svg>
    ),
    description: "Process payments through Square's secure platform.",
  },
  {
    id: "amazon-pay",
    name: "Amazon Pay",
    logo: (
      <svg viewBox="0 0 120 25" className="w-24 h-7" aria-hidden="true">
        <text x="0" y="19" fontWeight="700" fontSize="16" fill="#FF9900" fontFamily="Inter, sans-serif">amazon</text>
        <text x="66" y="19" fontWeight="600" fontSize="16" fill="#232F3E" fontFamily="Inter, sans-serif">pay</text>
      </svg>
    ),
    description: "Pay with your Amazon account for a fast checkout.",
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    logo: (
      <svg viewBox="0 0 100 25" className="w-20 h-7" aria-hidden="true">
        <text x="0" y="19" fontWeight="600" fontSize="18" fill="#000" fontFamily="Inter, sans-serif">Apple Pay</text>
      </svg>
    ),
    description: "Quick, contactless payment with Apple Pay.",
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
      "You can request a copy of any invoice by emailing info@cybitsolutions.net with your contract number, invoice number, or purchase order reference. We typically respond within one business day.",
  },
  {
    question: "Can I set up recurring payments?",
    answer:
      "Yes, we support recurring payments for ongoing service contracts. Our accounting team can help you set up automated payment schedules aligned with your billing cycle.",
  },
  {
    question: "What information should I include with my payment?",
    answer:
      "Please include your invoice number, contract number, and organization name with all payments to ensure proper allocation.",
  },
  {
    question: "Who do I contact about billing discrepancies?",
    answer:
      "For any billing questions or discrepancies, please contact our accounting team at info@cybitsolutions.net or call + (771) 233-1379. We aim to resolve all billing inquiries within 48 hours.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [invoiceLookup, setInvoiceLookup] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [lookupSubmitted, setLookupSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupSubmitted(true);
    // Backend integration needed for actual invoice lookup
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Backend integration needed for actual payment processing
  };

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

      {/* Invoice Lookup */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex p-3 rounded-full bg-accent-cyan/10 mb-4">
                <Search className="w-7 h-7 text-accent-cyan" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Invoice Lookup
              </h2>
              <p className="text-steel">
                Enter your invoice number to view details and make a payment.
              </p>
            </div>
            <form onSubmit={handleLookup} className="bg-white rounded-xl border border-border p-8 shadow-sm">
              <label htmlFor="invoice-lookup" className="block text-sm font-semibold text-navy mb-2">
                Invoice Number
              </label>
              <div className="flex gap-3">
                <input
                  id="invoice-lookup"
                  type="text"
                  value={invoiceLookup}
                  onChange={(e) => {
                    setInvoiceLookup(e.target.value);
                    setLookupSubmitted(false);
                  }}
                  placeholder="e.g. INV-2026-00123"
                  className="flex-1 rounded-lg border border-border px-4 py-3 text-sm text-navy placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:border-accent-cyan"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Search className="w-4 h-4" />
                  Look Up
                </button>
              </div>
              {lookupSubmitted && (
                <div className="mt-4 flex items-start gap-2 p-4 bg-accent-cyan/5 rounded-lg border border-accent-cyan/20">
                  <AlertCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-navy">Backend Integration Required</p>
                    <p className="text-sm text-steel mt-1">
                      Invoice lookup requires server-side integration. Please contact our accounting team at{" "}
                      <a href="mailto:info@cybitsolutions.net" className="text-accent-cyan hover:underline">
                        info@cybitsolutions.net
                      </a>{" "}
                      for invoice details.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Make a Payment
              </h2>
              <p className="text-steel max-w-2xl mx-auto">
                Select your preferred payment method and enter your payment details below.
              </p>
            </div>

            <form onSubmit={handlePayment} className="space-y-10">
              {/* Payment Method Selection */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-4">
                  Select Payment Method
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => {
                    const isSelected = selectedMethod === method.id;
                    return (
                      <button
                        type="button"
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        aria-pressed={isSelected}
                        className={`relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all text-center cursor-pointer ${
                          isSelected
                            ? "border-accent-cyan bg-accent-cyan/5 shadow-md"
                            : "border-border bg-cloud hover:border-accent-cyan/40 hover:shadow-sm"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle className="w-5 h-5 text-accent-cyan" />
                          </div>
                        )}
                        <div className="h-10 flex items-center justify-center">
                          {method.logo}
                        </div>
                        <span className="text-sm font-semibold text-navy">
                          {method.name}
                        </span>
                        <span className="text-xs text-steel">
                          {method.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-cloud rounded-xl border border-border p-8">
                <h3 className="text-lg font-bold text-navy mb-6">
                  Payment Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pay-invoice" className="block text-sm font-semibold text-navy mb-2">
                      Invoice Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="pay-invoice"
                      type="text"
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      placeholder="e.g. INV-2026-00123"
                      className="w-full rounded-lg border border-border px-4 py-3 text-sm text-navy placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:border-accent-cyan"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pay-amount" className="block text-sm font-semibold text-navy mb-2">
                      Amount (USD) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-steel text-sm">$</span>
                      <input
                        id="pay-amount"
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full rounded-lg border border-border pl-8 pr-4 py-3 text-sm text-navy placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:border-accent-cyan"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-border">
                  <p className="text-sm text-steel flex items-center gap-2">
                    <Lock className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    Selected method:{" "}
                    <span className="font-semibold text-navy">
                      {selectedMethod
                        ? paymentMethods.find((m) => m.id === selectedMethod)?.name
                        : "None selected"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                {formSubmitted ? (
                  <div className="inline-flex items-start gap-3 p-6 bg-accent-cyan/5 rounded-xl border border-accent-cyan/20 max-w-lg mx-auto">
                    <AlertCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm font-semibold text-navy">
                        Payment Processing Not Yet Connected
                      </p>
                      <p className="text-sm text-steel mt-1">
                        This payment portal UI is complete, but backend payment processing
                        integration (Stripe, PayPal, etc.) is required to process transactions.
                        Please contact our accounting team to complete your payment.
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={!selectedMethod || !invoiceNumber || !amount}
                    className="inline-flex items-center gap-2 bg-accent-cyan text-navy font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    <Lock className="w-5 h-5" />
                    Proceed to Payment
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Accepted Payment Badges */}
      <section className="bg-cloud py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-sm font-semibold text-steel uppercase tracking-wider mb-6">
              Accepted Payment Methods
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center gap-2 bg-white rounded-lg border border-border px-5 py-3 shadow-sm"
                >
                  {method.logo}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-steel">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-accent-cyan" />
                PCI DSS Compliant
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-accent-cyan" />
                256-bit SSL Encryption
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-accent-cyan" />
                Secure Processing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms & Information */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Payment Terms &amp; Information
              </h2>
              <p className="text-steel max-w-2xl mx-auto">
                Important details about our billing policies and payment procedures.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cloud rounded-xl border border-border p-6">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-cyan" />
                  Billing &amp; Invoicing
                </h3>
                <ul className="space-y-3">
                  {[
                    "Standard payment terms: Net 30 from invoice date",
                    "Invoices issued electronically via email",
                    "Custom billing cycles available for government contracts",
                    "Purchase order and contract reference on all invoices",
                    "Detailed line-item breakdowns provided",
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
                  <CreditCard className="w-5 h-5 text-accent-cyan" />
                  Payment Methods Accepted
                </h3>
                <ul className="space-y-3">
                  {[
                    "Credit and debit cards (Visa, Mastercard, Amex)",
                    "ACH / Wire Transfer (contact us for banking details)",
                    "Government Purchase Card (GPC)",
                    "PayPal, Square, Amazon Pay, and Apple Pay",
                    "Recurring automatic payments available",
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
                  Security &amp; Compliance
                </h3>
                <ul className="space-y-3">
                  {[
                    "All transactions processed through PCI DSS compliant systems",
                    "256-bit SSL encryption for all data transmission",
                    "No payment card data stored on our servers",
                    "Full audit trail for all payments received",
                    "SOC 2 compliant processing partners",
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
                  <Clock className="w-5 h-5 text-accent-cyan" />
                  Processing &amp; Timelines
                </h3>
                <ul className="space-y-3">
                  {[
                    "Card payments processed within 1 business day",
                    "ACH transfers: 2-3 business days",
                    "Wire transfers: 1-2 business days",
                    "Payment confirmation sent via email",
                    "Late payment inquiries handled within 48 hours",
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
                Billing Questions?
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
                <a
                  href="mailto:info@cybitsolutions.net"
                  className="text-sm text-accent-cyan hover:underline"
                >
                  info@cybitsolutions.net
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-accent-cyan/10 mb-3">
                  <Phone className="w-6 h-6 text-accent-cyan" />
                </div>
                <p className="text-sm font-semibold text-navy mb-1">Phone</p>
                <a
                  href="tel:+17712331379"
                  className="text-sm text-accent-cyan hover:underline"
                >
                  + (771) 233-1379
                </a>
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
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="bg-cloud rounded-xl border border-border overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                    aria-expanded={expandedFaq === index}
                  >
                    <span className="font-bold text-navy flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-steel flex-shrink-0 transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 ml-7">
                      <p className="text-steel text-sm">{faq.answer}</p>
                    </div>
                  )}
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
