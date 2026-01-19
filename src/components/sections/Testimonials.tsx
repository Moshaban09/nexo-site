import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../lib/animations';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior Frontend Dev",
    company: "TechFlow",
    quote: "NEXO saved me hours on my last hackathon. The presets are spot-on and the architecture is exactly how I would set it up myself.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Indie Hacker",
    company: "Self-Employed",
    quote: "Finally, a CLI that sets up shadcn/ui correctly without me having to fiddle with config files manually for an hour.",
    rating: 5
  },
  {
    name: "Alex Rivera",
    role: "Tech Lead",
    company: "StartUp Inc",
    quote: "The 'dry-run' feature is a lifesaver for checking templates before committing to them. Great attention to DX.",
    rating: 4
  },
  {
    name: "Emily Zhang",
    role: "Fullstack Developer",
    company: "Creative Agency",
    quote: "I use the component generator daily. It enforces our team's folder structure perfectly and standardizes our codebase.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
            Loved by Developers
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-neutral-400 max-w-2xl mx-auto">
             Join thousands of developers building efficiently with NEXO.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 relative hover:bg-neutral-900/80 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />

              <div className="flex space-x-1 mb-6">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className={`w-5 h-5 ${i < item.rating ? 'text-yellow-500 fill-yellow-500' : 'text-neutral-700'}`} />
                 ))}
              </div>

              <p className="text-lg text-neutral-300 leading-relaxed mb-6 font-medium">
                "{item.quote}"
              </p>

              <div className="flex items-center">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {item.name.charAt(0)}
                 </div>
                 <div className="ml-4">
                    <h4 className="text-white font-semibold">{item.name}</h4>
                    <p className="text-sm text-neutral-500">{item.role} @ {item.company}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
