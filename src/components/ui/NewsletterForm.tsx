"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

export interface NewsletterFormProps {
  className?: string;
  /** Use "dark" when placed on navy backgrounds, "light" on white/cloud backgrounds */
  variant?: "light" | "dark";
}

export function NewsletterForm({
  className,
  variant = "light",
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: NewsletterFormValues) {
    setApiError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      const json = await res.json();

      if (!res.ok) {
        setApiError(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setApiError("Unable to subscribe. Please try again later.");
    }
  }

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-lg px-4 py-3",
          isDark ? "bg-white/10 text-white" : "bg-accent-cyan/10 text-navy",
          className
        )}
      >
        <CheckCircle
          className="size-5 flex-shrink-0 text-accent-cyan"
          aria-hidden="true"
        />
        <span className="text-sm font-medium">
          Thanks for subscribing! Check your inbox for a confirmation.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-2", className)}
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Mail
            className={cn(
              "absolute left-3 top-1/2 size-4 -translate-y-1/2",
              isDark ? "text-steel" : "text-steel/60"
            )}
            aria-hidden="true"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address for newsletter"
            disabled={isSubmitting}
            className={cn(
              "w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm transition-colors",
              "focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/40",
              "disabled:opacity-60",
              isDark
                ? "border-slate bg-slate text-white placeholder:text-steel"
                : "border-border bg-white text-navy placeholder:text-steel/60",
              errors.email && "border-red-500 focus:ring-red-500/30"
            )}
            {...register("email")}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "bg-accent-cyan text-navy hover:brightness-110"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      {errors.email && (
        <p className="text-sm text-red-500" role="alert">
          {errors.email.message}
        </p>
      )}
      {apiError && (
        <p className="text-sm text-red-500" role="alert">
          {apiError}
        </p>
      )}
    </form>
  );
}
