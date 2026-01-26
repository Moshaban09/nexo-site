import { AnimatePresence, motion } from "framer-motion";
import { Book, ChevronDown, Download, Github, Home, Layout, Menu, Package, Terminal, X, Zap } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocsExpanded, setIsDocsExpanded] = useState(true);

  const docsSubPages = [
    { name: "Introduction", path: "/docs", icon: Book },
    { name: "Installation", path: "/docs/installation", icon: Download },
    { name: "Presets", path: "/docs/presets", icon: Package },
    { name: "CLI Commands", path: "/docs/cli-commands", icon: Terminal },
  ];

  const mainLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Features", path: "/features", icon: Zap },
    { name: "Templates", path: "/templates", icon: Layout },
  ];

  const NavItem = ({ item }: { item: any }) => {
    return (
        <NavLink
            to={item.path}
            onClick={() => setIsOpen(false)}
            end={item.path === "/"} // Add end prop for Home
            className={({ isActive }) => `
                flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 relative group overflow-hidden
                ${isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"}
            `}
        >
            {({ isActive }) => (
                <>
                    {isActive && (
                        <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                            initial={false}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                    )}

                    <item.icon size={18} className={`mr-3 relative z-10 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-neutral-500 group-hover:text-neutral-400"}`} />
                    <span className="relative z-10">{item.name}</span>

                    {isActive && (
                        <motion.div
                            layoutId="activeGlow"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full blur-[4px] opacity-60"
                        />
                    )}
                </>
            )}
        </NavLink>
    );
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 h-16 flex items-center justify-between px-4">
         <Link to="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">N</div>
            <span className="hidden sm:inline">NEXO</span>
         </Link>
         <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-400 hover:text-white transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                onClick={() => setIsOpen(false)}
            />
        )}
      </AnimatePresence>

      <aside className={`
        fixed top-0 left-0 h-full w-72 z-50 pt-16 lg:pt-0 pointer-events-none
        lg:flex lg:flex-col lg:justify-center lg:pl-6
      `}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isOpen || window.innerWidth >= 1024 ? 0 : -100, opacity: 1 }}
            className={`
                pointer-events-auto
                w-full max-w-[280px] h-full lg:h-[95vh] lg:max-h-[850px]
                bg-[#0A0A0A]/95 backdrop-blur-2xl
                lg:rounded-3xl lg:border lg:border-white/5 lg:shadow-2xl lg:shadow-black/50
                flex flex-col overflow-hidden
                transform transition-transform duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <div className="flex flex-col h-full px-5 py-6 overflow-y-auto custom-scrollbar">
                <div className="hidden lg:flex items-center gap-4 mb-8 px-2 pt-2">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                            N
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0A0A0A] flex items-center justify-center">
                             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl text-white tracking-tight">NEXO</h1>
                        <span className="text-[10px] font-medium text-neutral-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">v1.5.0</span>
                    </div>
                </div>

                <div className="space-y-1 mb-8">
                    <p className="px-4 text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-3">Menu</p>
                    {mainLinks.map((link) => (
                        <NavItem key={link.name} item={link} />
                    ))}
                </div>

                <div className="space-y-1 mb-8">
                    <div
                        onClick={() => setIsDocsExpanded(!isDocsExpanded)}
                        className="flex items-center justify-between px-4 w-full cursor-pointer group mb-2"
                    >
                        <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400 transition-colors">Documentation</p>
                        <ChevronDown size={12} className={`text-neutral-600 transition-transform duration-300 ${isDocsExpanded ? "" : "-rotate-90"}`} />
                    </div>

                    <AnimatePresence>
                        {isDocsExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="space-y-0.5 overflow-hidden"
                            >
                                {docsSubPages.map((page) => (
                                    <NavLink
                                        key={page.path}
                                        to={page.path}
                                        end
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => `
                                            flex items-center px-4 py-2.5 text-sm rounded-lg transition-all duration-200 border border-transparent
                                            ${isActive
                                                ? "text-blue-400 bg-blue-500/5 font-medium"
                                                : "text-neutral-500 hover:text-white hover:bg-white/5 hover:pl-5"}
                                        `}
                                    >
                                        <span className="truncate">{page.name}</span>
                                    </NavLink>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                     <a
                        href="https://github.com/Moshaban09/create-nexo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 w-full p-3 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all hover:shadow-lg hover:shadow-black/50"
                     >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <Github size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">Star on GitHub</p>
                            <p className="text-xs text-neutral-500">Support the project</p>
                        </div>
                        <div className="text-neutral-500 group-hover:text-white transition-colors">
                            →
                        </div>
                     </a>
                </div>
            </div>
          </motion.div>
      </aside>
    </>
  );
};
