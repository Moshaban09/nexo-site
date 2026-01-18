import { motion } from 'framer-motion';
import { Box, Command, Database, Globe, Layers, LockKeyhole, Palette, Signpost, Zap } from 'lucide-react';
import { fadeIn } from '../../lib/animations';

import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.5 }}
    className={`p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-[#1a1a1a] group ${className}`}
  >
    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Zero configuration.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Stop wasting time on webpack configs. NEXO provides a battle-tested foundation for your next big idea.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Large Card 1 */}
          <FeatureCard
            title="Lightning Fast"
            description="Built on top of Vite and SWC. Experience sub-millisecond server starts and instant HMR updates. Your development flow has never been this smooth."
            icon={Zap}
            className="md:col-span-2 md:row-span-1"
          />

          {/* Card 2 */}
          <FeatureCard
            title="Clean Architecture"
            description="Choose between Feature-Sliced Design, Atomic Design, or a simple feature-based structure."
            icon={Layers}
            className="md:col-span-1"
             delay={0.1}
          />

           {/* Card 3 */}
           <FeatureCard
            title="Type Safe"
            description="TypeScript strict mode enabled by default. Zod validation pre-configured."
            icon={Box}
            className="md:col-span-1"
            delay={0.2}
          />

          {/* Large Card 4 */}
          <FeatureCard
            title="Interactive CLI"
            description="A beautiful terminal interface guides you through every decision. Generate components, hooks, and pages with a single command."
            icon={Command}
            className="md:col-span-2"
            delay={0.3}
          />

          {/* Card 5 */}
          <FeatureCard
            title="Modern Styling"
            description="Tailwind CSS v4 is the default engine. Also supports CSS Modules and Sass."
            icon={Palette}
            className="md:col-span-1"
            delay={0.4}
          />

          {/* Card 6 */}
          <FeatureCard
            title="State Management"
            description="Pre-wired templates for Zustand, Redux Toolkit, or Jotai. Pick your poison."
            icon={Database}
            className="md:col-span-1"
            delay={0.5}
          />

          {/* Card 7 - Routing */}
          <FeatureCard
            title="Flexible Routing"
            description="Choose between React Router or TanStack Router. Type-safe navigation out of the box."
            icon={Signpost}
            className="md:col-span-1"
            delay={0.6}
          />

          {/* Card 8 - i18n */}
          <FeatureCard
            title="i18n Ready"
            description="Internationalization with i18next or Lingui. Go global from day one."
            icon={Globe}
            className="md:col-span-1"
            delay={0.7}
          />

          {/* Card 9 - Auth */}
          <FeatureCard
            title="Auth Templates"
            description="JWT authentication and Auth.js patterns pre-built for secure user management."
            icon={LockKeyhole}
            className="md:col-span-2"
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};
