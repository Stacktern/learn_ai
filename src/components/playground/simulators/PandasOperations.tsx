import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, LineChart, Line } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

type Op = 'mean' | 'cumsum' | 'upper';

const DATA = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

export default function PandasOperations({ lesson: _lesson }: { lesson: Lesson }) {
  const [op, setOp] = useState<Op>('mean');
  const result = useMemo(() => {
    if (op === 'mean') return { label: 'mean()', value: DATA.reduce((a, b) => a + b, 0) / DATA.length };
    if (op === 'cumsum') {
      let s = 0;
      return { label: 'cumsum()', series: DATA.map((v) => { s += v; return s; }) };
    }
    return { label: 'upper()', words: ['apple', 'banana', 'cherry'].map((w) => w.toUpperCase()) };
  }, [op]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'mean' as Op, label: 'df.mean() — descriptive statistic' },
            { id: 'cumsum' as Op, label: 'df.apply(np.cumsum) — apply function' },
            { id: 'upper' as Op, label: "df['E'].str.upper() — string methods" },
          ].map((o) => (
            <button
              key={o.id}
              onClick={() => setOp(o.id)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
                op === o.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Result of {result.label}</div>
        {op === 'mean' && (
          <div className="flex items-center gap-4">
            <div className="text-4xl font-mono font-bold text-accent">{(result as { value: number }).value.toFixed(3)}</div>
            <div className="text-xs text-text-secondary">average across all numeric columns</div>
          </div>
        )}
        {op === 'cumsum' && (
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={((result as { series: number[] }).series).map((v, i) => ({ i, v }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="i" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Line type="monotone" dataKey="v" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 3 }} animationDuration={300} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        {op === 'upper' && (
          <div className="flex flex-wrap gap-2">
            {((result as { words: string[] }).words).map((w) => (
              <div key={w} className="px-3 py-2 rounded-lg bg-accent-soft text-accent font-mono text-sm font-bold">{w}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
