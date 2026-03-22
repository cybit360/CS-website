'use client';

import { RefreshCw } from 'lucide-react';

export function ReloadButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-blue px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-accent-blue-dark transition-colors"
    >
      <RefreshCw className="h-4 w-4" />
      Try Again
    </button>
  );
}
