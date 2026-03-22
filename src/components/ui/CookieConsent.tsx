'use client';

import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cybit-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so the banner slides up after page load
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'all');
    setVisible(false);
  };

  const handleManagePreferences = () => {
    // Placeholder: for now, same as Accept All
    localStorage.setItem(COOKIE_CONSENT_KEY, 'all');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998] transform transition-transform duration-500 ease-out"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="bg-navy border-t border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Left side: Icon + Text */}
          <div className="flex items-start gap-3 text-white sm:items-center">
            <Cookie className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-amber sm:mt-0" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-white/90">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze
              our traffic. By clicking &ldquo;Accept All,&rdquo; you consent to our use of cookies.
            </p>
          </div>

          {/* Right side: Buttons */}
          <div className="flex flex-shrink-0 gap-3">
            <button
              onClick={handleManagePreferences}
              className="cursor-pointer rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Manage Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="cursor-pointer rounded-lg bg-accent-cyan px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent-cyan/90"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
