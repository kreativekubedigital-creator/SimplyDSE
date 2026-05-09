import Section from './ui/Section';
import Heading from './ui/Heading';
import Button from './ui/Button';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { Shield, Zap, BarChart3 } from 'lucide-react';

const DesignSystem = () => {
  return (
    <div className="pt-20">
      <Section>
        <Badge variant="blue">System v1.0</Badge>
        <Heading level={1} gradient className="mt-8 mb-4">Design System</Heading>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A standardized library of premium UI components built for SimplyDSE, 
          following the principles of minimalist enterprise software.
        </p>
      </Section>

      <Section className="border-t border-white/5">
        <Heading level={2} className="mb-12">Typography</Heading>
        <div className="space-y-12">
          <div>
            <Badge className="mb-4">Heading Level 1</Badge>
            <Heading level={1}>The future of compliance.</Heading>
          </div>
          <div>
            <Badge className="mb-4">Heading Level 2</Badge>
            <Heading level={2}>Automate your workforce safety.</Heading>
          </div>
          <div>
            <Badge className="mb-4">Gradient Heading</Badge>
            <Heading level={2} gradient>Cinematic enterprise experience.</Heading>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <Heading level={2} className="mb-12">Buttons</Heading>
        <div className="flex flex-wrap gap-6 items-center">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="glass">Glass Action</Button>
          <Button variant="ghost">Ghost Action</Button>
          <Button variant="primary" size="lg">Large Button</Button>
          <Button variant="primary" size="sm">Small Button</Button>
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <Heading level={2} className="mb-12">Cards & Layout</Heading>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <Zap className="text-blue-500 w-10 h-10 mb-6" />
            <Heading level={4} className="mb-4">Real-time Insights</Heading>
            <p className="text-zinc-400 text-sm">Monitor compliance levels across your global workforce with live updates.</p>
          </Card>
          <Card className="bg-blue-600/5 border-blue-600/20">
            <BarChart3 className="text-blue-500 w-10 h-10 mb-6" />
            <Heading level={4} className="mb-4">Advanced Analytics</Heading>
            <p className="text-zinc-400 text-sm">Predictive risk modeling to identify ergonomic issues before they occur.</p>
          </Card>
          <Card>
            <Shield className="text-blue-500 w-10 h-10 mb-6" />
            <Heading level={4} className="mb-4">Enterprise Grade</Heading>
            <p className="text-zinc-400 text-sm">SAML SSO, RBAC, and data isolation built into the core infrastructure.</p>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-white/5 pb-40">
        <Heading level={2} className="mb-12">Badges</Heading>
        <div className="flex gap-4">
          <Badge variant="blue">Operational</Badge>
          <Badge variant="gray">Default</Badge>
          <Badge variant="blue">SOC2 Type II</Badge>
          <Badge variant="gray">v1.2.4</Badge>
        </div>
      </Section>
    </div>
  );
};

export default DesignSystem;
