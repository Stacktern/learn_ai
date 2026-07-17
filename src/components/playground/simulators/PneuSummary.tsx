import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';

const PROJECTS = [
  { name: 'House Price', algorithm: 'Random Forest', mse: 857641621, best: 'RF < SVR' },
  { name: 'COVID-19', algorithm: 'LSTM (10 ep)', mse: 0.00025, best: 'LSTM << SVR' },
  { name: 'Pneumonia', algorithm: 'VGG16 + head', mse: 0.027, best: 'transfer learning > custom' },
];

const RADAR = [
  { trait: 'Preprocessing', House: 8, COVID: 7, Pneumonia: 9 },
  { trait: 'EDA effort', House: 7, COVID: 8, Pneumonia: 5 },
  { trait: 'Model complexity', House: 5, COVID: 7, Pneumonia: 9 },
  { trait: 'Compute cost', House: 4, COVID: 6, Pneumonia: 9 },
  { trait: 'Interpretability', House: 8, COVID: 5, Pneumonia: 3 },
  { trait: 'Production use', House: 9, COVID: 7, Pneumonia: 8 },
];

export default function PneuSummary({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Effort & cost across the three projects</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={RADAR} outerRadius="80%">
              <PolarGrid stroke="var(--border-app)" />
              <PolarAngleAxis dataKey="trait" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
              <PolarRadiusAxis domain={[0, 10]} tick={{ fontSize: 9, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Radar name="House Price" dataKey="House" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.2} strokeWidth={2} />
              <Radar name="COVID-19" dataKey="COVID" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.2} strokeWidth={2} />
              <Radar name="Pneumonia" dataKey="Pneumonia" stroke="var(--chart-4)" fill="var(--chart-4)" fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="lg:col-span-5 rounded-2xl border border-border-app bg-surface p-4 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Project scoreboard</div>
        {PROJECTS.map((p) => (
          <div key={p.name} className="rounded-lg border border-border-app bg-surface-2/40 p-2.5">
            <div className="text-sm font-bold text-text-primary">{p.name}</div>
            <div className="text-[10px] font-mono text-text-muted">Best model: {p.algorithm} — {p.best}</div>
            <div className="text-[10px] font-mono text-text-muted">Final error: {p.mse.toLocaleString()}</div>
          </div>
        ))}
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The book: <em>"6. Practical Data Science Projects: To consolidate your learning, this book includes several practical projects… designed to give you hands-on experience."</em>
        </div>
      </div>
    </div>
  );
}
