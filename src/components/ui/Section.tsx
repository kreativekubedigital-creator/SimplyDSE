import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

const Section = ({ children, id, className = "", fullWidth = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 px-6 relative ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto'} w-full`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
