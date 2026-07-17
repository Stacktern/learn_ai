import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

type Chart = 'box' | 'violin' | 'pair' | 'heatmap';

const SPECIES = ['setosa', 'versicolor', 'virginica'];
const PALETTE = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)'];

export default function SeabornCategorical({ lesson: _lesson }: { lesson: Lesson }) {
  const [chart, setChart] = useState<Chart>('box');

  const data = useMemo(() => {
    const out: { species: string; value: number; x: number; y: number }[] = [];
    SPECIES.forEach((s, si) => {
      const base = 5 + si * 0.7;
      for (let i = 0; i < 30; i++) {
        const v = base + (Math.random() - 0.5) * 1.1;
        out.push({ species: s, value: Number(v.toFixed(2)), x: si + (Math.random() - 0.5) * 0.3, y: v + (Math.random() - 0.5) * 0.4 });
      }
    });
    return out;
  }, []);

  const boxStats = useMemo(() => SPECIES.map((s, si) => {
    const vs = data.filter((d) => d.species === s).map((d) => d.value).sort((a, b) => a - b);
    const q = (p: number) => vs[Math.floor(vs.length * p)];
    return { species: s, min: vs[0], q1: q(0.25), median: q(0.5), q3: q(0.75), max: vs[vs.length - 1], color: PALETTE[si] };
  }), [data]);

  const corr = useMemo(() => [
    [1, -0.12, 0.87, 0.82],
    [-0.12, 1, -0.36, -0.31],
    [0.87, -0.36, 1, 0.96],
    [0.82, -0.31, 0.96, 1],
  ], []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'box' as Chart, label: 'sns.boxplot(x, y)' },
            { id: 'violin' as Chart, label: 'sns.violinplot(x, y)' },
            { id: 'pair' as Chart, label: 'sns.pairplot(hue=…)' },
            { id: 'heatmap' as Chart, label: 'sns.heatmap(corr)' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setChart(c.id)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
                chart === c.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2 capitalize">{chart}</div>
        <div className="h-[260px]">
          {chart === 'box' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={boxStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="species" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="median" radius={[4, 4, 0, 0]}>
                  {boxStats.map((b, i) => <Cell key={i} fill={b.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
          {chart === 'violin' && (
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-0.5, 2.5]} ticks={[0, 1, 2]} tickFormatter={(v) => SPECIES[v] ?? ''} />
                <YAxis type="number" dataKey="value" fontSize={10} stroke="var(--text-muted)" domain={[3, 9]} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Scatter data={data.filter((d) => d.species === 'setosa')} fill="var(--chart-1)" />
                <Scatter data={data.filter((d) => d.species === 'versicolor')} fill="var(--chart-2)" />
                <Scatter data={data.filter((d) => d.species === 'virginica')} fill="var(--chart-3)" />
              </ScatterChart>
            </ResponsiveContainer>
          )}
          {chart === 'pair' && (
            <div className="grid grid-cols-4 gap-2 h-full">
              {[0, 1, 2, 3].map((row) => [0, 1, 2, 3].map((col) => (
                <div key={`${row}-${col}`} className="rounded border border-border-app bg-surface-2/40 grid place-items-center text-[10px] font-mono text-text-muted">
                  {row === col ? 'diag' : `(${row},${col})`}
                </div>
              )))}
            </div>
          )}
          {chart === 'heatmap' && (
            <div className="grid h-full" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
              {corr.flatMap((row, ri) => row.map((v, ci) => (
                <div key={`${ri}-${ci}`} className="rounded grid place-items-center font-mono text-xs font-bold" style={{ background: `color-mix(in srgb, var(--chart-4) ${Math.round(Math.abs(v) * 100)}%, var(--surface-2))`, color: Math.abs(v) > 0.5 ? 'white' : 'var(--text-primary)' }}>
                  {v.toFixed(2)}
                </div>
              )))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
