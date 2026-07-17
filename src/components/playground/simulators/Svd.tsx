import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function svdApprox(matrix: number[][], rank: number): { approx: number[][]; singular: number[]; total: number } {
  const m = matrix.length;
  const n = matrix[0].length;
  const AtA: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) for (let k = 0; k < n; k++) AtA[j][k] += matrix[i][j] * matrix[i][k];
  // power iteration for top singular values
  const power = (v: number[]) => {
    const r = AtA.map((row) => row.reduce((a, b, k) => a + b * v[k], 0));
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
    vals.push(Number(sigma.toFixed(3)));
    vecs.push(v);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) AtA[i][j] -= sigma * sigma * v[i] * v[j];
  }
  const total = vals.reduce((a, b) => a + b, 0) || 1;
  // Reconstruct: A ≈ U Σ Vᵀ — approximate as A_k = sum σ_i · u_i · v_iᵀ
  const approx = Array.from({ length: m }, () => Array(n).fill(0));
  for (let s = 0; s < vecs.length; s++) {
    const sigma = vals[s];
    const v = vecs[s];
    for (let i = 0; i < m; i++) {
      const ui = matrix[i].reduce((a, b, k) => a + b * v[k], 0);
      for (let j = 0; j < n; j++) approx[i][j] += sigma * ui * v[j];
    }
  }
  return { approx, singular: vals, total };
}

const MATRIX = [
  [3, 1, 1],
  [1, 3, 1],
  [1, 1, 3],
  [2, 0, 2],
];

export default function Svd({ lesson: _lesson }: { lesson: Lesson }) {
  const [rank, setRank] = useState(1);
  const { approx, singular, total } = useMemo(() => svdApprox(MATRIX, rank), [rank]);

  const singularPct = singular.map((s) => Number(((s / total) * 100).toFixed(1)));
  const singularData = singularPct.map((p, i) => ({ idx: i + 1, pct: p }));
  const error = MATRIX.reduce((acc, row, i) => acc + row.reduce((a, b, j) => a + (b - approx[i][j]) ** 2, 0), 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Rank-k approximation</div>
          <Slider value={rank} onChange={setRank} min={1} max={3} step={1} label="k (components kept)" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Variance kept" value={`${singularPct.reduce((a, b) => a + b, 0).toFixed(1)}%`} tone="success" />
          <StatBadge label="Frobenius err" value={Math.sqrt(error).toFixed(2)} tone={error < 1 ? 'success' : 'warning'} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          SVD decomposes a matrix A = UΣVᵀ. Truncating Σ to the top k entries gives the best low-rank approximation (Eckart–Young).
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Singular values (% of total)</div>
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
            <div className="font-mono text-xs space-y-0.5">
              {MATRIX.map((row, i) => <div key={i}>{row.map((v) => v.toFixed(1)).join('  ')}</div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-border-app bg-surface p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Reconstructed Aₖ</div>
            <div className="font-mono text-xs space-y-0.5">
              {approx.map((row, i) => <div key={i}>{row.map((v) => v.toFixed(2)).join('  ')}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
