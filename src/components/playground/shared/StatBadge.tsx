import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface StatBadgeProps {
  label: string;
  value: ReactNode;
  hint?: string;
  tone?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

const TONES = {
  default: 'border-border-app bg-surface-2/60 text-text-primary',
  success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  warning: 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  danger: 'border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400',
};

export default function StatBadge({ label, value, hint, tone = 'default', className }: StatBadgeProps) {
  return (
    <div className={clsx('rounded-xl border px-3 py-2.5 space-y-0.5', TONES[tone], className)}>
      <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{label}</div>
      <div className="text-base font-mono font-bold leading-tight">{value}</div>
      {hint && <div className="text-[10px] text-text-muted leading-snug">{hint}</div>}
    </div>
  );
}
