/**
 * In-memory rate limiting utility for API routes.
 *
 * Tracks request counts per IP address within a sliding time window.
 * A periodic cleanup runs every 60 seconds to evict expired entries
 * and prevent unbounded memory growth.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number; // epoch ms when the window resets
}

const ipMap = new Map<string, RateLimitEntry>();

// --- Periodic cleanup --------------------------------------------------------

function cleanup() {
  const now = Date.now();
  for (const [ip, entry] of ipMap) {
    if (now >= entry.resetTime) {
      ipMap.delete(ip);
    }
  }
}

// Start the cleanup interval (unref so it doesn't keep Node alive)
const cleanupInterval = setInterval(cleanup, 60_000);
if (typeof cleanupInterval === "object" && "unref" in cleanupInterval) {
  cleanupInterval.unref();
}

// --- Public API --------------------------------------------------------------

interface RateLimitSuccess {
  success: true;
}

interface RateLimitFailure {
  success: false;
  retryAfterMs: number;
}

export type RateLimitResult = RateLimitSuccess | RateLimitFailure;

/**
 * Check whether a request from `ip` is allowed.
 *
 * @param ip        - Client IP address (or other unique key).
 * @param max       - Maximum number of requests allowed in the window.
 * @param windowMs  - Window duration in milliseconds.
 * @returns An object indicating success or how long the caller must wait.
 */
export function rateLimit(
  ip: string,
  max: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  const entry = ipMap.get(ip);

  // No existing entry or window has expired — start a fresh window.
  if (!entry || now >= entry.resetTime) {
    ipMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true };
  }

  // Within the window — check count.
  if (entry.count < max) {
    entry.count += 1;
    return { success: true };
  }

  // Over the limit.
  return {
    success: false,
    retryAfterMs: entry.resetTime - now,
  };
}
