import { clsx } from 'clsx';
import type { ReactNode } from 'react';

export type SectionTone = 'blue' | 'purple' | 'emerald' | 'amber' | 'pink' | 'teal';

const TONES: Record<SectionTone, { bg: string; text: string; ring: string; grad: string }> = {
  blue: { bg: 'bg-accent-soft', text: 'text-accent', ring: 'ring-accent/20', grad: 'from-chart-1 to-chart-2' },
  purple: { bg: 'bg-purple-soft', text: 'text-purple', ring: 'ring-purple/20', grad: 'from-chart-2 to-pink' },
  emerald: { bg: 'bg-success-soft', text: 'text-success', ring: 'ring-success/20', grad: 'from-chart-3 to-teal' },
  amber: { bg: 'bg-warning-soft', text: 'text-warning', ring: 'ring-warning/20', grad: 'from-chart-5 to-pink' },
  pink: { bg: 'bg-pink-soft', text: 'text-pink', ring: 'ring-pink/20', grad: 'from-pink to-chart-2' },
  teal: { bg: 'bg-teal-soft', text: 'text-teal', ring: 'ring-teal/20', grad: 'from-teal to-chart-3' },
};

interface SectionHeadingProps {
  letter?: string;
  label: string;
  tone?: SectionTone;
  icon?: ReactNode;
  className?: string;
}

export default function SectionHeading({ letter, label, tone = 'blue', icon, className }: SectionHeadingProps) {
  const t = TONES[tone];
  return (
    <div className={clsx('flex items-center gap-2.5', className)}>
      <span
        className={clsx(
          'h-8 w-8 rounded-lg bg-gradient-to-br text-white flex items-center justify-center font-bold text-sm shadow-[var(--shadow-sm)] ring-2',
          t.grad,
          t.ring,
        )}
      >
        {icon ?? letter}
      </span>
      <h2 className="text-base font-bold uppercase tracking-widest text-text-primary">{label}</h2>
    </div>
  );
}
