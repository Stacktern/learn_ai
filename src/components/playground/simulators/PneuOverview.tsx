import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, PieChart, Pie } from 'recharts';
import type { Lesson } from '../../../types';

const SPLIT = [
  { name: 'Train', value: 5216 },
  { name: 'Validation', value: 16 },
  { name: 'Test', value: 624 },
];

export default function PneuOverview({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Dataset split — Chest X-ray Pneumonia</div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SPLIT}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {SPLIT.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="lg:col-span-5 rounded-2xl border border-border-app bg-surface p-4 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Image size</div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-accent-soft p-2">
            <div className="text-[10px] font-mono text-text-muted">Width</div>
            <div className="text-base font-bold text-text-primary">256</div>
          </div>
          <div className="rounded-lg bg-accent-soft p-2">
            <div className="text-[10px] font-mono text-text-muted">Height</div>
            <div className="text-base font-bold text-text-primary">256</div>
          </div>
          <div className="rounded-lg bg-accent-soft p-2">
            <div className="text-[10px] font-mono text-text-muted">Classes</div>
            <div className="text-base font-bold text-text-primary">2</div>
          </div>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The book: <em>"we will use images of chest X-ray and predict whether the patient has pneumonia or not."</em>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="rounded-lg bg-surface border border-border-app p-2">
            <div className="text-[10px] font-mono text-text-muted">Batch size</div>
            <div className="text-sm font-bold">32</div>
          </div>
          <div className="rounded-lg bg-surface border border-border-app p-2">
            <div className="text-[10px] font-mono text-text-muted">Epochs</div>
            <div className="text-sm font-bold">10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
