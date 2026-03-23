import type { Metadata } from "next";
import Link from "next/link";
import { WifiOff, Home } from "lucide-react";
import { ReloadButton } from "@/components/ui/ReloadButton";

export const metadata: Metadata = {
  title: "Offline",
  description: "You appear to be offline. Please check your internet connection.",
};

export default function OfflinePage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-cloud">
          <WifiOff className="h-10 w-10 text-steel" />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-navy">
          You&apos;re Offline
        </h1>

        <p className="mb-8 text-lg text-steel leading-relaxed">
          It looks like you&apos;ve lost your internet connection. Please check
          your network settings and try again.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ReloadButton />

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-bold text-navy hover:bg-cloud transition-colors"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
