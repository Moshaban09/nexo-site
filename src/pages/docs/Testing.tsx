import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, DocsLayout, Layout } from "../..";

export const DocsTesting = () => {
  return (
    <Layout>
      <DocsLayout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="p-4 bg-blue-500/10 rounded-full mb-6">
            <Construction size={48} className="text-blue-500" />
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-500 font-mono text-sm mb-6 border border-blue-500/30">
            COMING SOON
          </div>
          <h1 className="text-4xl font-bold mb-4">Testing Guide</h1>
          <p className="text-xl text-neutral-400 max-w-lg mb-8">
            Comprehensive testing strategies and examples will be available
            soon. Stay tuned for updates!
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
