import { NavLink, useLocation } from 'react-router-dom';

interface SidebarItem {
  title: string;
  slug: string;
  isSubItem?: boolean;
}

interface SidebarSection {
  category: string;
  items: SidebarItem[];
}

const sidebarData: SidebarSection[] = [
  {
    category: "Getting Started",
    items: [
      { title: "Introduction", slug: "/docs" },
      { title: "Installation", slug: "/docs/installation" },
    ]
  },
  {
    category: "Core Concepts",
    items: [
      { title: "Project Structure", slug: "/docs/structure" },
      { title: "Presets", slug: "/docs/presets" },
    ]
  },
  {
    category: "API Reference",
    items: [
      { title: "CLI Commands", slug: "/docs/cli-commands" },
    ]
  }
];

export const Sidebar = () => {
    const location = useLocation();

  return (
    <aside className="w-64 flex-shrink-0 hidden md:block border-r border-white/5 bg-[#0a0a0a] min-h-[calc(100vh-4rem)] sticky top-20 self-start p-6">
      <nav className="space-y-8">
        {sidebarData.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-bold text-neutral-500 tracking-wider uppercase mb-3 px-3">
              {section.category}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                // Standard NavLink 'isActive' doesn't always catch hash changes well or sticky headers

                return (
                  <li key={item.slug}>
                    <NavLink
                      to={item.slug}
                      end={item.slug === "/docs"}
                      className={({ isActive: libActive }) => {
                         // Combine logic: library active OR manual hash check
                         const active = libActive || (item.slug.includes('#') && location.hash === '#' + item.slug.split('#')[1]);

                         return `
                            group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 border-l-2
                            ${active
                              ? 'border-blue-500 bg-blue-500/5 text-blue-400'
                              : 'border-transparent text-neutral-400 hover:text-white hover:bg-white/5'
                            }
                            ${item.isSubItem ? 'ml-4 text-xs' : ''}
                        `;
                      }}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
