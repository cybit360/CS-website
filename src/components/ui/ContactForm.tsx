"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const SUBJECT_OPTIONS = [
  "General",
  "Demo",
  "Consultation",
  "RFP",
  "Partnership",
  "Media",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(200),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(30),
  company: z.string().max(200),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5,000 characters"),
  website: z.string(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setApiError("");

    // Honeypot: if a bot filled in the hidden "website" field, silently succeed
    if (data.website) {
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          subject: data.subject,
          message: data.message,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setApiError(json.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setApiError("Unable to send your message. Please try again later.");
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
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "space-y-6 rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8",
        className
      )}
    >
      {/* General API error */}
      {apiError && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {apiError}
        </div>
      )}

      {/* Honeypot — hidden from humans, visible to bots */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Name & Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message} required>
          <input
            type="text"
            placeholder="Jane Smith"
            className={inputClasses(errors.name?.message)}
            {...register("name")}
          />
        </Field>

        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            placeholder="jane@company.com"
            className={inputClasses(errors.email?.message)}
            {...register("email")}
          />
        </Field>
      </div>

      {/* Phone & Company row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone">
          <input
            type="tel"
            placeholder="(555) 123-4567"
            className={inputClasses()}
            {...register("phone")}
          />
        </Field>

        <Field label="Company">
          <input
            type="text"
            placeholder="Company name"
            className={inputClasses()}
            {...register("company")}
          />
        </Field>
      </div>

      {/* Subject */}
      <Field label="Subject" error={errors.subject?.message} required>
        <select
          className={cn(inputClasses(errors.subject?.message))}
          defaultValue=""
          {...register("subject")}
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
      <Field label="Message" error={errors.message?.message} required>
        <textarea
          placeholder="Tell us about your project or question..."
          rows={5}
          className={cn(inputClasses(errors.message?.message), "resize-y")}
          {...register("message")}
        />
      </Field>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
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
    "focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30",
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
