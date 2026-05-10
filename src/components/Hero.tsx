import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Globe2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import HeroVisuals from './HeroVisuals';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        setIsVideoLoaded(true);
      }
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center items-center pt-32 pb-[var(--spacing-section)] overflow-hidden bg-white">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* High-quality Fallback Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop")',
            opacity: isVideoLoaded ? 0 : 0.3
          }}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${isVideoLoaded ? 'opacity-20' : 'opacity-0'}`}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-bg-light" />
      </div>

      {/* Realistic Product UI Floating Layer */}
      <HeroVisuals />

      <div className="relative z-10 section-container text-center space-y-16">
        {/* Refined Heading Hierarchy */}
        <div className="space-y-10">
          <Reveal delay={0.1} direction="down">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-border-strong shadow-sm text-text-secondary text-[11px] font-bold tracking-[0.2em] uppercase">
              <Globe2 className="w-3 h-3 text-brand-primary" />
              Empowering 400+ Enterprise Teams
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[-0.05em] text-text-primary text-balance leading-[0.85] py-2">
              DSE Compliance, <br />
              <span className="text-stroke-primary text-transparent">Redefined.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed text-balance font-medium opacity-80">
              The intelligent operating system for global organizations to automate risk 
              assessments and maintain clinical-grade safety at scale.
            </p>
          </Reveal>
        </div>

        {/* Sophisticated CTAs */}
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <button className="btn-enterprise-primary text-lg px-12 py-5 group shadow-2xl shadow-brand-primary/20">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 text-text-primary font-bold text-lg hover:text-brand-primary transition-all group">
              <div className="w-12 h-12 rounded-full border border-border-strong flex items-center justify-center group-hover:border-brand-primary transition-colors">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              See the Experience
            </button>
          </div>
        </Reveal>

        {/* Trusted By - Minimalist Stripe Style */}
        <Reveal delay={0.6}>
          <div className="pt-32 opacity-40">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-text-muted">Powering Safety for Leaders Like</p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 grayscale">
              {['Microsoft', 'Senedd', 'Virtusa', 'Alstom'].map(brand => (
                <span key={brand} className="text-xl font-black tracking-tighter text-text-primary">{brand}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(var(--color-text-primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />
    </section>
  );
};

export default Hero;


