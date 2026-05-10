import Reveal from './ui/Reveal';
import { TrendingUp, Users, ShieldCheck, Activity, ArrowUpRight } from 'lucide-react';

const stats = [
  { 
    label: "Compliance Coverage", 
    value: "99.94%", 
    trend: "+0.12%",
    status: "Optimal",
    icon: ShieldCheck,
    color: "text-emerald-500",
    chart: [30, 40, 35, 50, 45, 60, 55, 70]
  },
  { 
    label: "Assessments Velocity", 
    value: "248k", 
    trend: "+12.4%",
    status: "Accelerated",
    icon: Activity,
    color: "text-brand-primary",
    chart: [20, 25, 40, 30, 45, 50, 65, 80]
  },
  { 
    label: "Org. Resilience", 
    value: "94.2", 
    trend: "+2.1",
    status: "Stable",
    icon: Users,
    color: "text-slate-900",
    chart: [50, 52, 48, 55, 58, 60, 62, 65]
  },
  { 
    label: "Global Uptime", 
    value: "100%", 
    trend: "Static",
    status: "Verified",
    icon: TrendingUp,
    color: "text-emerald-500",
    chart: [80, 80, 80, 80, 80, 80, 80, 80]
  }
];

const MiniChart = ({ data, color }: { data: number[], color: string }) => {
  const max = Math.max(...data);
  const points = data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d / max) * 100}`).join(' ');
  
  return (
    <svg className="w-full h-8 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={color}
        points={points}
      />
    </svg>
  );
};

const Metrics = () => {
  return (
    <section className="bg-white border-y border-border-subtle py-24">
      <div className="section-container">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <span className="badge-enterprise">Operational Intelligence</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-6 tracking-tight">
              Real-time compliance <span className="text-brand-primary">metrics.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={0.1 * i} direction="up" hFull>
              <div className="card-enterprise h-full group hover:bg-slate-50/50">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-2.5 rounded-xl bg-slate-50 border border-border-subtle ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-600">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.trend}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border-subtle space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-text-muted uppercase tracking-widest">Performance</span>
                    <span className="text-emerald-600 uppercase tracking-widest">{stat.status}</span>
                  </div>
                  <MiniChart data={stat.chart} color={stat.color} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
