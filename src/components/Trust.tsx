import Reveal from './ui/Reveal';
import getAssetPath from '../utils/wp-integration';

const Trust = () => {
  const logos = [
    { src: '/011%20(1).png', alt: 'AdvT' },
    { src: '/011%20(2).png', alt: 'Senedd Cymru Welsh Parliament' },
    { src: '/011%20(3).png', alt: 'Virtusa' },
    { src: '/011%20(4).png', alt: 'Vidett' },
    { src: '/011%20(5).png', alt: "Lloyd's List Intelligence" },
    { src: '/011%20(6).png', alt: 'Elliptic' },
    { src: '/011%20(7).png', alt: 'Barnett Waddingham' },
    { src: '/011%20(8).png', alt: 'Banking Circle' },
    { src: '/011%20(9).png', alt: 'Alstom' },
    { src: '/011%20(10).png', alt: 'SO Energy' },
  ];

  return (
    <section id="trust" className="bg-white border-b border-border-subtle overflow-hidden">
      <div className="section-container !py-24">
        <Reveal delay={0.1}>
          <div className="text-[11px] font-bold text-text-muted uppercase tracking-[0.3em] mb-16 text-center">
            Trusted by Global Enterprise Leaders
          </div>
        </Reveal>

        <div className="relative">
          {/* Subtle gradients to mask edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 grayscale opacity-40 hover:opacity-60 transition-opacity duration-1000">
            {logos.map((logo, i) => (
              <Reveal key={i} delay={0.2 + i * 0.05} direction="up">
                <img 
                  src={getAssetPath(logo.src)} 
                  alt={logo.alt} 
                  className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-500"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
