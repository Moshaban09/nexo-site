import { RefreshCw, ShieldCheck, Terminal } from 'lucide-react';
import { DocsLayout } from '../../components/layout/DocsLayout';

const commands = [
    {
        cmd: "nexo create",
        args: "[name]",
        icon: Terminal,
        desc: "Initializes a new project with the interactive wizard.",
        examples: [
             "nexo create",
             "nexo create my-app",
             "nexo create my-app --preset=saas"
        ],
        options: [
            { flag: "--dir <path>", desc: "Specify target directory explicitly" },
            { flag: "--preset <name>", desc: "Skip wizard and use a template (saas, dashboard)" },
            { flag: "--dry-run", desc: "Preview file operations without writing to disk" },
            { flag: "--package-manager <pm>", desc: "npm, yarn, pnpm, or bun" }
        ]
    },
    {
        cmd: "nexo check",
        args: "[options]",
        icon: ShieldCheck,
        desc: "Unified command for system and project health audits. Replaces doctor and health.",
        examples: [
             "nexo check",
             "nexo check --system",
             "nexo check --project"
        ],
        options: [
            { flag: "--system", desc: "Check system environment only (Node, npm, Git)" },
            { flag: "--project", desc: "Check project health only (security, lockfiles, bundle)" }
        ]
    },
    {
        cmd: "Global Flags",
        args: "",
        icon: Terminal,
        desc: "Flags available for all commands to enhance control and debugging.",
        examples: ["nexo <command> --verbose", "nexo <command> --dry-run"],
        options: [
            { flag: "--verbose", desc: "Enable detailed logging for debugging" },
            { flag: "--dry-run", desc: "Preview all operations without making changes" }
        ]
    },
    {
        cmd: "nexo update",
        args: "",
        icon: RefreshCw,
        desc: "Self-update Nexo CLI to the latest version with dry-run support.",
        examples: ["nexo update", "nexo update --dry-run"],
        options: [
            { flag: "--dry-run", desc: "Preview updates before applying" }
        ]
    }
];

export const DocsCLICommands = () => {
    return (
            <DocsLayout>
                <div className="space-y-12">
                     <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-white mb-4">CLI Reference</h1>
                        <p className="text-xl text-neutral-300">
                            Comprehensive guide to the NEXO command-line interface.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {commands.map((command) => (
                            <div key={command.cmd} className="relative">
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        <command.icon size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white font-mono mb-2">
                                            {command.cmd} <span className="text-neutral-500 text-xl">{command.args}</span>
                                        </h2>
                                        <p className="text-lg text-neutral-400">{command.desc}</p>
                                    </div>
                                </div>

                                {/* Options Table */}
                                {command.options.length > 0 && (
                                    <div className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-white/5 text-neutral-300 border-b border-white/5">
                                                <tr>
                                                    <th className="p-4 font-semibold w-1/3">Flag / Option</th>
                                                    <th className="p-4 font-semibold">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {command.options.map(opt => (
                                                    <tr key={opt.flag} className="hover:bg-white/5 transition-colors">
                                                        <td className="p-4 font-mono text-purple-400 font-medium">{opt.flag}</td>
                                                        <td className="p-4 text-neutral-400">{opt.desc}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {/* Examples */}
                                <div className="bg-[#111] rounded-xl p-5 border border-white/10">
                                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3 block">Examples</span>
                                    <div className="space-y-2">
                                        {command.examples.map(ex => (
                                            <div key={ex} className="font-mono text-sm text-neutral-300 border-l-2 border-blue-500/50 pl-3">
                                                $ {ex}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DocsLayout>
    );
};
