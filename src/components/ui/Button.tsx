"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Slot } from "./Slot";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent-cyan text-navy hover:bg-accent-cyan-dark active:bg-accent-cyan-dark/90 font-semibold",
  secondary:
    "bg-navy text-white hover:bg-navy-light active:bg-navy-light/90 font-semibold",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white active:bg-navy-light font-semibold",
  ghost:
    "text-navy hover:bg-cloud active:bg-cloud-dark font-medium",
} as const;

const sizes = {
  sm: "px-3.5 py-1.5 text-sm gap-1.5 rounded-md",
  md: "px-5 py-2.5 text-base gap-2 rounded-lg",
  lg: "px-7 py-3.5 text-lg gap-2.5 rounded-lg",
} as const;

const iconSizes = {
  sm: "[&_svg]:size-4",
  md: "[&_svg]:size-5",
  lg: "[&_svg]:size-5",
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  asChild?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      iconLeft,
      iconRight,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap font-heading transition-colors duration-150",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan",
      "disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      sizes[size],
      iconSizes[size],
      className
    );

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {iconLeft}
          {children}
          {iconRight}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
