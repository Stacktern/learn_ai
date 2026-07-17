import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';

const DATA = [
  { aspect: 'Output type', regression: 'Continuous (price, temperature)', classification: 'Discrete (spam/not, pass/fail)' },
  { aspect: 'Metrics', regression: 'MSE, RMSE', classification: 'Accuracy, Precision, Recall, F1, ROC' },
  { aspect: 'Algorithms', regression: 'Linear, Polynomial, Ridge, Lasso', classification: 'Logistic, Trees, Random Forest, SVM' },
  { aspect: 'Examples', regression: 'Sales, temperature, stock prices', classification: 'Spam, image recognition, diagnosis' },
];

export default function RegVsClass({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-border-app bg-surface p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Side-by-side comparison</div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-text-muted">
                <th className="text-left p-2 font-bold">Aspect</th>
                <th className="text-left p-2 font-bold text-chart-1">Regression</th>
                <th className="text-left p-2 font-bold text-chart-2">Classification</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((d, i) => (
                <tr key={d.aspect} className={i % 2 === 0 ? 'bg-surface-2/30' : ''}>
                  <td className="p-2 text-text-primary font-bold">{d.aspect}</td>
                  <td className="p-2 text-text-primary">{d.regression}</td>
                  <td className="p-2 text-text-primary">{d.classification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        The book: <em>"Linear regression cannot be used directly for classification, and logistic regression is typically unsuitable for regression tasks."</em>
      </div>
    </div>
  );
}
