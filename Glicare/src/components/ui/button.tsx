import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  classAttributes: string;
}

export function Button({ children, classAttributes } : ButtonProps)  {
  return (
    <button className={`${classAttributes}`}>
      {children}
    </button>
  );
}

export default Button;
