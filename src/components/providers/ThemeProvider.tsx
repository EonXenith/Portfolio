"use client";
import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

function getServerSnapshot(): Theme {
  return "dark";
}

function getSnapshot(): Theme {
  return (localStorage.getItem("theme") as Theme) ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [theme, setTheme] = useState<Theme>(stored);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
