import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge component', () => {
  describe('rendering children', () => {
    it('renders text content', () => {
      render(<Badge>Test Label</Badge>);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('renders as a span element', () => {
      render(<Badge>Badge</Badge>);
      const el = screen.getByText('Badge');
      expect(el.tagName).toBe('SPAN');
    });
  });

  describe('variants', () => {
    const variants = ['default', 'blue', 'gold', 'success', 'error', 'outline'] as const;

    it.each(variants)('renders with variant="%s" without crashing', (variant) => {
      render(<Badge variant={variant}>{variant} badge</Badge>);
      expect(screen.getByText(`${variant} badge`)).toBeInTheDocument();
    });

    it('uses default variant when none is specified', () => {
      render(<Badge>Default</Badge>);
      const el = screen.getByText('Default');
      expect(el.className).toContain('border');
    });
  });

  describe('sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    it.each(sizes)('renders with size="%s" without crashing', (size) => {
      render(<Badge size={size}>{size} badge</Badge>);
      expect(screen.getByText(`${size} badge`)).toBeInTheDocument();
    });

    it('applies small size classes', () => {
      render(<Badge size="sm">Small</Badge>);
      const el = screen.getByText('Small');
      expect(el.className).toContain('px-2');
      expect(el.className).toContain('text-[10px]');
    });

    it('applies large size classes', () => {
      render(<Badge size="lg">Large</Badge>);
      const el = screen.getByText('Large');
      expect(el.className).toContain('px-3');
    });
  });

  describe('custom className', () => {
    it('accepts and applies additional className', () => {
      render(<Badge className="mt-4">Custom</Badge>);
      const el = screen.getByText('Custom');
      expect(el.className).toContain('mt-4');
    });
  });

  describe('base styles', () => {
    it('always includes base layout classes', () => {
      render(<Badge>Base</Badge>);
      const el = screen.getByText('Base');
      expect(el.className).toContain('inline-flex');
      expect(el.className).toContain('items-center');
      expect(el.className).toContain('rounded-full');
      expect(el.className).toContain('font-semibold');
    });
  });
});
