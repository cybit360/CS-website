"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchIndex, type SearchItem } from "@/data/search-index";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Category display order */
const CATEGORY_ORDER = [
  "Main",
  "What We Do",
  "Who We Are",
  "Who We Serve",
  "Insights",
  "Careers",
  "Contact",
  "Legal",
];

/** Highlight matching substring within text */
function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-accent-cyan/20 text-accent-cyan rounded-sm px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

/** Check whether a search item matches the query */
function matchesQuery(item: SearchItem, q: string): boolean {
  const lower = q.toLowerCase();
  return (
    item.title.toLowerCase().includes(lower) ||
    item.description.toLowerCase().includes(lower) ||
    item.keywords.some((k) => k.toLowerCase().includes(lower))
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // ── Keyboard shortcut: Ctrl/Cmd + K ──────────────────────────────
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // ── Focus input when modal opens ─────────────────────────────────
  useEffect(() => {
    if (open) {
      // Delay to allow animation to start
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  // ── Lock body scroll while open ──────────────────────────────────
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ── Filtered + grouped results ───────────────────────────────────
  const filtered = useMemo(() => {
    if (!query.trim()) return searchIndex;
    return searchIndex.filter((item) => matchesQuery(item, query.trim()));
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchItem[]>();
    for (const item of filtered) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    // Return in defined order
    return CATEGORY_ORDER.filter((cat) => map.has(cat)).map((cat) => ({
      category: cat,
      items: map.get(cat)!,
    }));
  }, [filtered]);

  // Flat list of results for keyboard navigation
  const flatResults = useMemo(
    () => grouped.flatMap((g) => g.items),
    [grouped],
  );

  // ── Navigate to result ───────────────────────────────────────────
  const navigateTo = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  // ── Keyboard nav inside modal ────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < flatResults.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : flatResults.length - 1,
        );
      } else if (e.key === "Enter" && flatResults[activeIndex]) {
        e.preventDefault();
        navigateTo(flatResults[activeIndex].href);
      }
    },
    [flatResults, activeIndex, navigateTo],
  );

  // ── Scroll active item into view ─────────────────────────────────
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // ── Render ───────────────────────────────────────────────────────
  let flatIndex = -1; // tracks position in flat list for data-index

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Search site (Ctrl+K)"
        className="inline-flex items-center gap-2 rounded-lg p-2 text-navy hover:bg-cloud transition-colors lg:border lg:border-border lg:px-3 lg:py-1.5"
      >
        <Search className="size-5 lg:size-4" />
        <span className="hidden text-sm text-steel lg:inline">Search</span>
        <kbd className="hidden rounded border border-border bg-cloud px-1.5 py-0.5 font-mono text-[10px] text-steel lg:inline">
          <Command className="inline size-2.5" />K
        </kbd>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            className="relative z-10 mx-4 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 sm:mx-0"
            onKeyDown={handleKeyDown}
          >
            {/* Search input row */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="size-5 shrink-0 text-steel" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search pages, services, topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-base text-navy placeholder:text-steel/60 outline-none"
                aria-label="Search"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                onClick={() => setOpen(false)}
                className="rounded-md border border-border px-2 py-0.5 text-xs text-steel hover:text-navy transition-colors"
                aria-label="Close search"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div
              ref={listRef}
              className="max-h-[60vh] overflow-y-auto overscroll-contain p-2"
              role="listbox"
              aria-label="Search results"
            >
              {flatResults.length === 0 ? (
                <div className="px-4 py-12 text-center text-steel">
                  <p className="text-base font-medium">No results found</p>
                  <p className="mt-1 text-sm">
                    Try a different search term
                  </p>
                </div>
              ) : (
                grouped.map((group) => (
                  <Fragment key={group.category}>
                    <div className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-steel">
                      {group.category}
                    </div>
                    {group.items.map((item) => {
                      flatIndex++;
                      const idx = flatIndex;
                      return (
                        <button
                          key={item.href}
                          data-index={idx}
                          role="option"
                          aria-selected={activeIndex === idx}
                          onClick={() => navigateTo(item.href)}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={cn(
                            "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                            activeIndex === idx
                              ? "bg-accent-cyan/10"
                              : "hover:bg-cloud",
                          )}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="truncate text-sm font-medium text-navy">
                                {highlightMatch(item.title, query)}
                              </span>
                              <span className="shrink-0 rounded-full bg-cloud px-2 py-0.5 text-[10px] font-medium text-steel">
                                {item.category}
                              </span>
                            </div>
                            <p className="mt-0.5 truncate text-xs text-steel">
                              {highlightMatch(item.description, query)}
                            </p>
                          </div>
                          <ArrowRight
                            className={cn(
                              "size-4 shrink-0 text-steel/40 transition-all",
                              activeIndex === idx &&
                                "translate-x-0.5 text-accent-cyan",
                            )}
                          />
                        </button>
                      );
                    })}
                  </Fragment>
                ))
              )}
            </div>

            {/* Footer hints */}
            <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-[11px] text-steel">
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-border bg-cloud px-1 py-0.5 font-mono text-[10px]">
                  &uarr;&darr;
                </kbd>{" "}
                Navigate
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-border bg-cloud px-1 py-0.5 font-mono text-[10px]">
                  &crarr;
                </kbd>{" "}
                Open
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-border bg-cloud px-1 py-0.5 font-mono text-[10px]">
                  Esc
                </kbd>{" "}
                Close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
