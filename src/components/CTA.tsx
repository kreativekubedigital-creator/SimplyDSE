import Reveal from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="bg-white py-32 md:py-48">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Reveal delay={0.1}>
            <span className="badge-enterprise">Get Started</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-6xl md:text-8xl font-bold text-text-primary tracking-[-0.05em] leading-[0.9] text-balance">
              Secure your workforce. <br />
              <span className="text-brand-primary">Automate compliance.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
              Join the world's most sophisticated organizations in redefining workplace health and safety through operational intelligence.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <button className="btn-enterprise-primary text-lg px-10 py-5">
                Book Enterprise Demo
                <ArrowRight className="ml-3 w-5 h-5" />
              </button>
              <button className="text-text-primary font-bold hover:text-brand-primary transition-colors flex items-center gap-2 group">
                View Pricing Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
