import { motion } from 'framer-motion';
import {
    Activity,
    ArrowRightLeft,
    Atom,
    Bot,
    Box,
    BrainCircuit,
    ClipboardCheck,
    Component,
    Database,
    FileCode,
    FileJson,
    FileType2,
    Flag,
    FolderTree,
    FormInput,
    Hammer,
    HardDrive,
    Layers,
    Layout,
    LayoutDashboard,
    Lock,
    Map,
    Microscope,
    Network,
    Paintbrush,
    Palette,
    RefreshCw,
    Rocket,
    Route,
    ScanEye,
    Server,
    ShieldAlert,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    Terminal as TerminalIcon,
    Wand2,
    Waypoints,
    Wind,
    Workflow,
    Zap,
    type LucideIcon
} from 'lucide-react';
import { fadeIn } from '../../lib/animations';

interface SubItem {
  name: string;
  icon: LucideIcon;
}

interface FeatureItem {
  title: string;
  description?: string;
  items?: SubItem[];
  icon: LucideIcon;
  badge?: string;
  color: string;
  bg: string;
  border: string;
}

const features: FeatureItem[] = [
  // Core / Dev Exp (Blue)
  {
    title: "React 19 & Compiler",
    description: "Built for speed with native React 19 and React Compiler support",
    icon: Atom,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Interactive CLI",
    description: "Guided project setup with smart defaults",
    icon: TerminalIcon,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Disk Cache",
    description: "Instant startup (<50ms) via persistent metadata caching",
    icon: HardDrive,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "TypeScript First",
    description: "Full type safety out of the box",
    icon: FileType2,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Zero-Latency I/O",
    description: "Memory-resident package management for instant command execution",
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Dry Run Mode",
    description: "Preview every structural change before it touches your disk",
    icon: ScanEye,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Turbo-Install Engine",
    description: "Slashes install time by 30% using optimized caching and parallel resolution flags.",
    items: [
        { name: "--prefer-offline", icon: HardDrive },
        { name: "--no-audit", icon: ShieldAlert },
        { name: "--legacy-peer-deps", icon: Layers }
    ],
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Zero-Dependency Binary",
    description: "Entire CLI bundled into a single ~226KB file for instant installation",
    icon: Box,
    badge: "NEW",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },

  // UI & Design (Purple)
  {
    title: "Modern Styling",
    items: [
        { name: "Tailwind v4", icon: Wind },
        { name: "Sass", icon: FileJson }
    ],
    icon: Palette,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    title: "UI Libraries",
    items: [
        { name: "shadcn/ui", icon: Component },
        { name: "Radix", icon: Layers },
        { name: "HeroUI", icon: Layout }
    ],
    icon: Paintbrush,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },

  // State & Forms (Amber)
  {
    title: "Forms",
    items: [
        { name: "RHF", icon: FormInput },
        { name: "Zod", icon: ShieldCheck },
        { name: "Formik", icon: FileCode }
    ],
    icon: ClipboardCheck,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    title: "State Management",
    items: [
        { name: "Zustand", icon: Database },
        { name: "Redux", icon: Box },
        { name: "Jotai", icon: Atom }
    ],
    icon: Activity,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },

  // Data & Routing (Emerald)
  {
    title: "Routing",
    items: [
        { name: "React Router", icon: Route },
        { name: "TanStack", icon: Map }
    ],
    icon: Waypoints,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    title: "Data Fetching",
    items: [
        { name: "React Query", icon: Network },
        { name: "Axios", icon: ArrowRightLeft }
    ],
    icon: Server,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },


  {
    title: "Multi-PM Support",
    description: "Native detection and optimization for pnpm, Bun, and Yarn",
    icon: Rocket,
    badge: "NEW",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
  {
    title: "Conflict-Free Deps",
    description: "Automatic peer dependency resolution via --legacy-peer-deps",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
  {
    title: "Global Flags",
    items: [
        { name: "--verbose", icon: TerminalIcon },
        { name: "--dry-run", icon: ScanEye }
    ],
    icon: Flag,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },

  // Architecture & Tools (Indigo/Cyber)
  {
    title: "Project Architecture",
    items: [
        { name: "FSD", icon: Layers },
        { name: "Feature-based", icon: FolderTree },
        { name: "Clean Architecture", icon: Workflow }
    ],
    icon: Workflow,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    title: "Security & QA",
    items: [
        { name: "SBOM", icon: ShieldCheck },
        { name: "Zero-Trust", icon: Lock },
        { name: "System Check", icon: Bot }
    ],
    description: "Built-in security audits and system health checks",
    icon: ShieldAlert,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    title: "Visual Testing",
    items: [
        { name: "Storybook", icon: ScanEye },
        { name: "Ladle", icon: Layout },
        { name: "Auto-Story", icon: Sparkles }
    ],
    icon: Microscope,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    title: "AI-Native Context",
    description: "Auto-generated .nexo/ai-context.md for LLM alignment",
    icon: BrainCircuit,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    title: "Presets",
    items: [
        { name: "SaaS", icon: Rocket },
        { name: "Dashboard", icon: LayoutDashboard }
    ],
    icon: Wand2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  },

  {
    title: "Unified Maintenance",
    items: [
        { name: "Check", icon: Stethoscope },
        { name: "Update", icon: RefreshCw }
    ],
    description: "Total project health, security, and bundle auditing",
    icon: Hammer,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-neutral-400 text-lg"
          >
             A complete toolkit for modern web development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
                <motion.div
                    key={feature.title}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                >
                    {/* Hover Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl border border-transparent group-hover:${feature.border} opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`} />

                    {/* Glow Effect */}
                    <div className={`absolute -inset-2 rounded-3xl ${feature.bg} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2.5 rounded-lg ${feature.bg} ${feature.color} border ${feature.border} border-opacity-30`}>
                                 <feature.icon size={22} />
                            </div>
                            {feature.badge && (
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${feature.bg} ${feature.color} border ${feature.border}`}>
                                    {feature.badge}
                                </span>
                            )}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>

                        {feature.description && (
                            <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                {feature.description}
                            </p>
                        )}

                        {feature.items && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {feature.items.map(item => (
                                    <span key={item.name} className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors cursor-default hover:${feature.border}`}>
                                        <item.icon size={12} className={feature.color} />
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
