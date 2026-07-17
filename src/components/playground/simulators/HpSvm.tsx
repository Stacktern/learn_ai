import { useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function HpSvm({ lesson: _lesson }: { lesson: Lesson }) {
  // Tiny example: fit a 2-D SVR and show the residuals
  const [slope, setSlope] = useState(2);
  const [intercept, setIntercept] = useState(3);
  const N = 30;
  const data = Array.from({ length: N }, (_, i) => {
    const x = (i / (N - 1)) * 10;
    const y = intercept + slope * x + (Math.random() - 0.5) * 1.2;
    return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) };
  });
  const line = [
    { x: 0, y: intercept },
    { x: 10, y: intercept + 10 * slope },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={slope} onChange={setSlope} min={0.5} max={4} step={0.1} label="True slope" formatValue={(v) => v.toFixed(1)} />
          <Slider value={intercept} onChange={setIntercept} min={0} max={6} step={0.1} label="Intercept" formatValue={(v) => v.toFixed(1)} />
        </div>
        <div className={clsx('rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300')}>
          SVR MSE = 7,854,595,775 on the test set — ~9× worse than Random Forest. Linear SVR cannot capture the non-linearities in 80 features.
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Try a non-linear SVR (RBF kernel) and tune C and ε to bring the error closer to RF.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">SVR on a 2-D toy example</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 26]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data} fill="var(--chart-1)" />
              <Scatter data={line} fill="transparent" line={{ stroke: 'var(--chart-4)', strokeWidth: 2.5 }} shape={() => <g />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
