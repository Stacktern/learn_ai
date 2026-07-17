import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell, Line, LineChart } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

const SPECIES = ['setosa', 'versicolor', 'virginica'];
const PALETTE = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)'];

export default function SeabornRegression({ lesson: _lesson }: { lesson: Lesson }) {
  const [slope, setSlope] = useState(0.8);
  const [intercept, setIntercept] = useState(3);
  const [tab, setTab] = useState<'reg' | 'lm'>('reg');

  const points = useMemo(() => {
    const out: { species: string; x: number; y: number }[] = [];
    SPECIES.forEach((s, si) => {
      for (let i = 0; i < 25; i++) {
        const x = 2 + Math.random() * 2.5;
        const y = intercept + slope * x + (Math.random() - 0.5) * 0.6 + si * 0.2;
        out.push({ species: s, x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) });
      }
    });
    return out;
  }, [slope, intercept]);

  const fit = useMemo(() => {
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const mx = xs.reduce((a, b) => a + b, 0) / xs.length;
    const my = ys.reduce((a, b) => a + b, 0) / ys.length;
    const num = xs.reduce((acc, x, i) => acc + (x - mx) * (ys[i] - my), 0);
    const den = xs.reduce((acc, x) => acc + (x - mx) ** 2, 0);
    const m = den === 0 ? 0 : num / den;
    const b = my - m * mx;
    return [
      { x: 2, y: m * 2 + b },
      { x: 4.5, y: m * 4.5 + b },
    ];
  }, [points]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'reg' as const, label: 'sns.regplot(x, y)' },
            { id: 'lm' as const, label: 'sns.lmplot(x, y, hue=…)' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
                tab === t.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <Slider value={slope} onChange={setSlope} min={-1} max={2} step={0.05} label="Simulated slope" formatValue={(v) => v.toFixed(2)} />
          <Slider value={intercept} onChange={setIntercept} min={0} max={6} step={0.1} label="Intercept" formatValue={(v) => v.toFixed(1)} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Regression plots overlay a linear model fit on top of a scatter, making the relationship visually obvious.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[360px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">{tab === 'reg' ? 'regplot' : 'lmplot (by species)'}</div>
        <div className="h-[320px]">
          {tab === 'reg' ? (
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[1.5, 5]} />
                <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 9]} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Scatter data={points} fill="var(--chart-1)" />
                <Line data={fit} type="linear" dataKey="y" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} />
              </ScatterChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[1.5, 5]} />
                <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 9]} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                {SPECIES.map((s, si) => (
                  <Scatter key={s} data={points.filter((p) => p.species === s)} fill={PALETTE[si]} />
                ))}
                {SPECIES.map((s, si) => {
                  const subset = points.filter((p) => p.species === s);
                  const xs = subset.map((p) => p.x);
                  const ys = subset.map((p) => p.y);
                  const mx = xs.reduce((a, b) => a + b, 0) / xs.length;
                  const my = ys.reduce((a, b) => a + b, 0) / ys.length;
                  const num = xs.reduce((acc, x, i) => acc + (x - mx) * (ys[i] - my), 0);
                  const den = xs.reduce((acc, x) => acc + (x - mx) ** 2, 0);
                  const m = den === 0 ? 0 : num / den;
                  const b = my - m * mx;
                  return (
                    <Line key={`line-${s}`} data={[{ x: 2, y: m * 2 + b }, { x: 4.5, y: m * 4.5 + b }]} type="linear" dataKey="y" stroke={PALETTE[si]} strokeWidth={2} dot={false} />
                  );
                })}
              </ScatterChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
