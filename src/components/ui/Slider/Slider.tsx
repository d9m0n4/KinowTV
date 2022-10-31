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
}

const Slider: React.FC<ISlider> = ({
  children,
  customNavigation,
  direction = 'vertical',
  autoplay = false,
  reverseDirection = false,
}) => {
  const swiperRef = React.useRef<SwiperType>();

  return (
    <div className="relative">
      <Swiper
        lazy={{
          loadOnTransitionStart: false,
          loadPrevNext: false,
        }}
        speed={3500}
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
        slidesPerView={4}
        slidesPerGroup={4}
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
