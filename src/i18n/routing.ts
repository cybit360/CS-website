import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // No prefix for default locale (en), prefix for es/fr
});
