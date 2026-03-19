import Link from "next/link";

export default function AccessibilityStatementPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Accessibility Statement
          </h1>
          <p className="text-lg text-blue-100">
            Our commitment to an inclusive digital experience
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-10 leading-relaxed">
            Cybit Solutions is committed to ensuring digital accessibility for people
            of all abilities. We continually improve the user experience for everyone
            and apply the relevant accessibility standards to guarantee we provide
            equal access to all users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Conformance Status</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.2
            at the AA level. These guidelines explain how to make web content more
            accessible for people with disabilities and more user-friendly for everyone.
            While we work diligently to adhere to the accepted guidelines and standards,
            it is not always possible to do so in all areas of the website. We are
            continually seeking solutions to bring all areas into compliance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Technologies Used</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Accessibility of this website relies on the following technologies to work
            with the particular combination of web browser and any assistive technologies
            or plugins installed on your computer:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 ml-4">
            <li>HTML5 for semantic and structured content</li>
            <li>CSS for visual presentation and responsive design</li>
            <li>WAI-ARIA for enhanced accessibility of dynamic content</li>
            <li>JavaScript for interactive functionality with graceful degradation</li>
          </ul>
          <p className="text-gray-600 mb-4 leading-relaxed">
            These technologies are relied upon for conformance with the accessibility
            standards used. We test our website across multiple browsers and assistive
            technology combinations to ensure broad compatibility.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Measures We Take</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Cybit Solutions takes the following measures to ensure accessibility of our
            website and services:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 ml-4">
            <li>Include accessibility as part of our development process</li>
            <li>Provide continual accessibility training for our staff</li>
            <li>Conduct regular accessibility audits using automated and manual testing</li>
            <li>Assign clear accessibility goals and responsibilities</li>
            <li>Employ formal accessibility quality assurance methods</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Known Limitations</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Despite our best efforts to ensure accessibility, there may be some
            limitations. Below is a description of known limitations and potential
            solutions:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 ml-4">
            <li>
              Some older PDF documents may not be fully accessible. We are working to
              remediate these files and provide accessible alternatives upon request.
            </li>
            <li>
              Certain third-party content or embedded media may not fully conform to
              accessibility standards. We monitor and work with vendors to improve
              compliance.
            </li>
            <li>
              Some interactive visualizations may have limited screen reader support. We
              provide text alternatives where possible.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Feedback &amp; Contact</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We welcome your feedback on the accessibility of our website. If you
            encounter any accessibility barriers or have suggestions for improvement,
            please let us know by contacting us at{" "}
            <a
              href="mailto:accessibility@cybitsolutions.com"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              accessibility@cybitsolutions.com
            </a>.
            We aim to respond to accessibility feedback within two business days and to
            propose a solution within ten business days.
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
