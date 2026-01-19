import { motion } from 'framer-motion';
import { Activity, ArrowRightLeft, Globe, Layers, Palette } from 'lucide-react';
import { fadeIn } from '../../lib/animations';

const categories = [
  {
    title: "Core Framework",
    icon: Layers,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    items: [
      { name: "React 19", status: "standard", desc: "The library for web and native user interfaces" },
      { name: "Next.js", status: "coming-soon", desc: "The React Framework for the Web" },
    ]
  },
  {
    title: "UI Libraries",
    icon: Palette,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    items: [
      { name: "shadcn/ui", status: "recommended", desc: "Beautiful copy-paste components" },
      { name: "Radix UI", status: "available", desc: "Unstyled, accessible primitives" },
      { name: "Mantine", status: "available", desc: "100+ customizable components" },
      { name: "HeroUI", status: "available", desc: "Modern Tailwind-based UI" },
    ]
  },
  {
    title: "State Management",
    icon: Activity,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    items: [
      { name: "Zustand", status: "recommended", desc: "Small, fast, scalable" },
      { name: "Redux Toolkit", status: "available", desc: "Industry standard" },
      { name: "Jotai", status: "available", desc: "Atomic state management" },
    ]
  },
  {
    title: "Routing",
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    items: [
      { name: "React Router", status: "recommended", desc: "Declarative routing" },
      { name: "TanStack Router", status: "available", desc: "Type-safe routing" },
    ]
  },
  {
    title: "Data Fetching",
    icon: ArrowRightLeft,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    items: [
      { name: "TanStack Query", status: "recommended", desc: "Powerful async state" },
      { name: "Axios", status: "available", desc: "Promise-based HTTP client" },
    ]
  }
];

export const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Subtle background glow for this section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400"
          >
            Choose your tech stack
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Mix and match from battle-tested libraries. We've got you covered with optimal configurations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${category.bg} border ${category.border} ${category.color}`}>
                    <category.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              <div className="grid gap-3">
                {category.items.map((item) => (
                    <div
                        key={item.name}
                        className="group relative p-4 rounded-xl border border-white/5 bg-[#111] hover:border-white/10 hover:bg-[#161616] transition-all duration-300"
                    >
                        {/* Hover Gradient Border Effect */}
                        <div className={`absolute inset-0 rounded-xl border border-transparent group-hover:${category.border} opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`} />

                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <span className={`font-bold text-neutral-200 group-hover:text-white transition-colors`}>{item.name}</span>
                            {item.status === 'recommended' && (
                                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${category.bg} ${category.color} bg-opacity-20 border ${category.border} border-opacity-30`}>
                                    Recommended
                                </span>
                            )}
                            {item.status === 'coming-soon' && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-neutral-800 text-neutral-400 border border-neutral-700">
                                    Soon
                                </span>
                            )}
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors relative z-10 leading-normal">
                            {item.desc}
                        </p>
                    </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
