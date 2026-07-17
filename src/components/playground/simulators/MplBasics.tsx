import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const FRUITS = ['Apples', 'Bananas', 'Cherries'];
const FRUIT_VALUES = [15, 30, 7];

export default function MplBasics({ lesson: _lesson }: { lesson: Lesson }) {
  const [chart, setChart] = useState<'scatter' | 'hist' | 'bar'>('scatter');

  const scatter = useMemo(() => Array.from({ length: 50 }, () => ({ x: Math.random(), y: Math.random() })), []);
  const hist = useMemo(() => {
    const bins: Record<string, number> = {};
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 6 - 3;
      const key = `${Math.floor(x)}`;
      bins[key] = (bins[key] ?? 0) + 1;
    }
    return Object.entries(bins).map(([k, v]) => ({ range: `${k}–${Number(k) + 1}`, count: v }));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'scatter' as const, label: 'Scatter · relationship between 2 vars' },
            { id: 'hist' as const, label: 'Histogram · distribution of one variable' },
            { id: 'bar' as const, label: 'Bar · comparison across categories' },
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
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 font-mono text-[11px] text-text-primary leading-relaxed">
          {chart === 'scatter' && (<>plt.scatter(x, y)</>)}
          {chart === 'hist' && (<>plt.hist(data, bins=30, alpha=0.5, color="g")</>)}
          {chart === 'bar' && (<>plt.bar(categories, values)</>)}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2 capitalize">{chart} plot</div>
        <div className="h-[260px]">
          {chart === 'scatter' && (
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
                <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Scatter data={scatter} fill="var(--chart-1)" />
              </ScatterChart>
            </ResponsiveContainer>
          )}
          {chart === 'hist' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hist}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="range" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="count" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
          {chart === 'bar' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={FRUITS.map((f, i) => ({ name: f, value: FRUIT_VALUES[i] }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {FRUITS.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
