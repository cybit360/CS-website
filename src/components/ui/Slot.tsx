import {
  forwardRef,
  cloneElement,
  isValidElement,
  type ReactNode,
  type HTMLAttributes,
  type Ref,
} from "react";
import { cn } from "@/lib/utils";

interface SlotProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * Minimal Slot component that merges its props onto its single child element.
 * Used by Button's `asChild` pattern to render as an anchor or Next.js Link.
 */
const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, className, ...props }, ref) => {
    // Collect non-element children (icons, text) passed alongside the slotted element
    const childArray = Array.isArray(children) ? children : [children];
    const slottable = childArray.find(isValidElement) as React.ReactElement<
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    > | undefined;

    if (!slottable) {
      return null;
    }

    // Merge className and ref, then spread remaining props
    return cloneElement(slottable, {
      ...props,
      ...slottable.props,
      ref: ref as Ref<HTMLElement>,
      className: cn(className, slottable.props.className),
      children: (
        <>
          {childArray.filter((c) => c !== slottable)}
          {slottable.props.children}
        </>
      ),
    });
  }
);

Slot.displayName = "Slot";

export { Slot };
