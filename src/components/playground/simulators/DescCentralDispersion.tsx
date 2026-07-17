import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function DescCentralDispersion({ lesson: _lesson }: { lesson: Lesson }) {
  const [mu, setMu] = useState(50);
  const [sigma, setSigma] = useState(12);
  const [outlier, setOutlier] = useState(150);

  const data = useMemo(() => {
    let s = 1234;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i < 60; i++) {
      const u1 = r() || 1e-9;
      const u2 = r();
      const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      const x = Math.max(0, Math.min(120, mu + sigma * z));
      pts.push({ x, y: 0 });
    }
    pts.push({ x: outlier, y: 1 });
    return pts;
  }, [mu, sigma, outlier]);

  const values = data.map((d) => d.x).sort((a, b) => a - b);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const median = values[Math.floor(values.length / 2)];
  const min = values[0];
  const max = values[values.length - 1];
  const range = max - min;
  const q1 = values[Math.floor(values.length * 0.25)];
  const q3 = values[Math.floor(values.length * 0.75)];
  const iqr = q3 - q1;
  const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
  const std = Math.sqrt(variance);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={mu} onChange={setMu} min={20} max={80} step={1} label="μ (population mean)" formatValue={(v) => `${v}`} />
          <Slider value={sigma} onChange={setSigma} min={2} max={30} step={1} label="σ (population std)" formatValue={(v) => `${v}`} />
          <Slider value={outlier} onChange={setOutlier} min={0} max={200} step={5} label="Outlier value" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Mean" value={mean.toFixed(1)} tone={Math.abs(mean - median) > 5 ? 'warning' : 'default'} hint="sensitive to outliers" />
          <StatBadge label="Median" value={median.toFixed(1)} tone="success" hint="robust" />
          <StatBadge label="Std dev" value={std.toFixed(1)} hint="spread" />
          <StatBadge label="IQR" value={iqr.toFixed(1)} hint="Q3 − Q1" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Range" value={range.toFixed(1)} hint="max − min" />
          <StatBadge label="Variance" value={variance.toFixed(1)} hint="σ²" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Compare mean vs median — the gap is driven by the outlier.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Sample (60 points) + outlier at the top</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 200]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[-0.5, 1.5]} ticks={[0, 1]} tickFormatter={(v) => v === 0 ? 'sample' : v === 1 ? 'outlier' : ''} />
              <ReferenceLine x={mean} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: `mean ${mean.toFixed(0)}`, fontSize: 10, fill: 'var(--chart-4)' }} />
              <ReferenceLine x={median} stroke="var(--chart-2)" strokeDasharray="4 4" label={{ value: `median ${median.toFixed(0)}`, fontSize: 10, fill: 'var(--chart-2)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((d, i) => <Cell key={i} fill={d.y === 1 ? 'var(--chart-4)' : 'var(--chart-1)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
