import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-blue-100">
            How we use cookies and similar technologies
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-10 leading-relaxed">
            This Cookie Policy explains what cookies are, how Cybit Solutions uses them,
            and how you can manage your cookie preferences when visiting our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Are Cookies</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a
            website. They are widely used to make websites work more efficiently, provide
            a better browsing experience, and supply information to the website owners.
            Cookies can be &quot;persistent&quot; (remaining on your device for a set period) or
            &quot;session&quot; cookies (deleted when you close your browser).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Types of Cookies We Use</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Essential Cookies</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            These cookies are necessary for the website to function properly. They enable
            core features such as page navigation, secure area access, and form
            submissions. The website cannot function correctly without these cookies, and
            they are enabled by default.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Analytics Cookies</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Analytics cookies help us understand how visitors interact with our website
            by collecting and reporting information anonymously. This data helps us
            improve the structure, content, and performance of our site. These cookies
            track metrics such as page views, bounce rates, and traffic sources.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Functional Cookies</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Functional cookies enable enhanced functionality and personalization, such as
            remembering your preferences, language settings, and region. These cookies
            may be set by us or by third-party providers whose services we have added to
            our pages.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Marketing Cookies</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Marketing cookies are used to track visitors across websites to display
            relevant advertisements. They help measure the effectiveness of advertising
            campaigns and limit the number of times you see an ad. These cookies are
            typically set by our advertising partners with our permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to Manage Cookies</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Most web browsers allow you to control cookies through their settings. You
            can set your browser to refuse all cookies, accept only certain cookies, or
            delete cookies that have already been set. Please note that disabling cookies
            may affect the functionality of our website and limit your ability to use
            certain features. Consult your browser&apos;s help documentation for instructions
            on managing cookie settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Third-Party Cookies</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            In some cases, we use cookies provided by trusted third parties. These
            third-party services may set cookies on your device to deliver their
            functionality. We do not control these third-party cookies and recommend
            reviewing the respective privacy policies of these providers for further
            information on their cookie practices.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in
            technology, legislation, or our data practices. Any changes will be posted
            on this page with an updated effective date. We encourage you to check this
            page periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            If you have any questions about our use of cookies, please contact us at{" "}
            <a
              href="mailto:privacy@cybitsolutions.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              privacy@cybitsolutions.com
            </a>.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/legal/privacy"
              className="text-blue-600 hover:text-blue-700 underline text-sm"
            >
              View our Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
