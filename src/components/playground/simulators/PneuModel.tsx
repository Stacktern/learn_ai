import type { Lesson } from '../../../types';

const LAYERS = [
  { name: 'Input', shape: '(256, 256, 3)', color: 'var(--text-muted)' },
  { name: 'VGG16 base (frozen, last 3 layers unfrozen)', shape: '(8, 8, 512)', color: 'var(--chart-4)' },
  { name: 'Flatten', shape: '(8 × 8 × 512 = 32,768)', color: 'var(--text-muted)' },
  { name: 'Dropout(0.3)', shape: '(32,768)', color: 'var(--text-muted)' },
  { name: 'Dense(128, ReLU, L2=0.05)', shape: '(128)', color: 'var(--chart-1)' },
  { name: 'Dropout(0.2)', shape: '(128)', color: 'var(--text-muted)' },
  { name: 'Dense(2, softmax)', shape: '(2) — NORMAL or PNEUMONIA', color: 'var(--chart-2)' },
];

export default function PneuModel({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Model summary (VGG16 + custom head)</div>
        {LAYERS.map((l) => (
          <div key={l.name} className="rounded-lg border border-border-app p-2.5 flex items-center gap-2.5" style={{ borderLeft: `3px solid ${l.color}` }}>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-text-primary truncate">{l.name}</div>
              <div className="text-[10px] font-mono text-text-muted truncate">{l.shape}</div>
            </div>
            <div className="h-2 w-2 rounded-full" style={{ background: l.color }} />
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-4 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent">Compilation & training</div>
        <div className="rounded-lg bg-surface border border-border-app p-3 font-mono text-xs space-y-1">
          <div>optimizer = <span className="text-accent">'adam'</span></div>
          <div>loss = <span className="text-accent">'binary_crossentropy'</span></div>
          <div>metrics = <span className="text-accent">['accuracy']</span></div>
        </div>
        <div className="rounded-lg bg-surface border border-border-app p-3 text-xs">
          <div>epochs = 10, batch_size = 32</div>
          <div className="text-text-muted">Validation accuracy reported after each epoch</div>
        </div>
        <div className="rounded-xl bg-surface border border-border-app p-3 text-xs text-text-primary">
          Transfer learning: VGG16 weights from ImageNet, last 3 conv layers unfrozen for fine-tuning on chest X-rays.
        </div>
      </div>
    </div>
  );
}
