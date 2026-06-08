import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

type Mode = 'original' | 'normalized' | 'standardized';

interface Point {
  id: string;
  x: number;
  y: number;
}

const RAW: Point[] = [
  { id: 'A', x: 10, y: 150 },
  { id: 'B', x: 20, y: 120 },
  { id: 'C', x: 15, y: 200 },
  { id: 'D', x: 35, y: 450 },
  { id: 'E', x: 40, y: 80 },
  { id: 'F', x: 50, y: 300 },
];

export default function Scaling({ lesson: _lesson }: { lesson: Lesson }) {
  const [mode, setMode] = useState<Mode>('original');
  const [outlierY, setOutlierY] = useState<number>(450);

  const points = useMemo(() => {
    const data = RAW.map((p) => (p.id === 'D' ? { ...p, y: outlierY } : p));
    if (mode === 'original') return data;

    const xs = data.map((p) => p.x);
    const ys = data.map((p) => p.y);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const yMin = Math.min(...ys);
    const yMax = Math.max(...ys);
    const xMean = xs.reduce((a, b) => a + b, 0) / xs.length;
    const yMean = ys.reduce((a, b) => a + b, 0) / ys.length;
    const xStd = Math.sqrt(xs.map((x) => (x - xMean) ** 2).reduce((a, b) => a + b, 0) / xs.length) || 1;
    const yStd = Math.sqrt(ys.map((y) => (y - yMean) ** 2).reduce((a, b) => a + b, 0) / ys.length) || 1;

    return data.map((p) => ({
      ...p,
      x: mode === 'normalized' ? (p.x - xMin) / (xMax - xMin) : (p.x - xMean) / xStd,
      y: mode === 'normalized' ? (p.y - yMin) / (yMax - yMin) : (p.y - yMean) / yStd,
    }));
  }, [mode, outlierY]);

  const stats = useMemo(() => {
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const xMean = xs.reduce((a, b) => a + b, 0) / xs.length;
    const yMean = ys.reduce((a, b) => a + b, 0) / ys.length;
    return {
      xMean: Number(xMean.toFixed(2)),
      yMean: Number(yMean.toFixed(2)),
    };
  }, [points]);

  const xDomain = mode === 'normalized' ? [0, 1] : mode === 'standardized' ? [-2.5, 2.5] : [0, 60];
  const yDomain = mode === 'normalized' ? [0, 1] : mode === 'standardized' ? [-2.5, 2.5] : [0, 600];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          {(['original', 'normalized', 'standardized'] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={clsx(
                'w-full text-left px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all',
                mode === m
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {m === 'original' && '1. Keep raw dimensions (unscaled)'}
              {m === 'normalized' && '2. Min-Max Normalization â†’ [0, 1]'}
              {m === 'standardized' && '3. Z-score Standardization â†’ Î¼=0, Ïƒ=1'}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <Slider
            value={outlierY}
            onChange={setOutlierY}
            min={80}
            max={600}
            step={10}
            label="Outlier (point D, y)"
            formatValue={(v) => v.toFixed(0)}
          />
          <p className="text-[10px] text-text-muted italic leading-relaxed">
            Outliers compress the normalized values; Z-score preserves them in standard-deviation units.
          </p>
        </div>

        <div className="rounded-2xl border border-border-app bg-surface-2/60 p-3 space-y-1 font-mono text-xs">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Distribution stats</div>
          <div className="flex justify-between"><span>Î¼(x) = {stats.xMean}</span><span>Î¼(y) = {stats.yMean}</span></div>
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
          Plotted coordinates Â· {mode.toUpperCase()}
        </div>
        <div className="flex-1 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" domain={xDomain} fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="number" dataKey="y" domain={yDomain} fontSize={10} stroke="var(--text-muted)" />
              {mode === 'standardized' && (
                <>
                  <ReferenceLine y={0} stroke="var(--text-muted)" strokeDasharray="3 3" />
                  <ReferenceLine x={0} stroke="var(--text-muted)" strokeDasharray="3 3" />
                </>
              )}
              <Tooltip
                cursor={{ strokeDasharray: '3 3', stroke: 'var(--text-muted)' }}
                contentStyle={{
                  background: 'color-mix(in srgb, var(--bg-surface) 82%, transparent)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-app)',
                  borderRadius: 12,
                  fontSize: 12,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-md)',
                  padding: '8px 12px',
                }}
                itemStyle={{ color: 'var(--text-primary)' }}
                labelStyle={{ color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 4 }}
                wrapperStyle={{ outline: 'none' }}
              />
              <Scatter data={points} fill="var(--chart-1)" animationDuration={400}>
                {points.map((p, i) => (
                  <motion.circle key={i} r={p.id === 'D' ? 8 : 5} fill={p.id === 'D' ? 'var(--chart-4)' : 'var(--chart-1)'} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
