import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity, 
  Users, 
  TrendingUp,
  LayoutGrid,
  ClipboardList,
  Settings,
  Bell
} from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-[800px] perspective-[2000px]">
      <motion.div 
        initial={{ opacity: 0, x: 100, rotateY: -15 }}
        animate={{ opacity: 1, x: 0, rotateY: -12 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-20 bg-white rounded-2xl border border-border-strong shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden flex h-[520px]"
      >
        {/* Compact Sidebar */}
        <div className="w-48 border-r border-border-subtle bg-slate-50/50 p-4 flex flex-col gap-6">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-7 h-7 rounded-lg bg-text-primary flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-text-primary uppercase tracking-wider">DSE Core</span>
          </div>
          
          <nav className="flex-1 space-y-1">
            {[
              { icon: LayoutGrid, label: 'Dashboard', active: true },
              { icon: Users, label: 'Risk Map' },
              { icon: ClipboardList, label: 'Audits' },
              { icon: Settings, label: 'Configs' },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-bold transition-all ${
                  item.active 
                    ? 'bg-white text-text-primary shadow-sm border border-border-subtle' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          <header className="h-14 border-b border-border-subtle px-6 flex items-center justify-between bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold text-text-primary uppercase tracking-widest">Site: London HQ</span>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="w-3.5 h-3.5 text-text-muted" />
              <div className="w-6 h-6 rounded-full bg-slate-100 border border-border-subtle" />
            </div>
          </header>

          <main className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Health Score', value: '94/100', color: 'text-emerald-500' },
                { label: 'Pending Reviews', value: '12', color: 'text-amber-500' },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-border-subtle bg-slate-50/30">
                  <p className="text-xl font-bold text-text-primary tracking-tight">{m.value}</p>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.15em]">Live Assessments</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Sarah J.', location: 'London, UK', status: 'Completed', color: 'bg-emerald-50 text-emerald-600' },
                  { name: 'Marcus K.', location: 'Berlin, DE', status: 'In Progress', color: 'bg-amber-50 text-amber-600' },
                  { name: 'Elena R.', location: 'Madrid, ES', status: 'Completed', color: 'bg-emerald-50 text-emerald-600' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-1 px-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-border-subtle flex items-center justify-center font-bold text-[10px] text-text-primary">
                        {row.name[0]}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-text-primary">{row.name}</div>
                        <div className="text-[9px] text-text-muted">{row.location}</div>
                      </div>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-[9px] font-bold ${row.color}`}>
                      {row.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </motion.div>

      {/* Layered Floating Cards */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -top-10 -right-16 z-30 w-56 glass-premium p-5 rounded-2xl border-border-strong/50 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <span className="text-[9px] font-black uppercase tracking-widest text-text-primary">Risk Intel</span>
        </div>
        <div className="h-12 flex items-end gap-1">
          {[30, 60, 45, 80, 55, 90].map((h, i) => (
            <div key={i} className="flex-1 bg-brand-primary/10 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute -bottom-16 -left-16 z-40 w-72 glass-premium p-6 rounded-3xl border-border-strong shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)]"
      >
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-[13px] font-black text-text-primary tracking-tight">5,232+ Assessments</div>
              <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Completed Globally</div>
            </div>
          </div>
          <div className="h-px bg-border-subtle w-full" />
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-[13px] font-black text-text-primary tracking-tight">96% Completion</div>
              <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Operational Rate</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HeroVisuals = () => {
  return (
    <div className="w-full flex justify-end">
      <DashboardMockup />
    </div>
  );
};

export default HeroVisuals;
