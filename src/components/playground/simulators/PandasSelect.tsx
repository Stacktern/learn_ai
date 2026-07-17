import { useMemo, useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const ROWS = [
  { A: 1, B: '2023-01-01', C: 3, label: 'x' },
  { A: 2, B: '2023-01-02', C: 3, label: 'y' },
  { A: null, B: '2023-01-03', C: 3, label: 'x' },
  { A: 5, B: '2023-01-04', C: 3, label: 'z' },
];

export default function PandasSelect({ lesson: _lesson }: { lesson: Lesson }) {
  const [mode, setMode] = useState<'col' | 'slice' | 'loc' | 'iloc' | 'bool'>('col');

  const result = useMemo(() => {
    switch (mode) {
      case 'col': return { kind: 'col' as const, data: ROWS.map((r) => r.A) };
      case 'slice': return { kind: 'rows' as const, data: ROWS.slice(0, 3) };
      case 'loc': return { kind: 'rows' as const, data: ROWS.map((r) => ({ A: r.A, B: r.B })) };
      case 'iloc': return { kind: 'rows' as const, data: [ROWS[3]] };
      case 'bool': return { kind: 'rows' as const, data: ROWS.filter((r) => (r.A ?? 0) > 1) };
    }
  }, [mode]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'col', label: "df['A']  →  Series" },
            { id: 'slice', label: 'df[0:3]  →  first 3 rows' },
            { id: 'loc', label: "df.loc[:, ['A','B']]  →  by label" },
            { id: 'iloc', label: 'df.iloc[3]  →  by position' },
            { id: 'bool', label: 'df[df["A"] > 1]  →  boolean mask' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id as typeof mode)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
                mode === m.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-3">
          {mode === 'col' ? "Result: column 'A' as Series" : `Result: ${(result.data as unknown[]).length} row(s)`}
        </div>
        {result.kind === 'col' ? (
          <div className="grid gap-1.5" style={{ gridTemplateColumns: 'auto repeat(1, minmax(0,1fr))' }}>
            {(result.data as (number | null)[]).map((v, i) => (
              <div key={i} className="contents">
                <div className="text-xs font-mono text-text-muted text-right pr-2">{i}</div>
                <div className={clsx('px-3 py-1.5 rounded font-mono text-xs', v === null ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400' : 'bg-accent-soft text-accent')}>{v === null ? 'NaN' : v}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono">
              <thead><tr className="text-text-muted"><th className="text-left p-2 font-bold">A</th><th className="text-left p-2 font-bold">B</th><th className="text-left p-2 font-bold">C</th></tr></thead>
              <tbody>
                {(result.data as { A: number | null; B: string; C: number }[]).map((r, i) => (
                  <tr key={i} className={clsx(i % 2 === 0 ? 'bg-surface-2/30' : '')}>
                    <td className={clsx('p-2', r.A === null ? 'text-amber-600 dark:text-amber-400' : 'text-text-primary')}>{r.A === null ? 'NaN' : r.A}</td>
                    <td className="p-2 text-text-primary">{r.B}</td>
                    <td className="p-2 text-text-primary">{r.C}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
