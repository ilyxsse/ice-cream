import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded font-semibold transition-colors duration-200 flex items-center justify-center gap-2';
  
  const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
} 