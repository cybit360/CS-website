import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn() utility function', () => {
  it('merges multiple class names', () => {
    const result = cn('text-red-500', 'bg-blue-500');
    expect(result).toBe('text-red-500 bg-blue-500');
  });

  it('deduplicates conflicting Tailwind classes (last wins)', () => {
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });

  it('handles conditional classes via clsx syntax', () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn('base', isActive && 'active', isDisabled && 'disabled');
    expect(result).toBe('base active');
  });

  it('handles undefined inputs', () => {
    const result = cn('base', undefined, 'extra');
    expect(result).toBe('base extra');
  });

  it('handles null inputs', () => {
    const result = cn('base', null, 'extra');
    expect(result).toBe('base extra');
  });

  it('handles false and empty string inputs', () => {
    const result = cn('base', false, '', 'extra');
    expect(result).toBe('base extra');
  });

  it('handles no arguments', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('handles object syntax from clsx', () => {
    const result = cn({ 'text-red-500': true, 'bg-blue-500': false });
    expect(result).toBe('text-red-500');
  });

  it('handles array syntax from clsx', () => {
    const result = cn(['text-red-500', 'bg-blue-500']);
    expect(result).toBe('text-red-500 bg-blue-500');
  });

  it('merges conflicting padding classes correctly', () => {
    const result = cn('px-4 py-2', 'px-6');
    expect(result).toBe('py-2 px-6');
  });
});
