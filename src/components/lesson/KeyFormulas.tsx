import { BlockMath, InlineMath } from 'react-katex';
import { Sigma, FunctionSquare } from 'lucide-react';
import { clsx } from 'clsx';

interface KeyFormulasProps {
  formulas: { latex: string; caption: string }[];
}

const FORMULA_COLORS = [
  { grad: 'from-chart-1 to-chart-2', soft: 'bg-accent-soft', text: 'text-accent' },
  { grad: 'from-chart-2 to-pink', soft: 'bg-purple-soft', text: 'text-purple' },
  { grad: 'from-chart-3 to-teal', soft: 'bg-success-soft', text: 'text-success' },
  { grad: 'from-chart-5 to-pink', soft: 'bg-warning-soft', text: 'text-warning' },
  { grad: 'from-pink to-chart-2', soft: 'bg-pink-soft', text: 'text-pink' },
  { grad: 'from-teal to-chart-3', soft: 'bg-teal-soft', text: 'text-teal' },
];

export default function KeyFormulas({ formulas }: KeyFormulasProps) {
  if (!formulas || formulas.length === 0) return null;
  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-purple-soft/60 to-surface flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-chart-2 to-pink text-white flex items-center justify-center shadow-[var(--shadow-sm)]">
          <Sigma size={16} />
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-muted">The math</h3>
          <p className="text-base font-bold text-text-primary">Key formulas</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        {formulas.map((f, i) => {
          const c = FORMULA_COLORS[i % FORMULA_COLORS.length];
          return (
            <div
              key={i}
              className={clsx('relative rounded-xl border border-border-app overflow-hidden')}
            >
              <div className={clsx('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', c.grad)} aria-hidden />
              <div className={clsx('p-4 pt-5 space-y-2')}>
                <div className="text-center overflow-x-auto py-1">
                  <BlockMath math={f.latex} />
                </div>
                <div className="flex items-center justify-center gap-1.5 pt-1 border-t border-border-app">
                  <FunctionSquare size={11} className={c.text} />
                  <p className={clsx('text-[11px] font-mono uppercase tracking-wider font-bold', c.text)}>
                    {f.caption}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MathInline({ latex }: { latex: string }) {
  return <InlineMath math={latex} />;
}
