import { useMemo, useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

interface Row { A: number | null; B: string; C: number }
const RAW: Row[] = [
  { A: 1, B: '2023-01-01', C: 3 },
  { A: 2, B: '2023-01-02', C: 3 },
  { A: null, B: '2023-01-03', C: 3 },
  { A: null, B: '2023-01-04', C: 3 },
  { A: 5, B: '2023-01-05', C: 3 },
];

type Strategy = 'none' | 'dropna' | 'fillna' | 'indicator';

export default function PandasMissing({ lesson: _lesson }: { lesson: Lesson }) {
  const [strategy, setStrategy] = useState<Strategy>('none');
  const [fill, setFill] = useState(0);

  const view = useMemo(() => {
    if (strategy === 'none') return RAW.map((r) => ({ ...r, indicator: false }));
    if (strategy === 'dropna') return RAW.filter((r) => r.A !== null);
    if (strategy === 'fillna') return RAW.map((r) => ({ ...r, A: r.A === null ? fill : r.A, indicator: false }));
    return RAW.map((r) => ({ ...r, A: r.A === null ? fill : r.A, indicator: r.A === null }));
  }, [strategy, fill]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Strategy</div>
          {[
            { id: 'none' as const, label: 'No handling (raw)' },
            { id: 'dropna' as const, label: 'df.dropna(how="any")' },
            { id: 'fillna' as const, label: 'df.fillna(value=k)' },
            { id: 'indicator' as const, label: 'Impute + isna() indicator' },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setStrategy(s.id)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
                strategy === s.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
        {strategy !== 'none' && strategy !== 'dropna' && (
          <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Fill value</div>
            <div className="flex gap-2">
              {[0, 1, 2, 5].map((v) => (
                <button
                  key={v}
                  onClick={() => setFill(v)}
                  className={clsx('px-3 py-1.5 rounded-lg border text-xs font-mono', fill === v ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2')}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The book shows dropna, fillna and isna() — the same primitives we used in Part I.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-3">
          Resulting table · {view.length} row(s)
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="text-text-muted">
                <th className="text-left p-2 font-bold">#</th>
                <th className="text-left p-2 font-bold">A</th>
                <th className="text-left p-2 font-bold">B</th>
                <th className="text-left p-2 font-bold">C</th>
                {strategy === 'indicator' && <th className="text-left p-2 font-bold">A_was_missing</th>}
              </tr>
            </thead>
            <tbody>
              {view.map((r, i) => (
                <tr key={i} className={clsx(i % 2 === 0 ? 'bg-surface-2/30' : '')}>
                  <td className="p-2 text-text-muted">{i}</td>
                  <td className={clsx('p-2', r.indicator ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400' : 'text-text-primary')}>{r.A}</td>
                  <td className="p-2 text-text-primary">{r.B}</td>
                  <td className="p-2 text-text-primary">{r.C}</td>
                  {strategy === 'indicator' && (
                    <td className="p-2 text-accent font-bold">{r.indicator ? '1' : '0'}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
