'use client';

import { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';

interface AnimatedContactFormAreaProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedContactFormArea({ children, className }: AnimatedContactFormAreaProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <FadeIn duration={0.7} direction="up" className={className}>
      {children}
    </FadeIn>
  );
}
