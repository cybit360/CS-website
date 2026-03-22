import { describe, it, expect } from 'vitest';
import { serviceDomains, getServiceBySlug } from '@/data/services';

describe('serviceDomains data', () => {
  it('contains exactly 10 service domains', () => {
    expect(serviceDomains).toHaveLength(10);
  });

  const expectedSlugs = [
    'cybersecurity',
    'cloud',
    'infrastructure',
    'software-devops',
    'data-analytics',
    'ai-automation',
    'enterprise-it',
    'digital-transformation',
    'emerging-tech',
    'industry-specific',
  ];

  it('includes all expected service domain slugs', () => {
    const slugs = serviceDomains.map((s) => s.slug);
    for (const expected of expectedSlugs) {
      expect(slugs).toContain(expected);
    }
  });

  it('all domains have required fields', () => {
    for (const domain of serviceDomains) {
      expect(domain.title).toBeTruthy();
      expect(domain.slug).toBeTruthy();
      expect(domain.intro).toBeTruthy();
      expect(domain.icon).toBeTruthy();
      expect(Array.isArray(domain.functionalAreas)).toBe(true);
      expect(domain.functionalAreas.length).toBeGreaterThan(0);
      expect(Array.isArray(domain.exampleServices)).toBe(true);
      expect(domain.exampleServices.length).toBeGreaterThan(0);
      expect(Array.isArray(domain.standards)).toBe(true);
      expect(Array.isArray(domain.keyBenefits)).toBe(true);
      expect(Array.isArray(domain.ctas)).toBe(true);
      expect(domain.ctas.length).toBeGreaterThan(0);
      expect(domain.targetCustomers).toBeTruthy();
    }
  });

  it('all slugs are unique', () => {
    const slugs = serviceDomains.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all CTAs have label and href', () => {
    for (const domain of serviceDomains) {
      for (const cta of domain.ctas) {
        expect(cta.label).toBeTruthy();
        expect(cta.href).toBeTruthy();
      }
    }
  });
});

describe('getServiceBySlug()', () => {
  it('returns the correct service for a valid slug', () => {
    const service = getServiceBySlug('cybersecurity');
    expect(service).toBeDefined();
    expect(service!.title).toBe('Cybersecurity & Risk Management');
  });

  it('returns the correct service for "cloud"', () => {
    const service = getServiceBySlug('cloud');
    expect(service).toBeDefined();
    expect(service!.title).toBe('Cloud Computing & Virtualization');
  });

  it('returns undefined for an invalid slug', () => {
    const service = getServiceBySlug('nonexistent-service');
    expect(service).toBeUndefined();
  });

  it('returns undefined for an empty string', () => {
    const service = getServiceBySlug('');
    expect(service).toBeUndefined();
  });
});
