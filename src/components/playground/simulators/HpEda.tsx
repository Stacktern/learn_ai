import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function HpEda({ lesson: _lesson }: { lesson: Lesson }) {
  const [seed, setSeed] = useState(42);
  const data = useMemo(() => {
    let s = seed;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const cols = [
      'PoolQC', 'MiscFeature', 'Alley', 'Fence', 'FireplaceQu', 'LotFrontage', 'GarageType', 'GarageYrBlt', 'GarageFinish', 'GarageQual',
    ];
    return cols.map((c, i) => ({ name: c, value: Math.round(10 + r() * (160 - i * 8)) }));
  }, [seed]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={seed} onChange={setSeed} min={0} max={200} step={1} label="Resample seed" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-accent-soft p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Rows</div>
            <div className="text-base font-bold text-text-primary">1,460</div>
          </div>
          <div className="rounded-lg bg-accent-soft p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Columns</div>
            <div className="text-base font-bold text-text-primary">81</div>
          </div>
        </div>
        <div className={clsx('rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary')}>
          The book: <em>"train_data.shape (1460, 81)"</em>. Use <code>describe()</code> for stats, <code>isnull().sum()</code> for missing values.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Top missing-value counts (illustrative)</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 8, right: 30, left: 80, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="category" dataKey="name" fontSize={9} stroke="var(--text-muted)" width={80} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
