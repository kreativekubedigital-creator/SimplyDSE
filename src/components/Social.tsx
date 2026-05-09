import { motion } from 'framer-motion';
import Section from './ui/Section';

const logos = [
  "Microsoft", "Google", "Amazon", "Meta", "Adobe", "Salesforce"
];

const Social = () => {
  return (
    <Section className="py-12 border-y border-white/5 bg-white/50">
      <div className="text-center mb-8">
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
          Trusted by the world's most progressive organizations
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale group">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, opacity: 1, filter: 'grayscale(0)' }}
            className="text-xl font-bold text-zinc-900 cursor-default transition-all"
          >
            {logo}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Social;
