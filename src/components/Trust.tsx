const logos = [
  { src: '/011 (1).png', alt: 'AdvT' },
  { src: '/011 (2).png', alt: 'Senedd Cymru Welsh Parliament' },
  { src: '/011 (3).png', alt: 'Virtusa' },
  { src: '/011 (4).png', alt: 'Vidett' },
  { src: '/011 (5).png', alt: "Lloyd's List Intelligence" },
  { src: '/011 (6).png', alt: 'Elliptic' },
  { src: '/011 (7).png', alt: 'Barnett Waddingham' },
  { src: '/011 (8).png', alt: 'Banking Circle' },
  { src: '/011 (9).png', alt: 'Alstom' },
  { src: '/011 (10).png', alt: 'SO Energy' },
];

const Trust = () => {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <section id="trust" className="pt-28 md:pt-32 pb-16 md:pb-20 bg-white overflow-hidden">
        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-text-secondary opacity-40 mb-12 md:mb-16 text-center">
          Trusted by Global Enterprise Leaders
        </div>

        {/* Marquee */}
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling track with inline animation */}
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee-scroll 30s linear infinite',
            }}
          >
            {/* First set */}
            {logos.map((logo, i) => (
              <img
                key={`a-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale mx-8 md:mx-12 shrink-0"
                draggable={false}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, i) => (
              <img
                key={`b-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale mx-8 md:mx-12 shrink-0"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust;
