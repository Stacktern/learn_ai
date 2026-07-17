import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const STEPS = [
  { title: 'Load with image_dataset_from_directory', desc: 'keras.utils.image_dataset_from_directory(..., labels="inferred", label_mode="categorical", batch_size=32, image_size=(256, 256))' },
  { title: 'Iterate batches to numpy', desc: 'data_iterator = train.as_numpy_iterator() — convert each batch to a numpy array of shape (32, 256, 256, 3).' },
  { title: 'Stack into full arrays', desc: 'Concatenate batches into x_train, x_val, x_test; y_train, y_val, y_test.' },
  { title: 'Normalise pixel values', desc: 'x_train /= 256 — scale to [0, 1].' },
];

export default function PneuPrep({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        {STEPS.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(i)}
            className={clsx('w-full text-left rounded-xl border p-3', active === i ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40')}
          >
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-md bg-accent text-white text-[10px] font-mono font-bold flex items-center justify-center">{i + 1}</span>
              <div className="text-sm font-bold text-text-primary">{s.title}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{STEPS[active].title}</div>
        <div className="text-sm text-text-primary mt-2">{STEPS[active].desc}</div>
        <div className="mt-4 rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          After preprocessing, the data is ready for transfer learning with VGG16.
        </div>
      </div>
    </div>
  );
}
