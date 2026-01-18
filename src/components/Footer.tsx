import { Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NEXO
            </span>
            <p className="mt-4 text-sm text-neutral-400 max-w-sm">
              The ultimate CLI for scaffolding modern, production-ready React applications in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Project</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/docs" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://github.com/Moshaban09/create-nexo" className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center">
                  <Github size={16} className="mr-2" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Nexo CLI. Open source MIT License.
          </p>
          <p className="text-xs text-neutral-500 mt-2 md:mt-0">
            Built with ❤️ using React + Vite + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};
