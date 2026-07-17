import { useMemo, useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function SeabornDist({ lesson: _lesson }: { lesson: Lesson }) {
  const [bins, setBins] = useState(20);
  const [kde, setKde] = useState(true);

  const data = useMemo(() => Array.from({ length: 500 }, () => 5.8 + (Math.random() - 0.5) * 1.4 + (Math.random() < 0.3 ? (Math.random() - 0.5) * 1.2 : 0)), []);
  const hist = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const w = (max - min) / bins;
    const binsArr = Array.from({ length: bins }, () => 0);
    data.forEach((v) => {
      const i = Math.min(bins - 1, Math.floor((v - min) / w));
      binsArr[i]++;
    });
    return binsArr.map((c, i) => ({ x: Number((min + i * w).toFixed(2)), count: c, bin: `${(min + i * w).toFixed(1)}–${(min + (i + 1) * w).toFixed(1)}` }));
  }, [data, bins]);

  const kdeData = useMemo(() => {
    if (!kde) return [] as { x: number; y: number }[];
    const out: { x: number; y: number }[] = [];
    const sigma = 0.45;
    for (let x = 4; x <= 8; x += 0.05) {
      let y = 0;
      data.forEach((v) => { y += Math.exp(-((x - v) ** 2) / (2 * sigma * sigma)); });
      y /= data.length * sigma * Math.sqrt(2 * Math.PI);
      out.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(3)) });
    }
    return out;
  }, [data, kde]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <Slider value={bins} onChange={setBins} min={5} max={40} step={1} label="Bins" formatValue={(v) => `${v}`} />
          <button
            onClick={() => setKde((v) => !v)}
            className={clsx('w-full text-xs font-semibold py-2 rounded-lg border transition-colors', kde ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary')}
          >
            {kde ? '✓ KDE overlay (kde=True)' : 'Toggle KDE overlay'}
          </button>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 font-mono text-[11px] text-text-primary leading-relaxed">
          sns.histplot(data['sepal_length'], kde=True)
          <br /><span className="text-text-muted"># or just KDE: sns.kdeplot(data['sepal_length'])</span>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Histogram</div>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={hist}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="bin" fontSize={9} stroke="var(--text-muted)" interval={Math.floor(bins / 6)} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="count" fill="var(--chart-2)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[160px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">KDE overlay</div>
          {kde ? (
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={kdeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Area type="monotone" dataKey="y" stroke="var(--chart-4)" fill="var(--chart-4)" fillOpacity={0.3} strokeWidth={2} animationDuration={300} />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full grid place-items-center text-xs text-text-muted italic">KDE overlay hidden — toggle it on.</div>
          )}
        </div>
      </div>
    </div>
  );
}
