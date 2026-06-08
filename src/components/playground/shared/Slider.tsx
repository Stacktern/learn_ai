import { clsx } from 'clsx';

interface SliderProps {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  formatValue?: (v: number) => string;
  accentColor?: string;
  className?: string;
}

export default function Slider({
  value,
  onChange,
  min,
  max,
  step = 1,
  label,
  showValue = true,
  formatValue,
  accentColor,
  className,
}: SliderProps) {
  return (
    <div className={clsx('space-y-1.5', className)}>
      {label && (
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-text-secondary">{label}</span>
          {showValue && (
            <span className="font-mono font-bold text-accent" style={accentColor ? { color: accentColor } : undefined}>
              {formatValue ? formatValue(value) : value}
            </span>
          )}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-surface-2 rounded-full appearance-none cursor-pointer accent-[var(--accent)]"
        style={accentColor ? { accentColor } : undefined}
      />
    </div>
  );
}
