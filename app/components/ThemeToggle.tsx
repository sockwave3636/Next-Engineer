'use client';

import { useTheme } from '@/app/context/ThemeContext';
import Icon from './Icon';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-lg bg-surface-muted text-ink-muted transition hover:bg-surface-strong hover:text-ink"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} />
    </button>
  );
}
