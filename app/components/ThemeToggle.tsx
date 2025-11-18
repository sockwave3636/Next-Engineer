'use client';

import { useTheme } from '@/app/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: theme === 'dark' ? 'var(--primary)' : 'var(--accent)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="text-lg sm:text-xl transition-transform duration-300">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span className="hidden sm:inline text-xs sm:text-sm font-medium">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

