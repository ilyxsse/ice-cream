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
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded font-semibold transition-colors duration-200 flex items-center justify-center gap-2';
  
  const variantStyles = {
    primary: disabled 
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: disabled
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: disabled
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-red-500 text-white hover:bg-red-600',
    success: disabled
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-green-500 text-white hover:bg-green-600',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
} 