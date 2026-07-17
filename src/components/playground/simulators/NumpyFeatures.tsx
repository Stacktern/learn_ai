import { useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';

const FEATURES = [
  { name: 'Efficiency', desc: 'Implemented in C with BLAS / LAPACK for fast numeric kernels.', score: 9 },
  { name: 'Array Interface (ndarray)', desc: 'Fast, flexible container for large datasets; vectorised math without Python loops.', score: 10 },
  { name: 'Broadcasting', desc: 'Arithmetic on arrays of different shapes without copying data.', score: 9 },
  { name: 'Integration', desc: 'Foundational layer beneath Pandas, SciPy, scikit-learn, and most scientific Python.', score: 10 },
];

export default function NumpyFeatures({ lesson: _lesson }: { lesson: Lesson }) {
  const data = useMemo(() => FEATURES.map((f) => ({ name: f.name, score: f.score, desc: f.desc })), []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Relative importance (illustrative)</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="category" dataKey="name" fontSize={10} stroke="var(--text-muted)" width={140} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="lg:col-span-5 rounded-2xl border border-border-app bg-surface p-4 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Key features (from the book)</div>
        {FEATURES.map((f, i) => (
          <div key={f.name} className="rounded-lg border border-border-app bg-surface-2/40 p-2.5">
            <div className="text-xs font-bold text-text-primary flex items-center gap-2">
              <span className="h-5 w-5 rounded-md bg-accent-soft text-accent text-[10px] font-mono flex items-center justify-center">{i + 1}</span>
              {f.name}
            </div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
