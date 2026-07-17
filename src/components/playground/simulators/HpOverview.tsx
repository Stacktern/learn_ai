import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';

const STEPS = [
  { step: 'Import libraries', code: 'pandas, numpy, sklearn' },
  { step: 'Load dataset', code: 'pd.read_csv(...)' },
  { step: 'EDA', code: 'shape, describe, missing' },
  { step: 'Preprocess', code: 'impute, scale, encode' },
  { step: 'Split', code: 'train_test_split' },
  { step: 'Fit models', code: 'RF, SVR' },
  { step: 'Evaluate', code: 'mean_squared_error' },
];

export default function HpOverview({ lesson: _lesson }: { lesson: Lesson }) {
  const data = STEPS.map((s, i) => ({ x: String(i + 1), y: i + 1, label: s.step }));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Pipeline at a glance</div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 8, right: 30, left: 30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 7]} />
              <YAxis type="category" dataKey="x" fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="y" radius={[0, 6, 6, 0]}>
                {data.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="lg:col-span-5 rounded-2xl border border-accent/40 bg-accent-soft/40 p-4 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent">Project facts</div>
        <div className="rounded-lg bg-surface p-2.5 border border-border-app">
          <div className="text-[10px] font-mono uppercase text-text-muted">Task</div>
          <div className="text-sm font-bold text-text-primary">Regression</div>
        </div>
        <div className="rounded-lg bg-surface p-2.5 border border-border-app">
          <div className="text-[10px] font-mono uppercase text-text-muted">Dataset</div>
          <div className="text-sm font-bold text-text-primary">Kaggle · 1,460 rows × 81 columns</div>
        </div>
        <div className="rounded-lg bg-surface p-2.5 border border-border-app">
          <div className="text-[10px] font-mono uppercase text-text-muted">Models used</div>
          <div className="text-sm font-bold text-text-primary">Random Forest + SVR</div>
        </div>
        <div className="rounded-xl bg-surface p-3 text-xs text-text-primary border border-border-app">
          The book says: <em>"I tried to make this first project as simple as possible."</em>
        </div>
      </div>
    </div>
  );
}
