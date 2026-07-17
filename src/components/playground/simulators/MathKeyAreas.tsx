import { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const AREAS = [
  { name: 'Linear Algebra', desc: 'Vectors, matrices, transformations; PCA; deep neural networks.' },
  { name: 'Calculus', desc: 'Multivariable calculus; optimisation; backpropagation.' },
  { name: 'Probability', desc: 'Inferences, uncertainty, classification, hypothesis testing.' },
  { name: 'Statistics', desc: 'Parameter estimation, regression models, performance evaluation.' },
  { name: 'Discrete Math', desc: 'Data structures, graphs, trees, network theory.' },
  { name: 'Optimization', desc: 'Gradient descent and variants for parameter learning.' },
];

export default function MathKeyAreas({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<number | null>(0);
  const data = AREAS.map((a, i) => ({ name: a.name, weight: 10 - i }));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        {AREAS.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setActive(i)}
            className={clsx(
              'w-full text-left rounded-xl border p-3 transition-all',
              active === i ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40',
            )}
          >
            <div className="text-sm font-bold text-text-primary">{a.name}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{a.desc}</div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Six key areas of mathematics for DS</div>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={9} stroke="var(--text-muted)" angle={-15} textAnchor="end" interval={0} height={60} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="weight" radius={[4, 4, 0, 0]}>
                {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
