# CybitSolutions Website — Master Prompt Reference

This document contains all the prompts used to build each section of the website, plus recommended future prompts for enhancements. Use these prompts with Claude Code to build, modify, or extend any part of the site.

---

## Table of Contents
1. [Project Setup Prompts](#1-project-setup)
2. [Layout & Navigation Prompts](#2-layout--navigation)
3. [Homepage Prompts](#3-homepage)
4. [What We Do — Services (10 Domains)](#4-what-we-do--services)
5. [What We Do — Past Performance & Case Studies](#5-past-performance)
6. [What We Do — Capability Statements](#6-capability-statements)
7. [What We Do — Our Approach / Innovation](#7-our-approach)
8. [Who We Are — About, Leadership, Social Impact](#8-who-we-are)
9. [Who We Serve — Government, Commercial, Alliances](#9-who-we-serve)
10. [Insights & Resources](#10-insights--resources)
11. [Careers](#11-careers)
12. [Contact / Engage](#12-contact--engage)
13. [Legal Pages](#13-legal-pages)
14. [Future Enhancement Prompts](#14-future-enhancements)
15. [SEO & Performance Prompts](#15-seo--performance)
16. [CMS Integration Prompts](#16-cms-integration)

---

## 1. Project Setup

### Prompt Used: Initialize Project
```
Initialize a Next.js 14+ project with App Router, TypeScript, and Tailwind CSS v4 for a professional GovCon website called CybitSolutions. Set up:
- Custom Tailwind theme with brand colors: Navy #0B1C2E, Slate #1E2A38, Steel #5C6B7A, Cloud #F4F7FA, Accent-Cyan #13C0F5, Accent-Amber #FFC766
- Google Fonts: Inter (headings), Source Sans 3 (body), JetBrains Mono (code)
- WCAG 2.2 AA accessibility defaults (focus states, skip links, semantic landmarks)
- Utility function cn() using clsx + tailwind-merge
```

### Prompt Used: Design Tokens
```
Configure tailwind.config.ts with the CybitSolutions brand design system:
- Colors: navy, slate, steel, cloud, accent-cyan, accent-amber
- Font families: heading (Inter), body (Source Sans 3), mono (JetBrains Mono)
- Add custom animations: count-up, fade-in, slide-up
- Ensure 4.5:1 color contrast ratio for accessibility
```

---

## 2. Layout & Navigation

### Prompt Used: Header + Mega Menu
```
Build a professional enterprise header for CybitSolutions with:
- Top utility bar with links: Contract Vehicles, Suppliers, Accessibility, Privacy
- Main navigation with 6 items: What We Do, Who We Are, Who We Serve, Insights, Careers, Contact
- Mega-menu dropdown on hover showing subpages with descriptions
- "Request Consultation" CTA button on the right
- Sticky header that becomes more opaque on scroll
- Mobile hamburger menu with accordion navigation
- Logo at /images/logo.png
Use Next.js Link, lucide-react icons, and Tailwind CSS.
```

### Prompt Used: Footer
```
Build a full enterprise footer for CybitSolutions matching federal prime contractor standards (similar to RTX, GDIT, Lockheed Martin):
- Multi-column layout: Company info + logo, About links, Services, Resources, Contact
- Social media icons: LinkedIn, Twitter/X, YouTube
- Bottom bar: Copyright, Privacy, Terms, Accessibility, Cookies, Equal Opportunity, Sitemap
- Dark navy background with proper typography hierarchy
```

### Future Prompt: Search Functionality
```
Add a global search feature to the CybitSolutions header:
- Search icon in the nav that opens a modal search overlay
- Client-side search across all page titles, service domains, and case studies
- Display results grouped by category (Services, Case Studies, Insights, Careers)
- Keyboard shortcut Cmd+K / Ctrl+K to open search
```

---

## 3. Homepage

### Prompt Used: Hero Section
```
Build the CybitSolutions homepage hero section with:
- Full-width dark navy background with gradient overlay and subtle glow effects
- Badge: "Veteran-Owned • Cleared Professionals • 20+ Years"
- Headline: "Mission-grade innovation for cyber, cloud, and AI."
- Subheadline: "We design, secure, and operate digital mission systems for government and enterprise—at scale and in compliance."
- 3 CTAs: Explore Services (cyan), Download Capability Statement (outline), Contact/RFP (amber outline)
- Stats bar below: 20+ Years, 5 Major Programs, 10K+ Users, 100% Compliance
```

### Prompt Used: Homepage Sections
```
Build these homepage sections for CybitSolutions:
1. Trust Strip: Partner logos (AWS, Microsoft, Google Cloud, ServiceNow, Splunk, Cisco, HashiCorp, CrowdStrike, Databricks) + certification badges (FedRAMP, ISO 27001, SOC 2, CMMC)
2. Proof Points: 3-column layout — Security Without Compromise, Speed at Scale, Outcomes That Matter
3. Featured Domains: 3 service domain cards with "View All 10 Domains" link
4. Case Studies: 3 selected case study tiles
5. CTA Banner: "Ready to Modernize Your Mission?" with consultation CTA
6. Latest Insights: 3 blog/news tiles
7. Careers Strip: Dark navy recruiting band with "Search Open Roles" CTA
```

### Future Prompt: Hero Video Background
```
Replace the homepage hero gradient background with a looping hero video:
- Use a stock video of a data center, government building, or cyber operations
- Maintain the dark overlay for text readability
- Fallback to gradient for slow connections
- Pause video on mobile for performance
- Add play/pause toggle button for accessibility
```

---

## 4. What We Do — Services

### Prompt Used: Services Landing Page
```
Build the Services & Solutions landing page showing all 10 CybitSolutions domains as a responsive grid:
- Page hero: "Services & Solutions" with subtitle about 10 mission-critical domains
- Grid of 10 cards, each with: icon, title, short description, "Learn More" link
- Each card links to /what-we-do/services/[domain-slug]
- Use the domains data from the FeaturedDomains component
```

### Prompt Used: Individual Service Domain Page (Template)
```
Build a service domain detail page for CybitSolutions following this template structure:
- Hero: Domain title + intro paragraph
- Functional Areas: Numbered list of sub-domains
- Example Services: Grid of service offerings
- Standards & Frameworks: Badge-style list
- Key Benefits: Icon + text list
- Target Customers: Text paragraph
- CTAs: Download [Domain] Capability Statement, Contact a [Role] Architect, Submit RFP
Apply this template to all 10 domains: cybersecurity, cloud, infrastructure, software-devops, data-analytics, ai-automation, enterprise-it, digital-transformation, emerging-tech, industry-specific
```

### Future Prompt: Service Domain Comparison Matrix
```
Add an interactive comparison matrix to the Services landing page:
- Tabbed or filterable view comparing all 10 domains
- Columns: Domain, Functional Areas, Key Standards, Target Customers
- Filter by: customer type (Federal, DoD, Commercial), standard (FedRAMP, NIST, CMMC)
- Sortable columns
- Export to PDF option
```

---

## 5. Past Performance

### Prompt Used: Case Studies Page
```
Build the Past Performance & Case Studies page for CybitSolutions:
- Hero section with executive overview
- 5 detailed case study cards in full-width layout, each with:
  - Client/Industry badge
  - Mission statement
  - Challenge bullets
  - Solution bullets
  - Results bullets
  - Technologies used
  - Compliance & Standards alignment
  - "Value to the Mission" statement
- The 5 case studies: DoD C3BM/ABMS, DoS CAKMI, DoS NGEM, DoS SPARTA PSIM, DoD RAPIDS/DEERS
- Below: 25 summary case studies in a compact 3-column grid organized by domain
- Microsoft Ecosystem past performance section
```

### Future Prompt: Interactive Case Study Pages
```
Convert each case study into its own dedicated page with:
- Full-page layout with sidebar navigation
- Before/After metrics visualization
- Technology stack icons
- Related services cross-links
- Download as PDF option
- Related case studies carousel at bottom
```

---

## 6. Capability Statements

### Prompt Used
```
Build the Capability Statements page for CybitSolutions with:
- Company Overview section (Veteran-Owned, Minority-Owned, Self-Certified SDB)
- Core Competencies list with icons
- Differentiators section
- Past Experiences summary
- NAICS Codes table: 541511, 541512, 541513, 541519, 541611, 518210, 541990, 561499, 561611
- Download CTAs for PDF capability statements (per domain)
- Contact information footer
```

---

## 7. Our Approach

### Prompt Used
```
Build the Our Approach / Innovation & R&D page for CybitSolutions:
- Methodology section with 4 phases: Discovery, Design, Build, Operate
- Visual timeline or process flow diagram
- Innovation focus areas: Zero-Trust, AI/ML, Cloud-Native, DevSecOps, Quantum-Ready
- R&D investments placeholder
- Standards alignment (NIST, FedRAMP, CMMC, ISO)
- Agile/SAFe methodology highlight
- CTA: "Let's discuss your mission requirements"
```

---

## 8. Who We Are

### Prompt Used: About Us
```
Build the About Us / Our Story page for CybitSolutions:
- Company timeline from founding to present
- Mission: "Deliver secure, innovative IT solutions that protect and empower organizations worldwide."
- Vision: "To be the trusted partner for Zero-Trust, cloud-native, AI-enabled enterprise transformation."
- Core Values section with icons
- Key differentiators: 20+ years experience, Veteran-Owned, cleared professionals, compliance-first
- Stats: years of experience, programs delivered, users supported
```

### Prompt Used: Leadership
```
Build the Leadership page with professional team member cards:
- Grid layout, 3 columns on desktop
- Each card: photo placeholder (gradient div), name, title, bio paragraph, certifications/badges
- Placeholder team: CEO, CTO, COO, VP Cybersecurity, VP Cloud, VP Federal Programs
- Include professional bios mentioning DoD/DoS experience, certifications (CISM, PMP, CASP+, AWS SA, ITIL4)
```

### Prompt Used: Social Impact
```
Build the Supporting Communities / Social Impact page:
- Veteran hiring and transition programs
- STEM education partnerships
- Community service initiatives
- Diversity & inclusion commitment
- Environmental sustainability
- Placeholder stats and program descriptions
```

---

## 9. Who We Serve

### Prompt Used: Government Solutions
```
Build the Government Solutions page with sections for:
- Federal Civilian agencies
- Department of Defense (DoD) & Intelligence Community
- State & Local Government
- Each section: description, key clients/agencies, relevant services, compliance frameworks
- CTA: Contact our federal solutions team
```

### Prompt Used: Commercial Business
```
Build the Commercial Business page:
- Industry verticals: Healthcare, Financial Services, Energy & Utilities, Technology
- Each vertical: description, challenges addressed, relevant services
- Commercial compliance: SOC 2, HIPAA, PCI DSS, GDPR
- CTA: Explore commercial solutions
```

### Prompt Used: Strategic Alliances
```
Build the Strategic Alliances & Certifications page:
- Technology Partners: AWS, Microsoft, Google Cloud, ServiceNow, Splunk, CrowdStrike, HashiCorp
- Integrator Partners placeholder
- Certifications grid: FedRAMP, ISO 27001, SOC 2, CMMC, HIPAA
- Supplier portal information
- Corporate governance section
- "Become a Partner" CTA
```

---

## 10. Insights & Resources

### Prompt Used: News & Insights
```
Build the News & Insights page with:
- Category filters: All, Cybersecurity, Cloud, AI, GovCon, Company News
- Blog post cards with: category badge, date, title, excerpt, author
- Press releases section
- Thought leadership articles
- 6-9 placeholder articles across categories
```

### Prompt Used: Resource Library
```
Build the Resource Library page:
- Filter by type: White Papers, Case Studies, Reports, Infographics, Capability Statements
- Download tiles with: title, description, format badge (PDF, PPTX), file size
- 6+ placeholder resources
- Newsletter signup form
```

### Prompt Used: Events & Webinars
```
Build the Events & Webinars page:
- Upcoming events section with registration CTAs
- Past events / On-demand webinars section
- Event cards: title, date, type (Conference, Webinar, Workshop), description
- Calendar integration placeholder
```

### Future Prompt: Blog System with MDX
```
Set up a full blog system using MDX:
- Create content/blog directory for .mdx files
- Add frontmatter support: title, date, author, category, excerpt, image
- Dynamic [slug] page route
- Category and tag filtering
- Related posts component
- Social sharing buttons
- Reading time estimate
```

---

## 11. Careers

### Prompt Used: Open Roles
```
Build the Open Roles page:
- Job listing cards with: title, location, clearance level, type (Full-time, Contract)
- Filter by: department, location, clearance
- Sections: Current Openings, Early Careers, University Recruiting, Military & Veterans
- Placeholder roles: Cybersecurity Engineer (TS/SCI), Cloud Architect (Secret), DevOps Engineer, Data Scientist, Project Manager (PMP)
- "Apply Now" buttons
- Equal Opportunity Employer statement
```

### Prompt Used: Culture & Benefits
```
Build the Culture & Benefits page:
- Company culture section: mission-driven, innovation, collaboration
- Benefits grid: Health/Dental/Vision, 401k, PTO, Education assistance, Clearance support, Remote flexibility
- Employee value proposition
- Office photos placeholder
- "Day in the Life" section placeholder
```

### Prompt Used: Testimonials
```
Build the Employee Testimonials page:
- Quote cards with: quote text, employee name, role, department
- Photo placeholder
- 6+ placeholder testimonials from various departments
- Video testimonial placeholder section
```

---

## 12. Contact / Engage

### Prompt Used: Contact Form
```
Build the Contact / RFP Intake page:
- Contact form: name, email, phone, company, subject (General, Demo, Consultation, RFP, Partnership, Media), message
- Form validation with error states
- Success message on submit
- Side panel with: office address, phone, email, business hours
- Map placeholder
```

### Prompt Used: Partner With Us
```
Build the Partner With Us page:
- Partnership types: Prime Contractor, Subcontractor, Technology Partner, Channel Partner
- Benefits of partnering with CybitSolutions
- Partner inquiry form
- Current partners showcase
```

### Prompt Used: Payment
```
Build the Payment page:
- Invoice payment information
- ACH/Wire transfer details placeholder
- Online payment portal link placeholder
- Payment terms and conditions
- Contact for billing inquiries
```

---

## 13. Legal Pages

### Prompt Used
```
Create professional legal pages for CybitSolutions:
1. Privacy Policy - Data collection, usage, GDPR/CCPA compliance
2. Terms of Use - Website usage terms
3. Accessibility Statement - WCAG 2.2 AA commitment, contact for accommodations
4. Cookie Policy - Cookie types, management, opt-out
All with proper legal formatting, headings, and last-updated dates.
```

---

## 14. Future Enhancement Prompts

### Animations & Micro-interactions
```
Add Framer Motion animations to the CybitSolutions website:
- Fade-in on scroll for section headings and cards
- Stagger animation for grid items
- Counter animation for stat numbers
- Smooth page transitions
- Mega-menu slide-down animation
- Mobile nav slide-in animation
Keep animations subtle and professional (no bounce/overshoot).
```

### Dark Mode Support
```
Add dark mode toggle to CybitSolutions:
- System preference detection
- Toggle button in header utility bar
- Adjusted color scheme maintaining brand identity
- Dark: navy-900 bg, lighter text, adjusted card backgrounds
- Persist preference in localStorage
```

### Multi-language Support (i18n)
```
Add internationalization to CybitSolutions:
- Languages: English, Spanish, French, Arabic
- next-intl or next-i18next setup
- Language switcher in header utility bar
- RTL support for Arabic
- Translated navigation and key content
```

### Analytics & Consent
```
Set up analytics and consent management:
- Google Analytics 4 (GA4) with first-party data
- Cookie consent banner using CookieYes/OneTrust pattern
- Event tracking for: CTA clicks, form submissions, downloads, navigation
- Conversion tracking for contact form and RFP submissions
- Privacy-compliant implementation
```

### Performance Optimization
```
Optimize CybitSolutions website performance:
- Next.js Image component for all images with blur placeholders
- Lazy loading for below-fold sections
- Font optimization with next/font
- Bundle analysis and code splitting
- Service worker for offline capability
- Core Web Vitals optimization (LCP, FID, CLS)
```

### CMS Integration
```
Integrate a headless CMS (Sanity/Contentful) for:
- Blog posts and news articles
- Case studies content
- Job listings
- Event calendar
- Team member profiles
- Resource library documents
Set up content models, preview mode, and ISR (Incremental Static Regeneration).
```

### ATS Integration
```
Integrate an Applicant Tracking System:
- Workday or Greenhouse API integration
- Real-time job listings pulled from ATS
- Apply button linking to ATS application
- Job alert subscription
```

---

## 15. SEO & Performance

### SEO Setup
```
Implement comprehensive SEO for CybitSolutions:
- Metadata for all pages (title, description, OG tags, Twitter cards)
- Structured data (JSON-LD): Organization, Service, Article schemas
- Dynamic sitemap.xml generation
- robots.txt with proper rules
- Canonical URLs
- Breadcrumb navigation with structured data
- Image alt text audit
- Internal linking strategy
```

### Page Speed
```
Optimize page speed scores:
- Preconnect to Google Fonts
- Critical CSS inlining
- Image optimization pipeline
- Lazy load below-fold components
- Reduce JavaScript bundle size
- Enable HTTP/2 push
- CDN configuration for Vercel/AWS
```

---

## 16. Deployment Prompts

### Vercel Deployment
```
Set up Vercel deployment for CybitSolutions:
- Connect to GitHub repository
- Configure environment variables
- Set up custom domain (cybitsolutions.com)
- Enable analytics
- Configure redirects and headers
- Set up preview deployments for PRs
```

### AWS Deployment
```
Set up AWS deployment with CloudFront:
- S3 + CloudFront for static assets
- WAF rules for security
- SSL/TLS certificate via ACM
- Route 53 DNS configuration
- Global CDN with edge locations
- Daily backups
```

---

## Quick Reference: Common Modifications

### Add a New Service Domain
```
Add a new service domain "[Domain Name]" to the CybitSolutions website:
1. Add data to src/data/services.ts
2. Create page at src/app/what-we-do/services/[slug]/page.tsx
3. Add to the domains array in src/components/sections/FeaturedDomains.tsx
4. Add to navigation data in src/data/navigation.ts
Follow the existing template pattern with: hero, intro, functional areas, services, standards, benefits, customers, CTAs.
```

### Add a New Case Study
```
Add a new case study for "[Client] — [Project Name]":
1. Add to src/data/case-studies.ts
2. Create markdown in content/case-studies/[slug].md
3. Add to the case studies grid on the past-performance page
Structure: client, mission, challenge, solution, results, technologies, compliance, value statement.
```

### Add a New Team Member
```
Add a new team member to the Leadership page:
1. Add to src/data/team.ts with: name, title, bio, certifications, image path
2. Add photo to public/images/team/[name].jpg
3. The leadership page will auto-render from the data file.
```

### Update Navigation
```
Modify the site navigation structure:
1. Update src/data/navigation.ts
2. Update the MegaMenu.tsx component if adding new mega-menu panels
3. Update Footer.tsx if adding new footer links
4. Create any new page directories and page.tsx files
```

---

## 17. Applied Enhancements (March 2026)

### Backend API Layer
```
STATUS: APPLIED
Added backend API routes with full server-side processing:
- POST /api/contact — Contact form with Zod validation, rate limiting (5/15min), honeypot spam protection, Resend email notifications
- POST /api/newsletter — Newsletter signup with dedup, rate limiting (3/hr), welcome email
- POST /api/career-apply — Job applications with validation, admin notification
- POST /api/partner — Partner inquiry with validation, admin + user confirmation emails
All routes follow: IP extraction → rate limit → honeypot check → Zod validation → email send → JSON response
```

### Form Validation (Zod + React Hook Form)
```
STATUS: APPLIED
Added server-side and client-side form validation:
- src/lib/validations.ts — Zod schemas for: contact, newsletter, career application, partner inquiry, testimonial
- @hookform/resolvers for client-side form binding
- All forms validate on both client and server
```

### Email Service (Resend)
```
STATUS: APPLIED
Added transactional email service using Resend:
- src/lib/email.ts — Email templates for all form types
- Admin notifications for every submission
- Auto-reply confirmations to users
- Newsletter welcome emails
- Requires RESEND_API_KEY env var and domain verification
```

### Rate Limiting & Spam Protection
```
STATUS: APPLIED
Added API security:
- src/lib/rate-limit.ts — In-memory rate limiting per IP with auto-cleanup
- Honeypot fields on all forms (website, honeypot, url)
- Contact/Career/Partner: 5 requests per IP per 15 minutes
- Newsletter: 3 requests per IP per hour
- NOTE: In-memory only — needs Redis for multi-instance deployments
```

### Security Headers
```
STATUS: APPLIED
Added HTTP security headers in next.config.ts:
- X-Content-Type-Options: nosniff (MIME type sniffing prevention)
- X-Frame-Options: DENY (clickjacking protection)
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Error Handling Pages
```
STATUS: APPLIED
Added Next.js error boundary pages:
- src/app/error.tsx — Global error boundary with reset button, dev-mode error details
- src/app/not-found.tsx — Custom 404 page with cybersecurity-themed SVG, navigation suggestions
- src/app/loading.tsx — Global loading skeleton with hero + card grid placeholders
```

### Analytics & Performance Monitoring
```
STATUS: APPLIED
Added Vercel Analytics and Speed Insights:
- @vercel/analytics for real user monitoring and page views
- @vercel/speed-insights for Core Web Vitals tracking (LCP, FID, CLS)
- Components added to root layout.tsx
```

### Environment Variables
```
STATUS: APPLIED
Created .env.example documenting all required environment variables:
- RESEND_API_KEY — Email service API key
- NEXT_PUBLIC_SITE_URL — Canonical site URL
- ADMIN_EMAIL — Admin notification recipient
```

### Interactive Features (Previously Applied)
```
STATUS: APPLIED (Earlier session)
- AI Chat Widget auto-opens with greeting on first visit (sessionStorage)
- News articles expand/collapse with full content
- Resource Library with download/preview and category filters
- Events with registration modal and form
- Career open roles with job descriptions, salary, apply modal
- Employee & Client Testimonials with submission form
- Payment portal UI with 5 payment methods (Stripe, PayPal, Square, Amazon Pay, Apple Pay)
- Global search (Cmd+K) across all content
- Mega menu z-index fix (z-[9999])
```

### SEO/Schema Enhancements (Previously Applied)
```
STATUS: APPLIED (Earlier session)
- Organization JSON-LD with NAICS codes, contacts, address, knowsAbout
- BreadcrumbList JSON-LD schema
- WebSite JSON-LD schema
- OpenGraph + Twitter Card meta tags
- Dynamic sitemap.xml (41 URLs)
- robots.ts with proper directives
- PWA manifest.webmanifest
```

---

## 18. Comprehensive Gap Analysis — CybitSolutions vs Kaporta

### Side-by-Side Comparison

| Feature | CybitSolutions | Kaporta | Action Needed |
|---------|---------------|---------|---------------|
| Security Headers | ✅ Applied | ✅ Has | Done |
| API Routes | ✅ Applied (4 routes) | ✅ Has (4 routes) | Done |
| Form Validation (Zod) | ✅ Applied | ✅ Has | Done |
| Email Service (Resend) | ✅ Applied | ✅ Has | Done |
| Rate Limiting | ✅ Applied | ✅ Has | Done |
| Error Pages (error/404/loading) | ✅ Applied | ✅ Has | Done |
| Vercel Analytics | ✅ Applied | ✅ Has | Done |
| Speed Insights | ✅ Applied | ✅ Has | Done |
| JSON-LD Structured Data | ✅ 3 schemas | ❌ Missing | CS ahead |
| OG Image | ✅ Has | ❌ Missing | CS ahead |
| Canonical URL | ✅ Has | ❌ Missing | Kaporta needs |
| Theme-color meta | ✅ Has | ❌ Missing | Kaporta needs |
| Chat Widget | ✅ Has (auto-open) | ✅ Has (manual) | CS ahead |
| Search | ✅ Has (Cmd+K) | ✅ Has (Cmd+K) | Both have |
| Testing | ❌ Missing | ❌ Missing | Both need |
| CI/CD | ❌ Missing | ❌ Missing | Both need |
| Database | ❌ Missing | ❌ Missing | Both need |
| Authentication | ❌ Missing | ❌ Missing | Both need (admin) |
| CMS | ❌ Missing | ❌ Missing | Both need |
| File Storage | ❌ Missing | ❌ Missing | Both need |

---

## 19. Future Enhancements & Improvements Roadmap

### Priority 1 — Production Readiness

#### Testing Framework
```
Set up comprehensive testing for CybitSolutions:
- Install: vitest, @testing-library/react, @testing-library/jest-dom, @playwright/test
- Unit tests for: validation schemas, rate limiter, email service, utility functions
- Component tests for: ContactForm, ChatWidget, GlobalSearch, NewsletterForm
- E2E tests with Playwright for: homepage load, form submission flow, navigation, search
- API route tests for all 4 endpoints
- Add test scripts to package.json: "test", "test:e2e", "test:coverage"
- Minimum 80% code coverage target
```

#### CI/CD Pipeline
```
Set up GitHub Actions CI/CD for CybitSolutions:
- .github/workflows/ci.yml:
  - Trigger on push to main and pull requests
  - Steps: checkout, setup Node 20, install deps, lint, type-check, run tests, build
  - Cache node_modules for faster builds
- .github/workflows/deploy.yml:
  - Auto-deploy to Vercel on main branch push
  - Preview deployments for PRs
  - Environment variable management
- Add status badges to README
```

#### Database Integration
```
Add persistent data storage for CybitSolutions:
- Options: Vercel Postgres, PlanetScale, Supabase, or Neon
- Schema for: contact_submissions, newsletter_subscribers, job_applications, partner_inquiries, testimonials
- Replace in-memory newsletter Set with database
- Prisma ORM for type-safe database access
- Migration scripts and seed data
- Connection pooling for serverless
```

#### File Storage
```
Add cloud file storage for uploads:
- Vercel Blob or AWS S3 for: resumes, RFP documents, quote attachments
- File type validation (PDF, DOC, DOCX only, max 10MB)
- Secure signed URLs for access
- Auto-cleanup for old uploads
- Virus scanning integration (ClamAV or cloud service)
```

### Priority 2 — Enhanced Functionality

#### Admin Dashboard
```
Build a protected admin dashboard for CybitSolutions:
- /admin route with authentication (NextAuth.js + credentials provider)
- Dashboard views: Contact submissions, Job applications, Newsletter subscribers, Partner inquiries, Testimonials
- Sortable/filterable tables with pagination
- Export to CSV functionality
- Email response directly from dashboard
- Submission status tracking (New, In Progress, Responded, Closed)
- Basic analytics: submissions per day/week/month, popular services
```

#### Content Management System
```
Integrate Sanity CMS for dynamic content:
- Content models: Blog posts, Case studies, Events, Job listings, Team members, Resources
- Rich text editor with code blocks, images, tables
- Preview mode for draft content
- Incremental Static Regeneration (ISR) for auto-updates
- Image CDN via Sanity's image pipeline
- Scheduled publishing for blog posts
- Role-based access (Editor, Admin, Viewer)
```

#### Real-Time Chat / AI Assistant
```
Upgrade the chat widget to a real AI assistant:
- Options: OpenAI API, Claude API, or Dialogflow
- Context-aware responses about CybitSolutions services
- Lead qualification questions (budget, timeline, service needs)
- Handoff to human agent via email notification
- Chat history persistence (database)
- Typing indicators and read receipts
- After-hours auto-response with business hours info
- Integration with contact form for lead capture
```

#### Payment Processing Integration
```
Implement real payment processing for CybitSolutions:
- Stripe integration for invoice payments:
  - Stripe Checkout for one-time payments
  - Stripe Elements for embedded payment form
  - Invoice lookup by number
  - Payment receipt emails
  - Webhook handler for payment confirmations
- PayPal integration as secondary option
- PCI DSS compliance considerations
- Payment history for clients
- Recurring payment support for retainer contracts
```

#### Email Marketing Platform
```
Set up automated email marketing:
- Mailchimp or ConvertKit integration
- Newsletter subscriber management with tags
- Double opt-in confirmation flow
- Automated welcome email sequence (5-part drip)
- Monthly newsletter template
- Unsubscribe management (CAN-SPAM compliance)
- A/B testing for subject lines
- Analytics: open rates, click rates, unsubscribes
```

### Priority 3 — Advanced Features

#### Animations & Micro-interactions
```
Add Framer Motion animations to CybitSolutions:
- Fade-in on scroll for section headings and cards (IntersectionObserver)
- Stagger animation for grid items (0.1s delay between each)
- Counter animation for stat numbers (count from 0 to target)
- Smooth page transitions (AnimatePresence)
- Mega-menu slide-down with opacity transition
- Mobile nav slide-in from right
- Button hover micro-interactions (scale 1.02, shadow increase)
- Loading skeleton shimmer effects
- Keep all animations under 300ms, subtle and professional
```

#### Dark Mode
```
Add dark mode toggle to CybitSolutions:
- System preference detection via prefers-color-scheme
- Toggle button in header utility bar (Sun/Moon icon)
- Theme persistence in localStorage
- Dark color palette: bg-gray-950, text-gray-100, cards bg-gray-900, borders gray-800
- Accent colors remain: cyan #13C0F5, amber #FFC766
- Smooth 200ms transition between modes
- Respect OS-level preference on first visit
```

#### Multi-language Support (i18n)
```
Add internationalization for CybitSolutions:
- Languages: English (default), Spanish, French, Arabic
- next-intl setup with App Router
- Language switcher dropdown in header
- RTL layout support for Arabic
- Translated: navigation, hero sections, CTAs, form labels, error messages
- Language detection from browser Accept-Language header
- URL prefix pattern: /en/..., /es/..., /fr/..., /ar/...
- SEO: hreflang tags for each language variant
```

#### Progressive Web App (PWA)
```
Enhance CybitSolutions as a full PWA:
- Service worker with Workbox for caching strategies
- Offline fallback page
- App install prompt banner
- Push notification support for: new blog posts, event reminders
- Background sync for form submissions when offline
- Cache-first for static assets, network-first for API calls
- Update notification when new version deployed
```

#### Accessibility Audit & Enhancement
```
Comprehensive accessibility audit for CybitSolutions:
- Automated testing: axe-core, Lighthouse accessibility audit
- Manual testing: screen reader (NVDA/VoiceOver), keyboard-only navigation
- Fix any WCAG 2.2 AA violations
- Add ARIA live regions for dynamic content (chat, search, forms)
- Ensure all modals trap focus properly
- Add visible focus indicators on all interactive elements
- Color contrast verification for all text/background combinations
- Reduced motion support (@media prefers-reduced-motion)
- Create accessibility statement page with contact for accommodations
```

#### Performance Optimization
```
Optimize CybitSolutions for perfect Lighthouse scores:
- Replace Google Fonts CSS link with next/font for zero-layout-shift fonts
- Implement next/image for all images with blur placeholders
- Dynamic imports for heavy components (ChatWidget, GlobalSearch)
- Route-based code splitting (already handled by Next.js App Router)
- Preconnect/DNS-prefetch for external domains
- Compress images to WebP/AVIF with srcset for responsive sizes
- HTTP/2 server push for critical resources
- Target: Lighthouse 95+ on Performance, 100 on Accessibility, 100 on SEO
```

#### Social Media Integration
```
Add social media features to CybitSolutions:
- Social share buttons on blog posts and case studies (LinkedIn, Twitter/X, Facebook)
- LinkedIn company page feed integration
- Twitter/X timeline widget on Insights page
- Social proof counters (followers, connections)
- Auto-post new blog articles to social accounts (via Zapier/n8n)
- Social login for gated content (LinkedIn OAuth)
```

#### AI-Powered Features
```
Add AI capabilities to CybitSolutions (requires API keys):

1. AI Email & Calendar Assistant:
   - AI-generated email responses for contact form submissions
   - Smart scheduling for consultation calls (Calendly/Cal.com integration)
   - Auto-categorization of inquiries (Sales, Support, Partnership, Media)

2. AI CRM Integration:
   - Lead scoring based on form submissions and page visits
   - Automated follow-up sequences based on interest signals
   - Pipeline visualization (Lead → Qualified → Proposal → Won/Lost)
   - Integration with HubSpot, Salesforce, or Pipedrive

3. AI Social Media Management:
   - Content calendar generation from blog posts
   - AI-generated social captions and hashtags
   - Best-time-to-post recommendations
   - Engagement analytics dashboard

4. AI Recruitment Assistant:
   - Resume parsing and skills extraction
   - Candidate scoring against job requirements
   - Automated screening questions
   - Interview scheduling with calendar integration
```

#### Search Engine Optimization (Advanced)
```
Advanced SEO/SMO/AEO/AIO strategy for CybitSolutions:

1. Structured Data Expansion:
   - Service schema for each of 10 service domains
   - FAQ schema on service pages (from chat widget FAQs)
   - HowTo schema on Our Approach page
   - Review/Rating schema from testimonials
   - Event schema for events page
   - JobPosting schema for career openings
   - LocalBusiness schema for contact page
   - Article schema for blog/news posts

2. AI Engine Optimization (AEO/AIO):
   - llms.txt file at /llms.txt describing site for AI crawlers
   - Structured FAQ content optimized for AI answer engines
   - Clear entity definitions for knowledge graph inclusion
   - Conversational long-tail keyword targeting
   - Schema.org speakable property for voice search

3. Social Media Optimization (SMO):
   - OpenGraph image generation per page (next/og)
   - Twitter Card optimization with large images
   - LinkedIn article publishing integration
   - Pinterest rich pins for infographics

4. E-E-A-T Signals:
   - Author bios on all blog/insight content
   - Citation links to authoritative sources
   - Last-updated dates on all content
   - Security trust badges (FedRAMP, CMMC, ISO)
   - Client logos and testimonials prominently displayed
```

#### Monitoring & Observability
```
Add production monitoring to CybitSolutions:
- Sentry for error tracking and performance monitoring
- Vercel Analytics for page views and user flows
- Uptime monitoring (Better Uptime, Pingdom, or UptimeRobot)
- Log aggregation for API routes (Vercel logs or Axiom)
- Custom dashboard for: form submissions/day, error rates, response times
- Alerting: email/Slack notifications for errors, downtime, anomalies
- Synthetic monitoring for critical user flows
```

#### Security Hardening
```
Harden CybitSolutions security posture:
- Content Security Policy (CSP) with nonces for inline scripts
- Subresource Integrity (SRI) for external scripts
- HSTS (Strict-Transport-Security) with preload
- CORS configuration for API routes
- Input sanitization with DOMPurify for any user-generated content
- SQL injection prevention (parameterized queries when DB added)
- Regular dependency auditing (npm audit, Snyk)
- Security.txt at /.well-known/security.txt
- Penetration testing checklist
```

---

## 20. Kaporta-Specific Missing Gaps

### Gaps Kaporta Needs (that CybitSolutions already has)
```
Apply these to the Kaporta website:

1. Canonical URL: Add <link rel="canonical"> to layout.tsx metadata
2. JSON-LD Structured Data: Add Organization, LocalBusiness, Service schemas to layout.tsx
3. OpenGraph Image: Add og:image to metadata with company branding
4. Twitter Card Upgrade: Change from "summary" to "summary_large_image" with image
5. Theme-color Meta Tag: Add <meta name="theme-color" content="#002F5D"> to metadata
6. Robots Meta Tag: Add robots and googlebot directives to metadata
7. Apple Touch Icon: Add apple-touch-icon to layout.tsx metadata
8. NAICS Codes: Add relevant NAICS codes to Organization schema
9. BreadcrumbList Schema: Add breadcrumb structured data
10. WebSite Schema: Add WebSite JSON-LD for search features
```

### Gaps Both Sites Need
```
Apply to BOTH CybitSolutions and Kaporta:

1. Testing framework (Vitest + Playwright)
2. CI/CD pipeline (GitHub Actions)
3. Database integration (Vercel Postgres or Supabase)
4. File storage for uploads (Vercel Blob or S3)
5. Admin dashboard with authentication
6. Service worker for PWA offline support
7. Cookie consent banner
8. Content Management System
9. Real-time chat with AI backend
10. Performance optimization (next/font, next/image)
```

---

## 21. Email Setup Guide

### Setting Up info@cybitsolutions.net on Hostinger
```
To set up the business email on Hostinger:

1. Log into Hostinger control panel
2. Go to Emails → Email Accounts
3. Create email account: info@cybitsolutions.net
4. Set up MX records for your domain:
   - MX Record: mail.cybitsolutions.net (Priority 10)
5. Set up SPF record: v=spf1 include:_spf.hostinger.com ~all
6. Set up DKIM record (provided by Hostinger)
7. Set up DMARC record: v=DMARC1; p=quarantine; rua=mailto:info@cybitsolutions.net
8. Configure email clients:
   - IMAP: imap.hostinger.com:993 (SSL)
   - SMTP: smtp.hostinger.com:465 (SSL)
9. For Resend integration:
   - Verify domain at resend.com/domains
   - Add Resend DNS records (DKIM, Return-Path)
   - Set RESEND_API_KEY in Vercel environment variables
```

---

## Changelog

| Date | Change | Details |
|------|--------|---------|
| 2026-03-20 | Initial build | All 19 subpages, 10 service domains, legal pages, SEO |
| 2026-03-20 | Company Profile | Web + PDF versions under Who We Are |
| 2026-03-21 | Phase 3 Enhancements | Microsoft Ecosystem, payment portal, chat auto-open, testimonials rename, events registration, career job descriptions, resource library, news expand/collapse, mega menu z-index, logo sizes, phone/email fixes, ", LLC" removal, 5 new partners, SEO schemas |
| 2026-03-21 | Backend Infrastructure | API routes, Zod validation, rate limiting, honeypot protection, Resend email, security headers, error pages, Vercel Analytics, Speed Insights |
| 2026-03-22 | Premium Redesign | Header: GlobalSearch restored, logo h-[72px], utility bar gradient. Footer: logo h-28, gradient bg. Homepage: capability badges, gradient-text hero, navy-section stats, animated gradient-line divider, premium CTA with dot-pattern. CSS: glass-card, gradient-text, section-divider, dot-pattern, navy-section, chat-pulse, fade-in-up animations. Chat widget: pulse glow animation |
| 2026-03-22 | Enhancement Roadmap | ENHANCEMENT-PROMPTS.md with full gap analysis for both CybitSolutions and Kaporta, 25 CS prompts, 10 Kaporta prompts, shared prompts, priority roadmap |

---

## 18. Design & Color Scheme Updates (March 2026)

### Premium GovCon Color Scheme
```
STATUS: APPLIED
Updated the entire site to a premium modern GovCon color scheme:

CSS CLASSES ADDED (src/app/globals.css):
- .hero-gradient — 4-stop 160° gradient for immersive hero sections
- .gradient-line — Animated shimmer gradient line (cyan → amber → cyan)
- .navy-section — Premium navy background with subtle dot texture overlay
- .glass-card — Frosted glass effect with backdrop-filter blur
- .gradient-text — Cyan-to-amber gradient text (used on hero headline)
- .section-divider — Centered 80px gradient accent bar
- .dot-pattern — Subtle tech-grid radial dot background
- .chat-pulse — Pulsing glow animation for chat widget button
- .animate-fade-in-up — Smooth entry animation for page sections

COLOR TOKENS ADDED:
- --color-navy-950: #050E1A (darkest navy for footer gradient)
- --color-accent-cyan-light: #E0F7FE (light cyan backgrounds)
- --color-accent-amber-light: #FFF4E0 (light amber backgrounds)

HEADER REDESIGN:
- Utility bar: gradient from navy → slate (not flat)
- Logo: h-14/h-16/h-[72px] across breakpoints (much larger)
- Nav text: text-sm with proper spacing
- GlobalSearch button: restored with Ctrl+K shortcut
- CTA: "Request Consultation" with cyan shadow
- Hamburger: mobile-only (lg:hidden) — NOT visible on desktop

FOOTER REDESIGN:
- Background: gradient from navy → navy-950 (premium depth)
- Logo: h-28 (extra large, inverted white)

HOMEPAGE REDESIGN:
- Hero: Decorative grid lines, 3 background glow orbs, gradient-text headline
- Capability badges panel on right side (desktop only)
- Stats bar: navy-section with hover scale effect on numbers
- CTA banner: navy-section + dot-pattern + "GET STARTED TODAY" badge
- Animated gradient-line divider between sections
```

### Global Search Restoration
```
STATUS: APPLIED
GlobalSearch component restored to header:
- Search button visible on all screen sizes
- Desktop: shows "Search" text + Ctrl+K keyboard shortcut badge
- Mobile: shows search icon only
- Opens modal overlay with category-grouped results
- Arrow key navigation, Enter to select, Escape to close
```

### Chat Widget Enhancement
```
STATUS: APPLIED
Chat widget enhanced with:
- Pulsing cyan glow animation on floating button (.chat-pulse class)
- Auto-opens with greeting on first visit (per browser session)
- Quick action buttons for common queries
- Keyword-matching FAQ system with links to relevant pages
```
