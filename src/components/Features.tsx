import { Zap, Globe, BarChart3, Cpu } from 'lucide-react';
import Reveal from './ui/Reveal';

const Features = () => {
  return (
    <section id="features" className="bg-white">
      <div className="section-container">
        <div className="mb-24 max-w-3xl">
          <Reveal delay={0.1}>
            <span className="badge-enterprise">Platform Architecture</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-text-primary mt-6 tracking-tight leading-[0.95] text-balance">
              Engineered for <br className="hidden md:block" />
              <span className="text-brand-primary text-stroke-primary text-transparent md:text-current">operational mastery.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl text-text-secondary mt-8 leading-relaxed max-w-2xl font-medium opacity-80">
              The SimplyDSE ecosystem replaces fragmented safety processes with a unified 
              operational intelligence layer.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-min">
          {/* Featured Large Card: Autonomous Control */}
          <div className="md:col-span-12 lg:col-span-8">
            <Reveal delay={0.1} direction="up" width="100%" hFull>
              <div className="card-enterprise-dark h-full min-h-[500px] flex flex-col md:flex-row gap-12 group overflow-hidden">
                <div className="flex-1 flex flex-col justify-between py-4">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
                      Autonomous <br /> Compliance Ops.
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                      Our intelligence engine handles the heavy lifting—from auto-enrollment to 
                      risk-based clinical escalations.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-8">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                          {i}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">3-Step Orchestration</p>
                  </div>
                </div>
                
                {/* Visual UI Element */}
                <div className="flex-1 relative mt-8 md:mt-0">
                  <div className="absolute top-0 right-0 w-[140%] h-[140%] bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/4 -translate-y-1/4" />
                  <div className="relative z-10 bg-slate-800/50 border border-white/5 rounded-2xl p-6 shadow-2xl h-full translate-y-12 translate-x-12 group-hover:translate-y-8 group-hover:translate-x-8 transition-transform duration-700">
                    <div className="space-y-6">
                      <div className="h-4 w-1/2 bg-slate-700 rounded-full animate-pulse" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 rounded-xl bg-slate-700/50 border border-white/5 p-4 space-y-3">
                          <div className="h-2 w-full bg-slate-600 rounded-full" />
                          <div className="h-2 w-2/3 bg-slate-600 rounded-full opacity-50" />
                          <div className="h-8 w-8 rounded-lg bg-brand-primary/20 mt-2" />
                        </div>
                        <div className="h-24 rounded-xl bg-slate-700/50 border border-white/5 p-4 space-y-3">
                          <div className="h-2 w-full bg-slate-600 rounded-full" />
                          <div className="h-2 w-1/3 bg-slate-600 rounded-full opacity-50" />
                          <div className="h-8 w-8 rounded-lg bg-emerald-500/20 mt-2" />
                        </div>
                      </div>
                      <div className="h-40 rounded-xl bg-slate-700/30 border border-white/5 p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="h-3 w-32 bg-slate-600 rounded-full" />
                          <div className="h-3 w-12 bg-brand-primary rounded-full" />
                        </div>
                        <div className="space-y-4">
                          {[1,2].map(i => (
                            <div key={i} className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-600" />
                              <div className="flex-1 space-y-2">
                                <div className="h-2 w-full bg-slate-600 rounded-full" />
                                <div className="h-1.5 w-1/2 bg-slate-600 rounded-full opacity-40" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Integration Card */}
          <div className="md:col-span-6 lg:col-span-4">
            <Reveal delay={0.2} direction="up" width="100%" hFull>
              <div className="card-enterprise h-full bg-slate-50 border-0 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-border-subtle group-hover:border-brand-primary transition-colors duration-500">
                    <Zap className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary tracking-tight">Ecosystem Sync</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Native integrations with Workday, BambooHR, and Microsoft Teams out of the box.
                  </p>
                </div>
                <div className="pt-12 flex flex-wrap gap-3">
                  {['Workday', 'Okta', 'Slack', 'Teams'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white border border-border-subtle text-[10px] font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Global Card */}
          <div className="md:col-span-6 lg:col-span-4">
            <Reveal delay={0.3} direction="up" width="100%" hFull>
              <div className="card-enterprise h-full flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center">
                    <Globe className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary tracking-tight">Global Scale</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Regional compliance logic for 40+ countries. Multi-language interface for distributed teams.
                  </p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-light rounded-full blur-3xl opacity-50" />
              </div>
            </Reveal>
          </div>

          {/* Intelligent Insights Card */}
          <div className="md:col-span-12 lg:col-span-8">
            <Reveal delay={0.4} direction="up" width="100%" hFull>
              <div className="card-enterprise h-full flex flex-col md:flex-row gap-12 items-center bg-white border border-border-subtle group">
                <div className="flex-1 space-y-6 order-2 md:order-1">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary tracking-tight">Operational Insights</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Move beyond simple charts. Our intelligence layer identifies hidden risk trends 
                    before they become organizational liabilities.
                  </p>
                  <div className="pt-4 flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-emerald-600">94.2%</span>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Audit Score</span>
                    </div>
                    <div className="w-px h-10 bg-border-subtle" />
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-text-primary">0%</span>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Compliance Gap</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full h-full min-h-[300px] rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 order-1 md:order-2">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Data Analytics" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

