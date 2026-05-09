import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Heading from './ui/Heading';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

const Security = () => {
  return (
    <Section id="security" className="bg-bg-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <Reveal delay={0.1}>
            <Badge variant="blue">Enterprise Security</Badge>
          </Reveal>
          <Reveal delay={0.2}>
            <Heading level={2} className="text-text-primary mt-6 mb-6" light>
              Bank-grade security for your <span className="font-bold">compliance data.</span>
            </Heading>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-text-secondary text-lg mb-12 leading-relaxed">
              We prioritize data protection with military-grade encryption, role-based access controls, and full audit logs.
            </p>
          </Reveal>

          <div className="space-y-10">
            {[
              { icon: Lock, title: "256-bit Encryption", desc: "Your data is encrypted both at rest and in transit using industry-standard protocols." },
              { icon: Eye, title: "Full Audit Logs", desc: "Every assessment and action is tracked and logged for complete transparency." },
              { icon: CheckCircle2, title: "Global Compliance", desc: "We adhere to the highest data protection standards, including GDPR and SOC2." }
            ].map((item, i) => (
              <Reveal key={i} delay={0.4 + (i * 0.1)} direction="left">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-border-subtle shadow-sm">
                    <item.icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg mb-1.5">{item.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Security Visual Anchor */}
        <div className="order-1 lg:order-2 flex justify-center items-center py-12">
          <Reveal delay={0.5} direction="right" width="100%">
            <div className="relative p-12"> {/* Wrapper with padding to prevent clipping of pulse */}
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-primary/10 blur-[140px] rounded-full opacity-40 pointer-events-none" />
              
              {/* Main Card */}
              <div className="card-premium w-[360px] h-[360px] md:w-[420px] md:h-[420px] flex flex-col items-center justify-center relative bg-white overflow-visible">
                
                {/* Centralized Icon Group */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative w-36 h-36 rounded-full bg-blue-50/50 flex items-center justify-center mb-12">
                    <ShieldCheck className="w-20 h-20 text-brand-primary relative z-10" />
                    
                    {/* Pulsing rings - absolute to center of circle */}
                    <div className="absolute inset-0 rounded-full border-4 border-brand-primary/20 animate-ping" />
                    <div className="absolute inset-2 rounded-full border-2 border-brand-primary/10 animate-pulse" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-text-primary tracking-tighter mb-2">SimplySecure™</div>
                    <div className="text-[11px] text-text-secondary uppercase tracking-[0.4em] font-bold opacity-60">Encrypted Workspace</div>
                  </div>
                </div>
                
                {/* Visual Scanner Base */}
                <div className="w-full px-12 pb-8">
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                    <div className="h-full w-2/3 bg-brand-primary/20 rounded-full animate-scan" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Security;
