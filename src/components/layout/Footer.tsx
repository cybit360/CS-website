import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, Mail, Phone, ArrowRight } from "lucide-react";
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
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Cookie Policy", href: "/legal/cookies" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-navy-950 text-white" role="contentinfo">
      {/* Newsletter banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h3 className="text-lg font-bold text-white mb-1">
                Stay Informed
              </h3>
              <p className="text-sm text-white/70">
                Get the latest insights on government IT, cybersecurity, and
                digital transformation delivered to your inbox.
              </p>
            </div>
            <div className="flex-1 max-w-lg">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Logo + description + socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-5 inline-block">
              <Image
                src="/images/logo.png"
                alt="CybitSolutions"
                width={320}
                height={80}
                className="h-28 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
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
                    className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-accent-blue hover:text-white transition-all"
                  >
                    <Icon className="size-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              About
            </h3>
            <ul className="flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="mailto:info@cybitsolutions.net"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent-cyan transition-colors"
                >
                  <Mail className="size-4 text-accent-cyan/60" />
                  info@cybitsolutions.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+17712331379"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent-cyan transition-colors"
                >
                  <Phone className="size-4 text-accent-cyan/60" />
                  (771) 233-1379
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom legal bar — darker navy */}
      <div className="bg-navy-dark border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-white/60">
              &copy; {new Date().getFullYear()} CybitSolutions. All rights
              reserved. A Division of AFANO Group.
            </p>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-5">
              {bottomLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/60 hover:text-accent-cyan transition-colors"
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
