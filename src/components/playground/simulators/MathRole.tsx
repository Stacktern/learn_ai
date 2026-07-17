import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const REASONS = [
  { id: 'modeling', label: 'Modeling & Optimization', desc: 'Construct mathematical models that predict outcomes; use optimization to find the best parameters.' },
  { id: 'algorithm', label: 'Algorithm Design', desc: 'Understand principles needed to design and improve algorithms that handle data efficiently at scale.' },
  { id: 'transform', label: 'Data Transformation', desc: 'Methods like normalization and PCA improve the performance of ML algorithms.' },
];

export default function MathRole({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<string>('modeling');
  const data = useMemo(() => REASONS.map((r) => ({ name: r.label, impact: 10 })), []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        {REASONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setActive(r.id)}
            className={clsx(
              'w-full text-left rounded-xl border p-3 transition-all',
              active === r.id ? 'border-accent bg-accent-soft shadow-[var(--shadow-md)]' : 'border-border-app bg-surface hover:bg-accent-soft/40',
            )}
          >
            <div className="text-sm font-bold text-text-primary">{r.label}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{r.desc}</div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Importance across ML workflows (illustrative)</div>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" interval={0} angle={-15} textAnchor="end" height={70} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="impact" radius={[6, 6, 0, 0]}>
                {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
