import { motion } from 'framer-motion';
import React from 'react';

interface TerminalProps {
  command?: string;
  output?: string[];
}

export const Terminal: React.FC<TerminalProps> = ({
  command = "npm create nexo",
  output = []
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-lg mx-auto overflow-hidden rounded-lg bg-[#1e1e1e] border border-neutral-800 shadow-2xl shadow-blue-900/10"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-xs text-neutral-400 font-mono">
          bash
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-neutral-300 min-h-[160px]">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-white relative">
            {command}
            <motion.span
               animate={{ opacity: [0, 1, 0] }}
               transition={{ repeat: Infinity, duration: 0.8 }}
               className="inline-block w-2 h-4 bg-white ml-1 align-middle"
            />
          </span>
        </div>

        {output.length > 0 && (
          <div className="mt-2 space-y-1 text-neutral-400">
            {output.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (i * 0.2) }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
