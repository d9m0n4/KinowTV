import React from 'react';
import clsx from 'clsx';

interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  ({ children, className, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className={clsx(
          `inline-block  
        font-medium 
        leading-tight   
        shadow-md  
        hover:shadow-lg  
        focus:shadow-lg 
        focus:outline-none 
        focus:ring-0 
        active:shadow-lg 
        transition 
        duration-150 
        ease-in-out 
        `,
          className,
        )}>
        {children}
      </button>
    );
  },
);

export default Button;
