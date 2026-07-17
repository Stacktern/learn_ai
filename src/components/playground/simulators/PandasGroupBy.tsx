import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, LineChart, Line } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

interface Row { A: 'foo' | 'bar'; B: 'one' | 'two' | 'three'; C: number; D: number }
const ROWS: Row[] = [
  { A: 'foo', B: 'one', C: 1.2, D: 0.3 },
  { A: 'bar', B: 'one', C: 0.5, D: 0.9 },
  { A: 'foo', B: 'two', C: 1.6, D: -0.2 },
  { A: 'bar', B: 'three', C: -0.4, D: 1.1 },
  { A: 'foo', B: 'two', C: 0.7, D: 0.4 },
  { A: 'bar', B: 'two', C: 1.3, D: -0.6 },
  { A: 'foo', B: 'one', C: -0.1, D: 0.8 },
  { A: 'foo', B: 'three', C: 0.4, D: 1.5 },
];

export default function PandasGroupBy({ lesson: _lesson }: { lesson: Lesson }) {
  const [tab, setTab] = useState<'group' | 'ts'>('group');
  const grouped = useMemo(() => {
    const map = new Map<string, { A: string; sumC: number; sumD: number }>();
    ROWS.forEach((r) => {
      const k = r.A;
      const cur = map.get(k) ?? { A: k, sumC: 0, sumD: 0 };
      cur.sumC += r.C;
      cur.sumD += r.D;
      map.set(k, cur);
    });
    return Array.from(map.values()).map((v) => ({ A: v.A, sumC: Number(v.sumC.toFixed(2)), sumD: Number(v.sumD.toFixed(2)) }));
  }, []);

  const ts = useMemo(() => {
    const start = new Date('2023-01-01').getTime();
    const vals: { d: number; v: number }[] = [];
    let v = 0;
    for (let i = 0; i < 100; i++) {
      v = Math.sin(i / 8) * 2 + (Math.random() - 0.5) * 0.6;
      vals.push({ d: i, v: Number(v.toFixed(3)) });
    }
    return vals;
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'group' as const, label: 'df.groupby("A").sum()' },
            { id: 'ts' as const, label: 'pd.date_range + pd.Series(…)' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
                tab === t.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          GroupBy is split-apply-combine: split by key, apply an aggregation (sum/mean), combine the results.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        {tab === 'group' ? (
          <>
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Sum of C and D by group A</div>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={grouped}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                  <XAxis dataKey="A" fontSize={10} stroke="var(--text-muted)" />
                  <YAxis fontSize={10} stroke="var(--text-muted)" />
                  <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                  <Bar dataKey="sumC" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="sumD" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <>
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">100-day time series (pd.date_range)</div>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                  <XAxis dataKey="d" fontSize={10} stroke="var(--text-muted)" />
                  <YAxis fontSize={10} stroke="var(--text-muted)" />
                  <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                  <Line type="monotone" dataKey="v" stroke="var(--chart-3)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
