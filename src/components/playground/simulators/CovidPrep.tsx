import type { Lesson } from '../../../types';

const STEPS = [
  { title: 'Select columns', desc: 'iso_code, continent, location, date, new_cases, new_deaths, hosp_patients, total_vaccinations, people_vaccinated, people_fully_vaccinated' },
  { title: 'Fill NaN with 0', desc: 'numeric_columns.fillna(0) — no missing values in numeric features' },
  { title: 'Parse dates', desc: 'pd.to_datetime(data["date"])' },
  { title: 'Sort by location + date', desc: 'groupby("location").apply(sort_values("date"))' },
  { title: 'Daily vaccination rate', desc: 'groupby + diff(people_vaccinated) / new_cases' },
  { title: 'Linear interpolation', desc: 'interp1d on vaccination columns for missing rows' },
  { title: 'Drop zero-fully-vaccinated rows', desc: 'data[data["people_fully_vaccinated"] != 0] — keep post-vaccination era' },
];

export default function CovidPrep({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
        {STEPS.map((s, i) => (
          <div key={s.title} className="rounded-lg border border-border-app bg-surface-2/40 p-3 flex items-start gap-3">
            <span className="h-7 w-7 rounded-md bg-accent text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">{i + 1}</span>
            <div>
              <div className="text-sm font-bold text-text-primary">{s.title}</div>
              <div className="text-[11px] text-text-secondary leading-snug mt-1 font-mono">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        After preprocessing: <code className="font-mono">data.shape (246252, 9)</code>. The dataset is now ready for LSTM and SVR.
      </div>
    </div>
  );
}
