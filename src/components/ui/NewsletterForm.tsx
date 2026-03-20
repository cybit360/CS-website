"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NewsletterFormProps {
  className?: string;
  /** Use "dark" when placed on navy backgrounds, "light" on white/cloud backgrounds */
  variant?: "light" | "dark";
}

export function NewsletterForm({
  className,
  variant = "light",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      // Simulate API call — in production, connect to Mailchimp/SendGrid/etc.
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
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
          className={cn(
            "size-5 flex-shrink-0",
            isDark ? "text-accent-cyan" : "text-accent-cyan"
          )}
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
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-2", className)}
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 size-4",
              isDark ? "text-steel" : "text-steel/60"
            )}
            aria-hidden="true"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") {
                setStatus("idle");
                setErrorMsg("");
              }
            }}
            placeholder="Enter your email address"
            aria-label="Email address for newsletter"
            disabled={status === "loading"}
            className={cn(
              "w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:border-accent-cyan",
              "disabled:opacity-60",
              isDark
                ? "border-slate bg-slate text-white placeholder:text-steel"
                : "border-border bg-white text-navy placeholder:text-steel/60",
              status === "error" && "border-red-500 focus:ring-red-500/30"
            )}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || !email.trim()}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "bg-accent-cyan text-navy hover:brightness-110"
          )}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      {status === "error" && errorMsg && (
        <p className="text-sm text-red-500" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
