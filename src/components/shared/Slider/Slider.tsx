import React from 'react';
import { Autoplay, Navigation, Swiper as SwiperType } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ISlider {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  autoplay?: boolean;
  reverseDirection?: boolean;
  slidesPerView?: number | 'auto';
  slidesPerGroup?: number;
  allowTouchMove?: boolean;
  speed?: number;
  loop?: boolean;
  withShadow?: boolean;
  gap?: number;
}

const Slider: React.FC<ISlider> = ({
  children,
  withShadow = true,
  direction = 'vertical',
  autoplay = false,
  reverseDirection = false,
  slidesPerView,
  slidesPerGroup,
  allowTouchMove = true,
  speed = 15000,
  loop = false,
  gap = 0,
}) => {
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
        navigation
        spaceBetween={gap}
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
        className={`h-full ${withShadow && 'withShadow'} `}>
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
