import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function CovidEda({ lesson: _lesson }: { lesson: Lesson }) {
  const [country, setCountry] = useState(0);
  const countries = ['United States', 'India', 'Brazil', 'Germany'];
  const data = useMemo(() => {
    let s = 7 + country * 13;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const out: { t: number; cases: number; deaths: number; vax: number }[] = [];
    for (let i = 0; i < 90; i++) {
      const cases = Math.round(1000 + 8000 * Math.exp(-((i - 35) ** 2) / 200) + r() * 500);
      const deaths = Math.round(cases * 0.02 + r() * 10);
      const vax = Math.round(100 * i + r() * 50);
      out.push({ t: i, cases, deaths, vax });
    }
    return out;
  }, [country]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-4 space-y-2">
        {countries.map((c, i) => (
          <button
            key={c}
            onClick={() => setCountry(i)}
            className={clsx('w-full text-left rounded-xl border p-3', country === i ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40')}
          >
            <div className="text-sm font-bold text-text-primary">{c}</div>
            <div className="text-[10px] font-mono text-text-muted">synthetic wave centred around day 35</div>
          </button>
        ))}
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The book says: <em>"your task is to take one country and perform EDA of that particular country."</em>
        </div>
      </div>
      <div className="lg:col-span-8 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Daily cases, deaths and vaccinations — {countries[country]}</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="cases" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} name="new_cases" />
              <Line type="monotone" dataKey="deaths" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} name="new_deaths" />
              <Line type="monotone" dataKey="vax" stroke="var(--chart-3)" strokeWidth={2.5} dot={false} name="people_vaccinated (cumulative)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
