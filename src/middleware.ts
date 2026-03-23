import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files (images, fonts, etc.)
  // - sw.js (service worker)
  matcher: [
    '/((?!api|_next|images|fonts|sw\\.js|.*\\..*|_vercel).*)',
  ],
};
