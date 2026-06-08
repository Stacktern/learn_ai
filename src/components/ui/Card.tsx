import { clsx } from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'soft';
  className?: string;
}

export function Card({ children, className, variant = 'default', ...rest }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-border-app',
        variant === 'default'
          ? 'bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)]'
          : 'bg-surface-2/60',
        'shadow-[var(--shadow-sm)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('flex items-center justify-between px-5 py-3.5 border-b border-border-app', className)}>
      {children}
    </div>
  );
}

export function CardBody({ children, className, ...rest }: CardBodyProps) {
  return <div className={clsx('p-5', className)} {...rest}>{children}</div>;
}
