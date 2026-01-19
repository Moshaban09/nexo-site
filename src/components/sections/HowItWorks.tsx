import { motion } from 'framer-motion';
import { Check, Code, Play, Terminal as TerminalIcon } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../lib/animations';

const steps = [
  {
    step: "Install & Run",
    code: "npm create nexo@latest",
    description: "Launch the interactive wizard directly from your terminal.",
    output: "Welcome to NEXO CLI",
    icon: TerminalIcon,
  },
  {
    step: "Configure Stack",
    code: "Selection: React > TS > Tailwind",
    description: "Choose your preferred tools from our curated list of modern libraries.",
    output: "✔ Configuration saved",
    icon: Code,
  },
  {
    step: "Scaffold",
    code: "nexo create my-app",
    description: "NEXO orchestrates the file creation, setting up routing, state, and UI seamlessly.",
    output: "Done in 1.4s",
    icon: Check,
  },
  {
    step: "Start Coding",
    code: "npm run dev",
    description: "Jump straight into a running development server with everything configured.",
    output: "Local: http://localhost:5173/",
    icon: Play,
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-transparent relative overflow-hidden">
        {/* Background Elements - moved to global CSS mostly, but keeping subtle glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
            How It Works
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-neutral-400 max-w-2xl mx-auto">
            From empty folder to production-ready app in four simple steps.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* Removed the Connecting Line as requested */}

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-sm font-bold text-neutral-400 z-20 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all shadow-lg">
                {index + 1}
              </div>

               <div className="bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 mb-6 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-neutral-200 group-hover:text-white transition-colors">{item.step}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="bg-black/50 rounded-lg p-3 border border-white/5 font-mono text-[10px] sm:text-xs overflow-hidden">
                    <div className="text-green-400 mb-1">$ {item.code}</div>
                    <div className="text-neutral-500 truncate">{item.output}</div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
