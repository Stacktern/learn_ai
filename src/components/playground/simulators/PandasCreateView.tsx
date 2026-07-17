import { useMemo, useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

interface Row { A: number | null; B: string; C: number; E: 'test' | 'train' | 'val' }
const ROWS: Row[] = [
  { A: 1, B: '2023-01-01', C: 3, E: 'test' },
  { A: 2, B: '2023-01-02', C: 3, E: 'train' },
  { A: null, B: '2023-01-03', C: 3, E: 'test' },
];

export default function PandasCreateView({ lesson: _lesson }: { lesson: Lesson }) {
  const [showHead, setShowHead] = useState(true);
  const [showTail, setShowTail] = useState(false);
  const [showCols, setShowCols] = useState(false);

  const view = useMemo(() => (showHead ? ROWS : showTail ? ROWS.slice(-3) : []), [showHead, showTail]);
  const columns = ['A', 'B', 'C', 'E'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Viewing helpers</div>
          {[
            { id: 'head', label: 'df.head()', on: () => { setShowHead(true); setShowTail(false); setShowCols(false); } },
            { id: 'tail', label: 'df.tail(3)', on: () => { setShowHead(false); setShowTail(true); setShowCols(false); } },
            { id: 'meta', label: 'df.index / columns / to_numpy()', on: () => { setShowCols(true); } },
          ].map((b) => (
            <button
              key={b.id}
              onClick={b.on}
              className="w-full text-left px-3 py-2 rounded-lg border border-border-app bg-surface text-xs font-mono text-text-secondary hover:bg-accent-soft/40 hover:border-accent/40"
            >
              {b.label}
            </button>
          ))}
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 font-mono text-[11px] text-text-primary leading-relaxed">
          pd.DataFrame({'{'}
          'A': [1, 2, np.nan], 'B': pd.Timestamp('20230101'), 'C': pd.Series(1, …), 'E': pd.Categorical(['test','train','test'])
          {'}'})
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px] flex flex-col">
        {showCols ? (
          <div className="space-y-2 font-mono text-xs">
            <div className="rounded-lg border border-border-app bg-surface-2/40 p-2">
              <span className="text-text-muted">df.index </span>
              <span className="text-text-primary">→ RangeIndex(start=0, stop=3, step=1)</span>
            </div>
            <div className="rounded-lg border border-border-app bg-surface-2/40 p-2">
              <span className="text-text-muted">df.columns </span>
              <span className="text-text-primary">→ Index(['A','B','C','D','E','F'], dtype='object')</span>
            </div>
            <div className="rounded-lg border border-border-app bg-surface-2/40 p-2">
              <span className="text-text-muted">df.to_numpy() </span>
              <span className="text-text-primary">→ ndarray, shape (3, 6)</span>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="text-text-muted">
                  <th className="text-left p-2 font-bold">#</th>
                  {columns.map((c) => <th key={c} className="text-left p-2 font-bold">{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {view.map((r, i) => (
                  <tr key={i} className={clsx(i % 2 === 0 ? 'bg-surface-2/30' : '')}>
                    <td className="p-2 text-text-muted">{i}</td>
                    {columns.map((c) => (
                      <td key={c} className={clsx('p-2', r.A === null && c === 'A' ? 'text-amber-600 dark:text-amber-400' : 'text-text-primary')}>
                        {r.A === null && c === 'A' ? 'NaN' : String((r as Record<string, unknown>)[c] ?? '')}
                      </td>
                    ))}
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
