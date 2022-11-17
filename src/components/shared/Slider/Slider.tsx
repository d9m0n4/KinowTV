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
  slidesPerGroup = 4,
  allowTouchMove = true,
  speed = 15000,
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
        freeMode
        modules={[Autoplay]}
        direction={direction}
        autoplay={
          autoplay && {
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: reverseDirection,
            waitForTransition: false,
          }
        }
        loop={true}
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
