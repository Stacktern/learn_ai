import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function MplLine({ lesson: _lesson }: { lesson: Lesson }) {
  const [freq, setFreq] = useState(1);
  const [amp, setAmp] = useState(1);

  const data = useMemo(() => {
    const out: { x: number; y: number }[] = [];
    for (let i = 0; i <= 100; i++) {
      const x = (i / 100) * 10;
      out.push({ x: Number(x.toFixed(2)), y: Number((amp * Math.sin(freq * x)).toFixed(3)) });
    }
    return out;
  }, [freq, amp]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <Slider value={freq} onChange={setFreq} min={0.5} max={4} step={0.1} label="Frequency" formatValue={(v) => v.toFixed(1)} />
          <Slider value={amp} onChange={setAmp} min={0.1} max={2} step={0.1} label="Amplitude" formatValue={(v) => v.toFixed(1)} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 font-mono text-[11px] text-text-primary leading-relaxed">
          plt.plot(x, y)
          <br />plt.title("Sine Wave")
          <br />plt.xlabel("Time")
          <br />plt.ylabel("Amplitude")
          <br />plt.grid(True)
        </div>
        <div className="text-[11px] text-text-muted">Use case: time-series analysis, economic data trends.</div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[360px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Matplotlib line plot</div>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" label={{ value: 'Time', position: 'insideBottom', offset: -2, fontSize: 10, fill: 'var(--text-muted)' }} />
              <YAxis fontSize={10} stroke="var(--text-muted)" label={{ value: 'Amplitude', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="y" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} animationDuration={300} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
