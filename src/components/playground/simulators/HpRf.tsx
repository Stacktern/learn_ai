import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';

export default function HpRf({ lesson: _lesson }: { lesson: Lesson }) {
  const data = [
    { name: 'RF (n=100)', mse: 857641621, label: '857,641,621' },
    { name: 'SVR (linear)', mse: 7854595775, label: '7,854,595,775' },
  ];
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Test MSE on the held-out 20%</div>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" tickFormatter={(v) => `${(v / 1e9).toFixed(1)}B`} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} formatter={(v: number) => v.toLocaleString()} />
              <Bar dataKey="mse" radius={[6, 6, 0, 0]}>
                {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        The book reports <strong>Random Forest MSE ≈ 857 million</strong> and <strong>SVR MSE ≈ 7.85 billion</strong>. Random Forest is the better baseline — and the book ends by saying "your job is to implement other machine learning models and get the MSE."
      </div>
    </div>
  );
}
