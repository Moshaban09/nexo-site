import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';
import { Sidebar } from '../Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-blue-500/30 flex flex-col">
      <div className="fixed inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] base pointer-events-none mix-blend-overlay"></div>

      <Sidebar />

      <main className="relative z-10 w-full flex-grow lg:pl-72 pt-16 lg:pt-0">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="w-full h-full"
        >
            {children}
        </motion.div>
      </main>


    </div>
  );
};
