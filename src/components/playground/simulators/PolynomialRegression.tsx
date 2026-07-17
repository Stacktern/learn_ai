import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ScatterChart, Scatter } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const POINTS = [
  { x: -3, y: 9 },
  { x: -2, y: 4.2 },
  { x: -1, y: 1.1 },
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 4.3 },
  { x: 3, y: 8.8 },
  { x: -1.5, y: 2.3 },
  { x: 1.5, y: 2.1 },
];

function polyFit(points: { x: number; y: number }[], degree: number, lambda: number): number[] {
  const n = degree + 1;
  const X: number[][] = points.map((p) => Array.from({ length: n }, (_, k) => Math.pow(p.x, k)));
  const XtX = Array.from({ length: n }, () => Array(n).fill(0));
  const XtY = Array(n).fill(0);
  for (let i = 0; i < points.length; i++) {
    for (let a = 0; a < n; a++) {
      XtY[a] += X[i][a] * points[i].y;
      for (let b = 0; b < n; b++) XtX[a][b] += X[i][a] * X[i][b];
    }
  }
  for (let i = 0; i < n; i++) XtX[i][i] += lambda;
  return solveGauss(XtX, XtY);
}

function solveGauss(A: number[][], b: number[]): number[] {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let i = 0; i < n; i++) {
    let piv = i;
    for (let r = i + 1; r < n; r++) if (Math.abs(M[r][i]) > Math.abs(M[piv][i])) piv = r;
    [M[i], M[piv]] = [M[piv], M[i]];
    for (let r = i + 1; r < n; r++) {
      const f = M[r][i] / M[i][i];
      for (let c = i; c <= n; c++) M[r][c] -= f * M[i][c];
    }
  }
  const x = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = M[i][n];
    for (let j = i + 1; j < n; j++) s -= M[i][j] * x[j];
    x[i] = s / M[i][i];
  }
  return x;
}

export default function PolynomialRegression({ lesson: _lesson }: { lesson: Lesson }) {
  const [degree, setDegree] = useState(1);
  const [lambda, setLambda] = useState(0);

  const coeffs = useMemo(() => polyFit(POINTS, degree, lambda), [degree, lambda]);
  const curve = useMemo(
    () => Array.from({ length: 60 }, (_, i) => {
      const x = -3 + (i / 59) * 6;
      const y = coeffs.reduce((acc, c, k) => acc + c * Math.pow(x, k), 0);
      return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) };
    }),
    [coeffs],
  );

  const ssRes = POINTS.reduce((acc, p) => {
    const y = coeffs.reduce((a, c, k) => a + c * Math.pow(p.x, k), 0);
    return acc + (p.y - y) ** 2;
  }, 0);
  const meanY = POINTS.reduce((a, b) => a + b.y, 0) / POINTS.length;
  const ssTot = POINTS.reduce((acc, p) => acc + (p.y - meanY) ** 2, 0);
  const r2 = ssTot === 0 ? 0 : 1 - ssRes / ssTot;
  const verdict = r2 > 0.95 && degree > 4 ? 'overfit' : r2 > 0.95 ? 'great' : r2 > 0.7 ? 'okay' : 'poor';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Model complexity</div>
          <Slider value={degree} onChange={setDegree} min={1} max={8} step={1} label="Polynomial degree" formatValue={(v) => `${v}`} />
          <Slider value={lambda} onChange={setLambda} min={0} max={5} step={0.05} label="L2 penalty (λ)" formatValue={(v) => v.toFixed(2)} />
          <div className="font-mono text-xs text-text-secondary leading-relaxed bg-surface-2/50 p-2 rounded-lg">
            f(x) = {coeffs.map((c, k) => `${c.toFixed(2)}${k === 0 ? '' : `·x^${k}`}`).join(' + ')}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="R²" value={r2.toFixed(3)} tone={verdict === 'great' ? 'success' : verdict === 'okay' ? 'warning' : 'danger'} />
          <StatBadge label="SS_res" value={ssRes.toFixed(2)} tone={verdict === 'overfit' ? 'warning' : 'default'} hint={verdict === 'overfit' ? 'memorizing' : ''} />
        </div>

        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          verdict === 'overfit' ? 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300' :
          verdict === 'great' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' :
          'border-border-app bg-surface-2/40 text-text-secondary',
        )}>
          {verdict === 'overfit' && '⚠ High R² with a wiggly curve = overfitting. Increase λ to regularize.'}
          {verdict === 'great' && '✓ Good fit — the curve follows the true parabola (x²).'}
          {verdict === 'okay' && '↗ Underfit. Raise the degree to capture the curvature.'}
          {verdict === 'poor' && '→ Almost no signal. A degree-1 line cannot model a parabola.'}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Data + polynomial fit</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-3.2, 3.2]} />
              <YAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[-2, 12]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={POINTS} fill="var(--chart-1)" />
              <Line data={curve} type="monotone" dataKey="y" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
