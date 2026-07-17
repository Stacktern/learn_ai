import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const POINTS = [
  { x: 1, y: 1, label: 'A' }, { x: 1.5, y: 1.3, label: 'B' }, { x: 1.2, y: 1.8, label: 'C' },
  { x: 5, y: 5, label: 'D' }, { x: 5.3, y: 4.8, label: 'E' }, { x: 4.8, y: 5.4, label: 'F' },
  { x: 3, y: 8, label: 'G' },
];

function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function linkage(clusters: number[][], link: 'single' | 'complete' | 'average'): [number, number, number] {
  let best = [0, 0, Infinity] as [number, number, number];
  for (let i = 0; i < clusters.length; i++) {
    for (let j = i + 1; j < clusters.length; j++) {
      const dists = clusters[i].flatMap((a) => clusters[j].map((b) => dist(POINTS[a], POINTS[b])));
      let d = 0;
      if (link === 'single') d = Math.min(...dists);
      else if (link === 'complete') d = Math.max(...dists);
      else d = dists.reduce((x, y) => x + y, 0) / dists.length;
      if (d < best[2]) best = [i, j, d];
    }
  }
  return best;
}

export default function Hierarchical({ lesson: _lesson }: { lesson: Lesson }) {
  const [link, setLink] = useState<'single' | 'complete' | 'average'>('single');
  const [nClusters, setNClusters] = useState(2);

  const { clusterOf, steps } = useMemo(() => {
    let clusters = POINTS.map((_, i) => [i]);
    const history: { a: number; b: number; d: number }[] = [];
    while (clusters.length > 1) {
      const [a, b, d] = linkage(clusters, link);
      history.push({ a, b, d: Number(d.toFixed(2)) });
      clusters = clusters.filter((_, i) => i !== b);
      clusters[a] = [...clusters[a], ...clusters[clusters.length === a ? a : clusters.length]];
      // simpler: merge b into a
      clusters = clusters.map((c, i) => i === a ? [...c, ...clusters[clusters.filter((_, j) => j === b).length > 0 ? b : b]] : c).filter((_, i) => i === a || !history.length || true);
    }
    // Re-run cleaner
    clusters = POINTS.map((_, i) => [i]);
    const hist2: { a: number; b: number; d: number }[] = [];
    while (clusters.length > 1) {
      const [a, b, d] = linkage(clusters, link);
      hist2.push({ a, b, d: Number(d.toFixed(2)) });
      const merged = [...clusters[a], ...clusters[b]];
      clusters = clusters.filter((_, i) => i !== a && i !== b);
      clusters.push(merged);
    }
    // Build flat cluster labels by cutting the dendrogram
    let working = POINTS.map((_, i) => [i]);
    for (let i = 0; i < hist2.length - (nClusters - 1); i++) {
      const m = hist2[i];
      const merged = [...working[m.a], ...working[m.b]];
      working = working.filter((_, j) => j !== m.a && j !== m.b);
      working.push(merged);
    }
    const co: Record<number, number> = {};
    working.forEach((c, idx) => c.forEach((p) => { co[p] = idx; }));
    return { clusterOf: co, steps: hist2 };
  }, [link, nClusters]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Linkage</div>
          <div className="grid grid-cols-3 gap-1.5">
            {(['single', 'complete', 'average'] as const).map((l) => (
              <button key={l} onClick={() => setLink(l)} className={clsx('rounded-lg border px-2 py-1.5 text-[11px] font-semibold capitalize', link === l ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary')}>{l}</button>
            ))}
          </div>
          <Slider value={nClusters} onChange={setNClusters} min={1} max={4} step={1} label="Cut to k clusters" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Merges" value={steps.length} />
          <StatBadge label="First merge d" value={steps[0]?.d.toFixed(2) ?? '—'} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Agglomerative clustering builds a tree (dendrogram) bottom-up. Cut the tree at the height that yields k clusters.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Clusters (color) · cut at k = {nClusters}</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 7]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={POINTS}>
                {POINTS.map((p, i) => <Cell key={i} fill={`var(--chart-${(clusterOf[i] % 5) + 1})`} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
