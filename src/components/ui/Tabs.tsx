"use client";

import { useState, useId, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  className?: string;
}

export function Tabs({ tabs, className }: TabsProps) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab list */}
      <div role="tablist" aria-orientation="horizontal" className="flex border-b border-border">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <button
              key={index}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                let nextIndex = activeIndex;
                if (e.key === "ArrowRight") {
                  nextIndex = (activeIndex + 1) % tabs.length;
                } else if (e.key === "ArrowLeft") {
                  nextIndex =
                    (activeIndex - 1 + tabs.length) % tabs.length;
                } else if (e.key === "Home") {
                  nextIndex = 0;
                } else if (e.key === "End") {
                  nextIndex = tabs.length - 1;
                } else {
                  return;
                }
                e.preventDefault();
                setActiveIndex(nextIndex);
                document
                  .getElementById(`${baseId}-tab-${nextIndex}`)
                  ?.focus();
              }}
              className={cn(
                "relative px-5 py-3 font-heading text-sm font-medium transition-colors sm:text-base",
                "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-cyan",
                isActive
                  ? "text-accent-cyan-dark"
                  : "text-steel hover:text-navy"
              )}
            >
              {tab.label}
              {/* Active underline indicator */}
              {isActive && (
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-cyan"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        const tabId = `${baseId}-tab-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={index}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            tabIndex={0}
            hidden={!isActive}
            className="py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}
