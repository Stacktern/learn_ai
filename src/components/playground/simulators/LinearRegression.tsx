import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Line, LineChart } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const BASE: { x: number; y: number }[] = [
  { x: 1, y: 300 },
  { x: 2, y: 350 },
  { x: 3, y: 500 },
  { x: 4, y: 480 },
  { x: 5, y: 600 },
  { x: 6, y: 620 },
  { x: 7, y: 720 },
  { x: 8, y: 800 },
  { x: 9, y: 850 },
  { x: 10, y: 950 },
];

export default function LinearRegression({ lesson: _lesson }: { lesson: Lesson }) {
  const [slope, setSlope] = useState(70);
  const [intercept, setIntercept] = useState(220);
  const [noise, setNoise] = useState(40);

  const data = useMemo(
    () => BASE.map((p) => ({ ...p, y: p.y + (Math.random() - 0.5) * noise })),
    [noise],
  );

  const stats = useMemo(() => {
    const n = data.length;
    const meanX = data.reduce((a, b) => a + b.x, 0) / n;
    const meanY = data.reduce((a, b) => a + b.y, 0) / n;
    const num = data.reduce((acc, p) => acc + (p.x - meanX) * (p.y - meanY), 0);
    const den = data.reduce((acc, p) => acc + (p.x - meanX) ** 2, 0);
    const bestSlope = den === 0 ? 0 : num / den;
    const bestIntercept = meanY - bestSlope * meanX;
    const preds = data.map((p) => slope * p.x + intercept);
    const sse = data.reduce((acc, p, i) => acc + (p.y - preds[i]) ** 2, 0);
    const ssTot = data.reduce((acc, p) => acc + (p.y - meanY) ** 2, 0);
    const r2 = ssTot === 0 ? 0 : 1 - sse / ssTot;
    return { bestSlope, bestIntercept, r2, sse };
  }, [data, slope, intercept]);

  const lineData = useMemo(
    () => Array.from({ length: 20 }, (_, i) => {
      const x = 1 + (i / 19) * 9;
      return { x: Number(x.toFixed(2)), y: Number((slope * x + intercept).toFixed(2)) };
    }),
    [slope, intercept],
  );

  const fitQuality = stats.r2 > 0.85 ? 'great' : stats.r2 > 0.5 ? 'okay' : 'poor';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Model</div>
          <div className="font-mono text-sm text-text-primary">
            y = <span className={clsx('font-bold', Math.abs(slope - stats.bestSlope) < 5 ? 'text-emerald-500' : 'text-amber-500')}>{slope.toFixed(0)}</span>·x + <span className={clsx('font-bold', Math.abs(intercept - stats.bestIntercept) < 20 ? 'text-emerald-500' : 'text-amber-500')}>{intercept.toFixed(0)}</span>
          </div>
          <Slider value={slope} onChange={setSlope} min={0} max={150} step={1} label="Slope (m)" />
          <Slider value={intercept} onChange={setIntercept} min={-100} max={500} step={5} label="Intercept (b)" />
          <Slider value={noise} onChange={setNoise} min={0} max={120} step={5} label="Noise" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="SSE" value={stats.sse.toFixed(0)} tone={stats.sse < 50000 ? 'success' : stats.sse < 200000 ? 'warning' : 'danger'} hint="lower is better" />
          <StatBadge label="R²" value={stats.r2.toFixed(3)} tone={fitQuality === 'great' ? 'success' : fitQuality === 'okay' ? 'warning' : 'danger'} hint="1 = perfect" />
        </div>

        <div className="rounded-2xl border border-border-app bg-accent-soft/50 p-3 text-xs text-text-primary leading-relaxed">
          <strong className="text-accent">Best fit (OLS):</strong>{' '}
          <span className="font-mono">y = {stats.bestSlope.toFixed(1)}·x + {stats.bestIntercept.toFixed(1)}</span>.
          Drag the sliders to match the data — see R² rise as you align the line.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">House size vs price (synthetic)</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 11]} label={{ value: 'size (×100 ft²)', position: 'insideBottom', offset: -2, fontSize: 10, fill: 'var(--text-muted)' }} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 1100]} label={{ value: 'price (×$1k)', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data} fill="var(--chart-1)" />
              <Line data={lineData} type="monotone" dataKey="y" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
