"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative inline-flex items-center justify-center rounded-lg p-2 text-navy hover:bg-cloud dark:text-white/80 dark:hover:bg-white/10 transition-colors"
    >
      <Sun
        className={`size-5 transition-all duration-300 ${
          resolvedTheme === "dark"
            ? "scale-0 rotate-90 opacity-0 absolute"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`size-5 transition-all duration-300 ${
          resolvedTheme === "dark"
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0 absolute"
        }`}
      />
    </button>
  );
}
