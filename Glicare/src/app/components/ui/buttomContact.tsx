import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  classAttributes?: string;
  onClick?: () => void;
}

export function Button({ children, classAttributes, onClick }: ButtonProps) {
  const classMain = "inline-flex justify-center items-center gap-2 mt-[70px] px-6 py-3 bg-primary rounded-lg hover:bg-[#3b56d7]";

  return (
    <button onClick={onClick} className={`${classMain} ${classAttributes ? classAttributes : ''}`}>
      <span className="text-background text-center text-base font-semibold leading-normal font-inter">
        {children}
      </span>
    </button>
  );
}

export default Button;
