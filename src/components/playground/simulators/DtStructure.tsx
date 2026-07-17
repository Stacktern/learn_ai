import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

interface Pt { x: number; y: number; label: 0 | 1 }
const RAW: Pt[] = [
  { x: 1, y: 1, label: 0 }, { x: 1.6, y: 2.2, label: 0 }, { x: 2, y: 1, label: 0 }, { x: 2.4, y: 2.7, label: 0 }, { x: 1.4, y: 0.7, label: 0 },
  { x: 4, y: 4, label: 1 }, { x: 4.5, y: 3.5, label: 1 }, { x: 3.7, y: 4.4, label: 1 }, { x: 4.6, y: 4.7, label: 1 }, { x: 5, y: 4, label: 1 },
];

function splitStep(pts: Pt[], depth: number, maxDepth: number): Pt[] {
  if (depth >= maxDepth || pts.length <= 1) return pts;
  const meanX = pts.reduce((a, b) => a + b.x, 0) / pts.length;
  const meanY = pts.reduce((a, b) => a + b.y, 0) / pts.length;
  return pts.filter((p) => p.label === 0 ? p.x < meanX || p.y < meanY : p.x >= meanX || p.y >= meanY);
}

export default function DtStructure({ lesson: _lesson }: { lesson: Lesson }) {
  const [maxDepth, setMaxDepth] = useState(2);
  const nodes = useMemo(() => {
    const result: { depth: number; label: string; count: number; pure: boolean }[] = [];
    function rec(depth: number, pts: Pt[], label: string) {
      const pure = pts.every((p) => p.label === pts[0].label);
      result.push({ depth, label, count: pts.length, pure });
      if (depth < maxDepth && !pure && pts.length > 1) {
        const left = pts.filter((p) => p.x < pts.reduce((a, b) => a + b.x, 0) / pts.length);
        const right = pts.filter((p) => p.x >= pts.reduce((a, b) => a + b.x, 0) / pts.length);
        rec(depth + 1, left, label + 'L');
        rec(depth + 1, right, label + 'R');
      }
    }
    rec(0, RAW, 'root');
    return result;
  }, [maxDepth]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={maxDepth} onChange={setMaxDepth} min={1} max={4} step={1} label="Max depth" formatValue={(v) => `${v}`} />
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1 text-xs">
          {nodes.map((n, i) => (
            <div key={i} className={clsx('flex items-center gap-2 rounded-lg p-2', n.pure ? 'bg-emerald-500/15 border border-emerald-500/30' : 'bg-surface-2/40 border border-border-app')}>
              <span className="h-5 w-5 rounded-md bg-accent text-white text-[10px] font-mono font-bold flex items-center justify-center">{n.depth}</span>
              <span className="font-mono text-text-primary">{n.label}</span>
              <span className="text-text-muted">· {n.count} pts{n.pure ? ' · pure ✓' : ''}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          <strong>Root node</strong> = entire sample. <strong>Splitting</strong> divides a node into sub-nodes. <strong>Leaf / Terminal</strong> nodes do not split. <strong>Pruning</strong> removes sub-nodes to reduce complexity.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Recursive partition (x-axis threshold)</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 6]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 6]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={RAW}>
                {RAW.map((p, i) => <Cell key={i} fill={p.label === 1 ? 'var(--chart-1)' : 'var(--chart-2)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
