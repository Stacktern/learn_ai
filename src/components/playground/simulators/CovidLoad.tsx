import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const COLUMNS = [
  { name: 'iso_code', desc: 'ISO 3166-1 alpha-3 country code', type: 'string' },
  { name: 'continent', desc: 'Continent of the location', type: 'string' },
  { name: 'location', desc: 'Country name', type: 'string' },
  { name: 'date', desc: 'Date of the observation', type: 'datetime' },
  { name: 'new_cases', desc: 'New confirmed COVID-19 cases', type: 'numeric' },
  { name: 'new_deaths', desc: 'New confirmed COVID-19 deaths', type: 'numeric' },
  { name: 'hosp_patients', desc: 'Number of hospitalised patients', type: 'numeric' },
  { name: 'total_vaccinations', desc: 'Cumulative vaccine doses administered', type: 'numeric' },
  { name: 'people_vaccinated', desc: 'People with at least one dose', type: 'numeric' },
  { name: 'people_fully_vaccinated', desc: 'People fully vaccinated', type: 'numeric' },
];

export default function CovidLoad({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
        {COLUMNS.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setActive(i)}
            className={clsx(
              'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
              active === i ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span>{c.name}</span>
              <span className="text-[10px] opacity-60">{c.type}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">{COLUMNS[active].name}</div>
        <div className="text-sm font-bold text-text-primary">{COLUMNS[active].desc}</div>
        <div className="mt-3 rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The book: <em>"df = pd.read_csv('https://covid.ourworldindata.org/data/owid-covid-data.csv')"</em>
        </div>
        <div className="mt-auto pt-3 text-[10px] font-mono text-text-muted">OWID · global coverage, daily granularity</div>
      </div>
    </div>
  );
}
