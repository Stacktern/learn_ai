import { BookMarked, Hash } from 'lucide-react';
import { clsx } from 'clsx';

interface GlossaryListProps {
  terms: { term: string; definition: string }[];
}

const BULLET_COLORS = ['bg-chart-1', 'bg-chart-2', 'bg-chart-3', 'bg-chart-5', 'bg-pink', 'bg-teal'];

export default function GlossaryList({ terms }: GlossaryListProps) {
  if (!terms || terms.length === 0) return null;
  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-teal-500/10 via-surface to-chart-3/10 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal to-chart-3 text-white flex items-center justify-center shadow-[var(--shadow-sm)]">
          <BookMarked size={16} />
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Vocabulary</h3>
          <p className="text-base font-bold text-text-primary">Glossary</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {terms.map((t, i) => (
          <div key={i} className="flex items-start gap-3 group">
            <span className={clsx('h-2 w-2 rounded-full mt-2 shrink-0', BULLET_COLORS[i % BULLET_COLORS.length])} />
            <div className="space-y-0.5 min-w-0">
              <dt className="text-sm sm:text-base font-bold text-text-primary flex items-center gap-1.5">
                {t.term}
              </dt>
              <dd className="text-sm text-text-secondary leading-relaxed">{t.definition}</dd>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
