import { clsx } from 'clsx';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language = 'python', className, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const lines = code.replace(/\n$/, '').split('\n');

  const tokenize = (text: string): { type: string; text: string }[] => {
    const tokens: { type: string; text: string }[] = [];
    const keywords = new Set([
      'def', 'return', 'import', 'from', 'as', 'class', 'for', 'in', 'if', 'else', 'elif',
      'while', 'try', 'except', 'with', 'lambda', 'True', 'False', 'None', 'and', 'or', 'not',
      'is', 'pass', 'break', 'continue', 'yield', 'global', 'nonlocal', 'self',
    ]);
    const builtins = new Set(['print', 'len', 'range', 'int', 'float', 'str', 'list', 'dict', 'tuple', 'set', 'open']);

    let i = 0;
    while (i < text.length) {
      const c = text[i];
      if (c === '#') {
        const end = text.indexOf('\n', i);
        const stop = end === -1 ? text.length : end;
        tokens.push({ type: 'comment', text: text.slice(i, stop) });
        i = stop;
        continue;
      }
      if (c === '"' || c === "'") {
        const quote = c;
        let j = i + 1;
        while (j < text.length && text[j] !== quote) {
          if (text[j] === '\\') j += 2; else j++;
        }
        j = Math.min(j + 1, text.length);
        tokens.push({ type: 'string', text: text.slice(i, j) });
        i = j;
        continue;
      }
      if (/[0-9]/.test(c)) {
        let j = i;
        while (j < text.length && /[0-9.eE+\-_]/.test(text[j])) j++;
        tokens.push({ type: 'number', text: text.slice(i, j) });
        i = j;
        continue;
      }
      if (/[A-Za-z_]/.test(c)) {
        let j = i;
        while (j < text.length && /[A-Za-z0-9_]/.test(text[j])) j++;
        const word = text.slice(i, j);
        if (keywords.has(word)) tokens.push({ type: 'keyword', text: word });
        else if (builtins.has(word)) tokens.push({ type: 'builtin', text: word });
        else tokens.push({ type: 'plain', text: word });
        i = j;
        continue;
      }
      tokens.push({ type: 'plain', text: c });
      i++;
    }
    return tokens;
  };

  const colors = theme === 'dark'
    ? { comment: '#6b7280', string: '#a5d6a7', number: '#fbbf24', keyword: '#c084fc', builtin: '#60a5fa', plain: '#e4e4e7' }
    : { comment: '#6b7280', string: '#16a34a', number: '#b45309', keyword: '#7c3aed', builtin: '#2563eb', plain: '#0f172a' };

  return (
    <div className={clsx('relative group rounded-xl overflow-hidden border border-border-app bg-surface-2/60', className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-app bg-surface-2/80 text-[10px] font-mono uppercase tracking-wider text-text-muted">
        <span>{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-surface text-text-secondary hover:text-text-primary transition-colors normal-case tracking-normal"
          aria-label="Copy code"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="m-0 p-4 overflow-x-auto text-xs font-mono leading-relaxed">
        <code>
          {lines.map((line, li) => (
            <div key={li} className="flex">
              {showLineNumbers && (
                <span className="select-none w-6 shrink-0 text-right pr-3 text-text-muted">{li + 1}</span>
              )}
              <span className="flex-1">
                {tokenize(line || ' ').map((tok, ti) => (
                  <span key={ti} style={{ color: (colors as any)[tok.type] }}>{tok.text}</span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
