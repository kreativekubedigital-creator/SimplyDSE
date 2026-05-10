import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './ui/Reveal';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-border-subtle overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-bold text-text-primary tracking-tight group-hover:text-brand-primary transition-colors">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-border-strong flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-45 bg-text-primary border-text-primary text-white' : 'rotate-0'}`}>
          <Plus className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="pb-8 text-text-secondary leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does SimplyDSE integrate with our existing HR software?",
      answer: "We offer native integrations with Workday, BambooHR, and Microsoft 365. For custom stacks, our REST API allows for seamless data synchronization and automated user onboarding."
    },
    {
      question: "Is clinical oversight included in the platform?",
      answer: "Yes. SimplyDSE provides built-in clinical review workflows. High-risk assessments can be automatically routed to our network of clinical experts or your own internal specialists for immediate review."
    },
    {
      question: "How do you handle multi-jurisdictional compliance?",
      answer: "Our engine is pre-configured with local regulatory frameworks for over 40 countries. The platform automatically adjusts assessment parameters based on the employee's legal work location."
    },
    {
      question: "What is your typical implementation timeline?",
      answer: "Enterprise organizations typically go live within 2-4 weeks. This includes HR sync, custom parameter configuration, and administrator training."
    }
  ];

  return (
    <section id="faq" className="bg-bg-light">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <Reveal delay={0.1}>
              <span className="badge-enterprise">Knowledge Base</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-6 tracking-tight leading-[1.1]">
                Critical queries, <br /><span className="text-brand-primary">answered.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:w-2/3 border-t border-border-subtle">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={0.3 + i * 0.1} width="100%">
                <FAQItem 
                  {...faq} 
                  isOpen={openIndex === i} 
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)} 
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
