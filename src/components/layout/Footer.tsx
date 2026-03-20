import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const aboutLinks = [
  { label: "About Us", href: "/who-we-are/about" },
  { label: "Leadership", href: "/who-we-are/leadership" },
  { label: "Social Impact", href: "/who-we-are/social-impact" },
];

const serviceLinks = [
  { label: "Services & Solutions", href: "/what-we-do/services" },
  { label: "Our Approach", href: "/what-we-do/our-approach" },
  { label: "Past Performance", href: "/what-we-do/past-performance" },
  { label: "Capability Statements", href: "/what-we-do/capability-statements" },
];

const resourceLinks = [
  { label: "News & Insights", href: "/insights/news" },
  { label: "Resource Library", href: "/insights/resources" },
  { label: "Events & Webinars", href: "/insights/events" },
  { label: "Careers", href: "/careers" },
];

const contactLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Partner With Us", href: "/contact/partner" },
];

const bottomLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Cookies", href: "/legal/cookies" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Logo + description + socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/logo.png"
                alt="CybitSolutions"
                width={180}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-steel">
              Mission-grade IT solutions for government and enterprise.
              Delivering secure, scalable technology that powers critical
              operations.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-md bg-slate text-steel hover:bg-accent-cyan hover:text-navy transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-amber">
              About
            </h3>
            <ul className="flex flex-col gap-2.5">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-amber">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-amber">
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-amber">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@cybitsolutions.net"
                  className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-white transition-colors"
                >
                  <Mail className="size-3.5" />
                  info@cybitsolutions.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+17712331379"
                  className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-white transition-colors"
                >
                  <Phone className="size-3.5" />
                  (771) 233-1379
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-slate pt-8 pb-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-amber mb-2">
                Newsletter
              </h3>
              <p className="text-sm text-steel">
                Get the latest insights, news, and resources delivered to your
                inbox.
              </p>
            </div>
            <div className="flex-1 max-w-lg">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-slate pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-steel">
              &copy; 2025 CybitSolutions. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-4">
              {bottomLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-steel hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
