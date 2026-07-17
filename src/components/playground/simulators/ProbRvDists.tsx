import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

type Kind = 'discrete' | 'normal' | 'exponential' | 'uniform';
const KINDS: { id: Kind; label: string; desc: string }[] = [
  { id: 'discrete', label: 'Discrete (PMF) — e.g. die roll', desc: 'A specific set of values with a probability mass for each.' },
  { id: 'normal', label: 'Continuous (PDF) — Normal', desc: 'Bell-shaped density. Mean μ, std σ. PMF → PDF for continuous.' },
  { id: 'exponential', label: 'Continuous (PDF) — Exponential', desc: 'Models waiting times; f(x) = λ e^(−λx).' },
  { id: 'uniform', label: 'Continuous (PDF) — Uniform', desc: 'Equal density on [a, b].' },
];

export default function ProbRvDists({ lesson: _lesson }: { lesson: Lesson }) {
  const [kind, setKind] = useState<Kind>('normal');
  const data = useMemo(() => {
    if (kind === 'discrete') {
      return Array.from({ length: 6 }, (_, i) => ({ x: `${i + 1}`, y: 1 / 6 }));
    }
    if (kind === 'normal') {
      const mu = 0, sigma = 1;
      return Array.from({ length: 60 }, (_, i) => {
        const x = -4 + (i / 59) * 8;
        const y = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma));
        return { x: Number(x.toFixed(2)), y: Number(y.toFixed(4)) };
      });
    }
    if (kind === 'exponential') {
      const lambda = 0.5;
      return Array.from({ length: 60 }, (_, i) => {
        const x = (i / 59) * 10;
        const y = lambda * Math.exp(-lambda * x);
        return { x: Number(x.toFixed(2)), y: Number(y.toFixed(4)) };
      });
    }
    return Array.from({ length: 60 }, (_, i) => {
      const x = i / 59;
      return { x: Number(x.toFixed(2)), y: 1 };
    });
  }, [kind]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        {KINDS.map((k) => (
          <button key={k.id} onClick={() => setKind(k.id)} className={clsx('w-full text-left rounded-xl border p-3 transition-all', kind === k.id ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40')}>
            <div className="text-sm font-bold text-text-primary">{k.label}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{k.desc}</div>
          </button>
        ))}
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          A random variable assigns a number to the outcome of a statistical experiment. Discrete → PMF; continuous → PDF.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2 capitalize">{kind} distribution</div>
        <div className="h-[340px]">
          {kind === 'discrete' ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="y" radius={[6, 6, 0, 0]}>
                  {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Line type="monotone" dataKey="y" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
