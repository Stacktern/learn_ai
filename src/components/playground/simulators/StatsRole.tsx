import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const USES = [
  { id: 'analysis', label: 'Data Analysis', desc: 'Statistics helps in understanding and interpreting data, summarising it effectively.' },
  { id: 'inference', label: 'Inference', desc: 'Statistical inference allows predictions and decisions from data, accounting for randomness and uncertainty.' },
  { id: 'validation', label: 'Model Validation', desc: 'Through statistical tests, a data scientist can assess the reliability of models.' },
];

const KEY_TOPICS = ['Probability theory', 'Inferential statistics', 'Hypothesis testing', 'Bayesian thinking'];

export default function StatsRole({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<string>('analysis');
  const data = useMemo(() => USES.map((u) => ({ name: u.label, score: 10 })), []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        {USES.map((u) => (
          <button
            key={u.id}
            onClick={() => setActive(u.id)}
            className={clsx(
              'w-full text-left rounded-xl border p-3 transition-all',
              active === u.id ? 'border-accent bg-accent-soft shadow-[var(--shadow-md)]' : 'border-border-app bg-surface hover:bg-accent-soft/40',
            )}
          >
            <div className="text-sm font-bold text-text-primary">{u.label}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{u.desc}</div>
          </button>
        ))}
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-1">Key topics explored</div>
          <div className="flex flex-wrap gap-1.5">
            {KEY_TOPICS.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-md bg-surface text-text-primary text-[10px] font-mono border border-border-app">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Where statistics lives in DS</div>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
