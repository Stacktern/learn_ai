import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceArea } from 'recharts';
import type { Lesson } from '../../../types';

const STAGES = [
  { name: 'Input image', size: 256 },
  { name: 'Conv + ReLU', size: 252 },
  { name: 'Conv + ReLU', size: 248 },
  { name: 'MaxPool 2×2', size: 124 },
  { name: 'Conv + ReLU', size: 120 },
  { name: 'Conv + ReLU', size: 116 },
  { name: 'MaxPool 2×2', size: 58 },
  { name: 'Conv + ReLU', size: 54 },
  { name: 'Conv + ReLU', size: 50 },
  { name: 'MaxPool 2×2', size: 25 },
  { name: 'Conv + ReLU', size: 21 },
  { name: 'MaxPool 2×2', size: 10 },
  { name: 'Conv + ReLU', size: 6 },
  { name: 'MaxPool 2×2', size: 3 },
  { name: 'Flatten', size: 3 },
  { name: 'FC + ReLU', size: 1 },
  { name: 'FC softmax', size: 1 },
];

export default function CnnHow({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Spatial resolution through a VGG-style CNN</div>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={STAGES}>
              <defs>
                <linearGradient id="cnnFlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="name" fontSize={9} stroke="var(--text-muted)" angle={-45} textAnchor="end" interval={0} height={90} />
              <YAxis fontSize={10} stroke="var(--text-muted)" label={{ value: 'spatial size', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="size" stroke="var(--chart-1)" fill="url(#cnnFlow)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        The book: <em>"An image is input into the network, which then passes through multiple convolutional, non-linear activation, and pooling layers. After successive layers, the abstract features are extracted… The final output is typically produced using fully connected layers followed by a classification layer (like softmax)."</em>
      </div>
    </div>
  );
}
