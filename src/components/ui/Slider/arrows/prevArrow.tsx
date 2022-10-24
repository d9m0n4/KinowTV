import clsx from 'clsx';
import React from 'react';
import Swiper from 'swiper';

interface ISwiperNavBtn {
  swiperRef: React.RefObject<Swiper | undefined> | undefined;
  className?: string;
  withShadow?: boolean;
}

const CustomPrevArrow: React.FC<ISwiperNavBtn> = ({ swiperRef, className, withShadow = true }) => {
  return (
    <div
      className={clsx(className, {
        'group flex items-center justify-center hover:opacity-100 leftArrowGradient transition-all hover:leftArrowGradient h-full w-16 before:content-none z-10':
          withShadow,
      })}>
      <button
        className="p-2 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => swiperRef?.current?.slidePrev()}>
        <svg
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
      </button>
    </div>
  );
};

export default CustomPrevArrow;
