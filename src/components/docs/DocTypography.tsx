import { type ReactNode } from 'react';

export const DocTitle = ({ children }: { children: ReactNode }) => (
  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b border-white/10 pb-4">
    {children}
  </h1>
);

export const DocSection = ({ children, title, id }: { children: ReactNode; title: string, id?: string }) => (
  <section id={id} className="mb-10 scroll-mt-24">
    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
      <span className="w-1.5 h-6 bg-blue-500 rounded mr-3" />
      {title}
    </h2>
    <div className="text-neutral-300 leading-relaxed text-lg">
      {children}
    </div>
  </section>
);

export const DocCode = ({ code, language = 'bash' }: { code: string; language?: string }) => (
  <div className="relative rounded-lg overflow-hidden my-6 bg-[#1e1e1e] border border-white/5 shadow-inner group">
    <div className="flex items-center justify-between px-4 py-2 bg-[#252525] border-b border-white/5">
       <span className="text-xs text-neutral-500 font-mono uppercase">{language}</span>
       {/* Future copy button here */}
    </div>
    <div className="p-4 overflow-x-auto">
      <code className="text-sm font-mono text-blue-300 whitespace-pre">
        {code}
      </code>
    </div>
  </div>
);

export const DocList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-outside pl-6 space-y-2 mt-4 text-neutral-300">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);
