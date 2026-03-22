import { describe, it, expect } from 'vitest';
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
  formatDate,
} from '@/data/blog-posts';

describe('blogPosts data', () => {
  it('contains at least one blog post', () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it('all posts have required fields', () => {
    for (const post of blogPosts) {
      expect(post.title).toBeTruthy();
      expect(post.slug).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.content).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.author).toBeDefined();
      expect(post.author.name).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.readTime).toBeTruthy();
      expect(Array.isArray(post.tags)).toBe(true);
    }
  });

  it('all slugs are unique', () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all dates are valid ISO date strings', () => {
    for (const post of blogPosts) {
      const parsed = new Date(post.date);
      expect(parsed.toString()).not.toBe('Invalid Date');
    }
  });
});

describe('getBlogPostBySlug()', () => {
  it('returns the correct post for a valid slug', () => {
    const post = getBlogPostBySlug('zero-trust-architecture-federal-agency-implementation-guide');
    expect(post).toBeDefined();
    expect(post!.title).toBe('Zero-Trust Architecture: A Federal Agency Implementation Guide');
  });

  it('returns undefined for an invalid slug', () => {
    const post = getBlogPostBySlug('this-slug-does-not-exist');
    expect(post).toBeUndefined();
  });

  it('returns undefined for an empty string', () => {
    const post = getBlogPostBySlug('');
    expect(post).toBeUndefined();
  });
});

describe('getRelatedPosts()', () => {
  it('returns posts from the same category, excluding the current post', () => {
    const related = getRelatedPosts(
      'fedramp-authorization-what-contractors-need-to-know-2026',
      'Cloud'
    );
    expect(related.length).toBeGreaterThan(0);
    for (const post of related) {
      expect(post.category).toBe('Cloud');
      expect(post.slug).not.toBe('fedramp-authorization-what-contractors-need-to-know-2026');
    }
  });

  it('respects the limit parameter', () => {
    const related = getRelatedPosts(
      'fedramp-authorization-what-contractors-need-to-know-2026',
      'Cloud',
      1
    );
    expect(related.length).toBeLessThanOrEqual(1);
  });

  it('returns an empty array when no related posts exist', () => {
    const related = getRelatedPosts('some-slug', 'NonExistentCategory');
    expect(related).toEqual([]);
  });
});

describe('formatDate()', () => {
  it('formats an ISO date string into a human-readable format', () => {
    // Use a mid-day time to avoid timezone-related date shifts
    const result = formatDate('2026-03-15T12:00:00.000Z');
    expect(result).toContain('March');
    expect(result).toContain('2026');
    expect(result).toContain('15');
  });

  it('handles a date without time component', () => {
    const result = formatDate('2026-01-15');
    expect(result).toContain('January');
    expect(result).toContain('2026');
  });
});
