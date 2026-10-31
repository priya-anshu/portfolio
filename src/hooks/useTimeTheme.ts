import { useEffect, useState } from "react";

export const THEME_TOKENS = [
  "halloween",
  "christmas",
  "new-years",
  "earth-day",
  "valentines",
  "day-mode",
  "night-mode",
] as const;

export type ThemeToken = (typeof THEME_TOKENS)[number];

export function getTimeTheme(date: Date): ThemeToken {
  const month = date.getMonth();
  const day = date.getDate();

  if (month === 9 && day === 31) return "halloween";
  if (month === 11 && day === 25) return "christmas";
  if ((month === 11 && day === 31) || (month === 0 && day === 1)) {
    return "new-years";
  }
  if (month === 3 && day === 22) return "earth-day";
  if (month === 1 && day === 14) return "valentines";

  return date.getHours() >= 7 && date.getHours() < 19
    ? "day-mode"
    : "night-mode";
}

export default function useTimeTheme() {
  const [date, setDate] = useState(() => new Date());
  const scheduledTheme = getTimeTheme(date);
  const baseTheme =
    date.getHours() >= 7 && date.getHours() < 19 ? "day-mode" : "night-mode";
  const [themeOverride, setThemeOverride] = useState<ThemeToken | null>(() => {
    const savedMode = localStorage.getItem("theme");
    if (
      (scheduledTheme !== "day-mode" && scheduledTheme !== "night-mode")
    ) {
      return null;
    }

    if (savedMode === "dark") return "night-mode";
    if (savedMode === "light") return "day-mode";
    return null;
  });
  const themeToken = themeOverride ?? scheduledTheme;

  useEffect(() => {
    const updateDate = () => setDate(new Date());
    const intervalId = window.setInterval(updateDate, 60_000);
    window.addEventListener("focus", updateDate);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", updateDate);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = themeToken;
  }, [themeToken]);

  return { themeToken, themeOverride, setThemeOverride, baseTheme };
}
