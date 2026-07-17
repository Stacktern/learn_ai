import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function sigmoid(z: number) { return 1 / (1 + Math.exp(-z)); }

export default function LogisticReg2({ lesson: _lesson }: { lesson: Lesson }) {
  const [w, setW] = useState(1.5);
  const [b, setB] = useState(0);
  const [threshold, setThreshold] = useState(0.5);

  const data = useMemo(() => {
    const out: { x: number; p: number }[] = [];
    for (let i = 0; i <= 60; i++) {
      const x = (i / 60) * 10 - 5;
      out.push({ x: Number(x.toFixed(2)), p: Number(sigmoid(w * x + b).toFixed(3)) });
    }
    return out;
  }, [w, b]);

  const samples = useMemo(() => {
    const out: { x: number; label: number; p: number }[] = [];
    for (let i = 0; i < 30; i++) {
      const x = (Math.random() - 0.5) * 8;
      const p = sigmoid(w * x + b);
      out.push({ x, label: p > 0.5 ? 1 : 0, p });
    }
    return out;
  }, [w, b]);

  const correct = samples.filter((s) => (s.p >= threshold ? 1 : 0) === s.label).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={w} onChange={setW} min={-3} max={3} step={0.05} label="Weight w" formatValue={(v) => v.toFixed(2)} />
          <Slider value={b} onChange={setB} min={-3} max={3} step={0.05} label="Bias b" formatValue={(v) => v.toFixed(2)} />
          <Slider value={threshold} onChange={setThreshold} min={0.1} max={0.9} step={0.05} label="Threshold" formatValue={(v) => v.toFixed(2)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Accuracy" value={`${Math.round((correct / samples.length) * 100)}%`} tone="success" />
          <StatBadge label="log-loss" value={(-samples.reduce((a, s) => a + (s.label ? Math.log(s.p + 1e-9) : Math.log(1 - s.p + 1e-9)), 0) / samples.length).toFixed(3)} hint="MLE" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Trained using <strong>Maximum Likelihood Estimation (MLE)</strong>. The coefficient is the change in log-odds per unit of x.
        </div>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300">
          Limitation: assumes linearity between the dependent variable and the independent variables.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Sigmoid probability</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-5, 5]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
              <ReferenceLine y={threshold} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: `t = ${threshold}`, fontSize: 10, fill: 'var(--chart-4)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="p" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Sample points (predicted probability)</div>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-5, 5]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="p" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.2} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
