import { DocCode, DocSection, DocTitle } from '../../components/docs/DocTypography';
import { DocsLayout } from '../../components/layout/DocsLayout';

export const DocsCLICommands = () => {
  return (
    <DocsLayout>
      <DocTitle>CLI Commands</DocTitle>

      <DocSection title="create">
        <p className="mb-2">Initialize a new project with full customization options.</p>
        <DocCode code="nexo create <project-name> [flags]" />

        <h3 className="text-lg font-semibold text-white mt-6 mb-3">Flags</h3>
        <div className="space-y-3">
          <div className="bg-neutral-900 border border-white/5 rounded-lg p-4">
            <code className="text-blue-400 font-mono">--dry-run</code>
            <p className="text-neutral-400 text-sm mt-1">Preview the project structure without writing any files. Great for understanding what will be created.</p>
          </div>
          <div className="bg-neutral-900 border border-white/5 rounded-lg p-4">
            <code className="text-blue-400 font-mono">--cicd</code>
            <p className="text-neutral-400 text-sm mt-1">Include GitHub Actions CI/CD workflows for testing and deployment.</p>
          </div>
          <div className="bg-neutral-900 border border-white/5 rounded-lg p-4">
            <code className="text-blue-400 font-mono">--preset=&lt;name&gt;</code>
            <p className="text-neutral-400 text-sm mt-1">Use a pre-configured stack. Options: <code className="bg-neutral-800 px-1 rounded">saas</code>, <code className="bg-neutral-800 px-1 rounded">landing</code>, <code className="bg-neutral-800 px-1 rounded">dashboard</code></p>
          </div>
          <div className="bg-neutral-900 border border-white/5 rounded-lg p-4">
            <code className="text-blue-400 font-mono">--no-parallel</code>
            <p className="text-neutral-400 text-sm mt-1">Run in sequential mode instead of parallel (parallel is default for faster execution).</p>
          </div>
        </div>
      </DocSection>

      <DocSection title="generate component (gc)">
        <p className="mb-2">Generate React components with optional tests and styles.</p>
        <DocCode code={`# Basic component
nexo gc Button

# With tests and styles
nexo gc Button --with-tests --with-styles

# In a specific directory
nexo gc features/auth/LoginForm`} />
      </DocSection>

      <DocSection title="generate hook (gh)">
        <p className="mb-2">Generate custom React hooks.</p>
        <DocCode code={`# Generate a hook
nexo gh useAuth

# Generate with tests
nexo gh useLocalStorage --with-tests`} />
      </DocSection>

      <DocSection title="generate feature">
        <p className="mb-2">Generate a complete feature module (FSD style).</p>
        <DocCode code={`# Generate a feature with all slices
nexo generate feature auth

# Creates:
# src/features/auth/
#   ├── components/
#   ├── hooks/
#   ├── api.ts
#   └── index.ts`} />
      </DocSection>

      <DocSection title="wizard">
        <p className="mb-2">Launch the interactive wizard for guided project setup.</p>
        <DocCode code="npm create nexo wizard" />
        <p className="text-neutral-400 text-sm mt-2">Perfect for beginners or when you want to explore all available options.</p>
      </DocSection>
    </DocsLayout>
  );
};
