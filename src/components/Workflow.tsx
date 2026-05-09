import { UserPlus, Send, Activity, ShieldCheck } from 'lucide-react';
import Section from './ui/Section';
import Heading from './ui/Heading';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

const steps = [
  {
    title: "Organization Setup",
    description: "Configure your team structure and compliance parameters in minutes.",
    icon: UserPlus,
    color: "bg-blue-50 text-brand-primary"
  },
  {
    title: "Automated Dispatch",
    description: "System automatically distributes assessments to your workforce.",
    icon: Send,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Real-time Analysis",
    description: "Monitor risk levels and health status through your global dashboard.",
    icon: Activity,
    color: "bg-slate-50 text-text-secondary"
  },
  {
    title: "Resolution Flow",
    description: "Close compliance gaps with automated corrective actions.",
    icon: ShieldCheck,
    color: "bg-green-50 text-success"
  }
];

const Workflow = () => {
  return (
    <Section id="workflow" className="bg-white">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <Reveal delay={0.1} className="mx-auto">
          <Badge variant="blue">The Operating Model</Badge>
        </Reveal>
        <Reveal delay={0.2} className="mx-auto">
          <Heading level={2} className="text-text-primary mt-6 mb-6" light>
            Modern compliance <br /> <span className="font-bold">in four simple steps.</span>
          </Heading>
        </Reveal>
      </div>

      <div className="relative">
        {/* Connection Line - Hidden on Mobile */}
        <div className="absolute top-[40px] left-0 w-full h-[1px] bg-border-subtle hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {steps.map((step, i) => (
            <Reveal key={i} delay={0.1 * i} direction="up" width="100%">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-8 shadow-sm border border-white relative z-10 hover:scale-105 transition-transform duration-500`}>
                  <step.icon className="w-9 h-9" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border border-border-subtle flex items-center justify-center text-[10px] font-bold text-text-secondary shadow-sm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 tracking-tight">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-medium">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Workflow;
