import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

const Card = ({ children, className = "", padding = true }: CardProps) => {
  return (
    <div className={`glass rounded-3xl overflow-hidden ${padding ? 'p-8' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
