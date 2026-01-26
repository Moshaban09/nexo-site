import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block mb-4"
            >
              NEXO
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              The ultimate CLI for scaffolding modern, production-ready React
              applications. Fast, extensible, and opinionated where it matters.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/docs"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/presets"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/cli-commands"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  CLI Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Connect
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/Moshaban09/create-nexo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
              >
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-neutral-500">
              Join the ecosystem and stay updated.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} NEXO. Open Source MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
};
