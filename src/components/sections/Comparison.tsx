import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/animations';

const competitors = [
  {
    name: "Create React App",
    speed: "Slow",
    features: "Basic",
    bundleSize: "Heavy",
    dx: "Outdated",
    presets: "None",
    cicd: "Manual",
    highlight: false
  },
  {
    name: "Vite",
    speed: "Fast",
    features: "Minimal",
    bundleSize: "Light",
    dx: "Good",
    presets: "None",
    cicd: "Manual",
    highlight: false
  },
  {
    name: "NEXO",
    speed: "Instant",
    features: "Full Suite",
    bundleSize: "Optimized",
    dx: "Excellent",
    presets: "Included",
    cicd: "Auto-Config",
    highlight: true
  }
];

export const Comparison = () => {
  return (
    <section id="comparison" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
            Why Developers Choose <span className="text-blue-500">NEXO</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Nexo combines the speed of Vite with the comprehensive setup of a full framework, without the bloat.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[900px] w-full bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-900/5">
            <div className="grid grid-cols-7 bg-neutral-900 border-b border-white/5 p-4 text-sm font-semibold text-neutral-400 uppercase tracking-wider">
               <div className="col-span-1">Tool</div>
               <div className="col-span-1 text-center">Speed</div>
               <div className="col-span-1 text-center">Features</div>
               <div className="col-span-1 text-center">Bundle Size</div>
               <div className="col-span-1 text-center">DX</div>
               <div className="col-span-1 text-center">Presets</div>
               <div className="col-span-1 text-center">CI/CD</div>
            </div>

            {competitors.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-7 p-6 items-center border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors ${item.highlight ? 'bg-blue-500/5' : ''}`}
              >
                 <div className="col-span-1 font-bold text-lg flex items-center">
                    {item.highlight && <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />}
                    {item.name}
                 </div>
                 <div className="col-span-1 text-center text-neutral-300">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs border ${item.speed === 'Slow' ? 'border-red-500/30 text-red-400 bg-red-500/10' : item.speed === 'Fast' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' : 'border-green-500/30 text-green-400 bg-green-500/10'}`}>
                        {item.speed}
                    </span>
                 </div>
                 <div className="col-span-1 text-center text-neutral-300">{item.features}</div>
                 <div className="col-span-1 text-center text-neutral-300">{item.bundleSize}</div>
                 <div className="col-span-1 text-center text-neutral-300">{item.dx}</div>
                 <div className="col-span-1 text-center text-neutral-300">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs ${item.presets === 'Included' ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20' : 'text-neutral-500'}`}>
                        {item.presets}
                    </span>
                 </div>
                 <div className="col-span-1 text-center text-neutral-300">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs ${item.cicd === 'Auto-Config' ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20' : 'text-neutral-500'}`}>
                        {item.cicd}
                    </span>
                 </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
