import { useState } from 'react';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const AREAS = [
  { area: 'Linear Algebra', desc: 'Vectors, matrices, linear transformations, transformations, PCA, deep neural networks.', scores: { Math: 10, Stats: 4 } },
  { area: 'Calculus', desc: 'Multivariable calculus, optimisation, backpropagation, rate of change.', scores: { Math: 10, Stats: 5 } },
  { area: 'Probability', desc: 'Probabilistic models, classification, hypothesis testing, results interpretation.', scores: { Math: 8, Stats: 10 } },
  { area: 'Statistics', desc: 'Regression models, parameter estimation, hypothesis testing, performance evaluation.', scores: { Math: 6, Stats: 10 } },
  { area: 'Discrete Math', desc: 'Data structures, algorithms, graphs and trees, decision-making, network theory.', scores: { Math: 9, Stats: 3 } },
  { area: 'Optimization', desc: 'Gradient descent and variants for finding best model parameters.', scores: { Math: 10, Stats: 4 } },
];

export default function MathStatsIntegration({ lesson: _lesson }: { lesson: Lesson }) {
  const [highlight, setHighlight] = useState<string | null>(null);
  const data = AREAS.map((a) => ({ area: a.area, Math: a.scores.Math, Stats: a.scores.Stats }));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        {AREAS.map((a) => (
          <button
            key={a.area}
            onClick={() => setHighlight(highlight === a.area ? null : a.area)}
            className={clsx(
              'w-full text-left rounded-xl border p-3 transition-all',
              highlight === a.area ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40',
            )}
          >
            <div className="text-sm font-bold text-text-primary">{a.area}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{a.desc}</div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Math vs Stats intensity per area</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="80%">
              <PolarGrid stroke="var(--border-app)" />
              <PolarAngleAxis dataKey="area" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
              <PolarRadiusAxis domain={[0, 10]} tick={{ fontSize: 9, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Radar name="Math" dataKey="Math" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.25} strokeWidth={2} />
              <Radar name="Stats" dataKey="Stats" stroke="var(--chart-3)" fill="var(--chart-3)" fillOpacity={0.25} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
