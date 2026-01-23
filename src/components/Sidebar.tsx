import { Book, ChevronDown, Download, ExternalLink, Github, Home, Menu, Package, Terminal, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocsExpanded, setIsDocsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const docsSubPages = [
    { name: "Introduction", path: "/docs", icon: Book },
    { name: "Installation", path: "/docs/installation", icon: Download },
    { name: "Presets", path: "/docs/presets", icon: Package },
    { name: "CLI Commands", path: "/docs/cli-commands", icon: Terminal },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        const sections = ["hero", "features", "comparison", "faq"];
        let current = "";

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 20;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", `/#${id}`);
        setActiveSection(id);
      }
    }
  };

  const navItemClass = (isActive: boolean) => `
    flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 w-full text-left group
    ${isActive
      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
      : "text-neutral-400 hover:text-white hover:bg-white/5"}
  `;

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            NEXO
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-neutral-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed top-0 left-0 bottom-0 z-50 w-72 bg-black border-r border-white/5
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 mb-10 group"
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
            }}
          >
            <span className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              NEXO
            </span>
            <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20 uppercase tracking-tighter">v1.4.1</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex-grow space-y-2 overflow-y-auto custom-scrollbar">
            <Link
              to="/"
              className={navItemClass(location.pathname === "/" && !activeSection)}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </Link>

            <button
              onClick={() => scrollToSection("features")}
              className={navItemClass(activeSection === "features")}
            >
              <Zap size={18} />
              <span className="font-medium">Features</span>
            </button>



            <div className="pt-4 pb-2">
              <div
                className="flex items-center justify-between px-4 py-2 text-xs font-bold text-neutral-500 uppercase tracking-widest cursor-pointer hover:text-neutral-300 transition-colors"
                onClick={() => setIsDocsExpanded(!isDocsExpanded)}
              >
                <span>Documentation</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isDocsExpanded ? "rotate-180" : ""}`} />
              </div>

              <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${isDocsExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                {docsSubPages.map((page) => (
                  <NavLink
                    key={page.path}
                    to={page.path}
                    end={page.path === "/docs"}
                    className={({ isActive }) => `
                      flex items-center space-x-3 px-8 py-2.5 rounded-lg text-sm transition-all duration-200
                      ${isActive ? "text-blue-400 font-medium" : "text-neutral-500 hover:text-neutral-300"}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <page.icon size={14} />
                    <span>{page.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/Moshaban09/create-nexo"
              target="_blank"
              rel="noopener noreferrer"
              className={navItemClass(false)}
            >
              <Github size={18} />
              <span className="font-medium">GitHub</span>
              <ExternalLink size={12} className="ml-auto opacity-50" />
            </a>
          </nav>

          {/* Bottom Action */}
          <div className="mt-auto pt-6 border-t border-white/5">
            <Link to="/docs" onClick={() => setIsOpen(false)}>
              <Button
                variant="primary"
                className="w-full shadow-lg shadow-blue-500/10"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
