import { describe, it, expect } from 'vitest';
import { rateLimit } from '../rate-limit';

describe('rateLimit', () => {
  it('allows requests within limit', () => {
    const ip = 'test-ip-' + Date.now();
    const result = rateLimit(ip, 3, 60000);
    expect(result.success).toBe(true);
  });

  it('blocks after exceeding limit', () => {
    const ip = 'test-ip-block-' + Date.now();
    rateLimit(ip, 2, 60000);
    rateLimit(ip, 2, 60000);
    const result = rateLimit(ip, 2, 60000);
    expect(result.success).toBe(false);
  });

  it('returns retryAfterMs when blocked', () => {
    const ip = 'test-ip-retry-' + Date.now();
    rateLimit(ip, 1, 60000);
    const result = rateLimit(ip, 1, 60000);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.retryAfterMs).toBeGreaterThan(0);
    }
  });
});
