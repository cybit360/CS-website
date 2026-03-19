import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-blue-100">
            Effective Date: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-10 leading-relaxed">
            Cybit Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We may collect personal information that you voluntarily provide when you
            contact us, request a quote, or use our services. This includes your name,
            email address, phone number, company name, and any other details you choose
            to share. We also automatically collect certain technical data such as your
            IP address, browser type, operating system, and browsing behavior on our site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We use the information we collect to provide and improve our services,
            respond to your inquiries, send project updates and communications, analyze
            website usage to enhance user experience, comply with legal obligations, and
            protect against fraudulent or unauthorized activity.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Information Sharing</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties.
            We may share your data with trusted service providers who assist us in
            operating our website and delivering services, provided they agree to keep
            your information confidential. We may also disclose information when required
            by law or to protect our rights and safety.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We implement industry-standard security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet or electronic storage
            is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Depending on your jurisdiction, you may have the right to access, correct,
            or delete your personal data. You may also have the right to restrict or
            object to certain processing activities, request data portability, and
            withdraw consent where processing is based on consent. To exercise any of
            these rights, please contact us using the details provided below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cookies &amp; Tracking</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our website uses cookies and similar tracking technologies to enhance your
            browsing experience and gather usage analytics. You can control cookie
            preferences through your browser settings. For more details, please see
            our{" "}
            <Link href="/legal/cookies" className="text-blue-600 hover:text-blue-700 underline">
              Cookie Policy
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our services are not directed to individuals under the age of 16. We do not
            knowingly collect personal information from children. If we become aware that
            we have inadvertently gathered data from a child, we will take steps to
            delete that information promptly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in
            our practices or applicable laws. We will post the revised policy on this
            page with an updated effective date. We encourage you to review this page
            periodically to stay informed about how we protect your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or our data
            practices, please contact us at{" "}
            <a
              href="mailto:privacy@cybitsolutions.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              privacy@cybitsolutions.com
            </a>.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/legal/terms"
              className="text-blue-600 hover:text-blue-700 underline text-sm"
            >
              View our Terms of Use &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
