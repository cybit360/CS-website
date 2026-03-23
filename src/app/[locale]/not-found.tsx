import Link from "next/link";
import { Search, Home, Briefcase, Phone } from "lucide-react";

const navCards = [
  {
    title: "Home",
    description: "Return to the main page",
    href: "/",
    icon: Home,
  },
  {
    title: "Services",
    description: "Explore our capabilities",
    href: "/what-we-do/services",
    icon: Briefcase,
  },
  {
    title: "Contact",
    description: "Get in touch with us",
    href: "/contact",
    icon: Phone,
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cloud flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Cybersecurity-themed SVG illustration */}
        <div className="mx-auto mb-10 w-56 h-56">
          <svg
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            role="img"
            aria-label="404 security shield illustration"
          >
            {/* Outer glow ring */}
            <circle cx="120" cy="120" r="110" stroke="#13C0F5" strokeWidth="1" opacity="0.2" />
            <circle cx="120" cy="120" r="100" stroke="#13C0F5" strokeWidth="1" opacity="0.1" />

            {/* Shield shape */}
            <path
              d="M120 28L52 64V124C52 168.8 80.4 210.4 120 222C159.6 210.4 188 168.8 188 124V64L120 28Z"
              fill="#0B1C2E"
              stroke="#13C0F5"
              strokeWidth="2.5"
            />

            {/* Inner shield highlight */}
            <path
              d="M120 44L64 74V124C64 162.4 88.2 198 120 208.8C151.8 198 176 162.4 176 124V74L120 44Z"
              fill="#1E2A38"
              stroke="#13C0F5"
              strokeWidth="1"
              opacity="0.5"
            />

            {/* Lock body */}
            <rect x="98" y="110" width="44" height="34" rx="4" fill="#13C0F5" opacity="0.2" stroke="#13C0F5" strokeWidth="2" />

            {/* Lock shackle */}
            <path
              d="M106 110V98C106 90.3 112.3 84 120 84C127.7 84 134 90.3 134 98V110"
              stroke="#13C0F5"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Keyhole */}
            <circle cx="120" cy="124" r="4" fill="#13C0F5" />
            <rect x="118.5" y="126" width="3" height="8" rx="1.5" fill="#13C0F5" />

            {/* 404 text */}
            <text
              x="120"
              y="178"
              textAnchor="middle"
              fill="#FFC766"
              fontSize="28"
              fontWeight="bold"
              fontFamily="Inter, system-ui, sans-serif"
            >
              404
            </text>

            {/* Circuit-like decorative lines */}
            <line x1="52" y1="90" x2="32" y2="90" stroke="#13C0F5" strokeWidth="1" opacity="0.3" />
            <circle cx="28" cy="90" r="3" fill="#13C0F5" opacity="0.3" />
            <line x1="188" y1="90" x2="208" y2="90" stroke="#13C0F5" strokeWidth="1" opacity="0.3" />
            <circle cx="212" cy="90" r="3" fill="#13C0F5" opacity="0.3" />
            <line x1="52" y1="140" x2="28" y2="140" stroke="#13C0F5" strokeWidth="1" opacity="0.3" />
            <circle cx="24" cy="140" r="3" fill="#13C0F5" opacity="0.3" />
            <line x1="188" y1="140" x2="212" y2="140" stroke="#13C0F5" strokeWidth="1" opacity="0.3" />
            <circle cx="216" cy="140" r="3" fill="#13C0F5" opacity="0.3" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-navy mb-3">Page Not Found</h1>

        {/* Description */}
        <p className="text-steel text-lg mb-6 leading-relaxed max-w-md mx-auto">
          The page you are looking for may have been moved, removed, or is
          temporarily unavailable.
        </p>

        {/* Search suggestion */}
        <div className="flex items-center justify-center gap-2 text-steel mb-12">
          <Search className="h-4 w-4 text-accent-cyan" />
          <p className="text-sm">
            Try searching for what you need or navigate using the links below.
          </p>
        </div>

        {/* Navigation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {navCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:border-accent-cyan hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-cloud transition group-hover:bg-accent-cyan/10">
                  <Icon className="h-6 w-6 text-steel transition group-hover:text-accent-cyan" />
                </div>
                <h2 className="text-sm font-semibold text-navy mb-1">
                  {card.title}
                </h2>
                <p className="text-xs text-steel">{card.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Bottom link */}
        <p className="text-sm text-steel">
          Or{" "}
          <Link
            href="/"
            className="font-medium text-accent-cyan underline underline-offset-2 transition hover:text-accent-cyan/80"
          >
            go back to the homepage
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
