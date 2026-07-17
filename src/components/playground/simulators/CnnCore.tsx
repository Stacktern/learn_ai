import { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const COMPONENTS = [
  { name: 'Convolutional Layers', desc: 'Apply filters to detect edges, corners, textures — produce a feature map.', weight: 30 },
  { name: 'Activation Functions', desc: 'ReLU introduces non-linearity after each convolution.', weight: 15 },
  { name: 'Pooling Layers', desc: 'Downsample feature maps to control overfitting and reduce parameters.', weight: 20 },
  { name: 'Fully Connected Layers', desc: 'High-level reasoning after convolution + pooling; final classification.', weight: 35 },
];

export default function CnnCore({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Relative importance in a typical CNN</div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={COMPONENTS}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" angle={-15} textAnchor="end" interval={0} height={70} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="weight" radius={[6, 6, 0, 0]}>
                {COMPONENTS.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="lg:col-span-5 space-y-2">
        {COMPONENTS.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setActive(i)}
            className={clsx('w-full text-left rounded-xl border p-3', active === i ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40')}
          >
            <div className="text-sm font-bold text-text-primary">{c.name}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{c.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
