import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function LaVectors({ lesson: _lesson }: { lesson: Lesson }) {
  const [v1x, setV1x] = useState(3);
  const [v1y, setV1y] = useState(2);
  const [v2x, setV2x] = useState(2);
  const [v2y, setV2y] = useState(4);

  const dot = v1x * v2x + v1y * v2y;
  const n1 = Math.hypot(v1x, v1y);
  const n2 = Math.hypot(v2x, v2y);
  const cos = n1 && n2 ? dot / (n1 * n2) : 0;
  const angle = (Math.acos(Math.max(-1, Math.min(1, cos))) * 180) / Math.PI;

  const data = useMemo(() => [
    { x: 0, y: 0, label: 'origin' },
    { x: v1x, y: v1y, label: 'v1' },
    { x: v2x, y: v2y, label: 'v2' },
    { x: v1x + v2x, y: v1y + v2y, label: 'v1+v2' },
  ], [v1x, v1y, v2x, v2y]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">v1 = ({v1x}, {v1y})</div>
          <Slider value={v1x} onChange={setV1x} min={-5} max={5} step={1} label="v1.x" formatValue={(v) => `${v}`} />
          <Slider value={v1y} onChange={setV1y} min={-5} max={5} step={1} label="v1.y" formatValue={(v) => `${v}`} />
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">v2 = ({v2x}, {v2y})</div>
          <Slider value={v2x} onChange={setV2x} min={-5} max={5} step={1} label="v2.x" formatValue={(v) => `${v}`} />
          <Slider value={v2y} onChange={setV2y} min={-5} max={5} step={1} label="v2.y" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Dot product" value={dot} hint="v1·v2" />
          <StatBadge label="||v1||" value={n1.toFixed(2)} hint="L2 norm" />
          <StatBadge label="||v2||" value={n2.toFixed(2)} hint="L2 norm" />
          <StatBadge label="Angle" value={`${angle.toFixed(0)}°`} tone="success" hint="cos⁻¹(v1·v2 / |v1||v2|)" />
        </div>
        <div className={clsx('rounded-xl border p-3 text-xs', 'border-accent/40 bg-accent-soft/40 text-text-primary')}>
          Cosine similarity: <span className="font-mono">{cos.toFixed(3)}</span>. +1 = same direction, 0 = orthogonal, −1 = opposite.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">v1, v2 and v1+v2</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-6, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[-6, 10]} />
              <ReferenceLine x={0} stroke="var(--text-muted)" />
              <ReferenceLine y={0} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((d, i) => <Cell key={i} fill={d.label === 'v1' ? 'var(--chart-1)' : d.label === 'v2' ? 'var(--chart-2)' : d.label === 'v1+v2' ? 'var(--chart-4)' : 'var(--text-muted)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
