import { motion } from 'framer-motion';
import React from 'react';

interface TerminalProps {
  command?: string;
  output?: string[];
  className?: string; // Add className prop support
}

export const Terminal: React.FC<TerminalProps> = ({
  command = "npm create nexo",
  output = [],
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative w-full overflow-hidden rounded-xl bg-[#1e1e1e] shadow-2xl shadow-black/50 ring-1 ring-white/10 ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#fa5252]" />
          <div className="w-3 h-3 rounded-full bg-[#fcc419]" />
          <div className="w-3 h-3 rounded-full bg-[#40c057]" />
        </div>
        <div className="absolute left-0 right-0 text-center text-xs text-neutral-500 font-mono pointer-events-none">
          bash
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-[13px] md:text-sm leading-relaxed text-neutral-300 min-h-[200px]">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-[#40c057] font-bold">➜</span>
          <span className="text-blue-400 font-bold">~</span>
          <span className="text-white relative font-medium">
            {command}
            <motion.span
               animate={{ opacity: [0, 1, 0] }}
               transition={{ repeat: Infinity, duration: 0.8 }}
               className="inline-block w-2.5 h-4 bg-white/50 ml-1 align-bottom"
            />
          </span>
        </div>

        {output.length > 0 && (
          <div className="space-y-1.5 text-neutral-400">
            {output.map((line, i) => {
              // Simple syntax highlighting heuristic
              const isSuccess = line.startsWith('✔') || line.startsWith('✨') || line.includes('Done');
              const isInfo = line.startsWith('⚡') || line.startsWith('?');
              const isCommand = line.trim().startsWith('cd ') || line.trim().startsWith('npm ');
              const hasHighlight = line.includes('⭐');

              let content = <span dangerouslySetInnerHTML={{ __html: line }} />; // Fallback

              if (isSuccess) {
                 const [icon, ...rest] = line.split(' ');
                 content = (
                    <>
                       <span className="text-[#40c057] mr-1">{icon}</span>
                       <span>{rest.join(' ')}</span>
                    </>
                 );
              } else if (isInfo) {
                  const [icon, ...rest] = line.split(' ');
                  content = (
                      <>
                          <span className="text-yellow-400 mr-1">{icon}</span>
                          <span>{rest.join(' ')}</span>
                      </>
                  );
              } else if (isCommand) {
                  content = <span className="text-white opacity-80">{line}</span>;
              }

              if (hasHighlight) {
                  // Replace star with a yellow star icon span
                  const parts = line.split('⭐');
                  content = (
                      <>
                        <span>{parts[0]}</span>
                        <span className="text-yellow-400 ml-1">★</span>
                      </>
                  );
                  if (line.startsWith('✔')) {
                      // Handle the checkmark case combined with star
                       const [icon, ...rest] = parts[0].split(' ');
                       content = (
                          <>
                             <span className="text-[#40c057] mr-2">{icon}</span>
                             <span>{rest.join(' ')}</span>
                             <span className="text-yellow-400 ml-1">★</span>
                          </>
                       );
                  }
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="flex items-start"
                >
                  {content}
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};
