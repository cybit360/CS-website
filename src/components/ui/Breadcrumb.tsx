import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export function Breadcrumb({ items, variant = 'light' }: BreadcrumbProps) {
  const isDark = variant === 'dark';

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm">
        <li>
          <Link href="/" className={cn(
            "transition-colors inline-flex items-center gap-1",
            isDark ? "text-white/60 hover:text-white" : "text-steel hover:text-accent-blue"
          )}>
            <Home className="size-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className={cn("size-3.5", isDark ? "text-white/30" : "text-steel/40")} aria-hidden="true" />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className={cn(
                "transition-colors",
                isDark ? "text-white/60 hover:text-white" : "text-steel hover:text-accent-blue"
              )}>
                {item.label}
              </Link>
            ) : (
              <span className={cn(
                "font-medium",
                isDark ? "text-white/90" : "text-navy"
              )} aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
