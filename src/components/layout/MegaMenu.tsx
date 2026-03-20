"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
}

const featuredContent: Record<string, { title: string; description: string; cta: string; href: string }> = {
  "What We Do": {
    title: "Mission-Grade IT Solutions",
    description:
      "Discover how CybitSolutions delivers secure, scalable technology to power government and enterprise missions.",
    cta: "Explore Our Approach",
    href: "/what-we-do",
  },
  "Who We Are": {
    title: "Built on Trust & Excellence",
    description:
      "Learn about our leadership, culture, and the certifications that set CybitSolutions apart.",
    cta: "Meet Our Team",
    href: "/who-we-are/about",
  },
  "Who We Serve": {
    title: "Trusted by Federal Agencies",
    description:
      "From DoD to civilian agencies, we deliver results where the mission matters most.",
    cta: "View Our Impact",
    href: "/who-we-serve",
  },
  Insights: {
    title: "Thought Leadership",
    description:
      "Stay informed on cybersecurity, cloud, AI trends, and federal IT policy developments.",
    cta: "Read Latest Insights",
    href: "/insights",
  },
  Careers: {
    title: "Join Our Mission",
    description:
      "Build your career with a team that is shaping the future of government technology.",
    cta: "View Open Roles",
    href: "/careers/open-roles",
  },
  Contact: {
    title: "Let's Connect",
    description:
      "Ready to discuss your next project? Our team is here to help you achieve mission success.",
    cta: "Request a Consultation",
    href: "/contact",
  },
};

export function MegaMenu({ item, isOpen, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const featured = featuredContent[item.label];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen || !item.children) return null;

  return (
    <div
      ref={panelRef}
      role="menu"
      aria-label={`${item.label} submenu`}
      className={cn(
        "absolute left-0 top-full w-full bg-white shadow-xl border-t-2 border-accent-cyan z-50",
        "animate-[fadeSlideIn_200ms_ease-out_forwards]"
      )}
      style={{
        animationName: "fadeSlideIn",
      }}
      onMouseLeave={onClose}
    >
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-8 min-h-[280px]">
        <div className="grid grid-cols-12 gap-8">
          {/* Subpage links */}
          <div className="col-span-8">
            <div className="mb-4">
              <Link
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wider text-steel hover:text-accent-cyan transition-colors"
              >
                {item.label} Overview
              </Link>
            </div>
            <div
              className={cn(
                "grid gap-4",
                (item.children?.length ?? 0) > 4
                  ? "grid-cols-2"
                  : "grid-cols-1 max-w-lg"
              )}
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className="group flex flex-col gap-1 rounded-lg p-3 transition-colors hover:bg-cloud"
                  onClick={onClose}
                >
                  <span className="text-base font-semibold text-navy group-hover:text-accent-cyan transition-colors">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="text-sm leading-relaxed text-steel">
                      {child.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured content area */}
          {featured && (
            <div className="col-span-4 flex flex-col rounded-xl bg-cloud p-6">
              <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate/10">
                <Image
                  src="/images/featured-placeholder.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 33vw, 400px"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
                  <span className="text-xs text-steel">Featured</span>
                </div>
              </div>
              <h3 className="mb-2 text-base font-bold text-navy">
                {featured.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-steel">
                {featured.description}
              </p>
              <Link
                href={featured.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan hover:text-accent-cyan-dark transition-colors"
                onClick={onClose}
              >
                {featured.cta}
                <ExternalLink className="size-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
