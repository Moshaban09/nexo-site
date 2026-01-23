import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { fadeIn, staggerContainer } from '../../lib/animations';

const faqs = [
  {
    question: "Why should I use NEXO over Create React App?",
    answer: "Create React App is now deprecated. NEXO uses Vite, which is significantly faster and more modern. Additionally, NEXO doesn't just scaffold a 'Hello World'—it sets up your routing, styling engine (Tailwind), and UI library (shadcn/ui) automatically, saving you hours of initial configuration."
  },
  {
    question: "Can I use this for production applications?",
    answer: "Absolutely. NEXO generates standard, un-opinionated code. Once the scaffold is complete, there is no vendor lock-in; you own every file. The `SaaS` preset specifically is designed for production-ready commercial applications."
  },
  {
    question: "How does the 'Presets' system work?",
    answer: "Presets are like 'flavors' of a project. Instead of manually answering every question in the CLI, you can pass `--preset=dashboard` and NEXO will automatically select the tools best suited for a dashboard app (like adding Recharts and a Sidebar layout)."
  },
  {
    question: "Is TypeScript mandatory?",
    answer: "We strongly recommend TypeScript for the best experience and type safety, but it is not mandatory. You can choose JavaScript during the setup wizard or via the `--js` flag."
  },
  {
    question: "Why is the installation so much faster than normal?",
    answer: "NEXO employs an optimized 'Turbo-Install' strategy by combining flags like --prefer-offline, --no-audit, and --progress=false. It also automatically handles React 19 dependency trees with --legacy-peer-deps, bypassing redundant network checks and UI overhead for a 30% faster setup."
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`border rounded-xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'bg-[#161616] border-blue-500/40 shadow-lg shadow-blue-500/10' : 'bg-[#111] border-white/10 hover:border-white/20 hover:bg-[#151515]'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
            {question}
        </span>
        <span className={`p-2 rounded-full border border-white/5 bg-white/5 text-neutral-400 transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-500/10 text-blue-400 border-blue-500/20' : ''}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-base text-neutral-400 leading-relaxed max-w-3xl border-t border-white/5 mt-2">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-neutral-400">
             Common questions about the tool, the tech, and the philosophy.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
