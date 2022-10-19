import clsx from 'clsx';
import React from 'react';

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(
        className,
        'flex items-center justify-center leftArrowGradient transition-all hover:leftArrowGradient h-full w-16 before:content-none z-10',
      )}
      onClick={onClick}>
      <svg
        className="mr-6"
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.3333 18.4002L0.999918 10.1475L10.3333 1.89478"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomPrevArrow;
