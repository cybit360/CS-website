'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, MessageSquare, Shield, Zap, Target, CheckCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { CountUp } from './CountUp';

const stats = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 6, suffix: '', label: 'Major Defense & State Programs' },
  { value: 10, suffix: 'K+', label: 'Users Supported Globally' },
  { value: 100, suffix: '%', label: 'Compliance Track Record' },
];

const capabilities = [
  'FedRAMP Authorized',
  'CMMC Level 3',
  'ISO 27001 Certified',
  'SOC 2 Type II',
  'TS/SCI Cleared Staff',
  'Zero-Trust Architecture',
];

export function AnimatedHeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <HeroContent />
    );
  }

  return (
    <HeroContent animated />
  );
}

function HeroContent({ animated = false }: { animated?: boolean }) {
  const Wrap = animated ? FadeIn : 'div' as unknown as typeof FadeIn;

  return (
    <section className="relative min-h-[92vh] flex items-center bg-navy overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-[700px] h-[700px] bg-accent-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent-gold/8 rounded-full blur-[130px]" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/3 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge - no animation delay (above the fold, don't delay LCP) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-blue/40 bg-accent-blue/15 px-5 py-2 text-xs font-bold tracking-widest text-accent-blue uppercase mb-8">
              <Shield className="w-3.5 h-3.5" />
              VETERAN-OWNED &bull; CLEARED PROFESSIONALS &bull; 20+ YEARS
            </div>

            {/* Heading - no delay for LCP */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] mb-6">
              Mission-grade innovation for{' '}
              <span className="text-accent-blue">cyber, cloud, and AI.</span>
            </h1>

            {animated ? (
              <FadeIn delay={0.2} duration={0.6}>
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
                  We design, secure, and operate digital mission systems for government
                  and enterprise&mdash;at scale and in compliance.
                </p>
              </FadeIn>
            ) : (
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
                We design, secure, and operate digital mission systems for government
                and enterprise&mdash;at scale and in compliance.
              </p>
            )}

            {animated ? (
              <FadeIn delay={0.4} duration={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <HeroCTAButtons />
                </div>
              </FadeIn>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <HeroCTAButtons />
              </div>
            )}
          </div>

          {/* Right side capability badges */}
          {animated ? (
            <FadeIn delay={0.3} duration={0.7} direction="left" className="hidden lg:flex flex-col gap-4 items-end">
              <CapabilityBadges />
            </FadeIn>
          ) : (
            <div className="hidden lg:flex flex-col gap-4 items-end">
              <CapabilityBadges />
            </div>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-gold to-accent-blue" />
    </section>
  );
}

function HeroCTAButtons() {
  return (
    <>
      <Link
        href="/what-we-do/services"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white font-bold rounded-lg hover:bg-accent-blue-dark transition-all text-base shadow-lg shadow-accent-blue/30 hover:shadow-xl hover:shadow-accent-blue/40 hover:-translate-y-0.5"
      >
        Explore Services <ArrowRight className="w-5 h-5" />
      </Link>
      <Link
        href="/what-we-do/capability-statements"
        className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all text-base"
      >
        <Download className="w-4 h-4" /> Capability Statement
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-accent-gold/40 text-accent-gold font-semibold rounded-lg hover:bg-accent-gold/10 hover:border-accent-gold/60 transition-all text-base"
      >
        <MessageSquare className="w-4 h-4" /> Contact / RFP
      </Link>
    </>
  );
}

function CapabilityBadges() {
  return (
    <>
      <div className="rounded-2xl p-6 bg-white/8 border border-white/15 backdrop-blur-sm max-w-sm">
        <h3 className="text-accent-blue text-sm font-bold uppercase tracking-wider mb-4">Compliance & Certifications</h3>
        <div className="grid grid-cols-2 gap-3">
          {capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
              <span className="text-white/80 text-sm">{cap}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl p-5 bg-white/8 border border-white/15 backdrop-blur-sm max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent-gold/20 flex items-center justify-center">
            <Target className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Active Programs</p>
            <p className="text-white/70 text-xs">DoD, DoS, DHS, IC & more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function AnimatedStatsSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section className="relative bg-navy-950">
      <div className="py-16 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-accent-blue mb-2 transition-transform group-hover:scale-105">
                  {prefersReducedMotion ? (
                    <>{stat.value}{stat.suffix}</>
                  ) : (
                    <CountUp to={stat.value} suffix={stat.suffix} duration={2} />
                  )}
                </div>
                <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AnimatedCTABanner() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const content = (
    <>
      <div className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-bold tracking-widest text-accent-blue uppercase mb-6">
        <Zap className="w-3.5 h-3.5" />
        GET STARTED TODAY
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
        Ready to Modernize Your Mission?
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
        From Zero-Trust architecture to cloud migration, our experts are ready to help you
        accelerate outcomes while maintaining compliance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white font-bold rounded-lg hover:bg-accent-blue-dark transition-all shadow-lg shadow-accent-blue/30 hover:shadow-xl hover:-translate-y-0.5"
        >
          Request a Consultation <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/what-we-do/capability-statements"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all"
        >
          <Download className="w-5 h-5" /> Download Capability Statement
        </Link>
      </div>
    </>
  );

  return (
    <section className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {prefersReducedMotion ? (
          content
        ) : (
          <FadeIn duration={0.7}>
            {content}
          </FadeIn>
        )}
      </div>
    </section>
  );
}
