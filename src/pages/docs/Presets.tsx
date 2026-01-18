import { DocCode, DocList, DocSection, DocTitle } from '../../components/docs/DocTypography';
import { DocsLayout } from '../../components/layout/DocsLayout';

export const DocsPresets = () => {
  return (
    <DocsLayout>
      <DocTitle>Presets</DocTitle>

      <div className="text-xl text-neutral-300 mb-8 border-l-4 border-purple-500 pl-4 py-2 bg-purple-500/5 rounded-r">
        Skip the interactive questions and get a battle-tested stack immediately.
      </div>

      <DocSection title="Using Presets">
        <p className="mb-4">
          Run with the <code className="bg-neutral-800 px-2 py-1 rounded">--preset</code> flag to bypass the wizard:
        </p>
        <DocCode code="npm create nexo -- --preset=saas" />
      </DocSection>

      <DocSection title="Available Presets">
        <div className="space-y-6">
          {/* SaaS Preset */}
          <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-bold text-white">SaaS Preset</h3>
              <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">Popular</span>
            </div>
            <p className="text-neutral-400 mb-4">
              Complete SaaS foundation with authentication, dashboard layout, and billing-ready structure.
            </p>
            <DocCode code="npm create nexo -- --preset=saas" />
            <DocList items={[
              "Auth: JWT + Auth.js patterns",
              "UI: shadcn/ui + Tailwind CSS v4",
              "State: Zustand",
              "Structure: Feature-based architecture",
              "Includes: Protected routes, User settings, Dashboard layout"
            ]} />
          </div>

          {/* Landing Page Preset */}
          <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-bold text-white">Landing Page Preset</h3>
            </div>
            <p className="text-neutral-400 mb-4">
              Optimized for marketing sites with SEO best practices and fast performance.
            </p>
            <DocCode code="npm create nexo -- --preset=landing" />
            <DocList items={[
              "SSG-ready structure",
              "SEO meta tags pre-configured",
              "Hero, Features, CTA sections",
              "Responsive design patterns"
            ]} />
          </div>

          {/* Dashboard Preset */}
          <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📊</span>
              <h3 className="text-xl font-bold text-white">Dashboard Preset</h3>
            </div>
            <p className="text-neutral-400 mb-4">
              Data-heavy application structure with charts, tables, and data management patterns.
            </p>
            <DocCode code="npm create nexo -- --preset=dashboard" />
            <DocList items={[
              "Layout: Sidebar + Header navigation",
              "Data: TanStack Query + Axios",
              "Tables: Pre-configured data grid",
              "Charts: Ready to integrate"
            ]} />
          </div>
        </div>
      </DocSection>

      <DocSection title="Combine with Flags">
        <p className="mb-4">
          You can combine presets with additional flags for more customization:
        </p>
        <DocCode code={`# SaaS preset with CI/CD
npm create nexo -- --preset=saas --cicd

# Preview what would be created
npm create nexo -- --preset=saas --dry-run`} />
      </DocSection>
    </DocsLayout>
  );
};
