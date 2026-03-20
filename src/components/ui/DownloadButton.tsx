"use client";

import { Download } from "lucide-react";

export function DownloadButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-slate transition-colors text-sm"
    >
      <Download className="w-4 h-4" />
      {children}
    </a>
  );
}
