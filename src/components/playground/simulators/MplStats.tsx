import { useMemo, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const PIE = [
  { name: 'Frogs', value: 15 },
  { name: 'Hogs', value: 30 },
  { name: 'Dogs', value: 45 },
  { name: 'Logs', value: 10 },
];
const PIE_COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)'];

export default function MplStats({ lesson: _lesson }: { lesson: Lesson }) {
  const [tab, setTab] = useState<'pie' | 'box' | 'heat'>('pie');

  const box = useMemo(() => {
    const arr: { group: string; value: number }[] = [];
    for (let g = 0; g < 3; g++) {
      for (let i = 0; i < 100; i++) {
        arr.push({ group: `std=${g + 1}`, value: (Math.random() - 0.5) * 4 + (g + 1) * 2 });
      }
    }
    return arr;
  }, []);

  const heat = useMemo(() => {
    const m: { x: number; y: number; v: number }[] = [];
    for (let x = 0; x < 10; x++) for (let y = 0; y < 10; y++) m.push({ x, y, v: Math.random() });
    return m;
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {[
            { id: 'pie' as const, label: 'Pie · proportions of categories' },
            { id: 'box' as const, label: 'Box · quartiles + outliers' },
            { id: 'heat' as const, label: 'Heatmap · matrix as colors' },
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
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 font-mono text-[11px] text-text-primary leading-relaxed">
          {tab === 'pie' && (<>plt.pie(sizes, labels=labels, autopct="%1.1f%%")</>)}
          {tab === 'box' && (<>plt.boxplot(data, vert=True, patch_artist=True)</>)}
          {tab === 'heat' && (<>plt.imshow(matrix, cmap="hot")</>)}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2 capitalize">{tab}</div>
        <div className="h-[260px]">
          {tab === 'pie' && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Pie data={PIE} dataKey="value" nameKey="name" outerRadius="80%" label>
                  {PIE.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          )}
          {tab === 'box' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={['std=1', 'std=2', 'std=3'].map((g) => {
                const values = box.filter((b) => b.group === g).map((b) => b.value).sort((a, b) => a - b);
                const q = (p: number) => values[Math.floor(values.length * p)];
                return { group: g, min: values[0], q1: q(0.25), median: q(0.5), q3: q(0.75), max: values[values.length - 1] };
              })}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="group" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="median" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="q1" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="q3" fill="var(--chart-3)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
          {tab === 'heat' && (
            <div className="grid h-full" style={{ gridTemplateColumns: 'repeat(10, 1fr)', gridTemplateRows: 'repeat(10, 1fr)', gap: 2 }}>
              {heat.map((c, i) => (
                <div key={i} className="rounded-sm" title={`(${c.x}, ${c.y}) = ${c.v.toFixed(2)}`} style={{ background: `color-mix(in srgb, var(--chart-4) ${Math.round(c.v * 100)}%, var(--surface-2))` }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
