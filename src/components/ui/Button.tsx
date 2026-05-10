import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ComponentPropsWithoutRef<typeof motion.button> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Button = ({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) => {
  const variants = {
    primary: 'btn-enterprise-primary',
    secondary: 'btn-enterprise-secondary',
    outline: 'bg-transparent border border-border-strong text-text-primary hover:bg-slate-50',
    ghost: 'bg-transparent text-text-secondary hover:bg-slate-50 hover:text-text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[12px]',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-full font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
