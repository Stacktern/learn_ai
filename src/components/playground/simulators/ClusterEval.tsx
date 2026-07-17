import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ScatterChart, Scatter, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function gen(seed: number, k: number) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const centers = Array.from({ length: k }, () => ({ x: r() * 10, y: r() * 10 }));
  const pts: { x: number; y: number; true: number }[] = [];
  for (let c = 0; c < k; c++) {
    for (let i = 0; i < 12; i++) {
      pts.push({ x: centers[c].x + (r() - 0.5) * 1.6, y: centers[c].y + (r() - 0.5) * 1.6, true: c });
    }
  }
  return { pts, centers };
}

function kmeans(pts: { x: number; y: number }[], k: number) {
  let cs = Array.from({ length: k }, () => ({ x: Math.random() * 10, y: Math.random() * 10 }));
  let labels: number[] = [];
  for (let it = 0; it < 20; it++) {
    labels = pts.map((p) => {
      let best = 0; let bd = Infinity;
      cs.forEach((c, i) => { const d = Math.hypot(p.x - c.x, p.y - c.y); if (d < bd) { bd = d; best = i; } });
      return best;
    });
    cs = cs.map((_, i) => {
      const cl = pts.filter((_, j) => labels[j] === i);
      if (cl.length === 0) return cs[i];
      return { x: cl.reduce((a, b) => a + b.x, 0) / cl.length, y: cl.reduce((a, b) => a + b.y, 0) / cl.length };
    });
  }
  return labels;
}

function silhouette(pts: { x: number; y: number; label: number }[]) {
  const groups: Record<number, typeof pts> = {};
  pts.forEach((p) => { (groups[p.label] ||= []).push(p); });
  const sils = pts.map((p) => {
    const own = groups[p.label];
    if (own.length <= 1) return 0;
    const a = own.reduce((acc, q) => acc + Math.hypot(p.x - q.x, p.y - q.y), 0) / (own.length - 1);
    const b = Math.min(...Object.entries(groups).filter(([k]) => Number(k) !== p.label).map(([, arr]) => arr.reduce((acc, q) => acc + Math.hypot(p.x - q.x, p.y - q.y), 0) / arr.length));
    return (b - a) / Math.max(a, b);
  });
  return sils.reduce((a, b) => a + b, 0) / sils.length;
}

export default function ClusterEval({ lesson: _lesson }: { lesson: Lesson }) {
  const [k, setK] = useState(3);
  const [seed, setSeed] = useState(9);
  const { pts } = useMemo(() => gen(seed, 4), [seed]);
  const labels = useMemo(() => kmeans(pts, k), [pts, k]);
  const sil = useMemo(() => silhouette(pts.map((p, i) => ({ ...p, label: labels[i] }))), [pts, labels]);

  const elbow = useMemo(() => {
    const data: { k: number; inertia: number }[] = [];
    for (let kk = 1; kk <= 6; kk++) {
      const lbls = kmeans(pts, kk);
      const inertia = pts.reduce((acc, p, i) => {
        const c = labelCenter(pts, lbls, lbls[i]);
        return acc + Math.hypot(p.x - c.x, p.y - c.y) ** 2;
      }, 0);
      data.push({ k: kk, inertia: Number(inertia.toFixed(1)) });
    }
    return data;
  }, [pts, seed]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Try k</div>
          <Slider value={k} onChange={setK} min={2} max={6} step={1} label="k" formatValue={(v) => `${v}`} />
          <button onClick={() => setSeed((s) => s + 1)} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft">↺ New dataset</button>
        </div>
        <StatBadge label="Silhouette" value={sil.toFixed(2)} tone={sil > 0.5 ? 'success' : sil > 0.25 ? 'warning' : 'danger'} hint="closer to 1 is better" />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Silhouette compares intra-cluster cohesion (a) vs. nearest-cluster separation (b). True k often has the highest value.
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Elbow curve (inertia vs k)</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={elbow}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="k" fontSize={10} stroke="var(--text-muted)" domain={[1, 6]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="inertia" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Clustering (k = {k})</div>
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={pts}>
                {pts.map((_, i) => <Cell key={i} fill={`var(--chart-${(labels[i] % 5) + 1})`} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function labelCenter(pts: { x: number; y: number }[], labels: number[], label: number) {
  const cl = pts.filter((_, i) => labels[i] === label);
  return { x: cl.reduce((a, b) => a + b.x, 0) / cl.length, y: cl.reduce((a, b) => a + b.y, 0) / cl.length };
}
