import Section from './ui/Section';
import Reveal from './ui/Reveal';

const stats = [
  { label: "Assessments Completed", value: "2.4M+" },
  { label: "Active Organizations", value: "12,000+" },
  { label: "Risk Reduction", value: "85%" },
  { label: "Compliance Rate", value: "99.9%" }
];

const Metrics = () => {
  return (
    <div className="bg-bg-light py-20 border-y border-border-subtle">
      <Section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={0.1 * i} direction="up" className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-text-primary mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] md:text-[11px] text-text-secondary font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Metrics;
