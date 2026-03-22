'use client';

import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

const COOKIE_CONSENT_KEY = 'cybit-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show after a short delay so it slides up naturally
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'essential');
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'dismissed');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998] transition-all duration-500 ease-out"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="bg-navy border-t-2 border-accent-blue/30 px-4 py-5 sm:px-6 lg:px-8 shadow-2xl">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            {/* Left side: Icon + Text */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent-gold" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  We Value Your Privacy
                </p>
                <p className="text-sm leading-relaxed text-white/70">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze
                  our traffic. By clicking &ldquo;Accept All,&rdquo; you consent to our use of cookies.{' '}
                  <Link href="/legal/cookies" className="text-accent-blue hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>

            {/* Right side: Buttons */}
            <div className="flex flex-shrink-0 items-center gap-3">
              <button
                onClick={handleEssentialOnly}
                className="cursor-pointer rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Essential Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="cursor-pointer rounded-lg bg-accent-blue px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-blue-dark shadow-md shadow-accent-blue/25"
              >
                Accept All
              </button>
              <button
                onClick={handleDismiss}
                className="cursor-pointer rounded-md p-1.5 text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
                aria-label="Dismiss cookie banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
