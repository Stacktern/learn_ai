import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function genClusters(seed: number, nPer = 20) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const centers = [
    { x: -2, y: 2 },
    { x: 2, y: -2 },
    { x: -2, y: -2 },
    { x: 2, y: 2 },
  ];
  return centers.flatMap((c) => Array.from({ length: nPer }, () => ({ x: c.x + (r() - 0.5) * 1.2, y: c.y + (r() - 0.5) * 1.2, true: centers.indexOf(c) })));
}

function tsneLite(pts: { x: number; y: number }[], perplexity: number, steps: number) {
  const n = pts.length;
  const dists = pts.map((a, i) => pts.map((b, j) => (i === j ? 0 : Math.hypot(a.x - b.x, a.y - b.y))));
  // binary search for sigma
  const P = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let lo = 0.01, hi = 10;
    let target = Math.log(perplexity);
    for (let it = 0; it < 30; it++) {
      const mid = (lo + hi) / 2;
      let H = 0;
      let sum = 0;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const p = Math.exp(-dists[i][j] * dists[i][j] / (2 * mid * mid));
        sum += p;
      }
      sum = sum || 1;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const p = Math.exp(-dists[i][j] * dists[i][j] / (2 * mid * mid)) / sum;
        H -= p * Math.log(p + 1e-12);
      }
      if (H > target) hi = mid; else lo = mid;
    }
    const sigma = (lo + hi) / 2;
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      P[i][j] = Math.exp(-dists[i][j] * dists[i][j] / (2 * sigma * sigma));
      sum += P[i][j];
    }
    for (let j = 0; j < n; j++) P[i][j] = sum === 0 ? 0 : P[i][j] / sum;
  }
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) P[i][j] = (P[i][j] + P[j][i]) / (2 * n);
  // initialize Q with random 2D points
  let Y = pts.map(() => ({ x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01 }));
  const lr = 5;
  for (let step = 0; step < steps; step++) {
    const qd = Y.map((a, i) => Y.map((b, j) => {
      if (i === j) return 0;
      const d2 = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
      return 1 / (1 + d2);
    }));
    for (let i = 0; i < n; i++) {
      let sumQ = 0;
      for (let j = 0; j < n; j++) sumQ += qd[i][j];
      sumQ = sumQ || 1;
      let gx = 0, gy = 0;
      for (let j = 0; j < n; j++) {
        const qij = qd[i][j] / sumQ;
        const pij = Math.max(P[i][j], 1e-12);
        const factor = (pij - qij) * 4;
        gx += factor * qij * (Y[i].x - Y[j].x);
        gy += factor * qij * (Y[i].y - Y[j].y);
      }
      Y[i] = { x: Y[i].x - lr * gx, y: Y[i].y - lr * gy };
    }
  }
  return Y;
}

export default function Tsne({ lesson: _lesson }: { lesson: Lesson }) {
  const [perplexity, setPerplexity] = useState(15);
  const [steps, setSteps] = useState(120);
  const [seed, setSeed] = useState(2);

  const data = useMemo(() => genClusters(seed, 18), [seed]);
  const y = useMemo(() => tsneLite(data, perplexity, steps), [data, perplexity, steps]);
  const projected = data.map((d, i) => ({ x: y[i].x, y: y[i].y, true: d.true }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">t-SNE params</div>
          <Slider value={perplexity} onChange={setPerplexity} min={5} max={40} step={1} label="Perplexity" formatValue={(v) => `${v}`} />
          <Slider value={steps} onChange={setSteps} min={40} max={200} step={20} label="Iterations" formatValue={(v) => `${v}`} />
          <button onClick={() => setSeed((s) => s + 1)} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft">↺ New dataset</button>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          t-SNE preserves local neighborhoods: nearby points in high-D stay nearby in 2D. Distances between far clusters are NOT meaningful.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">2D embedding (colors = true cluster)</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={projected}>
                {projected.map((p, i) => <Cell key={i} fill={`var(--chart-${(p.true % 5) + 1})`} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
