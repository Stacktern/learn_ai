import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const A: number[][] = [
  [3, 1, 1],
  [1, 3, 1],
  [1, 1, 3],
  [2, 0, 2],
];

function svdApprox(matrix: number[][], rank: number) {
  const m = matrix.length;
  const n = matrix[0].length;
  const AtA: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) for (let k = 0; k < n; k++) AtA[j][k] += matrix[i][j] * matrix[i][k];
  const power = (v: number[]) => {
    const r = AtA.map((row) => row.reduce((acc, b, k) => acc + b * v[k], 0));
    const norm = Math.hypot(...r) || 1;
    return r.map((x) => x / norm);
  };
  const vecs: number[][] = [];
  const vals: number[] = [];
  for (let r = 0; r < Math.min(rank, n); r++) {
    let v = Array.from({ length: n }, () => Math.random());
    for (let it = 0; it < 80; it++) v = power(v);
    const Av = AtA.map((row) => row.reduce((a, b, k) => a + b * v[k], 0));
    const sigma = Math.sqrt(Math.max(0, Math.hypot(...Av)));
    vals.push(sigma);
    vecs.push(v);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) AtA[i][j] -= sigma * sigma * v[i] * v[j];
  }
  const total = vals.reduce((a, b) => a + b, 0) || 1;
  const approx = Array.from({ length: m }, () => Array(n).fill(0));
  for (let s = 0; s < vecs.length; s++) {
    const v = vecs[s];
    const sigma = vals[s];
    for (let i = 0; i < m; i++) {
      const ui = matrix[i].reduce((a, b, k) => a + b * v[k], 0);
      for (let j = 0; j < n; j++) approx[i][j] += sigma * ui * v[j];
    }
  }
  return { approx, vals, total };
}

export default function LaSvd({ lesson: _lesson }: { lesson: Lesson }) {
  const [rank, setRank] = useState(1);
  const { approx, vals, total } = useMemo(() => svdApprox(A, rank), [rank]);
  const err = A.reduce((acc, row, i) => acc + row.reduce((a, b, j) => a + (b - approx[i][j]) ** 2, 0), 0);
  const singularData = vals.map((s, i) => ({ idx: i + 1, pct: Number(((s / total) * 100).toFixed(1)) }));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={rank} onChange={setRank} min={1} max={3} step={1} label="Rank k" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Variance kept" value={`${singularData.reduce((a, b) => a + b.pct, 0).toFixed(1)}%`} tone="success" />
          <StatBadge label="Frobenius err" value={Math.sqrt(err).toFixed(2)} tone={err < 1 ? 'success' : 'warning'} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          SVD decomposes a matrix A = U · Σ · Vᵀ. Truncating to the top k singular values is the optimal rank-k approximation.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Singular values (%)</div>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={singularData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="idx" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 100]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="pct" radius={[4, 4, 0, 0]}>
                {singularData.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border-app bg-surface p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Original A</div>
            <div className="font-mono text-xs space-y-0.5">{A.map((r, i) => <div key={i}>{r.map((v) => v.toFixed(1)).join('  ')}</div>)}</div>
          </div>
          <div className="rounded-2xl border border-border-app bg-surface p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Reconstructed Aₖ</div>
            <div className="font-mono text-xs space-y-0.5">{approx.map((r, i) => <div key={i}>{r.map((v) => v.toFixed(2)).join('  ')}</div>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
