import React from 'react';
import { Autoplay, Swiper as SwiperType } from 'swiper';
import { Swiper } from 'swiper/react';
import CustomNextArrow from './arrows/nextArrow';
import CustomPrevArrow from './arrows/prevArrow';

interface ISlider {
  children: React.ReactElement | React.ReactElement[];
  customNavigation?: boolean;
  direction?: 'horizontal' | 'vertical';
  autoplay?: boolean;
  reverseDirection?: boolean;
  slidesPerView?: number | 'auto';
  slidesPerGroup?: number;
  allowTouchMove?: boolean;
  speed?: number;
}

const Slider: React.FC<ISlider> = ({
  children,
  customNavigation,
  direction = 'vertical',
  autoplay = false,
  reverseDirection = false,
  slidesPerView = 4,
  slidesPerGroup = 1,
  allowTouchMove = true,
  speed = 3500,
}) => {
  const swiperRef = React.useRef<SwiperType>();

  return (
    <div className="relative">
      <Swiper
        allowTouchMove={allowTouchMove}
        lazy={{
          loadOnTransitionStart: false,
          loadPrevNext: false,
        }}
        speed={speed}
        direction={direction}
        modules={[Autoplay]}
        autoplay={
          autoplay && {
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: reverseDirection,
          }
        }
        loop
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        className="h-full">
        {children}
      </Swiper>
      {customNavigation && (
        <>
          <CustomPrevArrow swiperRef={swiperRef} className="absolute -left-2.5 top-0" />
          <CustomNextArrow swiperRef={swiperRef} className="absolute -right-2.5 top-0" />
        </>
      )}
    </div>
  );
};

export default Slider;
