import {
  ArrowRight, Blocks,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Layout } from '../../components/layout/Layout';

export const DocsIntro = () => {
  return (
    <Layout>
      <DocsLayout>
        <div className="space-y-12">

            {/* Hero Section */}
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                    Introduction
                </h1>
                <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl">
                    NEXO is an extensible CLI tool designed to scaffold and orchestrate modern frontend projects.
                    It bridges the gap between simple templates and complex enterprise setups, giving you a
                    <span className="text-white font-semibold"> production-ready foundation </span>
                    in seconds.
                </p>
            </div>

            <hr className="border-white/10" />

            {/* Why NEXO Grid */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Rocket className="text-blue-400" size={24} />
                    Why NEXO?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                            <Settings2 size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Opinionated, yet Flexible</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            We provide smart defaults for TypeScript, ESLint, and Tailwind, but give you full control to eject or modify configuration files.
                            "Convention over Configuration" where it speeds you up, freedom where it matters.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                            <Blocks size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Design System Ready</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Native integration with <strong>shadcn/ui</strong> means you get accessible, copy-pasteable components that live in your codebase.
                            No vendor lock-in, just pure formatted React code.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Philosophy */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="text-amber-400" size={24} />
                    Core Philosophy
                </h2>
                <ul className="grid gap-4">
                    <li className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 items-start cursor-default hover:bg-white/10 transition-colors">
                        <div className="mt-1 text-emerald-400">
                            <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Performance First</h4>
                            <p className="text-sm text-neutral-400 mt-1">
                                Sub-second scaffolding, immediate dev server starts with Vite, and optimized production builds.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 items-start cursor-default hover:bg-white/10 transition-colors">
                        <div className="mt-1 text-rose-400">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Type Safety</h4>
                            <p className="text-sm text-neutral-400 mt-1">
                                TypeScript isn't an afterthought. Every template, hook, and utility is typed strictly for maximum reliability.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Next Steps CTA */}
            <div className="pt-8">
                <Link
                    to="/docs/installation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                    Get Started
                    <ArrowRight size={18} />
                </Link>
                <p className="mt-4 text-sm text-neutral-500">
                    Ready to build? Head over to interpretation basics.
                </p>
            </div>
        </div>
      </DocsLayout>
    </Layout>
  );
};
