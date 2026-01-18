import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDocsExpanded, setIsDocsExpanded] = useState(false);

  const docsSubPages = [
    { name: 'Introduction', path: '/docs' },
    { name: 'Installation', path: '/docs/installation' },
    { name: 'Project Structure', path: '/docs/structure' },
    { name: 'Presets', path: '/docs/presets' },
    { name: 'CLI Commands', path: '/docs/cli-commands' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => `
    relative text-sm font-medium transition-colors duration-200
    ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}
    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5
    after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300
    ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-50'}
  `;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              NEXO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/docs" className={navLinkClass}>
              Docs
            </NavLink>
            <a
              href="https://github.com/Moshaban09/create-nexo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
            >
              GitHub
            </a>
            <Link to="/docs">
              <Button size="sm" variant="primary" className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            {/* Docs Accordion */}
            <div>
              <button
                onClick={() => setIsDocsExpanded(!isDocsExpanded)}
                className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isDocsExpanded ? 'bg-white/10 text-white' : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Docs</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${isDocsExpanded ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isDocsExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 mt-1 space-y-1">
                  {docsSubPages.map((page) => (
                    <NavLink
                      key={page.path}
                      to={page.path}
                      end={page.path === '/docs'}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive ? 'bg-blue-500/20 text-blue-300' : 'text-neutral-400 hover:text-white hover:bg-white/5'
                        }`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="https://github.com/Moshaban09/create-nexo"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </a>
            <div className="pt-4">
              <Link to="/docs" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
