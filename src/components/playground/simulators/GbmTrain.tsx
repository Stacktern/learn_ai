import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function GbmTrain({ lesson: _lesson }: { lesson: Lesson }) {
  const [nTrees, setNTrees] = useState(8);
  const [lr, setLr] = useState(0.2);

  const data = useMemo(() => {
    const out: { t: number; loss: number }[] = [];
    let loss = 1.0;
    for (let i = 0; i < 30; i++) {
      const used = Math.min(i, nTrees);
      const factor = used > 0 ? Math.pow(1 - lr * 0.5, used) : 1;
      out.push({ t: i + 1, loss: Math.max(0.1, loss * factor + (Math.random() - 0.5) * 0.02) });
    }
    return out;
  }, [nTrees, lr]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={nTrees} onChange={setNTrees} min={1} max={20} step={1} label="Trees built" formatValue={(v) => `${v}`} />
          <Slider value={lr} onChange={setLr} min={0.05} max={0.9} step={0.05} label="Learning rate" formatValue={(v) => v.toFixed(2)} />
        </div>
        <StatBadge label="Final loss" value={data[data.length - 1].loss.toFixed(3)} tone="success" hint="should decrease" />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          For each successive iteration, a new tree is built that predicts the <strong>residuals</strong> of the prior model. After a tree is added, it is combined with earlier trees to minimise the overall loss — typically using gradient descent.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Loss over iterations</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 1.2]} />
              <ReferenceLine x={nTrees} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: 'stop', fontSize: 10, fill: 'var(--chart-4)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="loss" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
