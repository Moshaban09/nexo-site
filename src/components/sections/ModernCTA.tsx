import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const ModernCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Ready to ship your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            next big thing?
          </span>
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-xl text-neutral-400 mb-10"
        >
          Join thousands of developers building faster with Nexo.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
        >
            <Link to="/docs">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40">
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};
