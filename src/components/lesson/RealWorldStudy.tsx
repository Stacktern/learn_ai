import { Briefcase, Cog, TrendingUp, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

interface RealWorldStudyProps {
  scenario: string;
  application: string;
  impact: string;
}

const ITEMS = [
  { key: 'scenario', label: 'Scenario', icon: Briefcase, color: 'text-chart-1', soft: 'bg-accent-soft', grad: 'from-chart-1 to-chart-2' },
  { key: 'application', label: 'How it is applied', icon: Cog, color: 'text-chart-2', soft: 'bg-purple-soft', grad: 'from-chart-2 to-pink' },
  { key: 'impact', label: 'Business impact', icon: TrendingUp, color: 'text-chart-3', soft: 'bg-success-soft', grad: 'from-chart-3 to-teal' },
] as const;

export default function RealWorldStudy({ scenario, application, impact }: RealWorldStudyProps) {
  const data: Record<string, string> = { scenario, application, impact };
  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-emerald-500/10 via-surface to-teal-500/10 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-chart-3 to-teal text-white flex items-center justify-center shadow-[var(--shadow-sm)]">
          <Sparkles size={16} />
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-muted">In the wild</h3>
          <p className="text-base font-bold text-text-primary">Real-world study</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="relative rounded-xl border border-border-app overflow-hidden bg-surface">
              <div className={clsx('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', it.grad)} aria-hidden />
              <div className="p-4 pt-5 space-y-2">
                <div className={clsx('inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest', it.color)}>
                  <span className={clsx('h-6 w-6 rounded-md flex items-center justify-center text-white bg-gradient-to-br shadow-[var(--shadow-sm)]', it.grad)}>
                    <Icon size={12} />
                  </span>
                  <span>{it.label}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{data[it.key]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
