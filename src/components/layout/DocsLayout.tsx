import React, { type ReactNode } from 'react';
import { Layout } from '../Layout';
import { Sidebar } from '../docs/Sidebar';

interface DocsLayoutProps {
  children: ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        <div className="flex-1 min-w-0 py-10 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};
