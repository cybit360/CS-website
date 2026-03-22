'use client';

import { useState, useRef, useCallback } from 'react';
import { Upload, X, FileText, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  label: string;
  accept?: string;
  maxSizeMB?: number;
  required?: boolean;
  error?: string;
  helperText?: string;
  onChange?: (file: File | null) => void;
  className?: string;
}

export function FileUpload({
  label,
  accept = '.pdf,.doc,.docx',
  maxSizeMB = 5,
  required,
  error,
  helperText,
  onChange,
  className,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [localError, setLocalError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  const acceptedTypes = accept.split(',').map((t) => t.trim());

  const validateFile = useCallback(
    (f: File): string | null => {
      const ext = '.' + f.name.split('.').pop()?.toLowerCase();
      if (!acceptedTypes.some((t) => t === ext || f.type.includes(t.replace('.', '')))) {
        return `File type not allowed. Accepted: ${accept}`;
      }
      if (f.size > maxSizeBytes) {
        return `File too large. Maximum size: ${maxSizeMB}MB`;
      }
      return null;
    },
    [accept, acceptedTypes, maxSizeBytes, maxSizeMB]
  );

  const handleFile = useCallback(
    (f: File) => {
      const err = validateFile(f);
      if (err) {
        setLocalError(err);
        return;
      }
      setLocalError('');
      setFile(f);
      onChange?.(f);
    },
    [validateFile, onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files?.[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    },
    [handleFile]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    setLocalError('');
    onChange?.(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const displayError = error || localError;
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className={cn('space-y-1.5', className)}>
      <label className="block text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>

      {file ? (
        <div className="flex items-center gap-3 rounded-lg border border-accent-blue/30 bg-accent-blue-light/30 px-4 py-3">
          <FileText className="size-5 text-accent-blue flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-navy truncate">{file.name}</p>
            <p className="text-xs text-steel">{formatSize(file.size)}</p>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="rounded-md p-1 text-steel hover:text-error hover:bg-error/10 transition-colors"
            aria-label="Remove file"
          >
            <X className="size-4" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={cn(
            'cursor-pointer rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors',
            dragActive
              ? 'border-accent-blue bg-accent-blue-light/20'
              : 'border-border hover:border-accent-blue/50 hover:bg-cloud',
            displayError && 'border-error'
          )}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
        >
          <Upload className="mx-auto size-8 text-steel/40 mb-3" />
          <p className="text-sm font-medium text-navy mb-1">
            Drag & drop your file here, or{' '}
            <span className="text-accent-blue">browse</span>
          </p>
          <p className="text-xs text-steel">
            {accept.replace(/\./g, '').toUpperCase().replace(/,/g, ', ')} • Max {maxSizeMB}MB
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="sr-only"
        aria-label={label}
      />

      {displayError && (
        <p className="flex items-center gap-1.5 text-xs text-error font-medium" role="alert">
          <AlertCircle className="size-3.5 flex-shrink-0" />
          {displayError}
        </p>
      )}
      {helperText && !displayError && (
        <p className="text-xs text-steel">{helperText}</p>
      )}
    </div>
  );
}
