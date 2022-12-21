import clsx from 'clsx';
import React from 'react';
import Swiper from 'swiper';

interface ISwiperNavBtn {
  swiperRef?: React.RefObject<Swiper | undefined> | undefined;
  className?: string;
  withShadow?: boolean;
}

const CustomNextArrow: React.FC<ISwiperNavBtn> = ({ swiperRef, className, withShadow = true }) => {
  return (
    <div
      className={clsx(className, {
        'group flex items-center justify-center rightArrowGradient transition-all hover:rightArrowGradient h-full w-16 before:content-none z-10':
          withShadow,
      })}>
      <button
        className="p-2 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity next"
        onClick={() => swiperRef?.current?.slideNext()}>
        <svg
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
      </button>
    </div>
  );
};

export default CustomNextArrow;
