import { useMemo, useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function DescShape({ lesson: _lesson }: { lesson: Lesson }) {
  const [skew, setSkew] = useState(1.5);
  const [kurt, setKurt] = useState(3);

  const data = useMemo(() => {
    const out: { x: number; y: number }[] = [];
    for (let i = 0; i < 200; i++) {
      const x = -6 + (i / 199) * 12;
      let y = Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
      y *= 1 + skew * (x / 2) * Math.exp(-Math.abs(x));
      y *= 1 + (kurt - 3) * 0.15 * (x * x * x * x - 6 * x * x + 3) * 0.02;
      y = Math.max(0.001, y);
      out.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(4)) });
    }
    return out;
  }, [skew, kurt]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Shape parameters</div>
          <Slider value={skew} onChange={setSkew} min={-2} max={2} step={0.1} label="Skewness" formatValue={(v) => v.toFixed(1)} />
          <Slider value={kurt} onChange={setKurt} min={1} max={6} step={0.1} label="Kurtosis" formatValue={(v) => v.toFixed(1)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Skew" value={skew.toFixed(2)} tone={Math.abs(skew) < 0.2 ? 'success' : 'warning'} hint="0 = symmetric" />
          <StatBadge label="Kurt" value={kurt.toFixed(2)} tone={kurt > 3 ? 'warning' : 'default'} hint="3 = normal tails" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Skewness measures asymmetry. Kurtosis measures tail-heaviness; high kurtosis = thick tails.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Distribution shape</div>
          <ResponsiveContainer width="100%" height="88%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="shapeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-6, 6]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <ReferenceLine x={0} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="y" stroke="var(--chart-1)" fill="url(#shapeGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[160px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Tail comparison (low values)</div>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={data.filter((d) => d.x < -2).map((d) => ({ range: d.x.toFixed(1), y: d.y }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="range" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="y" fill="var(--chart-4)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
