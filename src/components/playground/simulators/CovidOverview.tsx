import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { Lesson } from '../../../types';

const PHASES = [
  { name: 'Setup', desc: 'Imports, library load, libraries' },
  { name: 'Load', desc: 'OWID COVID dataset' },
  { name: 'EDA', desc: 'One country, sort by date' },
  { name: 'Preprocess', desc: 'Impute, interpolate, drop zero' },
  { name: 'LSTM', desc: 'Sequence model for new_cases' },
  { name: 'SVR', desc: 'Linear-kernel regression baseline' },
  { name: 'Compare', desc: 'MAE, MSE, RMSE' },
];

export default function CovidOverview({ lesson: _lesson }: { lesson: Lesson }) {
  const data = PHASES.map((p, i) => ({ x: i + 1, y: (i + 1) * 15, label: p.name }));
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Project workflow</div>
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="covidArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" hide />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="y" stroke="var(--chart-1)" fill="url(#covidArea)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PHASES.slice(0, 4).map((p) => (
          <div key={p.name} className="rounded-xl border border-border-app bg-surface p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-accent">{p.name}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{p.desc}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        The book: <em>"This project is gonna be interesting. We will use a lot of machine learning models, including LSTM, a time series prediction."</em>
      </div>
    </div>
  );
}
