import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeBlock = ({ code, language = 'bash', className = '' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`relative group rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a] ${className}`}>
      <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-neutral-400 hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="text-sm font-mono text-neutral-300">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};
