# CybitSolutions Website - Comprehensive Enhancement Prompts

> **Last Updated:** 2026-03-21
> **Current Stack:** Next.js 16, Tailwind CSS v4, TypeScript, react-hook-form, zod, Resend, Vitest
> **Total Pages:** 42 (including 10 service domain pages, 4 legal pages, 2 PDF pages)
> **API Routes:** 4 (contact, newsletter, career-apply, partner)

---

## Table of Contents

1. [Gap Analysis: CybitSolutions vs Industry Standards](#gap-analysis-cybitsolutions-vs-industry-standards)
2. [Gap Analysis: CybitSolutions vs Kaporta Website](#gap-analysis-cybitsolutions-vs-kaporta-website)
3. [Backend & Infrastructure Gaps (Both Sites)](#backend--infrastructure-gaps-both-sites)
4. [CybitSolutions Enhancement Prompts (1-25)](#cybitsolutions-enhancement-prompts)
5. [Kaporta Enhancement Prompts (K1-K6)](#kaporta-enhancement-prompts)
6. [Shared Enhancement Prompts (Both Sites)](#shared-enhancement-prompts-both-sites)
7. [Priority Roadmap](#priority-roadmap)

---

## Gap Analysis: CybitSolutions vs Industry Standards

### Critical Gaps (Must Fix)

| # | Gap | Impact | Effort |
|---|-----|--------|--------|
| 1 | **No real images** - All pages use CSS gradient placeholders instead of professional IT/cybersecurity/government stock photos | High - Looks unprofessional, hurts credibility with government clients | Medium |
| 2 | **No Framer Motion animations** - No scroll-triggered animations, no page transitions, no micro-interactions | Medium - Site feels static compared to competitors like GDIT.com, RTX.com | Medium |
| 3 | **Forms not connected to backend API routes** - Contact, career, partner, newsletter, testimonial forms show client-side success messages without actual API calls or email delivery | Critical - No leads captured, no applications received | High |
| 4 | **No Google Analytics 4 integration** - Vercel Analytics is installed but no GA4 for marketing team | Medium - No marketing funnel data, no conversion tracking | Low |
| 5 | **No dark mode support** - No system preference detection, no manual toggle | Low - Nice-to-have for developer/tech audience | Medium |
| 6 | **No blog detail pages with MDX content** - Insights/news page exists but individual articles have no detail pages | High - No content marketing capability, hurts SEO | High |
| 7 | **No real payment processor integration** - Payment page exists but has no Stripe/PayPal SDK integration | High - Cannot collect invoice payments | High |
| 8 | **No Google Maps on contact page** - Contact page has address text but no interactive map | Low - Minor UX gap | Low |
| 9 | **No image gallery/lightbox** - Case studies and project pages have no image viewing capability | Medium - Cannot showcase project deliverables visually | Medium |
| 10 | **No sitemap.xml generation** - Missing dynamic sitemap for 42+ pages | High - Search engines cannot efficiently crawl site | Low |
| 11 | **No Open Graph images** - Missing dynamic OG images for social sharing | Medium - Poor social media previews | Medium |
| 12 | **Email service not configured** - Resend package installed but no API key, no verified domain, no DNS records | Critical - API routes cannot send emails | Medium |
| 13 | **Chat widget is hardcoded** - ChatWidget.tsx has canned responses, not connected to any AI or live chat service | Medium - Gives false impression of support capability | High |
| 14 | **No 404 custom page** - Missing custom not-found page matching site design | Low - Broken links show generic Next.js 404 | Low |
| 15 | **No loading skeletons on dynamic pages** - loading.tsx may exist but individual pages lack skeleton states | Low - Content shift on slow connections | Low |

### Competitive Gaps vs GovCon Industry Leaders

| Competitor Feature | RTX.com | GDIT.com | Leidos.com | CybitSolutions |
|---|:---:|:---:|:---:|:---:|
| Professional photography | Yes | Yes | Yes | No (gradients) |
| Animated page transitions | Yes | Partial | Yes | No |
| Blog/insights with full articles | Yes | Yes | Yes | No (list only) |
| Career portal with ATS integration | Yes | Yes | Yes | No |
| Contract vehicle lookup | Yes | Yes | Yes | No |
| Investor relations section | Yes | Yes | Yes | N/A (private) |
| Multi-language support | Partial | No | Partial | No |
| Video content / media center | Yes | Yes | Yes | No |
| Interactive capabilities matrix | No | Yes | Yes | No |
| Customer portal / login | Yes | Yes | Yes | No |

---

## Gap Analysis: CybitSolutions vs Kaporta Website

### Features Kaporta Has That CS Should Add

| # | Kaporta Feature | CS Status | Priority |
|---|---|---|---|
| 1 | react-hook-form + zod resolver integration in all forms | Packages installed but forms use basic useState | High |
| 2 | Cleaner header without extra search button | DONE - Search removed from header | -- |
| 3 | Larger, more prominent logo in header | DONE - Logo sizing matched | -- |
| 4 | Reusable Input/Textarea/Select form components in `components/ui/` | Missing - Forms have inline input elements | Medium |
| 5 | Badge component for tags, status labels, certifications | Missing - Using inline styled spans | Low |
| 6 | Skeleton loading component | DONE - loading.tsx files exist | -- |
| 7 | Consistent card component with variants | Partial - Card.tsx exists but not used everywhere | Medium |
| 8 | Cleaner mobile navigation with slide-in panel | Partial - MobileNav.tsx exists but could be smoother | Low |

### Features CS Has That Kaporta Should Add

| # | CS Feature | Kaporta Status |
|---|---|---|
| 1 | Global search modal (Ctrl+K) | Missing |
| 2 | Cookie consent banner (GDPR) | Missing |
| 3 | Chat widget | Missing |
| 4 | Mega menu with dropdowns | Missing |
| 5 | PDF generation pages | Missing |
| 6 | Structured data / JSON-LD | Missing |
| 7 | Vitest test setup | Missing |
| 8 | Security headers in next.config.ts | Missing |
| 9 | Rate limiting on API routes | Missing |
| 10 | Newsletter signup component | Missing |

---

## Backend & Infrastructure Gaps (Both Sites)

| # | Gap | Description | Recommended Solution |
|---|---|---|---|
| 1 | **No database** | Form submissions are not persisted anywhere | PostgreSQL via Supabase or PlanetScale + Prisma ORM |
| 2 | **No authentication system** | No admin login, no protected routes | NextAuth.js v5 or Clerk |
| 3 | **No file storage** | Resume uploads in career form have nowhere to go | Vercel Blob or AWS S3 |
| 4 | **No headless CMS** | All content hardcoded in TSX files and data/ folder | Sanity v3 or Contentful |
| 5 | **No CI/CD pipeline** | No automated checks on pull requests | GitHub Actions |
| 6 | **No E2E testing** | Only unit test setup (Vitest), no browser tests | Playwright |
| 7 | **No monitoring/error tracking** | Errors in production go unnoticed | Sentry |
| 8 | **No Redis/caching layer** | Rate limiting uses in-memory Map (resets on deploy) | Upstash Redis |
| 9 | **No WebSocket support** | Chat widget cannot do real-time messaging | Socket.io or Pusher |
| 10 | **No email service configured** | Resend installed but RESEND_API_KEY not set, domain not verified | Resend with DNS verification |
| 11 | **No CDN for static assets** | Images served from Next.js directly | Cloudflare R2 or Vercel Image Optimization |
| 12 | **No backup strategy** | No database backups, no content versioning | Automated Supabase backups |
| 13 | **No staging environment** | Only local dev and production | Vercel preview deployments |
| 14 | **No API documentation** | API routes undocumented | Swagger/OpenAPI spec |
| 15 | **No rate limiting persistence** | In-memory rate limiter resets on each deployment | Upstash Redis rate limiter |

---

## CybitSolutions Enhancement Prompts

### Prompt 1: Connect All Forms to API Routes

```
Connect all CybitSolutions frontend forms to the existing API routes with proper validation and UX:

FORMS TO CONNECT:
1. Contact form (src/components/ui/ContactForm.tsx) → POST /api/contact
2. Career application (src/app/careers/open-roles/page.tsx) → POST /api/career-apply
3. Partner inquiry (src/app/contact/partner/page.tsx) → POST /api/partner
4. Newsletter signup (src/components/ui/NewsletterForm.tsx) → POST /api/newsletter
5. Testimonial submission (src/app/careers/testimonials/page.tsx) → CREATE new POST /api/testimonial route

FOR EACH FORM:
- Convert from useState to react-hook-form with zodResolver (packages already installed)
- Define Zod schema matching the API route's expected payload
- Add proper loading state (disable button, show spinner)
- Add error handling with field-level error messages
- Add toast/notification on success and error
- Ensure proper FormData handling for file uploads (career form resume)

CREATE REUSABLE FORM COMPONENTS:
- src/components/ui/Input.tsx (label, error message, required indicator)
- src/components/ui/Textarea.tsx (label, error message, character count)
- src/components/ui/Select.tsx (label, error message, placeholder)
- src/components/ui/FileUpload.tsx (drag-drop zone, file type validation, size limit)
- src/components/ui/Toast.tsx (success/error/info variants, auto-dismiss)

VALIDATION RULES:
- Email: valid format required
- Phone: optional, US format validation
- Name: min 2 chars, max 100 chars
- Message: min 10 chars, max 5000 chars
- Resume: .pdf/.doc/.docx only, max 5MB
- All required fields clearly marked with asterisk

Test each form end-to-end after connecting.
```

### Prompt 2: Add Framer Motion Animations

```
Add Framer Motion to CybitSolutions for professional, performant animations:

INSTALL:
npm install framer-motion

CREATE ANIMATION WRAPPER COMPONENTS in src/components/animations/:

1. FadeIn.tsx - Fade in on scroll (opacity 0→1, translateY 20→0)
   Props: delay, duration, direction (up/down/left/right)

2. StaggerContainer.tsx - Parent that staggers children animations
   Props: staggerDelay (default 0.1s), delayChildren

3. CountUp.tsx - Animated number counter for statistics
   Props: from, to, duration, prefix, suffix
   Use in ProofPoints.tsx and StatCounter.tsx

4. SlideIn.tsx - Slide in from edge of viewport
   Props: direction, delay, duration

5. ScaleOnHover.tsx - Scale up on hover with shadow
   Props: scale (default 1.03), shadow

6. PageTransition.tsx - Wrap page content for route transitions
   Use AnimatePresence in layout.tsx

APPLY ANIMATIONS TO:
- Homepage: Hero text fade-in, stats counter animation, service cards stagger
- All SectionHeading components: Fade in on scroll
- All Card grids: Stagger animation (services, case studies, team members)
- MegaMenu: Slide down with spring physics (stiffness: 300, damping: 30)
- Mobile nav: Slide in from right
- CTA buttons: Subtle scale on hover (1.02)
- Footer: Fade in sections on scroll
- Page transitions: Fade between routes (duration: 0.3s)

PERFORMANCE:
- Use will-change: transform on animated elements
- Use layout animations sparingly
- Respect prefers-reduced-motion media query
- Lazy load animation components below the fold
```

### Prompt 3: Replace All Placeholder Images with Professional Photography

```
Replace all CSS gradient placeholder images with professional stock photos:

IMAGE REQUIREMENTS:
- Format: WebP with JPEG fallback
- Sizes: Hero (1920x1080), Card (800x600), Thumbnail (400x300), Team (400x400)
- All images must have descriptive alt text for accessibility
- Use next/image with blur placeholder (blurDataURL)
- Optimize: quality 85, responsive sizes attribute

FOLDER STRUCTURE:
public/images/
  hero/          - Homepage and section hero images
  services/      - One image per service domain (10 total)
  case-studies/  - Project/agency imagery
  team/          - Leadership headshots
  about/         - Office, collaboration, culture photos
  partners/      - Partner/certification logos (already partial)
  backgrounds/   - Subtle textures, patterns

IMAGE ASSIGNMENTS:
- Homepage hero: Cyber operations center or secure data center
- Cybersecurity: SOC analysts at monitors, shield/lock imagery
- Cloud Computing: Server racks with blue lighting, cloud architecture diagrams
- IT Infrastructure: Network cables, server room, rack-mounted equipment
- Software DevOps: Code on screen, CI/CD pipeline visualization
- Data Analytics: Dashboard visualization, data flow graphics
- AI & Automation: Neural network visualization, robotic process
- Enterprise IT: Modern office with technology, help desk
- Digital Transformation: Government building with digital overlay
- Emerging Tech: IoT devices, blockchain visualization, quantum computing
- Industry-Specific: Military tech, healthcare IT, financial systems
- Case studies: Pentagon, DoD seal, agency buildings (use public domain gov images)
- Team: Professional placeholder silhouettes until real headshots available

REFERENCE SITES for image style:
- RTX.com (Raytheon) - Dark, dramatic tech photography
- GDIT.com - Clean, professional government IT imagery
- Leidos.com - Modern, human-centered tech photos
- BoozAllen.com - Polished consulting imagery
- EpochConcepts.com - GovCon IT aesthetic

Update the PageImage.tsx component to handle real images with proper loading states.
For development, use high-quality free stock from Unsplash/Pexels until licensed images are purchased.
```

### Prompt 4: Implement Dark Mode

```
Add dark mode to CybitSolutions with system preference detection and manual toggle:

SETUP:
- Add darkMode: 'class' strategy (Tailwind v4 equivalent)
- Create ThemeProvider component using React context
- Persist preference in localStorage key 'theme'
- Default to system preference (prefers-color-scheme)

TOGGLE BUTTON:
- Add Sun/Moon icon toggle in header utility bar (right side, before any existing buttons)
- Smooth icon transition animation
- Accessible: aria-label="Toggle dark mode"

COLOR MAPPING (dark mode):
- bg-white → bg-navy-950 (#0a1628)
- bg-cloud (#F4F7FA) → bg-navy-900 (#0d1f35)
- bg-navy (#0B1C2E) → bg-navy-950 (#0a1628)
- text-navy → text-gray-100
- text-steel → text-gray-400
- bg-slate (#1E2A38) → bg-slate-800
- Card backgrounds: bg-white → bg-navy-800 with subtle border
- Accent colors UNCHANGED: accent-cyan (#13C0F5), accent-amber (#FFC766)

COMPONENTS TO UPDATE:
- Header.tsx - Dark header bg, lighter text
- Footer.tsx - Already dark, minimal changes
- HeroSection.tsx - Adjust overlay opacity
- Card.tsx - Dark card variant
- All page.tsx files - Section background alternation
- ContactForm.tsx - Input field backgrounds
- ChatWidget.tsx - Dark chat bubble
- CookieConsent.tsx - Dark consent bar
- MegaMenu.tsx - Dark dropdown
- GlobalSearch.tsx - Dark modal
- Button.tsx - Ensure contrast in dark mode

ENSURE:
- WCAG AA contrast ratios in both modes (4.5:1 for text, 3:1 for large text)
- No flash of wrong theme on page load (use script in <head>)
- Smooth 200ms transition on theme switch
- All form inputs readable in dark mode
- Code blocks / technical content properly styled
```

### Prompt 5: Add Database with Prisma & Supabase

```
Set up database and ORM for CybitSolutions:

INSTALL:
npm install prisma @prisma/client
npx prisma init

DATABASE: Supabase (PostgreSQL)

PRISMA SCHEMA (prisma/schema.prisma):

model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  company   String?
  subject   String
  message   String
  status    ContactStatus @default(NEW)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model NewsletterSubscriber {
  id           String   @id @default(cuid())
  email        String   @unique
  subscribedAt DateTime @default(now())
  unsubscribed Boolean  @default(false)
}

model JobApplication {
  id         String   @id @default(cuid())
  name       String
  email      String
  phone      String?
  role       String
  resumeUrl  String?
  coverLetter String?
  status     ApplicationStatus @default(RECEIVED)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

model PartnerInquiry {
  id          String   @id @default(cuid())
  companyName String
  contactName String
  email       String
  phone       String?
  type        String
  message     String
  status      ContactStatus @default(NEW)
  createdAt   DateTime @default(now())
}

model Testimonial {
  id        String   @id @default(cuid())
  name      String
  role      String
  company   String
  content   String
  rating    Int      @default(5)
  approved  Boolean  @default(false)
  createdAt DateTime @default(now())
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      UserRole @default(VIEWER)
  createdAt DateTime @default(now())
}

enum ContactStatus { NEW, REVIEWED, RESPONDED, CLOSED }
enum ApplicationStatus { RECEIVED, REVIEWING, INTERVIEW, OFFERED, REJECTED }
enum UserRole { ADMIN, EDITOR, VIEWER }

UPDATE API ROUTES:
- /api/contact → Save to Contact table, then send email
- /api/newsletter → Save to NewsletterSubscriber table
- /api/career-apply → Save to JobApplication table with resume URL
- /api/partner → Save to PartnerInquiry table

CREATE:
- src/lib/prisma.ts - Singleton Prisma client
- .env.local template with DATABASE_URL

Run: npx prisma generate && npx prisma db push
```

### Prompt 6: Add Authentication & Admin Dashboard

```
Set up authentication and admin dashboard for CybitSolutions:

INSTALL:
npm install next-auth@beta @auth/prisma-adapter

SETUP NextAuth.js v5:
- src/auth.ts - Auth configuration
- src/app/api/auth/[...nextauth]/route.ts - Auth API route
- Providers: Credentials (email/password) + Google OAuth
- Use Prisma adapter for session/user storage

ADMIN DASHBOARD:
Create src/app/admin/ with these pages:

/admin (dashboard)
  - Total contacts this month
  - New applications count
  - Newsletter subscriber count
  - Recent submissions list

/admin/contacts
  - Table of all contact form submissions
  - Filter by status (New, Reviewed, Responded, Closed)
  - Click to view full message
  - Update status dropdown
  - Reply via email button

/admin/applications
  - Table of job applications
  - Filter by role, status
  - Download resume link
  - Update application status
  - Notes field for each application

/admin/newsletter
  - Subscriber list with email and date
  - Export to CSV button
  - Unsubscribe toggle

/admin/testimonials
  - Pending testimonials for approval
  - Approve/reject buttons
  - Edit content before publishing

MIDDLEWARE:
- src/middleware.ts - Protect /admin/* routes
- Redirect unauthenticated users to /admin/login
- Role-based access: ADMIN can do everything, EDITOR can view/update, VIEWER can only view

UI:
- Clean admin layout with sidebar navigation
- Use existing design system (navy, cyan accents)
- Responsive tables with sorting and pagination
- Search/filter on all list pages
```

### Prompt 7: Implement Stripe Payment Processing

```
Integrate Stripe payment processing into CybitSolutions payment page:

INSTALL:
npm install @stripe/stripe-js stripe

ENVIRONMENT VARIABLES:
- STRIPE_SECRET_KEY
- STRIPE_PUBLISHABLE_KEY
- STRIPE_WEBHOOK_SECRET

API ROUTES:
1. POST /api/stripe/create-checkout-session
   - Accept: amount, invoiceId, customerEmail, description
   - Create Stripe Checkout Session
   - Return session URL
   - Support: card, us_bank_account (ACH), apple_pay, google_pay

2. POST /api/stripe/webhook
   - Verify Stripe signature
   - Handle events: checkout.session.completed, payment_intent.succeeded, payment_intent.failed
   - Update payment status in database
   - Send confirmation email via Resend

3. GET /api/stripe/invoice/[id]
   - Look up invoice by ID
   - Return invoice details and payment status

FRONTEND (src/app/contact/payment/page.tsx):
- Replace current static payment page with functional form
- Invoice number input field
- Amount display after invoice lookup
- "Pay Now" button → redirects to Stripe Checkout
- Support payment methods: Credit/Debit Card, ACH Bank Transfer, Apple Pay, Google Pay
- Payment confirmation page at /contact/payment/success
- Payment failure page at /contact/payment/cancelled

SECURITY:
- Validate all amounts server-side
- Idempotency keys on payment creation
- Log all payment events
- PCI compliance via Stripe Checkout (no card data touches our server)
```

### Prompt 8: Add Blog/Insights Detail Pages with MDX

```
Add full blog/article detail pages to the Insights section:

INSTALL:
npm install @next/mdx @mdx-js/loader @mdx-js/react remark-gfm rehype-highlight rehype-slug

CONTENT STRUCTURE:
content/blog/
  2026-03-15-zero-trust-architecture.mdx
  2026-03-01-fedramp-compliance-guide.mdx
  2026-02-15-ai-in-government.mdx
  ...

MDX FRONTMATTER:
---
title: "Zero Trust Architecture: A Government Guide"
slug: "zero-trust-architecture"
date: "2026-03-15"
author: "Dr. Adupe Lace"
category: "Cybersecurity"
tags: ["zero-trust", "NIST", "government"]
excerpt: "A comprehensive guide to implementing Zero Trust..."
image: "/images/blog/zero-trust.webp"
readTime: "8 min read"
---

PAGES TO CREATE:
1. /insights/news/[slug]/page.tsx - Individual article page
   - Hero with title, date, author, read time
   - MDX rendered content with custom components
   - Table of contents sidebar (auto-generated from headings)
   - Author bio card
   - Related articles section
   - Social share buttons (LinkedIn, Twitter/X, email)
   - Previous/Next article navigation

2. Update /insights/news/page.tsx
   - Filter by category
   - Filter by tag
   - Search within articles
   - Pagination (10 per page)
   - Featured article at top

MDX CUSTOM COMPONENTS:
- Callout (info, warning, tip variants)
- CodeBlock with syntax highlighting
- ImageWithCaption
- ComparisonTable
- StepByStep guide component

CREATE SEED CONTENT:
Write 5 starter articles relevant to CybitSolutions:
1. "Zero Trust Architecture: Implementation Guide for Federal Agencies"
2. "FedRAMP Authorization: What Contractors Need to Know in 2026"
3. "AI in Government: Responsible Adoption Frameworks"
4. "Cloud Migration Strategies for DoD Environments"
5. "CMMC 2.0 Compliance Roadmap for Small Businesses"
```

### Prompt 9: Add Google Analytics 4

```
Integrate Google Analytics 4 alongside existing Vercel Analytics:

SETUP:
1. Add GA4 measurement ID to environment: NEXT_PUBLIC_GA4_ID

2. Create src/components/analytics/GoogleAnalytics.tsx
   - Load gtag.js script via next/script (strategy: afterInteractive)
   - Initialize with measurement ID
   - Only load in production

3. Create src/lib/analytics.ts - Unified analytics helper
   - trackPageView(url: string)
   - trackEvent(action: string, category: string, label?: string, value?: number)
   - trackFormSubmission(formName: string)
   - trackDownload(fileName: string)
   - trackOutboundLink(url: string)

4. Add to layout.tsx (alongside existing Vercel Analytics)

TRACK THESE EVENTS:
- Form submissions: contact, newsletter, career, partner, testimonial
- PDF downloads: capability statement, company profile
- Outbound links: partner sites, social media
- Search queries: global search modal usage
- Chat widget: open, message sent
- Cookie consent: accepted, declined
- Navigation: mega menu interactions
- Career: job listing views, application starts

CONSENT:
- Respect cookie consent preference
- Only initialize GA4 if user has accepted analytics cookies
- Update CookieConsent.tsx to control GA4 loading
```

### Prompt 10: Add GitHub Actions CI/CD Pipeline

```
Set up GitHub Actions CI/CD for CybitSolutions:

CREATE .github/workflows/ci.yml:

name: CI
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - Checkout
      - Setup Node 22
      - npm ci
      - npm run lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - Checkout
      - Setup Node 22
      - npm ci
      - npx tsc --noEmit

  test:
    runs-on: ubuntu-latest
    steps:
      - Checkout
      - Setup Node 22
      - npm ci
      - npm run test
      - Upload coverage report

  build:
    runs-on: ubuntu-latest
    needs: [lint, typecheck, test]
    steps:
      - Checkout
      - Setup Node 22
      - npm ci
      - npm run build

  lighthouse:
    runs-on: ubuntu-latest
    needs: [build]
    if: github.event_name == 'pull_request'
    steps:
      - Run Lighthouse CI
      - Assert: Performance >= 90, Accessibility >= 95, Best Practices >= 90, SEO >= 95
      - Comment results on PR

CREATE .github/workflows/deploy.yml:
- Trigger on push to main (after CI passes)
- Deploy to Vercel via Vercel CLI
- Run smoke tests against production URL
- Notify on failure (Slack webhook or email)

CREATE .github/workflows/dependabot.yml:
- Weekly dependency update checks
- Auto-merge patch updates
- Review required for minor/major updates

Also create:
- .github/PULL_REQUEST_TEMPLATE.md
- .github/ISSUE_TEMPLATE/bug_report.md
- .github/ISSUE_TEMPLATE/feature_request.md
```

### Prompt 11: Add Comprehensive Vitest Unit Tests

```
Add comprehensive unit tests for CybitSolutions (target 80% coverage):

TEST STRUCTURE:
src/lib/__tests__/
  utils.test.ts              - cn() utility function
  structured-data.test.ts    - JSON-LD generation
  search-index.test.ts       - Search matching logic

src/app/api/__tests__/
  contact.test.ts            - Contact API route
  newsletter.test.ts         - Newsletter API route
  career-apply.test.ts       - Career application API route
  partner.test.ts            - Partner inquiry API route

src/components/__tests__/
  Button.test.tsx            - Button variants, sizes, disabled state
  Card.test.tsx              - Card rendering, hover class
  HeroSection.test.tsx       - Hero with title, subtitle
  Accordion.test.tsx         - Expand/collapse behavior
  Tabs.test.tsx              - Tab switching
  ContactForm.test.tsx       - Form validation, submission
  NewsletterForm.test.tsx    - Email validation, submit
  ChatWidget.test.tsx        - Open/close, message handling
  CookieConsent.test.tsx     - Accept/decline, localStorage
  GlobalSearch.test.tsx      - Search input, results filtering
  StatCounter.test.tsx       - Number display

TEST PATTERNS:
- API routes: Mock Request/Response, test validation, test rate limiting, test error cases
- Components: Render, user interaction, state changes, accessibility (role, aria)
- Use @testing-library/react and @testing-library/jest-dom (already installed)
- Mock external services (Resend, fetch)

CONFIGURATION:
- Update vitest.config.ts with coverage thresholds: { lines: 80, functions: 80, branches: 75 }
- Add test:coverage script to package.json (already exists)
- Add setupTests.ts for common mocks and jest-dom matchers
```

### Prompt 12: Add Playwright E2E Tests

```
Add Playwright end-to-end tests for CybitSolutions:

INSTALL:
npm install -D @playwright/test
npx playwright install

CREATE playwright.config.ts:
- Base URL: http://localhost:3000
- Browsers: chromium, firefox, webkit
- Screenshots on failure
- Video on first retry
- Retries: 2

TEST FILES in e2e/:

e2e/homepage.spec.ts
- Page loads with correct title and meta
- Hero section visible with CTA buttons
- Stats/proof points section renders
- Service domains grid displays all 10
- Case studies section loads
- Footer links work
- Newsletter form in footer

e2e/navigation.spec.ts
- Desktop: All 6 mega menu items open dropdowns
- Desktop: All subpage links navigate correctly
- Mobile: Hamburger menu opens
- Mobile: All navigation items accessible
- Logo links to homepage
- Breadcrumbs work on subpages

e2e/contact.spec.ts
- Contact form renders all fields
- Validation shows errors on empty submit
- Valid submission shows success message
- Partner form works similarly

e2e/search.spec.ts
- Ctrl+K opens search modal
- Typing filters results
- Clicking result navigates to page
- Escape closes modal

e2e/careers.spec.ts
- Job listings display
- Job detail expands
- Application form renders
- File upload works

e2e/accessibility.spec.ts
- Tab navigation through all interactive elements
- Focus visible on all focusable elements
- Skip to main content link works
- ARIA landmarks present (nav, main, footer)
- Images have alt text

e2e/responsive.spec.ts
- Test at 375px (mobile), 768px (tablet), 1440px (desktop)
- Navigation adapts correctly
- Cards stack on mobile
- Images resize appropriately

Add npm scripts:
"e2e": "playwright test"
"e2e:headed": "playwright test --headed"
"e2e:ui": "playwright test --ui"
```

### Prompt 13: Integrate Sanity CMS

```
Integrate Sanity v3 headless CMS for content management:

INSTALL:
npm install sanity @sanity/client @sanity/image-url next-sanity

SANITY STUDIO:
- Set up at /studio route (src/app/studio/[[...tool]]/page.tsx)
- Configure sanity.config.ts at project root

SCHEMAS (sanity/schemas/):

1. blogPost.ts
   - title, slug, author (reference), publishedAt, excerpt
   - body (portable text with custom blocks)
   - mainImage (with alt text, caption)
   - categories (array of references)
   - tags (array of strings)
   - seo (title, description, ogImage)

2. caseStudy.ts
   - title, slug, client, agency
   - challenge, solution, results
   - technologies (array of strings)
   - images (gallery)
   - contractValue, duration
   - testimonial (embedded)

3. jobListing.ts
   - title, slug, department, location, type (full-time/contract)
   - description (portable text)
   - requirements, qualifications
   - salary range, clearance level
   - active (boolean), postedDate, closingDate

4. teamMember.ts
   - name, role, bio, image
   - certifications, clearanceLevel
   - linkedin, email
   - order (for sort)

5. event.ts
   - title, slug, date, endDate
   - location (virtual/in-person), venue
   - description, registrationUrl
   - speakers (array of references to teamMember)

INTEGRATION:
- src/lib/sanity.ts - Client configuration
- src/lib/sanity.queries.ts - GROQ queries
- Update /insights/news to fetch from Sanity
- Update /careers/open-roles to fetch from Sanity
- Update /who-we-are/leadership to fetch from Sanity
- ISR with revalidation: revalidate = 60 (1 minute)
- Preview mode for draft content

ENVIRONMENT:
- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET=production
- SANITY_API_TOKEN (for preview/mutations)
```

### Prompt 14: Add Google Maps to Contact Page

```
Add Google Maps to the CybitSolutions contact page:

OPTION A - Google Maps Embed (Simple, no API key cost):
- Add responsive iframe embed to src/app/contact/page.tsx
- Show CybitSolutions office location
- Full-width map below contact form
- Styled to match site design (consider Snazzy Maps dark theme)

OPTION B - Interactive Map (Better UX, requires API key):
npm install @vis.gl/react-google-maps

- Create src/components/ui/GoogleMap.tsx
- Custom marker with company logo
- Info window with: company name, address, phone, hours
- "Get Directions" button linking to Google Maps
- Dark map theme matching site navy color scheme
- Responsive: full-width, 400px height desktop, 300px mobile

ENVIRONMENT:
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

LOCATION:
- CybitSolutions office address (use address from contact page)
- Fallback: Washington D.C. metro area if address not specified

Add to contact page below the contact form section.
```

### Prompt 15: Add Image Gallery & Lightbox

```
Add professional image gallery with lightbox to CybitSolutions:

INSTALL:
npm install yet-another-react-lightbox

CREATE COMPONENTS:

1. src/components/ui/ImageGallery.tsx
   - Grid layout (2-4 columns responsive)
   - Thumbnail images with hover overlay
   - Click to open lightbox
   - Category filter tabs
   - Lazy loading with blur placeholders

2. src/components/ui/Lightbox.tsx
   - Full-screen image viewer
   - Previous/Next navigation
   - Keyboard support (arrow keys, Escape)
   - Touch/swipe on mobile
   - Image caption and description
   - Zoom capability
   - Download button
   - Counter (3 of 12)

3. src/components/ui/BeforeAfter.tsx
   - Drag slider comparison component
   - Before/After labels
   - Touch support

USE IN:
- /what-we-do/past-performance - Project deliverable photos
- /who-we-are/about - Office and team photos
- /who-we-are/social-impact - Community engagement photos
- Individual case study pages - Project screenshots

CATEGORIES:
- Projects & Deliverables
- Team & Culture
- Events & Community
- Office & Facilities
- Awards & Recognition
```

### Prompt 16: Add Multi-language Support (i18n)

```
Add internationalization to CybitSolutions:

INSTALL:
npm install next-intl

SETUP:
- Default locale: en
- Supported locales: en, es, fr
- URL pattern: /en/about, /es/about, /fr/about

CONFIGURATION:
- src/i18n/request.ts - Locale detection
- src/i18n/routing.ts - Routing configuration
- Update next.config.ts with i18n plugin
- Update middleware.ts for locale detection

TRANSLATION FILES:
messages/
  en.json - English (primary, all content)
  es.json - Spanish
  fr.json - French

TRANSLATE (at minimum):
- Navigation menu items (all 6 sections + subpages)
- Homepage hero section, CTAs
- Footer content
- Contact form labels and validation messages
- Common UI strings (Read More, Submit, Loading, etc.)
- Cookie consent text
- Error messages

LANGUAGE SWITCHER:
- Dropdown in header utility bar
- Flag icons + language name
- Persists selection in cookie
- Updates URL prefix

SEO:
- Add hreflang tags to all pages
- Separate sitemap per locale
- Localized meta descriptions
```

### Prompt 17: Add Sentry Error Tracking & Monitoring

```
Set up Sentry for error tracking and performance monitoring:

INSTALL:
npx @sentry/wizard@latest -i nextjs

CONFIGURATION:
- sentry.client.config.ts
- sentry.server.config.ts
- sentry.edge.config.ts
- Update next.config.ts with Sentry plugin

SETTINGS:
- DSN from environment: SENTRY_DSN
- Source maps uploaded on build
- Performance monitoring: tracesSampleRate = 0.1 (10% of transactions)
- Session replay: replaysSessionSampleRate = 0.1
- Error replay: replaysOnErrorSampleRate = 1.0

CUSTOM ERROR TRACKING:
- Wrap API routes with Sentry.withScope for context
- Add user context on authenticated requests
- Track form validation errors as breadcrumbs
- Monitor API route response times
- Custom performance marks for:
  - Page load time
  - Form submission duration
  - Search query performance
  - Image load times

ERROR BOUNDARIES:
- Create src/components/ErrorBoundary.tsx
- Sentry.ErrorBoundary with fallback UI
- "Report Feedback" button on error pages
- Update error.tsx and not-found.tsx to report to Sentry

ALERTS:
- Email notification on new error types
- Slack webhook for critical errors
- Weekly error digest report
```

### Prompt 18: Configure Email Service (Resend)

```
Configure Resend email service for CybitSolutions:

DOMAIN VERIFICATION:
1. Add domain: info@cybitsolutions.net in Resend dashboard
2. Configure DNS records:
   - SPF: v=spf1 include:resend.com ~all
   - DKIM: Resend-provided DKIM record
   - DMARC: v=DMARC1; p=quarantine; rua=mailto:admin@cybitsolutions.net
3. Set RESEND_API_KEY in .env.local

CREATE EMAIL TEMPLATES in src/lib/email-templates/:

1. contact-confirmation.tsx
   - To: submitter
   - Subject: "Thank you for contacting CybitSolutions"
   - Body: Confirmation with reference number, expected response time
   - CybitSolutions branded header/footer

2. contact-notification.tsx
   - To: info@cybitsolutions.net
   - Subject: "New Contact Form Submission: {subject}"
   - Body: Full form data, reply-to set to submitter email

3. application-receipt.tsx
   - To: applicant
   - Subject: "Application Received: {role} at CybitSolutions"
   - Body: Confirmation, next steps, timeline

4. application-notification.tsx
   - To: hr@cybitsolutions.net
   - Subject: "New Application: {name} for {role}"
   - Body: Applicant info, resume link, quick action buttons

5. newsletter-welcome.tsx
   - To: subscriber
   - Subject: "Welcome to CybitSolutions Insights"
   - Body: Welcome message, what to expect, unsubscribe link

6. partner-inquiry.tsx
   - To: partnerships@cybitsolutions.net
   - Subject: "New Partner Inquiry: {companyName}"
   - Body: Company info, partnership type, message

7. payment-confirmation.tsx
   - To: payer
   - Subject: "Payment Confirmation - Invoice #{invoiceId}"
   - Body: Amount, date, invoice reference, receipt link

USE REACT EMAIL COMPONENTS:
npm install @react-email/components
- Styled HTML emails that render in all clients
- CybitSolutions branding (navy header, cyan accents)
- Mobile responsive
- Preview at /api/email-preview (dev only)

UPDATE ALL API ROUTES to use these templates.
```

### Prompt 19: AI-Powered Chat Widget

```
Upgrade CybitSolutions chat widget to use AI for intelligent responses:

APPROACH: Use OpenAI GPT-4 or Anthropic Claude API

API ROUTE:
POST /api/chat
- Accept: message (string), conversationHistory (array)
- System prompt: "You are a helpful assistant for CybitSolutions, a veteran-owned
  IT government contracting firm. Answer questions about our services, capabilities,
  certifications, and how to work with us. Be professional and concise.
  If asked about pricing or specific contracts, direct them to the contact form."
- Stream response using ReadableStream
- Rate limit: 10 messages per session

KNOWLEDGE BASE:
- Feed all service domain descriptions
- Company capabilities and certifications
- FAQ answers (contracts, clearances, NAICS codes)
- Contact information and office hours

UPDATE ChatWidget.tsx:
- Replace hardcoded responses with API calls
- Streaming text display (typewriter effect)
- Conversation history maintained in session
- Suggested questions as quick-reply buttons:
  - "What services do you offer?"
  - "How do I request a quote?"
  - "What are your certifications?"
  - "Tell me about your past performance"
- "Talk to a human" button → opens contact form
- Typing indicator while AI responds
- Error handling with fallback to static responses

ENVIRONMENT:
- OPENAI_API_KEY or ANTHROPIC_API_KEY
- CHAT_MODEL=gpt-4-turbo or claude-3-sonnet

FALLBACK:
- If API key not configured, use existing hardcoded responses
- If rate limited, show "Please use our contact form for further questions"
```

### Prompt 20: Performance Optimization

```
Optimize CybitSolutions for Lighthouse 95+ scores:

CODE SPLITTING:
- Dynamic import ChatWidget (loaded on user interaction, not page load)
- Dynamic import GlobalSearch (loaded on Ctrl+K)
- Dynamic import CookieConsent (loaded after 2s delay)
- Dynamic import MegaMenu dropdown content
- Lazy load all below-the-fold sections

IMAGE OPTIMIZATION:
- Convert all images to WebP format
- Add blur placeholder (blurDataURL) to all next/image
- Responsive sizes attribute on all images
- Priority loading only for above-the-fold hero images
- Implement LQIP (Low Quality Image Placeholder)

CSS OPTIMIZATION:
- Remove unused Tailwind classes (already handled by v4)
- Critical CSS inlined in <head>
- Defer non-critical stylesheets

JAVASCRIPT:
- Audit bundle size with @next/bundle-analyzer
- Tree shake unused lucide-react icons (import individually)
- Remove unused dependencies from package.json

CACHING:
- Add Cache-Control headers to static assets
- Implement stale-while-revalidate for API responses
- Service worker for offline capability (next-pwa)

FONTS:
- Use next/font with display: swap (likely already done)
- Preload critical font weights only
- Subset fonts to Latin characters

CORE WEB VITALS TARGETS:
- LCP < 2.5s (largest contentful paint)
- FID < 100ms (first input delay)
- CLS < 0.1 (cumulative layout shift)
- TTFB < 600ms (time to first byte)
- INP < 200ms (interaction to next paint)

MONITORING:
- Add Web Vitals reporting via Vercel Analytics (already installed)
- Create performance budget in CI
```

### Prompt 21: Comprehensive Accessibility Audit & Fix

```
Conduct and fix comprehensive accessibility audit for CybitSolutions:

AUTOMATED TESTING:
npm install -D axe-core @axe-core/playwright

Run axe-core on every page and fix all violations:
- Critical and serious violations: fix immediately
- Moderate: fix in this pass
- Minor: document for future fix

KEYBOARD NAVIGATION:
- Tab through every interactive element on every page
- Ensure visible focus indicator (2px cyan outline) on all focusable elements
- Skip to main content link (visible on focus)
- Escape closes all modals (search, chat, mega menu)
- Arrow keys navigate within mega menu dropdowns
- Enter/Space activate buttons and links

SCREEN READER:
- All images have descriptive alt text (not "image" or "photo")
- All form inputs have associated labels (not just placeholder text)
- All buttons have accessible names
- ARIA landmarks: banner, navigation, main, contentinfo
- aria-live="polite" on: toast notifications, form success/error messages, chat messages
- aria-expanded on: accordion, mega menu, mobile nav, chat widget
- aria-current="page" on active navigation items
- Role="alert" on form validation errors

COLOR CONTRAST:
- Verify all text meets 4.5:1 ratio (normal text) and 3:1 (large text)
- Check: accent-cyan on white, accent-cyan on navy, steel text on white, steel text on cloud
- Verify focus indicators meet 3:1 against adjacent colors
- Test in both light mode (and dark mode if implemented)

SEMANTIC HTML:
- Verify heading hierarchy (h1 → h2 → h3, no skips)
- Use <nav> for all navigation
- Use <main> for primary content
- Use <article> for blog posts, case studies
- Use <aside> for sidebar content
- Use <fieldset>/<legend> for form groups
- Use <button> not <div onClick> everywhere

RESPONSIVE ACCESSIBILITY:
- Touch targets minimum 44x44px on mobile
- No horizontal scrolling at any viewport
- Zoom to 200% without content loss
- Text resizable without breaking layout

CREATE: src/app/legal/accessibility/page.tsx update
- VPAT (Voluntary Product Accessibility Template) statement
- Known limitations
- How to report accessibility issues
```

### Prompt 22: Add Sitemap & Enhanced SEO

```
Add dynamic sitemap generation and enhanced SEO to CybitSolutions:

SITEMAP:
Create src/app/sitemap.ts:
- Generate sitemap.xml with all 42+ pages
- Include lastModified dates
- Set changeFrequency: homepage weekly, services monthly, news daily
- Priority: homepage 1.0, services 0.8, legal 0.3
- If CMS integrated, fetch dynamic content URLs

ROBOTS.TXT:
Create src/app/robots.ts:
- Allow all crawlers
- Disallow: /api/, /admin/, /studio/
- Sitemap reference

ENHANCED META:
- Dynamic Open Graph images per page (using next/og or @vercel/og)
- Twitter card meta tags
- Canonical URLs on all pages
- Structured data (JSON-LD) for:
  - Organization (already exists, verify)
  - WebSite with SearchAction
  - BreadcrumbList on all subpages
  - Service on service domain pages
  - JobPosting on career pages
  - Article on blog posts
  - FAQPage where applicable
  - LocalBusiness with address and hours

PERFORMANCE SEO:
- Verify all pages have unique title and description
- Ensure no duplicate content
- Add rel="noopener noreferrer" to all external links
- Verify heading hierarchy on all pages
- Internal linking strategy: each page links to 3-5 related pages
```

### Prompt 23: Add Video Content Support

```
Add video content support to CybitSolutions:

COMPONENTS:

1. src/components/ui/VideoPlayer.tsx
   - Responsive video player
   - Support: YouTube embed, Vimeo embed, self-hosted MP4
   - Lazy load (only load iframe when visible)
   - Custom play button overlay matching site design
   - Thumbnail preview before play
   - Accessible: captions, keyboard controls

2. src/components/ui/VideoGallery.tsx
   - Grid of video thumbnails
   - Category filtering
   - Play count / duration display
   - Modal or inline playback

USE IN:
- Homepage: Company overview video in hero or below
- /who-we-are/about: "Meet CybitSolutions" video
- /insights/events: Webinar recordings
- Service pages: Technology demo videos
- /careers/culture: Day-in-the-life videos

PLACEHOLDER VIDEOS:
- Create video data file src/data/videos.ts
- Include: title, description, thumbnail, videoUrl, duration, category
- Use YouTube embeds for initial content (link to company channel)
```

### Prompt 24: Add Contract Vehicle & Capabilities Matrix

```
Add interactive contract vehicle lookup and capabilities matrix:

CONTRACT VEHICLES PAGE (/who-we-serve/contract-vehicles):
- Table/grid of all active contract vehicles
- Columns: Vehicle Name, Agency, NAICS Codes, Period of Performance, Status
- Search/filter by NAICS code, agency, status
- Click to expand details: scope, ordering info, contact

CAPABILITIES MATRIX (/what-we-do/capabilities-matrix):
- Interactive grid showing services vs. agencies/clearances
- Row: 10 service domains
- Columns: Clearance levels, agency experience, certifications
- Hover to see details
- Filter by capability area
- Exportable to PDF

NAICS CODE REFERENCE:
- Searchable NAICS code directory relevant to IT services
- Map NAICS codes to CybitSolutions service domains
- Common GovCon NAICS: 541512, 541511, 541513, 541519, 518210, 541690

DATA FILE:
- src/data/contract-vehicles.ts
- src/data/capabilities-matrix.ts
- src/data/naics-codes.ts
```

### Prompt 25: Add Service Worker & Offline Support

```
Add Progressive Web App (PWA) capabilities to CybitSolutions:

INSTALL:
npm install next-pwa

CONFIGURATION:
- Update next.config.ts with PWA plugin
- Cache strategy: StaleWhileRevalidate for pages, CacheFirst for static assets
- Offline fallback page: /offline

CREATE:
- public/manifest.json (PWA manifest)
  - name: "CybitSolutions"
  - short_name: "CybitSolutions"
  - theme_color: #0B1C2E (navy)
  - background_color: #F4F7FA (cloud)
  - display: standalone
  - icons: 192x192, 512x512 PNG

- src/app/offline/page.tsx
  - Professional offline message
  - CybitSolutions branding
  - "You are offline" message with retry button
  - Display cached content if available

PWA FEATURES:
- Install prompt on supported browsers
- Offline access to previously visited pages
- Background sync for form submissions when offline
- Push notification opt-in for news/events (future)
```

---

## Kaporta Enhancement Prompts

### Kaporta Prompt K1: Connect Forms to Backend

```
Connect all Kaporta frontend forms to API routes:

FORMS:
1. Contact/Quote Request form → POST /api/contact
2. Equipment Inquiry form → POST /api/inquiry
3. Newsletter signup → POST /api/newsletter

FOR EACH FORM:
- Add react-hook-form + zod validation
- Connect to API route with fetch
- Loading states and error handling
- Toast notifications
- Email notifications to kaportaq1@gmail.com via Resend

Same patterns as CybitSolutions Prompt 1 but adapted for Kaporta's forms.
```

### Kaporta Prompt K2: Replace Placeholder Images

```
Replace all Kaporta gradient placeholder images with real construction/quarry/logistics photos:

IMAGE CATEGORIES:
- Hero: Quarry operations, heavy machinery, mining site panorama
- Construction: Building projects, road construction, site work
- Quarry: Rock crushing, aggregate processing, excavation
- Logistics: Truck fleet, material delivery, warehouse
- Equipment: Excavators, loaders, crushers, dump trucks
- Team: Workers on site, safety equipment, collaboration

SOURCE: Unsplash/Pexels for development, licensed photos for production.
Use next/image with WebP format and blur placeholders.
Store in public/images/ with category subfolders.
```

### Kaporta Prompt K3: Add Google Maps

```
Add Google Maps to Kaporta contact page showing office location:

LOCATION: Benguema Firing Range, Waterloo, Freetown, Sierra Leone
COORDINATES: Approximately 8.3530° N, 13.0690° W

- Interactive map with custom marker
- Info window: Kaporta Quarry & Construction, address, phone (+232-78-341-012)
- "Get Directions" link
- Dark-themed map to match site design
- Responsive sizing (full-width, 400px height)

Consider also adding a secondary map showing active project/quarry sites.
```

### Kaporta Prompt K4: Add Floating WhatsApp Button

```
Add floating WhatsApp chat button to Kaporta website:

COMPONENT: src/components/ui/WhatsAppButton.tsx

DESIGN:
- Fixed position: bottom-right, above footer (bottom: 24px, right: 24px)
- Green WhatsApp icon (#25D366) on white circle with shadow
- Subtle pulse animation to draw attention
- Hover: scale up slightly with tooltip "Chat on WhatsApp"
- Click → opens wa.me/23278341012 with pre-filled message:
  "Hello! I'm interested in Kaporta's services. Can you help me?"

BEHAVIOR:
- Show after 3 seconds on page (delay entrance)
- Hide when chat widget is open (if exists)
- Hide on scroll down, show on scroll up (optional)
- Respect prefers-reduced-motion for pulse animation
- Mobile: slightly larger touch target (56x56px)

Z-INDEX: Ensure it doesn't overlap cookie banner or other fixed elements.
```

### Kaporta Prompt K5: Add Framer Motion Animations

```
Add Framer Motion to Kaporta website:

Same animation framework and wrapper components as CybitSolutions Prompt 2, but with
adjustments for construction industry feel:

- Heavier, more grounded animations (slower ease, less bounce)
- Equipment/machinery images: slide in from sides
- Statistics: bold counter animation
- Project cards: fade up with slight delay stagger
- Hero: Ken Burns effect on background images (slow zoom/pan)
- Timeline sections: sequential reveal on scroll

Construction industry references for animation style:
- Bechtel.com
- TurnerConstruction.com
- Skanska.com
```

### Kaporta Prompt K6: Add Project Tracking Dashboard

```
Add a client-facing project tracking dashboard for Kaporta:

PAGE: /projects/track or /dashboard

FEATURES:
- Project lookup by ID or client name
- Project status timeline (phases: Planning, In Progress, Quality Check, Complete)
- Photo gallery of project progress
- Material delivery schedule
- Equipment allocation view
- Weather impact notes
- Next milestone and expected completion date

This is a future feature requiring database setup first (see Shared Prompts).
Create the UI with mock data for now.
```

---

## Shared Enhancement Prompts (Both Sites)

### Shared Prompt S1: Database & CMS Setup

```
Both CybitSolutions and Kaporta need:

DATABASE:
- Supabase (PostgreSQL) - one project per site
- Prisma ORM for type-safe queries
- Models for: contacts, newsletter, applications/inquiries, testimonials, users

CMS:
- Sanity v3 headless CMS
- Content types: blog posts, projects/case studies, team members, job listings, events
- Sanity Studio accessible at /studio (password protected)
- ISR with 60-second revalidation

SHARED SETUP STEPS:
1. Create Supabase projects (free tier for development)
2. Initialize Prisma in each project
3. Create Sanity projects
4. Configure environment variables
5. Update API routes to persist to database
6. Create admin dashboard (see CS Prompt 6)
```

### Shared Prompt S2: Authentication

```
Add authentication to both sites:

PACKAGE: NextAuth.js v5 (Auth.js)

PROVIDERS:
- Credentials (email + password) for admin users
- Google OAuth (optional, for convenience)

FEATURES:
- Login page at /admin/login
- Session management with JWT
- Role-based access control (Admin, Editor, Viewer)
- Password reset via email
- Session timeout after 24 hours
- Secure cookies in production

PROTECTED ROUTES:
- /admin/* - All admin pages
- /studio/* - Sanity Studio (if integrated)
- /api/admin/* - Admin API routes
```

### Shared Prompt S3: CI/CD for Both Sites

```
Set up GitHub Actions CI/CD for both CybitSolutions and Kaporta:

SHARED WORKFLOW TEMPLATE:
- Lint → TypeCheck → Test → Build → Deploy
- Lighthouse CI on PRs
- Dependabot for dependency updates
- PR template and issue templates

DEPLOYMENT:
- CybitSolutions → Vercel (cybitsolutions.net)
- Kaporta → Vercel (kaporta.com)
- Preview deployments on PRs
- Environment variable management via Vercel dashboard

See CS Prompt 10 for detailed workflow configuration.
Apply same patterns to Kaporta repository.
```

### Shared Prompt S4: Monitoring for Both Sites

```
Set up monitoring and error tracking for both sites:

SENTRY:
- Separate Sentry projects for CS and Kaporta
- Error tracking + performance monitoring
- Source maps uploaded on deploy
- Slack notifications for critical errors

UPTIME MONITORING:
- BetterStack (formerly Better Uptime) or UptimeRobot
- Check every 5 minutes: homepage, /api/contact, key pages
- Alert via email and Slack on downtime

VERCEL ANALYTICS:
- Already installed on CS (verify Kaporta)
- Monitor Core Web Vitals
- Track page views and unique visitors

LOGGING:
- Structured logging in API routes
- Request ID tracking
- Error context (user agent, URL, payload)
```

---

## Priority Roadmap

### Phase 1: Critical (Weeks 1-2)
| Priority | Prompt | Description | Site |
|:---:|---|---|---|
| 1 | CS-18 | Configure Resend email service | CS |
| 2 | CS-1 | Connect all forms to API routes | CS |
| 3 | K1 | Connect Kaporta forms to API routes | Kaporta |
| 4 | CS-11 | Add Vitest unit tests | CS |
| 5 | CS-22 | Add sitemap.xml and enhanced SEO | CS |

### Phase 2: High Priority (Weeks 3-4)
| Priority | Prompt | Description | Site |
|:---:|---|---|---|
| 6 | CS-3 | Replace placeholder images | CS |
| 7 | CS-2 | Add Framer Motion animations | CS |
| 8 | CS-9 | Add Google Analytics 4 | CS |
| 9 | CS-8 | Add blog detail pages with MDX | CS |
| 10 | K2 | Replace Kaporta placeholder images | Kaporta |

### Phase 3: Backend Infrastructure (Weeks 5-8)
| Priority | Prompt | Description | Site |
|:---:|---|---|---|
| 11 | CS-5 | Set up database with Prisma & Supabase | CS |
| 12 | CS-6 | Add authentication & admin dashboard | CS |
| 13 | CS-7 | Integrate Stripe payments | CS |
| 14 | CS-10 | Set up GitHub Actions CI/CD | CS |
| 15 | CS-17 | Add Sentry monitoring | CS |

### Phase 4: Content & UX (Weeks 9-12)
| Priority | Prompt | Description | Site |
|:---:|---|---|---|
| 16 | CS-13 | Integrate Sanity CMS | CS |
| 17 | CS-4 | Implement dark mode | CS |
| 18 | CS-14 | Add Google Maps | CS |
| 19 | CS-15 | Add image gallery/lightbox | CS |
| 20 | CS-19 | AI-powered chat widget | CS |

### Phase 5: Advanced Features (Weeks 13-16)
| Priority | Prompt | Description | Site |
|:---:|---|---|---|
| 21 | CS-12 | Add Playwright E2E tests | CS |
| 22 | CS-20 | Performance optimization | CS |
| 23 | CS-21 | Accessibility audit & fix | CS |
| 24 | CS-23 | Add video content support | CS |
| 25 | CS-24 | Contract vehicle & capabilities matrix | CS |

### Phase 6: Polish & Scale (Weeks 17-20)
| Priority | Prompt | Description | Site |
|:---:|---|---|---|
| 26 | CS-16 | Multi-language support (i18n) | CS |
| 27 | CS-25 | PWA & offline support | CS |
| 28 | K3 | Add Google Maps to Kaporta | Kaporta |
| 29 | K4 | Add WhatsApp button to Kaporta | Kaporta |
| 30 | K5 | Add Framer Motion to Kaporta | Kaporta |
| 31 | K6 | Project tracking dashboard | Kaporta |
| 32 | S1-S4 | Shared infrastructure for both sites | Both |

---

## Quick Reference: Environment Variables Needed

```env
# CybitSolutions .env.local

# Email (Prompt 18)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Database (Prompt 5)
DATABASE_URL=postgresql://user:pass@host:5432/cybitsolutions

# Auth (Prompt 6)
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=https://cybitsolutions.net
GOOGLE_CLIENT_ID=xxxx
GOOGLE_CLIENT_SECRET=xxxx

# Payments (Prompt 7)
STRIPE_SECRET_KEY=sk_xxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_xxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxx

# Analytics (Prompt 9)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Maps (Prompt 14)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaXXXX

# CMS (Prompt 13)
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxx

# AI Chat (Prompt 19)
OPENAI_API_KEY=sk-xxxx
# or ANTHROPIC_API_KEY=sk-ant-xxxx

# Monitoring (Prompt 17)
SENTRY_DSN=https://xxxx@sentry.io/xxxx
SENTRY_AUTH_TOKEN=xxxx
```

---

> **Note:** Each prompt above is designed to be copy-pasted into an AI coding assistant (Claude, Cursor, GitHub Copilot) as a standalone task. Prompts reference specific file paths and component names from the current codebase. Update paths if the project structure changes.
