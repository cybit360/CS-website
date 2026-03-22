'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}

// Helper to track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track form submissions
export function trackFormSubmission(formName: string) {
  trackEvent('form_submit', 'engagement', formName);
}

// Track CTA clicks
export function trackCTAClick(ctaName: string, destination: string) {
  trackEvent('cta_click', 'engagement', `${ctaName} -> ${destination}`);
}

// Track downloads
export function trackDownload(fileName: string) {
  trackEvent('file_download', 'engagement', fileName);
}
