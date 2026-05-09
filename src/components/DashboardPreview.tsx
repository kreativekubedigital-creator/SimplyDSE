import { 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  BarChart2, 
  ShieldAlert, 
  Search, 
  Bell,
  MoreHorizontal
} from 'lucide-react';
import Section from './ui/Section';
import Heading from './ui/Heading';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

const DashboardPreview = () => {
  return (
    <Section id="dashboard-preview" className="bg-bg-soft">
      <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
        <Reveal delay={0.1} className="mx-auto">
          <Badge variant="blue">Operational Intelligence</Badge>
        </Reveal>
        <Reveal delay={0.2} className="mx-auto">
          <Heading level={2} className="text-text-primary mt-6 mb-6" light>
            The Operating System <br /> <span className="font-bold">for Workplace Compliance.</span>
          </Heading>
        </Reveal>
        <Reveal delay={0.3} className="mx-auto">
          <p className="text-text-secondary text-lg">
            A high-performance interface designed for clarity, scale, and operational excellence.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.4} direction="up" distance={40} width="100%">
        <div className="relative group max-w-6xl mx-auto">
          {/* Subtle Accent Glow */}
          <div className="absolute inset-0 bg-brand-primary/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative bg-white border border-border-subtle rounded-[1.5rem] md:rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] overflow-hidden">
            {/* Top Bar */}
            <div className="h-14 border-b border-border-subtle flex items-center justify-between px-6 bg-slate-50/50 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="h-4 w-px bg-border-subtle mx-2" />
                <div className="flex items-center gap-2 text-text-secondary text-[10px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Enterprise / Dashboard
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative hidden lg:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <div className="bg-white border border-border-subtle rounded-lg w-48 h-8 px-9 text-[10px] text-slate-400 flex items-center">
                    Quick search...
                  </div>
                </div>
                <Bell className="w-4 h-4 text-slate-400" />
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-brand-primary">SA</span>
                </div>
              </div>
            </div>

            <div className="flex h-full min-h-[500px]">
              {/* Sidebar - Hidden on Mobile/Tablet */}
              <div className="w-56 border-r border-border-subtle p-4 hidden xl:block bg-slate-50/30">
                <div className="space-y-1">
                  {[
                    { icon: LayoutDashboard, label: "Overview", active: true },
                    { icon: ClipboardCheck, label: "Assessments", active: false },
                    { icon: ShieldAlert, label: "Compliance", active: false },
                    { icon: Users, label: "Employees", active: false },
                    { icon: BarChart2, label: "Reporting", active: false },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer
                        ${item.active ? 'bg-white border border-border-subtle shadow-sm text-brand-primary' : 'text-text-secondary hover:bg-white hover:text-text-primary'}`}
                    >
                      <item.icon className={`w-4 h-4 ${item.active ? 'text-brand-primary' : ''}`} />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 md:p-10 overflow-hidden bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[
                    { label: "Active Assessments", value: "1,240", trend: "+12%", color: "text-brand-primary" },
                    { label: "Risk Mitigation", value: "85%", trend: "Stable", color: "text-success" },
                    { label: "Compliance Score", value: "99.8", trend: "+0.2%", color: "text-brand-primary" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50/30 border border-border-subtle p-5 rounded-2xl">
                      <div className="text-[9px] text-text-secondary uppercase tracking-[0.2em] font-bold mb-3">{stat.label}</div>
                      <div className="flex items-end justify-between">
                        <div className={`text-2xl font-bold tracking-tight ${stat.color}`}>{stat.value}</div>
                        <div className="text-[10px] font-bold text-success bg-success/10 px-1.5 py-0.5 rounded">{stat.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Table */}
                <div className="bg-white border border-border-subtle rounded-2xl overflow-hidden shadow-sm">
                  <div className="px-6 py-4 border-b border-border-subtle flex justify-between items-center bg-slate-50/20">
                    <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.15em]">Recent Enterprise Activity</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[11px]">
                      <thead>
                        <tr className="text-text-secondary border-b border-border-subtle bg-slate-50/10">
                          <th className="px-6 py-4 font-bold uppercase tracking-wider">Employee</th>
                          <th className="px-6 py-4 font-bold uppercase tracking-wider">Department</th>
                          <th className="px-6 py-4 font-bold uppercase tracking-wider">Risk Level</th>
                          <th className="px-6 py-4 font-bold uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-text-secondary divide-y divide-border-subtle/50">
                        {[
                          { name: "John Doe", dept: "Operations", risk: "Low", status: "Verified", color: "bg-green-100 text-green-700" },
                          { name: "Sarah Smith", dept: "Legal", risk: "Med", status: "Review", color: "bg-amber-100 text-amber-700" },
                          { name: "Michael Roe", dept: "Finance", risk: "High", status: "Action", color: "bg-red-100 text-red-700" },
                          { name: "Emma Wilson", dept: "Engineering", risk: "Low", status: "Verified", color: "bg-green-100 text-green-700" }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 font-bold text-text-primary whitespace-nowrap">{row.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.dept}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${row.color}`}>
                                {row.risk}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="flex items-center gap-1.5">
                                <div className={`w-1.5 h-1.5 rounded-full ${row.status === 'Verified' ? 'bg-green-500' : 'bg-amber-500'}`} />
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default DashboardPreview;
