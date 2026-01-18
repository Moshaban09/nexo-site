import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../../lib/animations';
import { Button } from '../ui/Button';
import { Terminal } from '../ui/Terminal';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            v1.1 — Presets & Dry Run Mode
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Build Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-gradient-x">
              React Apps in Seconds
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The production-ready scaffolding CLI. TypeScript, Tailwind v4, custom components, and best practices baked in properly.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/docs">
              <Button size="lg" className="w-full sm:w-auto group shadow-lg shadow-blue-500/25">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a
              href="https://github.com/Moshaban09/create-nexo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <GithubIcon className="mr-2 w-4 h-4" />
                View on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Terminal Demo */}
        <div className="relative mx-auto max-w-4xl">
          <Terminal
            command="npm create nexo@latest"
            output={[
              "✔ Project name ... my-awesome-app",
              "✔ Select framework › React (Vite)",
              "✔ Select variant › TypeScript + React Compiler ⭐",
              "✔ Add Tailwind CSS v4? … Yes",
              "✔ Select UI Library › shadcn/ui",
              "✔ Add State Management? › Zustand",
              "✔ Include CI/CD workflows? … Yes",
              " ",
              "⚡ Scaffolding project in ./my-awesome-app...",
              "✨ Done in 2.3s! Now run:",
              "  cd my-awesome-app && npm install && npm run dev"
            ]}
          />

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="p-4 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-xl max-w-xs">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="font-semibold text-sm">Lightning Fast</span>
              </div>
              <p className="text-xs text-neutral-400">
                Pre-configured Vite build setup with optimized chunking and lazy loading.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
