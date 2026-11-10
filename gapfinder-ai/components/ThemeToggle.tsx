"use client";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("gf-theme", next); } catch {}
    setDark(!dark);
  }
  return (
    <button type="button" className={`theme-toggle ${className}`} onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
      <Icon name={dark ? "sun" : "moon"} size={17} />
    </button>
  );
}
