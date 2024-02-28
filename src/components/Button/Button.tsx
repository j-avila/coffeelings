import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
}

const Button = ({ children, styles, onClick }: ButtonProps) => {
  const customStyles = `flex justify-center items-center gap-4 p-4 text-white rounded-xl bg-slate-900 ${styles}`;

  return (
    <button className={customStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
