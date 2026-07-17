import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function gen(seed: number) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const pts: { x: number; y: number; color: number }[] = [];
  for (let i = 0; i < 60; i++) {
    const x = r() * 10;
    const y = 0.6 * x + (r() - 0.5) * 4;
    const color = y > 0.6 * x ? 1 : 0;
    pts.push({ x, y, color });
  }
  return pts;
}

function pca(pts: { x: number; y: number }[]) {
  const n = pts.length;
  const mx = pts.reduce((a, b) => a + b.x, 0) / n;
  const my = pts.reduce((a, b) => a + b.y, 0) / n;
  const X = pts.map((p) => p.x - mx);
  const Y = pts.map((p) => p.y - my);
  const cxx = X.reduce((a, x) => a + x * x, 0) / n;
  const cyy = Y.reduce((a, y) => a + y * y, 0) / n;
  const cxy = X.reduce((a, x, i) => a + x * Y[i], 0) / n;
  const trace = cxx + cyy;
  const det = cxx * cyy - cxy * cxy;
  const disc = Math.sqrt(Math.max(0, trace * trace / 4 - det));
  const l1 = trace / 2 + disc;
  const l2 = trace / 2 - disc;
  const v1x = cxy === 0 ? 1 : cxy;
  const v1y = l1 - cxx;
  const norm = Math.hypot(v1x, v1y) || 1;
  const pc1 = { x: v1x / norm, y: v1y / norm };
  return { pc1, l1, l2, mx, my, var1: l1 / (l1 + l2) };
}

function project(pts: { x: number; y: number; color?: number }[], pc1: { x: number; y: number }, mx: number, my: number) {
  return pts.map((p) => {
    const rel = { x: p.x - mx, y: p.y - my };
    return { t: rel.x * pc1.x + rel.y * pc1.y, x: p.x, y: p.y, color: p.color };
  });
}

export default function Pca({ lesson: _lesson }: { lesson: Lesson }) {
  const [seed, setSeed] = useState(3);
  const data = useMemo(() => gen(seed), [seed]);
  const { pc1, l1, l2, mx, my, var1 } = useMemo(() => pca(data), [data]);
  const projected = useMemo(() => project(data, pc1, mx, my), [data, pc1, mx, my]);

  const lineData = [
    { x: mx - pc1.x * 8, y: my - pc1.y * 8 },
    { x: mx + pc1.x * 8, y: my + pc1.y * 8 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">PCA</div>
          <button onClick={() => setSeed((s) => s + 1)} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft">↺ New dataset</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="λ₁" value={l1.toFixed(2)} tone="default" />
          <StatBadge label="λ₂" value={l2.toFixed(2)} tone="default" />
        </div>
        <StatBadge label="Variance on PC1" value={`${(var1 * 100).toFixed(1)}%`} tone={var1 > 0.7 ? 'success' : 'warning'} hint="higher = more info" />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          PC1 = the direction of maximum variance. Project data onto it to compress 2D → 1D with minimum information loss.
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[220px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Original (2D) with PC1 line</div>
          <ResponsiveContainer width="100%" height="88%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((d, i) => <Cell key={i} fill={d.color === 1 ? 'var(--chart-5)' : 'var(--chart-1)'} />)}
              </Scatter>
              <Scatter data={lineData} fill="var(--chart-4)" line={{ stroke: 'var(--chart-4)', strokeWidth: 2.5 }} shape={() => <g />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[160px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Projected onto PC1 (1D coordinate t)</div>
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[-0.5, 1.5]} ticks={[0, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={projected.map((p) => ({ t: p.t, color: p.color }))}>
                {projected.map((p, i) => <Cell key={i} fill={p.color === 1 ? 'var(--chart-5)' : 'var(--chart-1)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
