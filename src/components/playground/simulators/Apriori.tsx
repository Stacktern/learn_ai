import { useMemo, useState } from 'react';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const TRANSACTIONS = [
  { id: 1, items: ['bread', 'butter', 'milk'] },
  { id: 2, items: ['beer', 'diapers', 'bread'] },
  { id: 3, items: ['milk', 'diapers', 'beer', 'eggs'] },
  { id: 4, items: ['bread', 'butter'] },
  { id: 5, items: ['milk', 'eggs', 'bread'] },
  { id: 6, items: ['beer', 'diapers'] },
  { id: 7, items: ['bread', 'milk', 'butter'] },
  { id: 8, items: ['beer', 'eggs'] },
];

function subsets<T>(arr: T[]): T[][] {
  const out: T[][] = [[]];
  arr.forEach((x) => out.forEach((s) => out.push([...s, x])));
  return out.filter((s) => s.length > 0);
}

function support(itemset: string[]) {
  return TRANSACTIONS.filter((t) => itemset.every((it) => t.items.includes(it))).length / TRANSACTIONS.length;
}

function confidence(a: string[], b: string[]) {
  const supAB = support([...a, ...b]);
  const supA = support(a);
  return supA === 0 ? 0 : supAB / supA;
}

export default function Apriori({ lesson: _lesson }: { lesson: Lesson }) {
  const [minSup, setMinSup] = useState(0.3);
  const [minConf, setMinConf] = useState(0.6);
  const [lhs, setLhs] = useState<string[]>(['beer']);

  const allItems = Array.from(new Set(TRANSACTIONS.flatMap((t) => t.items)));
  const itemset1 = allItems.map((it) => [it]).filter((s) => support(s) >= minSup);
  const pairs = itemset1.flatMap((a) => itemset1.map((b) => a[0] < b[0] ? [a[0], b[0]] : null).filter(Boolean) as string[][]);
  const pairsFilt = pairs.filter((p) => support(p) >= minSup);

  const rules = pairsFilt.map((p) => {
    const a = [p[0]];
    const b = [p[1]];
    return { p, a, b, conf: confidence(a, b), sup: support(p) };
  }).concat(pairsFilt.map((p) => {
    const a = [p[1]];
    const b = [p[0]];
    return { p, a, b, conf: confidence(a, b), sup: support(p) };
  })).filter((r) => r.conf >= minConf);

  const myConf = confidence(lhs, allItems.filter((it) => !lhs.includes(it)).map((it) => [it]).map((x) => x[0]));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Thresholds</div>
          <Slider value={minSup} onChange={setMinSup} min={0.1} max={1} step={0.05} label="Min support" formatValue={(v) => `${(v * 100).toFixed(0)}%`} />
          <Slider value={minConf} onChange={setMinConf} min={0.2} max={1} step={0.05} label="Min confidence" formatValue={(v) => `${(v * 100).toFixed(0)}%`} />
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Try a rule</div>
          <div className="text-xs text-text-secondary">Left-hand side (X):</div>
          <div className="flex flex-wrap gap-1.5">
            {allItems.map((it) => (
              <button key={it} onClick={() => setLhs(lhs.includes(it) ? lhs.filter((x) => x !== it) : [...lhs, it])} className={clsx('px-2 py-1 rounded-lg text-xs font-mono border', lhs.includes(it) ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary')}>{it}</button>
            ))}
          </div>
        </div>
        <StatBadge label="Frequent itemsets" value={itemset1.length + pairsFilt.length} hint="1-item + 2-item" />
        <StatBadge label="Strong rules" value={rules.length} tone={rules.length > 0 ? 'success' : 'warning'} />
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Top rules (X ⇒ Y)</div>
          {rules.length === 0 && <div className="text-xs text-text-muted italic">No rules meet both thresholds — try lowering them.</div>}
          {rules.sort((a, b) => b.conf - a.conf).slice(0, 6).map((r, i) => (
            <div key={i} className="flex items-center justify-between gap-2 rounded-lg border border-border-app bg-surface-2/40 px-3 py-2 text-xs font-mono">
              <span><span className="text-accent">{r.a.join(', ')}</span> ⇒ <span className="text-text-primary">{r.b.join(', ')}</span></span>
              <span className="text-text-muted shrink-0">sup {(r.sup * 100).toFixed(0)}% · conf {(r.conf * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 text-xs text-text-primary">
          <strong className="text-accent">Apriori trick:</strong> if an itemset is infrequent, none of its supersets can be frequent either — so we can prune the search tree dramatically.
        </div>
      </div>
    </div>
  );
}
