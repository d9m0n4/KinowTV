import React from 'react';
import { Autoplay, Navigation, Swiper as SwiperType } from 'swiper';
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
  loop?: boolean;
}

const Slider: React.FC<ISlider> = ({
  children,
  customNavigation,
  direction = 'vertical',
  autoplay = false,
  reverseDirection = false,
  slidesPerView,
  slidesPerGroup,
  allowTouchMove = true,
  speed = 15000,
  loop = false,
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
        modules={[Autoplay, Navigation]}
        direction={direction}
        autoplay={
          autoplay && {
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: reverseDirection,
            waitForTransition: false,
          }
        }
        loop={loop}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        // breakpoints={{
        //   480: {
        //     slidesPerView: 1,
        //   },
        //   1024: {
        //     slidesPerView: 6,
        //   },
        // }}
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
