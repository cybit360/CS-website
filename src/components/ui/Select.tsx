'use client';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, required, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="space-y-1.5">
        <label htmlFor={inputId} className="block text-sm font-semibold text-navy">
          {label}
          {required && <span className="text-error ml-0.5">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              'w-full appearance-none rounded-lg border border-border bg-white px-4 py-3 pr-10 text-sm text-navy transition-colors',
              'focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none',
              error && 'border-error focus:border-error focus:ring-error/20',
              !props.value && 'text-steel/50',
              className
            )}
            aria-invalid={!!error}
            required={required}
            {...props}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-steel pointer-events-none" />
        </div>
        {error && (
          <p className="text-xs text-error font-medium" role="alert">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';
export { Select };
