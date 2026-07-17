import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function mul(A: number[][], B: number[][]): number[][] {
  const r = A.length, c = B[0].length, k = B.length;
  const out: number[][] = Array.from({ length: r }, () => Array(c).fill(0));
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) for (let x = 0; x < k; x++) out[i][j] += A[i][x] * B[x][j];
  return out;
}

export default function LaMatrices({ lesson: _lesson }: { lesson: Lesson }) {
  const [a11, setA11] = useState(1);
  const [a12, setA12] = useState(2);
  const [a21, setA21] = useState(3);
  const [a22, setA22] = useState(4);
  const [b11, setB11] = useState(2);
  const [b12, setB12] = useState(0);
  const [b21, setB21] = useState(1);
  const [b22, setB22] = useState(2);

  const A = [[a11, a12], [a21, a22]];
  const B = [[b11, b12], [b21, b22]];
  const C = useMemo(() => mul(A, B), [a11, a12, a21, a22, b11, b12, b21, b22]);
  const T = [[A[0][0], A[1][0]], [A[0][1], A[1][1]]];

  const pts = [
    { x: 0, y: 0 }, { x: A[0][0], y: A[1][0] }, { x: A[0][0] + A[0][1], y: A[1][0] + A[1][1] },
    { x: A[0][1], y: A[1][1] }, { x: 0, y: 0 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">A</div>
          <div className="grid grid-cols-2 gap-2">
            <Slider value={a11} onChange={setA11} min={-3} max={3} step={1} label="A[0][0]" formatValue={(v) => `${v}`} />
            <Slider value={a12} onChange={setA12} min={-3} max={3} step={1} label="A[0][1]" formatValue={(v) => `${v}`} />
            <Slider value={a21} onChange={setA21} min={-3} max={3} step={1} label="A[1][0]" formatValue={(v) => `${v}`} />
            <Slider value={a22} onChange={setA22} min={-3} max={3} step={1} label="A[1][1]" formatValue={(v) => `${v}`} />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">B</div>
          <div className="grid grid-cols-2 gap-2">
            <Slider value={b11} onChange={setB11} min={-3} max={3} step={1} label="B[0][0]" formatValue={(v) => `${v}`} />
            <Slider value={b12} onChange={setB12} min={-3} max={3} step={1} label="B[0][1]" formatValue={(v) => `${v}`} />
            <Slider value={b21} onChange={setB21} min={-3} max={3} step={1} label="B[1][0]" formatValue={(v) => `${v}`} />
            <Slider value={b22} onChange={setB22} min={-3} max={3} step={1} label="B[1][1]" formatValue={(v) => `${v}`} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="A · B" value={`${C[0][0]},${C[0][1]}; ${C[1][0]},${C[1][1]}`} hint="matrix product" />
          <StatBadge label="Aᵀ" value={`${T[0][0]},${T[0][1]}; ${T[1][0]},${T[1][1]}`} hint="transpose" />
        </div>
        <div className={clsx('rounded-xl border p-3 text-xs', 'border-accent/40 bg-accent-soft/40 text-text-primary')}>
          Matrix multiplication: C[i][j] = Σ A[i][k] · B[k][j].
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">A as a parallelogram (columns of A)</div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-5, 5]} />
                <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[-5, 5]} />
                <ReferenceLine x={0} stroke="var(--text-muted)" />
                <ReferenceLine y={0} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Scatter data={pts} fill="var(--chart-1)" line={{ stroke: 'var(--chart-1)', strokeWidth: 2 }} shape={() => <g />} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center font-mono text-sm">
          <div className="rounded-xl border border-border-app bg-surface p-3">
            <div className="text-[10px] uppercase tracking-widest text-text-muted">A</div>
            <div className="grid grid-cols-2 gap-1 mt-1">
              <div className="rounded bg-accent-soft text-accent py-1">{A[0][0]}</div>
              <div className="rounded bg-accent-soft text-accent py-1">{A[0][1]}</div>
              <div className="rounded bg-accent-soft text-accent py-1">{A[1][0]}</div>
              <div className="rounded bg-accent-soft text-accent py-1">{A[1][1]}</div>
            </div>
          </div>
          <div className="rounded-xl border border-border-app bg-surface p-3">
            <div className="text-[10px] uppercase tracking-widest text-text-muted">A · B</div>
            <div className="grid grid-cols-2 gap-1 mt-1">
              <div className="rounded bg-chart-1/20 text-text-primary py-1">{C[0][0]}</div>
              <div className="rounded bg-chart-1/20 text-text-primary py-1">{C[0][1]}</div>
              <div className="rounded bg-chart-1/20 text-text-primary py-1">{C[1][0]}</div>
              <div className="rounded bg-chart-1/20 text-text-primary py-1">{C[1][1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
