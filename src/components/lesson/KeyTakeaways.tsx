import { Sparkles, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface KeyTakeawaysProps {
  takeaways: string[];
}

const TAKEAWAY_COLORS = [
  { grad: 'from-chart-1 to-chart-2', soft: 'bg-accent-soft', text: 'text-accent' },
  { grad: 'from-chart-2 to-pink', soft: 'bg-purple-soft', text: 'text-purple' },
  { grad: 'from-chart-3 to-teal', soft: 'bg-success-soft', text: 'text-success' },
];

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-chart-5/10 via-surface to-pink/10 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-chart-5 to-pink text-white flex items-center justify-center shadow-[var(--shadow-sm)]">
          <Sparkles size={16} />
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-muted">In short</h3>
          <p className="text-base font-bold text-text-primary">Key takeaways</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        {takeaways.map((t, i) => {
          const c = TAKEAWAY_COLORS[i % TAKEAWAY_COLORS.length];
          return (
            <div key={i} className="relative rounded-xl border border-border-app overflow-hidden bg-surface">
              <div className={clsx('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', c.grad)} aria-hidden />
              <div className="p-4 pt-5 space-y-2">
                <div className={clsx('inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest', c.text)}>
                  <span className={clsx('h-6 w-6 rounded-md text-white flex items-center justify-center bg-gradient-to-br shadow-[var(--shadow-sm)]', c.grad)}>
                    <Check size={12} />
                  </span>
                  Summary #{i + 1}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{t}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
