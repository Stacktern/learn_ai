import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

type Kind = 'linear' | 'rbf' | 'poly';
const KINDS: { id: Kind; label: string; desc: string }[] = [
  { id: 'linear', label: 'Linear SVM', desc: 'Data points are linearly separable — a single hyperplane separates the classes.' },
  { id: 'rbf', label: 'RBF (Gaussian) kernel', desc: 'Maps the input space into a higher-dimensional space where a hyperplane can separate the classes.' },
  { id: 'poly', label: 'Polynomial kernel', desc: 'Adds polynomial terms; the boundary becomes curved.' },
];

function makeMoons(seed: number) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const out: { x: number; y: number; label: number }[] = [];
  for (let i = 0; i < 60; i++) {
    const t = (i / 60) * Math.PI;
    out.push({ x: 3 + Math.cos(t) + (r() - 0.5) * 0.4, y: 3 + Math.sin(t) + (r() - 0.5) * 0.4, label: 0 });
    out.push({ x: 3 + Math.cos(t) + (r() - 0.5) * 0.4, y: 2 - Math.sin(t) + (r() - 0.5) * 0.4, label: 1 });
  }
  return out;
}

export default function SvmKernel({ lesson: _lesson }: { lesson: Lesson }) {
  const [kind, setKind] = useState<Kind>('rbf');
  const data = useMemo(() => makeMoons(11), []);
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
          The <strong>kernel trick</strong> lets SVM fit the maximum-margin hyperplane in a transformed feature space without computing the transformation explicitly.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">{kind === 'linear' ? 'Linear boundary (fails on moons)' : kind === 'rbf' ? 'RBF boundary (curved)' : 'Polynomial boundary'}</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 6]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 6]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((d, i) => <Cell key={i} fill={d.label === 1 ? 'var(--chart-1)' : 'var(--chart-2)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
