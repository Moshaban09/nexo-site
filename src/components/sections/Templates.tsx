import { motion } from 'framer-motion';
import { ArrowRight, Globe, LayoutTemplate, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../../lib/animations';
import { Button } from '../ui/Button';

const templates = [
  {
    name: "SaaS Starter",
    description: "High-performance stack with professional RTL support and AI optimization.",
    features: ["AI Context Ready", "Optimized Pipeline", "RTL/LTR Support"],
    command: "nexo create my-saas --preset=saas",
    icon: Globe,
    color: "blue",
    path: "/docs/presets#saas"
  },
  {
    name: "Admin Dashboard",
    description: "Data-dense layout with sidebar, charts, and table examples.",
    features: ["Sidebar Layout", "Recharts Integrated", "Data Tables"],
    command: "nexo create my-dash --preset=dashboard",
    icon: LayoutTemplate,
    color: "emerald",
    path: "/docs/presets#dashboard"
  },
  {
    name: "Minimal App",
    description: "The absolute essentials. Vite + React + TypeScript + Tailwind.",
    features: ["Zero Bloat", "Latest Vite", "Fast Refresh"],
    command: "nexo create my-app --preset=minimal",
    icon: Palette,
    color: "purple",
    path: "/docs/presets#minimal"
  }
];

export const Templates = () => {
  return (
    <section id="templates" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
            Start with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Winning Template</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-neutral-400 max-w-2xl mx-auto">
             Don't reinvent the wheel. Choose a production-ready preset.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden hover:bg-[#131313] transition-colors duration-300 border border-white/10 hover:border-blue-500/40 flex flex-col shadow-lg hover:shadow-xl hover:shadow-blue-500/5"
            >

              <div className="p-8 flex flex-col h-full">
                 <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-${template.color}-500/10 text-${template.color}-400 group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/5`}>
                        <template.icon size={28} />
                    </div>
                 </div>

                 <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {template.name}
                 </h3>

                 <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {template.description}
                 </p>

                 <div className="mb-8 space-y-2">
                    {template.features.map(feature => (
                        <div key={feature} className="flex items-center text-xs text-neutral-500">
                             <Zap size={12} className="mr-2 text-yellow-500/50" />
                             {feature}
                        </div>
                    ))}
                 </div>

                 <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
                     <Link to={template.path} className="block">
                         <Button variant="outline" className="w-full justify-between items-center group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:text-blue-300 transition-all">
                             View Details
                             <ArrowRight size={14} className="ml-2 opacity-50 group-hover:translate-x-1 transition-transform" />
                         </Button>
                     </Link>
                     <div className="font-mono text-[10px] text-neutral-600 text-center select-all cursor-text">
                         {template.command}
                     </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
