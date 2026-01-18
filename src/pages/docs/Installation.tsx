import { DocCode, DocSection, DocTitle } from '../../components/docs/DocTypography';
import { DocsLayout } from '../../components/layout/DocsLayout';

export const DocsInstallation = () => {
  return (
    <DocsLayout>
      <DocTitle>Installation</DocTitle>

      <DocSection title="Quick Start" id="quick-start">
        <p className="mb-4">
          The easiest way to get started with NEXO is to run the create command. You don't need to install anything globally.
        </p>
        <DocCode code="npm create nexo" />
        <p className="mt-4">
          This will launch the interactive wizard that guides you through setting up your project.
        </p>
      </DocSection>

      <DocSection title="Package Managers">
        <p className="mb-4">We support all major package managers:</p>
        <DocCode
          code={`# npm
npm create nexo

# pnpm
pnpm create nexo

# yarn
yarn create nexo`}
        />
      </DocSection>

      <DocSection title="Wizard Mode">
        <p className="mb-4">
          For beginners or those who want a guided tour of all available options, explicitly trigger the wizard mode:
        </p>
        <DocCode code="npm create nexo wizard" />
      </DocSection>
    </DocsLayout>
  );
};
