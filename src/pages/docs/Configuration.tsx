import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Button } from '../../components/ui/Button';

export const DocsConfiguration = () => {
  return (
    <Layout>
      <DocsLayout>
         <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="p-4 bg-yellow-500/10 rounded-full mb-6">
                <Construction size={48} className="text-yellow-500" />
            </div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-500 font-mono text-sm mb-6 border border-yellow-500/30">
                COMING SOON
            </div>
            <h1 className="text-4xl font-bold mb-4">Configuration</h1>
            <p className="text-xl text-neutral-400 max-w-lg mb-8">
                Detailed configuration guides are currently being written.
                We are working hard to bring you the best documentation possible.
            </p>
            <div className="flex gap-4">
                <Link to="/docs">
                    <Button variant="outline">Back to Docs</Button>
                </Link>
                <a href="https://github.com/Moshaban09/create-nexo" target="_blank" rel="noreferrer">
                    <Button variant="primary">Check GitHub</Button>
                </a>
            </div>
         </div>
      </DocsLayout>
    </Layout>
  );
};
