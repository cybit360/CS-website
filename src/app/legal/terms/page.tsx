import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "CybitSolutions terms of use governing access to and use of our website, services, and digital properties.",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Terms of Use
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Last Updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-10 leading-relaxed">
            Welcome to CybitSolutions. By accessing or using our website and services,
            you agree to be bound by these Terms of Use. Please read them carefully
            before using our platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            By accessing this website, you acknowledge that you have read, understood,
            and agree to be bound by these Terms of Use and all applicable laws and
            regulations. If you do not agree with any of these terms, you are prohibited
            from using or accessing this site. The materials contained in this website
            are protected by applicable copyright and trademark law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Use License</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Permission is granted to temporarily access the materials on our website for
            personal, non-commercial, transitory viewing only. This is the grant of a
            license, not a transfer of title. Under this license you may not modify or
            copy the materials, use the materials for any commercial purpose, attempt to
            reverse engineer any software contained on the website, remove any copyright
            or proprietary notations, or transfer the materials to another person.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">User Conduct</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            You agree to use our website and services only for lawful purposes and in a
            manner that does not infringe upon the rights of others or restrict their
            use and enjoyment. Prohibited conduct includes transmitting harmful code,
            attempting unauthorized access to our systems, impersonating any person or
            entity, and engaging in any activity that disrupts or interferes with our
            services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            All content, features, and functionality on this website, including but not
            limited to text, graphics, logos, icons, images, audio clips, and software,
            are the exclusive property of CybitSolutions or its licensors and are
            protected by international copyright, trademark, patent, trade secret, and
            other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Disclaimers</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The materials on our website are provided on an &quot;as is&quot; basis. CybitSolutions makes no warranties, expressed or implied, and hereby disclaims
            all other warranties including, without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            In no event shall CybitSolutions or its suppliers be liable for any damages,
            including without limitation damages for loss of data or profit, arising out
            of the use or inability to use the materials on our website, even if CybitSolutions has been notified of the possibility of such damage. Some
            jurisdictions do not allow limitations on implied warranties or liability
            for incidental damages, so these limitations may not apply to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indemnification</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            You agree to indemnify, defend, and hold harmless CybitSolutions, its
            officers, directors, employees, agents, and affiliates from and against any
            claims, liabilities, damages, losses, and expenses arising out of or in any
            way connected with your access to or use of our website and services or your
            violation of these Terms of Use.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Governing Law</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with
            the laws of the United States, and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location. Any disputes arising under
            these terms shall be resolved through binding arbitration in accordance
            with applicable arbitration rules.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to Terms</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            CybitSolutions may revise these Terms of Use at any time without notice. By
            continuing to use this website after changes are posted, you agree to be
            bound by the revised terms. We encourage you to review this page periodically
            for any updates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            If you have any questions about these Terms of Use, please contact us at{" "}
            <a
              href="mailto:legal@cybitsolutions.net"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              legal@cybitsolutions.net
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
