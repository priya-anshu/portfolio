import { Moon, Move3d, Palette, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const MOTION_REQUEST_EVENT = "theme:request-device-motion";
const MOTION_STATUS_EVENT = "theme:device-motion-status";

export default function ThemeToggle() {
  const { isDark, toggleTheme, themeOverride, setThemeOverride } = useTheme();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [motionStatus, setMotionStatus] = useState("");
  const Icon = isDark ? Sun : Moon;

  useEffect(() => {
    const handleMotionStatus = (event) => {
      const { detail } = event;
      if (detail === "enabled") {
        setMotionStatus("Phone motion enabled");
      } else if (detail === "waiting") {
        setMotionStatus("Waiting for phone motion data...");
      } else if (detail === "denied") {
        setMotionStatus("Motion permission was denied");
      } else if (detail === "unavailable") {
        setMotionStatus("No phone motion sensor data detected");
      } else {
        setMotionStatus("Phone motion is not supported");
      }
    };

    window.addEventListener(MOTION_STATUS_EVENT, handleMotionStatus);
    return () => window.removeEventListener(MOTION_STATUS_EVENT, handleMotionStatus);
  }, []);

  const enablePhoneMotion = () => {
    setMotionStatus("Waiting for phone motion permission...");
    window.dispatchEvent(new Event(MOTION_REQUEST_EVENT));
  };

  return (
    <div className="theme-controls fixed top-3 right-3 md:top-5 md:right-5 z-50 flex items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="theme-control-button w-10 h-10 rounded-full border flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={enablePhoneMotion}
        aria-label="Enable phone motion"
        title="Enable phone motion"
        className="theme-control-button w-10 h-10 rounded-full border flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      >
        <Move3d className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => setIsPreviewOpen((open) => !open)}
        aria-label="Preview themes"
        aria-expanded={isPreviewOpen}
        aria-controls="theme-preview-panel"
        title="Preview themes"
        className="theme-control-button w-10 h-10 rounded-full border flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      >
        <Palette className="w-5 h-5" aria-hidden="true" />
      </button>
      {isPreviewOpen && (
        <div id="theme-preview-panel" className="theme-preview-panel absolute right-0 top-24 w-56 rounded-xl border p-3 shadow-xl">
          <label htmlFor="theme-preview-select" className="mb-2 block text-sm font-medium">
            Preview a theme
          </label>
          <p className="mb-2 text-xs opacity-75">
            Move your cursor to shift the scene, or enable phone motion.
          </p>
          <select
            id="theme-preview-select"
            className="w-full rounded-lg border px-2 py-2 text-sm"
            value={themeOverride ?? ""}
            onChange={(event) => setThemeOverride(event.target.value || null)}
          >
            <option value="">Automatic (date and time)</option>
            <option value="day-mode">Day mode</option>
            <option value="night-mode">Night mode</option>
            <option value="halloween">Halloween</option>
            <option value="christmas">Christmas</option>
            <option value="new-years">New Year&apos;s</option>
            <option value="earth-day">Earth Day</option>
            <option value="valentines">Valentine&apos;s Day</option>
          </select>
        </div>
      )}
      {motionStatus && (
        <p className="theme-preview-panel absolute right-0 top-12 max-w-56 rounded-lg border px-3 py-2 text-xs shadow-lg" role="status">
          {motionStatus}
        </p>
      )}
    </div>
  );
}
