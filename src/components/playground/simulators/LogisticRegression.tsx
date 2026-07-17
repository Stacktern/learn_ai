import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Line, LineChart } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function sigmoid(z: number) {
  return 1 / (1 + Math.exp(-z));
}

const POINTS: { x: number; label: 0 | 1 }[] = [
  { x: -2.5, label: 0 },
  { x: -1.8, label: 0 },
  { x: -1.2, label: 0 },
  { x: -0.5, label: 0 },
  { x: -0.3, label: 0 },
  { x: 0.2, label: 1 },
  { x: 0.7, label: 1 },
  { x: 1.1, label: 1 },
  { x: 1.7, label: 1 },
  { x: 2.3, label: 1 },
];

export default function LogisticRegression({ lesson: _lesson }: { lesson: Lesson }) {
  const [w, setW] = useState(2);
  const [b, setB] = useState(0);
  const [threshold, setThreshold] = useState(0.5);

  const curve = useMemo(
    () => Array.from({ length: 60 }, (_, i) => {
      const x = -3 + (i / 59) * 6;
      return { x: Number(x.toFixed(2)), p: Number(sigmoid(w * x + b).toFixed(3)) };
    }),
    [w, b],
  );

  const predictions = POINTS.map((p) => ({ ...p, p: sigmoid(w * p.x + b) }));
  const correct = predictions.filter((p) => (p.p >= threshold ? 1 : 0) === p.label).length;
  const acc = (correct / predictions.length) * 100;
  const logLoss = -predictions.reduce((acc, p) => acc + (p.label === 1 ? Math.log(p.p + 1e-9) : Math.log(1 - p.p + 1e-9)), 0) / predictions.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Model</div>
          <div className="font-mono text-xs text-text-primary">p = σ({w.toFixed(2)}·x + {b.toFixed(2)})</div>
          <Slider value={w} onChange={setW} min={-3} max={5} step={0.1} label="Weight (w)" formatValue={(v) => v.toFixed(2)} />
          <Slider value={b} onChange={setB} min={-3} max={3} step={0.1} label="Bias (b)" formatValue={(v) => v.toFixed(2)} />
          <Slider value={threshold} onChange={setThreshold} min={0.1} max={0.9} step={0.05} label="Decision threshold" formatValue={(v) => v.toFixed(2)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Accuracy" value={`${acc.toFixed(0)}%`} tone={acc >= 90 ? 'success' : acc >= 70 ? 'warning' : 'danger'} />
          <StatBadge label="Log loss" value={logLoss.toFixed(3)} tone={logLoss < 0.3 ? 'success' : logLoss < 0.6 ? 'warning' : 'danger'} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          <strong className="text-accent">σ(z) = 1/(1+e⁻ᶻ)</strong> squashes the line into a probability in (0, 1).
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[220px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Probability curve</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={curve}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-3, 3]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="p" stroke="var(--chart-2)" strokeWidth={2.5} dot={false} animationDuration={300} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Data points (colored by label)</div>
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-3, 3]} />
              <YAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[-0.5, 1.5]} ticks={[0, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={predictions.filter((p) => p.label === 0)} fill="var(--chart-1)" />
              <Scatter data={predictions.filter((p) => p.label === 1)} fill="var(--chart-5)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
