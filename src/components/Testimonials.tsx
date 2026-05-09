import Section from './ui/Section';
import Heading from './ui/Heading';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

const testimonials = [
  {
    quote: "SimplyDSE transformed our compliance workflow from a logistical nightmare into a streamlined, automated process that our employees actually enjoy using.",
    author: "Jane Smith",
    role: "Head of Operations, FinTech Global",
    initials: "JS"
  },
  {
    quote: "The operational intelligence and reporting capabilities are second to none. It's the only platform that truly scales with our complex workforce.",
    author: "Mark Evans",
    role: "HSE Manager, Enterprise Corp",
    initials: "ME"
  },
  {
    quote: "A calm, intelligent platform that provides complete visibility over our distributed teams. It's an essential part of our safety stack.",
    author: "Sarah Chen",
    role: "People Partner, Innovate.io",
    initials: "SC"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <Reveal delay={0.1} className="mx-auto">
          <Badge variant="blue">Success Stories</Badge>
        </Reveal>
        <Reveal delay={0.2} className="mx-auto">
          <Heading level={2} className="text-text-primary mt-6 mb-6" light>
            Trusted by the <span className="font-bold">world's most compliant</span> organizations.
          </Heading>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={0.1 * i} direction="up" width="100%">
            <div className="card-premium p-8 md:p-10 h-full flex flex-col justify-between group hover:-translate-y-1 transition-all duration-500">
              <div>
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(star => (
                    <div key={star} className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  ))}
                </div>
                <p className="text-text-primary text-lg leading-relaxed font-medium italic mb-10">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-border-subtle pt-8">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[10px] font-bold text-brand-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-text-primary tracking-tight text-sm">{t.author}</div>
                  <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest opacity-60">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
