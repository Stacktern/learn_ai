import type { Lesson } from '../../../types';

const ADV = [
  { title: 'Parameter Sharing', desc: 'A feature detector that\'s useful in one part of the image is probably useful across the entire image — reducing the overall memory footprint.' },
  { title: 'Local Connectivity', desc: 'Focusing on small regions (local receptive fields) allows CNNs to exploit the spatial locality of the input data.' },
  { title: 'Robustness to image translation', desc: 'Once a feature is learned, whether it\'s slightly shifted left or right, it can still be detected by the same filters, thanks to pooling layers.' },
];

export default function CnnAdvantages({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {ADV.map((a) => (
        <div key={a.title} className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-7 w-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">+</span>
            <div className="text-base font-bold text-text-primary">{a.title}</div>
          </div>
          <p className="text-sm text-text-primary leading-relaxed">{a.desc}</p>
        </div>
      ))}
      <div className="lg:col-span-2 rounded-2xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        The book: <em>"CNNs are now a foundational technology in deep learning, driving innovations across various applications beyond vision, such as natural language processing and video analysis, making them indispensable tools in the modern AI toolkit."</em>
      </div>
    </div>
  );
}
