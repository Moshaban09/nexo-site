import {
    Check,
    CreditCard,
    LayoutDashboard,
    LayoutTemplate,
    Rocket,
} from "lucide-react";
import { CodeBlock, DocsLayout, Layout } from "../..";

const presets = [
  {
    name: "SaaS Starter",
    slug: "saas",
    description:
      "High-performance foundation for modern SaaS platforms.",
    icon: Rocket,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    features: [
      "AI Context Generation",
      "RTL/Arabic Support",
      "Dashboard Layout",
      "Optimized Build",
    ],
  },
  {
    name: "Admin Dashboard",
    slug: "dashboard",
    description: "Data-heavy interface with charts and tables.",
    icon: LayoutDashboard,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    features: [
      "Sidebar Navigation",
      "Data Table (TanStack)",
      "Recharts Integration",
      "Stats Widgets",
    ],
  },
  {
    name: "Landing Page",
    slug: "landing",
    description: "High-conversion marketing template.",
    icon: LayoutTemplate,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    features: [
      "Hero Section",
      "Feature Grid",
      "Pricing Cards",
      "Testimonial Slider",
    ],
  },
  {
    name: "Minimal",
    slug: "minimal",
    description: "Clean slate with just the essentials.",
    icon: CreditCard,
    color: "text-neutral-400",
    bg: "bg-neutral-500/10",
    border: "border-neutral-500/20",
    features: [
      "Vite + React 19",
      "Tailwind CSS v4",
      "TypeScript Strict",
      "ESLint + Prettier",
    ],
  },
];

export const DocsPresets = () => {
  return (
    <Layout>
      <DocsLayout>
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Presets</h1>
            <p className="text-xl text-neutral-300">
              Jumpstart your development with battle-tested architectures.
              Choose a preset to get a pre-configured stack tailored to your use
              case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {presets.map((preset) => (
              <div
                key={preset.slug}
                id={preset.slug}
                className={`group p-6 rounded-2xl bg-bg-dark border border-white/10 hover:border-opacity-50 transition-all duration-300 scroll-mt-32 hover:-translate-y-1 hover:shadow`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-3 rounded-xl ${preset.bg} ${preset.color} border ${preset.border}`}
                  >
                    <preset.icon size={24} />
                  </div>
                  <div className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded">
                    --preset={preset.slug}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {preset.name}
                </h3>
                <p className="text-neutral-400 mb-6 min-h-12">
                  {preset.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {preset.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-neutral-300"
                    >
                      <Check size={16} className={`shrink-0 ${preset.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/5">
                  <CodeBlock
                    language="bash"
                    code={`nexo create my-app --preset=${preset.slug}`}
                    className="text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </DocsLayout>
    </Layout>
  );
};
