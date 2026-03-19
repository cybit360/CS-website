"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Request Consultation",
  "Submit RFP",
  "Partnership",
  "Careers",
] as const;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

export interface ContactFormProps {
  className?: string;
  /** Called with form data on valid submission. Return a promise to show loading state. */
  onSubmit?: (data: FormData) => Promise<void> | void;
}

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!data.subject) errs.subject = "Please select a subject";
    if (!data.message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      await onSubmit?.(data);
      setSubmitted(true);
      setData(initialData);
    } catch {
      // Submission error handling can be extended here
    } finally {
      setLoading(false);
    }
  }

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  /* ---- Success state ---- */
  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-xl border border-border bg-white p-10 text-center shadow-sm",
          className
        )}
      >
        <CheckCircle className="size-12 text-accent-cyan" aria-hidden="true" />
        <h3 className="font-heading text-2xl font-bold text-navy">
          Thank you!
        </h3>
        <p className="max-w-md text-steel">
          Your message has been received. A member of our team will be in touch
          within one business day.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  /* ---- Form ---- */
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "space-y-6 rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8",
        className
      )}
    >
      {/* Name & Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Full Name"
          error={errors.name}
          required
        >
          <input
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Smith"
            className={inputClasses(errors.name)}
          />
        </Field>

        <Field
          label="Email"
          error={errors.email}
          required
        >
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@company.com"
            className={inputClasses(errors.email)}
          />
        </Field>
      </div>

      {/* Phone & Company row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone">
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(555) 123-4567"
            className={inputClasses()}
          />
        </Field>

        <Field label="Company">
          <input
            type="text"
            value={data.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company name"
            className={inputClasses()}
          />
        </Field>
      </div>

      {/* Subject */}
      <Field
        label="Subject"
        error={errors.subject}
        required
      >
        <select
          value={data.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={cn(inputClasses(errors.subject), !data.subject && "text-steel")}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field
        label="Message"
        error={errors.message}
        required
      >
        <textarea
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your project or question..."
          rows={5}
          className={cn(inputClasses(errors.message), "resize-y")}
        />
      </Field>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Internal helpers                                                   */
/* ------------------------------------------------------------------ */

function inputClasses(error?: string) {
  return cn(
    "w-full rounded-lg border bg-white px-4 py-2.5 text-slate font-body text-base transition-colors",
    "placeholder:text-steel/60",
    "focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/30",
    error ? "border-red-500" : "border-border"
  );
}

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-heading text-sm font-medium text-navy">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1 block text-sm text-red-500">
          {error}
        </span>
      )}
    </label>
  );
}
