import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'gray' | 'outline';
  className?: string;
}

const Badge = ({ children, variant = 'blue', className = '' }: BadgeProps) => {
  const variants = {
    blue: 'bg-blue-50 text-brand-primary border-blue-100',
    gray: 'bg-slate-50 text-text-secondary border-border-subtle',
    outline: 'bg-transparent text-text-secondary border-border-subtle',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
