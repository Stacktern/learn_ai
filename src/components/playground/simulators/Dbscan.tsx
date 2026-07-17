import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function gen(seed: number) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const pts: { x: number; y: number; type: 'core' | 'border' | 'noise' }[] = [];
  // cluster 1
  for (let i = 0; i < 15; i++) pts.push({ x: 2 + (r() - 0.5) * 1.5, y: 2 + (r() - 0.5) * 1.5, type: 'core' });
  // cluster 2
  for (let i = 0; i < 12; i++) pts.push({ x: 7 + (r() - 0.5) * 1.5, y: 6 + (r() - 0.5) * 1.5, type: 'core' });
  // noise
  for (let i = 0; i < 8; i++) pts.push({ x: r() * 10, y: r() * 10, type: 'noise' });
  return pts;
}

function dbscan(pts: { x: number; y: number }[], eps: number, minPts: number) {
  const labels: (-1 | number)[] = Array(pts.length).fill(-1);
  const dist = (a: number, b: number) => Math.hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y);
  const neighbors = (i: number) => pts.map((_, j) => j).filter((j) => dist(i, j) <= eps);
  let c = 0;
  for (let i = 0; i < pts.length; i++) {
    if (labels[i] !== -1) continue;
    const nbrs = neighbors(i);
    if (nbrs.length < minPts) { labels[i] = -1; continue; }
    labels[i] = c;
    const queue = [...nbrs];
    while (queue.length) {
      const q = queue.shift()!;
      if (labels[q] === -1) labels[q] = c;
      if (labels[q] !== -1 && labels[q] !== c && typeof labels[q] === 'number' && labels[q] !== c) continue;
      if (labels[q] !== -1) continue;
      labels[q] = c;
      const qn = neighbors(q);
      if (qn.length >= minPts) queue.push(...qn);
    }
    c++;
  }
  return labels;
}

export default function Dbscan({ lesson: _lesson }: { lesson: Lesson }) {
  const [eps, setEps] = useState(1.0);
  const [minPts, setMinPts] = useState(3);
  const [seed, setSeed] = useState(5);
  const data = useMemo(() => gen(seed), [seed]);
  const labels = useMemo(() => dbscan(data, eps, minPts), [data, eps, minPts]);
  const nClusters = new Set(labels.filter((l) => l >= 0)).size;
  const nNoise = labels.filter((l) => l === -1).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">DBSCAN params</div>
          <Slider value={eps} onChange={setEps} min={0.3} max={3} step={0.05} label="ε (epsilon)" formatValue={(v) => v.toFixed(2)} />
          <Slider value={minPts} onChange={setMinPts} min={2} max={10} step={1} label="minPts" formatValue={(v) => `${v}`} />
          <button onClick={() => setSeed((s) => s + 1)} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft">↺ Re-seed data</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Clusters" value={nClusters} tone={nClusters >= 2 ? 'success' : 'warning'} />
          <StatBadge label="Noise pts" value={nNoise} tone={nNoise > 5 ? 'warning' : 'default'} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          DBSCAN groups dense regions and marks sparse points as <span className="font-mono text-red-500">noise</span> (−1).
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Clusters + noise</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((p, i) => <Cell key={i} fill={labels[i] === -1 ? 'var(--text-muted)' : `var(--chart-${(Number(labels[i]) % 5) + 1})`} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
