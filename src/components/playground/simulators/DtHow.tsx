import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

interface Pt { x: number; y: number; label: 0 | 1 }
const RAW: Pt[] = [
  { x: 1, y: 1, label: 0 }, { x: 1.6, y: 2.2, label: 0 }, { x: 2, y: 1, label: 0 }, { x: 2.4, y: 2.7, label: 0 },
  { x: 4, y: 4, label: 1 }, { x: 4.5, y: 3.5, label: 1 }, { x: 3.7, y: 4.4, label: 1 }, { x: 5, y: 4, label: 1 },
];

function gini(group: Pt[]) {
  if (group.length === 0) return 0;
  const p = group.filter((p) => p.label === 1).length / group.length;
  return 1 - p * p - (1 - p) * (1 - p);
}

function bestSplitX(pts: Pt[], depth: number): { axis: 'x' | 'y' | null; value: number; left: Pt[]; right: Pt[] } | null {
  if (depth <= 0) return null;
  const xs = pts.map((p) => p.x).sort((a, b) => a - b);
  let best = { gain: 0, value: xs[0] };
  for (let i = 1; i < xs.length; i++) {
    const v = (xs[i - 1] + xs[i]) / 2;
    const left = pts.filter((p) => p.x < v);
    const right = pts.filter((p) => p.x >= v);
    if (left.length === 0 || right.length === 0) continue;
    const gain = gini(pts) - (left.length / pts.length) * gini(left) - (right.length / pts.length) * gini(right);
    if (gain > best.gain) best = { gain, value: v };
  }
  if (best.gain === 0) return null;
  return { axis: 'x', value: best.value, left: pts.filter((p) => p.x < best.value), right: pts.filter((p) => p.x >= best.value) };
}

export default function DtHow({ lesson: _lesson }: { lesson: Lesson }) {
  const [depth, setDepth] = useState(2);
  const splits = useMemo(() => {
    const out: { axis: 'x' | 'y'; value: number }[] = [];
    let cur: Pt[] = RAW;
    let d = 0;
    while (d < depth) {
      const s = bestSplitX(cur, depth - d);
      if (!s) break;
      out.push(s);
      cur = s.left.length < s.right.length ? s.left : s.right;
      d += 1;
    }
    return out;
  }, [depth]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={depth} onChange={setDepth} min={1} max={4} step={1} label="Splits applied" formatValue={(v) => `${v}`} />
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {splits.map((s, i) => (
            <div key={i} className="rounded-lg bg-surface-2/40 border border-border-app p-2 text-xs font-mono text-text-primary">
              split {i + 1}: <span className="text-accent">{s.axis} &lt; {s.value.toFixed(2)}</span>
            </div>
          ))}
          {splits.length === 0 && <div className="text-xs text-text-muted italic">No splits yet — increase depth.</div>}
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Splitting uses <strong>Gini index</strong>, Chi-square, information gain, or entropy. The split that best increases node purity wins.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Recursive splits</div>
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
              {splits.map((s, i) => (
                <ReferenceLine key={i} x={s.value} stroke={`var(--chart-${(i % 5) + 1})`} strokeDasharray="4 4" label={{ value: `s${i + 1}`, fontSize: 10, fill: `var(--chart-${(i % 5) + 1})` }} />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
