'use client';

import { useEffect, useState } from 'react';
import { StaggerContainer, StaggerItem } from './StaggerContainer';

interface AnimatedTeamGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedTeamGrid({ children, className, staggerDelay = 0.1 }: AnimatedTeamGridProps) {
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
    <StaggerContainer staggerDelay={staggerDelay} className={className}>
      {children}
    </StaggerContainer>
  );
}

export { StaggerItem as AnimatedTeamItem };
