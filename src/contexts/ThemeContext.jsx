// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import useTimeTheme from '../hooks/useTimeTheme';
import { themePalettes } from '../theme/themePalettes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const { themeToken, themeOverride, setThemeOverride, baseTheme } = useTimeTheme();
  const [appearancePreference, setAppearancePreference] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark' || savedMode === 'light' ? savedMode : null;
  });
  const isDark = themeOverride === 'night-mode'
    ? true
    : themeOverride === 'day-mode'
      ? false
      : appearancePreference
        ? appearancePreference === 'dark'
        : baseTheme === 'night-mode';

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const updateThemeOverride = (nextTheme) => {
    setThemeOverride(nextTheme);
    if (nextTheme === 'day-mode') {
      localStorage.setItem('theme', 'light');
      setAppearancePreference('light');
    } else if (nextTheme === 'night-mode') {
      localStorage.setItem('theme', 'dark');
      setAppearancePreference('dark');
    } else if (nextTheme === null) {
      localStorage.removeItem('theme');
      setAppearancePreference(null);
    }
  };

  const toggleTheme = () => {
    const nextMode = isDark ? 'light' : 'dark';
    const nextIsDark = nextMode === 'dark';
    localStorage.setItem('theme', nextMode);
    setAppearancePreference(nextMode);

    if (themeToken === 'day-mode' || themeToken === 'night-mode') {
      setThemeOverride(nextIsDark ? 'night-mode' : 'day-mode');
    }
  };

  const colors = themePalettes[isDark ? 'night-mode' : 'day-mode'];
  const theme = {
    isDark,
    toggleTheme,
    colors,
  };

  return (
    <ThemeContext.Provider value={{
      ...theme,
      colors,
      themeToken,
      themeOverride,
      setThemeOverride: updateThemeOverride,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
