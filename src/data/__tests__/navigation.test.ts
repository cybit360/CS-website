import { describe, it, expect } from 'vitest';
import { mainNavItems, utilityLinks } from '@/data/navigation';

describe('mainNavItems', () => {
  it('contains 6 top-level navigation items', () => {
    expect(mainNavItems).toHaveLength(6);
  });

  it('all items have label and href', () => {
    for (const item of mainNavItems) {
      expect(item.label).toBeTruthy();
      expect(item.href).toBeTruthy();
    }
  });

  it('has the expected top-level labels', () => {
    const labels = mainNavItems.map((item) => item.label);
    expect(labels).toEqual([
      'What We Do',
      'Who We Are',
      'Who We Serve',
      'Insights',
      'Careers',
      'Contact',
    ]);
  });

  it('all top-level items have children', () => {
    for (const item of mainNavItems) {
      expect(item.children).toBeDefined();
      expect(item.children!.length).toBeGreaterThan(0);
    }
  });

  it('all children items have label and href', () => {
    for (const item of mainNavItems) {
      if (item.children) {
        for (const child of item.children) {
          expect(child.label).toBeTruthy();
          expect(child.href).toBeTruthy();
        }
      }
    }
  });

  it('"What We Do" has 4 children', () => {
    const whatWeDo = mainNavItems.find((item) => item.label === 'What We Do');
    expect(whatWeDo).toBeDefined();
    expect(whatWeDo!.children).toHaveLength(4);
  });

  it('"Who We Are" has 4 children', () => {
    const whoWeAre = mainNavItems.find((item) => item.label === 'Who We Are');
    expect(whoWeAre).toBeDefined();
    expect(whoWeAre!.children).toHaveLength(4);
  });

  it('"Who We Serve" has 3 children', () => {
    const whoWeServe = mainNavItems.find((item) => item.label === 'Who We Serve');
    expect(whoWeServe).toBeDefined();
    expect(whoWeServe!.children).toHaveLength(3);
  });

  it('children descriptions are present where expected', () => {
    for (const item of mainNavItems) {
      if (item.children) {
        for (const child of item.children) {
          expect(child.description).toBeTruthy();
        }
      }
    }
  });

  it('all hrefs start with a forward slash', () => {
    for (const item of mainNavItems) {
      expect(item.href.startsWith('/')).toBe(true);
      if (item.children) {
        for (const child of item.children) {
          expect(child.href.startsWith('/')).toBe(true);
        }
      }
    }
  });
});

describe('utilityLinks', () => {
  it('contains utility links', () => {
    expect(utilityLinks.length).toBeGreaterThan(0);
  });

  it('all utility links have label and href', () => {
    for (const link of utilityLinks) {
      expect(link.label).toBeTruthy();
      expect(link.href).toBeTruthy();
    }
  });
});
