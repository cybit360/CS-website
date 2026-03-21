"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[CybitSolutions] Unhandled error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-cloud flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent-amber/20">
          <AlertTriangle className="h-10 w-10 text-accent-amber" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-navy mb-3">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-steel text-lg mb-8 leading-relaxed">
          We encountered an unexpected error while processing your request.
          Please try again, or return to the homepage if the problem persists.
        </p>

        {/* Dev-only error details */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 text-left">
            <p className="text-sm font-semibold text-red-800 mb-1">
              Error Details (Development Only)
            </p>
            <p className="text-sm text-red-700 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-500 mt-2 font-mono">
                Digest: {error.digest}
              </p>
            )}
            {error.stack && (
              <pre className="mt-3 max-h-40 overflow-auto rounded bg-red-100 p-3 text-xs text-red-700">
                {error.stack}
              </pre>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-cyan/90 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          >
            <RotateCcw className="h-4 w-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
