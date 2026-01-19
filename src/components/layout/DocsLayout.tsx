import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { fadeIn } from '../../lib/animations';

interface DocsLayoutProps {
  children: React.ReactNode;
}

const sidebarLinks = [
  {
    section: "Getting Started",
    items: [
      { name: "Introduction", path: "/docs" },
      { name: "Installation", path: "/docs/installation" },
      { name: "Project Structure", path: "/docs/structure" }
    ]
  },
  {
    section: "Core Concepts",
    items: [
      { name: "Presets", path: "/docs/presets" },
      { name: "CLI Commands", path: "/docs/cli-commands" },
      { name: "Configuration", path: "/docs/configuration" }
    ]
  },
  {
    section: "Guides",
    items: [
       { name: "Deploying", path: "/docs/deploying" },
       { name: "Testing", path: "/docs/testing" }
    ]
  }
];

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
             <div className="sticky top-24 p-6 rounded-2xl bg-[#111]/80 border border-white/10 backdrop-blur-sm space-y-8">
               {sidebarLinks.map((group, groupIdx) => (
                 <div key={groupIdx}>
                   <h3 className="font-semibold text-white mb-3 tracking-wide text-sm uppercase">{group.section}</h3>
                   <ul className="space-y-1">
                     {group.items.map((link) => (
                       <li key={link.path}>
                         <NavLink
                           to={link.path}
                           end={link.path === '/docs'}
                           className={({ isActive }) => `
                              block px-3 py-2 text-sm rounded-md transition-all duration-200
                              ${isActive
                                ? 'bg-blue-500/10 text-blue-400 font-medium border-l-2 border-blue-500'
                                : 'text-neutral-400 hover:text-white hover:bg-white/5'
                              }
                           `}
                         >
                           {link.name}
                         </NavLink>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
             <motion.div
               initial="hidden"
               animate="visible"
               variants={fadeIn}
               className="bg-[#111] border border-white/10 rounded-2xl p-8 lg:p-12 min-h-[600px] shadow-2xl"
             >
                <div className="prose prose-invert prose-blue max-w-none">
                  {children}
                </div>
             </motion.div>
          </main>

        </div>
      </div>
    </div>
  );
};
