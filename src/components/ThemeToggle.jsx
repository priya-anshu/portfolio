import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const Icon = isDark ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`fixed top-3 right-3 md:top-5 md:right-5 z-50 w-10 h-10 rounded-full border flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
        isDark
          ? "bg-[#0a0a0a] border-[#333] text-gray-100 hover:bg-[#181818]"
          : "bg-[#fbfaf6] border-[#e5e1d8] text-amber-700 hover:bg-[#f2f0e8]"
      }`}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
