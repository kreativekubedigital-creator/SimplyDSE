import { ClipboardCheck, UserPlus, FileSearch, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';

const Workflow = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Seamless Onboarding",
      description: "Sync your entire organization in minutes via HR integrations or bulk CSV. Assign owners automatically.",
      step: "01"
    },
    {
      icon: ClipboardCheck,
      title: "Distributed Assessments",
      description: "Employees complete self-led, intelligent assessments. The system flags real-world risks instantly.",
      step: "02"
    },
    {
      icon: FileSearch,
      title: "Automated Review",
      description: "AI-powered scoring prioritizes high-risk cases for immediate clinical or management review.",
      step: "03"
    },
    {
      icon: CheckCircle2,
      title: "Closed-Loop Resolution",
      description: "Track interventions and verified resolutions. Audit-ready reports generated with one click.",
      step: "04"
    }
  ];

  return (
    <section id="workflow" className="bg-white">
      <div className="section-container">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <span className="badge-enterprise">Operational Cycle</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary mt-6 tracking-tight leading-[1.05] text-balance">
              How SimplyDSE drives <br className="hidden md:block" />
              <span className="text-brand-primary">measurable safety.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-32">
          {steps.map((step, i) => (
            <Reveal key={i} delay={0.1} direction={i % 2 === 0 ? "left" : "right"} width="100%">
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                {/* Visual Step Number / Icon */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="text-[12rem] font-black text-slate-50 absolute -top-24 -left-12 pointer-events-none select-none">
                      {step.step}
                    </div>
                    <div className="w-24 h-24 rounded-3xl bg-white border border-border-subtle shadow-lg flex items-center justify-center relative z-10 group-hover:border-brand-primary/20 transition-colors duration-500">
                      <step.icon className="w-10 h-10 text-brand-primary" />
                    </div>
                    {/* Connection Line */}
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 h-32 w-px bg-gradient-to-b from-border-strong to-transparent" />
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-[1.5] space-y-6">
                  <div className="badge-enterprise inline-block mb-2">Phase {step.step}</div>
                  <h3 className="text-4xl font-bold text-text-primary tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xl text-text-secondary leading-relaxed max-w-xl font-medium opacity-80">
                    {step.description}
                  </p>
                  <div className="pt-4 flex items-center gap-4 text-sm font-bold text-brand-primary group cursor-pointer">
                    View Technical Requirements
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
