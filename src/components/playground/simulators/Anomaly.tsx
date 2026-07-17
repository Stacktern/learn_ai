import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function gen(seed: number) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const pts: { x: number; y: number; kind: 'normal' | 'anomaly' }[] = [];
  for (let i = 0; i < 80; i++) pts.push({ x: r() * 10, y: r() * 10, kind: 'normal' });
  // Inject some anomalies
  pts.push({ x: 1, y: 9, kind: 'anomaly' });
  pts.push({ x: 9, y: 1, kind: 'anomaly' });
  pts.push({ x: 0.5, y: 0.5, kind: 'anomaly' });
  pts.push({ x: 9.5, y: 9.5, kind: 'anomaly' });
  pts.push({ x: 5, y: 0, kind: 'anomaly' });
  return pts;
}

function kdist(pts: { x: number; y: number }[], k: number) {
  return pts.map((p) => {
    const ds = pts.map((q) => Math.hypot(p.x - q.x, p.y - q.y)).sort((a, b) => a - b);
    return ds[k] ?? 0;
  });
}

function iforestScore(pts: { x: number; y: number }[], nTrees: number, sampleSize: number, seed: number) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const pathLength = (point: { x: number; y: number }, node: { split: number; axis: 'x' | 'y' | null; left: any; right: any } | null, depth = 0): number => {
    if (depth >= 8 || !node || node.axis === null) return depth;
    const v = node.axis === 'x' ? point.x : point.y;
    return pathLength(point, v < node.split ? node.left : node.right, depth + 1);
  };
  const build = (sample: { x: number; y: number }[]): { split: number; axis: 'x' | 'y' | null; left: any; right: any } => {
    if (sample.length <= 1) return { split: 0, axis: null, left: null, right: null };
    const axis: 'x' | 'y' = r() < 0.5 ? 'x' : 'y';
    const sorted = [...sample].sort((a, b) => (axis === 'x' ? a.x - b.x : a.y - b.y));
    const split = sorted[Math.floor(sorted.length / 2)][axis];
    return { split, axis, left: build(sample.filter((p) => (axis === 'x' ? p.x : p.y) < split)), right: build(sample.filter((p) => (axis === 'x' ? p.x : p.y) >= split)) };
  };
  const trees = Array.from({ length: nTrees }, () => {
    const sample = Array.from({ length: sampleSize }, () => pts[Math.floor(r() * pts.length)]);
    return build(sample);
  });
  return pts.map((p) => {
    const avg = trees.reduce((a, t) => a + pathLength(p, t), 0) / nTrees;
    return { score: Math.pow(2, -avg / 4), pathLen: avg };
  });
}

export default function Anomaly({ lesson: _lesson }: { lesson: Lesson }) {
  const [k, setK] = useState(5);
  const [seed, setSeed] = useState(11);
  const data = useMemo(() => gen(seed), [seed]);
  const kdistances = useMemo(() => kdist(data, k), [data, k]);
  const threshold = useMemo(() => {
    const sorted = [...kdistances].sort((a, b) => b - a);
    return sorted[3] ?? 0;
  }, [kdistances]);
  const iforest = useMemo(() => iforestScore(data, 25, 32, seed), [data, seed]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Method: k-th nearest distance</div>
          <Slider value={k} onChange={setK} min={2} max={15} step={1} label="k" formatValue={(v) => `${v}`} />
          <button onClick={() => setSeed((s) => s + 1)} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft">↺ New dataset</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Distance threshold" value={threshold.toFixed(2)} tone="warning" hint="top 3 flagged" />
          <StatBadge label="Max iforest score" value={Math.max(...iforest.map((s) => s.score)).toFixed(2)} tone="success" hint="closer to 1 = more anomalous" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Anomaly detection finds points that don't fit the rest. Two main flavors: <strong>distance-based</strong> (k-NN distance) and <strong>density-based</strong> (Isolation Forest).
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[220px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">k-NN distance (red = far)</div>
          <ResponsiveContainer width="100%" height="88%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data.map((d, i) => ({ x: d.x, y: d.y, d: kdistances[i] }))}>
                {data.map((_, i) => <Cell key={i} fill={kdistances[i] > threshold ? 'var(--chart-4)' : 'var(--chart-1)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[160px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Isolation Forest score (1 = anomaly)</div>
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="pathLen" fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="number" dataKey="score" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={iforest}>
                {iforest.map((s, i) => <Cell key={i} fill={s.score > 0.6 ? 'var(--chart-4)' : 'var(--chart-1)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
