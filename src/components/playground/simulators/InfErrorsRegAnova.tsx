import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, BarChart, Bar, LineChart, Line, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function InfErrorsRegAnova({ lesson: _lesson }: { lesson: Lesson }) {
  const [effect, setEffect] = useState(0.6);
  const [groups, setGroups] = useState(3);
  const [alpha, setAlpha] = useState(0.05);

  const regData = useMemo(() => {
    const out: { x: number; y: number; group: number }[] = [];
    let s = 1234;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let g = 0; g < 3; g++) {
      for (let i = 0; i < 25; i++) {
        const x = (g + r()) * 2;
        const y = 1 + 0.7 * x + (r() - 0.5) * 1.5 + g * 0.5 * effect;
        out.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)), group: g });
      }
    }
    return out;
  }, [effect]);

  const anova = useMemo(() => {
    const N = 150;
    const total: number[] = [];
    const arr: number[][] = [];
    let s = 1234;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let g = 0; g < groups; g++) {
      const gi: number[] = [];
      for (let i = 0; i < N / groups; i++) {
        const v = 5 + g * 1.2 * effect + (r() - 0.5) * 2;
        gi.push(v);
        total.push(v);
      }
      arr.push(gi);
    }
    const grand = total.reduce((a, b) => a + b, 0) / total.length;
    const ssBetween = arr.reduce((acc, g) => acc + g.length * (g.reduce((a, b) => a + b, 0) / g.length - grand) ** 2, 0);
    const ssWithin = arr.reduce((acc, g) => acc + g.reduce((a, b) => a + (b - g.reduce((a2, b2) => a2 + b2, 0) / g.length) ** 2, 0), 0);
    const df1 = groups - 1;
    const df2 = total.length - groups;
    const msB = ssBetween / df1;
    const msW = ssWithin / df2 || 1e-9;
    const F = msB / msW;
    return { F, df1, df2, pApprox: 1 / (1 + Math.exp(-(F - 1))) };
  }, [groups, effect]);

  const errMatrix = useMemo(() => {
    const a = alpha, b = 0.1;
    return [
      { name: 'TP', label: 'True Positive', value: 100 * (1 - a) },
      { name: 'FP', label: 'False Positive (Type I)', value: 100 * a },
      { name: 'FN', label: 'False Negative (Type II)', value: 100 * b },
      { name: 'TN', label: 'True Negative', value: 100 * (1 - b) },
    ];
  }, [alpha]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={effect} onChange={setEffect} min={0} max={2} step={0.1} label="Effect size" formatValue={(v) => v.toFixed(1)} />
          <Slider value={groups} onChange={setGroups} min={2} max={6} step={1} label="Groups (ANOVA)" formatValue={(v) => `${v}`} />
          <Slider value={alpha} onChange={setAlpha} min={0.001} max={0.2} step={0.005} label="α" formatValue={(v) => v.toFixed(3)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="F statistic" value={anova.F.toFixed(2)} hint={`df = (${anova.df1}, ${anova.df2})`} />
          <StatBadge label="p (approx)" value={anova.pApprox.toFixed(3)} tone={anova.pApprox < alpha ? 'success' : 'warning'} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Type I error: reject H₀ when true. Type II error: fail to reject H₀ when false. ANOVA compares means across groups.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Regression</div>
          <ResponsiveContainer width="100%" height="88%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={regData}>
                {regData.map((d, i) => <Cell key={i} fill={`var(--chart-${(d.group % 5) + 1})`} />)}
              </Scatter>
              <Scatter data={[{ x: 0, y: 1 }, { x: 6, y: 1 + 0.7 * 6 + 1.5 * effect }]} fill="transparent" line={{ stroke: 'var(--chart-4)', strokeWidth: 2.5 }} shape={() => <g />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Error types (illustrative)</div>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={errMatrix} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 100]} />
              <YAxis type="category" dataKey="label" fontSize={10} stroke="var(--text-muted)" width={150} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {errMatrix.map((d, i) => <Cell key={i} fill={d.name === 'FP' ? 'var(--chart-4)' : d.name === 'FN' ? 'var(--chart-5)' : 'var(--chart-1)'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
