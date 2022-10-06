import React from 'react';
import clsx from 'clsx';

interface IButton {
  children: React.ReactNode | React.ReactNode[] | string;
}

const Button: React.FC<IButton> = ({ children }) => {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className={clsx(
        `inline-block text-white font-medium leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out `,
      )}>
      {children}
    </button>
  );
};

export default Button;
