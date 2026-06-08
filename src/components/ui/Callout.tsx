import { clsx } from 'clsx';
import { Info, Lightbulb, AlertTriangle, AlertOctagon, CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'info' | 'tip' | 'warning' | 'danger' | 'success';

interface CalloutProps {
  variant?: Variant;
  title?: string;
  children: ReactNode;
  className?: string;
}

const ICONS: Record<Variant, typeof Info> = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
  danger: AlertOctagon,
  success: CheckCircle2,
};

const STYLES: Record<Variant, { bar: string; bg: string; text: string; icon: string }> = {
  info: { bar: 'border-l-blue-500', bg: 'bg-blue-500/5', text: 'text-blue-700 dark:text-blue-300', icon: 'text-blue-500' },
  tip: { bar: 'border-l-amber-500', bg: 'bg-amber-500/5', text: 'text-amber-700 dark:text-amber-300', icon: 'text-amber-500' },
  warning: { bar: 'border-l-yellow-500', bg: 'bg-yellow-500/5', text: 'text-yellow-700 dark:text-yellow-300', icon: 'text-yellow-500' },
  danger: { bar: 'border-l-red-500', bg: 'bg-red-500/5', text: 'text-red-700 dark:text-red-300', icon: 'text-red-500' },
  success: { bar: 'border-l-emerald-500', bg: 'bg-emerald-500/5', text: 'text-emerald-700 dark:text-emerald-300', icon: 'text-emerald-500' },
};

export default function Callout({ variant = 'info', title, children, className }: CalloutProps) {
  const Icon = ICONS[variant];
  const s = STYLES[variant];
  return (
    <div className={clsx('flex items-start gap-3 rounded-xl border border-border-app p-4', s.bg, s.bar, 'border-l-4', className)}>
      <Icon size={16} className={clsx('mt-0.5 shrink-0', s.icon)} />
      <div className="flex-1 min-w-0 space-y-1">
        {title && (
          <div className={clsx('text-[10px] font-bold uppercase tracking-widest', s.text)}>
            {title}
          </div>
        )}
        <div className="text-xs text-text-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
