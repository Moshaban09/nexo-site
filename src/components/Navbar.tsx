import { ChevronDown, Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDocsExpanded, setIsDocsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const docsSubPages = [
    { name: "Introduction", path: "/docs" },
    { name: "Installation", path: "/docs/installation" },
    { name: "Project Structure", path: "/docs/structure" },
    { name: "Presets", path: "/docs/presets" },
    { name: "CLI Commands", path: "/docs/cli-commands" },
    { name: "Configuration", path: "/docs/configuration" },
    { name: "Deploying", path: "/docs/deploying" },
    { name: "Testing", path: "/docs/testing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = [
          "hero",
          "features",
          "how-it-works",
          "templates",
          "comparison",
          "faq",
        ];
        let current = "";

        if (window.scrollY < 100) {
          current = "";
        } else {
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (
                rect.top <= window.innerHeight * 0.4 &&
                rect.bottom >= window.innerHeight * 0.1
              ) {
                current = section;
              }
            }
          }
        }

        if (current === "how-it-works") {
          current = "features";
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
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
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

  const navLinkClass = (isActive: boolean) => `
    relative text-sm font-medium transition-colors duration-200 cursor-pointer
    ${isActive ? "text-white" : "text-neutral-400 hover:text-white"}
    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5
    after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300
    ${isActive ? "after:scale-x-100" : "hover:after:scale-x-50"}
  `;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              NEXO
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={navLinkClass(
                location.pathname === "/" && !activeSection
              )}
            >
              Home
            </Link>

            <button
              onClick={() => scrollToSection("features")}
              className={navLinkClass(activeSection === "features")}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("templates")}
              className={navLinkClass(activeSection === "templates")}
            >
              Templates
            </button>

            <NavLink
              to="/docs"
              className={({ isActive }) => navLinkClass(isActive)}
            >
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
              <Button
                size="sm"
                variant="primary"
                className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
              >
                Get Started
              </Button>
            </Link>
          </div>

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

      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-dark border-b border-white/10 animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                location.pathname === "/"
                  ? "bg-white/10 text-white"
                  : "text-neutral-300 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <button
              onClick={() => {
                scrollToSection("features");
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollToSection("templates");
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Templates
            </button>

            <div>
              <button
                onClick={() => setIsDocsExpanded(!isDocsExpanded)}
                className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isDocsExpanded
                    ? "bg-white/10 text-white"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Docs</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    isDocsExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isDocsExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 mt-1 space-y-1">
                  {docsSubPages.map((page) => (
                    <NavLink
                      key={page.path}
                      to={page.path}
                      end={page.path === "/docs"}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive
                            ? "bg-blue-500/20 text-blue-300"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
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
              className="px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Github size={18} /> GitHub
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
