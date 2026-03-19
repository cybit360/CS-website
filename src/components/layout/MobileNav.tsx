"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavItems, utilityLinks } from "@/data/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const priorityLinks = [
  { label: "Services & Solutions", href: "/what-we-do" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = useCallback((label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
    }
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <nav
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="CybitSolutions"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-steel hover:bg-cloud hover:text-navy transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {/* Priority links */}
          <div className="mb-6 flex flex-col gap-2">
            {priorityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-lg bg-cloud px-4 py-3 text-sm font-semibold text-navy hover:bg-accent-cyan hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <hr className="mb-6 border-border" />

          {/* Accordion sections */}
          <div className="flex flex-col gap-1">
            {mainNavItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => toggleSection(item.label)}
                  aria-expanded={expandedSection === item.label}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold text-navy hover:bg-cloud transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-5 text-steel transition-transform duration-200",
                      expandedSection === item.label && "rotate-180"
                    )}
                  />
                </button>

                {/* Expandable children */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    expandedSection === item.label
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="flex flex-col gap-0.5 pb-2 pl-4">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="rounded-md px-4 py-2.5 text-sm text-steel hover:bg-cloud hover:text-navy transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="mt-1 rounded-md px-4 py-2.5 text-sm font-medium text-accent-cyan hover:bg-cloud transition-colors"
                    >
                      View All {item.label} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-6 border-border" />

          {/* Utility links */}
          <div className="flex flex-col gap-1">
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-md px-4 py-2.5 text-sm text-steel hover:bg-cloud hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer contact info */}
        <div className="border-t border-border px-5 py-4">
          <div className="flex flex-col gap-2 text-sm text-steel">
            <a
              href="tel:+12025551234"
              className="inline-flex items-center gap-2 hover:text-navy transition-colors"
            >
              <Phone className="size-4" />
              (202) 555-1234
            </a>
            <a
              href="mailto:info@cybitsolutions.com"
              className="inline-flex items-center gap-2 hover:text-navy transition-colors"
            >
              <Mail className="size-4" />
              info@cybitsolutions.com
            </a>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 block w-full rounded-lg bg-accent-cyan px-4 py-3 text-center text-sm font-semibold text-navy hover:bg-accent-cyan-dark transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </nav>
    </>
  );
}
