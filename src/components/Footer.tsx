import { Mail, Phone, MapPin, Globe, MessageSquare } from 'lucide-react';
import getAssetPath from '../utils/wp-integration';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-subtle pt-24 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src={getAssetPath('/simplydselogo.webp')} 
                alt="SimplyDSE Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-text-primary tracking-tighter">SimplyDSE</span>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-xs text-sm">
              The premium enterprise operating system for workplace compliance and employee health.
            </p>
            <div className="flex items-center gap-4 text-text-muted">
              <a href="#" className="hover:text-brand-primary transition-colors duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors duration-300">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4">
              {['Features', 'Operational Workflow', 'Risk Intelligence', 'Enterprise Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-brand-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">Resources</h4>
            <ul className="space-y-4">
              {['About SimplyDSE', 'Clinical Framework', 'Case Studies', 'Compliance Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-brand-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Info */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">Support</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <Mail className="w-4 h-4 mt-1 text-brand-primary/40" />
                <span>support@simplydse.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <Phone className="w-4 h-4 mt-1 text-brand-primary/40" />
                <span>+44 (0) 20 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 mt-1 text-brand-primary/40" />
                <span>London Headquarters,<br />United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
            © {currentYear} SimplyDSE Enterprise. Scalable Compliance.
          </p>
          <div className="flex gap-10">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-bold text-text-muted hover:text-text-primary uppercase tracking-widest transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

