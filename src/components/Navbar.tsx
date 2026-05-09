import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import getAssetPath from '../utils/wp-integration';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-6 pointer-events-none"
    >
      <nav className={`
        w-full max-w-7xl flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-500 pointer-events-auto
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-border-subtle shadow-[0_8px_32px_-8px_rgba(15,23,42,0.08)]' 
          : 'bg-white/40 backdrop-blur-md border-transparent shadow-none'}
      `}>
        <a href="/" className="flex items-center gap-3">
          <img 
            src={getAssetPath('/simplydselogo.webp')} 
            alt="SimplyDSE Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-text-primary font-bold text-xl tracking-tighter">SimplyDSE</span>
        </a>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-secondary hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
            className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-primary hover:text-brand-primary transition-colors hidden sm:block px-4"
          >
            Login
          </button>
          <button 
            className="bg-brand-primary text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/10 flex items-center gap-2 group"
            aria-label="Get Started"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            className="md:hidden text-text-primary p-2" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[100] bg-white p-8 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <a href="/" className="flex items-center gap-3">
                <img src={getAssetPath('/simplydselogo.webp')} alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-bold tracking-tighter">SimplyDSE</span>
              </a>
              <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            
            <div className="space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-4xl font-light tracking-tight text-text-primary hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="absolute bottom-12 left-8 right-8 space-y-4">
              <button className="w-full py-4 rounded-2xl border border-border-subtle font-bold text-text-primary">Login</button>
              <button className="w-full py-4 rounded-2xl bg-brand-primary text-white font-bold">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
