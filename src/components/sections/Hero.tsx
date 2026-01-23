import { motion } from 'framer-motion';
import { ArrowRight, Check, Copy, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../../lib/animations';
import { Button } from '../ui/Button';
import { Terminal } from '../ui/Terminal';

export const Hero = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('npm create nexo@latest');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36">
      {/* Background Gradients - Reduced intensity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 mb-6 backdrop-blur-sm shadow-blue-500/10 shadow-lg"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            v1.4.1 — Multi-PM & Performance
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Ship Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-gradient-x">
              Web Apps in Seconds
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Zero-latency I/O, AI-native context, and security-first orchestration. Scaffold React foundations in milliseconds.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5"
          >
             {/* Copy Command Button */}
            <div className="relative group bg-neutral-900 border border-white/10 rounded-full flex items-center p-1 pr-5 hover:border-blue-500/30 transition-all cursor-pointer" onClick={handleCopy}>
                <div className="bg-white/5 p-2 rounded-full mr-3 text-neutral-400 group-hover:text-white transition-colors">
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </div>
                <span className="font-mono text-sm text-neutral-300 mr-1">npm create nexo@latest</span>
            </div>

            <Link to="/docs">
              <Button size="lg" className="h-12 px-6 text-base rounded-full w-full sm:w-auto hover:scale-105 transition-transform">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Terminal Demo - Cleaned up container */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto max-w-4xl px-4 lg:px-0"
        >
          {/* Main Terminal */}
          <Terminal
            className="max-w-2xl mx-auto"
            command="npm create nexo@latest"
            output={[
              "✔ Framework › React 19 (Vite)",
              "✔ Variant › TypeScript 5.8+ (SWC)",
              "✔ Styling › Tailwind CSS v4",
              "✔ Package Manager › pnpm",
              "✔ UI Library › HeroUI (NextUI)",
              "✔ AI Context? … Yes (.nexo/ai-context.md)",
              "",
              "⚡ Zero-latency I/O: Initializing memory-resident package.json",
              "⚡ Turbo-Install: Bypassing redundant audits & fund checks",
              "✨ Done in 0.6s! Now run:",
              "  cd my-nexo-app && pnpm dev"
            ]}
          />

          {/* Floating 'Lightning Fast' Badge - Replicated from image */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1.5, duration: 0.6 }}
             className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 bg-[#1a1a1a] border border-white/10 p-5 rounded-xl shadow-2xl max-w-xs z-20 backdrop-blur-xl"
          >
             <div className="flex items-center mb-2 text-yellow-500">
                <Zap className="w-5 h-5 mr-2 fill-yellow-500/20" />
                <span className="font-bold text-white">Lightning Fast</span>
             </div>
             <p className="text-sm text-neutral-400 leading-relaxed">
                Pre-configured Vite build setup with optimized chunking and lazy loading.
             </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
