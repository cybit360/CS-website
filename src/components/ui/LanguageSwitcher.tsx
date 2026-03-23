'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing';

const localeConfig = {
  en: { flag: '\u{1F1FA}\u{1F1F8}', label: 'English' },
  es: { flag: '\u{1F1EA}\u{1F1F8}', label: 'Espa\u00f1ol' },
  fr: { flag: '\u{1F1EB}\u{1F1F7}', label: 'Fran\u00e7ais' },
} as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open]);

  function handleLocaleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale as typeof routing.locales[number] });
    setOpen(false);
  }

  const currentConfig = localeConfig[locale as keyof typeof localeConfig] || localeConfig.en;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium transition-colors",
          "text-white/70 hover:text-accent-blue"
        )}
        aria-label={t('label')}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="size-3.5" />
        <span>{currentConfig.flag} {currentConfig.label}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-white/10 bg-navy shadow-xl z-50"
          role="listbox"
          aria-label={t('label')}
        >
          {routing.locales.map((loc) => {
            const config = localeConfig[loc];
            const isActive = locale === loc;
            return (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                role="option"
                aria-selected={isActive}
                className={cn(
                  "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg",
                  isActive
                    ? "bg-accent-blue/10 text-accent-blue font-semibold"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                <span className="text-base">{config.flag}</span>
                <span>{config.label}</span>
                {isActive && (
                  <span className="ml-auto text-accent-blue" aria-hidden="true">
                    &#10003;
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
