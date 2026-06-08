import { Lightbulb } from 'lucide-react';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface AnalogyCalloutProps {
  concept: string;
  metaphor: string;
  why: string;
  className?: string;
}

export default function AnalogyCallout({ concept, metaphor, why, className }: AnalogyCalloutProps) {
  return (
    <div className={clsx('rounded-xl border-l-4 border-amber-500 bg-amber-500/5 p-4 space-y-2', className)}>
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
        <Lightbulb size={12} />
        <span>First-principles analogy Â· {concept}</span>
      </div>
      <p className="text-sm font-semibold italic text-text-primary leading-relaxed">
        â€œ{metaphor}â€
      </p>
      <p className="text-xs text-text-secondary leading-relaxed">{why}</p>
    </div>
  );
}

export function InlineNote({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed p-3 rounded-lg bg-surface-2/60">
      <span className="mt-0.5 text-accent shrink-0">{icon}</span>
      <span>{children}</span>
    </div>
  );
}
