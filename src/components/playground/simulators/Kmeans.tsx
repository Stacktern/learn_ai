import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function gen(seed: number) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const centers: { x: number; y: number }[] = [
    { x: 2, y: 2 }, { x: 7, y: 3 }, { x: 4, y: 7 },
  ];
  const pts: { x: number; y: number; cx: number; cy: number; c: number }[] = [];
  for (let c = 0; c < centers.length; c++) {
    for (let i = 0; i < 14; i++) {
      pts.push({ x: centers[c].x + (r() - 0.5) * 1.8, y: centers[c].y + (r() - 0.5) * 1.8, cx: centers[c].x, cy: centers[c].y, c });
    }
  }
  return pts;
}

function kmeansStep(pts: { x: number; y: number }[], centers: { x: number; y: number }[]) {
  const labels = pts.map((p) => {
    let best = 0;
    let bestD = Infinity;
    centers.forEach((c, i) => {
      const d = Math.hypot(p.x - c.x, p.y - c.y);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  });
  const newCenters = centers.map((_, i) => {
    const cluster = pts.filter((_, j) => labels[j] === i);
    if (cluster.length === 0) return centers[i];
    return {
      x: cluster.reduce((a, b) => a + b.x, 0) / cluster.length,
      y: cluster.reduce((a, b) => a + b.y, 0) / cluster.length,
    };
  });
  return { labels, newCenters };
}

export default function Kmeans({ lesson: _lesson }: { lesson: Lesson }) {
  const [k, setK] = useState(3);
  const [step, setStep] = useState(5);
  const [seed, setSeed] = useState(11);

  const data = useMemo(() => gen(seed), [seed]);
  const { labels, centers } = useMemo(() => {
    let cs = Array.from({ length: k }, () => ({ x: Math.random() * 10, y: Math.random() * 10 }));
    let lastLabels: number[] = [];
    for (let i = 0; i < step; i++) {
      const r = kmeansStep(data, cs);
      cs = r.newCenters;
      lastLabels = r.labels;
    }
    return { labels: lastLabels, centers: cs };
  }, [data, k, step]);

  const sse = useMemo(() => data.reduce((acc, p, i) => acc + Math.hypot(p.x - centers[labels[i]].x, p.y - centers[labels[i]].y) ** 2, 0), [data, labels, centers]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Hyperparameters</div>
          <Slider value={k} onChange={(v) => { setK(v); setStep(0); }} min={1} max={6} step={1} label="k (clusters)" formatValue={(v) => `${v}`} />
          <Slider value={step} onChange={setStep} min={0} max={20} step={1} label="Iterations" formatValue={(v) => `${v}`} />
          <button onClick={() => { setSeed((s) => s + 1); setStep(0); }} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft">↺ Re-seed data</button>
        </div>
        <StatBadge label="SSE (inertia)" value={sse.toFixed(2)} tone={sse < 50 ? 'success' : sse < 150 ? 'warning' : 'danger'} hint="lower = tighter clusters" />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          K-means alternates between (1) assigning points to the nearest centroid and (2) moving each centroid to its cluster's mean.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Data + centroids (✦)</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((p, i) => <Cell key={i} fill={`var(--chart-${(labels[i] % 5) + 1})`} />)}
              </Scatter>
              <Scatter data={centers.map((c) => ({ x: c.x, y: c.y }))} fill="var(--text-primary)" shape="star" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
