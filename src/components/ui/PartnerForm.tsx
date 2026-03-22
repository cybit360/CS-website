"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { useToast } from "./Toast";

const PARTNERSHIP_TYPE_OPTIONS = [
  { value: "Technology Partners", label: "Technology Partners" },
  { value: "Subcontracting", label: "Subcontracting" },
  { value: "Teaming Agreements", label: "Teaming Agreements" },
  { value: "Mentor-Protege", label: "Mentor-Protege" },
  { value: "Other", label: "Other" },
];

const partnerSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("A valid email address is required"),
  company: z.string().min(1, "Company name is required").max(200),
  partnershipType: z.string().max(200).default(""),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5,000 characters"),
  website: z.string(),
});

type PartnerFormValues = z.input<typeof partnerSchema>;

export interface PartnerFormProps {
  className?: string;
}

export function PartnerForm({ className }: PartnerFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      partnershipType: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: PartnerFormValues) {
    setApiError("");

    // Honeypot: if a bot filled in the hidden "website" field, silently succeed
    if (data.website) {
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          partnershipType: data.partnershipType,
          message: data.message,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        const errorMsg = json.error || "Something went wrong. Please try again.";
        setApiError(errorMsg);
        addToast({
          type: "error",
          title: "Submission Failed",
          message: errorMsg,
        });
        return;
      }

      setSubmitted(true);
      reset();
      addToast({
        type: "success",
        title: "Inquiry Sent!",
        message:
          json.message ||
          "Thank you for your partnership inquiry. Our team will be in touch shortly.",
      });
    } catch {
      const errorMsg = "Unable to send your inquiry. Please try again later.";
      setApiError(errorMsg);
      addToast({
        type: "error",
        title: "Network Error",
        message: errorMsg,
      });
    }
  }

  /* ---- Success state ---- */
  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-xl border border-border bg-white p-10 text-center shadow-sm",
          className,
        )}
      >
        <CheckCircle className="size-12 text-accent-cyan" aria-hidden="true" />
        <h3 className="font-heading text-2xl font-bold text-navy">
          Thank You!
        </h3>
        <p className="max-w-md text-steel">
          Your partnership inquiry has been received. A member of our team will
          be in touch within one business day.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSubmitted(false)}
        >
          Submit another inquiry
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
        className,
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
        <label htmlFor="partner-website">Website</label>
        <input
          id="partner-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Name & Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="partner-name" error={errors.name?.message} required>
          {({ id, ariaDescribedby, ariaRequired }) => (
            <input
              id={id}
              type="text"
              placeholder="Jane Smith"
              aria-required={ariaRequired}
              aria-describedby={ariaDescribedby}
              aria-invalid={errors.name ? true : undefined}
              className={inputClasses(errors.name?.message)}
              {...register("name")}
            />
          )}
        </Field>

        <Field label="Email" name="partner-email" error={errors.email?.message} required>
          {({ id, ariaDescribedby, ariaRequired }) => (
            <input
              id={id}
              type="email"
              placeholder="jane@company.com"
              aria-required={ariaRequired}
              aria-describedby={ariaDescribedby}
              aria-invalid={errors.email ? true : undefined}
              className={inputClasses(errors.email?.message)}
              {...register("email")}
            />
          )}
        </Field>
      </div>

      {/* Company & Partnership Type row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" name="partner-company" error={errors.company?.message} required>
          {({ id, ariaDescribedby, ariaRequired }) => (
            <input
              id={id}
              type="text"
              placeholder="Company name"
              aria-required={ariaRequired}
              aria-describedby={ariaDescribedby}
              aria-invalid={errors.company ? true : undefined}
              className={inputClasses(errors.company?.message)}
              {...register("company")}
            />
          )}
        </Field>

        <Field label="Partnership Type" name="partner-type" error={errors.partnershipType?.message}>
          {({ id, ariaDescribedby }) => (
            <select
              id={id}
              aria-describedby={ariaDescribedby}
              aria-invalid={errors.partnershipType ? true : undefined}
              className={cn(inputClasses(errors.partnershipType?.message))}
              defaultValue=""
              {...register("partnershipType")}
            >
              <option value="">Select a partnership type</option>
              {PARTNERSHIP_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>

      {/* Message */}
      <Field label="Message" name="partner-message" error={errors.message?.message} required>
        {({ id, ariaDescribedby, ariaRequired }) => (
          <textarea
            id={id}
            placeholder="Tell us about the partnership opportunity you have in mind..."
            rows={5}
            aria-required={ariaRequired}
            aria-describedby={ariaDescribedby}
            aria-invalid={errors.message ? true : undefined}
            className={cn(inputClasses(errors.message?.message), "resize-y")}
            {...register("message")}
          />
        )}
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
          "Submit Inquiry"
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
    error ? "border-red-500" : "border-border",
  );
}

interface FieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: (props: {
    id: string;
    ariaDescribedby?: string;
    ariaRequired?: boolean;
  }) => React.ReactNode;
}

function Field({ label, name, error, required, children }: FieldProps) {
  const inputId = `field-${name}`;
  const errorId = `field-${name}-error`;
  return (
    <div className="block">
      <label
        htmlFor={inputId}
        className="mb-1.5 block font-heading text-sm font-medium text-navy"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children({
        id: inputId,
        ariaDescribedby: error ? errorId : undefined,
        ariaRequired: required,
      })}
      {error && (
        <span
          id={errorId}
          role="alert"
          className="mt-1 block text-sm text-red-500"
        >
          {error}
        </span>
      )}
    </div>
  );
}
