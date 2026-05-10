import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';
import { Activity, Shield, Search, Bell, MoreHorizontal } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="bg-slate-50 border-y border-border-subtle">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Content Side */}
          <div className="flex-1 space-y-8">
            <Reveal delay={0.1}>
              <span className="badge-enterprise">Enterprise Control</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-5xl md:text-6xl font-bold text-text-primary tracking-tight leading-[1.05] text-balance">
                Your entire risk landscape, <br className="hidden md:block" />
                <span className="text-brand-primary">in one view.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-xl text-text-secondary leading-relaxed font-medium opacity-80">
                A unified command center for health and safety leads. Monitor compliance rates, 
                track intervention progress, and generate board-level reports with unparalleled clarity.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              {[
                { icon: Shield, label: "Audit-Ready", sub: "SOC2 Compliant" },
                { icon: Activity, label: "Real-time", sub: "Live data sync" },
              ].map((item, i) => (
                <Reveal key={i} delay={0.4 + i * 0.1}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-border-strong flex items-center justify-center text-brand-primary shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{item.label}</p>
                      <p className="text-xs text-text-muted">{item.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Interface Side - High Fidelity CSS Mockup */}
          <div className="flex-1 w-full perspective-1000">
            <Reveal delay={0.4} direction="up">
              <motion.div 
                whileHover={{ rotateY: -1, rotateX: 1, scale: 1.01 }}
                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                className="card-enterprise !p-0 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
              >
                {/* Dashboard Header */}
                <div className="border-b border-border-subtle p-4 flex items-center justify-between bg-slate-50/50 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>
                    <div className="h-4 w-px bg-border-subtle mx-2" />
                    <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Enterprise / Overview</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Search className="w-4 h-4 text-text-muted" />
                    <Bell className="w-4 h-4 text-text-muted" />
                    <div className="w-7 h-7 rounded-full bg-slate-200" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Compliance Rate", val: "94.2%", color: "text-brand-primary" },
                      { label: "Active Audits", val: "12", color: "text-text-primary" },
                      { label: "Risk Alerts", val: "03", color: "text-danger" },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50/50 border border-border-subtle">
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className={`text-xl font-bold ${stat.color}`}>{stat.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Table area */}
                  <div className="bg-white border border-border-subtle rounded-2xl overflow-hidden shadow-sm">
                    <div className="px-5 py-3 border-b border-border-subtle flex justify-between items-center bg-slate-50/20">
                      <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-widest">Recent Activity</h3>
                      <MoreHorizontal className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="p-4 space-y-4">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-slate-100" />
                          <div className="flex-1 space-y-2">
                            <div className="h-2 w-32 bg-slate-100 rounded-full" />
                            <div className="h-1.5 w-24 bg-slate-50 rounded-full" />
                          </div>
                          <div className="w-16 h-4 bg-slate-50 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
