import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/animations';

interface TechItem {
  name: string;
  description: string;
  icon: string;
  recommended?: boolean;
}

interface TechCategoryProps {
  title: string;
  items: TechItem[];
  delay?: number;
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, items, delay = 0 }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay }}
    className="bg-[#121212] border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 transition-colors"
  >
    <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <span className="text-2xl">{item.icon}</span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">{item.name}</span>
              {item.recommended && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium">
                  Recommended
                </span>
              )}
            </div>
            <p className="text-sm text-neutral-400 mt-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const techCategories = [
  {
    title: "UI Libraries",
    items: [
      { name: "shadcn/ui", description: "Beautiful copy-paste components", icon: "🎨", recommended: true },
      { name: "Radix UI", description: "Unstyled, accessible primitives", icon: "🧱" },
      { name: "Mantine", description: "100+ customizable components", icon: "💎" },
      { name: "HeroUI", description: "Modern Tailwind-based UI", icon: "🦸" },
    ]
  },
  {
    title: "State Management",
    items: [
      { name: "Zustand", description: "Small, fast, scalable", icon: "🐻", recommended: true },
      { name: "Redux Toolkit", description: "Industry standard", icon: "🔧" },
      { name: "Jotai", description: "Atomic state management", icon: "⚛️" },
    ]
  },
  {
    title: "Routing",
    items: [
      { name: "React Router", description: "Declarative routing", icon: "🛣️", recommended: true },
      { name: "TanStack Router", description: "Type-safe routing", icon: "🧭" },
    ]
  },
  {
    title: "Data Fetching",
    items: [
      { name: "TanStack Query", description: "Powerful async state", icon: "🔄", recommended: true },
      { name: "Axios", description: "Promise-based HTTP client", icon: "📡" },
    ]
  },
];

export const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Choose your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              tech stack
            </span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-neutral-400 text-lg">
            Mix and match from battle-tested libraries. We've got you covered.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => (
            <TechCategory
              key={category.title}
              title={category.title}
              items={category.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
