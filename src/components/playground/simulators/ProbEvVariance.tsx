import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

type Kind = 'discrete' | 'normal' | 'exponential' | 'uniform';

export default function ProbEvVariance({ lesson: _lesson }: { lesson: Lesson }) {
  const [kind, setKind] = useState<Kind>('normal');
  const { data, mean, variance } = useMemo(() => {
    if (kind === 'discrete') {
      const xs = [1, 2, 3, 4, 5, 6];
      const ps = xs.map(() => 1 / 6);
      const m = xs.reduce((a, b, i) => a + b * ps[i], 0);
      const v = xs.reduce((a, b, i) => a + (b - m) ** 2 * ps[i], 0);
      return { data: xs.map((x, i) => ({ x: String(x), y: ps[i] })), mean: m, variance: v };
    }
    if (kind === 'normal') { return { data: [], mean: 0, variance: 1 }; }
    if (kind === 'exponential') { return { data: [], mean: 1 / 0.5, variance: 1 / (0.5 * 0.5) }; }
    return { data: [], mean: 0.5, variance: (1 / 12) };
  }, [kind]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'discrete' as Kind, label: 'Discrete · fair die' },
            { id: 'normal' as Kind, label: 'Normal · μ=0, σ=1' },
            { id: 'exponential' as Kind, label: 'Exponential · λ=0.5' },
            { id: 'uniform' as Kind, label: 'Uniform · [0, 1]' },
          ].map((k) => (
            <button key={k.id} onClick={() => setKind(k.id)} className={clsx('w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors', kind === k.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2')}>{k.label}</button>
          ))}
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-1">
          <div className="text-xs"><span className="text-text-muted">E[X] = </span><span className="font-mono text-text-primary">{mean.toFixed(3)}</span></div>
          <div className="text-xs"><span className="text-text-muted">Var(X) = </span><span className="font-mono text-text-primary">{variance.toFixed(3)}</span></div>
          <div className="text-xs"><span className="text-text-muted">σ = </span><span className="font-mono text-text-primary">{Math.sqrt(variance).toFixed(3)}</span></div>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          E[X] is the long-run average. Variance measures spread — how much values differ from the mean.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">{kind === 'discrete' ? 'PMF' : 'PDF sketch with μ marked'}</div>
        <div className="h-[260px]">
          {kind === 'discrete' ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <ReferenceLine x={mean} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: `μ = ${mean.toFixed(2)}`, fontSize: 10, fill: 'var(--chart-4)' }} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="y" radius={[4, 4, 0, 0]}>
                  {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[{ name: 'μ', a: mean }, { name: 'σ', a: Math.sqrt(variance) }, { name: 'μ + σ', a: mean + Math.sqrt(variance) }, { name: 'μ − σ', a: mean - Math.sqrt(variance) }]}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="a" radius={[6, 6, 0, 0]} fill="var(--chart-1)" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
