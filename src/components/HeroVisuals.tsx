import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, CheckCircle2, AlertTriangle, Activity } from 'lucide-react';

const FloatingCard = ({ children, className, delay = 0, yOffset = 20 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset }}
    animate={{ 
      opacity: 1, 
      y: 0,
    }}
    transition={{ 
      duration: 1.4, 
      delay, 
      ease: [0.23, 1, 0.32, 1] 
    }}
  >
    <motion.div
      animate={{ 
        y: [0, -6, 0],
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay * 0.8
      }}
      className={`absolute glass-premium p-4 rounded-2xl shadow-2xl border border-white/50 pointer-events-none hidden lg:block ${className}`}
    >
      {children}
    </motion.div>
  </motion.div>
);

const HeroVisuals = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {/* 1. Compliance Score Card */}
      <FloatingCard className="top-[20%] left-[8%] w-48" delay={0.6} yOffset={40}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Health Status</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-2xl font-bold text-text-primary tracking-tighter">98.4%</span>
            <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +2.1%
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "98.4%" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-full bg-emerald-500" 
            />
          </div>
        </div>
      </FloatingCard>

      {/* 2. Global Assessment Feed */}
      <FloatingCard className="top-[65%] left-[5%] w-56" delay={0.8} yOffset={50}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Live Assessments</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
        <div className="space-y-3">
          {[
            { user: "Sarah J.", loc: "London, UK", status: "Completed" },
            { user: "Marcus K.", loc: "Berlin, DE", status: "In Progress" },
            { user: "Elena R.", loc: "Madrid, ES", status: "Completed" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-1 border-b border-border-subtle last:border-0">
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold">
                {item.user[0]}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-text-primary leading-none">{item.user}</p>
                <p className="text-[9px] text-text-muted">{item.loc}</p>
              </div>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </FloatingCard>

      {/* 3. Risk Alert Widget */}
      <FloatingCard className="top-[25%] right-[8%] w-52" delay={1} yOffset={30}>
        <div className="flex items-center gap-3 text-amber-600 mb-3">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Risk Mitigation</span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed mb-4 font-medium">
          Flagged <span className="text-text-primary font-bold">4 high-risk</span> workstations in North American HQ.
        </p>
        <button className="w-full py-2 bg-text-primary text-white text-[10px] font-bold rounded-lg hover:bg-slate-800 transition-colors">
          Initialize Response
        </button>
      </FloatingCard>

      {/* 4. Reporting Graph Card */}
      <FloatingCard className="top-[60%] right-[6%] w-64" delay={1.2} yOffset={60}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-brand-primary" />
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Operational Insight</span>
          </div>
          <div className="text-[9px] font-bold text-text-primary bg-slate-100 px-2 py-0.5 rounded-md">Q3 2026</div>
        </div>
        <div className="h-24 flex items-end gap-1.5 pb-2">
          {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: 1.5 + (i * 0.05) }}
              className="flex-1 bg-brand-primary/10 rounded-t-sm relative group"
            >
              <div className="absolute inset-x-0 bottom-0 bg-brand-primary h-1/2 opacity-20 group-hover:opacity-40 transition-opacity" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-border-subtle">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200" />
            ))}
            <div className="w-5 h-5 rounded-full border-2 border-white bg-brand-light text-brand-primary text-[8px] flex items-center justify-center font-bold">+12</div>
          </div>
          <span className="text-[9px] font-bold text-text-muted tracking-tight">Active Analysts</span>
        </div>
      </FloatingCard>

      {/* 5. Minimal Check Notification */}
      <FloatingCard className="top-[45%] left-[2%] w-40" delay={1.4} yOffset={20}>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-primary leading-tight">Audit Ready</p>
            <p className="text-[8px] text-text-muted">SOC2 Certified</p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
};

export default HeroVisuals;
