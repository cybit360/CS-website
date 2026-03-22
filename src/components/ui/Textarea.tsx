'use client';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  showCount?: boolean;
  maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, showCount, maxLength, className, required, id, value, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const charCount = typeof value === 'string' ? value.length : 0;
    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor={inputId} className="block text-sm font-semibold text-navy">
            {label}
            {required && <span className="text-error ml-0.5">*</span>}
          </label>
          {showCount && maxLength && (
            <span className={cn('text-xs', charCount > maxLength ? 'text-error' : 'text-steel')}>
              {charCount}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-steel/50 transition-colors min-h-[120px] resize-y',
            'focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none',
            error && 'border-error focus:border-error focus:ring-error/20',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-error font-medium" role="alert">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-xs text-steel">{helperText}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
export { Textarea };
