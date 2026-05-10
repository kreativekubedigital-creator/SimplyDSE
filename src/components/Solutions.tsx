import Reveal from './ui/Reveal';
import { ArrowRight, Globe, BarChart2, Briefcase } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      badge: "Empowering Teams",
      title: "Built for the modern, distributed workforce.",
      description: "Whether your team is in a central HQ or spread across continents, SimplyDSE provides a unified platform for risk management. Our collaboration tools allow global teams to stay synchronized on compliance standards and action plans.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=800&auto=format&fit=crop",
      icon: Globe,
      reverse: false
    },
    {
      badge: "Clinical Intelligence",
      title: "Science-backed assessments for true risk mitigation.",
      description: "Our proprietary scoring algorithms are developed in collaboration with clinical ergonomic experts. We don't just track checkboxes; we identify real physiological risks before they escalate into claims.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=1200&h=800&auto=format&fit=crop",
      icon: BarChart2,
      reverse: true
    },
    {
      badge: "Operational Efficiency",
      title: "Automation that respects your team's time.",
      description: "Eliminate the administrative burden of manual follow-ups. SimplyDSE automates assessment distribution, tracking, and reporting, allowing your health and safety leads to focus on strategic initiatives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&h=800&auto=format&fit=crop",
      icon: Briefcase,
      reverse: false
    }
  ];

  return (
    <section id="solutions" className="bg-bg-light">
      <div className="section-container space-y-48 md:space-y-64">
        {solutions.map((item, index) => (
          <div key={index} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-32`}>
            {/* Content Side */}
            <div className={`flex-1 space-y-10 ${item.reverse ? 'md:pl-16' : 'md:pr-16'}`}>
              <Reveal delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-strong text-text-secondary text-[11px] font-bold tracking-widest uppercase">
                  <item.icon className="w-3.5 h-3.5 text-brand-primary" />
                  {item.badge}
                </div>
              </Reveal>
              
              <Reveal delay={0.3}>
                <h2 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight leading-[1.05] text-balance">
                  {item.title}
                </h2>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-xl font-medium opacity-80">
                  {item.description}
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <button className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all group pt-4">
                  Explore Enterprise Solution
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Reveal>
            </div>

            {/* Visual Side */}
            <div className="flex-1 w-full perspective-1000">
              <Reveal delay={0.4} direction={item.reverse ? "left" : "right"}>
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle aspect-[4/3] bg-bg-muted group ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-1000`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;

