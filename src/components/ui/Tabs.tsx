import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

const Tabs = ({ tabs, activeTab, onChange, className = "" }: TabsProps) => {
  return (
    <div className={`flex gap-8 border-b border-border-subtle ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`pb-4 text-sm font-bold tracking-tight transition-all relative ${
            activeTab === tab.id ? 'text-brand-primary' : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div 
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
