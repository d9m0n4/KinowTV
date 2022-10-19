import clsx from 'clsx';
import React from 'react';

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(
        className,
        'flex items-center justify-center rightArrowGradient transition-all hover:rightArrowGradient h-full w-16 before:content-none',
      )}
      onClick={onClick}>
      <svg
        className="ml-6"
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.999999 1.89484L10.3333 10.1476L1 18.4003"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomNextArrow;
