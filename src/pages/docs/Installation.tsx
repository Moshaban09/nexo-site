import { AlertCircle, CheckCircle2, Package, Terminal as TerminalIcon } from 'lucide-react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Layout } from '../../components/layout/Layout';
import { CodeBlock } from '../../components/ui/CodeBlock';

export const DocsInstallation = () => {
  return (
    <Layout>
      <DocsLayout>
        <div className="space-y-10">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Installation</h1>
                <p className="text-xl text-neutral-300">
                    Get started with NEXO in seconds. No global installation required.
                </p>
            </div>

            {/* Quick Start Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <TerminalIcon className="text-blue-400" size={24} />
                    <h2 className="text-xl font-bold text-white m-0">Quick Start</h2>
                </div>
                <div className="mb-4">
                    <p className="text-neutral-300 mb-4">Run the interactive wizard to scaffold your project:</p>
                    <CodeBlock code="npm create nexo@latest" />
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        Node.js 18+ required
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                        <Package size={14} className="text-amber-400" />
                        pnpm, yarn, npm, bun
                    </span>
                </div>
            </div>

            {/* Package Managers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="p-4 rounded-xl bg-[#111] border border-white/10">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" /> npm
                    </h3>
                    <CodeBlock code="npm create nexo@latest" className="text-xs" />
                 </div>
                 <div className="p-4 rounded-xl bg-[#111] border border-white/10">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" /> yarn
                    </h3>
                    <CodeBlock code="yarn create nexo" className="text-xs" />
                 </div>
                 <div className="p-4 rounded-xl bg-[#111] border border-white/10">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" /> pnpm
                    </h3>
                    <CodeBlock code="pnpm create nexo" className="text-xs" />
                 </div>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-6">
                 <div>
                    <h2 className="text-2xl font-bold text-white mb-2">CLI Arguments</h2>
                    <p className="text-neutral-400">Skip the interactive wizard by passing flags directly.</p>
                 </div>

                 <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10">
                    <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="text-purple-400 mt-1" size={20} />
                        <div>
                            <h3 className="text-white font-bold">Pro Tip: Dry Run</h3>
                            <p className="text-sm text-neutral-400 mt-1">
                                Use the <code>--dry-run</code> flag to see what files would be created without actually writing them to disk.
                            </p>
                        </div>
                    </div>
                    <CodeBlock language="bash" code="nexo create my-app --preset=saas --dry-run" />
                 </div>
            </div>

        </div>
      </DocsLayout>
    </Layout>
  );
};
