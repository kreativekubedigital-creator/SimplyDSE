import Section from './ui/Section';
import Heading from './ui/Heading';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

const faqs = [
  {
    question: "How long does it take to implement SimplyDSE?",
    answer: "Most enterprise organizations are fully operational within 48 hours. Our automated onboarding ensures a smooth transition with minimal manual setup."
  },
  {
    question: "Is the platform fully GDPR compliant?",
    answer: "Yes, SimplyDSE is built on a 'Security First' architecture, ensuring full compliance with GDPR and international data protection laws."
  },
  {
    question: "Can we integrate this with our existing HR system?",
    answer: "Absolutely. SimplyDSE offers robust API integrations and built-in connectors for leading HR and identity management platforms."
  },
  {
    question: "How are the assessments distributed to employees?",
    answer: "Assessments can be automated via email, Slack, or Microsoft Teams, allowing employees to complete them in minutes on any device."
  }
];

const FAQ = () => {
  return (
    <Section id="faq" className="bg-white">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <Reveal delay={0.1} className="mx-auto">
          <Badge variant="blue">Knowledge Base</Badge>
        </Reveal>
        <Reveal delay={0.2} className="mx-auto">
          <Heading level={2} className="text-text-primary mt-6 mb-6" light>
            Frequently Asked <span className="font-bold">Questions.</span>
          </Heading>
        </Reveal>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <Reveal key={i} delay={0.1 * i} direction="up" width="100%">
            <div className="card-premium p-8">
              <h4 className="text-lg font-bold text-text-primary mb-4">{faq.question}</h4>
              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
