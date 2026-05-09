import { AlertCircle, FileWarning, Clock, Users } from 'lucide-react';
import Section from './ui/Section';
import Heading from './ui/Heading';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

const challenges = [
  {
    title: "Manual Tracking",
    description: "Spreadsheets and paper forms are impossible to manage at scale as teams grow.",
    icon: FileWarning
  },
  {
    title: "Compliance Risk",
    description: "Incomplete or outdated assessments lead to significant legal and financial liabilities.",
    icon: AlertCircle
  },
  {
    title: "Resource Drain",
    description: "HR and Health & Safety teams waste hundreds of hours on manual follow-ups.",
    icon: Clock
  },
  {
    title: "Hybrid Complexity",
    description: "Distributed and hybrid workforces make workstation monitoring difficult to verify.",
    icon: Users
  }
];

const Challenges = () => {
  return (
    <Section id="challenges" className="bg-white">
      <div className="mb-20 max-w-3xl">
        <Reveal delay={0.1}>
          <Badge variant="gray">Operational Friction</Badge>
        </Reveal>
        <Reveal delay={0.2}>
          <Heading level={2} className="text-text-primary mt-6 mb-6" light>
            Why traditional compliance <br /><span className="font-bold">fails high-growth teams.</span>
          </Heading>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-text-secondary text-lg leading-relaxed">
            Legacy systems weren't built for the scale and speed of modern enterprise environments.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        {challenges.map((challenge, i) => (
          <Reveal key={i} delay={0.1 * i} direction="up" width="100%">
            <div className="flex flex-col group">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-red-100">
                <challenge.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4 tracking-tight">{challenge.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed font-medium">{challenge.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Challenges;
