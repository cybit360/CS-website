"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Phone, Mail, Search, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavItems, utilityLinks } from "@/data/navigation";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { GlobalSearch } from "@/components/ui/GlobalSearch";

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
          ? "bg-white/98 shadow-xl backdrop-blur-lg border-b border-accent-cyan/10"
          : "bg-white"
      )}
    >
      {/* Utility bar — sleek top strip */}
      <div className="hidden bg-gradient-to-r from-navy via-navy to-slate lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <nav aria-label="Utility navigation" className="flex items-center gap-6">
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-white/60 hover:text-accent-cyan transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6 text-xs font-medium text-white/80">
            <a
              href="tel:+17712331379"
              className="inline-flex items-center gap-2 hover:text-accent-cyan transition-colors"
            >
              <Phone className="size-3.5" />
              + (771) 233-1379
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <a
              href="mailto:info@cybitsolutions.net"
              className="inline-flex items-center gap-2 hover:text-accent-cyan transition-colors"
            >
              <Mail className="size-3.5" />
              info@cybitsolutions.net
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24">
        {/* Logo — extra large and prominent */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="CybitSolutions - Home"
            width={300}
            height={90}
            className="h-14 w-auto sm:h-16 lg:h-[72px]"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 lg:flex"
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
                  "inline-flex items-center gap-1 rounded-md px-3.5 py-2.5 text-sm font-semibold tracking-tight transition-colors",
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

        {/* Search + CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Global Search Button — always visible */}
          <GlobalSearch />

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-lg bg-accent-cyan px-5 py-2.5 text-sm font-bold text-navy shadow-md shadow-accent-cyan/20 hover:bg-accent-cyan-dark hover:shadow-lg hover:shadow-accent-cyan/30 transition-all lg:inline-flex"
          >
            Request Consultation
          </Link>

          {/* Mobile hamburger — only visible below lg breakpoint */}
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
