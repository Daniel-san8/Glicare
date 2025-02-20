import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  color?: string;
  font?: string;
  size?: string;
  weight?: string;
  width?: string | number;
  height?: string | number; 
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  color = 'bg-blue-500', 
  font = 'font-sans', 
  size = 'text-base',
  weight = "text-base",
  width = 'auto', 
  height = 'h-10' 
}) => {
  return (
    <button
      className={`${color} ${font} ${size} ${weight} ${width} ${height} text-white rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-blue-600`}
    >
      {children}
    </button>
  );
}

export default Button;
