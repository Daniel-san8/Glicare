import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  classAttributes?: string;
}

export function Button({ children, classAttributes }: ButtonProps) {

  const classMain = "lg:bg-blue-500 lg:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <button className={`${classAttributes} ${classMain}`}>
      {children}
    </button>
  );
}

export default Button;
