import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';

const DATA = [
  { name: 'LSTM (10 ep)', mae: 0.00252, mse: 0.00025, rmse: 0.0159 },
  { name: 'SVR (linear)', mae: 0.00450, mse: 0.00045, rmse: 0.0212 },
];

export default function CovidSvr({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">LSTM vs SVR on the COVID sequences</div>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="mae" fill="var(--chart-1)" radius={[4, 4, 0, 0]} name="MAE" />
              <Bar dataKey="mse" fill="var(--chart-2)" radius={[4, 4, 0, 0]} name="MSE" />
              <Bar dataKey="rmse" fill="var(--chart-3)" radius={[4, 4, 0, 0]} name="RMSE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        SVR with linear kernel is a flat baseline; LSTM captures the temporal structure of new_cases. The book ends by inviting the reader to "implement other machine learning models — for example gradient boosting, random forest, etc."
      </div>
    </div>
  );
}
