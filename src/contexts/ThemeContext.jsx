// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to light mode for bright colors
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Light mode - bright and vibrant
      light: {
        primary: 'from-pink-400 via-purple-400 to-indigo-400',
        secondary: 'from-cyan-400 via-blue-400 to-purple-400',
        accent: 'from-orange-400 via-red-400 to-pink-400',
        success: 'from-green-400 via-emerald-400 to-teal-400',
        warning: 'from-yellow-400 via-orange-400 to-red-400',
        bg: 'from-slate-50 via-blue-50 to-indigo-50',
        surface: 'bg-white/80',
        surfaceHover: 'bg-white/90',
        text: 'text-gray-800',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-500',
        border: 'border-gray-200/50',
        borderHover: 'border-gray-300/70',
        shadow: 'shadow-xl shadow-purple-200/50',
        shadowHover: 'shadow-2xl shadow-purple-300/60'
      },
      // Dark mode - still vibrant but darker
      dark: {
        primary: 'from-pink-500 via-purple-500 to-indigo-500',
        secondary: 'from-cyan-500 via-blue-500 to-purple-500',
        accent: 'from-orange-500 via-red-500 to-pink-500',
        success: 'from-green-500 via-emerald-500 to-teal-500',
        warning: 'from-yellow-500 via-orange-500 to-red-500',
        bg: 'from-gray-900 via-purple-900/20 to-indigo-900/20',
        surface: 'bg-gray-800/80',
        surfaceHover: 'bg-gray-700/80',
        text: 'text-white',
        textSecondary: 'text-gray-200',
        textMuted: 'text-gray-400',
        border: 'border-gray-700/50',
        borderHover: 'border-gray-600/70',
        shadow: 'shadow-xl shadow-purple-900/50',
        shadowHover: 'shadow-2xl shadow-purple-800/60'
      }
    }
  };

  const currentColors = isDark ? theme.colors.dark : theme.colors.light;

  return (
    <ThemeContext.Provider value={{ ...theme, colors: currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
