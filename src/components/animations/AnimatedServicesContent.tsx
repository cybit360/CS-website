'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { StaggerContainer, StaggerItem } from './StaggerContainer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { domains } from '@/components/sections/FeaturedDomains';

export function AnimatedServicesHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const heading = (
    <>
      <p className="text-accent-cyan font-semibold text-sm uppercase tracking-wider mb-4">
        Our Capabilities
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
        Services &amp; Solutions
      </h1>
      <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
        Ten mission-critical IT domains delivering end-to-end capabilities
        for government and enterprise. Each domain is staffed by cleared
        professionals with deep federal experience.
      </p>
    </>
  );

  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
        <Breadcrumb variant="dark" items={[{ label: "What We Do", href: "/what-we-do" }, { label: "Services" }]} />
        {prefersReducedMotion ? heading : (
          <FadeIn duration={0.6}>
            {heading}
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export function AnimatedDomainsGrid() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const cards = domains.map((domain) => (
    <Link
      key={domain.slug}
      href={`/what-we-do/services/${domain.slug}`}
      className="group bg-white rounded-xl p-6 border border-border card-hover block"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan mb-4 group-hover:bg-accent-cyan/10 transition-colors">
        <domain.icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-cyan transition-colors">
        {domain.title}
      </h2>
      <p className="text-steel text-sm leading-relaxed mb-4">
        {domain.description}
      </p>
      <span className="inline-flex items-center text-accent-cyan text-sm font-semibold">
        Learn More{' '}
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  ));

  if (prefersReducedMotion) {
    return (
      <section className="py-20 bg-cloud">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {cards}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-cloud">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {domains.map((domain) => (
            <StaggerItem key={domain.slug}>
              <Link
                href={`/what-we-do/services/${domain.slug}`}
                className="group bg-white rounded-xl p-6 border border-border card-hover block h-full"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy/5 text-accent-cyan mb-4 group-hover:bg-accent-cyan/10 transition-colors">
                  <domain.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-cyan transition-colors">
                  {domain.title}
                </h2>
                <p className="text-steel text-sm leading-relaxed mb-4">
                  {domain.description}
                </p>
                <span className="inline-flex items-center text-accent-cyan text-sm font-semibold">
                  Learn More{' '}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
