import { Mail, Phone, MapPin } from 'lucide-react';
import getAssetPath from '../utils/wp-integration';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-light border-t border-border-subtle pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={getAssetPath('/simplydselogo.webp')} 
                alt="SimplyDSE Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-text-primary tracking-tighter">SimplyDSE</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              The premium enterprise operating system for workplace compliance and employee safety.
            </p>
            {/* <div className="flex items-center gap-4 text-text-secondary">
              <a href="#" className="hover:text-brand-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div> */}
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em] mb-8">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Dashboard', 'Integrations', 'Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              {['About', 'Customers', 'Compliance', 'Privacy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Mail className="w-4 h-4 opacity-50" />
                <span>support@simplydse.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Phone className="w-4 h-4 opacity-50" />
                <span>+44 (0) 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 opacity-50" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-text-secondary/50 uppercase tracking-[0.2em]">
          <p>© {currentYear} SimplyDSE Enterprise. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
