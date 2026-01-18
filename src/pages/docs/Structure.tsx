import { DocSection, DocTitle } from '../../components/docs/DocTypography';
import { DocsLayout } from '../../components/layout/DocsLayout';

export const DocsStructure = () => {
  return (
    <DocsLayout>
      <DocTitle>Project Structure</DocTitle>

      <DocSection title="Architecture Options">
        <p className="mb-4">
          NEXO supports multiple architectural patterns to suit your team's size and preferences. You can choose these during the setup wizard.
        </p>

        <div className="space-y-6">
          <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-lg">
             <h3 className="text-xl font-bold text-white mb-2">Feature-Based (Recommended)</h3>
             <p className="text-neutral-400 mb-2">Organizes code by business domain rather than technical type.</p>
             <pre className="text-xs text-blue-300 font-mono bg-black/50 p-3 rounded">
{`src/
  features/
    auth/
      components/
      hooks/
      api.ts
    dashboard/
  components/  (shared)
  lib/         (shared)`}
             </pre>
          </div>

          <div className="bg-[#1e1e1e] border border-white/5 p-6 rounded-lg">
             <h3 className="text-xl font-bold text-white mb-2">Feature-Sliced Design (FSD)</h3>
             <p className="text-neutral-400 mb-2">Scalable methodology for very large frontend applications.</p>
             <pre className="text-xs text-blue-300 font-mono bg-black/50 p-3 rounded">
{`src/
  app/
  processes/
  pages/
  widgets/
  features/
  entities/
  shared/`}
             </pre>
          </div>
        </div>
      </DocSection>
    </DocsLayout>
  );
};
