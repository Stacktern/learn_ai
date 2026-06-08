import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { clsx } from 'clsx';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export default function ThemeToggle({ className, size = 'md' }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const dim = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';
  const icon = size === 'sm' ? 14 : 16;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={clsx(
        'relative inline-flex items-center justify-center rounded-xl',
        'border border-border-app bg-surface text-text-secondary',
        'hover:bg-surface-2 hover:text-text-primary transition-colors',
        dim,
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inline-flex"
          >
            <Sun size={icon} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inline-flex"
          >
            <Moon size={icon} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
