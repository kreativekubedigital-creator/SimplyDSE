import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  light?: boolean;
}

const Heading = ({ level = 1, children, className = '', gradient = false, light = false }: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const sizes = {
    1: `text-5xl md:text-8xl tracking-tight ${light ? 'font-light' : 'font-bold'}`,
    2: `text-3xl md:text-5xl tracking-tight ${light ? 'font-light' : 'font-bold'}`,
    3: 'text-2xl md:text-3xl font-bold tracking-tight',
    4: 'text-xl font-bold tracking-tight',
  };

  return (
    <Tag className={`${sizes[level]} text-text-primary ${gradient ? 'text-gradient leading-[1.1]' : ''} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
