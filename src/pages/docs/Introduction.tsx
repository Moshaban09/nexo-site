import { DocList, DocSection, DocTitle } from '../../components/docs/DocTypography';
import { DocsLayout } from '../../components/layout/DocsLayout';

export const DocsIntro = () => {
  return (
    <DocsLayout>
      <DocTitle>Introduction</DocTitle>

      <div className="text-xl text-neutral-300 mb-8 border-l-4 border-blue-500 pl-4 py-2 bg-blue-500/5 rounded-r">
        Next-generation scaffolding CLI for modern React projects.
        Build faster with smart defaults.
      </div>

      <DocSection title="What is NEXO?">
        <p className="mb-4">
          NEXO is not just another template repository. It's a powerful, interactive CLI tool designed to scaffold production-ready React applications in seconds. We believe in providing a solid foundation without locking you into proprietary frameworks.
        </p>
        <p>
          Whether you're building a simple landing page, a complex SaaS dashboard, or a next-gen web app, NEXO gives you the best tools pre-configured and ready to go.
        </p>
      </DocSection>

      <DocSection title="Key Features">
        <DocList items={[
          "🎯 Interactive CLI — Guided project setup with smart defaults",
          "📝 TypeScript First — Full type safety out of the box",
          "⚡ Vite Powered — Lightning-fast development and builds",
          "🎨 Modern Styling — Tailwind CSS v4, CSS Modules, or Sass",
          "🧩 UI Libraries — Built-in support for Shadcn UI, Mantine, and more",
          "📋 Forms & Validation — React Hook Form + Zod pre-wired",
          "🔧 CI/CD — GitHub Actions workflow included automatically"
        ]} />
      </DocSection>
    </DocsLayout>
  );
};
