import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
};
