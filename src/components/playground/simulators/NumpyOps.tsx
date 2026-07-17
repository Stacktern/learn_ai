import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ScatterChart, Scatter, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function NumpyOps({ lesson: _lesson }: { lesson: Lesson }) {
  const [mult, setMult] = useState(2);
  const [n, setN] = useState(60);

  const base = useMemo(() => Array.from({ length: n }, (_, i) => i / (n - 1) * 10), [n]);
  const data = useMemo(() => {
    const a = base.map((x) => x);
    const g = base.map((x) => Math.exp(x / 3));
    const s = base.map((x) => Math.sin(x));
    const sq = base.map((x) => Math.sqrt(x));
    return a.map((x, i) => ({ x: Number(x.toFixed(2)), a: a[i], g: g[i], s: s[i], sq: sq[i], mult: a[i] * mult }));
  }, [base, mult]);

  const total = data.reduce((acc, d) => acc + d.a, 0);
  const mean = total / data.length;
  const max = Math.max(...data.map((d) => d.a));
  const min = Math.min(...data.map((d) => d.a));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <Slider value={n} onChange={setN} min={10} max={120} step={5} label="Array length" formatValue={(v) => `${v}`} />
          <Slider value={mult} onChange={setMult} min={0} max={10} step={0.5} label="Scalar multiplier" formatValue={(v) => `${v.toFixed(1)}×`} />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Sum" value={total.toFixed(2)} hint="np.sum(a)" />
          <StatBadge label="Mean" value={mean.toFixed(2)} hint="np.mean(a)" />
          <StatBadge label="Max" value={max.toFixed(2)} hint="np.max(a)" tone="success" />
          <StatBadge label="Min" value={min.toFixed(2)} hint="np.min(a)" tone="warning" />
        </div>

        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          'border-accent/40 bg-accent-soft/40 text-text-primary',
        )}>
          <strong className="text-accent">Vectorisation:</strong> a * 2 multiplies every element with one call — no Python loop needed.
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">a * multiplier (vectorised)</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="mult" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} animationDuration={300} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Math functions (sin / exp / sqrt)</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="s" stroke="var(--chart-2)" strokeWidth={2} dot={false} name="sin" />
              <Line type="monotone" dataKey="g" stroke="var(--chart-3)" strokeWidth={2} dot={false} name="exp(x/3)" />
              <Line type="monotone" dataKey="sq" stroke="var(--chart-4)" strokeWidth={2} dot={false} name="sqrt" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
