"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavItems, utilityLinks } from "@/data/navigation";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll for sticky header opacity
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = useCallback((label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMenu(label);
  }, []);

  const handleMenuLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  const closeMega = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      {/* Utility bar */}
      <div className="hidden border-b border-border bg-cloud/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <nav aria-label="Utility navigation" className="flex items-center gap-5">
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-steel hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5 text-xs text-steel">
            <a
              href="tel:+12025551234"
              className="inline-flex items-center gap-1.5 hover:text-navy transition-colors"
            >
              <Phone className="size-3" />
              (202) 555-1234
            </a>
            <a
              href="mailto:info@cybitsolutions.com"
              className="inline-flex items-center gap-1.5 hover:text-navy transition-colors"
            >
              <Mail className="size-3" />
              info@cybitsolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="CybitSolutions - Home"
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNavItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMenuEnter(item.label)}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  activeMenu === item.label
                    ? "text-accent-cyan"
                    : "text-navy hover:text-accent-cyan"
                )}
                aria-expanded={
                  item.children ? activeMenu === item.label : undefined
                }
                aria-haspopup={item.children ? "true" : undefined}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      activeMenu === item.label && "rotate-180"
                    )}
                  />
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-accent-cyan px-5 py-2.5 text-sm font-semibold text-navy hover:bg-accent-cyan-dark transition-colors lg:inline-flex"
          >
            Request Consultation
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-lg p-2 text-navy hover:bg-cloud lg:hidden transition-colors"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mega menu panels (desktop) */}
      <div className="hidden lg:block">
        {mainNavItems.map((item) => (
          <div
            key={item.label}
            onMouseEnter={() => handleMenuEnter(item.label)}
            onMouseLeave={handleMenuLeave}
          >
            <MegaMenu
              item={item}
              isOpen={activeMenu === item.label}
              onClose={closeMega}
            />
          </div>
        ))}
      </div>

      {/* Mobile navigation */}
      <MobileNav isOpen={mobileOpen} onClose={closeMobile} />
    </header>
  );
}
