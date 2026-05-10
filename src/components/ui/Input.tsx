import type { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
}

const Input = ({ label, error, icon: Icon, className = "", ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && <label className="label-enterprise">{label}</label>}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        )}
        <input 
          className={`input-enterprise ${Icon ? 'pl-12' : ''} ${error ? 'border-danger focus:ring-danger/5' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-[10px] font-bold text-danger uppercase tracking-wider mt-2">{error}</p>}
    </div>
  );
};

export default Input;
