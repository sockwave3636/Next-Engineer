'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Saved only when the reader presses the theme toggle. The site is light unless they chose dark.
const CHOICE_KEY = 'theme-choice';
// Colour of the phone's browser bar for each theme
const BAR_COLOR: Record<Theme, string> = { light: '#faf8ff', dark: '#0f172a' };

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      // The old key also stored the phone's own dark setting, which no longer picks the theme
      localStorage.removeItem('theme');
      setTheme(localStorage.getItem(CHOICE_KEY) === 'dark' ? 'dark' : 'light');
    } catch {
      // Storage blocked: stay light
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute('content', BAR_COLOR[theme]));
  }, [theme, mounted]);

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem(CHOICE_KEY, next);
    } catch {
      // Storage blocked: the choice lasts until the page closes
    }
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
