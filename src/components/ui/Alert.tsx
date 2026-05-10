import React from 'react';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';

interface AlertProps {
  type: 'info' | 'success' | 'warning';
  title: string;
  children: React.ReactNode;
}

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle
};

const styles = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning'
};

const Alert = ({ type, title, children }: AlertProps) => {
  const Icon = icons[type];
  
  return (
    <div className={`alert-enterprise ${styles[type]}`}>
      <Icon className="w-5 h-5 shrink-0" />
      <div className="space-y-1">
        <p className="text-sm font-bold tracking-tight">{title}</p>
        <div className="text-sm opacity-90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Alert;
