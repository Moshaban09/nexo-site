import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Button } from '../../components/ui/Button';

export const DocsDeploying = () => {
  return (
    <Layout>
      <DocsLayout>
         <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="p-4 bg-green-500/10 rounded-full mb-6">
                <Construction size={48} className="text-green-500" />
            </div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-500 font-mono text-sm mb-6 border border-green-500/30">
                COMING SOON
            </div>
            <h1 className="text-4xl font-bold mb-4">Deployment Guide</h1>
            <p className="text-xl text-neutral-400 max-w-lg mb-8">
                Learn how to deploy your NEXO app to Vercel, Netlify, and Docker.
                This guide is coming very soon.
            </p>
            <div className="flex gap-4">
                <Link to="/docs">
                    <Button variant="outline">Back to Docs</Button>
                </Link>
            </div>
         </div>
      </DocsLayout>
    </Layout>
  );
};
