import { clsx } from 'clsx';

interface LogoProps {
  size?: number;
  className?: string;
  withWordmark?: boolean;
}

export default function Logo({ size = 28, className, withWordmark = false }: LogoProps) {
  return (
    <span className={clsx('inline-flex items-center gap-2', className)}>
      <span
        className="relative inline-flex items-center justify-center rounded-xl shadow-[var(--shadow-sm)]"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="logo-grad-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="logo-grad-2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="logo-grad-3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#logo-grad-1)" />
          <circle cx="20" cy="20" r="11" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
          <path
            d="M14 26 L14 14 L20 14 M20 14 L26 22 L20 22 M20 22 L26 14"
            fill="none"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="29" cy="11" r="3" fill="url(#logo-grad-3)" stroke="white" strokeWidth="1.2" />
          <circle cx="11" cy="29" r="2.5" fill="url(#logo-grad-2)" stroke="white" strokeWidth="1.2" />
          <circle cx="29" cy="29" r="1.6" fill="white" fillOpacity="0.8" />
        </svg>
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">LearnAI</span>
          <span className="text-base font-bold tracking-tight text-text-primary">Tutor</span>
        </span>
      )}
    </span>
  );
}
