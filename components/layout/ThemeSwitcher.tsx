"use client";

import { useAppStore } from "@/store";

export default function ThemeSwitcher() {

  const {
    theme,
    toggleTheme,
  } = useAppStore();

  return (
    <button
      onClick={toggleTheme}
    >
      {theme === "light"
        ? "🌙 Dark"
        : "☀️ Light"}
    </button>
  );

}